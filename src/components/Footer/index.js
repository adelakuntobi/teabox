import React from 'react'
import Logo from "../../images/logo.png";
import { SiGooglemessages } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Footersample from './Footersample';
import styled from 'styled-components';

const TelDiv = styled.div`
  border-left: 1px solid #9098B1;
  margin-bottom: 1rem;
  
  &:hover{
    border-left: 1px solid #02cb5a;
    cursor: pointer;

  }

  svg{
    color: #02cb5a;
  }
`;

const Footer = () => {
  return (
    <footer >
      <div className=" container mx-auto w-11/12 py-12">

        <section className="grid grid-flow-row lg:grid-flow-col row-gap-10">
          <div className="flex justify-between flex-col">
            <div className="mb-12">
              <img src={Logo} alt="teabox" className=" " />
              <TelDiv className="flex items-center">
                <FiPhone className="mx-6 text-3xl my-2" /> +234 802 200 1000
          </TelDiv>
              <TelDiv className="flex items-center">
                <SiGooglemessages className="mx-6 text-3xl my-2" /> enquiries@xyz.com
          </TelDiv>
            </div>
            <div >
              <p className="uppercase font-normal color-gray">Connect with us</p>
              <div className="grid grid-flow-col gap-12  my-3 text-2xl" style={{ color: "#1E633C" }}>
                <FaFacebookSquare />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Footersample heading="discover">
              <li>Black Tea</li>
              <li>Green Tea</li>
              <li>Oolong Tea</li>
              <li>White Tea</li>
              <li>Top Sellers</li>
              <li>New Arrivals</li>
              <li className="flex items-center">Trending teas <span className="h-8 w-8 text-xs bg-red-600 rounded-full grid place-items-center text-white">HOT</span></li>
            </Footersample>
            <Footersample heading="Customer service">
              <li>Contact us</li>
              <li>Help Center</li>
              <li>Our Agents</li>
              <li>Track Order</li>
              <li>Shipping and Returns</li>
            </Footersample>
            <Footersample heading="about us">
              <li>About Teabox.com</li>
              <li>Team</li>
              <li>Brew Guide</li>
              <li>Careers</li>
            </Footersample>
            <Footersample heading="my profile">
              <li>My Dashboard</li>
              <li>Order History</li>
              <li>My Wishlist</li>
              <li>Log out</li>
            </Footersample>
          </div>
        </section>
        <hr className="my-8" />
        <section className="flex justify-between flex-col lg:flex-row uppercase color-gray text-xs md:text-sm">
          <ul className="grid gap-8 grid-flow-col mb-4 lg:mb-0">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Legal</li>
          </ul>
          <h3>© Copyright, All Rights Reserved, AfriGlobal Limited. 2020</h3>
        </section>
      </div>
    </footer>
  )
}

export default Footer
