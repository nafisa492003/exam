import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Subsription = () => {
  return (
    <section className='py-[84px] bg-[#222132]'>
   <Container>
    <Flex className={`items-center justify-between flex-col md:flex-row`}>
     <div className='w-full md:w-1/2'>
     <h1 className='font-raleway font-extrabold text-[25px] lg:text-[40px] text-white text-center md:text-start'>Get an update every week
     </h1>
     <p className='font-raleway font-normal text-[16px] text-gray_light w-full lg:w-[500px] text-center md:text-start mx-auto md:mx-0'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
     </div>
     <div className='w-full mt-5 md:w-1/2 md:mt-0'>
        <h3 className='font-bold font-oxanium text-[18px] text-orange mb-3 text-center md:text-left'>SUBSCRIBE TO NEWSLETTER</h3>
        <Flex className={`items-center gap-4 md:gap-2 flex-col md:flex-row`}>
          <input className='w-full px-3 py-3 md:w-[380px] border-[2px] border-white outline-none font-raleway font-normal text-[16px]text-[#7B7A8B] placeholder:text-[#7B7A8B] bg-transparent rounded-lg' placeholder='Enter your mail' type="text" name="" id="" />  
          <button className='font-oxanium font-bold text-[20px] px-5 py-3 bg-orange rounded-[6px] text-white'>Subscribe</button>
        </Flex>
     </div>
    </Flex>
   </Container>
    </section>
  )
}

export default Subsription