'use client'

import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'

type HeadingScrollSpy = Array<{
  level: number
  text: string
}>

export default function Dir() {
  const [dirs, setDirs] = useState<HeadingScrollSpy>([])
  const [activeId, setActiveId] = useState<string>()

  useEffect(() => {
    const anchElements = document.querySelectorAll('.prose .anchor')
    const dirs: HeadingScrollSpy = []
    anchElements.forEach((anchEle) => {
      const parentElement = anchEle.parentElement
      if (parentElement) {
        dirs.push({
          level: +parentElement.tagName.replace(/H/, ''),
          text: parentElement.getAttribute('id') ?? '',
        })
      }
    })
    setDirs(dirs)
    function onScroll() {
      const windowScrollTop = document.documentElement.scrollTop
      const height = window.screen.height
      anchElements.forEach((anchEle) => {
        const parentElement = anchEle.parentElement
        if (
          parentElement &&
          parentElement.offsetTop - height / 4 <= windowScrollTop
        ) {
          setActiveId(parentElement.getAttribute('id') ?? '')
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const minLevel = useMemo(() => {
    return (
      dirs.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0
    )
  }, [dirs])

  return (
    <div className="max-h-[calc(100vh-9rem-113px)] overflow-auto no-scrollbar pb-4 lg:block scroll-auto">
      <h3 className="text-gray-900 dark:text-gray-100 md:text-xl">目录</h3>
      <ol className="text-black/40 dark:text-white/40">
        {dirs.map(({ level, text }) => {
          return (
            <li key={text} style={{ marginLeft: (level - minLevel) * 16 }}>
              <a
                href={`#${text}`}
                className={clsx(
                  'hover:text-black hover:dark:text-white',
                  activeId === text && 'text-black dark:text-white'
                )}
              >
                {text}
              </a>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
