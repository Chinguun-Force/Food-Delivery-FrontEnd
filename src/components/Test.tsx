import { CldImage } from 'next-cloudinary'
import React from 'react'
import { motion } from 'framer-motion'
const Test = () => {
  return (
    <div className='w-full h-3/4 relative'>
      <CldImage
        src='https://res.cloudinary.com/dl3wkodkk/image/upload/v1743126097/Food-Delivery%20HeroBanner/Frame_1321316044_ic4dvj.png'
        width={1264}
        height={500}
        className='object-cover w-[2400px] h-[800px] rounded-b-3xl'
        alt='hero-banner'
      />
      <motion.div>
        <div className='bg-[#FD543F] rounded-full w-full h-[410px] absolute transform -translate-x-[4%] bottom-1/2 translate-y-1/2'></div>
        <div className={`bg-zinc-900 rounded-full w-full h-[410px] absolute transform -translate-x-1/17 bottom-1/2 translate-y-[40%] flex justify-center items-center`}>
        <span className='text-white text-9xl absolute transform -translate-x-1/2 -translate-y-1/2 font-bebas-neue'>
          TODAY'S
        </span>
          <CldImage 
            src='https://res.cloudinary.com/dl3wkodkk/image/upload/v1743125864/Food-Delivery%20HeroBanner/b2ce17de6c67dc101d53db36830b072b_b4ofoc.png'
            alt='hero-banner'
            width={1000}
            height={200}
            className='transform translate-y-[15%] translate-x-[10%] z-5'
          />
          <span className='text-white text-9xl absolute transform -translate-x-1/2 -translate-y-1/2 font-bebas-neue'>
          
        </span>
        </div>

      </motion.div>
    </div>
  )
}

export default Test
