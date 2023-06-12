import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAPI from "./api";

const initialState = {
    isError: false,
    data: [],
    token: null,
    isLogin: false,
    status: null,
    message: null,
};

export const asyncRegister = createAsyncThunk(
    "auth/register",
    async ({ name, email, password, phone }) => {
        const response = await AuthAPI.register({ name, email, password, phone });
        return response;
    }
)

export const asyncLogin = createAsyncThunk(
    "auth/login",
    async ({ email, password }) => {
        const response = await AuthAPI.login({ email, password });
        return response;
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        unSetAuthUser: (state) => {
            state.isLogin = false;
            state.token = null;
            state.statusLogin = null;
            state.messageLogin = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncLogin.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.status = "success";
                state.isLogin = true;
            })
            .addCase(asyncLogin.rejected, (state, action) => {
                state.status = action.payload.status;
                state.isError = true;
            })
            .addCase(asyncRegister.fulfilled, (state, action) => {
                state.status = action.payload.status;
                // state.message = action.payload.message
            })
            .addCase(asyncRegister.rejected, (state, action) => {
                state.status = action.payload.status;

            })
    }
})

export const auth = (state) => state.auth;

export const { unSetAuthUser, setAuthUser } = authSlice.actions;