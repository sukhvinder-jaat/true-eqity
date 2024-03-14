import Link from "next/link";
import React from "react";
import { footerLinks, footerTerm } from "./common/Helper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-[64px] mb-[46px] max-w-[1377px] mx-auto xl:px-0 px-[35px]">
      <div className=" flex flex-wrap mb-[64px]">
        {footerLinks.map((link, index) => {
          return (
            <div className="md:w-3/12 sm:w-6/12 w-full" key={index}>
              <ul
                className={`gap-6 flex-col flex ${
                  link.label === "Support" && "md:mt-0 mt-[60px]"
                } ${link.label === "Company" && "md:mt-0 mt-[60px]"} ${
                  link.label === "Categories" && "sm:flex hidden"
                }`}
              >
                <li className=" text-md font-sfPro text-darkBlack font-semibold">
                  {link.label}
                </li>
                {link.content.map((option, i) => {
                  return (
                    <li
                      className=" text-md font-sfPro text-darkBlack font-medium "
                      key={i}
                    >
                      <Link
                        className="transition-all ease-in-out duration-300 hover:opacity-70"
                        href={option.href}
                      >
                        {option.link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className=" bg-black w-full h-[1px] mb-6"></div>
      <p className="text-md font-sfPro text-darkBlack font-medium">
        CompanyName @ {currentYear}. All rights reserved.
      </p>
      <div className="text-md font-sfPro text-darkBlack font-medium flex items-center md:justify-end gap-[33px] md:mt-0 mt-[36px]">
        {footerTerm.map((link, i) => {
          return (
            <Link
              key={i}
              className="transition-all ease-in-out duration-300 hover:opacity-70"
              href={link.href}
            >
              {link.content}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
