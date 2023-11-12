import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Pogfolio',
  description: 'Pogfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className="bg-slate-900 text-gray-100">
        <SmoothScroll/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
