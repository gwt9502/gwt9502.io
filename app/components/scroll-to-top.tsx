'use client'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useWindowScroll, useWindowSize } from 'react-use'

export default function ScrollToTop() {
  const { height, width } = useWindowSize()
  const scroll = useWindowScroll()
  const { theme } = useTheme()

  if (width < 768) return null

  const showIcon = scroll.y > height * 0.75

  return (
    <button
      className={clsx(
        'fixed right-10 bottom-10 z-50',
        showIcon ? 'block' : 'hidden'
      )}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
    >
      <svg
        aria-label="Vercel logomark"
        height="22"
        role="img"
        style={{ width: 'auto', overflow: 'visible' }}
        viewBox="0 0 74 64"
      >
        <path
          d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
          fill={theme === 'dark' ? '#fff' : '#000'}
        />
      </svg>
    </button>
  )
}
