import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginOpen: false,
  isSignUpOpen: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    openLogin: (state) => {
      state.isLoginOpen = true;
      state.isSignUpOpen = false;
    },
    closeLogin: (state) => {
      state.isLoginOpen = false;
    },
    openSignUp: (state) => {
      state.isSignUpOpen = true;
      state.isLoginOpen = false;
    },
    closeSignUp: (state) => {
      state.isSignUpOpen = false;
    },
  },
});

export const { openLogin, closeLogin, openSignUp, closeSignUp } = formSlice.actions;
export const formReducer =  formSlice.reducer;
