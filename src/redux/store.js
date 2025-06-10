import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./notesSlice.js";

export const store = configureStore({ reducer: rootReducer });
