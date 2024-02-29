/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { poppins } from "@/libs/fonts";

import { Footer, Header } from "@/components";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Bullion Staking",
  description:
    "Choose a place where your savings transform into gold, blending modern finance with timeless value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-[#F3F3F3]`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
