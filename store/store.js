import { configureStore } from "@reduxjs/toolkit";
import combo2Reducer from "./slices/combo2Slice";
import comboReducer from "./slices/comboSlice";


export const store = configureStore({
  reducer: {
      combo2: combo2Reducer,
      combo: comboReducer,
  },
});