// src/pages/admin/tabs/EditedSpaces.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const EditedSpaces = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchEdited = async () => {
      try {
        const res = await axiosInstance.get('/admin/spaces/edited');
        setSpaces(res.data);
      } catch (err) {
        console.error('Failed to fetch edited spaces', err);
      }
    };
    fetchEdited();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edited Spaces</h2>
      {spaces.length === 0 ? (
        <p>No edited spaces.</p>
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

export default EditedSpaces;