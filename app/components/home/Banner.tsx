import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[237px] bg-black flex items-center justify-center">
      <div className="h-[137px] relative w-full">
        <Image src={"/hepsi.jpeg"} fill alt=""  className="object-contain"/>
      </div>
    </div>
  );
};

export default Banner;
