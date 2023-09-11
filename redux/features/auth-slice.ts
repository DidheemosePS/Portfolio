import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isOpen: string;
}

const initialState: InitialState = {
  isOpen: "translate-x-full",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    open: () => {
      return {
        isOpen: "translate-x-0",
      };
    },
    close: () => {
      return initialState;
    },
  },
});

export const { open, close } = auth.actions;
export default auth.reducer;
