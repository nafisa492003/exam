import React from 'react'
const Section = ({children,className}) => {
  return (
    <section className={`bg-bg_colour py-[50px] lg:py-[160px] ${className}`}>{children}</section>
  )
}

export default Section