import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import logo from '../assets/Logo.png'
import { IoSearchSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
const Nav_bar = () => {
  const [nav, setNav] = useState(false);
   return (
    <section className="py-5 bg-[#fffbf3] relative">
      <Container>
        <Flex className={`items-center justify-between`}>
          {/* logo  */}
          <img className="mb-[14px]" src={logo} alt="logo" />
          {/* logo  */}
          {/* menu */}
          <TfiMenuAlt onClick={()=>setNav(!nav)} size={35} className="text-orange md:hidden"/>
           {/* menu */}
           {/* iteams for small device */}
           {nav && (
            <div className="absolute top-[90px] p-5 w-full left-0 bg-[#f7ded5]">
             <ul className="flex flex-col gap-5">
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition duration-150 cursor-pointer">
            Home
          </li>
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition duration-150 cursor-pointer">
          Our services
          </li>
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition duration-150 cursor-pointer">
          About Us
          </li>
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition duration-150 cursor-pointer">
          What’s new?
          </li>
          </ul> 
          <Flex className={`items-center gap-2 mt-5`}>
            <button className="p-3 rounded-[6px] bg-dark_orange">
            <IoSearchSharp size={28}  className="text-light_orange"/>
            </button>
            <button className="font-oxanium font-bold text-[20px] text-white px-5 py-3 rounded-[6px] bg-orange">Contact us</button>
          </Flex>
            </div>
           )}
            {/* iteams for small device */}
          {/* items */}
          <Flex className={`items-center md:gap-5 lg:gap-[48px] hidden md:flex`}>
          <ul className="flex items-center gap-4 lg:gap-6">
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition-all duration-150 cursor-pointer">
            Home
          </li>
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition-all duration-150 cursor-pointer">
          Our services
          </li>
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition-all duration-150 cursor-pointer">
          About Us
          </li>
          <li className="font-raleway font-bold text-[16px] text-[#817382] lg:hover:font-extrabold hover:text-orange transition-all duration-150 cursor-pointer">
          What’s new?
          </li>
          </ul>
          <Flex className={`items-center gap-2`}>
            <button className="p-3 rounded-[6px] bg-light_orange">
            <IoSearchSharp size={28}  className="text-dark_orange"/>
            </button>
            <button className="font-oxanium font-bold text-[20px] text-orange px-5 py-3 rounded-[6px] bg-[#FFE4D9] hover:bg-orange hover:text-white transition-all duration-150">Contact us</button>
          </Flex>
          </Flex>
          {/* items */}
        </Flex>
      </Container>
    </section>
  );
};

export default Nav_bar;
