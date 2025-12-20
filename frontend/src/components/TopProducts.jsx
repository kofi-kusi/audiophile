import React from 'react'
import ZX9Speaker from "./ZX9Speaker";
import ZX7Speaker from "./ZX7Speaker";
import YX1Earphones from "./YX1Earphones";

export default function TopProducts() {
  return (
    <div className='mt-32 mb-32 flex flex-col gap-6'>
        <ZX9Speaker />
        <ZX7Speaker />
        <YX1Earphones />
    </div>
  )
}
