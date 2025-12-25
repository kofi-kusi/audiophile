import React, { useContext } from "react";
import CategoriesThumbnail from "../components/CategoriesThumbnail";
import BestGear from "../components/BestGear";
import { ProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router";
import ProductsList from "../components/ProductsList";

export default function CategoryPage() {
  const products = useContext(ProductsContext);
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === category,
  );

  return (
    <>
      <head>
        <title>{"Audiophile shop - " + category}</title>
      </head>
      <main>
        <h1 className="text-[28px] font-bold tracking-[2px] text-center bg-[#191919] text-white uppercase py-8 md:text-[40px] tracking-[1.5px] md:leading-[44px] md:pt-[105px] md:pb-[97px]">
          {category}
        </h1>
        <div className="max-w-[1150px] mx-auto px-6">
          <ProductsList products={categoryProducts} />
          <CategoriesThumbnail />
          <BestGear />
        </div>
      </main>
    </>
  );
}
