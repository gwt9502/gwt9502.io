import RSS from 'rss'
import { allBlogs } from '.contentlayer/generated'

export async function GET() {
  const feed = new RSS({
    title: 'gwt9502 blog',
    description: 'Developer, writer, and creator.',
    site_url: 'https://199406.xyz', // 你的网站域名
    feed_url: 'https://199406.xyz/feed.xml', // 尽可能用绝对 URL
    language: 'zh-CN', // 网站语言代码
    image_url: 'https://199406.xyz/favicon.ico', // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    generator: 'nextjs 14', // 想写什么就写什么，也可以不提供
  })

  const data = allBlogs
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1
      }
      return 1
    })
    .map((post) => {
      feed.item({
        title: post.title,
        guid: post._id,
        url: `https://199406.xyz/blog/${post.slug}`,
        description: post.summary,
        date: new Date(post.publishedAt),
      })
    })

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
