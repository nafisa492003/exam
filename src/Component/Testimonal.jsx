import React from "react";
import Section from "./Section";
import Container from "./Container";
import Flex from "./Flex";
import icon from "../assets/Quote icon.png";
import { Rate } from "antd";
import id from '../assets/Avatar.png'
const Testimonal = () => {
  return (
    <Section>
      <Container>
        {/* title part */}
        <Flex className={`items-center justify-center gap-8 mb-8 lg:mb-[70px]`}>
          <img className="hidden md:block" src={icon} alt="" />
          <div>
            <h1 className="font-oxanium font-bold text-[30px] text-orange mb-2 text-center">
              TESTIMONIAL
            </h1>
            <h2 className="font-raleway font-extrabold text-[35px] md:text-[40px] text-gray_drak text-center">
              Our Awesome Clients
            </h2>
          </div>
        </Flex>
        {/* title part */}
        <Flex
          className={`flex-col gap-5 p-5 md:p-[30px] rounded-[10px] bg-white shadow-xl w-full lg:w-[872px] mx-auto`}
        >
          <h4 className="font-raleway font-bold text-[25px] text-orange">
            Fantastic service!
          </h4>
          <p className="font-normal font-raleway text-[16px] text-gray_drak leading-[145%]">
            I purchased a phone from an e-commerce site, and this courier
            service provider assisted me in getting it delivered to my home. I
            received my phone within one day, and I was really satisfied with
            their service when I received it. They are really quick and
            dependable. They give me with the option of real-time delivery
            status, which allows me to track the progress of my goods delivery.
            I get a lot of questions from call center support and key account
            managers. They come highly recommended. Confidently say that they
            are really reliable.
          </p>
          <Flex
            className={`items-center justify-between flex-col-reverse md:flex-row`}
          >
            <Rate className="my-4 text-orange md:my-0" disabled defaultValue={5} />
            <Flex className={`items-center gap-2 flex-col-reverse md:flex-row`}>
                <div className="text-center md:text-start">
                    <h6 className="font-raleway font-bold text-[16px] text-gray_drak">Yves Tanguy</h6>
                    <h6 className="font-raleway font-bold text-[16px] text-gray_light">Chief Executive, DLF</h6>
                </div>
                <img src={id} alt="" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Testimonal;
