import { getSession } from 'next-auth/client'
import { ApiHandler } from '../../src/types'
import { WithUserType } from './types'
import { decodeToken } from '../../src/core'

export const withUser: WithUserType =
  (handler: ApiHandler) => async (req, res) => {
    // @ts-ignore fixme
    const session = await getSession({ req })


    if (req.headers.authorization) {
      try {
        const [bearer, token] = req.headers.authorization.split(' ')
        const user = decodeToken(token)
        if (user) {
          // @ts-ignore fixme
          req.user = user
          await handler(req, res)
          return
        }
      } catch (err) {
        console.log(err)
      }
    }

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

    req.user = user
    await handler(req, res)
  }

export default withUser
