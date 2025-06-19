import axiosInstance from './platform.js';

export const getLeaveRequests = async (selectedStatus) => {
  try {
    const res = await axiosInstance.get('/my-leave-requests', {
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

// Lấy thông tin nhân viên
export const getEmployeeProfile = async () => {
  const res = await axiosInstance.get(`/auth/profile`);
  return res.data;
};

// Lấy số ngày phép còn lại
export const getLeaveBalance = async () => {
  const res = await axiosInstance.get(`/leave-balance/left`);
  return res.data;
};

export const createLeaveRequest = async ({ leave_dates, reason }) => {
  try {
    const res = await axiosInstance.post(
      '/leave-requests',
      { leave_dates, reason },
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

