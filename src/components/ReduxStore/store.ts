import { configureStore } from '@reduxjs/toolkit'
import playReducer from './playSlice'

// Every Feature gets a slice
//  
export const store = configureStore({
  reducer: { playBtn : playReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch