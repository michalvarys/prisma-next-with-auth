import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

export const getPrismaClient = () => prisma

  ; (async () => {
    if (!prisma) {
      prisma = new PrismaClient({
        log: ['query', 'info', `warn`, `error`],
        errorFormat: 'pretty',
      })
    }
    await prisma.$connect()
  })()

export default prisma
