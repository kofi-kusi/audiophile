import React, { useEffect, useState } from "react";
import CategoriesThumbnail from "../components/CategoriesThumbnail";
import BestGear from "../components/BestGear";
import { ProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router";
import ProductsList from "../components/ProductsList";
import ScrollToTop from "../components/ScrollToTop";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/${category}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <>
      <main>
        <ScrollToTop />
        <h1 className="text-[28px] font-bold tracking-[2px] text-center bg-[#191919] text-white uppercase py-8 md:text-[40px] tracking-[1.5px] md:leading-[44px] md:pt-[105px] md:pb-[97px]">
          {category}
        </h1>
        <div className="max-w-[1150px] mx-auto px-6">
          <ProductsList products={products} />
          <CategoriesThumbnail />
          <BestGear />
        </div>
      </main>
    </>
  );
}
