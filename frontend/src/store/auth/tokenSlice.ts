import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  name: string | null;
  token: string | null;
}

const initialState: AuthState = {
  name: localStorage.getItem("name"),
  token: localStorage.getItem("secret"),
};

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      state.name = action.payload.name;
      state.token = action.payload.token;

      localStorage.setItem("secret", action.payload.token);
      localStorage.setItem("name", action.payload.name);
    },
    clearToken: (state) => {
      state.token = null;
      state.name = null;
      localStorage.removeItem("name");
      localStorage.removeItem("secret");
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
