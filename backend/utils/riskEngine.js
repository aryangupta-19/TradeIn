const calculateRisk = (orders) => {

    const holdings = {};

    for (const order of orders) {

        const name = order.name;
        const qty = Number(order.qty);
        const price = Number(order.price);

        if (!name || !Number.isFinite(qty) || !Number.isFinite(price) || qty <= 0 || price <= 0) continue;

        if (!holdings[name]) {
            holdings[name] = {
                name,
                qty: 0,
                investedValue: 0
            };
        }
        if (order.mode === "BUY") { // BUY
            holdings[name].qty += qty;
            holdings[name].investedValue += qty * price;
        }
        if (order.mode === "SELL") {    // SELL
            const averageCost =holdings[name].qty > 0? holdings[name].investedValue / holdings[name].qty : 0;
            holdings[name].qty -= qty;
            holdings[name].investedValue -= qty * averageCost;

            if (holdings[name].qty <= 0) {
                holdings[name].qty = 0;
                holdings[name].investedValue = 0;
            }
        }
    }

    const activeHoldings = Object.values(holdings).filter(      // active holdins pick 
        (holding) => holding.qty > 0
    );

    if (activeHoldings.length === 0) {      // if no active holdings 
        return {
            score: 0,
            level: "Low",
            totalPortfolioValue: 0,
            holdingCount: 0,
            largestHolding: null,
            holdings: [],
            recommendation: "No active holdings available for risk analysis."
        };
    }
    
    const totalPortfolioValue = activeHoldings.reduce(  // initiallised with 0
        (total, holding) => total + holding.investedValue,
        0
    );

    // Calculate portfolio weight for each holding
    const analyzedHoldings = activeHoldings.map((holding) => {

        const weight = totalPortfolioValue > 0? (holding.investedValue / totalPortfolioValue) * 100: 0;
        const averageCost = holding.qty > 0? holding.investedValue / holding.qty: 0;

        return {
            name: holding.name,
            qty: holding.qty,
            investedValue: Number(holding.investedValue.toFixed(2)),
            averageCost: Number(averageCost.toFixed(2)),
            weight: Number(weight.toFixed(2))
        };
    });

    const largestHolding = analyzedHoldings.reduce( // based on weight
        (largest, current) => {
            return current.weight > largest.weight? current: largest;
        }
    );

    const largestWeight = largestHolding.weight;
    const holdingCount = analyzedHoldings.length;

    // Concentration risk
    let concentrationRisk = 0;

    if (largestWeight > 70)concentrationRisk = 70;
    else if (largestWeight > 50)concentrationRisk = 55;
    else if (largestWeight > 30)concentrationRisk = 35;
    else concentrationRisk = 10;

    // Diversification risk
    let diversificationRisk = 0;

    if (holdingCount === 1) diversificationRisk = 30;
    else if (holdingCount <= 3) diversificationRisk = 20;
    else if (holdingCount <= 5) diversificationRisk = 10;
    else diversificationRisk = 5;

    const score = Math.min(100, concentrationRisk + diversificationRisk);   // final risk score

    let level;  // risk level 

    if (score >= 70)level = "High";
    else if(score >= 40)level = "Medium";
    else level = "Low";

    let recommendation;
    if (largestWeight > 50) {
        recommendation = `Your portfolio is heavily concentrated in ${largestHolding.name}. ` + `Consider reducing exposure to your largest holding.`;
    } else if (largestWeight > 30) {
        recommendation = `Your portfolio has a relatively high concentration in ${largestHolding.name}. ` + `Consider increasing diversification.`;
    } else if (holdingCount <= 2) {
        recommendation = "Your portfolio contains only a few holdings. " + "Consider diversifying across additional positions.";
    } else {
        recommendation = "Your portfolio is reasonably diversified based on the current holdings.";
    }

    return {
        score,
        level,
        totalPortfolioValue: Number(totalPortfolioValue.toFixed(2)),
        holdingCount,
        largestHolding: {
            name: largestHolding.name,
            weight: largestHolding.weight
        },
        holdings: analyzedHoldings,
        recommendation
    };
};

module.exports = {
    calculateRisk
};