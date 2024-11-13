import React from 'react'
import Section from './Section'
import Container from './Container'
import { BsTrophy } from "react-icons/bs";
import { FiMap } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";
import { GrDeliver } from "react-icons/gr";
import { FaBusinessTime } from "react-icons/fa";
import Flex from './Flex';
const Information = () => {
    const informations =[
        {
            icon :<BsTrophy size={68} className='text-gray_drak'/> ,
            title:'26+',
            sub_title:'Awards  won'
        },
        {
            icon :<FiMap size={68} className='text-gray_drak'/> ,
            title:'65+',
            sub_title:'States covered'
        },
        {
            icon :<IoIosPerson size={68} className='text-gray_drak'/> ,
            title:'689K+',
            sub_title:'Happy clients'
        },
        {
            icon :<GrDeliver size={68} className='text-gray_drak'/> ,
            title:'130M+',
            sub_title:'Goods delivered'
        },
        {
            icon :<FaBusinessTime size={68} className='text-gray_drak'/> ,
            title:'130M+',
            sub_title:'Business hours'
        },
    ]
  return (
    <Section>
        <Container>
       <Flex className={`items-center gap-5 lg:gap-[150px] flex-col md:flex-row md:justify-around`}>
        {informations.map((item,idx)=>(
            <Flex key={idx} className={`items-center flex-col`}>
                <span className='mb-4'>{item.icon}</span>
                <h1 className='font-oxanium font-extrabold text-[40px] text-orange mt-5 md:text-[30px] lg:text-[40px]'>{item.title}</h1>
                <h4 className='font-bold font-raleway text-[20px] text-gray_drak md:text-[18px] lg:text-[20px]'>{item.sub_title}</h4>
            </Flex>
        ))}
       </Flex>
        </Container>
    </Section>
  )
}

export default Information