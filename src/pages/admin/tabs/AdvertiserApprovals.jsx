// // // // // src/pages/tabs/AdvertiserApprovals.jsx
// // // import { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import toast from 'react-hot-toast';

// // // const AdvertiserApprovals = () => {
// // //   const [advertisers, setAdvertisers] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   const fetchPendingAdvertisers = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const res = await axios.get('http://localhost:5000/api/admin/advertisers/pending');
// // //       setAdvertisers(res.data);
// // //       console.log(res)
// // //     } catch (error) {
// // //       toast.error('Failed to load advertisers');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleApprove = async (id) => {
// // //     try {
// // //       await axios.patch(`http://localhost:5000/api/admin/advertisers/verify/${id}`);
// // //       toast.success('Advertiser verified');
// // //       fetchPendingAdvertisers();
// // //     } catch (error) {
// // //       toast.error('Approval failed');
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchPendingAdvertisers();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h2 className="text-2xl font-semibold mb-4">Pending Advertiser Approvals</h2>
// // //       {loading ? (
// // //         <p>Loading...</p>
// // //       ) : advertisers.length === 0 ? (
// // //         <p className="text-gray-500">No pending advertisers found.</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 gap-6">
// // //           {advertisers.map((adv) => (
// // //             <div key={adv._id} className="border p-4 rounded-xl shadow-md bg-white">
// // //               <div className="flex justify-between items-center">
// // //                 <div>
// // //                   <p><strong>Name:</strong> {adv.name}</p>
// // //                   <p><strong>Email:</strong> {adv.email}</p>
// // //                   <p><strong>Mobile:</strong> {adv.mobile}</p>
// // //                   <p><strong>Brand:</strong> {adv.advertiserProfile?.brandName}</p>
// // //                   <p><strong>GST:</strong> {adv.advertiserProfile?.gstNumber}</p>
// // //                   <p><strong>PAN:</strong> {adv.advertiserProfile?.panNumber}</p>
// // //                 </div>
// // //                 <button
// // //                   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// // //                   onClick={() => handleApprove(adv._id)}
// // //                 >
// // //                   Approve
// // //                 </button>
// // //               </div>
// // //               <div className="mt-4 grid grid-cols-2 gap-4">
// // //                 <div>
// // //                   <p className="text-sm font-medium">PAN Image:</p>
// // //                   {adv.advertiserProfile?.documents?.panImage ? (
// // //                     <img src={adv.advertiserProfile.documents.panImage} alt="PAN" className="w-full h-40 object-cover border rounded" />
// // //                   ) : (
// // //                     <p className="text-gray-500 text-sm">Not uploaded</p>
// // //                   )}
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm font-medium">GST Image:</p>
// // //                   {adv.advertiserProfile?.documents?.gstImage ? (
// // //                     <img src={adv.advertiserProfile.documents.gstImage} alt="GST" className="w-full h-40 object-cover border rounded" />
// // //                   ) : (
// // //                     <p className="text-gray-500 text-sm">Not uploaded</p>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AdvertiserApprovals;

// // import { useEffect, useState } from 'react';
// // import axiosInstance from '../../../api/axiosInstance'; // adjust path
// // import toast from 'react-hot-toast';

// // const AdvertiserApprovals = () => {
// //   const [advertisers, setAdvertisers] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const fetchPendingAdvertisers = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await axiosInstance.get('/admin/advertisers/pending');
// //       setAdvertisers(res.data);
// //       console.log(res)
// //     } catch (error) {
// //       toast.error('Failed to load advertisers');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleApprove = async (id) => {
// //     try {
// //       await axiosInstance.patch(`/admin/advertisers/verify/${id}`);
// //       toast.success('Advertiser verified');
// //       fetchPendingAdvertisers();
// //     } catch (error) {
// //       toast.error('Approval failed');
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPendingAdvertisers();
// //   }, []);

// //   return (
    
// //   //   <div>
// //   //   <h2 className="text-2xl font-semibold mb-4">Pending Advertiser Approvals</h2>
// //   //   {loading ? (
// //   //     <p>Loading...</p>
// //   //   ) : advertisers.length === 0 ? (
// //   //     <p className="text-gray-500">No pending advertisers found.</p>
// //   //   ) : (
// //   //     <div className="grid grid-cols-1 gap-6">
// //   //       {advertisers.map((adv) => (
// //   //         <div key={adv._id} className="border p-4 rounded-xl shadow-md bg-white">
// //   //           <div className="flex justify-between items-center">
// //   //             <div>
// //   //               <p><strong>Name:</strong> {adv.name}</p>
// //   //               <p><strong>Email:</strong> {adv.email}</p>
// //   //               <p><strong>Mobile:</strong> {adv.mobile}</p>
// //   //               <p><strong>Brand:</strong> {adv.advertiserProfile?.brandName}</p>
// //   //               <p><strong>GST:</strong> {adv.advertiserProfile?.gstNumber}</p>
// //   //               <p><strong>PAN:</strong> {adv.advertiserProfile?.panNumber}</p>
// //   //             </div>
// //   //             <button
// //   //               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //   //               onClick={() => handleApprove(adv._id)}
// //   //             >
// //   //               Approve
// //   //             </button>
// //   //           </div>
// //   //           <div className="mt-4 grid grid-cols-2 gap-4">
// //   //             <div>
// //   //               <p className="text-sm font-medium">PAN Image:</p>
// //   //               {adv.advertiserProfile?.documents?.panImage ? (
// //   //                 <img src={adv.advertiserProfile.documents.panImage} alt="PAN" className="w-full h-40 object-cover border rounded" />
// //   //               ) : (
// //   //                 <p className="text-gray-500 text-sm">Not uploaded</p>
// //   //               )}
// //   //             </div>
// //   //             <div>
// //   //               <p className="text-sm font-medium">GST Image:</p>
// //   //               {adv.advertiserProfile?.documents?.gstImage ? (
// //   //                 <img src={adv.advertiserProfile.documents.gstImage} alt="GST" className="w-full h-40 object-cover border rounded" />
// //   //               ) : (
// //   //                 <p className="text-gray-500 text-sm">Not uploaded</p>
// //   //               )}
// //   //             </div>
// //   //           </div>
// //   //         </div>
// //   //       ))}
// //   //     </div>
// //   //   )}
// //   // </div>
// //   <div>
// //   <h2 className="text-2xl font-semibold mb-4">Pending Advertiser Approvals</h2>
// //   {loading ? (
// //     <p>Loading...</p>
// //   ) : advertisers.length === 0 ? (
// //     <p className="text-gray-500">No pending advertisers found.</p>
// //   ) : (
// //     <div className="grid grid-cols-1 gap-6">
// //       {advertisers.map((adv) => (
// //         <div key={adv._id} className="border p-4 rounded-xl shadow-md bg-white">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p><strong>Name:</strong> {adv.advertiserProfile?.fullName}</p>
// //               <p><strong>Email:</strong> {adv.email}</p>
// //               <p><strong>Mobile:</strong> {adv.advertiserProfile?.phone}</p>
// //               <p><strong>Brand:</strong> {adv.advertiserProfile?.companyName}</p>
// //               <div className="my-2">
// //                 {adv.advertiserProfile?.profileImage && (
// //                   <img src={adv.advertiserProfile.profileImage} alt="Profile" className="w-20 h-20 rounded-full border" />
// //                 )}
// //               </div>
// //             </div>
// //             <button
// //               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //               onClick={() => handleApprove(adv._id)}
// //             >
// //               Approve
// //             </button>
// //           </div>
// //           <div className="mt-4 grid grid-cols-2 gap-4">
// //             {adv.advertiserProfile?.complianceDocs?.length > 0 ? (
// //               adv.advertiserProfile.complianceDocs.map((doc, i) => (
// //                 <div key={i}>
// //                   <p className="text-sm font-medium">{doc.name}:</p>
// //                   {doc.fileUrl ? (
// //                     <img src={doc.fileUrl} alt={doc.name} className="w-full h-40 object-cover border rounded" />
// //                   ) : (
// //                     <p className="text-gray-500 text-sm">Not uploaded</p>
// //                   )}
// //                 </div>
// //               ))
// //             ) : (
// //               <p className="col-span-2 text-gray-500">No compliance docs uploaded.</p>
// //             )}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   )}
// // </div>

// //   );
// // };

// // export default AdvertiserApprovals;



// import { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';
// import toast from 'react-hot-toast';

// const AdvertiserApprovals = () => {
//   const [advertisers, setAdvertisers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [zoomImg, setZoomImg] = useState(null);

//   const fetchPendingAdvertisers = async () => {
//     setLoading(true);
//     try {
//       const res = await axiosInstance.get('/admin/advertisers/pending');
//       setAdvertisers(res.data);
//     } catch (error) {
//       toast.error('Failed to load advertisers');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleApprove = async (id) => {
//     try {
//       await axiosInstance.patch(`/admin/advertisers/verify/${id}`);
//       toast.success('Advertiser verified');
//       fetchPendingAdvertisers();
//     } catch (error) {
//       toast.error('Approval failed');
//     }
//   };

//   useEffect(() => {
//     fetchPendingAdvertisers();
//   }, []);

//   return (
//     <div>
//       {/* Zoom modal */}
//       {zoomImg && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
//           <img src={zoomImg} className="max-w-xl max-h-[90vh] rounded shadow-2xl" alt="Zoom" />
//           <button
//             onClick={() => setZoomImg(null)}
//             className="absolute top-8 right-10 text-white text-4xl font-bold"
//           >
//             &times;
//           </button>
//         </div>
//       )}

//       <h2 className="text-2xl font-semibold mb-4">Pending Advertiser Approvals</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : advertisers.length === 0 ? (
//         <p className="text-gray-500">No pending advertisers found.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-6">
//           {advertisers.map((adv) => (
//             <div key={adv._id} className="border p-4 rounded-xl shadow-md bg-white">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p><strong>Name:</strong> {adv.advertiserProfile?.fullName}</p>
//                   <p><strong>Email:</strong> {adv.email}</p>
//                   <p><strong>Mobile:</strong> {adv.advertiserProfile?.phone}</p>
//                   <p><strong>Brand:</strong> {adv.advertiserProfile?.companyName}</p>
//                   {/* Profile image */}
//                   {adv.advertiserProfile?.profileImage && (
//                     <div className="my-2">
//                       <img
//                         src={adv.advertiserProfile.profileImage}
//                         alt="Profile"
//                         className="w-20 h-20 rounded-full border cursor-zoom-in object-cover"
//                         onClick={() => setZoomImg(adv.advertiserProfile.profileImage)}
//                       />
//                       <div className="text-xs text-gray-500">Click to enlarge</div>
//                     </div>
//                   )}
//                 </div>
//                 <button
//                   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                   onClick={() => handleApprove(adv._id)}
//                 >
//                   Approve
//                 </button>
//               </div>

//               {/* Account Details */}
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 bg-blue-50 p-3 rounded">
//                 <div>
//                   <span className="font-medium text-xs text-gray-600">Account Holder</span>
//                   <div>{adv.advertiserProfile?.accountHolder || adv.advertiserProfile?.bankDetails?.accountHolder || '-'}</div>
//                 </div>
//                 <div>
//                   <span className="font-medium text-xs text-gray-600">Bank Name</span>
//                   <div>{adv.advertiserProfile?.bankName || adv.advertiserProfile?.bankDetails?.bankName || '-'}</div>
//                 </div>
//                 <div>
//                   <span className="font-medium text-xs text-gray-600">Account Number</span>
//                   <div>{adv.advertiserProfile?.accountNumber || adv.advertiserProfile?.bankDetails?.accountNumber || '-'}</div>
//                 </div>
//                 <div>
//                   <span className="font-medium text-xs text-gray-600">IFSC</span>
//                   <div>{adv.advertiserProfile?.ifsc || adv.advertiserProfile?.bankDetails?.ifsc || '-'}</div>
//                 </div>
//                 <div>
//                   <span className="font-medium text-xs text-gray-600">UPI</span>
//                   <div>{adv.advertiserProfile?.upi || adv.advertiserProfile?.bankDetails?.upi || '-'}</div>
//                 </div>
//                 <p><strong>Contact Person:</strong> {adv.advertiserProfile?.contactPerson}</p>
//                 <p><strong>Industry Type:</strong> {adv.advertiserProfile?.industryType}</p>
//                 <p><strong>Website:</strong> {adv.advertiserProfile?.website}</p>

//               </div>

//               {/* Compliance Docs */}
//               <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {adv.advertiserProfile?.complianceDocs?.length > 0 ? (
//                   adv.advertiserProfile.complianceDocs.map((doc, i) => (
//                     <div key={i}>
//                       <p className="text-sm font-medium">{doc.name}:</p>
//                       {doc.fileUrl ? (
//                         <img
//                           src={doc.fileUrl}
//                           alt={doc.name}
//                           className="w-full h-36 object-cover border rounded cursor-zoom-in"
//                           onClick={() => setZoomImg(doc.fileUrl)}
//                         />
//                       ) : (
//                         <p className="text-gray-500 text-sm">Not uploaded</p>
//                       )}
//                     </div>
//                   ))
//                 ) : (
//                   <p className="col-span-2 text-gray-500">No compliance docs uploaded.</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdvertiserApprovals;

import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import toast from 'react-hot-toast';

const AdvertiserApprovals = () => {
  const [advertisers, setAdvertisers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);

  // For confirm reject modal
  const [rejectingId, setRejectingId] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const fetchPendingAdvertisers = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get('/admin/advertisers/pending');
      setAdvertisers(res.data);
    } catch (error) {
      toast.error('Failed to load advertisers');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axiosInstance.patch(`/admin/advertisers/approve/${id}`);
      toast.success('Advertiser approved');
      fetchPendingAdvertisers();
    } catch (error) {
      toast.error('Approval failed');
    }
  };

  const handleReject = async (id) => {
    try {
      await axiosInstance.patch(`/admin/advertisers/reject/${id}`);
      toast.success('Advertiser rejected');
      setShowRejectModal(false);
      fetchPendingAdvertisers();
    } catch (error) {
      toast.error('Rejection failed');
    }
  };

  useEffect(() => {
    fetchPendingAdvertisers();
  }, []);

  return (
    <div>
      {/* Zoom modal */}
      {zoomImg && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <img src={zoomImg} className="max-w-xl max-h-[90vh] rounded shadow-2xl" alt="Zoom" />
          <button
            onClick={() => setZoomImg(null)}
            className="absolute top-8 right-10 text-white text-4xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-xl text-center">
            <h3 className="text-lg font-bold mb-3">Reject Advertiser?</h3>
            <p className="mb-6">Are you sure you want to reject this advertiser?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
                onClick={() => setShowRejectModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                onClick={() => handleReject(rejectingId)}
              >
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Pending Advertiser Approvals</h2>
      {loading ? (
        <p>Loading...</p>
      ) : advertisers.length === 0 ? (
        <p className="text-gray-500">No pending advertisers found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {advertisers.map((adv) => (
            <div key={adv._id} className="border p-4 rounded-xl shadow-md bg-white">
              <div className="flex justify-between items-center">
                <div>
                  <p><strong>Name:</strong> {adv.advertiserProfile?.fullName}</p>
                  <p><strong>Email:</strong> {adv.email}</p>
                  <p><strong>Mobile:</strong> {adv.advertiserProfile?.phone}</p>
                  <p><strong>Brand:</strong> {adv.advertiserProfile?.companyName}</p>
                  {/* Profile image */}
                  {adv.advertiserProfile?.profileImage && (
                    <div className="my-2">
                      <img
                        src={adv.advertiserProfile.profileImage}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border cursor-zoom-in object-cover"
                        onClick={() => setZoomImg(adv.advertiserProfile.profileImage)}
                      />
                      <div className="text-xs text-gray-500">Click to enlarge</div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => handleApprove(adv._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => {
                      setRejectingId(adv._id);
                      setShowRejectModal(true);
                    }}
                  >
                    Reject
                  </button>
                </div>
              </div>

              {/* Account & Company Details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 bg-blue-50 p-3 rounded">
                <div>
                  <span className="font-medium text-xs text-gray-600">Account Holder</span>
                  <div>{adv.advertiserProfile?.accountHolder || adv.advertiserProfile?.bankDetails?.accountHolder || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">Bank Name</span>
                  <div>{adv.advertiserProfile?.bankName || adv.advertiserProfile?.bankDetails?.bankName || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">Account Number</span>
                  <div>{adv.advertiserProfile?.accountNumber || adv.advertiserProfile?.bankDetails?.accountNumber || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">IFSC</span>
                  <div>{adv.advertiserProfile?.ifsc || adv.advertiserProfile?.bankDetails?.ifsc || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">UPI</span>
                  <div>{adv.advertiserProfile?.upi || adv.advertiserProfile?.bankDetails?.upi || '-'}</div>
                </div>
                <p><strong>Contact Person:</strong> {adv.advertiserProfile?.contactPerson}</p>
                <p><strong>Industry Type:</strong> {adv.advertiserProfile?.industryType}</p>
                <p><strong>Website:</strong> {adv.advertiserProfile?.website}</p>
              </div>

              {/* Compliance Docs */}
              <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                {adv.advertiserProfile?.complianceDocs?.length > 0 ? (
                  adv.advertiserProfile.complianceDocs.map((doc, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium">{doc.name}:</p>
                      {doc.fileUrl ? (
                        <img
                          src={doc.fileUrl}
                          alt={doc.name}
                          className="w-full h-36 object-cover border rounded cursor-zoom-in"
                          onClick={() => setZoomImg(doc.fileUrl)}
                        />
                      ) : (
                        <p className="text-gray-500 text-sm">Not uploaded</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="col-span-2 text-gray-500">No compliance docs uploaded.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvertiserApprovals;
