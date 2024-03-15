import React from "react"; // Importing React library
import { immobilienCard } from "./common/Helper"; // Importing immobilienCard data from Helper module

const Immobilien = () => {
  // Defining Immobilien functional component
  return (
    <div className="max-w-[1377px] mx-auto xl:mb-[50px] lg:mb-8" id="short">
      {/* Container for Immobilien section */}
      <div className="flex flex-wrap xl:gap-y-[50px] lg:gap-y-6">
        {" "}
        {/* Flex container for cards */}
        {/* Mapping through immobilienCard data */}
        {immobilienCard.map((data, index) => {
          return (
            <div
              key={index}
              className={`lg:w-6/12 w-full ${
                index % 2 === 0
                  ? "xl:pe-[25px] lg:pe-3"
                  : "xl:ps-[25px] lg:ps-3"
              }`}
            >
              <div
                className={`md:min-h-[854px] min-h-[821px] bg-center bg-no-repeat bg-cover xl:pb-[92px] lg:pb-20 pb-10 lg:px-[32px] px-5 flex flex-col justify-end ${data.background} group overflow-hidden`}
              >
                {/* Card content */}
                <p className="xl:text-3xl md:text-[70px] sm:text-[60px] text-[50px]  leading-[120%] text-white font-inter font-bold max-w-[543px] transition-all ease-in-out duration-300 group-hover:translate-x-2">
                  Immobilien, Short
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Immobilien; // Exporting Immobilien component
