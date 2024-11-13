import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import { FaPlay } from "react-icons/fa";
const Video = () => {
  return (
    <Section>
    <Container>
        <Flex className={`w-full items-center justify-center flex-col bg-video-pattern bg-cover bg-no-repeat pt-[126px] pb-[168px] gap-6 px-2 rounded-[14px]`}>
           <Flex className={`items-center justify-center w-[86px] h-[86px] rounded-full bg-orange`}>
           <FaPlay size={30} className='text-white' />
           </Flex>
           <h1 className='font-oxanium font-bold text-[30px] text-orange'>FASTEST DELIVERY</h1>
           <p className='font-raleway font-normal text-[20px] md:text-[25px] text-white w-full md:w-[673px] text-center'> You can get your valuable item in the fastest period of
 time with safety. Because your emergency
 is our first priority.</p>
        </Flex>
    </Container>
    </Section>
  )
}

export default Video