import { Breakpoint } from '../styles'
import { useMedia } from 'react-use'
import { useCallback, useEffect, useState } from 'react'

type RenderBreakpointsParams<T> = {
  [key in Breakpoint]?: T
}
export const useBreakpoint = () => {
  const small = useMedia(`(max-width: ${Breakpoint.Medium}px)`)
  const medium = useMedia(`(min-width: ${Breakpoint.Medium + 0.5}px)`)
  const large = useMedia(`(min-width: ${Breakpoint.Large + 0.5}px)`)
  const [breakpoint, setBreakpoint] = useState(Breakpoint.Small)

  const breakpointValue = useCallback(
    function <T>(params: RenderBreakpointsParams<T>) {
      return params[breakpoint] || null
    },
    [breakpoint]
  )

  useEffect(() => {
    if (large) {
      setBreakpoint(Breakpoint.Large)
    } else if (medium) {
      setBreakpoint(Breakpoint.Medium)
    } else {
      setBreakpoint(Breakpoint.Small)
    }
  }, [small, medium, large])

  return {
    breakpoint,
    breakpointValue,
    isSmallDevice: breakpoint < Breakpoint.Medium,
  }
}
