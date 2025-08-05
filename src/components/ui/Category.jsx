import { NavLink } from "react-router-dom";
import imgCategoryThumbnailHeadphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import imgCategoryThumbnailEarphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"
import imgCategoryThumbnailSpeakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"

import CategoryThumbnail from "./CategoryThumbnail";

export default function Category() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <CategoryThumbnail 
        category="headphones"
        imgURL={imgCategoryThumbnailHeadphones}
      />
      <CategoryThumbnail 
        category="speakers"
        imgURL={imgCategoryThumbnailSpeakers}
      />
      <CategoryThumbnail 
        category="earphones"
        imgURL={imgCategoryThumbnailEarphones}
      />
    </div>
  );
}
