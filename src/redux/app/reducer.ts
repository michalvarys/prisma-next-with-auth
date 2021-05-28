import { createReducer } from '@reduxjs/toolkit'
import { initializeApp, setLoading } from './actions'
import { AppState } from './types'

export const initialAppState: AppState = {
  loading: true,
  initialized: false,
}
const appReducer = createReducer(initialAppState, (builder) =>
  builder
    .addCase(setLoading, (state, { payload }) => {
      state.loading = payload
    })
    .addCase(initializeApp.pending, (state) => {
      state.loading = true
    })
    .addCase(initializeApp.fulfilled, (state) => {
      state.initialized = true
      state.loading = false
    })
    .addCase(initializeApp.rejected, (state, action) => {
      state.error = action.error
    })
)

export default appReducer
