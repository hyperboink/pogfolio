'use client'

import { PORTFOLIOS } from '@/utils/constants';
import { url } from '@/utils/utils';
import { JackInTheBox } from 'react-awesome-reveal';

const Portfolio = () => {
  return (
    <div className="content mx-auto max-w-screen-lg px-3 py-6">
        <JackInTheBox triggerOnce>
        <div className="content-title mb-6 text-2xl font-bold" id="works">
          Check some of my <span className="text-purple-500">works</span>:
        </div>
        </JackInTheBox>

        <div className="content-boxes grid grid-cols-2 gap-5">
          <JackInTheBox damping={0.1}>
            {PORTFOLIOS.map((portfolio, i) => (
              <div key={i} className="content-box rounded-md bg-slate-800 p-7 break-words">
                <h3 className="text-xl font-semibold">{portfolio.name}</h3>

                <div className="mt-3 text-gray-400">{portfolio.description}</div>

                <a href={url(portfolio.link)} target="_blank" className={`mt-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800${/(n\/a|down)/g.test(portfolio.status.toLowerCase()) ?' pointer-events-none bg-gray-600': ''}`}>
                  <span className="font-bold">{portfolio.status}</span>
                  
                    {portfolio.status.toLowerCase() === 'visit' ? (
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    ) :
                    portfolio.status.toLowerCase() === 'down' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                      </svg>
                    ) : ''}
                </a>
              </div>
            ))}
          </JackInTheBox>
        </div>
    </div>
  )
}

export default Portfolio;
