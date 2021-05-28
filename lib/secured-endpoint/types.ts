import { User } from '@prisma/client'
import { Session } from 'next-auth'
import { ApiHandler } from '../../src/types'

export type WithUserType = (handler: ApiHandler) => ApiHandler
export type SessionUser = Session['user'] &
  Omit<User, 'password' | 'updatedAt' | 'createdAt'>

export type SessionWithToken = Omit<Session, 'user'> & {
  user: SessionUser
  token: string
}
