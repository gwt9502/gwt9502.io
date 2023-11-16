'use client'

import { trackEvent } from '@/lib/analytics'
import Link from 'next/link'

type CustomLinkProps = React.ComponentPropsWithRef<typeof Link>

function isOutHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}

export default function CustomLink(props: CustomLinkProps) {
  const { href } = props
  if (!href) return null

  if (typeof href === 'string' && isOutHref(href)) {
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        onClick={() => {
          trackEvent(
            href,
            {
              type: 'Link',
            },
            href
          )
        }}
      />
    )
  }

  return (
    <Link
      {...props}
      onClick={() => {
        const href =
          typeof props.href === 'string' ? props.href : props.href.href ?? ''
        trackEvent(
          href,
          {
            type: 'Navigate',
          },
          href
        )
      }}
    />
  )
}
