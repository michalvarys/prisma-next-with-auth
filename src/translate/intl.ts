import cs from './cs.json'
import en from './en.json'
import { Locale } from './types'
import { merge } from 'lodash'
import '@formatjs/intl-locale/polyfill'
import '@formatjs/intl-numberformat/polyfill'
import '@formatjs/intl-numberformat/locale-data/en'
import '@formatjs/intl-numberformat/locale-data/cs'

const shared = {
  'language.cs': 'Čeština',
  'language.en': 'English',
}

export const messages = {
  en: merge({}, shared, en),
  cs: merge({}, shared, cs),
}

export const defaultLocale: Locale = 'cs'
export const supportedLocales = Object.keys(messages) as Locale[]
