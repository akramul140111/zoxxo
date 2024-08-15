import axios from 'axios';
import { isBrowser } from '../utils';

const authInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/auth`,
  withCredentials: true, // for sending cookies
});

// Adding interceptor so that on every request, authorization header should be available
authInstance.interceptors.request.use((c) => {
  const updated = {
    ...c,
    headers: {
      ...c.headers,
      Authorization: isBrowser() ? `${localStorage.getItem('zoxxo-token')}` : '',
    },
  };
  return updated;
});

authInstance.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err.response?.data || { message: err.message })
);

export const register = (data) => {
  return authInstance.post('/register', data);
};

export const login = (data) => {
  return authInstance.post('/login', data);
};

export const googleLogin = (code) => {
  return authInstance.post(`/google-login?authCode=${code}`);
};

let promise;
export const getLoggedIn = () => {
  if (promise) return promise;
  else {
    promise = authInstance.get('/');
    return Promise.resolve(promise).finally(() => {
      promise = null;
    });
  }
};

export const logoutUser = () => {
  return authInstance.get('/logout');
};

export const sendResetPasswordEmail = (email) => {
  return authInstance.post('/forgot-password', { email });
};

export const resetPassword = (newPassword, token) => {
  return authInstance.post('/reset-password', { newPassword, token });
};

export const resendEmailVerificationMail = (email) => {
  return authInstance.post('/resend-email-verification-mail', { email });
};
