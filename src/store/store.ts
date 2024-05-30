// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { fetchDataReducer } from "../modules/slice/fetchSlice";

export const store = configureStore({
  reducer: {
    jsonData: fetchDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
