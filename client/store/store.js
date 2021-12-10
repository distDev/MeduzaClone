    import { configureStore } from '@reduxjs/toolkit';
    import switchSlice from '../store/slices/swithHeaderSlice';


    export function makeStore() {
      return configureStore({
        reducer: {
          switch: switchSlice,
        },
      });
    }

    const store = makeStore();

    export default store;