import { IncomingMessage } from 'http'
import { GetServerSidePropsContext } from 'next'
import { SessionWithToken } from '../../lib/secured-endpoint'
import { ApiRequest, SignInResponse } from '../types'

declare module 'next-auth/client' {
  export function signin(
    provider: string,
    data: {
      callbackUrl?: string
      redirect?: boolean
      username: string
      password: string
      csrfToken: string
    }
  ): Promise<SignInResponse>

  export const signIn: typeof signin

  export function session(
    context?:
      | {
        req: ApiRequest
      }
      | {
        req: GetServerSidePropsContext['req']
      }
  ): Promise<SessionWithToken | null>
  export const getSession: typeof session
  declare function useSession(): [SessionWithToken | null | undefined, boolean]
}
