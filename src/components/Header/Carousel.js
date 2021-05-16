




import React from 'react';
import Slider from 'infinite-react-carousel';
import BgImg from "../../images/bgImage.png"
import { ImArrowRight2 } from "react-icons/im"
import styled from 'styled-components';
import { ImageText } from "."

const Carousel = () => {

  const settings = {
    // autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    // centerPadding: 270,
    dots: true,
    duration: 500,
    accessibility: false,
    gutter: 100,
    initialSlide: true,
    shift: 30,
    className: "text-center flex flex-col-reverse tobi",
    wheel: true
  };

  const BottomText = styled(ImageText)`
    padding: 1rem 2rem;
    z-index: 40;
    left: auto;
    width: 294px;
    margin: 2rem;
`;

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="object-contain" src={BgImg} alt="carousel" />
          <BottomText className="absolute bottom-0 right-0 text-left">
            <h2 className="text-2xl">Pure Chomile</h2>
            <p className="py-2 font-light">Tisdane</p>
            <h3 className="flex-center text-xl">Rp 17.000.000  <ImArrowRight2 style={{color: "#02CB5A"}} /></h3>
          </BottomText>
        </div>
        <div>
          <img className="object-contain" src={BgImg} alt="carousel" />
          <BottomText className="absolute bottom-0 right-0 text-left">
            <h2 className="text-2xl">Pure Chomile</h2>
            <p className="py-2 font-light">Tisdane</p>
            <h3 className="flex-center text-xl">Rp 17.000.000  <ImArrowRight2 style={{color: "#02CB5A"}} /></h3>
          </BottomText>
        </div>
        <div>
          <img className="object-contain" src={BgImg} alt="carousel" />
          <BottomText className="absolute bottom-0 right-0 text-left">
            <h2 className="text-2xl">Pure Chomile</h2>
            <p className="py-2 font-light">Tisdane</p>
            <h3 className="flex-center text-xl">Rp 17.000.000  <ImArrowRight2 style={{color: "#02CB5A"}} /></h3>
          </BottomText>
        </div>
        <div>
          <img className="object-contain" src={BgImg} alt="carousel" />
          <BottomText className="absolute bottom-0 right-0 text-left">
            <h2 className="text-2xl">Pure Chomile</h2>
            <p className="py-2 font-light">Tisdane</p>
            <h3 className="flex-center text-xl">Rp 17.000.000  <ImArrowRight2 style={{color: "#02CB5A"}} /></h3>
          </BottomText>
        </div>
        <div>
          <img className="object-contain" src={BgImg} alt="carousel" />
          <BottomText className="absolute bottom-0 right-0 text-left">
            <h2 className="text-2xl">Pure Chomile</h2>
            <p className="py-2 font-light">Tisdane</p>
            <h3 className="flex-center text-xl">Rp 17.000.000  <ImArrowRight2 style={{color: "#02CB5A"}} /></h3>
          </BottomText>
        </div>
        <div>
          <img className="object-contain" src={BgImg} alt="carousel" />
          <BottomText className="absolute bottom-0 right-0 text-left">
            <h2 className="text-2xl">Pure Chomile</h2>
            <p className="py-2 font-light">Tisdane</p>
            <h3 className="flex-center text-xl">Rp 17.000.000  <ImArrowRight2 style={{color: "#02CB5A"}} /></h3>
          </BottomText>
        </div>
      </Slider>
    </div>
  );
}


export default Carousel