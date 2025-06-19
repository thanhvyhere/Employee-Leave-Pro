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
