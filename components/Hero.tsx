'use client';

import Image from 'next/image';
import ReactTyped from "react-typed";
import { HERO_CONTENT, HERO_TITLE, HERO_SUB_TITLE } from '@/utils/constants';
import { html } from '@/utils/utils';
import { JackInTheBox } from 'react-awesome-reveal';

export const Hero = () => {
  return (
    <div className="hero mx-auto max-w-screen-lg px-3 py-6">
        <JackInTheBox triggerOnce>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
          <div className="avatar border rounded-full p-10">
            <Image src="/images/avatar.png" alt="Avatar" className="dark:invert" width={294} height={274} unoptimized/>
          </div>

          <div className="w-3/4">
            <h2 className="text-3xl font-bold hero-title">
               {HERO_TITLE ? (
                <>
                  {html(process.env.HERO_TITLE || HERO_TITLE)}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-hand inline-block w-6 h-6 mx-2">
                  <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
                </svg>
                </>
               ) : ''}
               {html(process.env.HERO_SUB_TITLE || HERO_SUB_TITLE)}
            </h2>

            <div className="mt-6 text-xl leading-9">
              <ReactTyped strings={[process.env.HERO_CONTENT || HERO_CONTENT]} typeSpeed={40}/>
            </div>

            <a href="#works" className="mt-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 smooth-scroll-link" data-target="works">
              <span className="font-bold">See My Works</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
        </JackInTheBox>
      </div>
  )
}

export default Hero;