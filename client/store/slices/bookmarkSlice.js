import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookmarksData: [],
};


export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    saveBookmarks: (state, action) => {
      state.bookmarksData = action.payload;
    },
    addBookmarks: (state, action) => {
      state.bookmarksData.push({
        id: action.payload.id,
      });
    },
    removeBookmarks: (state, action) => {
      state.bookmarksData = state.bookmarksData.filter(
        (e) => e.id !== action.payload.id
      );
    },
    removeAllBookmarks: (state, action) => {
      state.bookmarksData = [];
    },
  },

});

export const {
  removeAllBookmarks,
  removeBookmarks,
  addBookmarks,
  saveBookmarks,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
