import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    handleSwitch: (state) => {
    
      state.status = !state.status
    },
 
  },
});

// Action creators are generated for each case reducer function
export const { handleSwitch } = switchSlice.actions;

export default switchSlice.reducer;
