'use client'

import Link from "next/link";
import { JackInTheBox } from 'react-awesome-reveal';

export default function PageNotFound() {
  return (
    <div className="error-page mx-auto max-w-screen-lg px-3 py-6 text-center flex items-center justify-center">
        <JackInTheBox triggerOnce>
            <div className="error-page-con">
                <h3 className="violet text-5xl">404</h3>

                <div className="py-2">Are you lost mate?</div>

                <Link href="/" className="mt-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 smooth-scroll-link" data-target="works">
                  <span className="font-bold">Homepage</span>
                </Link>
            </div>
        </JackInTheBox>
    </div>
  )
}
