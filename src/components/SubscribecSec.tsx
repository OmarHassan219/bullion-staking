/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/

import React from "react";

import Image from "next/image";

import { Flexbox } from "./layout";

const SubscribecSec = () => {
  return (
    <section id="contact">
      <div className="conatiner px-4 pb-[82px]">
        <Flexbox direction="col" alignItems="center" className="gap-[25px]">
          <h1 className="font-bold text-5xl text-center">
            Get in touch with us for<br/> more information
          </h1>
          <Flexbox justify="between" alignItems="center" className="bg-gradient-to-r from-white to-[#eeeeee] cursor-pointer pl-[36px] py-[3px] pr-[3px] gap-[59px]  rounded-full border border-black">
<p className="text-lg text-[#000000]/70">Subscribe</p>
<div>
<Image
            alt="subscribe"
            loading="lazy"
            width={55}
            height={55}
            src="/rightarrow.svg"
            className=""
          />
</div>
          </Flexbox>
        </Flexbox>
      </div>
    </section>
  );
};

export default SubscribecSec;