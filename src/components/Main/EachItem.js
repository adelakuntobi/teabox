import React, { useState } from 'react'
import ProductImg from "../../images/image1.png"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { HiShare, HiHeart, HiOutlineHeart } from "react-icons/hi"

import styled from 'styled-components'
import { DefaultBtn } from '.'

const ModalDiv = styled.div`
  color: white;
  background-color: #3a3a3a8c;
  button{
    background-color: white;
    color:#02CB5A;
    width: 100%;
  }

.pop{

  svg{
    transition-duration: .25s;

  }
}
`;


const EachItem = () => {
  const [hoverState, setHoverState] = useState(false)
  const [likeState, setLikeState] = useState(false)
  const overFunction = () => {
    setHoverState(true)
  }
  const outFunction = () => {
    setHoverState(false)
  }

  const likeFunc = () => {
    if (likeState === true) {
      setLikeState(
        Opennav => Opennav = false
      )
    }
    else {
      setLikeState(
        Opennav => Opennav = true
      )
    }
  }

  return (
    <div onMouseOver={overFunction} onMouseOut={outFunction}
      className="mx-auto relative" style={{ backgroundColor: "#F4F5F7", width: "18rem" }}>
      <img src={ProductImg} alt="Products" className="mx-auto" />
      <div className="p-5 text-xl">
        <p className="flex items-center">3.5
            <div className="flex  ml-3" style={{ color: "#FBBC04" }}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
          </div>
        </p>
        <h3 className="uppercase font-medium text-2xl">PURE CHAMOMILE</h3>
        <p className="py-1">Tisdane</p>
        <h4 className="flex justify-between items-center">Rp 2.500.000 '
        <s className="text-gray-400 text-base" style={{ color: "#B0B0B0" }}>Rp 3.500.000</s></h4>
      </div>
      <ModalDiv className={hoverState ? "absolute top-0 left-0 z-20 h-full w-full grid place-items-center" : "hidden"}>
        <div className="w-full p-5">
          <DefaultBtn>Add to Cart</DefaultBtn>
          <div className="flex-center text-xl my-4">
            <div className="flex items-center cursor-pointer"><HiShare className="mr-2 text-3xl" /> Share</div>
            <div className="flex items-center cursor-pointer pop" onClick={likeFunc}>
              {
                likeState ? <HiHeart className="mr-2 text-3xl" /> :
                  <HiOutlineHeart className="mr-2 text-3xl" />
              }
              Like</div>
          </div>
        </div>
      </ModalDiv>
    </div>

  )
}

export default EachItem
