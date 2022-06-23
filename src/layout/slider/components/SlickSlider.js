import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/slider.css";

const SampleNextArrow = () => {
  return (
    <div className="NextArrow">
      <FontAwesomeIcon className="i" icon={faAngleRight}></FontAwesomeIcon>
    </div>
  );
};
const SamplePrevArrow = () => {
  return (
    <div className="PrevArrow">
      <FontAwesomeIcon className="i" icon={faAngleLeft}></FontAwesomeIcon>
    </div>
  );
};

export default class SlickSlider extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "cubic-bezier(0.8, -0.5, 0.7, 1)",
      draggable: false,
      fade: true,
      arrows: true,
      pauseOnDotsHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 987,
          settings: {
            draggable: true,
            arrows: false,
            fade: false,
            cssEase: "cubic-bezier(0.6, 0.4, 0.7, 1)",
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
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
    );
  }
}
