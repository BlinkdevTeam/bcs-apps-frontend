// src/api/axios.js
import axios from "axios";
import { store } from "../store";
import { refreshSession, logout } from "../store/authSlice";

// VITE_API_URL is the server root (e.g. "http://localhost:3001/").
// Request paths keep their own "/api/..." prefix, same as the services expect.
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not set");
}

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

// One in-flight refresh, shared by every request that gets a 401 at the same time.
let refreshPromise = null;

function refreshAccessToken() {
  if (!refreshPromise) {
    // Reuses the auth slice thunk: it POSTs to /api/auth/refresh with the
    // httpOnly cookie and stores the new user + access token in Redux.
    refreshPromise = store
      .dispatch(refreshSession())
      .unwrap()
      .then(({ accessToken }) => accessToken)
      .finally(() => {
        refreshPromise = null;
      });
  }
  return refreshPromise;
}

// REQUEST: attach the access token from Redux
api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// RESPONSE: on 401, refresh once and retry the original request
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const shouldRefresh =
      originalRequest && // network errors have no config/response
      error.response?.status === 401 &&
      !originalRequest._retry &&
      store.getState().auth.isAuthenticated;

    if (!shouldRefresh) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const accessToken = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      // No `await` on purpose: if the retried request fails (403, 500, ...),
      // that must not fall into the catch below and log the user out.
      return api(originalRequest);
    } catch {
      // Refresh failed — the session is gone. ProtectedLayout redirects to /login.
      store.dispatch(logout());
      return Promise.reject(error);
    }
  },
);

export default api;
