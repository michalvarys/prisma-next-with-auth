import { FC } from 'react'
import { IntlProvider } from 'react-intl'
import { messages } from '../../translate'
import { useRouter } from 'next/router'

export const Translate: FC = ({ children }) => {
  const router = useRouter()
  const { locale, defaultLocale } = router

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  )
}
export default Translate
