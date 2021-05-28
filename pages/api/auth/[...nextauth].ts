import Adapters from 'next-auth/adapters'
import NextAuth, { NextAuthOptions } from 'next-auth'
import prisma from '../../../lib/prisma'
import Providers from 'next-auth/providers'
import { User } from '@prisma/client'
import { Paths, UserRole, decodeToken, encodeUser, JWT_SECRET, signUser } from '../../../src/core'

type Credentials = {
  username: string
  password: string
}

const options: NextAuthOptions = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Login',
      id: 'user-login',

      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'password', type: 'password' },
      },
      async authorize({ username, password }: Credentials) {
        if (!username || !password) {
          throw new Error('no username or password')
        }

        const user = await prisma.user.findFirst({
          where: { AND: { username, password } },
        })

        if (user) {
          delete user.password

          return { ...user, name: user.username }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user: User) {
      if (!!user) {
        token.role = user.role as UserRole
        token.id = user.id.toString()
      }
      return token
    },
    async session(session, user) {
      const encodedToken = signUser(user)

      const profile = await prisma.user.findUnique({
        where: { email: user.email },
        select: {
          email: true,
          id: true,
          firstname: true,
          lastname: true,
          role: true,
          username: true,
          createdAt: true,
        },
      })

      if (session) {
        // @ts-ignore fixme
        session.user.id = profile.id
        session.user.email = profile.email
        // @ts-ignore fixme
        session.user.role = profile.role
      }

      return {
        ...session,
        token: encodedToken,
      }
    },
  },
  pages: {
    signIn: Paths.Login,
    signOut: Paths.Logout,
    error: Paths.Login,
  },
  session: {
    jwt: true,
  },
  adapter: Adapters.Prisma.Adapter({ prisma }),

  jwt: {
    decode: async ({ secret, token }) => {
      return decodeToken(token, secret)
    },
    encode: async ({ secret, token }) => {
      return encodeUser(token, secret)
    },
    secret: JWT_SECRET,
  },
}

export default NextAuth(options)
