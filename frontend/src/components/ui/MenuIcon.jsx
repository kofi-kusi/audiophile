import React, { useState } from "react";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import Modal from "./Modal";
import CategoriesThumbnail from "../CategoriesThumbnail";

export default function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <button className="md:mr-8 lg:hidden" onClick={toggleNav}>
        <img src={hamburger} alt="Menu icon" />
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="bg-white rounded-b-lg h-fit px-6 pb-8 w-full flex flex-col gap-8"
        >
          <CategoriesThumbnail />
        </div>
      </Modal>
    </>
  );
}
