import { configureStore } from "@reduxjs/toolkit";
import personajesReducer from "./slices/personajesSlice";

export const store = configureStore({
  reducer: {
    personajes: personajesReducer,
  },
});