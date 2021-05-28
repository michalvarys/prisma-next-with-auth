import { MessageCode } from '../translate'
import { useIntl } from 'react-intl'

export const useTranslate = () => {
  const intl = useIntl()
  return (id: MessageCode) => intl.formatMessage({ id, defaultMessage: id })
}

export default useTranslate
