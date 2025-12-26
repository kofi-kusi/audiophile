import React, { useState } from "react";
import Button from "./ui/Button";
import ProductFeatures from "./ui/ProductFeatures";
import ProductGallery from "./ui/ProductGallery";
import OtherProducts from "./ui/OtherProducts";
import { useCart } from "../hooks/useCart";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }
  return (
    <div className="mt-6 lg:mt-14 flex flex-col gap-22 md:gap-30 lg:gap-40">
      <div className="flex flex-col gap-8 md:flex-row md:gap-18 md:items-center">
        <picture className="md:min-w-[280px]">
          <source srcSet={product.image.desktop} media="(min-width: 1000px)" />
          <source srcSet={product.image.tablet} media="(min-width: 690px)" />
          <img
            src={product.image.mobile}
            alt={product.name}
            className="rounded-lg"
          />
        </picture>
        <div className="flex flex-col gap-6 items-start  max-w-[445px] md:max-h-[400px]">
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
            <button
              onClick={() => addToCart(product, quantity)}
              className="bg-[#D87D4A] py-[15px] font-bold uppercase text-[#FFFFFF] text-[13px] tracking-[1px] w-[160px] hover:bg-[#FBAF85] transition-colors cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ProductFeatures
        features={product.features}
        includes={product.includes}
      />
      <ProductGallery gallery={product.gallery}/>
      <OtherProducts others={product.others}/>
    </div>
  );
}
