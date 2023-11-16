import { allBlogs } from 'contentlayer/generated'
import { BlogCardHeader } from '@/app/components/blog/blog-card'
import { notFound } from 'next/navigation'
import Mdx from '@/app/components/mdx'
import { Metadata } from 'next'

type BlogSlugProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: BlogSlugProps): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }
  const { title, publishedAt: publishedTime, summary: description } = post
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      // url: window.location.href,
    },
  }
}

export default function BlogSlug({ params }: BlogSlugProps) {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <section>
      <BlogCardHeader {...post} />
      <Mdx code={post.body.code} />
    </section>
  )
}
