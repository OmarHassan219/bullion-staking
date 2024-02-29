/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React from "react";

import Image from "next/image";

export const ImgSection = () => {
  return (
    <div className="w-full max-w-full h-[246px]">
      <Image
        alt="squares"
        loading="lazy"
        height={246}
        width={1440}
        src="/shining.png"
        className="w-full"
      />
    </div>
  );
};
