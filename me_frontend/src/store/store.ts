import { configureStore } from "@reduxjs/toolkit";
import { meApi } from "./meApi";
import counterReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(meApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
