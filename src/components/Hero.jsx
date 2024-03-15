import React from "react"; // Importing React library
import { HeroArrow } from "./common/Icon"; // Importing HeroArrow component from common/Icon
import SideBar from "./SideBar"; // Importing SideBar component
import Link from "next/link"; // Importing Link component from next/link

const Hero = () => {
  // Defining Hero functional component
  return (
    <div className=" md:min-h-[80vh] min-h-screen flex flex-col relative overflow-hidden">
      <SideBar /> {/* Rendering SideBar component */}
      <div className="max-w-[1377px] mx-auto xl:px-1 px-[22px] w-full translate-y-[-20px] flex-grow-[1] flex flex-col justify-center hero_sidebar">
        {/* Render TRUE */}
        <p className=" uppercase bg_text_image bg-clip-text bg-true font-black font-inter xl:text-26xl lg:text-[200px] md:text-[160px] md:text-start text-center  sm:text-[99px] small:text-[90px] text-[70px] text-transparent bg-no-repeat bg-center leading-[96%]">
          TRUE
        </p>
        {/* Render EQUITY */}
        <p className=" uppercase bg_text_image bg-clip-text bg-true font-black font-inter xl:text-26xl lg:text-[200px] md:text-[160px] md:text-start text-center  sm:text-[99px] small:text-[90px] text-[70px] text-transparent bg-no-repeat bg-center leading-[96%]">
          EQUITY
        </p>
        <div className=" flex items-center md:justify-between justify-center">
          {/* Render FUND */}
          <p className=" uppercase bg_text_image bg-clip-text bg-true font-black font-inter xl:text-26xl lg:text-[200px] md:text-[160px] md:text-start text-center  sm:text-[99px] small:text-[90px] text-[70px] text-transparent bg-no-repeat bg-center leading-[96%]">
            FUND
          </p>
          {/* Render HeroArrow with Link to Ocean Section */}
          <Link
            href="#ocean"
            aria-label="Visit Ocean Section"
            className=" mt-4 md:block hidden"
          >
            <HeroArrow />
          </Link>
        </div>
        {/* Render HeroArrow with Link to Ocean Section (for smaller screens) */}
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

export default Hero; // Exporting Hero component
