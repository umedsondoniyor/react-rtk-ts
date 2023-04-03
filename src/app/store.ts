import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "../features/results/resultsSlice";

const store = configureStore({
  reducer: {
    results: resultsReducer,
  },
});

// Export the AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;