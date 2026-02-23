import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./slices/api/apiSlice";

export const store = configureStore({
  reducer: {
    apiReducer,
  },
});
