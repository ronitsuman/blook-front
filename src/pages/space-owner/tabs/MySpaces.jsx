// // src/pages/space-owner/tabs/MySpaces.jsx
// import { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';

// const MySpaces = () => {
//   const [spaces, setSpaces] = useState([]);

//   useEffect(() => {
//     const fetchMySpaces = async () => {
//       try {
//         const res = await axiosInstance.get('/space-owner/my-spaces');
//         setSpaces(res.data);
//       } catch (err) {
//         console.error('Failed to fetch spaces', err);
//       }
//     };
//     fetchMySpaces();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this space?')) return;
//     try {
//       await axiosInstance.delete(`/space-owner/delete-space/${id}`);
//       setSpaces(prev => prev.filter(space => space._id !== id));
//     } catch (err) {
//       console.error('Failed to delete space', err);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">My Spaces</h2>
//       {spaces.length === 0 ? (
//         <p>No spaces registered yet.</p>
//       ) : (
//         <table className="w-full border bg-white">
//           <thead className="bg-blue-100">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Type</th>
//               <th className="p-2 border">Status</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {spaces.map((space) => (
//               <tr key={space._id} className="border-t">
//                 <td className="p-2 border">{space.spaceName}</td>
//                 <td className="p-2 border">{space.spaceType}</td>
//                 <td className="p-2 border">{space.status}</td>
//                 <td className="p-2 border space-x-2">
//                   <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
//                   <button
//                     onClick={() => handleDelete(space._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MySpaces;
// src/pages/space-owner/tabs/MySpaces.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

const MySpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMySpaces = async () => {
      try {
        const res = await axiosInstance.get('/space-owner/my-spaces');
        setSpaces(res.data);
      } catch (err) {
        console.error('Failed to fetch spaces', err);
      }
    };
    fetchMySpaces();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this space?')) return;
    try {
      await axiosInstance.delete(`/space-owner/delete-space/${id}`);
      setSpaces(prev => prev.filter(space => space._id !== id));
    } catch (err) {
      console.error('Failed to delete space', err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-space/${id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Spaces</h2>
      {spaces.length === 0 ? (
        <p>No spaces registered yet.</p>
      ) : (
        <table className="w-full border bg-white">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {spaces.map((space) => (
              <tr key={space._id} className="border-t">
                <td className="p-2 border">{space.spaceName}</td>
                <td className="p-2 border">{space.spaceType}</td>
                <td className="p-2 border">{space.status}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleEdit(space._id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(space._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MySpaces;
