import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
}

const initialState: NavigationState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // setOrigin:()
  },
});

export const {} = navSlice.actions;

export default navSlice.reducer;
