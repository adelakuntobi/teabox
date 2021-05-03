




import React from 'react';
import Slider from 'infinite-react-carousel';
import BgImg from "../images/bgImage.png"

const Carousel = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    centerPadding: 270,
    dots: true,
    duration: 500,
    accessibility: false,
    gutter: 100,
    initialSlide: true,
    shift: 30,
    className: "text-center flex flex-col-reverse tobi",
    wheel: true
  };
  return (
    <div>
      <Slider {...settings}>
        <img className="object-contain" src={BgImg} alt="carousel" />
        <img className="object-contain" src={BgImg} alt="carousel" />
        <img className="object-contain" src={BgImg} alt="carousel" />
        <img className="object-contain" src={BgImg} alt="carousel" />
        <img className="object-contain" src={BgImg} alt="carousel" />
        <img className="object-contain" src={BgImg} alt="carousel" />
        <img className="object-contain" src={BgImg} alt="carousel" />
      </Slider>
    </div>
  );
}


export default Carousel