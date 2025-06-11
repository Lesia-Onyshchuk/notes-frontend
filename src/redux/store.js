import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./notesSlice.js";
import { filtersReducer } from "./filtersSlice.js";

export const store = configureStore({
  reducer: { notes: notesReducer, filters: filtersReducer },
});
