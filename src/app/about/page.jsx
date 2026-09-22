import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <Image src={'/WaterTank.jpg'} width={300} height='300' alt='LGED Water Header Tank'></Image>
    </div>
  )
}

export default AboutPage
