import React from "react";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <MenuIcon />
      <Logo />
      <NavMenu />
      <CartIcon />
    </header>
  );
}
