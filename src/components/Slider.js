import React, { Component } from "react";
import Slider from "react-slick";
import "../css/Slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import isroLogo from "../assets/images/slider/isro_logo.jpg";

export default class slider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="heroSlider">
        <Slider {...settings}>
          <div className="sliderLogo">
            <img src={isroLogo} alt="" />
          </div>
          <div className="sliderLogo">
            <img src={isroLogo} alt="" />
          </div>
          <div className="sliderLogo">
            <img src={isroLogo} alt="" />
          </div>
          <div className="sliderLogo">
            <img src={isroLogo} alt="" />
          </div>
          <div className="sliderLogo">
            <img src={isroLogo} alt="" />
          </div>
          <div className="sliderLogo">
            <img src={isroLogo} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
