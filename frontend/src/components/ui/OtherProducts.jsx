import React from "react";
import { useParams } from "react-router";
import Button from "./Button";

export default function OtherProducts({ others }) {
  const { category } = useParams();
  console.log(others);
  console.log(category);
  return (
    <div className="flex flex-col justify-between gap-10 md:gap-14 lg:gap-16">
      <h5 className="text-[24px] text-center leading-[33px] tracking-[1.7px] font-bold uppercase md:text-[32px] md:leading-[36px] md:tracking-[1.3px]">
        You may also like
      </h5>
      <div className="flex flex-col justify-between gap-18 md:flex-row md:gap-3 lg:gap-8">

      {others.map((product) => {
        return (
          <div className="flex flex-col items-center gap-8 text-center">
            <picture>
              <source
                srcSet={product.image.desktop}
                media="(min-width: 1000px)"
                alt="Product desktop image"
              />
              <source
                srcSet={product.image.tablet}
                media="(min-width: 690px)"
                alt="Product tablet image"
              />
              <img
                src={product.image.mobile}
                alt={product.name}
                className="rounded-lg"
              />
            </picture>
            <h5 className="text-[24px] tracking-[1.7px] font-bold uppercase">
              {product.name}
            </h5>
            <Button to={"/" + category + "/" + product.slug} text={"see product"}/>
          </div>
        );
      })}
      </div>
    </div>
  );
}
