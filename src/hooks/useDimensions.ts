import { useEffect, useState } from 'react'

const isServer = typeof window === 'undefined'

const measureHeight = () =>
  isServer ? 0 : document.documentElement?.clientHeight || window.innerHeight

const measureWidth = () =>
  isServer ? 0 : document.documentElement?.clientWidth || window.innerWidth

export const useHeight = () => {
  const [height, setHeight] = useState<number>(measureHeight())
  const setViewportHeightSize = () => setHeight(measureHeight())

  useEffect(() => {
    window.addEventListener('resize', setViewportHeightSize)
    return () => window.removeEventListener('resize', setViewportHeightSize)
  })

  return height
}

export const useWidth = () => {
  const [width, setWidth] = useState<number>(measureWidth())
  const setViewportWidthSize = () => setWidth(measureWidth())

  useEffect(() => {
    window.addEventListener('resize', setViewportWidthSize)
    return () => window.removeEventListener('resize', setViewportWidthSize)
  })

  return width
}

export const useDimensions = () => {
  const width = useWidth()
  const height = useHeight()
  return { width, height }
}
