import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 text-center mb-5 p-5">
          <img
            src="./media/nithinKamath.jpg"
            alt="Nitin Kamath"
            style={{ borderRadius: "50%", width: "45%" }}
          ></img>
          <p className="fs-5">Nithin Kamath</p>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6 mb-5 p-5">
          <h4>People</h4>
          <p> Aryan Gupta started his journey in tech to overcome the challenges he faced while learning development and problem solving. Over time, he has built a strong skill set in Data Structures, Web Development, and backend systems.</p>

          <p>Today, Aryan is focused on becoming a skilled full-stack developer and contributing to impactful projects and open-source communities.</p>

          <p>Building projects and solving problems is his zen.</p>
          
          <p> Connect on <a href="https://www.linkedin.com/in/aryan-gupta-it-nits/">LinkedIn</a> / <a href='https://github.com/aryangupta-19'>Github</a> / <a href='#'>Instagram</a></p>
        </div>
      </div>
      <div className="row text-center p-3">
        <div className="col mt-5 mb-5">
          <div className="img-container mt-5 mb-5">
            <img
              src="./media/Nikhil.jpg"
              alt="Nitin Kamath"
              style={{ borderRadius: "50%", width: "55%" }}
            ></img>
            <p className="fs-5">Nikhil Kamath</p>
            <p className="text-muted">Founder, CEO</p>
          </div>
          <div className="img-container mt-5 mb-5">
            <img
              src="./media/Seema.jpg"
              alt="Nitin Kamath"
              style={{ borderRadius: "50%", width: "55%" }}
            ></img>
            <p className="fs-5">Dr. Kailash Nadh</p>
            <p className="text-muted">Director</p>
          </div>
        </div>
        <div className="col mt-5 mb-5">
          <div className="img-container mt-5 mb-5">
            <img
              src="./media/Kailash.jpg"
              alt="Nitin Kamath"
              style={{ borderRadius: "50%", width: "55%" }}
            ></img>
            <p className="fs-5">Nithin Kamath</p>
            <p className="text-muted">CTO</p>
          </div>
          <div className="img-container mt-5 mb-5">
            <img
              src="./media/karthik.jpg"
              alt="Nitin Kamath"
              style={{ borderRadius: "50%", width: "55%" }}
            ></img>
            <p className="fs-5">Karthik Rangappa</p>
            <p className="text-muted">Chief of Education</p>
          </div>
        </div>
        <div className="col mt-5 mb-5">
          <div className="img-container mt-5 mb-5">
            <img
              src="./media/Venu.jpg"
              alt="Nitin Kamath"
              style={{ borderRadius: "50%", width: "55%" }}
            ></img>
            <p className="fs-5">Venu Madhav</p>
            <p className="text-muted">COO</p>
          </div>
          <div className="img-container mt-5 mb-5">
            <img
              src="./media/Austin.jpg"
              alt="Nitin Kamath"
              style={{ borderRadius: "50%", width: "55%" }}
            ></img>
            <p className="fs-5">Austin Prakesh</p>
            <p className="text-muted">Director Strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
