import { NavLink } from "react-router-dom";
import iconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";


export default function CategoryThumbnail({ category, imgURL}) {
  return (
    <>
      <NavLink
      className="group w-full"
      to={`/${category}`}
      >
        <div className="relative h-[217px] flex flex-col justify-end">
          <img
            className="absolute top-0 left-1/2 h-[150px] z-10 object-scale-down transform translate-x-[-50%]"
            src={imgURL}
            alt="headphones category thumbnail"
          />

          <div className="bg-light-gray flex flex-col items-center h-[165px] rounded-lg justify-end p-5">
            <h2 className="uppercase text-[15px] font-bold leading-[24px] tracking-[1.3px] hover:text-black">
              {category}
            </h2>
            <div className="flex gap-2 ">
              <p className="group-hover:text-burnt-orange opacity-50 uppercase text-[13px] font-bold tracking-wide">
                shop
              </p>
              <img className="object-scale-down" src={iconArrowRight} alt="" />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}
