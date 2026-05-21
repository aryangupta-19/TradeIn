import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  let [selectedMenu, setSelectedMenu] = useState(0);
  // using indexing -> 0{dashboard}, 1{orders} ..../
  let [isProfileDropDown, setProfileDropDown] = useState(false);

  let handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  let handleProfileClick = () => {
    setProfileDropDown(!isProfileDropDown);
  };

  let menuClass = "menu";
  let activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="./kite-logo (1).svg"
        alt="logo-image"
        style={{ width: "50px" }}
      />
      <div className="menus">
        <ul>
          <li>
            <Link to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}>
              <p className = {selectedMenu===0? "menu selected": "menu"}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders"
             style={{ textDecoration: "none" }}
             onClick={() => handleMenuClick(1)}>
              <p className = {selectedMenu===1? "menu selected": "menu"}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(2)}>
              <p className = {selectedMenu===2? "menu selected": "menu"}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(3)}>
              <p className = {selectedMenu===3? "menu selected": "menu"}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(4)}>
              <p className = {selectedMenu===4? "menu selected": "menu"}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps"
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(5)}>
              <p className = {selectedMenu===5? "menu selected": "menu"}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
