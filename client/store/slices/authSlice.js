import { createSlice } from '@reduxjs/toolkit';
import { Magic } from 'magic-sdk';
const initialState = {
  user: [],
  authStatus: false,
};

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user.push(action.payload);
      state.authStatus = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.authStatus = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
