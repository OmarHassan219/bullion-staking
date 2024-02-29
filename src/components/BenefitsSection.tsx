/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React from "react";

import Image from "next/image";

import { Flexbox, Grid } from "./layout";



export const BenefitsSection = () => {
  return (
    <section >
      <Flexbox direction="col" alignItems="center" className="container px-4">
        <Grid
          cols="1"
          gap="9"
          className="md:grid-cols-2 md:gap-32  items-center "
        >
          <Image
            alt="Customer"
            loading="lazy"
            width={532}
            height={474.82}
            src="/withdraw.png"
            className="order-2 md:order-1"
          />
          <Flexbox direction="col" className="gap-3 order-1 md:order-2">
            <p className="font-semibold text-lg">Hedging Against Inflation:</p>
            <p>
              In an ever-changing economic landscape, gold has stood the test of
              time as a reliable hedge against inflation. Bullion staking with
              us allows you to safeguard your wealth by investing in physical
              gold, providing a robust defence against the erosive effects of
              inflation.
            </p>
          </Flexbox>
        </Grid>
        <Grid
          cols="1"
          gap="9"
          className="md:grid-cols-2 md:gap-32  items-center "
        >
          <Flexbox direction="col" className="gap-3">
            <p className="font-semibold text-lg">Steady Monthly Income:</p>
            <p>
              Experience the financial advantage of gold ownership like never
              before. By choosing Bullion Staking, you not only secure your
              wealth but also unlock a unique revenue stream. Receive a fixed
              monthly income as long as your gold is entrusted to our secure
              vaults.
            </p>
          </Flexbox>
          <Image
            alt="Customer"
            loading="lazy"
            width={521.54}
            height={366.03}
            src="/2000.png"
          />
        </Grid>
      </Flexbox>
    </section>
  );
};

