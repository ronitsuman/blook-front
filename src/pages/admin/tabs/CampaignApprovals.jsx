// src/pages/admin/tabs/CampaignApprovals.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const CampaignApprovals = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axiosInstance.get('/admin/campaigns/pending');
        setCampaigns(res.data.campaigns);
      } catch (err) {
        console.error('Failed to fetch campaigns', err);
      }
    };
    fetchCampaigns();
  }, []);

  const handleApprove = async (id) => {
    await axiosInstance.patch(`/admin/campaigns/${id}/approve`);
    setCampaigns((prev) => prev.filter((c) => c._id !== id));
  };

  const handleReject = async (id) => {
    await axiosInstance.patch(`/admin/campaigns/${id}/reject`);
    setCampaigns((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pending Campaigns</h2>
      <ul className="space-y-4">
        {campaigns.map((c) => (
          <li key={c._id} className="border p-4 rounded shadow">
            <div className="font-semibold">{c.title}</div>
            <div className="text-sm text-gray-600">Status: {c.status}</div>
            <div className="space-x-2 mt-2">
              <button onClick={() => handleApprove(c._id)} className="bg-green-500 text-white px-3 py-1 rounded">
                Approve
              </button>
              <button onClick={() => handleReject(c._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignApprovals;
