import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row">

                <div className="col">
                    <img src="./media/index-education.svg" style={{width:"75%"}}></img>
                </div>

                <div className="col mt-3 mb-5">
                    <h1 className="fs-2 mb-5">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration: "none"}}>Varsity
                        <i class="fa fa-arrow-right " aria-hidden="true" style={{textDecoration: "none"}}></i> 
                    </a>

                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration: "none"}}>TradingQ&A
                        <i class="fa fa-arrow-right " aria-hidden="true" style={{textDecoration: "none"}}></i> 
                    </a>
                </div>
                
            </div>
        </div>
     );
}

export default Education;