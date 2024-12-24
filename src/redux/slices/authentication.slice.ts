// Redux Import
import { UserRole } from "@/types/Enum/user-role.enum";
import { createSlice } from "@reduxjs/toolkit";

// Interface Import

const initialState: {
  user: { email: string; role: UserRole; _id: string } | null;
  token: string | null;
} = {
  user: null,
  token: null,
};

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, updateUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
