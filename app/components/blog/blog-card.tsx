import { Blog } from 'contentlayer/generated'
import CustomLink from '../custom-link'
import Balabcer from 'react-wrap-balancer'
import { use } from 'react'
import redis from '@/lib/redis'

type Props = Blog & {
  view: number
  trackView?: boolean
}

export function BlogCardHeader(props: Props) {
  const { title, readingTime, publishedAt, view, trackView, slug } = props

  if (trackView) {
    use(redis.set(slug, view + 1))
  }

  return (
    <>
      <h3 className="font-semibold text-2xl">
        <Balabcer>{title}</Balabcer>
      </h3>
      <div className="text-sm leading-10 text-neutral-500 dark:text-white/80">
        {publishedAt} · {readingTime.words}字 · {Math.ceil(readingTime.minutes)}
        分钟 · view {view} 次
      </div>
    </>
  )
}

export default function BlogCard(props: Props) {
  return (
    <CustomLink key={props.slug} href={`/blog/${props.slug}`}>
      <BlogCardHeader {...props} />
      <p className="mb-10">{props.summary}</p>
    </CustomLink>
  )
}
