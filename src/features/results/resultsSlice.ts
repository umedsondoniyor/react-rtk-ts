import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import store from "../../app/store"; // Update this import
import { fetchResults } from "../../services/api";
// Create RootState type
export type RootState = ReturnType<typeof store.getState>;

interface ResultsState {
    results: any[]; // Update this with a specific type if you have one
    status: "idle" | "loading" | "failed";
    totalPages: number;
    currentPage: number;
    error: string | null; // Add this line
  }
  
  const initialState: ResultsState = {
    results: [],
    status: "idle",
    totalPages: 1,
    currentPage: 1,
    error: null, // Add this line
  };
  

export const fetchResultsAsync = createAsyncThunk(
  "results/fetchResults",
  async ({ date, page, limit, desc }: { date: string; page: number; limit: number; desc: boolean }) => {
    const response = await fetchResults(date, page, limit, desc);
    return response;
  }
);


const resultsSlice = createSlice({
    name: "results",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchResultsAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchResultsAsync.fulfilled, (state, action) => {
          state.status = "idle";
          state.results = action.payload.data;
          state.totalPages = action.payload.total_pages;
          state.currentPage = action.payload.current;
        })
        .addCase(fetchResultsAsync.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "An error occurred"; // Add a fallback error message
        });
    },
  });
  
  

export const selectResults = (state: RootState) => state.results;

export default resultsSlice.reducer;
