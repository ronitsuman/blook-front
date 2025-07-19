// // // // // src/pages/admin/tabs/PendingSpaces.jsx
// // // // import { useEffect, useState } from 'react';
// // // // import axiosInstance from '../../../api/axiosInstance';

// // // // const PendingSpaces = () => {
// // // //   const [spaces, setSpaces] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchSpaces = async () => {
// // // //       try {
// // // //         const res = await axiosInstance.get('/admin/spaces/pending');
// // // //         setSpaces(res.data);
// // // //       } catch (err) {
// // // //         console.error('Error fetching spaces:', err);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     fetchSpaces();
// // // //   }, []);

// // // //   const handleApprove = async (id) => {
// // // //     try {
// // // //       await axiosInstance.patch(`/admin/spaces/${id}/approve`);
// // // //       setSpaces((prev) => prev.filter((s) => s._id !== id));
// // // //     } catch (err) {
// // // //       console.error('Approve error:', err);
// // // //     }
// // // //   };

// // // //   const handleReject = async (id) => {
// // // //     try {
// // // //       await axiosInstance.patch(`/admin/spaces/${id}/reject`);
// // // //       setSpaces((prev) => prev.filter((s) => s._id !== id));
// // // //     } catch (err) {
// // // //       console.error('Reject error:', err);
// // // //     }
// // // //   };

// // // //   if (loading) return <div>Loading...</div>;

// // // //   return (
// // // //     <div className="space-y-4">
// // // //       <h2 className="text-xl font-semibold mb-4">Pending Spaces</h2>
// // // //       {spaces.length === 0 ? (
// // // //         <p>No pending spaces.</p>
// // // //       ) : (
// // // //         <table className="min-w-full bg-white border">
// // // //           <thead className="bg-blue-100">
// // // //             <tr>
// // // //               <th className="p-2 border">Name</th>
// // // //               <th className="p-2 border">Owner</th>
// // // //               <th className="p-2 border">Type</th>
// // // //               <th className="p-2 border">Actions</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {spaces.map((space) => (
// // // //               <tr key={space._id} className="border-t">
// // // //                 <td className="p-2 border">{space.spaceName}</td>
// // // //                 <td className="p-2 border">{space.fullName}</td>
// // // //                 <td className="p-2 border">{space.spaceType}</td>
// // // //                 <td className="p-2 border space-x-2">
// // // //                   <button
// // // //                     onClick={() => handleApprove(space._id)}
// // // //                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// // // //                   >
// // // //                     Approve
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => handleReject(space._id)}
// // // //                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// // // //                   >
// // // //                     Reject
// // // //                   </button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PendingSpaces;

// // // // src/pages/admin/tabs/PendingSpaces.jsx
// // // import { useEffect, useState } from 'react';
// // // import axiosInstance from '../../../api/axiosInstance';

// // // const PendingSpaces = () => {
// // //   const [spaces, setSpaces] = useState([]);
// // //   const [selectedSpace, setSelectedSpace] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchSpaces = async () => {
// // //       try {
// // //         const res = await axiosInstance.get('/admin/spaces/pending');
// // //         setSpaces(res.data);
// // //       } catch (err) {
// // //         console.error('Error fetching spaces:', err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchSpaces();
// // //   }, []);

// // //   const handleApprove = async (id) => {
// // //     try {
// // //       await axiosInstance.patch(`/admin/spaces/${id}/approve`);
// // //       setSpaces((prev) => prev.filter((s) => s._id !== id));
// // //       setSelectedSpace(null);
// // //     } catch (err) {
// // //       console.error('Approve error:', err);
// // //     }
// // //   };

// // //   const handleReject = async (id) => {
// // //     try {
// // //       await axiosInstance.patch(`/admin/spaces/${id}/reject`);
// // //       setSpaces((prev) => prev.filter((s) => s._id !== id));
// // //       setSelectedSpace(null);
// // //     } catch (err) {
// // //       console.error('Reject error:', err);
// // //     }
// // //   };

// // //   if (loading) return <div>Loading...</div>;

// // //   if (selectedSpace) {
// // //     return (
// // //       <div className="space-y-4">
// // //         <h2 className="text-xl font-semibold">Space Details</h2>
// // //         <div className="border rounded p-4 bg-gray-50 space-y-2">
// // //           <p><strong>Name:</strong> {selectedSpace.spaceName}</p>
// // //           <p><strong>Owner:</strong> {selectedSpace.fullName} ({selectedSpace.email})</p>
// // //           <p><strong>Phone:</strong> {selectedSpace.phone}</p>
// // //           <p><strong>Type:</strong> {selectedSpace.spaceType}</p>
// // //           <p><strong>Description:</strong> {selectedSpace.description}</p>
// // //           <p><strong>Company:</strong> {selectedSpace.companyName}</p>
// // //           <p><strong>Location:</strong> {selectedSpace.location?.address}</p>
// // //           <p><strong>Footfall (weekday):</strong> {selectedSpace.footfall?.weekday}</p>
// // //           <p><strong>Demographics:</strong> {selectedSpace.demographics?.ageGroups?.join(', ')}</p>
// // //           <div className="space-x-2 mt-4">
// // //             <button
// // //               onClick={() => handleApprove(selectedSpace._id)}
// // //               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // //             >
// // //               Approve
// // //             </button>
// // //             <button
// // //               onClick={() => handleReject(selectedSpace._id)}
// // //               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // //             >
// // //               Reject
// // //             </button>
// // //             <button
// // //               onClick={() => setSelectedSpace(null)}
// // //               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
// // //             >
// // //               Back to Admin Panel
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="space-y-4">
// // //       <h2 className="text-xl font-semibold mb-4">Pending Spaces</h2>
// // //       {spaces.length === 0 ? (
// // //         <p>No pending spaces.</p>
// // //       ) : (
// // //         <table className="min-w-full bg-white border">
// // //           <thead className="bg-blue-100">
// // //             <tr>
// // //               <th className="p-2 border">Name</th>
// // //               <th className="p-2 border">Owner</th>
// // //               <th className="p-2 border">Type</th>
// // //               <th className="p-2 border">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {spaces.map((space) => (
// // //               <tr key={space._id} className="border-t">
// // //                 <td className="p-2 border">{space.spaceName}</td>
// // //                 <td className="p-2 border">{space.fullName}</td>
// // //                 <td className="p-2 border">{space.spaceType}</td>
// // //                 <td className="p-2 border space-x-2">
// // //                   <button
// // //                     onClick={() => handleApprove(space._id)}
// // //                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// // //                   >
// // //                     Approve
// // //                   </button>
// // //                   <button
// // //                     onClick={() => handleReject(space._id)}
// // //                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// // //                   >
// // //                     Reject
// // //                   </button>
// // //                   <button
// // //                     onClick={() => setSelectedSpace(space)}
// // //                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
// // //                   >
// // //                     View Details
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PendingSpaces;


// // // src/pages/admin/tabs/PendingSpaces.jsx
// // import { useEffect, useState } from 'react';
// // import axiosInstance from '../../../api/axiosInstance';

// // const PendingSpaces = () => {
// //   const [spaces, setSpaces] = useState([]);
// //   const [selectedSpace, setSelectedSpace] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchSpaces = async () => {
// //       try {
// //         const res = await axiosInstance.get('/admin/spaces/pending');
// //         setSpaces(res.data);
// //       } catch (err) {
// //         console.error('Error fetching spaces:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchSpaces();
// //   }, []);

// //   const handleApprove = async (id) => {
// //     try {
// //       await axiosInstance.patch(`/admin/spaces/${id}/approve`);
// //       setSpaces((prev) => prev.filter((s) => s._id !== id));
// //       setSelectedSpace(null);
// //     } catch (err) {
// //       console.error('Approve error:', err);
// //     }
// //   };

// //   const handleReject = async (id) => {
// //     try {
// //       await axiosInstance.patch(`/admin/spaces/${id}/reject`);
// //       setSpaces((prev) => prev.filter((s) => s._id !== id));
// //       setSelectedSpace(null);
// //     } catch (err) {
// //       console.error('Reject error:', err);
// //     }
// //   };

// //   const renderImage = (label, url) => (
// //     url ? (
// //       <div>
// //         <p className="font-semibold mt-2">{label}</p>
// //         <img
// //           src={url}
// //           alt={label}
// //           className="rounded mt-1 border cursor-zoom-in hover:scale-110 transition-transform duration-200 max-w-xs"
// //         />
// //       </div>
// //     ) : null
// //   );

// //   if (loading) return <div>Loading...</div>;

// //   if (selectedSpace) {
// //     const { images = {}, brandingZones = [] } = selectedSpace;

// //     return (
// //       <div className="space-y-4">
// //         <h2 className="text-xl font-semibold">Space Details</h2>
// //         <div className="border rounded p-4 bg-gray-50 space-y-2">
// //           <p><strong>Name:</strong> {selectedSpace.spaceName}</p>
// //           <p><strong>Owner:</strong> {selectedSpace.fullName} ({selectedSpace.email})</p>
// //           <p><strong>Phone:</strong> {selectedSpace.phone}</p>
// //           <p><strong>Type:</strong> {selectedSpace.spaceType}</p>
// //           <p><strong>Description:</strong> {selectedSpace.description}</p>
// //           <p><strong>Company:</strong> {selectedSpace.companyName}</p>
// //           <p><strong>Location:</strong> {selectedSpace.location?.address}</p>
// //           <p><strong>Landmark:</strong> {selectedSpace.landmark}</p>
// //           <p><strong>Total Area:</strong> {selectedSpace.totalArea} sqft</p>
// //           <p><strong>Footfall:</strong> Weekday: {selectedSpace.footfall?.weekday}, Weekend: {selectedSpace.footfall?.weekend}, Monthly: {selectedSpace.footfall?.monthly}</p>
// //           <p><strong>Peak Hours:</strong> {selectedSpace.peakHours}</p>
// //           <p><strong>Target Audience:</strong> {selectedSpace.targetAudience}</p>
// //           <p><strong>Demographics:</strong> {selectedSpace.demographics?.ageGroups?.join(', ')} ({selectedSpace.demographics?.gender}, {selectedSpace.demographics?.incomeGroup})</p>
// //           <p><strong>Authorized:</strong> {selectedSpace.authorizedToMonetize ? 'Yes' : 'No'}</p>
// //           <p><strong>Heat Mapping Consent:</strong> {selectedSpace.heatMappingConsent ? 'Yes' : 'No'}</p>
// //           <p><strong>PAN Number:</strong> {selectedSpace.panNumber}</p>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
// //             {renderImage('Front Facade', images.frontFacade)}
// //             {renderImage('Interior View', images.interiorView)}
// //             {renderImage('Branding Zone', images.brandingZone)}
// //             {renderImage('Heat Map Photo', images.heatMapPhoto)}
// //           </div>

// //           {images.otherPhotos?.length > 0 && (
// //             <div>
// //               <p className="font-semibold mt-4">Other Photos:</p>
// //               <div className="flex flex-wrap gap-2">
// //                 {images.otherPhotos.map((url, index) => (
// //                   <img
// //                     key={index}
// //                     src={url}
// //                     alt={`Other ${index + 1}`}
// //                     className="w-24 h-24 object-cover rounded border cursor-zoom-in hover:scale-110 transition-transform duration-200"
// //                   />
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {brandingZones.length > 0 && (
// //             <div>
// //               <p className="font-semibold mt-4">Branding Zones:</p>
// //               <ul className="list-disc list-inside">
// //                 {brandingZones.map((zone, index) => (
// //                   <li key={index}>{zone.type} - {zone.sizeSqFt} sqft</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}

// //           <div className="space-x-2 mt-6">
// //             <button
// //               onClick={() => handleApprove(selectedSpace._id)}
// //               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// //             >
// //               Approve
// //             </button>
// //             <button
// //               onClick={() => handleReject(selectedSpace._id)}
// //               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// //             >
// //               Reject
// //             </button>
// //             <button
// //               onClick={() => setSelectedSpace(null)}
// //               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
// //             >
// //               Back to Admin Panel
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="space-y-4">
// //       <h2 className="text-xl font-semibold mb-4">Pending Spaces</h2>
// //       {spaces.length === 0 ? (
// //         <p>No pending spaces.</p>
// //       ) : (
// //         <table className="min-w-full bg-white border">
// //           <thead className="bg-blue-100">
// //             <tr>
// //               <th className="p-2 border">Name</th>
// //               <th className="p-2 border">Owner</th>
// //               <th className="p-2 border">Type</th>
// //               <th className="p-2 border">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {spaces.map((space) => (
// //               <tr key={space._id} className="border-t">
// //                 <td className="p-2 border">{space.spaceName}</td>
// //                 <td className="p-2 border">{space.fullName}</td>
// //                 <td className="p-2 border">{space.spaceType}</td>
// //                 <td className="p-2 border space-x-2">
// //                   <button
// //                     onClick={() => handleApprove(space._id)}
// //                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// //                   >
// //                     Approve
// //                   </button>
// //                   <button
// //                     onClick={() => handleReject(space._id)}
// //                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// //                   >
// //                     Reject
// //                   </button>
// //                   <button
// //                     onClick={() => setSelectedSpace(space)}
// //                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
// //                   >
// //                     View Details
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

// // export default PendingSpaces;

// // src/pages/admin/tabs/PendingSpaces.jsx
// import { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';

// const PendingSpaces = () => {
//   const [spaces, setSpaces] = useState([]);
//   const [selectedSpace, setSelectedSpace] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSpaces = async () => {
//       try {
//         const res = await axiosInstance.get('/admin/spaces/pending');
//         // DEBUG: Log the actual API response for safety
//         console.log('API Response for Pending Spaces:', res.data);

//         // Defensive: Try all possibilities (object/array/wrapped)
//         let arr = [];
//         if (Array.isArray(res.data)) {
//           arr = res.data;
//         } else if (res.data && Array.isArray(res.data.spaces)) {
//           arr = res.data.spaces;
//         } else if (res.data && Array.isArray(res.data.data)) {
//           arr = res.data.data;
//         }
//         setSpaces(arr);
//       } catch (err) {
//         console.error('Error fetching spaces:', err);
//         setSpaces([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSpaces();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       await axiosInstance.put(
//         `/admin/spaces/${spaceId}/approve`,
//         {}, // body, agar nahi hai toh empty object do
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setSpaces((prev) => prev.filter((s) => s._id !== id));
//       setSelectedSpace(null);
//     } catch (err) {
//       console.error('Approve error:', err);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axiosInstance.put(`/admin/spaces/${id}/reject`);
//       setSpaces((prev) => prev.filter((s) => s._id !== id));
//       setSelectedSpace(null);
//     } catch (err) {
//       console.error('Reject error:', err);
//     }
//   };

//   const renderImage = (label, url) => (
//     url ? (
//       <div>
//         <p className="font-semibold mt-2">{label}</p>
//         <img
//           src={url}
//           alt={label}
//           className="rounded mt-1 border cursor-zoom-in hover:scale-110 transition-transform duration-200 max-w-xs"
//         />
//       </div>
//     ) : null
//   );

//   if (loading) return <div>Loading...</div>;

//   // Defensive: always treat as array
//   const safeSpaces = Array.isArray(spaces) ? spaces : [];

//   if (selectedSpace) {
//     const { images = {}, brandingZones = [] } = selectedSpace;

//     return (
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold">Space Details</h2>
//         <div className="border rounded p-4 bg-gray-50 space-y-2">
//           <p><strong>Name:</strong> {selectedSpace.spaceName}</p>
//           <p><strong>Owner:</strong> {selectedSpace.fullName} ({selectedSpace.email})</p>
//           <p><strong>Phone:</strong> {selectedSpace.phone}</p>
//           <p><strong>Type:</strong> {selectedSpace.spaceType}</p>
//           <p><strong>Description:</strong> {selectedSpace.description}</p>
//           <p><strong>Company:</strong> {selectedSpace.companyName}</p>
//           <p><strong>Location:</strong> {selectedSpace.location?.address}</p>
//           <p><strong>Landmark:</strong> {selectedSpace.landmark}</p>
//           <p><strong>Total Area:</strong> {selectedSpace.totalArea} sqft</p>
//           <p><strong>Footfall:</strong> Weekday: {selectedSpace.footfall?.weekday}, Weekend: {selectedSpace.footfall?.weekend}, Monthly: {selectedSpace.footfall?.monthly}</p>
//           <p><strong>Peak Hours:</strong> {selectedSpace.peakHours}</p>
//           <p><strong>Target Audience:</strong> {selectedSpace.targetAudience}</p>
//           <p><strong>Demographics:</strong> {selectedSpace.demographics?.ageGroups?.join(', ')} ({selectedSpace.demographics?.gender}, {selectedSpace.demographics?.incomeGroup})</p>
//           <p><strong>Authorized:</strong> {selectedSpace.authorizedToMonetize ? 'Yes' : 'No'}</p>
//           <p><strong>Heat Mapping Consent:</strong> {selectedSpace.heatMappingConsent ? 'Yes' : 'No'}</p>
//           <p><strong>PAN Number:</strong> {selectedSpace.panNumber}</p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//             {renderImage('Front Facade', images.frontFacade)}
//             {renderImage('Interior View', images.interiorView)}
//             {renderImage('Branding Zone', images.brandingZone)}
//             {renderImage('Heat Map Photo', images.heatMapPhoto)}
//           </div>

//           {images.otherPhotos?.length > 0 && (
//             <div>
//               <p className="font-semibold mt-4">Other Photos:</p>
//               <div className="flex flex-wrap gap-2">
//                 {images.otherPhotos.map((url, index) => (
//                   <img
//                     key={index}
//                     src={url}
//                     alt={`Other ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded border cursor-zoom-in hover:scale-110 transition-transform duration-200"
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {brandingZones.length > 0 && (
//             <div>
//               <p className="font-semibold mt-4">Branding Zones:</p>
//               <ul className="list-disc list-inside">
//                 {brandingZones.map((zone, index) => (
//                   <li key={index}>{zone.type} - {zone.sizeSqFt} sqft</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <div className="space-x-2 mt-6">
//             <button
//               onClick={() => handleApprove(selectedSpace._id)}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Approve
//             </button>
//             <button
//               onClick={() => handleReject(selectedSpace._id)}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Reject
//             </button>
//             <button
//               onClick={() => setSelectedSpace(null)}
//               className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//             >
//               Back to Admin Panel
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold mb-4">Pending Spaces</h2>
//       {safeSpaces.length === 0 ? (
//         <p>No pending spaces.</p>
//       ) : (
//         <table className="min-w-full bg-white border">
//           <thead className="bg-blue-100">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Owner</th>
//               <th className="p-2 border">Type</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {safeSpaces.map((space) => (
//               <tr key={space._id} className="border-t">
//                 <td className="p-2 border">{space.spaceName}</td>
//                 <td className="p-2 border">{space.fullName}</td>
//                 <td className="p-2 border">{space.spaceType}</td>
//                 <td className="p-2 border space-x-2">
//                   <button
//                     onClick={() => handleApprove(space._id)}
//                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => handleReject(space._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     Reject
//                   </button>
//                   <button
//                     onClick={() => setSelectedSpace(space)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                   >
//                     View Details
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

// export default PendingSpaces;

// src/pages/admin/tabs/PendingSpaces.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import { useSelector } from 'react-redux';

const PendingSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use Redux for admin token if possible
  const token = useSelector(state => state.auth.token) || localStorage.getItem("token");

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const res = await axiosInstance.get('/admin/spaces/pending', {
          headers: { Authorization: `Bearer ${token}` }
        });
        let arr = [];
        if (Array.isArray(res.data)) {
          arr = res.data;
        } else if (res.data && Array.isArray(res.data.spaces)) {
          arr = res.data.spaces;
        } else if (res.data && Array.isArray(res.data.data)) {
          arr = res.data.data;
        }
        setSpaces(arr);
      } catch (err) {
        console.error('Error fetching spaces:', err);
        setSpaces([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSpaces();
  }, [token]);

  // Approve handler (id parameter, NOT spaceId!)
  const handleApprove = async (id) => {
    try {
      await axiosInstance.put(
        `/admin/spaces/${id}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSpaces((prev) => prev.filter((s) => s._id !== id));
      setSelectedSpace(null);
    } catch (err) {
      console.error('Approve error:', err);
    }
  };

  const handleReject = async (id) => {
    try {
      await axiosInstance.put(
        `/admin/spaces/${id}/reject`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSpaces((prev) => prev.filter((s) => s._id !== id));
      setSelectedSpace(null);
    } catch (err) {
      console.error('Reject error:', err);
    }
  };

  const renderImage = (label, url) => (
    url ? (
      <div>
        <p className="font-semibold mt-2">{label}</p>
        <img
          src={url}
          alt={label}
          className="rounded mt-1 border cursor-zoom-in hover:scale-110 transition-transform duration-200 max-w-xs"
        />
      </div>
    ) : null
  );

  if (loading) return <div>Loading...</div>;
  const safeSpaces = Array.isArray(spaces) ? spaces : [];

  // ---- Space Details Modal ----
  if (selectedSpace) {
    const { images = {}, brandingZones = [] } = selectedSpace;
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Space Details</h2>
        <div className="border rounded p-4 bg-gray-50 space-y-2">
          <p><strong>Name:</strong> {selectedSpace.spaceName}</p>
          <p><strong>Owner:</strong> {selectedSpace.fullName} ({selectedSpace.email})</p>
          <p><strong>Phone:</strong> {selectedSpace.phone}</p>
          <p><strong>Type:</strong> {selectedSpace.spaceType}</p>
          <p><strong>Description:</strong> {selectedSpace.description}</p>
          <p><strong>Company:</strong> {selectedSpace.companyName}</p>
          <p><strong>Location:</strong> {selectedSpace.location?.address}</p>
          <p><strong>PAN Number:</strong> {selectedSpace.panNumber}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {renderImage('Front Facade', images.frontFacade)}
            {renderImage('Interior View', images.interiorView)}
            {renderImage('Branding Zone', images.brandingZone)}
            {renderImage('Heat Map Photo', images.heatMapPhoto)}
          </div>
          {images.otherPhotos?.length > 0 && (
            <div>
              <p className="font-semibold mt-4">Other Photos:</p>
              <div className="flex flex-wrap gap-2">
                {images.otherPhotos.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Other ${index + 1}`}
                    className="w-24 h-24 object-cover rounded border cursor-zoom-in hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>
          )}
          {brandingZones.length > 0 && (
            <div>
              <p className="font-semibold mt-4">Branding Zones:</p>
              <ul className="list-disc list-inside">
                {brandingZones.map((zone, index) => (
                  <li key={index}>{zone.type} - {zone.sizeSqFt} sqft</li>
                ))}
              </ul>
            </div>
          )}
          <div className="space-x-2 mt-6">
            <button
              onClick={() => handleApprove(selectedSpace._id)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(selectedSpace._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Reject
            </button>
            <button
              onClick={() => setSelectedSpace(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back to Admin Panel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- Pending Table ----
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Pending Spaces</h2>
      {safeSpaces.length === 0 ? (
        <p>No pending spaces.</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Owner</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {safeSpaces.map((space) => (
              <tr key={space._id} className="border-t">
                <td className="p-2 border">{space.spaceName}</td>
                <td className="p-2 border">{space.fullName}</td>
                <td className="p-2 border">{space.spaceType}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleApprove(space._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(space._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => setSelectedSpace(space)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View Details
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

export default PendingSpaces;
