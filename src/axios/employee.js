import axiosInstance from './platform.js';

export const getLeaveRequests = async (selectedStatus) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axiosInstance.get('/my-leave-requests', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        status: selectedStatus,
      },
    });
    return res.data;
  } catch (err) {
    console.error('Failed to fetch leave requests:', err);
    return [];
  }
};


import axiosInstance from './platform';

// Lấy thông tin nhân viên
export const getEmployeeProfile = async (token) => {
  const res = await axiosInstance.get(`/auth/profile`, {
    params: { token: token }
  });
  return res.data;
};

// Lấy số ngày phép còn lại
export const getLeaveBalance = async (userId) => {
  const res = await axiosInstance.get(`/leave-balance/left`, {
    params: { user_id: userId }
  });
  return res.data;
};
export const createLeaveRequest = async ({ leave_dates, reason }) => {
  const token = localStorage.getItem('token');
  let user_id = null;
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    user_id = JSON.parse(jsonPayload).user_id;
  }
  if (!user_id) {
    throw new Error("No user_id found in token");
  }
  try {
    const res = await axiosInstance.post(
      '/leave-requests',
      { leave_dates, reason },
      { headers: { 'user-id': user_id } }
    );
    return res.data;
  } catch (err) {
    // Log lỗi chi tiết từ backend
    if (err.response) {
      console.error('Backend error:', err.response.data);
      throw new Error(err.response.data.message || "Error submitting request");
    }
    throw err;
  }
};
export const getLeaveRequests = async () => {
  const res = await axiosInstance.get('/leave-requests');
  return res.data;
};