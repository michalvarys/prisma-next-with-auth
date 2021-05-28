import NProgress from 'nprogress'
import { FC, useEffect } from 'react'
import { isAppLoading } from '../../redux/app/selectors'
import { setLoading } from '../../redux/app/actions'
import { useRouter } from 'next/router'
import { useTypedDispatch, useTypedSelector } from '../../redux'

export const LoadingWrapper: FC = ({ children }) => {
  const loading = useTypedSelector(isAppLoading)
  const dispatch = useTypedDispatch()
  const { events, asPath: currentPath } = useRouter()

  useEffect(() => {
    if (loading && !NProgress.isStarted()) {
      NProgress.start()
    } else if (!loading) {
      NProgress.done()
    }
  }, [loading])

  useEffect(() => {
    const changeStart = (path: string) => {
      // Trigger loading only if path changed
      if (currentPath === path) {
        return
      }
      dispatch(setLoading(true))
    }

    const changeEnd = () => dispatch(setLoading(false))
    events.on('routeChangeStart', changeStart)
    events.on('routeChangeComplete', changeEnd)
    events.on('routeChangeError', changeEnd)
    return () => {
      events.off('routeChangeStart', changeStart)
      events.off('routeChangeComplete', changeEnd)
      events.off('routeChangeError', changeEnd)
    }
  }, [currentPath])

  useEffect(() => {
    // TODO
    dispatch(setLoading(false))
  }, [])

  return <div id="app">{children}</div>
}
export default LoadingWrapper
