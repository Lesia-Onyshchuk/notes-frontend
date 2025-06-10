import { createSlice } from "@reduxjs/toolkit";
import { addNote, deleteNote } from "./operations";

const initialState = { notes: [], loading: false, error: null };

const slice = createSlice({
  name: "notes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      });
  },
});

export const rootReducer = slice.reducer;
