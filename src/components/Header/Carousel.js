




import React from 'react';
import Slider from 'react-slick';
import BgImg from "../../images/bgImage.png"
import { ImArrowRight2 } from "react-icons/im"
import styled from 'styled-components';
import { ImageText } from "."

const Carousel = () => {

  const settings = {
    // autoplay: true,
    // autoplaySpeed: 6000,
    // center: true,
    // centerPadding: 270,
    // dots: true,
    // duration: 500,
    // accessibility: false,
    // gutter: 100,
    // initialSlide: true,
    // infinite: true,
    // slidesToShow: 1,
    // shift: 30,
    // wheel: true,
    
    infinite: true,
    centerPadding: "150px",
    centerMode: true,
    className: "tobi z-10 relative",
    slidesToShow: 1,
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
          centerPadding: "50px",
        }
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "15px",
        }
      }
    ]
  };



  const BottomText = styled(ImageText)`
    padding: 1rem 2rem;
    z-index: 40;
    left: auto;
    width: 294px;
    margin: 2rem;
    
    @media (max-width: 640px) { 
      padding: .5rem 1rem;
      font-size: small;
      width: 100%;
      margin: .5rem 0;

     }	
`;

  return (
    // <div>
    <Slider {...settings}>
    
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
      <div className="px-1 my-10 md:my-0 sm:px-3 relative">
        <img className="object-contain" src={BgImg} alt="carousel" />
        <BottomText className="sm:absolute bottom-0 right-0 text-left">
          <h2 className="text-xl sm:text-2xl">Pure Chomile</h2>
          <p className="py-2 font-light">Tisdane</p>
          <h3 className="flex-center text-lg sm:text-xl">Rp 17.000.000  <ImArrowRight2 style={{ color: "#02CB5A" }} /></h3>
        </BottomText>
      </div>
    
      

    </Slider>
    // </div>
  );
}


export default Carousel