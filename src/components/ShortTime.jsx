import React from "react"; // Importing React library

const ShortTime = () => {
  // Defining ShortTime functional component
  return (
    <div
      className="max-w-[1377px] mx-auto lg:px-[67px] bg-shortTime bg-no-repeat bg-cover bg-center md:min-h-[854px] min-h-[799px] xl:mb-[50px] lg:mb-8 flex items-end  relative group overflow-hidden"
      id="shortTime"
    >
      {/* Title */}
      <p className="xl:text-3xl md:text-[70px] sm:text-[60px] small:text-[52px] text-[40px] leading-[120%] text-white font-inter font-bold max-w-[1060px] lg:px-0 px-[23px] lg:pb-[92px] md:pb-20 pb-[34px] transition-all ease-in-out duration-300 group-hover:translate-x-4">
        Immobilien, Short time rentals, Vacation Rental.
      </p>
    </div>
  );
};

export default ShortTime; // Exporting ShortTime component
