import React from 'react'
import { SiGooglemessages } from "react-icons/si"
import { HiPhone } from "react-icons/hi"
import { CgSearch } from "react-icons/cg"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import Carousel from './Carousel'
import styled from 'styled-components'


const ImageText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(31px);
  color: white;
  padding: 3rem;
  z-index: 40;
  left: 4.1666666%;

  button{
    background: #02CB5A;
  }
`;


const Headertext = () => {
  return (
    <section>
      <section className="flex-center py-4 container mx-auto w-11/12">
        <div className="grid gap-4 grid-flow-col">
          <div className="flex-center">
            <HiPhone />
            <p>+234 802 200 1000</p>
          </div>
          <hr className="h-full border-r" />
          <div className="flex-center">
            <SiGooglemessages />
            <p>enquiries@xyz.com</p>
          </div>
        </div>
        <div className="grid gap-4 grid-flow-col">
          <div className="flex-center">
            <CgSearch />
            <p>Find Items...</p>
          </div>
          <hr />
          <div className="flex-center">
            <AiOutlineShoppingCart />
            <p><span>0 Items - </span> <span>₦0.00</span></p>
          </div>
          <div className="flex-center">
            <AiOutlineHeart />
            <p><span>My Wishlist -  </span> <span>₦0.00</span></p>
          </div>
        </div>
      </section>
      {/* <section className="py-8">

      </section> */}
      <div className="relative my-4">
        <ImageText className="absolute">
          <h1 className="uppercase text-5xl font-semibold leading-tight mb-2">Packed with<br/> freshness<br/> and intact </h1>
          <p className=" font-light">High-quality loose leaf tea in a<br/> convinient option</p>
          <button className="w-full block p-4 text-lg mt-10">Shop Now</button>
        </ImageText>
        <Carousel />

      </div>
    </section>
  )
}

export default Headertext
