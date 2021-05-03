import React from 'react'
import styled from 'styled-components';
import Headertext from './Headertext'
import Navbar from './Navbar'

const BgColor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 35%;
  top: 0px;
  z-index: 1;
  background: #E6F8ED;
`;

const Header = () => {
  return (
    <header>
      <BgColor />
      <div className="z-10 relative">
        <Navbar />
        <Headertext />
      </div>
    </header>
  )
}

export default Header
