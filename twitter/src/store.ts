import { configureStore } from "@reduxjs/toolkit";
import twitterReducer from "./features/twitterSlice";

export const store = configureStore({
  reducer: {
    twitter: twitterReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export type { RootState, AppDispatch }; // 👈 add this
