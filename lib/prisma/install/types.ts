import { PrismaClient } from '@prisma/client'

export type InstallSectionType = (prisma: PrismaClient) => Promise<any>
