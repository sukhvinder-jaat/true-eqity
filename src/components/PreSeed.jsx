import React from "react";
import { SeedIcon } from "./common/Icon";

const PreSeed = () => {
  return (
    <div
      className="max-w-[1377px] mx-auto  lg:px-[67px] bg-seed bg-no-repeat bg-cover bg-center lg:min-h-[770px] xl:mb-[50px] flex items-end relative"
      id="preSeed"
    >
      <div className=" lg:px-0 px-[23px] lg:pt-0 pt-[74px]">
        <p className=" max-w-[1000px] lg:mb-[65px] mb-5 xl:text-3xl md:text-[70px] sm:text-[60px] text-[52px]  leading-[120%] text-white font-inter font-black">
          Pre Seed Finanzierung für schweizer Startups
        </p>

        <p className=" lg:text-lg sm:text-[24px] text-[20px] text-white font-inter font-medium max-w-[801px] lg:pb-[129px] pb-[270px] relative">
          Lorem ipsu dolor sita met Lorem ipsu dolor sita met Lorem ipsu dolor
          sita met Lorem ipsu dolor sita met Lorem ipsu dolor sita met Lorem
          ipsu dolor sita met{" "}
        </p>
        <span className=" absolute lg:end-[58px] end-6 lg:bottom-[64px] bottom-[31px]">
          <SeedIcon />
        </span>
      </div>
    </div>
  );
};

export default PreSeed;
