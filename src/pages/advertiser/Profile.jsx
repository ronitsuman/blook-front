// // src/pages/advertiser/Profile.jsx
// import { useEffect, useState } from 'react';
// import axiosInstance from '../../api/axiosInstance';
// import toast from 'react-hot-toast';

// const AdvertiserProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchProfile = async () => {
//     try {
//       const res = await axiosInstance.get('/advertiser/profile');
//       setProfile(res.data);
//     } catch (err) {
//       toast.error('Failed to fetch profile');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (!profile) return <p>No profile found</p>;

//   const { name, email, mobile, advertiserProfile } = profile;
//   const { brandName, gstNumber, panNumber, billingAddress, documents, isVerified } = advertiserProfile || {};

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">My Advertiser Profile</h1>
//       <div className="bg-white p-4 rounded shadow space-y-4">
//         <p><strong>Name:</strong> {name}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Mobile:</strong> {mobile}</p>
//         <p><strong>Brand Name:</strong> {brandName || 'Not Provided'}</p>
//         <p><strong>GST Number:</strong> {gstNumber || 'Not Provided'}</p>
//         <p><strong>PAN Number:</strong> {panNumber || 'Not Provided'}</p>
//         <p><strong>Billing Address:</strong> {billingAddress || 'Not Provided'}</p>
//         <p><strong>Status:</strong> <span className={`font-semibold ${isVerified ? 'text-green-600' : 'text-yellow-600'}`}>{isVerified ? 'Verified' : 'Pending Approval'}</span></p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <p className="font-semibold">PAN Image:</p>
//             {documents?.panImage ? (
//               <img src={documents.panImage} alt="PAN" className="w-full max-h-48 rounded border" />
//             ) : <p className="text-gray-500">Not uploaded</p>}
//           </div>
//           <div>
//             <p className="font-semibold">GST Image:</p>
//             {documents?.gstImage ? (
//               <img src={documents.gstImage} alt="GST" className="w-full max-h-48 rounded border" />
//             ) : <p className="text-gray-500">Not uploaded</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdvertiserProfile;


// src/pages/advertiser/AdvertiserProfile.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BadgeCheck, AlertTriangle } from "lucide-react";
import toast from "react-hot-toast";

const AdvertiserProfile = () => {
  const { token } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/advertiser/profile", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile(res.data);
    } catch (error) {
      toast.error("Failed to fetch advertiser profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!profile) return <p className="text-center text-red-500">Profile not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Advertiser Profile</h1>
        {profile.isVerified ? (
          <span className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
            <BadgeCheck className="w-4 h-4" />
            Verified
          </span>
        ) : (
          <span className="flex items-center gap-2 px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">
            <AlertTriangle className="w-4 h-4" />
            Pending Approval
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Brand Information</h3>
          <p><strong>Brand Name:</strong> {profile.brandName}</p>
          <p><strong>GST Number:</strong> {profile.gstNumber}</p>
          <p><strong>PAN Number:</strong> {profile.panNumber}</p>
          <p><strong>Billing Address:</strong> {profile.billingAddress}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Uploaded Documents</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">PAN Image</p>
              <img
                src={profile.documents?.panImage}
                alt="PAN"
                className="w-full h-40 object-cover border rounded"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">GST Image</p>
              <img
                src={profile.documents?.gstImage}
                alt="GST"
                className="w-full h-40 object-cover border rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserProfile;
