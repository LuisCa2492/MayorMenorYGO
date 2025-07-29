import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from './slices/GameSlice'

export const store = configureStore({
  reducer: {
        game: gameSlice.reducer
  },
})