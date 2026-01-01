import React from "react";
import { Link } from "react-router";
import iconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

export default function CategoryLink({ text, img, url }) {
  return (
    <Link
      to={url}
      className="relative w-full flex flex-col items-center h-[168px] lg:h-[204px] rounded-[8px] p-6 bg-[#F1F1F1] group"
    >
      <div className="absolute top-0 h-[150px] w-[150px] -translate-y-[35%]">
        <img src={img} alt="category image" className="object-scale-down" />
      </div>
      <div className="mt-auto flex flex-col gap-2 items-center">
        <h6 className="text-[18px] font-bold leading-[19px] tracking-[1.3px] uppercase">
          {text}
        </h6>
        <button className="text-[13px] leading-[25px] tracking-px flex items-center justify-center gap-2 font-bold uppercase opacity-50 group-hover:text-[#D87D4A]">
          Shop
          <img src={iconArrowRight} alt="" className="object-scale-down" />
        </button>
      </div>
    </Link>
  );
}
