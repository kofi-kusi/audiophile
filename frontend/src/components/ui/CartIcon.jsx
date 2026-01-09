import React, { useState } from "react";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Modal from "./Modal";
import CartModal from "../CartModal";
import { useCart } from "../../hooks/useCart";

export default function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  function toggleModal() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className="relative">
        <button onClick={toggleModal}>
          <img src={cartIcon} alt="Cart icon" className="" />
          <div className="absolute bg-[#D87D4A] size-5 -right-3 -top-3 text-white text-sm text-center rounded-[50px]">
            {totalQuantity}
          </div>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto max-w-[1150px] p-6 flex justify-end">
          <CartModal setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </>
  );
}
