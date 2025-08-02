import smImageHeader from "../assets/home/mobile/image-header.jpg";
import mdImageHeader from "../assets/home/tablet/image-header.jpg";
import lgImageHeader from "../assets/home/desktop/image-hero.jpg";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
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
          <div className="text-white flex flex-col justify-center items-center text-center px-8  md:max-w-[380px] md:mx-auto md:px-0 lg:items-start lg:text-left lg:ml-0">
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
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
