// src/api/axios.js

import axios from 'axios';

// Nếu bạn deploy lên server, có thể dùng biến môi trường để linh động baseURL
const baseURL = 'http://localhost:3001/api'; //import.meta.env.VITE_API_BASE_URL ||

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // Nếu backend gửi cookie (JWT hoặc session)
  timeout: 10000,
});

export default axiosInstance;
