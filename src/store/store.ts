// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./planSlice";

const store = configureStore({
  reducer: {
    plan: planReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
