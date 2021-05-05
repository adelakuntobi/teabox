import React from 'react';
import Slider from 'infinite-react-carousel';

import EachItem from './EachItem';
import { DefaultBtn } from '.';

const Carousel = () => {

  const settings = {
    // autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    duration: 500,
    accessibility: false,
    initialSlide: true,
    wheel: true,

    className: "py-4",
    gutter: 10,
    slidesToShow: 4,
    swipe: false
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
      <DefaultBtn className="mx-auto block">Explore More</DefaultBtn>
    </div>
  );
}


export default Carousel