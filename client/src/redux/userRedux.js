import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    userLoginStart: (state) => {
      state.isFetching = true;
      state.currentUser = null;
      state.isError = false;
    },
    userLoginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isError = false;
    },
    userLoginFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    userLogout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.isError = false;
    },
  },
});

export const {
  userLoginStart,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
} = userSlice.actions;
export default userSlice.reducer;
