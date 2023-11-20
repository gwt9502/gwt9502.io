import { useMDXComponent } from 'next-contentlayer/hooks'
import CustomLink from './custom-link'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import PreviewProvider, { PhotoViewImage } from './blog/preview-photo'

const components: any = {
  a: CustomLink,
  Image: (props: ImageProps) => (
    <PhotoViewImage src={props.src.toString()}>
      <Image
        {...props}
        alt={props.src.toString()}
        className={clsx(props.className, 'rounded-lg cursor-pointer')}
      />
    </PhotoViewImage>
  ),
}

type MdxProps = {
  readonly code: string
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <article className="prose prose-stone dark:prose-invert">
      <PreviewProvider>
        <Component components={components} />
      </PreviewProvider>
    </article>
  )
}
