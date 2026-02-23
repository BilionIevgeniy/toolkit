import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
