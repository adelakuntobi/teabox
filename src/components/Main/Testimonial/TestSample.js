import React from 'react'
import User from "../../../images/avatar.jpg"

const TestSample = () => {
  return (
    <div className="p-4 my-4 mx-3" style={{background: "#F6FEFA"}}>
      <div className="flex items-start">
        <img src={User} alt="user" className="w-24 rounded-lg mr-3 object-contain" />
        <div>
          <h4 className="mb-4 text-lg font-medium">Adelakun Tobi</h4>
          <p className="text-xs">"Amazing quality, product choice, and customer service.
Tracking the order is also a great convenience. Thank you Teabox!"</p>
        </div>
      </div>
      <p className="text-right mt-3">Lagos, Nigeria</p>
    </div>
  )
}

export default TestSample
