import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: any | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Manual set (keep for flexibility)
    setAuthState: (state, action: PayloadAction<{ isAuthenticated: boolean; token?: string | null; user?: any | null }>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token || null;
      state.user = action.payload.user || null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // Automatically set state when login succeeds
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isAuthenticated = true;
        state.token = payload.token;
        state.user = payload.admin; // adjust based on your API response shape
      }
    );
    // Optionally clear state on logout mutation success
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
      }
    );
  },
});

export const { setAuthState, logout } = authSlice.actions;
export default authSlice.reducer;