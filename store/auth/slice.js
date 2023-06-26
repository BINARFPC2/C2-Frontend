import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAPI from "./api";

const initialState = {
  data: [],
  token: null,
  loading: false,
  authenticated: null,
  error: false,
  status: null,
  message: null,
  modalInput: [],
  seatData: [],
  total_passenger: null,
  searchFlight: {
    id: "",
    city_from: "",
    city_to: "",
    dateReturn: "",
    type_seat: "",
    dateDeparture: "",
    passengers: "",
  }
};

export const asyncRegister = createAsyncThunk(
  "auth/register",
  async ({ name, email, password, phone }) => {
    const response = await AuthAPI.register({ name, email, password, phone });
    if (response.status !== "Success") {
      return { error: true, message: response.message }
    }
    return { error: false };
  });

export const asyncLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await AuthAPI.login({ email, password });

    if (response.status === "error") {
      return { error: true, message: "tesss" };
    }
    return { error: false, token: response.token };
  }
);

export const asyncResetPassword = createAsyncThunk(
  "auth/reset",
  async ({ password, confirmPassword }) => {
    console.log(password);
    console.log(confirmPassword);
    const response = await AuthAPI.resetPassword({
      password, confirmPassword
    })
    return response.json()
  }
)

export const asyncForget = createAsyncThunk(
  "auth/forget",
  async ({ email }) => {
    const response = await AuthAPI.forgotPassword({ email });
    return response
  }
)

export const asyncWhoAmI = createAsyncThunk(
  "auth/whoAmI",
  async () => {
    const response = await AuthAPI.whoAmI();
    return response
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unSetAuthUser: (state) => {
      state.authenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncLogin.pending, (state, action) => {
        state.loading = true
      })
      .addCase(asyncLogin.fulfilled, (state, action) => {
        const { error, token, name } = action.payload
        state.token = token;
        state.loading = false;
        state.authenticated = !error;
        state.name = name
        state.error = false;
      })
      .addCase(asyncLogin.rejected, (state, action) => {
        const { error } = action.payload
        state.status = action.payload.status;
        state.authenticated = error;
        state.error = true;
      })
      .addCase(asyncRegister.fulfilled, (state, action) => {
        const { error, message } = action.payload
        state.loading = false;
        state.registered = !error;
        state.message = message
      })
      .addCase(asyncRegister.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(asyncRegister.rejected, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(asyncForget.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(asyncForget.fulfilled, (state, action) => {
        state.status = action.payload.status
        state.loading = false;
        state.message = action.payload.message
      })
      .addCase(asyncForget.rejected, (state, action) => {
        state.status = action.payload.status
        state.message = action.payload.message
      })
      .addCase(asyncWhoAmI.fulfilled, (state, action) => {
        state.data.push({
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          image: action.payload.image_profile,
        })
      })
  },
});

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.modalInput.push(action.payload);
    },
    addInputSeat: (state, action) => {
      state.seatData.push(action.payload);
    },
  },
});

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchFlight: (state, action) => {
      state.searchFlight.id = action.payload.id;
      state.searchFlight.city_from = action.payload.city_from;
      state.searchFlight.city_to = action.payload.city_to;
      state.searchFlight.dateReturn = action.payload.dateReturn;
      state.searchFlight.dateDeparture = action.payload.dateDeparture;
      state.searchFlight.total_passenger = action.payload.total_passenger;
    }
  }
})

export const auth = (state) => state.auth;

export const { unSetAuthUser, setAuthUser } = authSlice.actions;

export const { addInput, addInputSeat } = modalSlice.actions;
export const { addSearchFlight } = searchSlice.actions;
