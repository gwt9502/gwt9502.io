import { Blog } from 'contentlayer/generated'
import CustomLink from '../custom-link'
import Balabcer from 'react-wrap-balancer'

export function BlogCardHeader(props: Blog) {
  const { title, readingTime, publishedAt } = props
  return (
    <>
      <h3 className="font-semibold text-2xl">
        <Balabcer>{title}</Balabcer>
      </h3>
      <div className="text-sm leading-10 text-neutral-500 dark:text-white/80">
        {publishedAt} · {readingTime.words}字 · {Math.ceil(readingTime.minutes)}
        分钟
      </div>
    </>
  )
}

export default function BlogCard(props: Blog) {
  return (
    <CustomLink key={props.slug} href={`/blog/${props.slug}`}>
      <BlogCardHeader {...props} />
      <p className="mb-10">{props.summary}</p>
    </CustomLink>
  )
}
