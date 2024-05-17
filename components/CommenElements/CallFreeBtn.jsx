import Link from 'next/link'
import React from 'react'

const CallFreeBtn = ({className}) => {
  return (
    <Link href="tel:12345678901" className={`bg-white text-sm sm:text-base md:text-lg font-medium text-black py-3 px-6 rounded-full text-center ${className}`}>Book a Free Call</Link>
  )
}

export default CallFreeBtn