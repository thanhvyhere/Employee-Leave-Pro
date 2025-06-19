import axiosInstance from './platform';

// Lấy tất cả đơn nghỉ phép của nhân viên (dành cho manager)
export const getAllEmployeesLeaveRequests = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }
  const res = await axiosInstance.get('/manager/employees-leave-requests', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return res.data;
}; 
// Duyệt đơn nghỉ phép (manager)
export const approveLeaveRequest = async (id) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }
  const res = await axiosInstance.put(`/manager/leave-requests/${id}/approve`, {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return res.data;
}; 