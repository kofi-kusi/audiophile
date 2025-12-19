import React from "react";
import mobileHeaderImg from "../assets/home/mobile/image-header.jpg";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="absolute -top-6 -z-1">
      <div className="relative flex flex-col justify-center items-center">
        <picture className="inset-0 ">
          <img src={mobileHeaderImg} alt="" className="" />
        </picture>

        <div className="max-w-[328px] absolute text-center flex flex-col justify-center items-center">
          <p className="text-[14px] uppercase leading-[19px] tracking-[10px] text-[#FFFFFF]/50 mb-[16px]">
            new product
          </p>
          <h1 className="text-[36px] font-bold leading-[40px] tracking-[2px] text-[#FFFFFF] uppercase mb-[24px]">
            XX99 Mark II Headphones
          </h1>
          <p className="text-[#FFFFFF]/75 leading-[25px] mb-[28px] font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button text="see product"/>
        </div>
      </div>
    </div>
  );
}
