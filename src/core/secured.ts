import axios from 'axios'
import queryClient from '../../lib/react-query'
import { dehydrate } from 'react-query/hydration'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import Paths from './paths'

export enum UserRole {
  User = 'user',
  Admin = 'admin',
  Developer = 'developer',
}

export function secured<T = any>(handler: GetServerSideProps<T>) {
  return async (ctx: GetServerSidePropsContext) => {
    // without this api doesn't recognize the user and throws 401
    axios.defaults.headers = {
      ...axios.defaults.headers,
      ...ctx.req.headers,
    }

    const session = await getSession(ctx)

    if (!session?.user) {
      return {
        redirect: {
          destination: Paths.Login,
          permanent: false,
        },
      }
    }

    const handlerResponse = await handler(ctx)

    let extraProps = {}
    if ('props' in handlerResponse) {
      extraProps = handlerResponse.props
    }

    return {
      ...handlerResponse,
      props: {
        ...extraProps,
        dehydratedState: dehydrate(queryClient),
      },
    }
  }
}
export default secured
