import React from "react";
import CategoryLink from "./ui/CategoryLink";
import earphoneThumbnailImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphoneThumbnailImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnailImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

export default function CategoriesThumbnail() {
  return (
    <div className="mt-32 md:flex md:gap-2.5 lg:gap-8">
      <CategoryLink
        text="headphones"
        img={headphoneThumbnailImg}
        url="/headphones"
      />
      <CategoryLink
        text="speakers"
        img={speakersThumbnailImg}
        url="/speakers"
      />
      <CategoryLink
        text="earphones"
        img={earphoneThumbnailImg}
        url="/earphones"
      />
    </div>
  );
}
