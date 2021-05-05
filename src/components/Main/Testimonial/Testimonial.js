import React from 'react'
import { DefaultHeader } from '..'
import Newsletter from '../Newsletter'
import TestSample from './TestSample'

const Testimonial = () => {
  return (
    <div className=" py-16 bg-white">
      <div className="container w-11/12 mx-auto">
        <DefaultHeader className="text-center">What Our Customers Say</DefaultHeader>
        <div className="grid grid-cols-3 gap-6 my-12">
          <TestSample />
          <TestSample />
          <TestSample />
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default Testimonial
