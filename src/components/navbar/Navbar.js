import React from "react";
import "./Navbar.css";

// importing imge
import Logo from "../../assest/Logo.svg";
import Stroke from "../../assest/Stroke.svg";

// react icons
import * as FiIcons from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* Logo start here*/}
        <div className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </div>
        {/* Logo end here*/}
        {/* menu option */}
        <div className="navbar__menuItem">
          <ul>
            <li className="navbar__search">
              <span style={{ marginRight: ".5rem", marginTop: ".3rem" }}>
                <FiIcons.FiSearch size="1.2rem" /> 
              </span>
              <p>Search</p>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li className="navbar__account">
              <a href="#">Account</a>
              <img src={Stroke} alt="" className="navbar__stroke" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
