import React from 'react'

export default function Button({ text, bg }) {

  return (
    <button className='bg-[#D87D4A] py-[15px] px-[30px] font-bold uppercase text-[#FFFFFF] text-[13px] tracking-[1px]'>
        {text}
    </button>
  )
}
