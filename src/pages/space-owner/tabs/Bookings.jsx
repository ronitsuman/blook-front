// // // src/pages/space-owner/tabs/Bookings.jsx
// // import { useEffect, useState } from 'react';
// // import axiosInstance from '../../../api/axiosInstance';

// // const Bookings = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedBooking, setSelectedBooking] = useState(null);

// //   useEffect(() => {
// //     const fetchBookings = async () => {
// //       try {
// //         const res = await axiosInstance.get('/bookings/owner');
// //         setBookings(res.data);
// //       } catch (err) {
// //         console.error('Error fetching bookings:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchBookings();
// //   }, []);

// //   const handleUpdateStatus = async (id, status) => {
// //     try {
// //       await axiosInstance.patch(`/space-owner/bookings/${id}/${status}`);
// //       setBookings(prev => prev.map(b => b._id === id ? { ...b, status } : b));
// //     } catch (err) {
// //       console.error(`Failed to ${status} booking:`, err);
// //     }
// //   };

// //   if (loading) return <div>Loading bookings...</div>;

// //   return (
// //     <div>
// //       <h2 className="text-xl font-semibold mb-4">Booking Requests</h2>
// //       {bookings.length === 0 ? (
// //         <p>No bookings yet.</p>
// //       ) : (
// //         <table className="w-full border bg-white">
// //           <thead className="bg-gray-100">
// //             <tr>
// //               <th className="p-2 border">Space</th>
// //               <th className="p-2 border">Advertiser</th>
// //               <th className="p-2 border">Date</th>
// //               <th className="p-2 border">Status</th>
// //               <th className="p-2 border">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {bookings.map((b) => (
// //               <tr key={b._id} className="border-t">
// //                 <td className="p-2 border">{b.spaceName || b.space?.spaceName}</td>
// //                 <td className="p-2 border">{b.advertiser?.name}</td>
// //                 <td className="p-2 border">{new Date(b.createdAt).toLocaleDateString()}</td>
// //                 <td className="p-2 border capitalize">{b.status}</td>
// //                 <td className="p-2 border space-x-2">
// //                   <button
// //                     onClick={() => setSelectedBooking(b)}
// //                     className="bg-blue-600 text-white px-3 py-1 rounded"
// //                   >
// //                     View
// //                   </button>
// //                   {b.status === 'pending' && (
// //                     <>
// //                       <button
// //                         onClick={() => handleUpdateStatus(b._id, 'approve')}
// //                         className="bg-green-600 text-white px-3 py-1 rounded"
// //                       >
// //                         Approve
// //                       </button>
// //                       <button
// //                         onClick={() => handleUpdateStatus(b._id, 'reject')}
// //                         className="bg-red-600 text-white px-3 py-1 rounded"
// //                       >
// //                         Reject
// //                       </button>
// //                     </>
// //                   )}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}

// //       {selectedBooking && (
// //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// //           <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
// //             <h3 className="text-lg font-semibold mb-2">Booking Detail</h3>
// //             <p><strong>Advertiser:</strong> {selectedBooking.advertiser?.name}</p>
// //             <p><strong>Email:</strong> {selectedBooking.advertiser?.email}</p>
// //             <p><strong>Space:</strong> {selectedBooking.space?.spaceName}</p>
// //             <p><strong>Date:</strong> {new Date(selectedBooking.createdAt).toLocaleString()}</p>
// //             <p><strong>Status:</strong> {selectedBooking.status}</p>
// //             <button
// //               onClick={() => setSelectedBooking(null)}
// //               className="absolute top-2 right-2 text-gray-600 hover:text-black"
// //             >
// //               ✕
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Bookings;

// import { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await axiosInstance.get('/bookings/owner');
//         console.log(res) 
//         setBookings(res.data.bookings || []); // NOTE: .bookings
//       } catch (err) {
//         console.error('Error fetching bookings:', err);
//         setBookings([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBookings();
//   }, []);

//   // PATCH route fix: send {status} in body
//   const handleUpdateStatus = async (id, status) => {
//     try {
//       await axiosInstance.patch(`/bookings/${id}`, { status });
//       setBookings(prev =>
//         prev.map(b => b._id === id ? { ...b, status } : b)
//       );
//     } catch (err) {
//       alert("Failed to update status");
//       console.error(`Failed to ${status} booking:`, err);
//     }
//   };

//   if (loading) return <div>Loading bookings...</div>;

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Booking Requests</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         <table className="w-full border bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 border">Space</th>
//               <th className="p-2 border">Advertiser</th>
//               <th className="p-2 border">Dates</th>
//               <th className="p-2 border">Branding Types</th>
//               <th className="p-2 border">Status</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b) => (
//               <tr key={b._id} className="border-t">
//                 <td className="p-2 border">{b.spaceId?.spaceName || b.spaceId?.spaceCode || "-"}</td>
//                 <td className="p-2 border">{b.advertiserId?.fullName || b.advertiserId?.email || "-"}</td>
//                 <td className="p-2 border">
//                   {b.fromDate ? new Date(b.fromDate).toLocaleDateString() : "-"}
//                   {" to "}
//                   {b.toDate ? new Date(b.toDate).toLocaleDateString() : "-"}
//                 </td>
//                 <td className="p-2 border">
//                   {(b.brandingTypes || []).join(", ")}
//                 </td>
//                 <td className="p-2 border capitalize">{b.status}</td>
//                 <td className="p-2 border space-x-2">
//                   <button
//                     onClick={() => setSelectedBooking(b)}
//                     className="bg-blue-600 text-white px-3 py-1 rounded"
//                   >
//                     View
//                   </button>
//                   {b.status === 'pending' && (
//                     <>
//                       <button
//                         onClick={() => handleUpdateStatus(b._id, 'approved')}
//                         className="bg-green-600 text-white px-3 py-1 rounded"
//                       >
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => handleUpdateStatus(b._id, 'rejected')}
//                         className="bg-red-600 text-white px-3 py-1 rounded"
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Modal for detail */}
//       {/* {selectedBooking && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
//             <h3 className="text-lg font-semibold mb-2">Booking Detail</h3>
//             <p><strong>Advertiser:</strong> {selectedBooking.advertiserId?.fullName || "-"}</p>
//             <p><strong>Email:</strong> {selectedBooking.advertiserId?.email || "-"}</p>
//             <p><strong>Space:</strong> {selectedBooking.spaceId?.spaceName || "-"}</p>
//             <p><strong>Date:</strong> {selectedBooking.fromDate ? new Date(selectedBooking.fromDate).toLocaleDateString() : "-"} to {selectedBooking.toDate ? new Date(selectedBooking.toDate).toLocaleDateString() : "-"}</p>
//             <p><strong>Branding:</strong> {(selectedBooking.brandingTypes || []).join(", ")}</p>
//             <p><strong>Status:</strong> {selectedBooking.status}</p>
//             <button
//               onClick={() => setSelectedBooking(null)}
//               className="absolute top-2 right-2 text-gray-600 hover:text-black"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )} */}
//       {selectedBooking && (
//   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
//       <h3 className="text-lg font-semibold mb-2">Booking Detail</h3>
//       <p><strong>Advertiser:</strong> {selectedBooking.advertiserId?.fullName || "-"}</p>
//       <p><strong>Email:</strong> {selectedBooking.advertiserId?.email || "-"}</p>
//       <p><strong>Space Name:</strong> {selectedBooking.spaceId?.spaceName || "-"}</p>
//       <p><strong>Space Code:</strong> {selectedBooking.spaceId?.spaceCode || "-"}</p>
//       <p><strong>Location:</strong> {selectedBooking.spaceId?.location?.address || "-"}</p>
//       <p><strong>Branding Types:</strong> {(selectedBooking.brandingTypes || []).join(", ")}</p>
//       <p><strong>Amount:</strong> ₹{selectedBooking.amount || "-"}</p>
//       <p>
//         <strong>Date:</strong>
//         {selectedBooking.fromDate ? new Date(selectedBooking.fromDate).toLocaleDateString() : "-"}
//         {" to "}
//         {selectedBooking.toDate ? new Date(selectedBooking.toDate).toLocaleDateString() : "-"}
//       </p>
//       <p><strong>Status:</strong> {selectedBooking.status}</p>
//       <div className="flex gap-2 mt-4">
//         {selectedBooking.status === "pending" && (
//           <>
//             <button
//               onClick={() => handleUpdateStatus(selectedBooking._id, "approved")}
//               className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//               Approve
//             </button>
//             <button
//               onClick={() => handleUpdateStatus(selectedBooking._id, "rejected")}
//               className="bg-red-600 text-white px-4 py-2 rounded"
//             >
//               Reject
//             </button>
//           </>
//         )}
//         <button
//           onClick={() => setSelectedBooking(null)}
//           className="ml-auto text-gray-600 hover:text-black"
//         >
//           ✕ Close
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };

// export default Bookings;

import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get('/bookings/owner');
        setBookings(res.data.bookings || []);
      } catch (err) {
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      await axiosInstance.patch(`/bookings/${id}`, { status });
      setBookings(prev =>
        prev.map(b => b._id === id ? { ...b, status } : b)
      );
      if (selectedBooking && selectedBooking._id === id) {
        setSelectedBooking({ ...selectedBooking, status });
      }
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (loading) return <div>Loading bookings...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Booking Requests</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className="w-full border bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Space Code & Space-Name</th>
              <th className="p-2 border">Advertiser</th>
              <th className="p-2 border">Dates</th>
              <th className="p-2 border">Branding Types</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-t">
                <td className="p-2 border">
                  {(b.spaceId?.spaceCode ? `${b.spaceId.spaceCode} — ${b.spaceId.spaceName}` : b.spaceId?.spaceName || b.spaceId?.spaceCode || "-")}
                </td>
                <td className="p-2 border">{b.advertiserId?.fullName || b.advertiserId?.email || "-"}</td>
                <td className="p-2 border">
                  {b.fromDate ? new Date(b.fromDate).toLocaleDateString() : "-"}
                  {" to "}
                  {b.toDate ? new Date(b.toDate).toLocaleDateString() : "-"}
                </td>
                <td className="p-2 border">
                  {(b.brandingTypes || []).join(", ")}
                </td>
                <td className="p-2 border capitalize">{b.status}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => setSelectedBooking(b)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                  {b.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleUpdateStatus(b._id, 'approved')}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(b._id, 'rejected')}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
            <h3 className="text-lg font-semibold mb-2">Booking Detail</h3>
            <p><strong>Advertiser:</strong> {selectedBooking.advertiserId?.fullName || "-"}</p>
            <p><strong>Email:</strong> {selectedBooking.advertiserId?.email || "-"}</p>
            <p><strong>Space Name:</strong> {selectedBooking.spaceId?.spaceName || "-"}</p>
            <p><strong>Space Code:</strong> {selectedBooking.spaceId?.spaceCode || "-"}</p>
            <p><strong>Location:</strong> {selectedBooking.spaceId?.location?.address || "-"}</p>
            <p><strong>Branding Types:</strong> {(selectedBooking.brandingTypes || []).join(", ")}</p>
            <p><strong>Amount:</strong> ₹{selectedBooking.amount || "-"}</p>
            <p>
              <strong>Date:</strong>
              {selectedBooking.fromDate ? new Date(selectedBooking.fromDate).toLocaleDateString() : "-"}
              {" to "}
              {selectedBooking.toDate ? new Date(selectedBooking.toDate).toLocaleDateString() : "-"}
            </p>
            <p><strong>Status:</strong> {selectedBooking.status}</p>
            <div className="flex gap-2 mt-4">
              {selectedBooking.status === "pending" && (
                <>
                  <button
                    onClick={() => handleUpdateStatus(selectedBooking._id, "approved")}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedBooking._id, "rejected")}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Reject
                  </button>
                </>
              )}
              <button
                onClick={() => setSelectedBooking(null)}
                className="ml-auto text-gray-600 hover:text-black"
              >
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
