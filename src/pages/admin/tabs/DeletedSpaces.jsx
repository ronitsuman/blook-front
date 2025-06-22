// src/pages/admin/tabs/DeletedSpaces.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const DeletedSpaces = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchDeleted = async () => {
      try {
        const res = await axiosInstance.get('/admin/spaces/deleted');
        setSpaces(res.data);
      } catch (err) {
        console.error('Failed to fetch deleted spaces', err);
      }
    };
    fetchDeleted();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Deleted Spaces by Agent</h2>
      {spaces.length === 0 ? (
        <p>No deleted spaces.</p>
      ) : (
        <ul className="space-y-2">
          {spaces.map((s) => (
            <li key={s._id} className="border p-3 rounded shadow">
              {s.spaceName} - {s.spaceType} (by {s.fullName})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeletedSpaces;