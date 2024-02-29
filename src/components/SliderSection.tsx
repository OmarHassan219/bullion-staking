/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



"use client";
import React, { useRef } from "react";
import Slider from "react-slick";

import Image from "next/image";

import { Flexbox } from "./layout";

const cards = [
  {
    image: "/security.svg",
    imageWidth:67,
    name: "security",
    text: "We prioritize the safety of your investments through cutting-edge technology and stringent security measures.",
  },
  {
    image: "/transparency.svg",
    imageWidth:168,
    name: "transparency",
    text: "Our commitment to openness ensures that you have clear insights into every aspect of your investment journey.",
  },
  {
    image: "/integrity.svg",
    imageWidth:168,
    name: "integrity",
    text: `Upholding the highest standards of integrity in all our dealings is non-negotiable.`,
  },
  {
    image: "/innovation.svg",
    imageWidth:137,
    name: "innovation",
    text: "We embrace innovation to stay at the forefront of the industry, constantly evolving to meet the dynamic needs of our clients.",
  },
];

export const SliderSection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
    centerMode: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
                centerMode: false,

          }
        }
      ]
  };

  return (
    <section className="slider-container overflow-hidden py-[75px]">
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card) => (
            <div key={card.name} className="h-full outline-none" >
          <Flexbox
            direction="col"
            alignItems="center"
            className="bg-white p-4 rounded-[20px]  mx-4 h-full"
          >
            <div className="mb-5">
              <Image
                className="w-[120px] sm:w-[160px]"
                width={167}
                height={167}
                src={card.image}
                alt={card.name}
              />
            </div>
            <p className="text-[28px] font-semibold capitalize leading-[42px] mb-[26px] ">{card.name}</p>
            <p className="text-lg text-center text-[#454545] w-[391px] max-w-full">{card.text}</p>
          </Flexbox>
          </div>
        ))}
      </Slider>
    </section>
  );
};
