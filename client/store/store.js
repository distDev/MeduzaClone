import { configureStore } from '@reduxjs/toolkit';
import switchSlice from '../store/slices/swithHeaderSlice';
import authSlice from './slices/authSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      switch: switchSlice,
      login: authSlice,
    },
  });
}

const store = makeStore();

export default store;
