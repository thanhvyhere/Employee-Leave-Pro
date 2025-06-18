// src/api/auth.js (hoặc wherever you keep API functions)

import axiosInstance from './platform.js'; // file axios đã cấu hình

// Hàm login, truyền vào username & password
export const login = async (username, password) => {
  try {
    const res = await axiosInstance.post('/login', {
      username,
      password,
    });

    
    const { token, role } = res.data;
    localStorage.setItem("token", token); 
    console.log("hello" + token);
    
    return { token, role };
  } catch (err) {
    console.error("Login failed:", err);
    return { success: false, error: err };
  }
};
