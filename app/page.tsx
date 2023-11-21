import { allBlogs } from 'contentlayer/generated'
import BlogCard from './components/blog/blog-card'
import redis from '@/lib/redis'
import { use } from 'react'

export default function Home() {
  const dataSort = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })

  const views = use(
    redis.mget<number[]>(...dataSort.map(({ slug }) => slug))
  ).reduce((acc, v, index) => {
    acc[dataSort[index].slug] = v ?? 0
    return acc
  }, {} as Record<string, number>)

  return (
    <section>
      {dataSort.map((item) => (
        <BlogCard key={item._id} {...item} view={views[item.slug]} />
      ))}
    </section>
  )
}
