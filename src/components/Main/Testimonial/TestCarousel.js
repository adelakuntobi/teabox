import React from 'react';
import Slider from "react-slick";
import "../../../Slider.scss"
import TestSample from './TestSample';



const Carousel = (props) => {

  var settings = {
    // className: "center",
    // centerMode: true,
     autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [

      /*
        sm:
      @media (min-width: 640px) { ... }	
      md:
      @media (min-width: 768px) { ... }	
      lg:
      @media (min-width: 1024px) { ... }	
      xl:
      @media (min-width: 1280px) { ... }	
      2xl:
      @media (min-width: 1536px) { ... }
      */


      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  return (
    <div>
      <Slider {...settings}>
        <TestSample />
        <TestSample />
        <TestSample />
        <TestSample />
        <TestSample />
        <TestSample />
        <TestSample />
        <TestSample />
        <TestSample />
        <TestSample />
      </Slider>
    </div>
  );
}


export default Carousel
