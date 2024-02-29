/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import { Poppins } from 'next/font/google'
import localFont from "next/font/local";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const poppins = Poppins({
    subsets: ['latin-ext'],
    variable: '--font-poppins',
    weight: '400'
})


export const PPTelegraph = localFont({
  src: [
    {
      path: "../../public/fonts/PP Telegraf/pptelegraf-ultralight.otf",
      weight: "300",
    },
    {
        path: "../../public/fonts/PP Telegraf/pptelegraf-regular.otf",
        weight: "400",
    },
    {
        path: "../../public/fonts/PP Telegraf/pptelegraf-ultrabold.otf",
      weight: "500",
    },
  ],
});
