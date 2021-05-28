import moment from 'moment'
import prisma from '../client'
import {
  SettingKey,
  SettingsMap,
  SettingValueType,
} from '../../../src/core'
import { isArray, isNumber } from 'lodash'

const parseSettingValue = (value: string, type: SettingValueType) => {
  switch (type) {
    case 'array':
      return value
        .split(',')
        .map((record) => record.trim())
        .filter(Boolean)
    case 'date':
      return moment(value).toDate()
    case 'number':
      return Number(value)
    case 'bool':
      return value == 'true'
    default:
      return value
  }
}

const encodeSettingValue = (value: any): string => {
  if (isArray(value)) {
    return value.join(',')
  }

  if (value instanceof Date) {
    return value.toJSON()
  }

  return value.toString()
}

const getSettingType = (value: any): SettingValueType => {
  if (value instanceof Date) {
    return 'date'
  }

  if (value === true || value === false) {
    return 'bool'
  }

  if (isNumber(value)) {
    return 'number'
  }

  if (isArray(value)) {
    return 'array'
  }

  return 'string'
}
export class SettingService {
  static async getValue(key: SettingKey) {
    const setting = await prisma.settings.findUnique({
      where: { key },
    })

    if (!setting) {
      // TODO logging
      console.error(`Setting key ${key} was not found`)
      return
    }

    return parseSettingValue(setting.value, setting.type as SettingValueType)
  }

  static async getValues(
    filter?: Parameters<typeof prisma.settings.findMany>[0]
  ): Promise<Partial<SettingsMap>> {
    const settings = await prisma.settings.findMany(filter)

    return settings
      .map(({ key, type, value }) => ({
        value: parseSettingValue(value, type as SettingValueType),
        key,
        type,
      }))
      .reduce(
        (memo, setting) => ({
          ...memo,
          [setting.key]: setting.value,
        }),
        {}
      )
  }


  static async updateSettings(toUpdate: Partial<SettingsMap>) {
    for (const key in toUpdate) {
      const raw = toUpdate[key]
      const value = encodeSettingValue(raw)
      await prisma.settings.upsert({
        create: {
          key,
          value,
          type: getSettingType(raw),
        },
        update: {
          value,
        },
        where: {
          key,
        },
      })
    }

    return true
  }
}

export default SettingService
