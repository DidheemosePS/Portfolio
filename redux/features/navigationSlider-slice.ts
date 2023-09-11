import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isOpen: string;
}

const initialState: InitialState = {
  isOpen: "-translate-y-full",
};

export const navigationSlider = createSlice({
  name: "auth",
  initialState,
  reducers: {
    open: () => {
      return {
        isOpen: "-translate-y-0",
      };
    },
    close: () => {
      return initialState;
    },
  },
});

export const { open, close } = navigationSlider.actions;
export default navigationSlider.reducer;
