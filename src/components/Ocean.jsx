import Image from "next/image";
import React from "react";
import BlackButton from "./common/BlackButton";

const Ocean = () => {
  return (
    <div
      className=" mt-[33px] max-w-[1377px] mx-auto xl:px-0 lg:px-[22px]"
      id="ocean"
    >
      <div className=" flex flex-wrap items-center lg:px-0 md:px-[32px]">
        <div className=" lg:w-6/12 w-full xl:pe-[64px] lg:pe-10 lg:mb-0 mb-[58px] lg:px-0 px-[32px]">
          <p className=" text-black font-inter font-black xl:text-3xl md:text-[70px] sm:text-[60px] text-[52px]  leading-[120%] mb-[34px]">
            Lorem ipsum dolor sit amet consetetur
          </p>
          <BlackButton content="Jetzt buchen" />
        </div>
        <div className=" lg:w-6/12 w-full flex items-center justify-center">
          <div className=" overflow-hidden max-w-[664px]">
            <Image
              loading="lazy"
              sizes="100vw"
              src="/assets/images/ocean/ocean_home.webp"
              width={664}
              height={854}
              className=" hover:scale-110 transition-all ease-in-out duration-300"
              alt="ocean home"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[883px] px-0 mx-auto flex lg:flex-col flex-col-reverse items-center lg:mt-[-85px] lg:mb-[205px]">
        <div className="max-w-[883px] overflow-hidden relative z-10">
          <Image
            loading="lazy"
            sizes="100vw"
            src="/assets/images/ocean/home.webp"
            width={883}
            height={854}
            alt="home"
            className=" hover:scale-110 transition-all ease-in-out duration-300 min-h-[643px]"
          />
        </div>
        <div className=" w-full lg:max-w-[630px] lg:px-0 px-[32px] lg:mt-[86px] md:mt-10 mt-[30px] lg:mb-0 mb-[59px]">
          <p className=" text-black font-inter font-black xl:text-3xl md:text-[70px] sm:text-[60px] text-[52px]  leading-[120%] mb-[34px]">
            Lorem ipsum dolor sit amet,
          </p>
          <BlackButton content="Jetzt buchen" />
        </div>
      </div>
    </div>
  );
};

export default Ocean;
