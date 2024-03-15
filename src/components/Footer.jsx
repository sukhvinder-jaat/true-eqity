import Link from "next/link"; // Importing Link component from next/link
import React from "react"; // Importing React library
import { footerLinks, footerTerm } from "./common/Helper"; // Importing footerLinks and footerTerm from Helper module
import { DemoArrow } from "./common/Icon";

const Footer = () => {
  // Defining Footer functional component
  const currentYear = new Date().getFullYear(); // Getting the current year
  return (
    <div className="md:mt-[104px] sm:mt-20 mt-[31px] mb-[46px] max-w-[1377px] mx-auto xl:px-1 px-[35px]">
      {" "}
      {/* Container for the footer */}
      <div className=" flex flex-wrap mb-[64px]">
        {" "}
        {/* Flex container for footer links */}
        {/* Mapping through footerLinks data */}
        {footerLinks.map((link, index) => {
          return (
            <div className="md:w-3/12 small:w-6/12 w-full" key={index}>
              {" "}
              {/* Div for each column of links */}
              <ul
                className={`gap-6 flex-col flex items-start ${
                  link.label === "Support" && "md:mt-0 mt-[60px]" // Adding margin top based on label
                } ${link.label === "Company" && "md:mt-0 mt-[60px]"} ${
                  link.label === "Resources" && "small:mt-0 mt-[60px]" // Showing categories only on smaller screens
                }`}
              >
                <li className=" text-md font-sfPro text-darkBlack font-semibold">
                  {link.label} {/* Displaying link label */}
                </li>
                {/* Mapping through link content */}
                {link.content.map((option, i) => {
                  return (
                    <li
                      className=" text-md font-sfPro text-darkBlack font-medium "
                      key={i}
                    >
                      <Link
                        aria-label={option.href}
                        className="transition-all ease-in-out duration-300 hover:opacity-70 flex items-center gap-2 group"
                        href={option.href}
                      >
                        {option.link}
                        {option.link === "Request Demo" && (
                          <span className=" md:hidden group-hover:translate-x-3 transition-all ease-linear duration-300">
                            <DemoArrow />
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className=" bg-black w-full h-[1px] mb-6"></div> {/* Divider line */}
      {/* Copyright information */}
      <p className="text-md font-sfPro text-darkBlack font-medium">
        CompanyName @ {currentYear}. All rights reserved.
      </p>
      <div className="text-md font-sfPro text-darkBlack font-medium flex items-center md:justify-end gap-[33px] md:mt-0 mt-[36px]">
        {/* Mapping through footerTerm data */}
        {footerTerm.map((link, i) => {
          return (
            <Link
              key={i}
              aria-label={link.href}
              className="transition-all ease-in-out duration-300 hover:opacity-70"
              href={link.href}
            >
              {link.content} {/* Rendering term link */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer; // Exporting Footer component
