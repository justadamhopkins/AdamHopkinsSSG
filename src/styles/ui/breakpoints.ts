export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '960px',
  lg: '1200px'
}

type BreakpointKeys = keyof typeof breakpoints

type ThemedCssMethod = {
  [K in BreakpointKeys]: Function
}

export const device = (Object.keys(breakpoints) as BreakpointKeys[]).reduce(
  (acc, key) => {
    acc[key] = (style: String) =>
      `@media (min-width: ${breakpoints[key]}) { ${style} }`
    return acc
  },
  {} as ThemedCssMethod
)
