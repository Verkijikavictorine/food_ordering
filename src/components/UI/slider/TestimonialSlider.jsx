import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "I've tried other food delivery services, but SNAPVOR's customer support 
          truly sets them apart. Whenever I've had an issue with my order, their team 
          has been quick to respond and resolve it. It's refreshing to know they genuinely 
          care about their customers' satisfaction."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Kanjo El</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "SNAPVOR has made my life so much easier! I love being able to order 
          from my favorite restaurants no matter where I am. The app is super easy to use, 
          and the delivery always arrives on time. 5 stars!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Tamba Joyce</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "As a busy professional, I rely on SNAPVOR to provide me with delicious meals when 
          I don't have time to cook. Their wide range of restaurant options and seamless ordering 
          process make it my go-to food delivery platform. Highly recommend!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steve Jr</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
