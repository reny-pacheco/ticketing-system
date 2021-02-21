import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: undefined,
  },
  reducers: {
    userStatus: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

export const { userStatus } = userSlice.actions;

export const getStatus = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
