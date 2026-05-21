import React from 'react';

function AccountInfo() {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5 mb-5">
                <h2 class="charges-subheadings">Charges for account opening</h2>
                        <div class="table-container">
                            <table class="table  table-striped table-bordered p-3 mb-5">
                                <thead>
                                    <tr>
                                        <th>Type of account</th>
                                        <th>Charges</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Online account</td>
                                        <td><span class="free-tag" style={{backgroundColor: "rgb(0, 400, 0", width: "5%"}}>Free</span></td>
                                    </tr>
                                    <tr>
                                        <td>Offline account</td>
                                        <td><span class="free-tag" style={{backgroundColor: "rgb(0, 400, 0", width: "5%"}}>Free</span></td>
                                    </tr>
                                    <tr>
                                        <td>NRI account (offline only)</td>
                                        <td>&#8377; 500</td>
                                    </tr>
                                    <tr>
                                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                        <td>&#8377; 500</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>

                <div className="row mt-5 mb-5">
                    <h2 class="charges-subheadings">Demat AMC (Annual Maintenance Charge)</h2>
                    <div class="table-container">
                        <table class="table  table-striped table-bordered p-3">
                            <thead>
                                <tr>
                                    <th>Value of holdings</th>
                                    <th>AMC</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Up to ₹4 lakh</td>
                                    <td><span class="free-tag" style={{backgroundColor: "rgb(0, 400, 0", width: "5%"}}>Free</span></td>
                                </tr>
                                <tr>
                                    <td>₹4 lakh - ₹10 lakh</td>
                                    <td>₹ 100 per year, charged quarterly<sup>*</sup></td>
                                </tr>
                                <tr>
                                    <td>Above ₹10 lakh</td>
                                    <td>₹ 300 per year, charged quarterly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mb-5" style={{fontSize:"12px"}}>
                    * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="./support">click here</a>.
                    </p>
                    {/* note add link this ckick here with support page */}
                </div>

                <div className="row mt-5 mb-5">
                    <h2 class="charges-subheadings">Charges for optional value added services</h2>
                    <div class="table-container">
                        <table class="table  table-striped table-bordered p-3 mb-5">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Billing Frquency</th>
                                    <th>Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tickertape</td>
                                    <td>Monthly / Annual</td>
                                    <td>Free: 0 | Pro: 249/2399</td>
                                </tr>
                                <tr>
                                    <td>Smallcase</td>
                                    <td>Per transaction</td>
                                    <td>Buy &amp; Invest More: 100 | SIP: 10</td>
                                </tr>
                                <tr>
                                    <td>Kite Connect</td>
                                    <td>Monthly</td>
                                    <td>Connect: 500 | Personal: Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
}

export default AccountInfo;