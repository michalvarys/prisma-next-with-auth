
import { signOut, useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AdminPath } from '../src/core/routes'

const Logout = () => {
  const router = useRouter()
  const [session, loading] = useSession()

  const redirect = () =>
    router.push(AdminPath.Login, undefined, { locale: router.locale })

  const handleLogout = async () => {
    try {
      await signOut({
        redirect: false,
        callbackUrl: AdminPath.Login,
      })
      redirect()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (loading) {
      return
    }

    if (session) {
      handleLogout()
      return
    }

    redirect()
  }, [loading, session])

  return null
}

export default Logout
