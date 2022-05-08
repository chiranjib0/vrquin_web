import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/MainHeader.css";

import logo from "../assets/images/vrquin_logo.png";

function MainHeader() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navBar">
      <div className="navLeft">
        <div className="links " id={showLinks ? "hidden" : ""}>
          <NavLink to="/holo_x">HOLO-X</NavLink>
          <NavLink to="/Trans_x">TRANS-X</NavLink>
          <NavLink to="/maya">MAYA</NavLink>
          <NavLink to="/service">SERVICE</NavLink>
          <NavLink to="/about_us">ABOUT US</NavLink>
        </div>
      </div>

      <div className="navCenter">
        <NavLink to="/home">
          <img src={logo} alt="vrquin logo" />
        </NavLink>
      </div>

      <div className="navRight">
        <div className="links">
          <a href="tel:18008897846">1800-889-7846</a>
          <NavLink to="/contact_us">CONTACT US</NavLink>
          <NavLink to="/support">SUPPORT</NavLink>
        </div>
        <button
          className="menuButton"
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
