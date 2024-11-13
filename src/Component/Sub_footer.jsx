import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Sub_footer = () => {
  return (
    <footer className="py-[30px] bg-[#222132]">
      <Container>
        <Flex className={`items-center justify-between flex-col md:flex-row`}>
          <h6 className="font-medium font-raleway text-[14px] text-[#DBDBE9]">All rights Reserved © AYN Company, 2024</h6>
          <h6 className="font-medium font-raleway text-[14px] text-[#DBDBE9]">Made with heart by Your <span className="text-orange">Nafisa</span></h6>
        </Flex>
      </Container>
    </footer>
  );
};

export default Sub_footer;
