import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

enum AppAction {
  SetLoading = '@app/SetLoading',
  InitializeApp = '@app/InitializeApp',
}

export const setLoading = createAction<boolean, AppAction.SetLoading>(
  AppAction.SetLoading
)
export const initializeApp = createAsyncThunk(
  AppAction.InitializeApp,
  async (_, { dispatch }) => {
    // TODO
    await new Promise((resolve) => setTimeout(resolve, 3000))
  }
)
