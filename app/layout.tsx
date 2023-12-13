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
  metadataBase: new URL('https://199406.xyz'),
  title: {
    default: 'gwt9502 blog',
    template: '%s | gwt9502 blog',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'gwt9502 blog',
    url: 'https://199406.xyz',
    description: 'Developer, writer, and creator.',
    siteName: 'gwt9502',
    locale: 'zh-CN',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'eOrvPPzVQLjGUbFGuat4esonHa1HZ5rOwspVPXZmJvM',
    other: {
      'baidu-site-verification': 'codeva-0z4SD74T5D',
    },
  },
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T6VTVKX9GB"
      />
      <Script id="google-analy">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T6VTVKX9GB');`}
      </Script>
    </html>
  )
}
