// src/api/axios.js

import axios from 'axios';

// Nếu bạn deploy lên server, có thể dùng biến môi trường để linh động baseURL
const baseURL = 'http://localhost:3001/api'; //import.meta.env.VITE_API_BASE_URL ||

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // Nếu backend gửi cookie (JWT hoặc session)
  timeout: 10000,
});

// Thêm interceptor để tự động gắn token vào header cho mọi request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
