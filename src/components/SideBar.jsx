"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { sidebarLink } from "./common/Helper";
import { SideBarClose } from "./common/Icon";
import Image from "next/image";
const SideBar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="md:pt-16 pt-[31px] max-w-[1377px] w-full mx-auto xl:px-1 px-[22px] flex-grow-0">
      <div className="flex md:justify-end justify-between md:items-start items-center">
        <Link href="#" className=" group">
          <Image
            loading="lazy"
            sizes="100vw"
            src="/assets/images/nav/logo.png"
            alt="logo"
            width={136}
            height={58}
            className=" md:hidden transition-all ease-in-out duration-300 group-hover:scale-90"
          />
        </Link>

        <div className="relative flex">
          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-70 z-10"
              onClick={closeSidebar}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`sidebar w-0 h-0 opacity-0 bg-white end-0 fixed top-0 sm:max-w-[400px] transition-all ease-linear duration-500 transform -z-10 ${
              isSidebarOpen
                ? "translate-x-0 translate-y-0 !w-full !h-full !opacity-100 !z-50"
                : "translate-x-[100%] translate-y-[-100%]"
            }`}
          >
            <div className="min-h-screen flex flex-col justify-center items-center">
              {/* Your sidebar content goes here */}
              <button
                onClick={closeSidebar}
                aria-label="close Sidebar"
                className="absolute top-3 left-3 text-tia-maria"
              >
                <RxCross2 className="w-[43px] h-[43px] hover:scale-90 transition-all ease-in-out duration-300" />
              </button>
              <ul className="flex flex-col gap-5">
                {sidebarLink.map((value, index) => {
                  return (
                    <li
                      key={index}
                      onClick={closeSidebar}
                      className="text-center"
                    >
                      <Link
                        aria-label={value.title}
                        className="font-inter font-medium text-xl transition-all ease-in-out duration-300 hover:opacity-70"
                        key={index}
                        href={value.path}
                      >
                        {value.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">{children}</div>

          {/* Toggle button */}
          <button
            aria-label="Open Sidebar"
            className=" text-tia-maria relative z-10"
            onClick={openSidebar}
          >
            <SideBarClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
