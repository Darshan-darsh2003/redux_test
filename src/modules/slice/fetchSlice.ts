// src/features/outlet/outletSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchAction } from "../action/fetchAction";

interface FetchActionState {
  loading: boolean;
  errorData?: string | null;
  error?: boolean;
  data?: any;
}

const initialFetchState: FetchActionState = {
  loading: false,
  errorData: null,
  data: [],
};

const fetchDataSlice = createSlice({
  name: "outlet/fetch",
  initialState: initialFetchState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAction.pending, (state) => {
        state.loading = true;
        state.errorData = null;
        state.data = {};
        state.error = false;
      })
      .addCase(fetchAction.fulfilled, (state, action) => {
        state.loading = false;
        state.errorData = null;
        state.data = action.payload;
        state.error = false;
      })
      .addCase(fetchAction.rejected, (state, action) => {
        state.loading = false;
        state.errorData = action.error.message;
        state.data = {};
        state.error = true;
      });
  },
});

export const fetchDataReducer = fetchDataSlice.reducer;
