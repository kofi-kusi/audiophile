import smImgBestGear from "../../assets/shared/mobile/image-best-gear.jpg"
import mdImgBestGear from "../../assets/shared/tablet/image-best-gear.jpg"
import lgImgBestGear from "../../assets/shared/desktop/image-best-gear.jpg"

export default function BestGear() {
    return(
        <div className="my-30 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-6">

          <img className="rounded-lg md:hidden lg:hidden" src={smImgBestGear} alt="best gear image" />
          <img className="hidden lg:hidden md:block rounded-lg" src={mdImgBestGear} alt="best gear image" />
          <img className="hidden md:hidden lg:block rounded-lg" src={lgImgBestGear} alt="best gear image" />

          <div className="text-center mt-10 md:max-w-[550px] mx-auto lg:m-0 lg:text-left lg:max-w-[440px]">
            <h4 className="text-[28px] uppercase leading-[38px] tracking-[2px] font-bold md:text-[40px] md:leading-[44px] md:tracking-[1.5px]">Bringing you the <span className="text-burnt-orange">best</span> audio gear</h4>
            <p className="opacity-50 text-[15px] leading-[25px] mt-8">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
        </div>
    )
}