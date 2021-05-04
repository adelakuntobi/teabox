import React from 'react'
import styled from 'styled-components';
import Products from './Products';
import Why from './Why'

export const DefaultHeader = styled.h2`
  color: #3A3A3A;
  font-weight: 600;
  font-size: 40px;
`;

const Main = () => {
  return (
    <main>
      <Why />
      <Products />
    </main>
  )
}

export default Main
