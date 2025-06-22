// src/pages/admin/tabs/Vendors.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axiosInstance.get('/admin/vendors/pending');
        setVendors(res.data);
      } catch (err) {
        console.error('Failed to fetch vendors', err);
      }
    };
    fetchVendors();
  }, []);

  const handleVerify = async (id) => {
    await axiosInstance.patch(`/admin/vendors/verify/${id}`);
    setVendors((prev) => prev.filter((v) => v._id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pending Vendors</h2>
      <ul className="space-y-4">
        {vendors.map((v) => (
          <li key={v._id} className="border p-4 rounded shadow">
            <div>{v.name} - {v.email}</div>
            <button onClick={() => handleVerify(v._id)} className="bg-blue-600 text-white px-3 py-1 rounded mt-2">
              Verify
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vendors;
