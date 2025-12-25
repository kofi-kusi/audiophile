import React from "react";
import desktopEarphonesYX1Img from "../assets/home/desktop/image-earphones-yx1.jpg";
import tabletEarphonesYX1Img from "../assets/home/tablet/image-earphones-yx1.jpg";
import mobileEarphonesYX1Img from "../assets/home/mobile/image-earphones-yx1.jpg";
import Button from "./ui/Button";

export default function YX1Earphones() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <picture className="md:w-1/2">
        <source
          srcset={desktopEarphonesYX1Img}
          media="(min-width: 1000px)"
          className=""
        />
        <source
          srcset={tabletEarphonesYX1Img}
          media="(min-width: 690px)"
          className=""
        />
        <img src={mobileEarphonesYX1Img} alt="" className="rounded-lg" />
      </picture>
      <div className="bg-[#F1F1F1] rounded-lg flex flex-col justify-center items-start min-h-[200px] md:w-1/2 px-6 md:px-16 lg:px-24 gap-8">
        <h4 className="text-[28px] font-bold uppercase leading-[28px] tracking-[2px]">
          YX1 EARPHONES
        </h4>
        <Button text="see product" variant="outline" to="/earphones/yx1-earphones" />
      </div>
    </div>
  );
}
