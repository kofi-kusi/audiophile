import React, { useState } from "react";
import Button from "./ui/Button";

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    if (quantity <= 0) return;
    setQuantity((prev) => prev - 1);
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }
  return (
    <div className="mt-6 lg:mt-14">
      <div className="flex flex-col md:flex-row md:gap-25 md:items-center">
        <picture className="md:min-w-[281px]">
          <source srcSet={product.image.desktop} media="(min-width: 992px)" />
          <source srcSet={product.image.tablet} media="(min-width: 600px)" />
          <img
            src={product.image.mobile}
            alt={product.name}
            className="rounded-lg"
          />
        </picture>
        <div className="flex flex-col justify-between gap-6 items-start mt-8 max-w-[445px] max-h-[400px]">
          {product.new && (
            <p className="text-[14px] uppercase leading-[19px] tracking-[10px] text-[#D87D4A]">
              new product
            </p>
          )}
          <h4 className="text-[28px] font-bold tracking-[2px] uppercase lg:text-[40px] tracking-[1px] md:leading-[44px] max-w-[250px] lg:max-w-[340px]">
            {product.name}
          </h4>
          <p className="font-normal leading-[25px] opacity-50 tracking-normal">
            {product.description}
          </p>
          <h6 className="text-lg uppercase leading-6 tracking-[1.3px] font-bold">
            $ {product.price}
          </h6>
          <div className="flex gap-4">
            <div className="flex justify-between p-[15px] w-30 bg-[#F1F1F1] text-[13px]">
              <button
                onClick={decreaseQuantity}
                className="opacity-25 cursor-pointer"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="opacity-25 cursor-pointer"
              >
                +
              </button>
            </div>
            <Button text="add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
