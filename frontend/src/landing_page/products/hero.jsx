import React from 'react';

function Hero() {
    return (
       <div className="container border-bottom">
        <div className="row text-center mt-5 p-5">
            <h2>TradeIn Products</h2>
            <p className="fs-4">Sleek, modern, and intuitive trading platforms</p>
            <p className="mb-4">Check out our  
                <a href='' style={{textDecoration: "none"}}>
                    &nbsp; investment offerings  
                    <i class="fa fa-arrow-right " aria-hidden="true" style={{textDecoration: "none"}}></i> 
                </a>
            </p>
        </div>
       </div>
    );
}

export default Hero;