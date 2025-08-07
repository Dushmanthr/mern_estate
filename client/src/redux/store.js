import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
  middleare: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})