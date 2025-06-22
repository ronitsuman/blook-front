// // // src/pages/tabs/AdvertiserApprovals.jsx
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const AdvertiserApprovals = () => {
//   const [advertisers, setAdvertisers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchPendingAdvertisers = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/admin/advertisers/pending');
//       setAdvertisers(res.data);
//       console.log(res)
//     } catch (error) {
//       toast.error('Failed to load advertisers');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleApprove = async (id) => {
//     try {
//       await axios.patch(`http://localhost:5000/api/admin/advertisers/verify/${id}`);
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
//                   <p><strong>Name:</strong> {adv.name}</p>
//                   <p><strong>Email:</strong> {adv.email}</p>
//                   <p><strong>Mobile:</strong> {adv.mobile}</p>
//                   <p><strong>Brand:</strong> {adv.advertiserProfile?.brandName}</p>
//                   <p><strong>GST:</strong> {adv.advertiserProfile?.gstNumber}</p>
//                   <p><strong>PAN:</strong> {adv.advertiserProfile?.panNumber}</p>
//                 </div>
//                 <button
//                   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                   onClick={() => handleApprove(adv._id)}
//                 >
//                   Approve
//                 </button>
//               </div>
//               <div className="mt-4 grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm font-medium">PAN Image:</p>
//                   {adv.advertiserProfile?.documents?.panImage ? (
//                     <img src={adv.advertiserProfile.documents.panImage} alt="PAN" className="w-full h-40 object-cover border rounded" />
//                   ) : (
//                     <p className="text-gray-500 text-sm">Not uploaded</p>
//                   )}
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">GST Image:</p>
//                   {adv.advertiserProfile?.documents?.gstImage ? (
//                     <img src={adv.advertiserProfile.documents.gstImage} alt="GST" className="w-full h-40 object-cover border rounded" />
//                   ) : (
//                     <p className="text-gray-500 text-sm">Not uploaded</p>
//                   )}
//                 </div>
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
import axiosInstance from '../../../api/axiosInstance'; // adjust path
import toast from 'react-hot-toast';

const AdvertiserApprovals = () => {
  const [advertisers, setAdvertisers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPendingAdvertisers = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get('/admin/advertisers/pending');
      setAdvertisers(res.data);
      console.log(res)
    } catch (error) {
      toast.error('Failed to load advertisers');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axiosInstance.patch(`/admin/advertisers/verify/${id}`);
      toast.success('Advertiser verified');
      fetchPendingAdvertisers();
    } catch (error) {
      toast.error('Approval failed');
    }
  };

  useEffect(() => {
    fetchPendingAdvertisers();
  }, []);

  return (
    
    <div>
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
                <p><strong>Name:</strong> {adv.name}</p>
                <p><strong>Email:</strong> {adv.email}</p>
                <p><strong>Mobile:</strong> {adv.mobile}</p>
                <p><strong>Brand:</strong> {adv.advertiserProfile?.brandName}</p>
                <p><strong>GST:</strong> {adv.advertiserProfile?.gstNumber}</p>
                <p><strong>PAN:</strong> {adv.advertiserProfile?.panNumber}</p>
              </div>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => handleApprove(adv._id)}
              >
                Approve
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">PAN Image:</p>
                {adv.advertiserProfile?.documents?.panImage ? (
                  <img src={adv.advertiserProfile.documents.panImage} alt="PAN" className="w-full h-40 object-cover border rounded" />
                ) : (
                  <p className="text-gray-500 text-sm">Not uploaded</p>
                )}
              </div>
              <div>
                <p className="text-sm font-medium">GST Image:</p>
                {adv.advertiserProfile?.documents?.gstImage ? (
                  <img src={adv.advertiserProfile.documents.gstImage} alt="GST" className="w-full h-40 object-cover border rounded" />
                ) : (
                  <p className="text-gray-500 text-sm">Not uploaded</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default AdvertiserApprovals;
