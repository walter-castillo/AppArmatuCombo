import { configureStore } from "@reduxjs/toolkit";
import comboReducer from "./slices/comboSlice";

export const store = configureStore({
  reducer: {
      combo: comboReducer,
  },
});