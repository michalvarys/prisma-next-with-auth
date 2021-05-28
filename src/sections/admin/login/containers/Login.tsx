import LoginForm from '../components/LoginForm'
import { colors } from '../../../../styles'
import { css } from '@emotion/react'
import { Flex } from 'reflexbox'

export interface LoginPageProps {
  onSubmit: (credentials: LoginFormType) => void
}

export type LoginFormType = {
  username: string
  password: string
}

function LoginPage({ onSubmit }: LoginPageProps) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      width="100%"
      css={css`
        height: 100vh;
        background: ${colors.white};
      `}
    >
      <LoginForm onSubmit={onSubmit} />
    </Flex>
  )
}
export default LoginPage
