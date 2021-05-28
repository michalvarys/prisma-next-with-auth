import { IconType } from 'react-icons'
import { MessageCode } from '../translate'
import { Params } from 'next/dist/next-server/server/router'

export enum WebsitePath {
  Homepage = '/',
  Install = '/install',
  NotFound = '/404'
}

export enum AdminPath {
  Dashboard = '/admin',
  Logout = '/logout',
  Login = '/login'
}

export type AdminRouteType = {
  icon?: IconType
  title: MessageCode
  pathname?: AdminPath
  params?: Params
  children?: Omit<AdminRouteType, 'icon' | 'children'>[]
}

export const adminRoutes: AdminRouteType[] = [
]

export default adminRoutes
