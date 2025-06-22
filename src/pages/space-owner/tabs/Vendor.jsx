// src/pages/space-owner/tabs/Vendors.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axiosInstance.get('/space-owner/vendors');
        setVendors(res.data);
      } catch (err) {
        console.error('Error fetching vendors:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  if (loading) return <div>Loading vendors...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Connected Vendors</h2>
      {vendors.length === 0 ? (
        <p>No vendors linked yet.</p>
      ) : (
        <table className="w-full border bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Vendor Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Brand Type</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v._id} className="border-t">
                <td className="p-2 border">{v.name}</td>
                <td className="p-2 border">{v.email}</td>
                <td className="p-2 border">{v.brandType}</td>
                <td className="p-2 border capitalize">{v.status}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => setSelected(v)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
            <h3 className="text-lg font-semibold mb-2">Vendor Detail</h3>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Brand Type:</strong> {selected.brandType}</p>
            <p><strong>Status:</strong> {selected.status}</p>
            <p><strong>Submitted At:</strong> {new Date(selected.createdAt).toLocaleString()}</p>
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

export default Vendors;
