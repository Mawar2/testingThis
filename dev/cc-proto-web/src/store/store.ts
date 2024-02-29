import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './exampleSlice'
import appointmentsReducer from './appointmentsSlice'

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    appointments: appointmentsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
