import React from 'react'
import Logo from './Logo'
import MenuIcon from './MenuIcon'
import CartIcon from './CartIcon'

export default function Navbar() {
  return (
    <header className='px-6 flex justify-between'>
      <MenuIcon />
      <Logo />
      <CartIcon />
    </header>
  )
}
