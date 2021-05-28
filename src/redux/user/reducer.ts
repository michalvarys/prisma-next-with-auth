import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from './types'

const initialState: UserState = {
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
})
export default userSlice.reducer
