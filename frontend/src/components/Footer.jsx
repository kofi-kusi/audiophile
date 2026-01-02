import React from "react";
import Logo from "./ui/Logo";
import { NavLink } from "react-router";

import SocialLinks from "./SocialLinks";

export default function Footer() {
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

  return (
    <footer className="bg-[#191919] text-white pb-9">
      <div className="max-w-[1150px] mx-auto px-6 flex flex-col items-center gap-12 text-center md:grid md:grid-cols-2 md:text-left">
        <div className="bg-[#D87D4A] w-[101px] h-[4px] md:col-span-2"></div>
        <div className="">
        <Logo />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:col-span-2 lg:col-span-1 lg:justify-end">
          {navLinks.map((navItem) => {
            return (
              <NavLink
                to={navItem.url}
                className="font-bold uppercase text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors"
                key={navItem.name}
              >
                {navItem.name}
              </NavLink>
            );
          })}
        </div>
        <p className="opacity-50 font-medium leading-[25px] md:col-span-2 lg:col-span-1">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="opacity-50 font-bold lg:row-start-4">Copyright 2021. All Rights Reserved</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
