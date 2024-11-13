import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import Service_content from './Service_content'

const Service = () => {
  return (
    <Section>
        <Container>
       <Flex className={`items-center justify-center gap-3 mb-10 lg:mb-20 flex-col`}>
        <h2 className='font-oxanium font-bold text-[30px] text-orange'>SERVICES</h2>
        <h1 className='font-extrabold font-raleway text-[30px] md:text-[40px] text-[#11111D]'>Our services for you</h1>
       </Flex>
       <Flex className={`items-center gap-6 flex-col lg:flex-row`}>
        <Service_content/>
       </Flex>
        </Container>
    </Section>
  )
}

export default Service