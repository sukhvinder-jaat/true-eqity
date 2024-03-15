import React from "react"; // Importing React library

const BlackButton = ({ content }) => {
  // Defining BlackButton functional component, taking 'content' as prop
  return (
    <button
      className=" bg-black text-white font-inter lg:text-xl md:text-[35px] sm:text-[30px] text-[24px] md:py-[23px] py-[13px] md:px-[21px] px-3 font-black leading-[96%] hover:scale-90 transition-all ease-in-out duration-300" // CSS classes for styling the button
      aria-label={content} // Accessible label for the button
    >
      {content}
    </button>
  );
};

export default BlackButton; // Exporting BlackButton component
