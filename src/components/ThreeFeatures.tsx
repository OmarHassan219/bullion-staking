/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/

import React from "react";

import { Flexbox } from "./layout";


export const ThreeFeatures = () => {
  return (
    <Flexbox direction="col" className="py-8 md:py-16 xl:py-24 ">
      <div
        className="hover:bg-primary text-black hover:text-white   group transition-all pl-[32px] sm:pl-[32px] md:pl-[70px] lg:pl-[140px] pt-[10px] pr-9   duration-300"
      >
        <Flexbox direction="col" className="border-b group-hover:border-transparent border-black pb-6">

        <p className="text-lg font-semibold text-primary group-hover:text-white duration-300">
          01
        </p>
        <p className="font-semibold  text-xl sm:text-[32px]">Security:</p>
        <p className="text-sm sm:text-lg ">
          Our cutting-edge facilities in Dubai ensure the utmost security for
          your precious investments.
        </p>
        </Flexbox>
      </div>
      <div
        className="hover:bg-[#fde047] text-black hover:text-white  group transition-all pl-[32px] sm:pl-[32px] md:pl-[70px] lg:pl-[140px] pt-[10px] pr-9   duration-300"
      >
        <Flexbox direction="col" className="border-b group-hover:border-transparent  border-black pb-6">

        <p className="text-lg font-semibold text-primary group-hover:text-white duration-300">02</p>
        <p className="font-semibold text-xl sm:text-[32px]">Transparency:</p>
        </Flexbox>

      </div>
      <div
        className="hover:bg-[#f9a8d4] text-black hover:text-white  group transition-all pl-[32px] sm:pl-[32px] md:pl-[70px] lg:pl-[140px] pt-[10px] pr-9   duration-300"
      >
                <Flexbox direction="col" className="border-b group-hover:border-transparent border-black pb-6">

        <p className="text-lg font-semibold text-primary group-hover:text-white duration-300">03</p>
        <p className="font-semibold text-xl sm:text-[32px]">Expertise:</p>
      </Flexbox>
      </div>
    </Flexbox>
  );
};


