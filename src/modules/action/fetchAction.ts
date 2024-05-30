// src/features/outlet/outletActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchDataService, GetDataProps } from "../service/fetchService";

const fetchDataService = new FetchDataService();

export const fetchAction = createAsyncThunk(
  "data/fetch",
  async (props: GetDataProps, thunkAPI) => {
    try {
      const response = await fetchDataService.getData(props);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
