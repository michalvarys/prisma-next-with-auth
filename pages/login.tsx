import Login from '../src/sections/admin/login/containers/Login'
import router from 'next/router'
import useTranslate from '../src/hooks/useTranslate'
import { getCsrfToken, signIn, useSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import { LoginFormType } from '../src/sections/admin/login/components/LoginForm'
import { message } from 'antd'
import { Paths } from '../src/core'

type LoginPageProps = {
  csrfToken: string
}
function LoginPage({ csrfToken }: LoginPageProps) {
  const [session, loading] = useSession()
  const t = useTranslate()
  
  if (loading) {
    //todo
  }

  if (session) {
    router.push(Paths.Admin)
    return null
  }

  const handleLogin = async ({ username, password }: LoginFormType) => {
    // TODO fix type
    const response = (await signIn('user-login', {
      redirect: false,
      callbackUrl: Paths.Admin,

      csrfToken,
      username,
      password,
    })) as any

    if (!response.ok) {
      message.error(t('Invalid login credentials'))
    }
  }

  return <Login onSubmit={handleLogin} />
}

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async (
  context
) => {
  const token = await getCsrfToken(context)

  return { props: { csrfToken: token || '' } }
}

export default LoginPage
