/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/

import React from 'react'

import { PPTelegraph } from '@/libs/fonts'

import Image from 'next/image'
import Link from 'next/link'

import { Flexbox } from './layout'

export const Footer = () => {
  return (
    <footer className="bg-black pt-[75px] pb-[34px]">
        <div className='container px-4'>
<Flexbox direction='col' justify='between' alignItems='center' className='md:flex-row gap-5 md:gap-0 w-full justify-between'>
<Link href="#home" >
        <Image
          alt="Bullion staking"
          loading="lazy"
          width={178}
          height={75}
          src="/footerlogo.svg"
          className='max-w-full'
        />
      </Link>

<Flexbox alignItems='center' direction='col' className='justify-center md:justify-start '>
<ul className='flex flex-wrap items-center justify-center gap-[25px] text-[#E4E4E4]  text-xs xs:text-sm md:text-md lg:text-lg '>
<li>
    <Link  className='hover:text-primary transition-all duration-300' href='#about'>About</Link>
</li>
<li>
    <Link className='hover:text-primary transition-all duration-300' href='#contact'>Contact</Link>
</li>
<li>
    <Link className='hover:text-primary transition-all duration-300' href='/Terms-conditions'>Terms & conditions</Link>
</li>
<li>
    <Link className='hover:text-primary transition-all duration-300' href='/Privacy-policy'>Privacy & policy</Link>
</li>
</ul>
<ul className='flex items-center gap-[31px] text-[#E4E4E4] text-lg mt-[25px]'>
<li className='border border-transparent rounded-full w-10 h-10 flex-center hover:border-primary flex items-center justify-center'>
    <a href='https://www.facebook.com/bullionstaking/' target='_blank' className='w-full h-full flex items-center justify-center'>
    <Image
          alt="facebook"
          loading="lazy"
          width={13}
          height={25}
          src="/facebook.svg"
        />
    </a>
</li>
<li className='border border-transparent rounded-full w-10 h-10 flex-center hover:border-primary flex items-center justify-center'>
    <a href='https://www.instagram.com/bullion_staking/' target='_blank' className='w-full h-full flex items-center justify-center'>
    <Image
          alt="instagram"
          loading="lazy"
          width={23}
          height={23}
          src="/instagram.svg"
        />
    </a>
</li>
<li className='border border-transparent rounded-full w-10 h-10 flex-center hover:border-primary flex items-center justify-center'>
<a href='https://twitter.com/BullionStaking' target='_blank' className='w-full h-full flex items-center justify-center'>
    <Image
          alt="twitter"
          loading="lazy"
          width={27}
          height={22}
          src="/twitter.svg"
        />
    </a>
</li>
</ul>
</Flexbox>




</Flexbox>
<p className={`mt-[75px] text-sm sm:text-xl text-center md:text-start text-[#A1A1A1] ${PPTelegraph.className}`}>© 2024 bullion staking all right reserved</p>
        </div>
    </footer>
  )
}
