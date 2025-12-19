import React from 'react'
import cartIcon from "../../assets/shared/desktop/icon-cart.svg"

export default function CartIcon() {
  return (
    <button>
        <img src={cartIcon} alt="Cart icon" />
    </button>
  )
}
