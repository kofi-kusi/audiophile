import React from "react";
import mobileHeroImg from "../assets/home/mobile/image-header.jpg";
import tabletHeroImg from "../assets/home/tablet/image-header.jpg";
import desktopHeroImg from "../assets/home/desktop/image-hero.jpg";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="bg-[#191919] w-full -translate-y-20 lg:translate-y-0 z-1">
      <div className="max-w-[1150px] mx-auto md:px-6">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <picture className="w-full h-full">
            <source srcSet={desktopHeroImg} media="(min-width: 992px)" />
            <source srcSet={tabletHeroImg} media="(min-width: 600px)" />
            <img src={mobileHeroImg} alt="" />
          </picture>

          <div className="max-w-[328px] md:max-w-[379px] absolute text-center flex flex-col justify-between items-center lg:items-start lg:text-left">
            <p className="text-[14px] uppercase leading-[19px] tracking-[10px] text-[#FFFFFF]/50 mb-[16px]">
              new product
            </p>
            <h1 className="text-[36px] font-bold leading-[40px] tracking-[2px] text-[#FFFFFF] uppercase mb-[24px] md:text-[56px] md:leading-[58px]">
              XX99 Mark II Headphones
            </h1>
            <p className="text-[#FFFFFF]/75 leading-[25px] mb-[28px] font-medium">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button text="see product" />
          </div>
        </div>
      </div>
    </div>
  );
}
