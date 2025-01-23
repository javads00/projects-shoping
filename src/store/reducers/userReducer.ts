import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { GenerateSlice } from "../generateSlice";
import { UserInterface } from "@/interfaces/index";

const slice = GenerateSlice<UserInterface, SliceCaseReducers<UserInterface>>({
  initialState: {},
  name: "User",
  reducers: {
    loginUser: (state, { payload }: PayloadAction<UserInterface>) => {
      state.accessToken = payload.accessToken;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.mobile = payload.mobile;
      state.nationalCode = payload.nationalCode;
      state.refreshToken = payload.refreshToken;
      state.updatedAt = payload.updatedAt;
    },
    logOutUser: (state) => {
      state.accessToken = null;
      state.address = null;
      state.firstName = null;
      state.lastName = null;
      state.mobile = null;
      state.nationalCode = null;
      state.refreshToken = null;
      state.updatedAt = null;
    },
    saveAvatar: (state, { payload }: PayloadAction<string>) => {
      state.avatar = payload;
    },
  },
});

export const { loginUser, saveAvatar, logOutUser } = slice.actions;
export default slice.reducer;
