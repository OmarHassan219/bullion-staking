/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React from "react";

import { useTranslations } from "next-intl";

import { Flexbox } from "./layout";


export const HeroSection = () => {
const t = useTranslations('Hero');
  return (
    <div className="bg-[url('/Hero.png')] bg-auto  h-[734px]">
      <Flexbox direction="col" justify="center" className=" text-white gap-[30px] p-4 xl:ml-[137px] h-full">
        <Flexbox direction="col" className="  gap-[13px]">
          <h1 className="capitalize text-3xl md:text-4xl lg:leading-[1] lg:text-[46px] font-light text-white ">
            join the future <br /> Of{" "}
            <span className="font-semibold">financial empowerment</span>
          </h1>
          <p className="text-lg ">
            Choose a place where your savings transform into gold,
            <br /> blending modern finance with timeless value.
          </p>
        </Flexbox>
        <button className="font-medium text-xs w-fit sm:text-sm md:text-xl sm:px-5 py-[7px]  bg-primary text-white px-3 rounded-full border border-transparent focus:shadow-none duration-300 hover:border-primary hover:bg-transparent hover:text-primary " type="button">{t('about')}</button>
      </Flexbox>
    </div>
  );
};

