import { PrismaClient } from '@prisma/client'
import { SettingKey, SettingsType } from '../../../../src/core'

export const settings: SettingsType[] = [
  {
    key: SettingKey.InstallDate,
    value: new Date().toJSON(),
    type: 'date',
  },
  {
    key: SettingKey.EmailAddress,
    value: '',
    type: 'string',
  },
  {
    key: SettingKey.SmtpHost,
    value: '',
    type: 'string',
  },
  {
    key: SettingKey.SmtpPort,
    value: '',
    type: 'number',
  },
  {
    key: SettingKey.SmtpUser,
    value: '',
    type: 'string',
  },
  {
    key: SettingKey.SmtpPassword,
    value: '',
    type: 'string',
  },
]

export default async (prisma: PrismaClient) => {
  console.log('Installing settings')
  try {
    await prisma.settings.deleteMany({
      where: {
        key: {
          not: 'delete-everything',
        },
      },
    })

    for (const data of settings) {
      await prisma.settings.create({
        data,
      })
    }
    console.log('Settings installation successfully finished')
  } catch (err) {
    console.log('Settings installation failed')
    console.log(err)
  }
}
