import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'https://blook-back.onrender.com/api', // Replace with your actual base URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or Redux if you're storing token there
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
