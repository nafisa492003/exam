import React from "react";
import Section from "./Section";
import Container from "./Container";
import Flex from "./Flex";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const Find_us = () => {
  return (
    <Section>
      <Container>
        {/* title */}
        <Flex
          className={`items-center justify-center gap-3 mb-10 lg:mb-20 flex-col`}
        >
          <h2 className="font-oxanium font-bold text-[30px] text-orange">
            FIND US
          </h2>
          <h1 className="font-extrabold font-raleway text-[30px] md:text-[40px] text-[#11111D]">
            Access us easily
          </h1>
        </Flex>
        {/* title */}
        <Flex className={`gap-6 md:gap-3 lg:gap-6 flex-col md:flex-row`}>
          <div className="w-full md:w-1/2 lg:w-[760px]  h-[428px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0622237251328!2d90.40339077479075!3d23.709471890347462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b903867c09a9%3A0x52ab4862eda6d3bc!2sNawab%20Bari%20Jame%20Masjid!5e0!3m2!1sen!2sbd!4v1731532261164!5m2!1sen!2sbd"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full p-8 bg-white rounded-lg lg:p-20 lg:w-[530px] md:w-1/2">
            <h5 className="font-raleway font-bold text-[20px] text-gray_drak mb-5 lg:mb-9">Contact with us</h5>
            <Flex className={`flex-col gap-4 mb-6 lg:mb-[50px]`}>
               <Flex className={`items-center gap-3`}>
               <IoLocationOutline className="text-[28px] text-dark_orange"/>
               <span className="font-raleway font-normal text-[16px] text-gray_light">2277 Lorem Ave, San Diego, CA 22553</span>
                </Flex> 
                <Flex className={`items-center gap-3`}>
               <FaRegClock className="text-[28px] text-dark_orange"/>
               <span className="font-raleway font-normal text-[16px] text-gray_light">Monday - Friday: 10 am - 10pm <br/>
               Sunday: 11 am - 9pm</span>
                </Flex>
                <Flex className={`items-center gap-3`}>
               <MdOutlineMail className="text-[28px] text-dark_orange"/>
               <span className="font-raleway font-normal text-[16px] text-gray_light">info@quriarbox.com</span>
                </Flex>
            </Flex>
            <Flex className={`items-center gap-6`}>
            <ImFacebook2  className="transition-all duration-150 text-gray_light hover:text-orange text-[24px] cursor-pointer"/> 
            <FaInstagram  className="transition-all duration-150 text-gray_light hover:text-orange text-[24px] cursor-pointer"/> 
            <FaTwitter  className="transition-all duration-150 text-gray_light hover:text-orange text-[24px] cursor-pointer"/>  
            </Flex>
          </div>
        </Flex>
        <button className='flex items-center justify-center w-full md:w-[560px] gap-2 py-[12px] font-oxanium font-bold text-[18px] text-white bg-orange rounded-[5px] mx-auto mt-[30px]'> <IoCall />Call us to delivery  123-456789 </button>
      </Container>
    </Section>
  );
};

export default Find_us;
