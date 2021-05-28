import App from 'next/app'
import Head from '../src/core/components/Head'
import queryClient from '../lib/react-query'
import { Hydrate } from 'react-query/hydration'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { QueryClientProvider } from 'react-query'
import { ReduxProvider } from '../src/redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { withStyles } from '../src/styles'
import '@fontsource/open-sans'
import 'nprogress/nprogress.css'
import 'antd/dist/antd.css'
import { LoadingWrapper, Session, Translate } from '../src/core/components'

function StyleDependencies() {
  const router = useRouter()

  useEffect(() => {
    // Split imports to admin and regular page
    if (router.pathname.match(/^((?!admin)[\s\S])*$/)) {
      /** Regular sites only imports */
    } else {
      /** Admin only inports */
    }
  }, [])

  return null
}
class Application extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <NextAuthProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReduxProvider>
              <Translate>
                <LoadingWrapper>
                  <Head /> <Session />
                  <StyleDependencies />
                  <Component {...pageProps} />
                </LoadingWrapper>
              </Translate>
            </ReduxProvider>
          </Hydrate>
        </QueryClientProvider>
      </NextAuthProvider>
    )
  }
}

export default withStyles(Application)
