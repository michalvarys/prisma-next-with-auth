import store, { RootDispatch, RootState } from './store'
import { FC } from 'react'
import {
  Provider,
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
} from 'react-redux'

export const useTypedSelector = useSelector as TypedUseSelectorHook<RootState>
export const useTypedDispatch = () => useDispatch<RootDispatch>()
export const ReduxProvider: FC = (props) => {
  return (
    <Provider store={store} {...props}>
      {props.children}
    </Provider>
  )
}

export default store
