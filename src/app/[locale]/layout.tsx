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
import { NextIntlClientProvider, useMessages } from "next-intl";


export const metadata: Metadata = {
  title: "Bullion Staking",
  description:
    "Choose a place where your savings transform into gold, blending modern finance with timeless value.",
};

export default function RootLayout({
  children,
  params :{locale}
}: Readonly<{
  children: React.ReactNode;
  params:{
    locale:string
  }
}>) {
  const messages = useMessages();

  return (
    <html lang={locale} className="scroll-smooth" dir={`${locale === "en" ? 'ltr' : 'rtl'}`}>
      <body className={`${poppins.className} bg-[#F3F3F3]`}>
       <NextIntlClientProvider locale={locale} messages={messages}>
        <Header/>
        {children}
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
