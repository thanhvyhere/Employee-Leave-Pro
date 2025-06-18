// src/api/auth.js (hoặc wherever you keep API functions)

import axiosInstance from './platform.js'; // file axios đã cấu hình

export const login = async (username, password) => {
  try {
    const res = await axiosInstance.post('/login', {
      username,
      password,
    });

    const { token, role } = res.data;
    localStorage.setItem("token", token); 
    
    return { token, role };
  } catch (err) {
    console.error("Login failed:", err);
    return { success: false, error: err };
  }
};


export const add = async (username, name, email) => {
  const res = await axiosInstance.post('/employee', {
    username,
    name,
    email,
  })
  return res.data
}

export const deleteEmployee = async (id) => {
  try {
    const res = await axiosInstance.delete(`/employee/${id}`);
    return { success: true, data: res.data };
  } catch (err) {
    console.error("Delete failed:", err);
    return { success: false, error: err };
  }
};


export const getListEmployee = async () => {
  try {
    const res = await axiosInstance.get('/employee');
    return { success: true, data: res.data };
  } catch (err) {
    console.error("Get list failed:", err);
    return { success: false, error: err };
  }
};


