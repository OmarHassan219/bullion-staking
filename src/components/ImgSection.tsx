/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React from "react";

import Image from "next/image";

export const ImgSection = () => {
  return (
    <div className="h-48 sm:h-60 flex items-center relative">

      <Image
        alt="squares"
        loading="lazy"
        height={246}
        width={1440}
        src="/shining.png"
        className="w-full h-full object-cover"
        />
    </div>
  );
};
