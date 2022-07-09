import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "../assets/scss/slider.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="NextArrow" onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="PrevArrow" onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
}

class ReactCustomArrow extends React.Component {
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
      cssEase: "cubic-bezier(0.7, 0.2, 0.6, 0.45)",
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
            fade: false,
          },
        },
      ],
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
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
    );
  }
}

export default ReactCustomArrow;
