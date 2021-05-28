import { Settings } from '.prisma/client'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMutation } from 'react-query'
import prisma from '../lib/prisma'
import { installDatabase } from '../lib/react-query'
import { SettingKey } from '../src/core'
import { Alert, message } from 'antd'
import { Box, Flex } from 'reflexbox'
import { useTranslate } from '../src/hooks'

type InstallProps = {
  installed: Settings | null
}
function Install({ installed }: InstallProps) {
  const { mutate } = useMutation('installDatabase', installDatabase)
  const router = useRouter()
  const t = useTranslate()

  const install = async () => {
    await mutate(undefined, {
      onError(error) {
        message.error(t('Installation failed'))
      },
      onSuccess() {
        message.success(t('Installation complete'))
        router.push('/')
      },
    })
  }

  useEffect(() => {
    if (!installed) {
      install()
    }
  }, [])

  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
      <Box width="100%">
        {installed ? (
          <Alert
            message={t('Error')}
            description={t('Database is already installed')}
            type="error"
            showIcon
          />
        ) : (
          <Alert
            message={t('Installing')}
            description={t('Your database is being installed')}
            type="info"
            showIcon
          />
        )}
      </Box>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps<InstallProps> = async ({
  locale,
}) => {
  const installed = await prisma.settings.findUnique({
    where: {
      key: SettingKey.InstallDate,
    },
  })

  if (installed) {
    return {
      redirect: {
        location: '/',
        permanent: true,
        locale,
      },
      props: { installed: null },
    }
  }

  return {
    props: { installed },
  }
}

export default Install
