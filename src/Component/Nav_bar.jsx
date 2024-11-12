import React from 'react'
import Container from './Container';
import Flex from './Flex';
const Nav_bar = () => {
  return (
    <section>
        <Container>
        <Flex className={`items-center justify-between`}>
       {/* img */}
       <h1>nav bar</h1>
       {/* <img src={logo} alt="logo" /> */}
       {/* img */}
       {/* list itmeam */}
       <ul className='flex items-center'>
        <li>
        Home
        </li>
       </ul>
       {/* list iteam */}
        </Flex>
        </Container>
    </section>
  )
}

export default Nav_bar