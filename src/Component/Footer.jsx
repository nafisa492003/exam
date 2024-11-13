import React from 'react'
import Container from './Container'
import Flex from './Flex'
import footer_img from '../assets/Logo_footer.png'
const Footer = () => {
  return (
   <footer className='py-[75px] bg-[#2F2E41]'>
   <Container>
    <Flex className={`items-start md:items-center justify-between flex-col md:flex-row `}>
    <div className='mb-4 md:mb-0'>
        <img src={footer_img} alt="" />
        <p className='font-semibold text-[16px] text-gray_light font-raleway'>The most trusted Courier<br/>
        company in your area.</p>
    </div>
    {/* list part */}
    <Flex className={`gap-5 md:gap-10 lg:gap-[136px] flex-col md:flex-row`}>
    <ul className='flex flex-col gap-2'>
     <h1 className='font-oxanium font-bold text-[20px] text-white mb-3'>Other links</h1>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Blogs</li>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Movers website</li>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Traffic Update</li>
    </ul>
    <ul className='flex flex-col gap-2'>
     <h1 className='font-oxanium font-bold text-[20px] text-white mb-3'>Services</h1>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Corporate goods</li>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Artworks</li>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Documents</li>
    </ul>
    <ul className='flex flex-col gap-2'>
     <h1 className='font-oxanium font-bold text-[20px] text-white mb-3'>Customer Care</h1>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>About Us</li>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Contact US</li>
     <li className='font-semibold font-raleway text-[16px] text-gray_light'>Get Update</li>
    </ul>  
    </Flex>

     {/* list part */}
    </Flex>
   </Container>
   </footer>
  )
}

export default Footer