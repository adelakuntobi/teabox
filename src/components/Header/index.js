import React from 'react'
import styled from 'styled-components';
import Headertext from './Headertext'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Sponsors from "../../images/MaskGroup.svg"
import {DefaultBtn} from "../Main"

const BgColor = styled.div`
  position: absolute;
  width: 100%;
  height: 311px;
  right: 35%;
  top: 0px;
  z-index: 1;
  background: #E6F8ED;
`;

export const ImageText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(31px);
  color: white;
  padding: 3rem;
  z-index: 40;
  left: 4.1666666%;
  width: 28rem;
  
  @media (max-width: 1024px) { 
    
    padding: 2.5rem 1.5rem;
    left: 0;
    width: 100%;
   }
`;

const Header = () => {
  return (
    <header>
        <BgColor />
        <div className="z-10 relative">
          <Navbar />
          <Headertext />
        </div>



        <div className="relative my-4 container mx-auto px-4">
          <ImageText className=" relative lg:absolute">
            <h1 className="uppercase text-3xl md:text-5xl font-semibold leading-tight mb-2 ">Packed with freshness and intact </h1>
            <p className=" font-light">High-quality loose leaf tea in a<br /> convinient option</p>
            <DefaultBtn className="w-full block p-4 text-lg mt-10">Shop Now</DefaultBtn>
          </ImageText>
          <Carousel />

        </div>

        {/* Sponsorss */}
        <div className="py-10 bg-white">
          <img src={Sponsors} alt="Sponsors" className="py-6 container w-10/12 mx-auto bg-white" />
        </div>
    </header>
  )
}

export default Header
