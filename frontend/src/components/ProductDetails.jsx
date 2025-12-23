import React from "react";

export default function ProductDetails({ product }) {
    console.log(product)
  return (
    <div>
      <picture>
        <source srcSet={product.image.desktop} media="(min-width: 992px)" />
        <source srcSet={product.image.tablet} media="(min-width: 600px)" />
        <img
          src={product.image.mobile}
          alt={product.name}
          className="rounded-lg"
        />
      </picture>
    </div>
  );
}
