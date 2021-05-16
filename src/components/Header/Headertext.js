import React from 'react'

import { SiGooglemessages } from "react-icons/si"
import { HiPhone } from "react-icons/hi"
import { CgSearch } from "react-icons/cg"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"


const Headertext = () => {
  return (
    <section>
      <section className="flex-center py-4 container mx-auto w-11/12">
        <div className="hidden lg:grid gap-4 grid-flow-col">
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
        <div className="hidden md:grid gap-4 grid-flow-col">
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
 
    </section>
  )
}

export default Headertext
