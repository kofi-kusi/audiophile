import React from "react";

export default function ProductFeatures({ features, includes }) {
  const text = features.split("\n\n");
  console.log(includes)
  return (
    <div className="flex flex-col gap-28 lg:flex-row">
      <div className="flex flex-col gap-6 lg:max-w-[635px]">
        <h5 className="text-[24px] leading-[33px] tracking-[1.7px] font-bold uppercase md:text-[32px] md:leading-[36px] md:tracking-[1.3px]">
          Features
        </h5>
        <div className="font-normal leading-[25px] opacity-50 tracking-normal">

        <p>{text[0]}</p>
        <br />
        <p>{text[1]}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row lg:flex-col items-start">
        <h5 className="text-[24px] leading-[33px] tracking-[1.7px] font-bold uppercase md:w-1/2 md:text-[32px] md:leading-[36px] md:tracking-[1.3px] lg:w-full">
          In the box
        </h5>
        <ul className="flex flex-col gap-2">
          {
            includes.map(include => {
              return (<li className="flex gap-6">
                <span className="text-[#D87D4A] font-bold tracking-normal">{include.quantity}x</span>
                <span className="font-normal leading-[25px] opacity-50 tracking-normal">{include.item}</span>
              </li>
              )
            })
          }
        </ul>
        
      </div>
    </div>
  );
}
