import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/riskAnalysis.css";

const RiskAnalysis = () => {
    const [riskData, setRiskData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRiskAnalysis = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3002/risk-score",
                    {
                        withCredentials: true
                    }
                );

                if (response.data.success) {
                    setRiskData(response.data);
                }
            } catch (err) {
                console.error("Risk Analysis Error:", err);
                setError("Unable to load risk analysis.");
            } finally {
                setLoading(false);
            }
        };

        fetchRiskAnalysis();
    }, []);

    if (loading) {
        return (
            <div className="risk-container risk-loading">
                <i className="fa-solid fa-spinner fa-spin"></i>
                <p>Analyzing portfolio risk...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="risk-container">
                <div className="risk-error">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!riskData) {
        return null;
    }

    const getRiskClass = (level) => {
        if (level === "High") return "high";
        if (level === "Medium") return "medium";
        return "low";
    };

    const riskClass = getRiskClass(riskData.level);

    return (
        <div className="risk-container">

            {/* Header */}

            <div className="risk-header">
                <h3>Portfolio Risk Analysis</h3>

                <p>
                    Analyze the concentration and diversification
                    of your current portfolio.
                </p>
            </div>


            {/* Overview */}

            <div className="risk-overview">

                {/* Risk Score */}

                <div className="risk-card">

                    <div className="risk-card-header">
                        <span>Overall Risk</span>

                        <i className="fa-solid fa-shield-halved"></i>
                    </div>

                    <div className="risk-score-section">

                        <h1>{riskData.score}</h1>

                        <span className={`risk-badge ${riskClass}`}>
                            {riskData.level} Risk
                        </span>

                    </div>

                    <div className="risk-progress">

                        <div
                            className={`risk-progress-bar ${riskClass}`}
                            style={{
                                width: `${riskData.score}%`
                            }}
                        ></div>

                    </div>

                    <div className="risk-scale">
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                    </div>

                </div>


                {/* Invested Value */}

                <div className="risk-card">

                    <div className="risk-card-header">
                        <span>Invested Value</span>

                        <i className="fa-solid fa-wallet"></i>
                    </div>

                    <h2>
                        ₹{riskData.totalPortfolioValue.toLocaleString("en-IN")}
                    </h2>

                    <p className="risk-muted">
                        Total cost basis of active holdings
                    </p>

                </div>


                {/* Holdings */}

                <div className="risk-card">

                    <div className="risk-card-header">
                        <span>Total Holdings</span>

                        <i className="fa-solid fa-layer-group"></i>
                    </div>

                    <h2>
                        {riskData.holdingCount}
                    </h2>

                    <p className="risk-muted">
                        Active positions in portfolio
                    </p>

                </div>

            </div>


            {/* Concentration */}

            <div className="risk-section">

                <div className="risk-section-title">

                    <i className="fa-solid fa-chart-pie"></i>

                    <span>Portfolio Concentration</span>

                </div>


                <div className="concentration-card">

                    <div className="concentration-info">

                        <div>
                            <p className="risk-label">
                                Largest Holding
                            </p>

                            <h4>
                                {riskData.largestHolding.name}
                            </h4>
                        </div>

                        <div className="concentration-weight">
                            {riskData.largestHolding.weight.toFixed(2)}%
                        </div>

                    </div>


                    <div className="risk-progress concentration">

                        <div
                            className={`risk-progress-bar ${riskClass}`}
                            style={{
                                width: `${riskData.largestHolding.weight}%`
                            }}
                        ></div>

                    </div>

                    <p className="risk-muted">
                        Percentage of total invested value represented
                        by your largest holding.
                    </p>

                </div>

            </div>


            {/* Recommendation */}

            <div className="risk-section">

                <div className="risk-section-title">

                    <i className="fa-solid fa-lightbulb"></i>

                    <span>Risk Recommendation</span>

                </div>


                <div className={`recommendation ${riskClass}`}>

                    <div className="recommendation-icon">
                        <i className="fa-solid fa-lightbulb"></i>
                    </div>

                    <div>
                        <h5>
                            {riskData.level} Risk Portfolio
                        </h5>

                        <p>
                            {riskData.recommendation}
                        </p>
                    </div>

                </div>

            </div>


            {/* Holdings Analysis */}

            <div className="risk-section">

                <div className="risk-section-title">

                    <i className="fa-solid fa-table-list"></i>

                    <span>Holdings Analysis</span>

                </div>


                <div className="risk-table">

                    <table>

                        <thead>

                            <tr>
                                <th>Stock</th>
                                <th>Quantity</th>
                                <th>Average Cost</th>
                                <th>Invested Value</th>
                                <th>Portfolio Weight</th>
                            </tr>

                        </thead>


                        <tbody>

                            {riskData.holdings.map((holding, index) => (

                                <tr key={index}>

                                    <td className="stock-name">
                                        {holding.name}
                                    </td>

                                    <td>
                                        {holding.qty}
                                    </td>

                                    <td>
                                        ₹{holding.averageCost.toLocaleString("en-IN")}
                                    </td>

                                    <td>
                                        ₹{holding.investedValue.toLocaleString("en-IN")}
                                    </td>

                                    <td>

                                        <div className="weight-container">

                                            <div className="weight-progress">

                                                <div
                                                    className="weight-progress-bar"
                                                    style={{
                                                        width: `${holding.weight}%`
                                                    }}
                                                ></div>

                                            </div>

                                            <span>
                                                {holding.weight.toFixed(2)}%
                                            </span>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default RiskAnalysis;