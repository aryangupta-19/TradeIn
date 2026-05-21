import React from "react";

function Hero() {
  return (
      <div class="bg-body-tertiary">

        <div class="container">
            <div className="row">

                <div className="col-4 mt-5 mb-5">
                    <h1>Support Portal</h1>
                </div>

                <div className="col-6"></div>

                <div className="col-2 mt-5 mb-5">
                    <a href="https://kite.zerodha.com/connect/login?api_key=supportportal&sess_id=pK6JuNePvfoDNHbgxZ8NgbCayOVdZaGF"><button className="btn btn-primary mx-5">My Ticket</button></a>
                </div>

            </div>

            <div className="row mb-5">
                <form class="d-flex mb-5" role="search">
                    <input
                    class="form-control me-5"
                    type="search"
                    placeholder="Eg. How do I Open my Account, How do I activate F&Q."
                    aria-label="Search"
                    style={{height: "4rem"}}
                    />
                 </form>
            </div>
        </div>
      </div>
  );
}

export default Hero;
