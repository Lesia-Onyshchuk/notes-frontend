import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice.js";

export const selectNotes = (state) => state.notes;
export const selectFilteredNotes = createSelector(
  [selectNotes, selectNameFilter],
  (notes, nameFilter) => {
    console.log("notes:", notes);
    const normalizedFilter = (nameFilter ?? "").toLowerCase();
    return notes.notes.filter((note) =>
      note.title.toLowerCase().includes(normalizedFilter)
    );
  }
);
