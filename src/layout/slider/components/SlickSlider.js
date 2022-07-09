import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/slider.css";

class ReactCustomArrow extends React.Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <ButtonBase
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <ArrowLeft />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <ArrowRight />
        </ButtonBase>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div style={{ position: "relative", marginTop: "2rem" }}>
          {this.renderArrows()}
          <Slider
            ref={(c) => (this.slider = c)}
            dots={true}
            arrows={false}
            slidesToShow={1}
          >
            <div class="image-item">
              <div class="image">
                <img
                  src="https://akkogear.com.vn/wp-content/uploads/2021/12/akko_gw_03.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="image-item">
              <div class="image">
                <img
                  src="https://akkogear.com.vn/wp-content/uploads/2022/05/ACRPRO_Banner_Upload.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="image-item">
              <div class="image">
                <img
                  src="https://akkogear.com.vn/wp-content/uploads/2022/05/MOD008_banner_01.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="image-item">
              <div class="image">
                <img
                  src="https://akkogear.com.vn/wp-content/uploads/2021/11/akko-5108S-zaychik-banner-01.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="image-item">
              <div class="image">
                <img
                  src="https://aerocool.io/wp-content/uploads/2019/10/EARL-Gaming-Chair-BG-1920x700-01_KV.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="image-item">
              <div class="image">
                <img
                  src="https://ae01.alicdn.com/kf/Hf96f47951f794680bf4e4916bbffb3227.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="image-item">
              <div class="image">
                <img
                  src="https://akkogear.com.vn/wp-content/uploads/2022/04/z3354798047230_dff228a8cb13d117941e5d0f0eb113ac-2048x747.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="image-item">
              <div class="image">
                <img
                  src="https://akkogear.com.vn/wp-content/uploads/2022/04/AKKO-3098B-3098N-Banner.jpg"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ReactCustomArrow;
