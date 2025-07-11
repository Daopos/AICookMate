import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";
import tokenReducer from "./auth/tokenSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
