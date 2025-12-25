import React from "react";
import { Link, useLocation } from "react-router";

export default function Button({ text, variant, to }) {
  const location = useLocation();
  const from = { from: location.pathname };

  const blackBtn =
    "bg-[#000000] py-[15px] font-bold uppercase text-[#FFFFFF] text-[13px] tracking-[1px] w-[160px] cursor-pointer hover:bg-[#4C4C4C] transition-colors";
  const orangeBtn =
    "bg-[#D87D4A] py-[15px] font-bold uppercase text-[#FFFFFF] text-[13px] tracking-[1px] w-[160px] hover:bg-[#FBAF85] transition-colors cursor-pointer";
  const outlineBtn =
    "py-[15px] font-bold uppercase text-[#000000] border border-black text-[13px] tracking-[1px] w-[160px] hover:bg-black hover:text-white cursor-pointer transition-colors";

  const getBtnVariant =
    variant === "black"
      ? blackBtn
      : variant === "outline"
        ? outlineBtn
        : orangeBtn;
  return (
    <Link to={to} state={from}>
      <button className={getBtnVariant}>{text}</button>
    </Link>
  );
}
