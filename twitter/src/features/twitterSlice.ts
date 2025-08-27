import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. Thunk for API call
export const fetchRandomUser = createAsyncThunk(
  "twitter/fetchRandomUser",
  async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const userData = data.results[0];

    return {
      name: `${userData.name.first} ${userData.name.last}`,
      avatar: userData.picture.medium,
    };
  }
);

// fetch("twitter/fetchRandomUser", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: { name: "John Doe", avatar: "https://example.com/avatar.jpg" },
// });
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
  loading: false,
  error: null as string | null,
};

// 2. Slice
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

  // 3. Handle async actions via builder
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchRandomUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      });
  },
});

export const { changeName, changeAvatar, changeStats } = twitterSlice.actions;
export default twitterSlice.reducer;
