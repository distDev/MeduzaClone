import { configureStore } from '@reduxjs/toolkit';
import switchSlice from '../store/slices/swithHeaderSlice';
import authSlice from './slices/authSlice';
import bookmarkSlice from './slices/bookmarkSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      switch: switchSlice,
      login: authSlice,
      bookmark: bookmarkSlice
    },
  });
}

const store = makeStore();

export default store;
