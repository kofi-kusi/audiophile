import React from 'react'
import Navbar from './ui/Navbar'

export default function Header() {
  return (
    <div className='w-full bg-[#191919] relative'>
    <header className='bg-[#191919] bottom-1 py-8 border-b border-[#F1F1F1]/10 max-w-[1110px] lg:mx-auto sm:px-6 md:px-0 md:mx-6'>
      <Navbar />
    </header>
    </div>
  )
}
