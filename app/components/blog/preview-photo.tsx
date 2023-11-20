'use client'

import { Suspense } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { PhotoViewProps } from 'react-photo-view/dist/PhotoView'
import 'react-photo-view/dist/react-photo-view.css'

type Props = {
  children: React.ReactNode
}

export function PhotoViewImage(props: PhotoViewProps) {
  return (
    <Suspense fallback={'loading...'}>
      <PhotoView {...props} />
    </Suspense>
  )
}

export default function PreviewProvider(props: Props) {
  return <PhotoProvider>{props.children}</PhotoProvider>
}
