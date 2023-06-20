"use client"
import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixel Mp',
  description: 'Marketplace for richz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Footer />
      </body>
      
      <Script src="https://cdn.sellix.io/static/js/embed.js"/>
    </html>
  )
}
