import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import Service_content from './Service_content'

const Service = () => {
  return (
    <Section className={`py-[80px] lg:py-[170px]`}>
        <Container>
       <Flex className={`items-center justify-center gap-3 mb-10 lg:mb-20 flex-col`}>
        <h2 className='font-oxanium font-bold text-[30px] text-orange'>SERVICES</h2>
        <h1 className='font-extrabold font-raleway text-[40px] text-[#11111D]'>Our services for you</h1>
       </Flex>
       <Flex>
        <Service_content/>
       </Flex>
        </Container>
    </Section>
  )
}

export default Service