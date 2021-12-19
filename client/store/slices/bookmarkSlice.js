import { createSlice } from '@reduxjs/toolkit';

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
    removeAllBookmarks: (state, action) => {
     state.bookmarksData = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeAllBookmarks, addBookmarks, saveBookmarks } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;
