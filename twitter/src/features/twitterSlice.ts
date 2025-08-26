import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "User",
    avatar:
      "https://png.pngtree.com/png-clipart/20211121/original/pngtree-funny-avatar-vector-icons-png-png-image_6948004.png",
  },
  stats: {
    followers: 0,
    subscribers: 0,
  },
};

const twitterSlice = createSlice({
  name: "twitter",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.user.name = action.payload || state.user.name;
    },
    changeAvatar: (state, action) => {
      state.user.avatar = action.payload || state.user.avatar;
    },
    changeStats: (state, action) => {
      const { type, num } = action.payload;
      state.stats[type] = Math.max(0, state.stats[type] + num);
    },
  },
});

export const { changeName, changeAvatar, changeStats } = twitterSlice.actions;
export default twitterSlice.reducer;
