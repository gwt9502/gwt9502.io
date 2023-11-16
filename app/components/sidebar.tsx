'use client'

import clsx from 'clsx'
import CustomLink from './custom-link'
import SwitchTheme from './switch-theme'
import { useWindowScroll } from 'react-use'
import { useMemo } from 'react'

const navItems = [
  { children: 'Category', href: '/category' },
  { children: 'About', href: '/about' },
  { children: 'Github', href: 'https://github.com/gwt9502/gwt9502.io' },
]

export default function Sidebar() {
  const scroll = useWindowScroll()
  const { y } = useMemo(() => {
    return scroll
  }, [scroll])
  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 h-16',
        y > 0 && 'bg-white dark:bg-neutral-900 shadow-md'
      )}
    >
      <div
        className={clsx(
          'flex justify-between items-center',
          'max-w-4xl h-full m-auto',
          'font-medium text-xl tracking-tighter'
        )}
      >
        <div className="flex-none">
          <CustomLink href="/">Home</CustomLink>
        </div>
        <div
          className={clsx('flex-1 max-w-xl', 'md:flex justify-end', 'hidden')}
        >
          {navItems.map((navItem) => {
            return (
              <CustomLink
                key={navItem.href}
                className={clsx(
                  'mr-10',
                  'border-b-2 border-transparent hover:border-current'
                )}
                {...navItem}
              />
            )
          })}
          <SwitchTheme />
        </div>
      </div>
    </nav>
  )
}
