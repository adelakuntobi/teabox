import React from 'react'
import { DefaultHeader } from '.'
import Carousel from './ProductsSlider'

const Products = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto w-11/12">
        <DefaultHeader className="text-center">Our Products</DefaultHeader>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Products
