import React from "react";
import { HeroArrow } from "./common/Icon";
import SideBar from "./SideBar";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" md:min-h-[80vh] min-h-screen flex flex-col relative overflow-hidden">
      <SideBar />
      <div className="max-w-[1377px] mx-auto xl:px-0 px-[22px] w-full translate-y-[-20px] flex-grow-[1] flex flex-col justify-center">
        <p className=" uppercase bg_text_image bg-clip-text bg-true font-black font-inter xl:text-26xl lg:text-[200px] md:text-[160px] md:text-start text-center  sm:text-[99px] text-[70px] text-transparent bg-no-repeat bg-center leading-[96%]">
          TRUE
        </p>
        <p className=" uppercase bg_text_image bg-clip-text bg-true font-black font-inter xl:text-26xl lg:text-[200px] md:text-[160px] md:text-start text-center  sm:text-[99px] text-[70px] text-transparent bg-no-repeat bg-center leading-[96%]">
          EQUITY
        </p>

        <div className=" flex items-center md:justify-between justify-center">
          <p className=" uppercase bg_text_image bg-clip-text bg-true font-black font-inter xl:text-26xl lg:text-[200px] md:text-[160px] md:text-start text-center  sm:text-[99px] text-[70px] text-transparent bg-no-repeat bg-center leading-[96%]">
            FUND
          </p>
          <Link
            href="#ocean"
            aria-label="Visit Ocean Section"
            className=" mt-4 md:block hidden"
          >
            <HeroArrow />
          </Link>
        </div>
        <Link
          href="#ocean"
          aria-label="Jump to Ocean Section"
          className=" mt-4 md:hidden text-center flex justify-center absolute bottom-[20px] w-full end-[-3%]"
        >
          <HeroArrow />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
