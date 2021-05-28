export enum Breakpoint {
  Small = 639,
  Medium = 831,
  Large = 1023,
}

export const screenMaxWidth = (breakpoint: Breakpoint) =>
  `screen and (max-width: ${breakpoint}px)`
export const screenMinWidth = (breakpoint: Breakpoint) =>
  `screen and (min-width: ${breakpoint + 0.5}px)`

export const screenMinMaxWidth = (
  minBreakpoint: Breakpoint,
  maxBreakpoint: Breakpoint
) => `
  screen 
  and (min-width: ${minBreakpoint + 0.5}px) 
  and (max-width: ${maxBreakpoint}px)
`
