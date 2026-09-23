import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'UpperCodes || About Us Page',
  description: 'We solve you actual Problme'
}

const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <Image
        src={'https://images.unsplash.com/photo-1789314946361-1ec5cf34c53d'}
        width='300'
        height='250'
        alt=''
      ></Image>
      <Image
        src={'https://i.ibb.co.com/7xsq7FLw/55.jpg'}
        width={300}
        height={300}
        alt='Fish Capturing'
      ></Image>
      <Image
        src={'/images/watertank.jpg'}
        width={300}
        height='300'
        alt='LGED Water Header Tank'
      ></Image>
      {/* <Image src={'/images/lcs 1.jpg'} width={300} height='500' alt='LCS Group Work'></Image>
      <Image src={'/images/rubberdam.jpg'} width={250} height={100} alt='Rubber Dams'></Image> */}
    </div>
  )
}

export default AboutPage
