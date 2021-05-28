import { PrismaClient, User } from '@prisma/client'
import { UserRole } from '../../../../src/core'

const users: Omit<User, 'id' | 'updatedAt' | 'createdAt'>[] = [
  {
    email: 'admin@react-cms.com',
    password: 'admin',
    username: 'admin',
    firstname: 'Admin',
    lastname: 'Adminovic',
    role: UserRole.Admin,
  },
  {
    email: 'user@react-cms.com',
    password: 'user',
    username: 'user',
    firstname: 'User',
    lastname: 'Userovic',
    role: UserRole.User,
  },
  {
    email: 'developer@react-cms.com',
    password: 'developer',
    username: 'developer',
    firstname: 'Developer',
    lastname: 'Develovic',
    role: UserRole.Developer,
  },
]

export default async (prisma: PrismaClient) => {
  console.log('Installing users')
  try {
    await prisma.user.deleteMany({
      where: {
        email: {
          not: 'delete',
        },
      },
    })
    for (const data of users) {
      await prisma.user.create({
        data,
      })
    }
    console.log('Users installation successfully finished')
  } catch (err) {
    console.log('Users installation failed')
    console.log(err)
  }
}
