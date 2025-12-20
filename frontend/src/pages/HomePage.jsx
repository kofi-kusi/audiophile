import React from "react";
import Hero from "../components/Hero";
import CategoriesThumbnail from "../components/CategoriesThumbnail";
import TopProducts from "../components/TopProducts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="max-w-[1150px] mx-auto px-6">
        <CategoriesThumbnail />
        <TopProducts />
      </main>
    </>
  );
}
