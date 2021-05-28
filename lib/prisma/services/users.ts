import { ID, UserProfileWithPassword } from '../../../src/types'
import prisma from '../client'

export class UserService {
  static async list(filter?: Parameters<typeof prisma.user.findMany>[0]) {
    return prisma.user.findMany({
      ...filter,
      select: {
        username: true,
        role: true,
        email: true,
        lastname: true,
        firstname: true,
        id: true,
      },
    })
  }

  static async findUser(id: ID) {
    return prisma.user.findUnique({
      where: { id },
    })
  }

  static async create(user: Omit<UserProfileWithPassword, 'id'>) {
    return prisma.user.create({
      data: {
        ...user,
        role: user.role?.toLowerCase(),
      },
    })
  }

  static async update(id: ID, user: UserProfileWithPassword) {
    return prisma.user.update({
      data: {
        ...user,
        role: user.role?.toLowerCase(),
      },
      where: {
        id,
      },
    })
  }

  static async delete(id: ID) {
    return prisma.user.delete({
      where: {
        id,
      },
    })
  }
}

export default UserService
