import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from './reducers/BlogReducer'

export const store = configureStore({
  reducer:{
    Blog: BlogReducer
  }  
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch