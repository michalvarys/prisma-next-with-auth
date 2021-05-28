import axios from 'axios'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'

export function Session() {
  const [session, loading] = useSession()

  useEffect(() => {
    if (!session) {
      return
    }
    axios.defaults.headers['Authorization'] = `Bearer ${session.token}`
  }, [session])
  return null
}
export default Session
