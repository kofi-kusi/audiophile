import React, { useState } from 'react'
import cartIcon from "../../assets/shared/desktop/icon-cart.svg"
import Modal from './Modal'

export default function CartIcon() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
      setIsOpen(prev => !prev)
    }
  
  return (
    <>
    <button onClick={toggleModal}>
        <img src={cartIcon} alt="Cart icon" />
    </button>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="mx-auto max-w-[1150px] p-6 flex justify-end">

      <div
        className="bg-white rounded-lg p-6 max-w-md"
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        <h2 className="text-xl font-bold">Modal Title</h2>
        <p className="mt-2">This is the modal content jskjskjksjksjksj.</p>

        <button
          className="mt-4"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
      </div>
        
      </Modal>
    </>
  )
}
