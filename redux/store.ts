"use client";

import { configureStore } from "@reduxjs/toolkit";
import navigationSlider from "./features/navigationSlider-slice";

export const store = configureStore({
  reducer: {
    navigationSlider,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
