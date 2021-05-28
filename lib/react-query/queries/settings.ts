import axios from 'axios'
import { Endpoints } from '../../../src/core/api'
import {
  GetWebsiteSettingsResponse,
  GetInstallDateResponse,
} from '../../../src/types'

export const installDatabase = async () => {
  const { data } = await axios.post<GetInstallDateResponse>(
    Endpoints.InstallDatabase()
  )

  return data.data
}

export const getWebsiteSettings = async () => {
  const response = await axios.get<GetWebsiteSettingsResponse>(
    Endpoints.Settings()
  )

  return response.data
}
