import React from 'react';

function BrokeragePage() {
    return (
        <div className="container py-5 mt-5 mb-5">
            <h3 className="mb-4">Equity</h3>

            <div className="table-responsive">
                <table className="table table-bordered align-middle text-center">
                
                <thead className="table-light">
                    <tr>
                    <th></th>
                    <th>Equity Delivery</th>
                    <th>Equity Intraday</th>
                    <th>F&O - Futures</th>
                    <th>F&O - Options</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td className="fw-semibold text-start">Brokerage</td>
                    <td>Zero Brokerage</td>
                    <td>0.03% or ₹20/order</td>
                    <td>0.03% or ₹20/order</td>
                    <td>₹20 per order</td>
                    </tr>

                    <tr className="table-light">
                    <td className="fw-semibold text-start">STT/CTT</td>
                    <td>0.1% on buy & sell</td>
                    <td>0.025% on sell side</td>
                    <td>0.02% on sell side</td>
                    <td>
                        <ul className="text-start mb-0 ps-3">
                        <li>0.125% on exercised options</li>
                        <li>0.1% on sell (premium)</li>
                        </ul>
                    </td>
                    </tr>

                    <tr>
                    <td className="fw-semibold text-start">Transaction Charges</td>
                    <td>NSE: 0.00307% <br /> BSE: 0.00375%</td>
                    <td>NSE: 0.00307% <br /> BSE: 0.00375%</td>
                    <td>NSE: 0.00183% <br /> BSE: 0</td>
                    <td>NSE: 0.03553% <br /> BSE: 0.0325%</td>
                    </tr>

                    <tr className="table-light">
                    <td className="fw-semibold text-start">GST</td>
                    <td colSpan="4">18% on (brokerage + SEBI + transaction charges)</td>
                    </tr>

                    <tr>
                    <td className="fw-semibold text-start">SEBI Charges</td>
                    <td colSpan="4">₹10 / crore</td>
                    </tr>

                    <tr className="table-light">
                    <td className="fw-semibold text-start">Stamp Charges</td>
                    <td>0.015% or ₹1500/crore (buy)</td>
                    <td>0.003% or ₹300/crore (buy)</td>
                    <td>0.002% or ₹200/crore (buy)</td>
                    <td>0.003% or ₹300/crore (buy)</td>
                    </tr>

                </tbody>
                </table>
            </div>

            <h4 className="mt-3 text-muted mb-5"> <a className="light-primary" href='https://zerodha.com/brokerage-calculator#tab-equities' style={{textDecoration: "none", marginLeft: "30%"}}>Calculate your costs upfront</a> using our brokerage calculator</h4>
        </div>
    );
}

export default BrokeragePage;
