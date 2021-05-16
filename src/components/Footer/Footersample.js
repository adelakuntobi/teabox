import React from 'react'
import styled from 'styled-components';


const FooterItem = styled.div`

  h4{
    color: #9098B1;
    font-size: 14px;
  }  
 
  li{
    margin: .75rem 0;
    cursor: pointer; 
  }
`;

const Footersample = ({ heading, children }) => {
  return (
    <FooterItem className="my-4 md:my-0">
      <h4 className="uppercase">{heading}</h4>
      <ul >
        {children}
      </ul>
    </FooterItem>
  )
}

export default Footersample
