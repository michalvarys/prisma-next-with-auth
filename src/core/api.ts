import { API_URL } from '../constants'
import { ID } from '../types'

export enum UserRole {
  User = 'user',
  Admin = 'admin',
  Developer = 'developer',
}

export enum Endpoint {
  Permissions = '/api/permissions',
  Settings = '/api/settings',
  Users = '/api/users',
}

export const Endpoints = {
  Settings: () => `${API_URL}${Endpoint.Settings}`,
  InstallDatabase: () => `${API_URL}${Endpoint.Settings}/install`,

  Users: () => `${API_URL}${Endpoint.Users}`,
  User: (id: ID) => `${API_URL}${Endpoint.Users}/${id}`,

}
