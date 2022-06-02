import React from "react";
import "../assets/css/Nav.css";
import Logo from "../assets/images/Logo.png";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav">
          <div className="nav__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav__page-router">
            <a href="##">home</a>
            <a href="##">news</a>
            <a href="##">gears</a>
            <a href="##">store</a>
          </div>
          <div className="nav__search-button">
            <i class="search-button bi bi-search"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;