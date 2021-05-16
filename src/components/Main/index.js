import React from 'react'
import styled from 'styled-components';
import Others from './Others';
import Products from './Products';
import Testimonial from './Testimonial/Testimonial';
import Why from './Why'

export const DefaultHeader = styled.h2`
  color: #3A3A3A;
  font-weight: 600;
  font-size: 40px;
  @media (max-width: 768px) { 
    font-size: 27px;
   }

`;

export const DefaultBtn = styled.button`
  background: #02CB5A;
  padding: .75rem 2.5rem;
  color: #fff;
  border-radius: .25rem;
  margin-top: 1.5rem;
  border: 1px solid transparent;
  transition-duration: 0.5s;
  &:hover{
    /* Color */
    /* background-color: white; */
    /* border-color: #02CB5A; */
    /* color: #02CB5A; */

    /* Shadow */
    box-shadow: 0 2px 8px 1px rgb(0 22 144 / 32%);
    border-color: rgba(223,225,229,0);
    transform: translateY(-7px)
  }
  `;



const Main = () => {
  return (
    <main>
      <Why />
      <Products />
      <Others />
      <Testimonial />
    </main>
  )
}

export default Main
