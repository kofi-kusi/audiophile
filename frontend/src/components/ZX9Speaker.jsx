import React from "react";
import desktopSpeakerZX9Img from "../assets/home/desktop/image-speaker-zx9.png";
import tabletSpeakerZX9Img from "../assets/home/tablet/image-speaker-zx9.png";
import mobileSpeakerZX9Img from "../assets/home/mobile/image-speaker-zx9.png";

import patternCircles from "../assets/home/desktop/pattern-circles.svg";
import Button from "./ui/Button";

export default function ZX9Speaker() {
  return (
    <div className="relative bg-[#D87D4A] py-[55px] px-[20px] flex flex-col gap-8 items-center text-[#FFFFFF] rounded-[8px] lg:flex-row lg:gap-32 lg:px-24 overflow-hidden">
      <img
        src={patternCircles}
        alt=""
        className="absolute -top-[95px] bg-cover "
      />
      <picture className="w-[208px] md:w-[250px] lg:w-[500px] z-1 lg:translate-y-18">
        <source
          srcset={desktopSpeakerZX9Img}
          media="(min-width: 1000px)"
          className=""
        />
        <source
          srcset={tabletSpeakerZX9Img}
          media="(min-width: 690px)"
          className=""
        />
        <img src={mobileSpeakerZX9Img} alt="" className="object-scale-down" />
      </picture>
      <div className="flex flex-col gap-6 items-center max-w-[350px] text-center lg:items-start lg:text-left z-1">
        <h3 className="text-[36px] font-bold uppercase w-[260px] md:w-full md:text-[56px] leading-[40px] tracking-[1.3px] md:leading-[58px] md:tracking-[2px] uppercase">
          ZX9 speakers
        </h3>
        <p className="opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button text="see product" variant="black" to="/speakers/zx9-speaker"/>
      </div>
    </div>
  );
}
