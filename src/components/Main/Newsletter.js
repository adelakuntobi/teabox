import React from 'react'
import styled from 'styled-components'
import { DefaultBtn } from '.';
import BgImg from "../../images/bgImage.png"


const ImageDiv = styled.div`
  background: url(${BgImg});
  color: white;
  border-radius: .5rem;
  
  .opacity{
    border-radius: .5rem;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
    opacity: 2;
  }
  button{
    background-color: #02CB5A;
    padding: .65rem 2rem;
    border-radius: 0 .25rem .25rem 0;
    border: 0;
    margin-top: 0;
  }
  input{
    padding: .65rem;
    width: 20rem;
  }
  @media (max-width: 1024px) {
    button{
    border-radius: 0 0 .25rem .25rem ;
    width: 100%;
  }
  input{
    width: 100%;
  }
   }
`;

const Newsletter = () => {
  return (
    <ImageDiv className="w-11/12 container mx-auto py-6 relative my-16">
      <div className="opacity absolute top-0 right-0 h-full w-full"></div>
      <div className="md:w-3/5 p-6 md:p-16 z-20 relative md:text-xl grid grid-flow-row gap-6">
        <h1 className="text-3xl md:text-4xl font-semibold uppercase ">Sign Up to Our Newsletter</h1>
        <hr />
        <h3 className="text-lg md:text-2xl font-medium">Get <span style={{ color: "#02cb5a" }}>10% off</span> on your first purchase</h3>
        <form>
          <input placeholder="Enter your email here " type="email" className="rounded-t lg:rounded-t-none lg:rounded-l text-gray-900" />
          <DefaultBtn >JOIN US</DefaultBtn>
        </form>
      </div>
    </ImageDiv>
  )
}

export default Newsletter
