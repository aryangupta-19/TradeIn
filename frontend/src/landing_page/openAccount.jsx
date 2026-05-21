import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row text-center mb-5">
                <h1 className="mb-3">Open a TradeIn account</h1>
                <p className="mb-5">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link class="nav-link active" style={{marginLeft: '0'}} aria-current="page" to="/signup">
                    <button className="p-3 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto" }}>Signup Now</button>
                </Link>
                
            </div>
        </div>
    );
}

export default OpenAccount;