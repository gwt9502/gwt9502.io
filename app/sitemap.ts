import { allBlogs } from '.contentlayer/generated'

export default function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://199406.xyz/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = ['', '/category', '/about'].map((route) => ({
    url: `https://199406.xyz${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
