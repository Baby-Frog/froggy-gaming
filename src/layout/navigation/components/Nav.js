import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SearchOutline } from "react-ionicons";
import { CartOutline } from "react-ionicons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import "../assets/scss/Nav.css";
import Logo from "../assets/images/froggy-gaming-logo.png";

const Nav = () => {
  const ionIconStyle = { fontSize: "1.3rem" };
  const cartIonIcon = { fontSize: "2.3rem" };
  const searchIonIcon = {
    position: "absolute",
    fontSize: "1.3rem",
    right: "1rem",
    top: "0.45rem",
    cursor: "pointer",
  };
  const fontAwesomeIconStyle = { fontSize: "1.3rem" };
  return (
    <>
      <div class="header">
        <div class="header-hamburger-toggle">
          <FontAwesomeIcon
            icon={faBars}
            style={fontAwesomeIconStyle}
          ></FontAwesomeIcon>
        </div>
        <div class="header-logo">
          <img src={Logo} alt="Logo" class="header-icon" />
          <span class="header-brand">
            <span>Froggy</span>
            <span>Gaming</span>
          </span>
        </div>
        <div class="header-invin-flex">
          <p>hello</p>
        </div>
        <div class="header-navigation">
          <ul class="header-navigation-list">
            <li class="header-navigation-item">Tin tức</li>
            <li class="header-navigation-item">Danh mục</li>
            <li class="header-navigation-item">Bàn phím</li>
            <li class="header-navigation-item">Chuột</li>
            <li class="header-navigation-item">Tai Nghe</li>
            <li class="header-navigation-item">Microphone</li>
            <li class="header-navigation-item">Hỗ trợ</li>
            <li class="header-navigation-item header-navigation-item--divider"></li>
            <li class="header-navigation-item">
              <SearchOutline
                width="1.5rem"
                height="1.5rem"
                style={ionIconStyle}
              ></SearchOutline>
              <form class="header-navigation-form" autocomplete="off">
                <div class="triangle"></div>
                <div class="header-navigation-form-find">
                  <input
                    type="search"
                    for="search"
                    class="header-navigation-form-input"
                    placeholder="Nhập vào sản phẩm muốn tìm"
                  />
                  <SearchOutline
                    width="1.2rem"
                    height="1.2rem"
                    style={searchIonIcon}
                  ></SearchOutline>
                </div>
              </form>
            </li>

            <li class="header-navigation-item">
              <div class="header-navigation-contact">
                <FontAwesomeIcon
                  icon={faUserGear}
                  style={fontAwesomeIconStyle}
                ></FontAwesomeIcon>
              </div>
            </li>
            <li class="header-navigation-item">
              <div class="header-navigation-cart">
                <CartOutline
                  width="2.3rem"
                  height="2.3rem"
                  style={cartIonIcon}
                ></CartOutline>
                <span>Giỏ hàng</span>
                <div class="header-navigation-cart-number">1</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
