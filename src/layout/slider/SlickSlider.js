import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

export default function SlickSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    draggable: false,
    fade: true,
    pauseOnDotsHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 987,
        settings: {
          draggable: true,
          arrows: false,
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
