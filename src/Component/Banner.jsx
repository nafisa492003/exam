import React from 'react'
import Container from './Container'
import Section from './Section'
import Flex from './Flex'
import { FaLongArrowAltRight } from "react-icons/fa";
import banner_img from '../assets/banner image .png'
const Banner = () => {
  return (
    <Section>
   <Container>
    <Flex className={`items-center flex-col-reverse lg:flex-row`}>
     <div className='mt-[50px] flex flex-col items-center justify-center lg:items-start lg:justify-start lg:mt-0'>
      <h1 className='font-normal font-raleway text-[30px] md:text-[50px] text-[#261134] w-full md:w-[516px] text-center lg:text-start'>A trusted provider of <span className='font-extrabold'>courier services.</span></h1>
      <p className='font-raleway font-normal text-[20px] text-[#4D4D4D] w-[312px] mt-4 mb-10 text-center lg:text-start'>We deliver your products safely to your home in a reasonable time.</p>
      <button className='font-oxanium font-bold text-[20px] text-white bg-orange py-3 px-5 rounded-[5px] flex items-center gap-2'>
      Get started
      <FaLongArrowAltRight className='text-white'/>
      </button>
     </div>
     <img  src={banner_img} alt="" />
    </Flex>
   </Container>
    </Section>
  )
}

export default Banner