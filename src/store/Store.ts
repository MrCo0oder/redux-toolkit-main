import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import loginReducer from './loginReducer'
import booksSlice  from './getBooksReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer,
    getBooks:booksSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch