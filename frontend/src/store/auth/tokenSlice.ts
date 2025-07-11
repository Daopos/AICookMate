import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  name: string | null;
  token: string;
}

const initialState: AuthState = {
  name: JSON.parse(localStorage.getItem("name") || "null"),
  token: JSON.parse(localStorage.getItem("token") || "null"),
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
      state.token = "";
      state.token = "";
      localStorage.removeItem("name");
      localStorage.removeItem("secret");
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
