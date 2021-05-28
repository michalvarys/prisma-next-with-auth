import createCache from '@emotion/cache'
import Global from './Global'
import Reset from './Reset'
import { CacheProvider } from '@emotion/react'
import { prefixer } from 'stylis'
export * from './Global'
export * from './Reset'
export * from './utils'
export * from './colors'

const emotionCache = createCache({
  key: 'react-cms',
  stylisPlugins: [prefixer],
})
emotionCache.compat = true

export function withStyles(Component) {
  const WithStyles = (props) => {
    return (
      <CacheProvider value={emotionCache}>
        <Reset />
        <Global />
        <Component {...props} />
      </CacheProvider>
    )
  }

  return WithStyles
}
