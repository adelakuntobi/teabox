import React from 'react'
import Slider from "react-slick";
import "../../Slider.scss"
import { DefaultBtn, DefaultHeader } from '.'
import Others1 from "../../images/Rectangle24.png"
import styled from 'styled-components';

const DivImg = styled(Slider)`
  img{
    margin: 1rem;
  }
`;

const Others = () => {

  var settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    duration: 500,
    accessibility: false,
    initialSlide: true,
    wheel: true,
    className: "py-4 w-8/12",
    gutter: 10,
    slidesToShow: 2,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  return (
    <div className="flex flex-col md:flex-row items-center py-8 container mx-auto">
      <div className="px-4 text-center md:text-left md:px-0 md:w-4/12">
        <DefaultHeader>Over 2 Billion cups.<br />
        To 117 countries.</DefaultHeader>
        <p>We are a culture that’s changing the way tea is perceived and consumed, one cup at a time.</p>
        <DefaultBtn>Explore More</DefaultBtn>
      </div>

      {/* <DivImg > */}
      <DivImg {...settings}>
        <div>
          <img src={Others1} alt="Others" />
        </div>
        <div>
          <img src={Others1} alt="Others" />
        </div>
        <div>
          <img src={Others1} alt="Others" />
        </div>
        <div>
          <img src={Others1} alt="Others" />
        </div>
        <div>
          <img src={Others1} alt="Others" />
        </div>
        <div>
          <img src={Others1} alt="Others" />
        </div>
        <div>
          <img src={Others1} alt="Others" />
        </div>
     
      </DivImg>
      {/* </DivImg> */}
    </div>
  )
}

export default Others
