import { IUser, IUserSlice } from "@/types/slices.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserSlice = {};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    deleteUser(state) {
      state.user = undefined;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
