import React from "react";
import Button from "./ui/Button";

export default function CategoryPageItem({ product }) {
  return (
    <div className="flex flex-col gap-8 items-center lg:flex-row lg:gap-30">
      <picture>
        <source
          srcSet={product.categoryImage.desktop}
          media="(min-width: 992px)"
        />
        <source
          srcSet={product.categoryImage.tablet}
          media="(min-width: 600px)"
        />
        <img
          src={product.categoryImage.mobile}
          alt={product.name}
          className="rounded-lg"
        />
      </picture>
      <div className="text-center flex flex-col gap-6 justify-between items-center md:max-w-[572px] lg:items-start lg:text-left">
        {product.new && (
          <p className="text-[14px] uppercase leading-[19px] tracking-[10px] text-[#D87D4A]">
            new product
          </p>
        )}
        <h4 className="text-[28px] font-bold tracking-[2px] uppercase md:text-[40px] tracking-[1.5px] md:leading-[44px]">
          XX99 Mark II Headphones
        </h4>
        <p className="font-normal leading-[25px] opacity-50 tracking-[0px]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Button text="see product" />
      </div>
    </div>
  );
}
