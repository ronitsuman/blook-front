// src/pages/space-owner/tabs/AnalyticsEarnings.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const AnalyticsEarnings = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axiosInstance.get('/space-owner/dashboard');
        setStats(res.data);
      } catch (err) {
        console.error('Error loading dashboard stats:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div>Loading analytics...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Analytics & Earnings</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-sm text-gray-600">Your Profile</p>
          <p className="text-lg font-semibold">{stats.user.name}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <p className="text-sm text-gray-600">Total Spaces</p>
          <p className="text-2xl font-bold">{stats.user.spaceCount}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <p className="text-sm text-gray-600">Subscription Plan</p>
          <p className="text-lg font-semibold capitalize">{stats.user.subscriptionPlan}</p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow">
          <p className="text-sm text-gray-600">Account Created</p>
          <p className="text-sm">{new Date(stats.user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      {/* Placeholder Earnings section */}
      <div className="bg-white shadow p-6 rounded">
        <h3 className="text-lg font-semibold mb-2">Estimated Earnings</h3>
        <p className="text-3xl font-bold">₹0</p>
        <p className="text-sm text-gray-500">(Connect wallet or wait for bookings)</p>
      </div>
    </div>
  );
};

export default AnalyticsEarnings;
