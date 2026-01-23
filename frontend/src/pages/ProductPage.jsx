import React, { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import GoBack from "../components/ui/GoBack";
import { useParams } from "react-router";
import CategoriesThumbnail from "../components/CategoriesThumbnail";
import BestGear from "../components/BestGear";
import ScrollToTop from "../components/ScrollToTop";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const { category } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/${category}/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [category, slug]);
  console.log(product);

  if (loading === true) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <p className="font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <main className="max-w-[1150px] mx-auto px-6 mt-4 md:mt-8 lg:mt-20">
        <GoBack />
        <ProductDetails product={product} />
        <CategoriesThumbnail />
        <BestGear />
      </main>
    </>
  );
}
