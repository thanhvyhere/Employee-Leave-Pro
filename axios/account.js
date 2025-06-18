// src/api/auth.js (hoặc wherever you keep API functions)

import axiosInstance from './platform.api'; // file axios đã cấu hình

// Hàm login, truyền vào username & password
export const login = async (username, password) => {
  try {
    const res = await axiosInstance.post('/auth/signin', {
      username,
      password,
    });

    const { token, user } = res.data;
    localStorage.setItem("token", token); 

    return { success: true, user };
  } catch (err) {
    console.error("Login failed:", err);
    return { success: false, error: err };
  }
};
