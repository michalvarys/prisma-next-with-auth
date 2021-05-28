import reducers from './reducers'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers(reducers)
export const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export default store
