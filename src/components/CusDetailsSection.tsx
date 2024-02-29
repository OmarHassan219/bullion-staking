/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



"use client";
import React from "react";

import Image from "next/image";

import { CusDetailsForm } from ".";
import { Flexbox, Grid } from "./layout";


export const CusDetailsSection = () => {
  const handleSubmit = (data: unknown) => {
    // Handle form submission logic here
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <section className="py-[39px] px-4">
      <div className="border border-primary rounded-[22px] container px-10 py-10 bg-white p-5">
        <Grid
          cols="1"
          gap="0"
          className="md:grid-cols-2 md:gap-32 gap-9 items-center "
        >
          <Flexbox direction="col" className="gap-[31px]">
            <Flexbox direction="col" className="gap-[12px] ">
              <p className="text-2xl font-semibold text-[rgb(39 39 39/1)]">
                Your safe <br /> haven for a secure future.
              </p>
              <p>
                Physical assets such as Gold have consistently endured <br />{" "}
                various financial challenges over the course of history.
                <br /> Whether you’re diversifying your investment portfolio or{" "}
                <br /> exploring other asset classes, gold provides a reliable
                <br /> safeguard against market volatility.
              </p>
            </Flexbox>
            <button
              type="button"
              className=" py-[7px] px-[12px] capitalize rounded-full w-fit text-[16px] leading-7 text-white font-medium border border-transparent bg-primary hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              get started
            </button>
          </Flexbox>
          <Flexbox
            direction="col"
            className="gap-[15px] md:border-[#E6E6E6] md:pl-16 md:border-l"
          >
            <Flexbox alignItems="center" className="gap-[5px]">
              <Image
                alt="Customer"
                loading="lazy"
                width={36}
                height={36}
                src="/user.svg"
              />
              <p className="text-[#272727] font-semibold text-xl ">
                Customer Details
              </p>
            </Flexbox>
            <CusDetailsForm onSubmit={handleSubmit} />
          </Flexbox>
        </Grid>
      </div>
    </section>
  );
};

