import React from 'react'
import { DefaultBtn, DefaultHeader } from '.'
import Others1 from "../../images/Rectangle24.png"

const Others = () => {
  return (
    <div className="flex items-center ml-20 mr-8 py-8">
      <div className="w-9/12">
        <DefaultHeader>Over 2 Billion cups.<br/>
        To 117 countries.</DefaultHeader>
        <p>We are a culture that’s changing the way tea is perceived and consumed, one cup at a time.</p>
        <DefaultBtn>Explore More</DefaultBtn>
      </div>
      <div className="flex overflow-y-scroll">
        <img src={Others1} alt="Others" />
        <img src={Others1} alt="Others" />
        <img src={Others1} alt="Others" />
        <img src={Others1} alt="Others" />
        <img src={Others1} alt="Others" />
      </div>
    </div>
  )
}

export default Others
