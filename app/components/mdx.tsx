import { useMDXComponent } from 'next-contentlayer/hooks'
import CustomLink from './custom-link'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'

const components: any = {
  a: CustomLink,
  Image: (props: ImageProps) => (
    <Image
      {...props}
      alt={props.src.toString()}
      className={clsx(props.className, 'rounded-lg')}
    />
  ),
}

type MdxProps = {
  readonly code: string
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <article className="prose prose-stone dark:prose-invert">
      <Component components={components} />
    </article>
  )
}
