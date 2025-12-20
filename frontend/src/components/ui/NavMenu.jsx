import React from "react";
import { Link, NavLink } from "react-router";

const navLinks = [
  {
    url: "/",
    name: "home",
  },
  {
    url: "/headphones",
    name: "headphones",
  },
  {
    url: "/speakers",
    name: "speakers",
  },
  {
    url: "/earphones",
    name: "earphones",
  },
];

export default function NavMenu() {
  const activeClasses =
    "font-bold text-[#D87D4A] uppercase text-[13px] leading-[25px] tracking-[2px]";
  const baseClasses =
    "font-bold text-white uppercase text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A]";

  const getNavClasses = ({ isActive }) =>
    isActive ? activeClasses : baseClasses;

  return (
    <nav className="sm:hidden md:hidden lg:flex lg:gap-[34px]">
      {navLinks.map((navItem) => {
        return (
          <NavLink to={navItem.url} className={getNavClasses}>
            {navItem.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
