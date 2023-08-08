import { configureStore } from '@reduxjs/toolkit';
import NobelReducer from './nationSlice/NationSlice';

const store = configureStore({
  reducer: {
    nobel: NobelReducer,
  },
});

export default store;
