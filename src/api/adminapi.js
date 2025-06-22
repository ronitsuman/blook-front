import axiosInstance from '../api/axiosInstance';

// Get pending spaces
const fetchPendingSpaces = async () => {
  try {
    const res = await axiosInstance.get('/admin/spaces/pending');
    return res.data;
  } catch (error) {
    console.error('Error fetching spaces:', error);
    throw error;
  }
};

// Approve space
const approveSpace = async (spaceId) => {
  try {
    const res = await axiosInstance.patch(`/admin/spaces/${spaceId}/approve`);
    return res.data;
  } catch (error) {
    console.error('Approval failed:', error);
    throw error;
  }
};
