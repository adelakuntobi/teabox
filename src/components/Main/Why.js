import React from 'react'
import { DefaultBtn, DefaultHeader } from '.';
import WhyTB from "../../images/image13.svg"




const Why = () => {
  return (
    <div className="py-10 container mx-auto w-11/12">
      <DefaultHeader>Why Teabox is the Freshest</DefaultHeader>
      <p>Teabox connects tea to people. Not to distributors. Not to resellers. But to tea drinkers</p>
      <img src={WhyTB} alt="why" />
      <DefaultBtn className="block ml-auto mr-0">Explore More</DefaultBtn>
    </div>
  )
}

export default Why
