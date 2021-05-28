import useTranslate from '../../../../hooks/useTranslate'
import { Button, Form, Input } from 'antd'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export interface LoginFormProps {
  onSubmit: (values: LoginFormType) => void
}

export type LoginFormType = {
  username: string
  password: string
}

const Container = styled.div`
  background: #f8f8f8;
  padding: 10px 20px 0 20px;
  border-radius: 20px;
  border: 1px solid #dedede;
`

function LoginForm({ onSubmit }: LoginFormProps) {
  const t = useTranslate()
  const initialValue = { username: '', password: '' }

  return (
    <Container>
      <h1
        css={css`
          font-size: 25px;
          text-align: center;
        `}
      >
        {t('Login')}
      </h1>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        name="login"
        initialValues={initialValue}
        onFinish={onSubmit}
      >
        <Form.Item
          label={t('Username')}
          name="username"
          rules={[
            { required: true, message: t('Please input your username!') },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('Password')}
          name="password"
          rules={[
            { required: true, message: t('Please input your password!') },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t('Log in')}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}
export default LoginForm
