import React from "react";
import Hero from "../components/Hero";
import CategoriesThumbnail from "../components/CategoriesThumbnail";
import TopProducts from "../components/TopProducts";
import BestGear from "../components/BestGear";
import ScrollToTop from "../components/ScrollToTop";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <ScrollToTop />
      <div className="max-w-[1150px] mx-auto px-6">
        <CategoriesThumbnail />
        <TopProducts />
        <BestGear />
      </div>
    </main>
  );
}
