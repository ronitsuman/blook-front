// // src/pages/admin/tabs/Vendors.jsx
// import { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';

// const Vendors = () => {
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     const fetchVendors = async () => {
//       try {
//         const res = await axiosInstance.get('/admin/vendors/pending');
//         setVendors(res.data);
//       } catch (err) {
//         console.error('Failed to fetch vendors', err);
//       }
//     };
//     fetchVendors();
//   }, []);

//   const handleVerify = async (id) => {
//     await axiosInstance.patch(`/admin/vendors/verify/${id}`);
//     setVendors((prev) => prev.filter((v) => v._id !== id));
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Pending Vendors</h2>
//       <ul className="space-y-4">
//         {vendors.map((v) => (
//           <li key={v._id} className="border p-4 rounded shadow">
//             <div>{v.name} - {v.email}</div>
//             <button onClick={() => handleVerify(v._id)} className="bg-blue-600 text-white px-3 py-1 rounded mt-2">
//               Verify
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Vendors;

import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import toast from 'react-hot-toast';

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [zoomImg, setZoomImg] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axiosInstance.get('/admin/vendors/pending');
        setVendors(res.data);
      } catch (err) {
        toast.error('Failed to fetch vendors');
      }
    };
    fetchVendors();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axiosInstance.patch(`/admin/vendors/approve/${id}`);
      setVendors((prev) => prev.filter((v) => v._id !== id));
      toast.success("Vendor Approved");
    } catch {
      toast.error("Approval failed");
    }
  };

  const handleReject = async (id) => {
    try {
      await axiosInstance.patch(`/admin/vendors/reject/${id}`);
      setVendors((prev) => prev.filter((v) => v._id !== id));
      toast.success("Vendor Rejected");
    } catch {
      toast.error("Rejection failed");
    }
  };

  return (
    <div>
      {/* Image zoom modal */}
      {zoomImg && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <img src={zoomImg} className="max-w-xl max-h-[90vh] rounded shadow-2xl" alt="Zoom" />
          <button onClick={() => setZoomImg(null)} className="absolute top-8 right-10 text-white text-4xl font-bold">&times;</button>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Pending Vendor Approvals</h2>
      {vendors.length === 0 ? (
        <p className="text-gray-500">No pending vendors found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {vendors.map((v) => (
            <div key={v._id} className="border p-4 rounded-xl shadow-md bg-white">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p><strong>Name:</strong> {v.vendorProfile?.fullName}</p>
                  <p><strong>Email:</strong> {v.email}</p>
                  <p><strong>Phone:</strong> {v.vendorProfile?.phone}</p>
                  <p><strong>Company:</strong> {v.vendorProfile?.companyName}</p>
                  <p><strong>GST Number:</strong> {v.vendorProfile?.gstNumber || <span className="text-gray-400">—</span>}</p>
                  <p><strong>Status:</strong> <span className="capitalize">{v.vendorProfile?.status}</span></p>
                  <p><strong>Vendor Code:</strong> {v.vendorProfile?.vendorCode}</p>
                  <p><strong>Cities:</strong> {v.vendorProfile?.cities?.join(", ") || <span className="text-gray-400">—</span>}</p>
                  <p><strong>Services:</strong> {v.vendorProfile?.servicesOffered?.join(", ") || <span className="text-gray-400">—</span>}</p>
                  {v.vendorProfile?.profileImage && (
                    <div className="my-2">
                      <img
                        src={v.vendorProfile.profileImage}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border cursor-zoom-in object-cover"
                        onClick={() => setZoomImg(v.vendorProfile.profileImage)}
                      />
                      <div className="text-xs text-gray-500">Click to enlarge</div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => handleApprove(v._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleReject(v._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>

              {/* Bank Details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-blue-50 p-3 rounded mb-4">
                <div>
                  <span className="font-medium text-xs text-gray-600">Account Holder</span>
                  <div>{v.vendorProfile?.bankDetails?.accountHolder || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">Bank Name</span>
                  <div>{v.vendorProfile?.bankDetails?.bankName || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">Account Number</span>
                  <div>{v.vendorProfile?.bankDetails?.accountNumber || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">IFSC</span>
                  <div>{v.vendorProfile?.bankDetails?.ifsc || '-'}</div>
                </div>
                <div>
                  <span className="font-medium text-xs text-gray-600">UPI</span>
                  <div>{v.vendorProfile?.bankDetails?.upi || '-'}</div>
                </div>
              </div>

              {/* Compliance Docs */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {v.vendorProfile?.complianceDocs?.length > 0 ? (
                  v.vendorProfile.complianceDocs.map((doc, i) => (
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

export default Vendors;
