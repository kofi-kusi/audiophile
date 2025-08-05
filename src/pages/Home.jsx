import smImageHeader from "../assets/home/mobile/image-header.jpg";
import mdImageHeader from "../assets/home/tablet/image-header.jpg";
import lgImageHeader from "../assets/home/desktop/image-hero.jpg";
import ButtonOne from "../components/ui/ButtonOne";
import ButtonTwo from "../components/ui/ButtonTwo";
import Category from "../components/ui/Category";
import patternCircles from "../assets/home/desktop/pattern-circles.svg";
import smImgSpeakerzx7 from "../assets/home/mobile/image-speaker-zx9.png";
import lgImgSpeakerzx7 from "../assets/home/desktop/image-speaker-zx9.png";
import mdImgSpeakerzx7 from "../assets/home/tablet/image-speaker-zx9.png";

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
        <div className="absolute inset-0 max-w-6xl mx-auto flex justify-start">
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
      <div className="max-w-6xl mx-auto px-6 my-6">
        <Category />

        <div className="relative bg-burnt-orange text-white mt-30 py-12 rounded-lg overflow-hidden">
          <img
            className="absolute inset-0 -translate-y-9 w-[1000px]"
            src={patternCircles}
            alt=""
          />
          <div className="px-6 inset-0 flex flex-col justify-center items-center lg:flex-row lg:gap-32">
            <div>
              <img
                className="w-[10rem] translate-0 object-scale-down mb-8 md:hidden lg:hidden"
                src={smImgSpeakerzx7}
                alt=""
              />
              <img
                className="hidden translate-0 md:block lg:hidden w-[12rem] object-scale-down mb-8"
                src={mdImgSpeakerzx7}
                alt=""
              />
              <img
                className="hidden md:hidden lg:translate-y-24 lg:block object-scale-down w-[25rem] mb-8"
                src={lgImgSpeakerzx7}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
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
      </div>
    </main>
  );
}
