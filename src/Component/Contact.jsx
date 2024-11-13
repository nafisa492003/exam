import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import contact_img from '../assets/Illustration.png'
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {
  return (
    <Section>
        <div className='w-full lg:w-[872px] mx-auto px-3'>
            <Flex className={`items-center gap-6 flex-col lg:flex-row`}>
            <div className='flex flex-col items-center justify-center w-full lg:w-1/2 lg:items-start lg:justify-start'>
            <img src={contact_img} alt="" />
            <h3 className='font-oxanium font-bold text-[24px] text-orange'>REQUEST A CALLBACK</h3>
            <h2 className='font-extrabold font-raleway text-gray_drak md:text-[40px] text-[30px] w-full lg:w-[412px] text-center lg:text-start'>We will contact in the shortest time.</h2>
            <h5 className='font-semibold font-raleway text-[25px] text-[#9291A1]'>Monday to Friday, 9am-5pm.</h5>
            </div>
            <div className='w-full lg:w-1/2'>
                 <input className='w-full px-5 py-4 lg:w-[424px] rounded-[5px] border-[2px] border-[#C5C5D2] outline-none bg-transparent font-raleway font-normal text-[16px] text-[#9291A1] placeholder:text-[#9291A1] mb-4' placeholder='Name' type="text" />
                 <input className='w-full px-5 py-4 lg:w-[424px] rounded-[5px] border-[2px] border-[#C5C5D2] outline-none bg-transparent font-raleway font-normal text-[16px] text-[#9291A1] placeholder:text-[#9291A1] mb-4' placeholder='Email' type="text" />
                 <textarea className='w-full px-5 pt-3 pb-[118px] lg:w-[424px] rounded-[5px] border-[2px] border-[#C5C5D2] outline-none bg-transparent font-raleway font-normal text-[16px] text-[#9291A1] placeholder:text-[#9291A1] mb-4' placeholder="Message"/>
                 <button className='flex items-center justify-center w-full lg:w-[424px] gap-2 py-[12px] font-oxanium font-bold text-[24px] text-white bg-orange rounded-[5px]'>Send Message <FaPaperPlane /></button>
            </div>
            </Flex>
        </div>
    </Section>
  )
}

export default Contact