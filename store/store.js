import { configureStore } from "@reduxjs/toolkit";
import { authSlice, modalSlice } from "./auth/slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
