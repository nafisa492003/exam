import React from 'react'
import Flex from './Flex'
import icon_one from '../assets/iCON.jpg'
import icon_two from '../assets/Icon2.jpg'
import icon_three from '../assets/Icon3.jpg'
const Service_content = () => {
  const services = [
    {
      img: [icon_one],
      title: 'Business Services',
      paragraph: 'We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.',
      lists: ['Corporate goods', 'Shipment', 'Accessories'],
      link: 'Learn more',
    },
    {
      img:[icon_two],
      title: 'Statewide Services',
      paragraph: 'Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.',
      lists: ['Personal items', 'Percels', 'Documents'],
      link: 'Learn more',
    },
    {
      img: [icon_three],
      title: 'Personal Services',
      paragraph: 'You can trust us to safely deliver your most sensitive documents to the specific area in a short time.',
      lists: ['Gifts', 'Package', 'Documents'],
      link: 'Learn more',
    },
   
  ];
  return (
    <>
    {services.map((service,index)=>(
    <div key={index} className='p-[30px] lg:p-[60px] bg-white rounded-[16px]'>
       <Flex className={`items-center justify-center gap-[30px] flex-col`}>
        <img  src={service.img} alt="" />
        <h1 className='font-raleway font-extrabold text-[25px] text-gray_drak'>{service.title}</h1>
        </Flex>
        <p className='mt-6 lg:mt-[45px] mb-[22px] w-full md:w-[290px] font-raleway font-normal text-[16px] text-gray_light'>{service.paragraph}</p> 
        <ul className='list-disc marker:text-orange ml-[12px] mb-6 lg:mb-[60px]'>
         {service.lists.map((item,idx)=>(
          <li key={idx} className='font-raleway font-normal text-[16px] text-gray_light'>{item}</li>
         ))}
        </ul>
       <button className='py-[12px] border-[2px] border-orange w-full rounded-md font-oxanium font-bold text-[20px] text-orange hover:text-white hover:bg-orange transition-all duration-200'>{service.link}</button>
    </div>

    ))}
    
    </>
  )
}

export default Service_content