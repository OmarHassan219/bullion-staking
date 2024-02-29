/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React from "react";

import { Flexbox, Grid } from "./layout";

export const HowSection = () => {
  return (
    <section className=" px-4 pt-[47px] pb-[82px]">
      <Flexbox
        direction="col"
        alignItems="center"
        className="gap-[26px] container px-4"
      >
        <h1 className="capitalize font-semibold text-3xl sm:text-4xl md:text-[42px] leading-[59px] text-[#1A1A1A] ">
          how it works
        </h1>
        <Grid
          gap="5"
          className="md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-20"
        >
          <div className="rounded-[20px] text-[#454545] bg-white py-9 px-6 ">
            <h2 className="capitalize  md: lg:text-[28px] leading-[42px] mb-[37px] font-semibold ">
              1.register
            </h2>
            <h4 className="capitalize font-medium text-md sm:text-lg mb-[19px]">
              get started on your investment journey
            </h4>
            <p className="  text-xs sm:text-sm mb-[20px]">
              Begin your bullion staking adventure by registering with Bullion
              Staking. Provide your basic details and create an account to gain
              access to our secure platform.
            </p>
            <p className="  text-xs sm:text-sm mb-[20px]">
              To ensure the safety and compliance of our investors, we require
              essential documents:
            </p>
            <p className="  text-xs sm:text-sm mb-[20px]">
              <span className="font-semibold">Proof of ID:</span> Upload a clear
              copy of a government-issued ID (e.g., passport or driver’s
              license) to verify your identity.
            </p>
          </div>
          <div className="rounded-[20px] text-[#454545] bg-white py-9 px-6 ">
            <h2 className="capitalize  md: lg:text-[28px] leading-[42px] mb-[37px] font-semibold ">
              2.invest
            </h2>
            <h4 className="capitalize font-medium text-md sm:text-lg mb-[19px]">
              choose your bullion investment plan
            </h4>
            <p className="  text-xs sm:text-sm mb-[20px]">
              Once your registration is complete and documents are verified,
              it’s time to explore our range of bullion investment plans. Select
              the plan that aligns with your financial goals and risk tolerance.
            </p>
            <p className="  text-xs sm:text-sm mb-[20px]">
              At this stage, you’ll have the opportunity to invest in physical
              gold, taking advantage of its enduring value and potential for
              stable returns. Our transparent investment options provide clarity
              on expected monthly income based on your chosen plan.{" "}
            </p>
          </div>
          <div className="rounded-[20px] text-[#454545] bg-white py-9 px-6 ">
            <h2 className="capitalize  md: lg:text-[28px] leading-[42px] mb-[37px] font-semibold ">
              3.earn every month
            </h2>
            <h4 className="capitalize font-medium text-md sm:text-lg mb-[19px]">
              enjoy the fruits of your bullion investment
            </h4>
            <p className="  text-xs sm:text-sm mb-[20px]">
              Congratulations! You’ve successfully invested in bullion with
              Bullion Staking. As long as your gold is securely stored with us,
              you’ll receive a fixed monthly income directly to your account.
            </p>
            <p className="  text-xs sm:text-sm mb-[20px]">
              Our commitment to providing a steady monthly return is a testament
              to the reliability of bullion staking as a source of passive
              income. You can track your earnings through our user-friendly
              interface, offering transparency and peace of mind.{" "}
            </p>
          </div>
        </Grid>
      </Flexbox>
    </section>
  );
};
