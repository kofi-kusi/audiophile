import React from "react";
import Hero from "../components/Hero";
import CategoriesThumbnail from "../components/CategoriesThumbnail";
import ZX9Speaker from "../components/ZX9Speaker";
import ZX7Speaker from "../components/ZX7Speaker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="max-w-[1150px] mx-auto px-6">
        <CategoriesThumbnail />
        <ZX9Speaker />
        <ZX7Speaker />
      </main>
    </>
  );
}
