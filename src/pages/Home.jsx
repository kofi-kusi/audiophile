import smImageHeader from "../assets/home/mobile/image-header.jpg";
import mdImageHeader from "../assets/home/tablet/image-header.jpg";
import lgImageHeader from "../assets/home/desktop/image-hero.jpg";
import ButtonOne from "../components/ui/ButtonOne";
import ButtonTwo from "../components/ui/ButtonTwo";
import Category from "../components/ui/Category";
import patternCircles from "../assets/home/desktop/pattern-circles.svg";
import smImgSpeakerzx9 from "../assets/home/mobile/image-speaker-zx9.png";
import lgImgSpeakerzx9 from "../assets/home/desktop/image-speaker-zx9.png";
import mdImgSpeakerzx9 from "../assets/home/tablet/image-speaker-zx9.png";
import smImgSpeakerzx7 from "../assets/home/mobile/image-speaker-zx7.jpg"
import mdImgSpeakerzx7 from "../assets/home/tablet/image-speaker-zx7.jpg"
import lgImgSpeakerzx7 from "../assets/home/desktop/image-speaker-zx7.jpg"
import smImgSpeakeryx1 from "../assets/home/mobile/image-earphones-yx1.jpg"
import mdImgSpeakeryx1 from "../assets/home/tablet/image-earphones-yx1.jpg"
import lgImgSpeakeryx1 from "../assets/home/desktop/image-earphones-yx1.jpg"
import smImgBestGear from "../assets/shared/mobile/image-best-gear.jpg"
import mdImgBestGear from "../assets/shared/tablet/image-best-gear.jpg"
import lgImgBestGear from "../assets/shared/desktop/image-best-gear.jpg"

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <div className="relative">
        <img src={smImageHeader} className="md:hidden" alt="Header image" />
        <img
          src={mdImageHeader}
          className="hidden md:block lg:hidden"
          alt="Header image"
        />
        <img
          src={lgImageHeader}
          className="hidden lg:block"
          alt="Header image"
        />
        <div className="absolute inset-0 max-w-6xl mx-auto flex justify-start px-6">
          <div className="text-white flex flex-col justify-center items-center text-center md:max-w-[380px] md:mx-auto lg:items-start lg:text-left lg:ml-0">
            <p className="uppercase opacity-50 text-sm tracking-[10px] mb-[16px] md:mb-[24px]">
              new product
            </p>
            <h3 className="text-4xl leading-4xl tracking-[1.2px] uppercase font-bold mb-[24px]  md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              XX99 Mark II HeadphoneS
            </h3>
            <p className="opacity-75 text-[15px] font-medium mb-[28px] leading-[25px] md:mb-[40px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <ButtonOne bg="burnt-orange" type="outline">
              see product
            </ButtonOne>
          </div>
        </div>
      </div>

      {/* Home content */}
      <div className="max-w-6xl mx-auto px-6 mt-10 md:mt-24 lg:mt-30">
        <Category />

        <div className="relative bg-burnt-orange text-white mt-30 py-12 rounded-lg overflow-hidden">

          <img
            className="absolute inset-0 -translate-y-9 w-[1000px] z-1"
            src={patternCircles}
            alt=""
          />
          <div className="px-6 inset-0 flex flex-col justify-center items-center lg:flex-row lg:gap-32">
            <div className="z-2">
              <img
                className="w-[10rem] translate-0 object-scale-down mb-8 md:hidden lg:hidden"
                src={smImgSpeakerzx9}
                alt=""
              />
              <img
                className="hidden translate-0 md:block lg:hidden w-[12rem] object-scale-down mb-8"
                src={mdImgSpeakerzx9}
                alt=""
              />
              <img
                className="hidden md:hidden lg:translate-y-24 lg:block object-scale-down w-[25rem] mb-8"
                src={lgImgSpeakerzx9}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left z-2">
              <h3 className="text-4xl leading-4xl max-w-[250px] md:max-w-[350px] text-center tracking-[1.2px] uppercase font-bold mb-[24px]  md:text-[56px] md:leading-[58px] md:tracking-[2px] lg:text-left">
                ZX9 SPEAKER
              </h3>
              <p className="opacity-75 text-[15px] font-medium mb-[28px] leading-[25px] md:mb-[40px] md:max-w-[350px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ButtonOne bg="black" color="white">
                see product 
              </ButtonOne>
            </div>

          </div>
        </div>

        {/* speaker zx7*/}
        <div className="relative mt-6 md:mt-8 lg:mt-12">

          <img className="rounded-lg w-ful md:hidden lg:hidden" src={smImgSpeakerzx7} alt="speaker zx7" />
          <img className="hidden md:block md:w-full md:rounded-lg lg:hidden" src={mdImgSpeakerzx7} alt="speaker zx7" />
          <img className="hidden md:hidden lg:block lg:w-full lg:rounded-lg" src={lgImgSpeakerzx7} alt="speaker zx7" />

          <div className="absolute inset-0 flex flex-col justify-center items-start gap-8 pl-6 md:pl-16 lg:pl-24">
            <h4 className="text-[28px] uppercase leading-[38px] tracking-[2px] font-bold">zx7 speaker</h4>
            <ButtonTwo
            color="black" 
            >see product</ButtonTwo>
          </div>
        </div>

        {/* yx1 speaker */}
        <div className="flex flex-col gap-6 mt-6 md:mt-8 lg:mt-12 md:flex-row">

          <img className="rounded-lg md:hidden lg:hidden" src={smImgSpeakeryx1} alt="speaker yx1" />
          <img className="hidden lg:hidden md:block md:rounded-lg md:w-1/2" src={mdImgSpeakeryx1} alt="speaker yx1" />
          <img className="hidden md:hidden lg:block lg:rounded-lg lg:1/2" src={lgImgSpeakeryx1} alt="speaker yx1" />

          <div className="bg-light-gray flex flex-col justify-center items-start gap-8 rounded-lg pl-6 md:pl-8 lg:pl-24 w-full min-h-[200px]">
            <h4 className="text-[28px] uppercase leading-[38px] tracking-[2px] font-bold">yx1 speaker</h4>
            <ButtonTwo
            color="black" 
            >
            see product
            </ButtonTwo>
          </div>
        </div>

        {/* best gear section */}
        <div className="my-30 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-6">

          <img className="rounded-lg md:hidden lg:hidden" src={smImgBestGear} alt="best gear image" />
          <img className="hidden lg:hidden md:block rounded-lg" src={mdImgBestGear} alt="best gear image" />
          <img className="hidden md:hidden lg:block rounded-lg" src={lgImgBestGear} alt="best gear image" />

          <div className="text-center mt-10 md:max-w-[550px] mx-auto lg:m-0 lg:text-left lg:max-w-[440px]">
            <h4 className="text-[28px] uppercase leading-[38px] tracking-[2px] font-bold md:text-[40px] md:leading-[44px] md:tracking-[1.5px]">Bringing you the <span className="text-burnt-orange">best</span> audio gear</h4>
            <p className="opacity-50 text-[15px] leading-[25px] mt-8">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
        </div>

      </div>

    </main>
  );
}
