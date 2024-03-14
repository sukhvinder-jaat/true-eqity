import React from "react";

const BlackButton = ({ content }) => {
  return (
    <button className=" bg-black text-white font-inter lg:text-xl md:text-[35px] sm:text-[30px] text-[24px] md:py-[23px] py-[13px] md:px-[21px] px-3 font-black leading-[96%] hover:scale-90 transition-all ease-in-out duration-300">
      {content}
    </button>
  );
};

export default BlackButton;
