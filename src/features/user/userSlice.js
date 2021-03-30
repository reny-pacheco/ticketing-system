import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userProfile: {},
  },
  reducers: {
    userStatus: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    userInfo: (state, { payload }) => {
      state.userProfile = payload;
    },
  },
});

export const { userStatus, userInfo } = userSlice.actions;

export const getStatus = (state) => state.user.isLoggedIn;
export const getUserProfile = (state) => state.user.userProfile;

export default userSlice.reducer;
