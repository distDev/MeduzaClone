import { createSlice } from '@reduxjs/toolkit';




const initialState = {
  user: null,
  authStatus: false,
  magic: null,
  
};

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.authStatus = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.authStatus = false;
      state.magic.user.logout();
      
     
    },
    getMagic: (state, action) => {
      state.magic = action.payload;
     
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, getMagic } = authSlice.actions;

export default authSlice.reducer;
