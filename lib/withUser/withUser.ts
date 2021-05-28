import { getSession } from 'next-auth/client'
import { ApiHandler } from '../../src/types'
import { WithUserType } from './types'

export const withUser: WithUserType =
  (handler: ApiHandler) => async (req, res) => {
    // @ts-ignore fixme
    const session = await getSession({ req })

    if (!session) {
      res.status(400).json({
        error: 'You are not permitted to access this endpoint',
      })
      return
    }
    const { user } = session

    if (!user) {
      res.status(401).json({
        error: 'User was not found.',
      })
      return
    }

    // @ts-ignore fixme
    req.user = user
    await handler(req, res)
  }

export default withUser
