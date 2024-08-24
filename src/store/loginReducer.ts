import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  userName: string | null;
  password: string | null;
}

const initialState: LoginState = {
  userName: null,
  password: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginState>) => {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.userName = null;
      state.password = null;
    },
  },
});
export const isLoggedIn = (state: { login: LoginState }) => 
  state.login.userName !== null && state.login.password !== null;

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
