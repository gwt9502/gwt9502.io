'use client'

// import { createViewCountBySlug } from '@/lib/actions'
import { useEffect } from 'react'

type ViewCountProps = {
  slug: string
  count: number
  trackView?: boolean
}

export default function ViewCount({ slug, count, trackView }: ViewCountProps) {
  useEffect(() => {
    if (trackView) {
      // createViewCountBySlug(slug)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {`${count.toLocaleString()} views`}
    </p>
  )
}
