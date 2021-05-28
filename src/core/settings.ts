import { Settings } from '.prisma/client'

export enum SettingKey {
  /**
   * Date of the db installation
   */
  InstallDate = 'install_date',

  /**
   * Email address to receive all emails
   */
  EmailAddress = 'email_address',

  /**
   * Smtp hostname
   */
  SmtpHost = 'smtp_host',
  /**
   * Smtp port
   */
  SmtpPort = 'smtp_port',
  /**
   * Smtp username
   */
  SmtpUser = 'smtp_user',
  /**
   * Smtp password
   */
  SmtpPassword = 'smtp_password',

}

export type SettingValueType = 'string' | 'number' | 'date' | 'array' | 'bool'
export interface SettingsType extends Omit<Settings, 'key' | 'type'> {
  key: SettingKey
  type: SettingValueType
}

export type SettingsMap = {
  [key in SettingKey]: any
}

export type WebsiteSettingsType =
  | SettingKey.SmtpHost
  | SettingKey.SmtpPassword
  | SettingKey.SmtpPort
  | SettingKey.SmtpUser

export type WebsiteSettings = {
  [key in WebsiteSettingsType]: any
}
