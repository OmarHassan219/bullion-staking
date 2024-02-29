/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React from "react";

import Image from "next/image";

import { ThreeFeatures } from ".";
import {Grid } from "./layout";

export const FeaturesSection = () => {
  return (
    <section className="w-full relative z-0 overflow-hidden bg-[#eee9df]">
      <div className="absolute  -z-10 -bottom-8 -right-8">
        <Image
          alt="squares"
          loading="lazy"
          width={542.6}
          height={396}
          src="/squares.png"
        />
      </div>
      <Grid
        cols="1"
        gap="0"
        className="md:grid-cols-2 md:gap-[87px] gap-9 items-center "
      >
        <ThreeFeatures/>
        <div className="mx-auto max-w-full">
          <Image
            alt="wallet"
            loading="lazy"
            width={513}
            height={513}
            src="/wallet.png"
            className="max-w-full h-auto w-72 lg:w-96 xl:w-[513px] mx-auto"
          />
        </div>
      </Grid>
    </section>
  );
};

