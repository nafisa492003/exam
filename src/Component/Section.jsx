import React from 'react'

const Section = ({children,className}) => {
  return (
    <section className={`bg-bg_colour ${className}`}>{children}</section>
  )
}

export default Section