import React from "react";
import mobileSpeakerZX7Img from "../assets/home/mobile/image-speaker-zx7.jpg";
import tabletSpeakerZX7Img from "../assets/home/tablet/image-speaker-zx7.jpg";
import desktopSpeakerZX7Img from "../assets/home/desktop/image-speaker-zx7.jpg";
import Button from "./ui/Button";

export default function ZX7Speaker() {
  return (
    <div className="relative rounded-[8px] overflow-hidden">
      <picture className="w-full bg-cover">
        <source
          srcset={desktopSpeakerZX7Img}
          media="(min-width: 992px)"
          className=""
        />
        <source
          srcset={tabletSpeakerZX7Img}
          media="(min-width: 600px)"
          className=""
        />
        <img src={mobileSpeakerZX7Img} alt="" className="w-full" />
      </picture>
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 gap-8">
        <h4 className="text-[28px] font-bold uppercase leading-[28px] tracking-[2px]">
          ZX7 SPEAKER
        </h4>
        <Button text="see product" variant="outline" />
      </div>
    </div>
  );
}
