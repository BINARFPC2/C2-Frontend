import { configureStore } from "@reduxjs/toolkit";
import { authSlice, modalSlice, searchSlice } from "./auth/slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    search: searchSlice.reducer
  },
});

export default store;
