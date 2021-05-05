import React from 'react'
import styled from 'styled-components';


const FooterItem = styled.div`
        /* text-align: center;
      &:last-of-type{
        text-align: right;
      } */

  h4{
      color: #9098B1;
      font-size: 14px;
    }

  

  
    li{
      margin: .75rem 0;
    }
`;

const Footersample = ({ heading, children }) => {
  return (
    <FooterItem>
      <h4 className="uppercase">{heading}</h4>
      <ul >
        {children}
      </ul>
    </FooterItem>
  )
}

export default Footersample
