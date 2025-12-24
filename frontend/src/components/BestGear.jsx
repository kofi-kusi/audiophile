import React from "react";
import desktopBestGearImg from "../assets/shared/desktop/image-best-gear.jpg";
import mobileBestGearImg from "../assets/shared/mobile/image-best-gear.jpg";
import tabletBestGearImg from "../assets/shared/tablet/image-best-gear.jpg";

export default function BestGear() {
  return (
    <div className="flex flex-col items-center gap-6 my-28 lg:flex-row-reverse lg:justify-between lg:my-40">
      <picture className="">
        <source
          srcSet={desktopBestGearImg}
          media="(min-width: 1000px)"
          className=""
        />
        <source
          srcSet={tabletBestGearImg}
          media="(min-width: 690px)"
          className=""
        />
        <img src={mobileBestGearImg} alt="" className="rounded-lg" />
      </picture>
      <div className="flex flex-col gap-8 justify-center items-center text-center md:max-w-[600px] lg:text-left lg:w-1/2 lg:pr-32">
        <h4 className="text-[28px] uppercase leading-[38px] tracking-[2px] font-bold md:text-[40px] md:leading-[44px] tracking-[1.5px]">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h4>
        <p className="leading-[25px] font-medium opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
