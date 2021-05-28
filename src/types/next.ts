import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { Session } from 'next-auth'
import { ParsedUrlQuery } from 'querystring'
import { SettingsMap } from '../core'

export type GetServerSidePropsForWebsite<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
  > = (
    context: GetServerSidePropsContext<Q>,
    extra: {
      settings: Partial<SettingsMap>
      session: Session
    }
  ) => Promise<GetServerSidePropsResult<P>>
