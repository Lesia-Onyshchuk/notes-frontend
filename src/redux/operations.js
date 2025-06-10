import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://notes-backend-gjea.onrender.com";

export const addNote = createAsyncThunk(
  "notes/addNote",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/notes", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/notes/${id}`, body);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
