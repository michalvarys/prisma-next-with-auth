import { RootState } from '../store'

export const isAppLoading = (state: RootState) => state.app.loading
export const isAppInitialized = (state: RootState) => state.app.initialized
export const getAppError = (state: RootState) => state.app.error
