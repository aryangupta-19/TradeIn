import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, authLoading, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="./media/logo.svg" alt="logo" style={{width: "80%"}}></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <form className="d-flex" role="search">
                    <ul className="navbar-nav mb-lg-0">
                      {!authLoading && !isAuthenticated && (
                        <>
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/signup">
                                Signup
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/login">
                                Login
                              </Link>
                          </li>
                        </>
                      )}

                      {!authLoading && isAuthenticated && (
                        <li className="nav-item">
                          <button className="nav-link active btn btn-link" type="button" onClick={handleLogout}>
                            Logout
                          </button>
                        </li>
                      )} 
                       
                      <li className="nav-item">
                          <Link className="nav-link active" to="/about">
                          About
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" to="/products">
                          Products
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" to="/pricing">
                          Pricing
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" to="/support">
                          Support
                          </Link>
                      </li>
                    </ul>
                </form>
          {/* </div> */}
        </div>
      </nav>
  );
}

export default Navbar;
