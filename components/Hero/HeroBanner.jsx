import React from 'react'
import CallFreeBtn from '../CommenElements/CallFreeBtn'
import Image from 'next/image'

const HeroBanner = () => {
  return (
    <section className="w-full mt-6 container mx-auto lg:px-0">
      <div className="grid lg:grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
        <div className="shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl py-4 grid place-items-center">
          <div className='relative'>
            <Image src="/hero-bg-pattern.svg" width={395} height={395} className='loader' alt="heri pattern" />
            <Image src="/tahir-pic.jpg" className='absolute rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' width={300} height={300} alt="heri pattern" />
          </div>
        </div>
        <div className="text-center shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl px-4 py-14 sm:py-20 md:py-24 lg:py-32">
          <span className="uppercase bg-[#111] text-[#ffca9a] py-1 px-3 rounded-md inline-block text-sm sm:text-base md:text-lg">AVAILABLE FOR WORK</span>
          <h1 className="text-4xl xl:text-6xl font-medium text-white mt-3">Web designer</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white opacity-40 max-w-[444px] mx-auto mt-5 mb-7">As a web developer, I am proficient in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, React, Angular, and Node.js.</p>
          <CallFreeBtn/>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner