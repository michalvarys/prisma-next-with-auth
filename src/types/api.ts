import { NextApiRequest, NextApiResponse } from 'next';
import { Params } from 'next/dist/next-server/server/router';
import { SettingKey, SettingsMap, UserRole } from '../core';
import {
  User,
} from '@prisma/client'

export type Await<T> = T extends PromiseLike<infer U> ? U : T
export type ID = number
export type WithId<T> = T & {
  id: ID
}

export type SignInResponse = {
  error: 'CredentialsSignin'
  ok: boolean
  status: number
  url: string | null
}

export type ResponseBody<T = any> = {
  error?: string
  trace?: string
  data?: T
}

export type UserProfile = Omit<
  User,
  'password' | 'updatedAt' | 'createdAt' | 'role'
> & { role: UserRole | string }

export type UserProfileWithPassword = UserProfile & { password: string }

export type ApiRequest<RequestBody = any, QueryParams = any> = Omit<
  NextApiRequest,
  'body' | 'query'
> & {
  user: UserProfile
  body: RequestBody
  query: QueryParams
}

export type ApiResponse<ResponseData = any> = NextApiResponse<ResponseData>
export type ApiHandler<
  ResponseData = any,
  RequestBody = any,
  QueryParams = Params
  > = (
    req: ApiRequest<RequestBody, QueryParams>,
    res: ApiResponse<ResponseData>
  ) => void | Promise<void>


// Settings
export type UpdateSettingsBody = Partial<SettingsMap>
export type UpdateSettingsResponse = ResponseBody<boolean>

export type GetWebsiteSettingsResponse = ResponseBody<
  Omit<SettingsMap, SettingKey.InstallDate>
>

export type GetInstallDateResponse = ResponseBody<
  Pick<SettingsMap, SettingKey.InstallDate>
>