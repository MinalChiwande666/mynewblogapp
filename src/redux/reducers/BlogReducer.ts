import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BlogsProp{
    data: any
}

const initialState : BlogsProp = {
    data:[]
}


const BlogSlice = createSlice({
    name:'Blogs',
    initialState,
    reducers:{
        setBlogs :(state:any, action:PayloadAction<any>) =>{
            state.data = [...state.data, action.payload]
        }
    }
})

export const {setBlogs} = BlogSlice.actions
export default BlogSlice.reducer