import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: 0,
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    increment: (state) => {
      state.posts += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
