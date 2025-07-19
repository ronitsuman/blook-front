// // // src/pages/space-owner/tabs/MySpaces.jsx
// // import { useEffect, useState } from 'react';
// // import axiosInstance from '../../../api/axiosInstance';

// // const MySpaces = () => {
// //   const [spaces, setSpaces] = useState([]);

// //   useEffect(() => {
// //     const fetchMySpaces = async () => {
// //       try {
// //         const res = await axiosInstance.get('/space-owner/my-spaces');
// //         setSpaces(res.data);
// //       } catch (err) {
// //         console.error('Failed to fetch spaces', err);
// //       }
// //     };
// //     fetchMySpaces();
// //   }, []);

// //   const handleDelete = async (id) => {
// //     if (!window.confirm('Are you sure you want to delete this space?')) return;
// //     try {
// //       await axiosInstance.delete(`/space-owner/delete-space/${id}`);
// //       setSpaces(prev => prev.filter(space => space._id !== id));
// //     } catch (err) {
// //       console.error('Failed to delete space', err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-xl font-semibold mb-4">My Spaces</h2>
// //       {spaces.length === 0 ? (
// //         <p>No spaces registered yet.</p>
// //       ) : (
// //         <table className="w-full border bg-white">
// //           <thead className="bg-blue-100">
// //             <tr>
// //               <th className="p-2 border">Name</th>
// //               <th className="p-2 border">Type</th>
// //               <th className="p-2 border">Status</th>
// //               <th className="p-2 border">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {spaces.map((space) => (
// //               <tr key={space._id} className="border-t">
// //                 <td className="p-2 border">{space.spaceName}</td>
// //                 <td className="p-2 border">{space.spaceType}</td>
// //                 <td className="p-2 border">{space.status}</td>
// //                 <td className="p-2 border space-x-2">
// //                   <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
// //                   <button
// //                     onClick={() => handleDelete(space._id)}
// //                     className="bg-red-500 text-white px-3 py-1 rounded"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default MySpaces;
// // src/pages/space-owner/tabs/MySpaces.jsx
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../api/axiosInstance';

// const MySpaces = () => {
//   const [spaces, setSpaces] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMySpaces = async () => {
//       try {
//         const res = await axiosInstance.get('spaces/my-spaces');
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

//   const handleEdit = (id) => {
//     navigate(`/edit-space/${id}`);
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
//                   <button
//                     onClick={() => handleEdit(space._id)}
//                     className="bg-yellow-500 text-white px-3 py-1 rounded"
//                   >
//                     Edit
//                   </button>
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

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../api/axiosInstance';

// const MySpaces = () => {
//   const [spaces, setSpaces] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMySpaces = async () => {
//       try {
//         // Always use /api/spaces/my-spaces with proper prefix
//         const res = await axiosInstance.get('/spaces/my-spaces');
//         // If res.data.spaces exists, use that; otherwise, fallback to res.data
//         setSpaces(res.data.spaces || res.data);
//       } catch (err) {
//         console.error('Failed to fetch spaces', err);
//       }
//     };
//     fetchMySpaces();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this space?')) return;
//     try {
//       await axiosInstance.delete(`/spaces/delete//${id}`);
//       setSpaces(prev => prev.filter(space => space._id !== id));
//     } catch (err) {
//       console.error('Failed to delete space', err);
//     }
//   };

//   const handleEdit = (id) => {
//     navigate(`/edit-space/${id}`);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-6">My Spaces</h2>
//       {spaces.length === 0 ? (
//         <div className="bg-yellow-50 p-6 rounded-lg text-gray-700 shadow mb-6">
//           No spaces registered yet.
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border bg-white rounded-xl overflow-hidden">
//             <thead className="bg-blue-50 text-gray-800">
//               <tr>
//                 <th className="p-2 border">Preview</th>
//                 <th className="p-2 border">Name</th>
//                 <th className="p-2 border">Type</th>
//                 <th className="p-2 border">Plan</th>
//                 <th className="p-2 border">Status</th>
//                 <th className="p-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {spaces.map((space) => (
//                 <tr key={space._id} className="border-t hover:bg-blue-50">
//                   <td className="p-2 border text-center">
//                     {space.images?.frontFacade ? (
//                       <img
//                         src={space.images.frontFacade}
//                         alt="Front"
//                         className="w-16 h-12 object-cover rounded"
//                       />
//                     ) : (
//                       <span className="text-xs text-gray-400">No Image</span>
//                     )}
//                   </td>
//                   <td className="p-2 border font-semibold">{space.spaceName}</td>
//                   <td className="p-2 border">{space.spaceType}</td>
//                   <td className="p-2 border">
//                     <span className={space.listingType === "premium" 
//                       ? "bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs" 
//                       : "bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"}>
//                       {space.listingType === "premium" ? "Premium" : "Free"}
//                     </span>
//                   </td>
//                   <td className="p-2 border">
//                     <span className={
//                       space.status === "approved"
//                         ? "text-green-700 font-bold"
//                         : space.status === "pending"
//                         ? "text-yellow-700 font-bold"
//                         : space.status === "rejected"
//                         ? "text-red-700 font-bold"
//                         : "text-gray-500 font-bold"
//                     }>
//                       {space.status.charAt(0).toUpperCase() + space.status.slice(1)}
//                     </span>
//                   </td>
//                   <td className="p-2 border space-x-2">
//                     <button
//                       onClick={() => handleEdit(space._id)}
//                       className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(space._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MySpaces;


import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const MySpaces = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchMySpaces = async () => {
      try {
        const res = await axiosInstance.get('/spaces/my-spaces');
        setSpaces(res.data.spaces || res.data);
      } catch (err) {
        console.error('Failed to fetch spaces', err);
      }
    };
    fetchMySpaces();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this space?')) return;
    try {
      await axiosInstance.delete(`/spaces/delete/${id}`);
      setSpaces(prev => prev.filter(space => space._id !== id));
    } catch (err) {
      console.error('Failed to delete space', err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Spaces</h2>
      {spaces.length === 0 ? (
        <div className="bg-yellow-50 p-6 rounded-lg text-gray-700 shadow mb-6">
          No spaces registered yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border bg-white rounded-xl overflow-hidden">
            <thead className="bg-blue-50 text-gray-800">
              <tr>
                <th className="p-2 border">Preview</th>
                <th className="p-2 border">Space Code</th>    {/* Space Code column */}
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Plan</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {spaces.map((space) => (
                <tr key={space._id} className="border-t hover:bg-blue-50">
                  <td className="p-2 border text-center">
                    {space.images?.frontFacade ? (
                      <img
                        src={space.images.frontFacade}
                        alt="Front"
                        className="w-16 h-12 object-cover rounded"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">No Image</span>
                    )}
                  </td>
                  <td className="p-2 border font-mono text-xs">{space.spaceCode || "--"}</td>
                  <td className="p-2 border font-semibold">{space.spaceName}</td>
                  <td className="p-2 border">{space.spaceType}</td>
                  <td className="p-2 border">
                    <span className={space.listingType === "premium" 
                      ? "bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs" 
                      : "bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"}>
                      {space.listingType === "premium" ? "Premium" : "Free"}
                    </span>
                  </td>
                  <td className="p-2 border">
                    <span className={
                      space.status === "approved"
                        ? "text-green-700 font-bold"
                        : space.status === "pending"
                        ? "text-yellow-700 font-bold"
                        : space.status === "rejected"
                        ? "text-red-700 font-bold"
                        : "text-gray-500 font-bold"
                    }>
                      {space.status.charAt(0).toUpperCase() + space.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => handleDelete(space._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MySpaces;
