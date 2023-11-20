import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Sidebar from './components/sidebar'
import ThemeProvider from './components/theme-provider'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import clsx from 'clsx'
import Plum from './components/plum'
import Giscus from './components/giscus'
import Script from 'next/script'
import ScrollToTop from './components/scroll-to-top'

export const metadata: Metadata = {
  // metadataBase: new URL('https://'),
  title: {
    default: 'gwt9502 blog',
    template: '%s | gwt9502 blog',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={clsx(
          'antialiased m-auto box-border dark:text-white/90 transition-colors duration-300',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider>
          <Sidebar />
          <main
            className={clsx(
              'md:max-w-4xl mt-5 m-auto pb-12 px-5 md:px-0',
              'min-h-[calc(100%-4rem)]',
              'box-border'
            )}
          >
            {children}
          </main>
          <Giscus />
          <ScrollToTop />
        </ThemeProvider>
        <Plum />
        <Analytics mode="production" />
      </body>
      <Script
        async
        defer
        src="https://analytics.eu.umami.is/script.js"
        data-website-id={process.env.DATA_WEBSITE_ID}
      />
    </html>
  )
}
