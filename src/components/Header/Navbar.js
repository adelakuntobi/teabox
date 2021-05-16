import React from 'react'
import Logo from '../../images/tearbox.svg';
import Avatar from '../../images/avatar.jpg';
import { MdKeyboardArrowDown } from "react-icons/md"
import { FiGlobe } from "react-icons/fi"





const Navbar = () => {
  return (
    <nav className=" border-b  ">
      <section className="mx-auto w-11/12 container flex justify-between items-center py-4">

        <div className="flex justify-between items-center ">
          <img src={Logo} alt="logo" />
          <ul style={{color: "#3A3A3A"}} className="hidden md:grid gap-6 grid-flow-col mx-6 nav-items">
            <li>About</li>
            <li>Blog</li>
            <li className="flex-center">Products
            <MdKeyboardArrowDown /> </li>
            <li className="flex-center">Speciality
            <MdKeyboardArrowDown /> </li>
          </ul>
        </div>
        <div className=" hidden lg:grid gap-6 grid-flow-col">
          <div className="flex-center">
            <img className="rounded-full w-10 h-10" src={Avatar} alt="User's Avatar" />
            <span style={{color: "#206840"}} className="px-3 font-medium">Hi Adelakun!</span>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <div className="grid gap-4 grid-flow-col place-items-center">
            <FiGlobe style={{color: "#9098B1"}} className="text-xl" />
            <p className=" font-normal">English (INTL)</p>
            <MdKeyboardArrowDown style={{color: "#9098B1"}} className="text-xl" />
          </div>
        </div>

        
      </section>
    </nav>
  )
}

export default Navbar
