import smImageHeader from "../assets/home/mobile/image-header.jpg";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="relative">
      <img src={smImageHeader} alt="imageHeader" />
      <div className="text-white absolute inset-0 flex flex-col justify-center items-center text-center md:max-w-6xl md:mx-auto px-8 md:px-0">
        <p className="uppercase opacity-50 text-sm tracking-[10px] mb-[16px]">new product</p>
        <h3 className="text-4xl leading-4xl tracking-[1.2px] uppercase font-bold mb-[24px]">XX99 Mark II HeadphoneS</h3>
        <p className="opacity-75 text-[15px] font-medium mb-[28px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button />
      </div>
    </div>
  );
}
