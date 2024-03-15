import Image from "next/image"; // Importing Image component from next/image
import React from "react"; // Importing React library
import BlackButton from "./common/BlackButton"; // Importing BlackButton component

const Ocean = () => {
  // Defining Ocean functional component
  return (
    <div
      className=" mt-[33px] max-w-[1377px] mx-auto xl:px-1 lg:px-[22px]"
      id="ocean"
    >
      <div className=" flex flex-wrap items-center lg:px-0 md:px-[32px]">
        {" "}
        {/* Flex container for content */}
        {/* Left column with text and button */}
        <div className=" lg:w-6/12 w-full xl:pe-[42px] lg:pe-10 lg:mb-0 mb-[58px]">
          <p className=" text-black font-inter font-black xl:text-3xl md:text-[70px] sm:text-[60px] small:text-[52px] text-[40px] leading-[120%] mb-[34px]">
            Lorem ipsum dolor sit amet consetetur
          </p>
          {/* Rendering BlackButton component */}
          <BlackButton content="Jetzt buchen" />
        </div>
        {/* Right column with image */}
        <div className=" lg:w-6/12 w-full flex items-center justify-center">
          <div className=" overflow-hidden max-w-[664px]">
            {/* Rendering Image component */}
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
      {/* Another section with reversed layout */}
      <div className="max-w-[883px] px-0 mx-auto flex lg:flex-col flex-col-reverse items-center xl:mt-[-85px] lg:mt-[-60px] lg:mb-[205px]">
        <div className="max-w-[883px] overflow-hidden relative z-10">
          {/* Rendering Image component */}
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
        {/* Text and button */}
        <div className=" w-full lg:max-w-[710px] lg:mt-[86px] md:mt-10 mt-[30px] lg:mb-0 mb-[59px]">
          <p className=" text-black font-inter font-black xl:text-3xl md:text-[70px] sm:text-[60px] small:text-[52px] text-[40px] leading-[120%] mb-[34px]">
            Lorem ipsum dolor sit amet,
          </p>
          {/* Rendering BlackButton component */}
          <BlackButton content="Jetzt buchen" />
        </div>
      </div>
    </div>
  );
};

export default Ocean; // Exporting Ocean component
