import { WebsitePath } from './routes'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { GetServerSidePropsForWebsite } from '../types'
import { getSession } from 'next-auth/client'
import { SettingKey } from './settings'
import { SettingService } from '../../lib/prisma/services'

export function injectSettings<T = {}>(
  handler: GetServerSidePropsForWebsite<T>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const settings = await SettingService.getValues()

    if (!settings[SettingKey.InstallDate]) {
      return {
        redirect: {
          destination: WebsitePath.Install,
          permanent: false,
        },
      }
    }

    const session = await getSession(ctx)

    return handler(ctx, { settings, session })
  }
}
export default injectSettings
