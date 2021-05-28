import NextHead from 'next/head'
import { FC } from 'react'

export interface HeadProps {
  title?: string
  appName?: string
}

const Head: FC<HeadProps> = ({ title, children, appName }) => {
  const pageTitle = appName
    ? title
      ? `${title} | ${appName}`
      : appName
    : title ?? ''

  return (
    <NextHead key={title}>
      <title>{pageTitle}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
      <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta charSet="utf-8" />
      {children}
    </NextHead>
  )
}

export default Head
