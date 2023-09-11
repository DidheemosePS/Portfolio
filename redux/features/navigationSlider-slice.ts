"use client";

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isOpen: boolean;
}

const initialState: InitialState = {
  isOpen: false,
};

export const navigationSlider = createSlice({
  name: "navigationSlider",
  initialState,
  reducers: {
    open: () => {
      return {
        isOpen: true,
      };
    },
    close: () => {
      return initialState;
    },
  },
});

export const { open, close } = navigationSlider.actions;
export default navigationSlider.reducer;
