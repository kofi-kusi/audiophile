import React, { useState } from "react";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Modal from "./Modal";
import CartModal from "../CartModal";

export default function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggleModal}>
        <img src={cartIcon} alt="Cart icon" />
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto max-w-[1150px] p-6 flex justify-end">
          <CartModal setIsOpen={setIsOpen}/>
        </div>
      </Modal>
    </>
  );
}
