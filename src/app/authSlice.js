import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  sendOtpApi,
  validateOtpApi,
  registerApi,
  loginApi,
} from "../api/authApi";




const handleThunkError = (error, thunkAPI) => {
  const message =
    error?.response?.data?.message ||
    error?.response?.data ||
    error?.message ||
    "Something went wrong";

  return thunkAPI.rejectWithValue(message);
};


/* SEND OTP */
export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async (data, thunkAPI) => {
    try {
      const res = await sendOtpApi(data);
      return res.data;
    } catch (err) {
      return handleThunkError(err,thunkAPI);
    }
  }
);

/* VALIDATE OTP */
export const validateOtp = createAsyncThunk(
  "auth/validateOtp",
  async (data, thunkAPI) => {
    try {
      const res = await validateOtpApi(data);
      return res.data; 
    } catch (err) {
       return handleThunkError(err,thunkAPI);
    }
  }
);

/* REGISTER */
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await registerApi(data);
      return res.data;
    } catch (err) {
      return handleThunkError(err,thunkAPI);
    }
  }
);

/* LOGIN */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await loginApi(data);
      return res.data;
    } catch (err) {
       return handleThunkError(err,thunkAPI);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isRegistered: null,
    user: null,
    accessToken: null,
    role: null,
  },
  reducers: {
  setRole: (state, action) => {
    state.role = action.payload;   
  },
},
  extraReducers: (builder) => {
    
  builder
    .addCase(validateOtp.fulfilled, (state, action) => {
      state.isRegistered = action.payload.isRegistered;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    })

    .addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.loading = true;
        state.error = null;
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state) => {
        state.loading = false;
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
},
});
export const { setRole } = authSlice.actions;


export default authSlice.reducer;
