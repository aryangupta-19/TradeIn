import React from 'react';

function Hero() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row text-center mt-5">
                <h3 className="mt-5">Charges</h3>
                <p className="fs-5 text-muted">List of all charges and taxes.</p>
            </div>

            <div className="row mt-5 text-center">
                <div className="col mt-5 p-5">
                    <div className="priceContain text-cetner">
                        <img src='./media/pricing0.svg' alt="0-Image" style={{width: "70%"}}></img>
                        <h2>Free equity delivery</h2>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                </div>

                <div className="col mt-5 p-5">
                    <div className="priceContain text-cetner">
                        <img src='./media/other-trades.svg' alt="0-Image" style={{width: "70%"}}></img>
                        <h2>Free equity delivery</h2>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                </div>

                <div className="col mt-5 p-5">
                    <div className="priceContain text-cetner">
                        <img src='./media/pricing0.svg' alt="0-Image" style={{width: "70%"}}></img>
                        <h2>Free equity delivery</h2>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;