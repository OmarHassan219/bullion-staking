/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React from "react";

import Image from "next/image";

import { Flexbox, Grid } from "./layout";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <Grid gap="[30px]" className="md:grid-cols-2 xl:gap-0 container px-4">
        <Flexbox className="xs:justify-center max-w-full">
          <Image
            alt="Bullion Staking"
            loading="lazy"
            width={493}
            height={448}
            src="/smallalloy.png"
            className="max-w-full max-h-full"
          />
        </Flexbox>
        <Flexbox
          direction="col"
          justify="center"
          className="gap-6 w-full lg:w-[471px] max-w-full"
        >
          <Flexbox direction="col" className="gap-3">
            <p className="text-lg capitalize font-semibold text-[#272727]">
              about us
            </p>
            <p className="text-sm xs:text-md sm:text-lg  lg:text-xl  text-[#454545]">
              Founded with a vision to redefine the landscape of secure
              investments, Bullion Staking emerged as a pioneering force in the
              realm of precious metals.
            </p>
          </Flexbox>
          <Flexbox direction="col" className="gap-3">
            <p className="text-lg capitalize font-semibold text-[#272727]">
              Vision and Values
            </p>
            <p className="  text-sm xs:text-md sm:text-lg   lg:text-xl   text-[#454545]">
              To be the forefront destination for secure and lucrative bullion
              investments, empowering individuals worldwide to safeguard and
              grow their wealth.
            </p>
          </Flexbox>
          <button
            className="   w-[116px] h-7 text-sm xs:text-4 xs:w-[126px] xs:h-9 py-0 px-[10px] xs:py-1 xs:px-[18.5px] flex items-center justify-center  rounded-full  text-white font-medium border border-transparent bg-primary hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            type="button"
          >
            Read More
          </button>
        </Flexbox>
      </Grid>
    </section>
  );
};
