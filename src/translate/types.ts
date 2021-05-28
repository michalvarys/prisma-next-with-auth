import { messages, defaultLocale } from './intl'
export type Locale = keyof typeof messages
export type MessageCode = keyof typeof messages[typeof defaultLocale]
