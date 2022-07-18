import { configureStore } from '@reduxjs/toolkit'
import { testReducer } from './Reducers'

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
})
