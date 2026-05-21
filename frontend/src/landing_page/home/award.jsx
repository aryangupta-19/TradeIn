import React from 'react';

function Award() {
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 p-5">
              <img src="media/largestBroker.svg"></img>
            </div>

            <div className="col-6 p-5 mt-3 mb-5">
              <h1>Largest stock broker in India</h1>
              <p className="mb-5">2+ million TradeIn clients contribute to over 15% of all retail order volumes in India daily by Trading and Investing.</p>

                <div className="row">

                  <div className="col-6">
                    <ul>
                      <li>
                        <p>Features and options</p>
                      </li>
                      <li>
                        <p>Commutative derivatives</p>
                      </li>
                      <li>
                        <p>Currency derivatives</p>
                      </li>
                    </ul>
                  </div>

                <div className="col-6">
                  <ul>
                    <li>
                      <p>Stocks and IPOs</p>
                    </li>
                    <li>
                      <p>Direct mutual funds</p>
                    </li>
                    <li>
                      <p>Bonds and Government securities</p>
                    </li>
                  </ul>
                </div>
              </div>

              <img src="./media/pressLogos.png" style={{width: "90%"}}></img>

          </div>
        </div>
      </div>
    );
}

export default Award;