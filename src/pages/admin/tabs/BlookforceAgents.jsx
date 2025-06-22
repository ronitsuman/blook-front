// src/pages/admin/tabs/BlookforceAgents.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const BlookforceAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axiosInstance.get('/admin/blookforce?status=pending');
        setAgents(res.data);
      } catch (err) {
        console.error('Failed to fetch agents', err);
      }
    };
    fetchAgents();
  }, []);

  const handleVerify = async (id) => {
    await axiosInstance.patch(`/admin/blookforce/verify/${id}`);
    setAgents((prev) => prev.filter((a) => a._id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pending Blookforce Agents</h2>
      <ul className="space-y-4">
        {agents.map((a) => (
          <li key={a._id} className="border p-4 rounded shadow">
            <div>{a.name} - {a.email}</div>
            <button onClick={() => handleVerify(a._id)} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
              Verify
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlookforceAgents;