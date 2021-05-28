import { SerializedError } from '@reduxjs/toolkit'
export interface AppState {
  loading: boolean
  initialized: boolean
  error?: SerializedError
}
