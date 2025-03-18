// src/store/planSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Blog } from "../utils/interfaces";

interface BlogState {
  blogs: Blog[] | null;
}

const initialState: BlogState = {
  blogs: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // Sets the single workout plan
    setBlogs(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
    // Updates fields of the existing plan (if any)

    // Removes the current plan (sets it to null)
    resetBlogs(state) {
      state.blogs = null;
    },
  },
});

export const { setBlogs, resetBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
