import React from 'react';
import Slider from "react-slick";
import EachItem from './EachItem';
import { DefaultBtn } from '.';
import "../../Slider.scss"



const Carousel = (props) => {





  // const settings = {
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   dots: true,
  //   duration: 500,
  //   accessibility: false,
  //   initialSlide: true,
  //   wheel: true,
  //   className: "py-4",
  //   gutter: 10,
  //   slidesToShow: carouselNum,
  //   swipe: false
  // };


  // dots: true,
  // infinite: true,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  // cssEase: "linear"

  var settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    duration: 500,
    accessibility: false,
    initialSlide: true,
    wheel: true,
    className: "py-4",
    gutter: 10,
    slidesToShow: 4,
    swipe: false,
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
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  return (
    <div>
      <Slider {...settings}>
        <EachItem />
        <EachItem />
        <EachItem />
        <EachItem />
        <EachItem />
        <EachItem />
        <EachItem />
        <EachItem />
      </Slider>
      {/* <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing
      </button> */}
      <DefaultBtn className="mx-auto block mt-6">Explore More</DefaultBtn>
    </div>
  );
}


export default Carousel








































/*
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