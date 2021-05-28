import { PrismaClient } from '.prisma/client'
import { SettingKey } from '../../../src/core'
import sections from './sections'

export default async function installDatabase(prisma: PrismaClient) {
  const install = await prisma.settings.findUnique({
    where: {
      key: SettingKey.InstallDate,
    },
  })

  if (!install) {
    console.log('Starting database installation')
    for (const section of sections) {
      await section(prisma)
    }
    console.log('Database installation complete')
  }
}
