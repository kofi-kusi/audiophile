import React from "react";

export default function Button({ text, bg }) {
  const blackBtn =
    "bg-[#000000] py-[15px] px-[30px] font-bold uppercase text-[#FFFFFF] text-[13px] tracking-[1px] w-[160px] cursor-pointer hover:bg-[#4C4C4C]";
  const orangeBtn =
    "bg-[#D87D4A] py-[15px] px-[30px] font-bold uppercase text-[#FFFFFF] text-[13px] tracking-[1px] w-[160px] hover:bg-[#FBAF85] cursor-pointer";

  const getBtnVariant = bg === "black" ? blackBtn : orangeBtn;
  return <button className={getBtnVariant}>{text}</button>;
}
