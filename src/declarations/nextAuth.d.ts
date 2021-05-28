import { IncomingMessage } from 'http'
import { GetServerSidePropsContext } from 'next'
import { SessionWithToken } from '../../lib/withUser'
import { ApiRequest, SignInResponse } from '../types'

declare module 'next-auth/client' {
  function signin(
    provider: string,
    data: {
      callbackUrl?: string
      redirect?: boolean
      username: string
      password: string
      csrfToken: string
    }
  ): Promise<SignInResponse>

  const signIn: typeof signin

  function session(
    context?:
      | {
          req: ApiRequest
        }
      | {
          req: GetServerSidePropsContext['req']
        }
  ): Promise<SessionWithToken | null>
  const getSession: typeof session
  declare function useSession(): [SessionWithToken | null | undefined, boolean]
}
