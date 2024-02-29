/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Flexbox } from "./layout";


export const Header = () => {
  const [ isShowMobileNav , setIsShowMobileNav] = useState(false);
  const [isShowLang, setIsShowLang] = useState(false);

  return (
    <div id="home" className="bg-[#F3F3F3] sm:py-5 py-2 px-[10px] xl:px-[88px] ">
      <Flexbox
        direction="row"
        justify="between"
        alignItems="center"
        className="w-full"
      >
        <Image
          className="w-[120px] sm:w-[160px]"
          width={160}
          height={67}
          src="/image 922.svg"
          alt="Bullino Staking"
        />
        <Flexbox
          direction="row"
          justify="between"
          alignItems="center"
          className="text-sm  font-medium gap-4 justify-between sm:gap-[20px] lg:gap-[60px]"
        >
          <p className="  hidden sm:block font-medium text-sm">
        <Link  className='hover:text-primary transition-all duration-300' href='#about'>About Us</Link>
       </p>
          <p className=" hidden sm:block font-medium text-sm">
          <Link className='hover:text-primary transition-all duration-300' href='#contact'>Contact Us</Link>
          </p>
          <div className="relative">
            <div
              onClick={() => setIsShowLang((prev) => !prev)}
              className="flex items-center   cursor-pointer gap-[10px]"
            >
              <p>EN</p>
              <Image width={31} height={31} src="/lang.svg" alt="Language" />
            </div>
            {isShowLang && (
              <ul className="absolute  left-[50%] mt-1 w-16 rounded-md drop-shadow-sm -translate-x-1/2 overflow-hidden bg-white ">
                <li className="hover:bg-primary">
                  <a className="block  text-sm  duration-300  cursor-pointer hover:bg-primary p-2 hover:text-white">
                    EN
                  </a>
                </li>
                <li className="hover:bg-primary block  text-sm  duration-300  cursor-pointer  p-2 hover:text-white">
                  AR
                </li>
              </ul>
            )}
          </div>
          <button
            type="button"
            className="hidden sm:block py-[7px] px-[21px] rounded-full text-sm text-white font-medium border border-transparent bg-primary hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
          >
            Login
          </button>

          <button
            onClick={() => setIsShowMobileNav((prev) => !prev)}
            type="button"
            className="flex items-center justify-center rounded-md bg-primary size-10 flex-center sm:hidden"
          >
            <Image
              className="w-7"
              width={20}
              height={12}
              src="/mobilenav.svg"
              alt="Nav"
            />
          </button>

          <div
            className={`p-5 bg-[#272727] fixed h-full top-0 z-10 w-72 sm:w-96 right-0 transition-all duration-300 justify-center  ${
              isShowMobileNav ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <div className="flex items-center justify-end">
              <button
                onClick={() => setIsShowMobileNav(false)}
                type="button"
                className="flex items-center justify-center rounded-md bg-primary size-10 flex-center"
              >
                <Image
                  alt="close"
                  loading="lazy"
                  width={18}
                  height={18}
                  className="w-7"
                  src="/close.svg"
                />
              </button>
            </div>
            <div className="z-10 flex flex-col items-center gap-4 pt-8">
              <div className=" text-sm font-medium capitalize text-white hover:text-primary ease-in-out duration-200 cursor-pointer ">
                <a href="/#about">About Us</a>
              </div>
              <div className=" text-sm font-medium capitalize text-white hover:text-primary ease-in-out duration-200 cursor-pointer ">
                <a href="/#contact">Contact Us</a>
              </div>

              <button
                type="button"
                className=" py-[7px] px-[12px] rounded-full text-xs text-white font-medium border border-transparent bg-primary hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
              >
                Login
              </button>
            </div>
          </div>
        </Flexbox>
      </Flexbox>
    </div>
  );
};

