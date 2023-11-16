'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button onClick={() => setTheme(nextTheme)}>
      <Image
        src={`/${nextTheme}.svg`}
        alt="switch Theme"
        width={23}
        height={23}
      />
    </button>
  )
}
