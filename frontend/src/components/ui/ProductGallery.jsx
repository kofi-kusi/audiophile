import React from "react";

export default function ProductGallery({ gallery }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      <div className="flex flex-col justify-between gap-4">
        <div>
          <picture>
            <source
              srcSet={gallery.first.desktop}
              media="(min-width: 1000px)"
              alt="Product gallery image"
            />
            <source
              srcSet={gallery.first.tablet}
              media="(min-width: 690px)"
              alt="Product gallery image"
            />
            <img src={gallery.first.mobile} alt="" className="rounded-lg" />
          </picture>
        </div>
        <div>
          <picture>
            <source
              srcSet={gallery.second.desktop}
              media="(min-width: 1000px)"
              alt="Product gallery image"
            />
            <source
              srcSet={gallery.second.tablet}
              media="(min-width: 690px)"
              alt="Product gallery image"
            />
            <img src={gallery.second.mobile} alt="" className="rounded-lg" />
          </picture>
        </div>
      </div>
      <div>
        <picture>
          <source
            srcSet={gallery.third.desktop}
            media="(min-width: 1000px)"
            alt="Product gallery image"
          />
          <source
            srcSet={gallery.third.tablet}
            media="(min-width: 690px)"
            alt="Product gallery image"
          />
          <img
            src={gallery.third.mobile}
            alt="Product gallery image"
            className="rounded-lg"
          />
        </picture>
      </div>
    </div>
  );
}
