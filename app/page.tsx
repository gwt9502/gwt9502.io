import { allBlogs } from 'contentlayer/generated'
import BlogCard from './components/blog/blog-card'

export default function Home() {
  return (
    <section>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((item) => (
          <BlogCard key={item._id} {...item} />
        ))}
    </section>
  )
}
