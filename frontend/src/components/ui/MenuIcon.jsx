import React from "react";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";

export default function MenuIcon() {
  return (
    <button className="md:mr-8 lg:hidden">
      <img src={hamburger} alt="Menu icon" />
    </button>
  );
}
