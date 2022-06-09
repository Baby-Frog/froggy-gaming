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
            <a href="##">Home</a>
            <a href="##">News</a>
            <a href="##">Gears</a>
            <a href="##">store</a>
          </div>
          <div className="nav__search-button">
            <i className="search-button bi bi-search"></i>
            <i className="cart-button bi bi-bag"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
