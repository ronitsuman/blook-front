// src/pages/space-owner/tabs/Advertisers.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const Advertisers = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await axiosInstance.get('/space-owner/advertisers');
        setAds(res.data);
      } catch (err) {
        console.error('Error fetching advertisers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, []);

  if (loading) return <div>Loading advertiser data...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Interested Advertisers</h2>
      {ads.length === 0 ? (
        <p>No advertiser activity yet.</p>
      ) : (
        <table className="w-full border bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Campaign</th>
              <th className="p-2 border">Target Space</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((a) => (
              <tr key={a._id} className="border-t">
                <td className="p-2 border">{a.advertiser?.name}</td>
                <td className="p-2 border">{a.campaignName}</td>
                <td className="p-2 border">{a.targetSpace?.spaceName}</td>
                <td className="p-2 border">{new Date(a.createdAt).toLocaleDateString()}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => setSelected(a)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
            <h3 className="text-lg font-semibold mb-2">Advertiser Detail</h3>
            <p><strong>Advertiser:</strong> {selected.advertiser?.name}</p>
            <p><strong>Email:</strong> {selected.advertiser?.email}</p>
            <p><strong>Campaign:</strong> {selected.campaignName}</p>
            <p><strong>Target Space:</strong> {selected.targetSpace?.spaceName}</p>
            <p><strong>Goal:</strong> {selected.objective}</p>
            <p><strong>Budget:</strong> ₹{selected.budget}</p>
            <p><strong>Created:</strong> {new Date(selected.createdAt).toLocaleString()}</p>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertisers;