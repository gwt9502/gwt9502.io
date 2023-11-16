'use client'
import GiscusCom from '@giscus/react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

const hiddePath = ['/']

export default function Giscus() {
  const { theme } = useTheme()
  const pathName = usePathname()
  if (hiddePath.includes(pathName)) return null
  return (
    <div className="md:max-w-4xl m-auto my-10">
      <GiscusCom
        repo="gwt9502/gwt9502.io"
        repoId={process.env.REPOID ?? ''}
        category="General"
        categoryId="DIC_kwDOKuG_n84Ca_uU"
        mapping="title"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  )
}
