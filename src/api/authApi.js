import axios from 'axios';
import { getToken, clearToken } from '../utils/auth';

const API = axios.create({
  baseURL: 'https://easyrasta.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


API.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  res => res,
  async error => {
    if (error.response?.status === 401) {
      await clearToken();
      // navigation logic here
    }
    return Promise.reject(error);
  }
);

/* 1. SEND OTP */
export const sendOtpApi = data => API.post('/mobile/auth/send-otp', data);

/* 2. VALIDATE OTP */
export const validateOtpApi = data =>
  API.post('/mobile/auth/validate-otp', data);

/* 3. REGISTER */
export const registerApi = data => API.post('/mobile/auth/register', data);

/* 4. LOGIN */
export const loginApi = data => API.post('/mobile/auth/login', data);


export default API;
