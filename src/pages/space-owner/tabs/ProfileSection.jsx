// // import { useState } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import axiosInstance from '../../../api/axiosInstance';
// // import toast from 'react-hot-toast';

// // export default function ProfileSection() {
// //   const user = useSelector((state) => state.auth.user);
  
// //   const profile = user?.spaceOwnerProfile || {};
// //   const [editData, setEditData] = useState({
// //     fullName: profile.fullName || "",
// //     phone: profile.phone || "",
// //     companyName: profile.companyName || "",
// //     panNumber: profile.panNumber || "",
// //     accountHolder: profile.accountHolder || "",
// //     bankName: profile.bankName || "",
// //     accountNumber: profile.accountNumber || "",
// //     ifsc: profile.ifsc || "",
// //     upi: profile.upi || "",
// //     profileImage: profile.profileImage || "",
// //   });
// //   const [imgPreview, setImgPreview] = useState(profile.profileImage || "");
// //   const [loading, setLoading] = useState(false);

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     setEditData({ ...editData, [e.target.name]: e.target.value });
// //   };

// //   // Handle image upload (simulate Cloudinary/local)
// //   const handleImageChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;
// //     setImgPreview(URL.createObjectURL(file));
// //     // TODO: upload to server/Cloudinary & set returned url
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     setLoading(true);
// //     try {
// //       // Replace this with your image upload endpoint
// //       const res = await axiosInstance.post('/utils/upload-image', formData, {
// //         headers: { 'Content-Type': 'multipart/form-data' }
// //       });
// //       setEditData({ ...editData, profileImage: res.data.url });
// //       toast.success("Image uploaded");
// //     } catch {
// //       toast.error("Upload failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Save handler
// //   const handleSave = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       // Only editable fields sent
// //       const patchData = { ...editData };
// //       const res = await axiosInstance.patch('/auth/update-profile', patchData);
// //       toast.success('Profile updated!');
// //       // Optionally, update Redux store here
// //     } catch {
// //       toast.error('Failed to update profile');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Render
// //   return (
// //     <div className="max-w-3xl mx-auto bg-white text-black  rounded-xl shadow p-6 my-8">
// //       <h2 className="text-2xl font-bold mb-4">My Profile</h2>

// //       {/* Profile completeness banner */}
// //       {( !editData.fullName || !editData.panNumber || !editData.accountNumber ) && (
// //         <div className="mb-4 bg-yellow-50 text-yellow-700 p-3 rounded">
// //           Complete your profile to unlock full features & payouts.
// //         </div>
// //       )}

// //       <form onSubmit={handleSave} className="space-y-4">
// //         {/* Profile Image */}
// //         <div className="flex items-center gap-6">
// //           <div>
// //             <img
// //               src={imgPreview || '/user.png'}
// //               alt="Profile"
// //               className="w-20 h-20 rounded-full border"
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1 text-sm font-medium">Profile Photo</label>
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={handleImageChange}
// //               className="block"
// //             />
// //           </div>
// //         </div>

// //         {/* Editable Fields */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div>
// //             <label className="block text-sm font-medium">Full Name</label>
// //             <input
// //               name="fullName"
// //               value={editData.fullName}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">Phone</label>
// //             <input
// //               name="phone"
// //               value={editData.phone}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">Company Name</label>
// //             <input
// //               name="companyName"
// //               value={editData.companyName}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">PAN Number</label>
// //             <input
// //               name="panNumber"
// //               value={editData.panNumber}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">Bank Account Holder</label>
// //             <input
// //               name="accountHolder"
// //               value={editData.accountHolder}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">Bank Name</label>
// //             <input
// //               name="bankName"
// //               value={editData.bankName}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">Bank Account Number</label>
// //             <input
// //               name="accountNumber"
// //               value={editData.accountNumber}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">IFSC Code</label>
// //             <input
// //               name="ifsc"
// //               value={editData.ifsc}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium">UPI</label>
// //             <input
// //               name="upi"
// //               value={editData.upi}
// //               onChange={handleChange}
// //               className="w-full border px-2 py-1 rounded"
// //             />
// //           </div>
// //         </div>

// //         {/* Non-editable fields */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-500">Email (not editable)</label>
// //             <input
// //               value={user.email}
// //               readOnly
// //               disabled
// //               className="w-full border px-2 py-1 rounded bg-gray-100"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-500">Role</label>
// //             <input
// //               value={user.role}
// //               readOnly
// //               disabled
// //               className="w-full border px-2 py-1 rounded bg-gray-100"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-500">Owner Code</label>
// //             <input
// //               value={user.roleCode}
// //               readOnly
// //               disabled
// //               className="w-full border px-2 py-1 rounded bg-gray-100"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-500">Plan</label>
// //             <input
// //               value={profile.hasSubscribed ? "Premium Listing" : "Free Listing"}
// //               readOnly
// //               disabled
// //               className="w-full border px-2 py-1 rounded bg-gray-100"
// //             />
// //           </div>
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// //         >
// //           {loading ? "Saving..." : "Save Changes"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // src/pages/space-owner/ProfileSection.jsx
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axiosInstance from '../../../api/axiosInstance';
// import toast from 'react-hot-toast';
// import { loginSuccess } from '../../../redux/slices/authSlice';

// export default function ProfileSection() {
//   const user = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();

//   const [profile, setProfile] = useState({});
//   const [completeness, setCompleteness] = useState("incomplete");
//   const [editData, setEditData] = useState({});
//   const [imgPreview, setImgPreview] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   // Fetch user profile from backend
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axiosInstance.get('/auth/profile');
//         const p = res.data.spaceOwnerProfile || {};
//         setProfile(p);
//         setEditData(p);
//         setImgPreview(p.profileImage || "");
//         setCompleteness(res.data.profileCompleteness || "incomplete");
//       } catch (err) {
//         toast.error("Failed to load profile");
//       }
//     })();
//   }, []);

//   // Start edit
//   const handleEdit = () => {
//     setEditMode(true);
//     setEditData(profile);
//     setImgPreview(profile.profileImage || "");
//   };

//   // Cancel edit
//   const handleCancel = () => {
//     setEditMode(false);
//     setEditData(profile);
//     setImgPreview(profile.profileImage || "");
//   };

//   // Image change
//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setImgPreview(URL.createObjectURL(file));
//     setLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('profileImage', file);
//       const res = await axiosInstance.patch('/auth/update-profile', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setEditData((prev) => ({ ...prev, profileImage: res.data.profile.profileImage }));
//       setProfile((prev) => ({ ...prev, profileImage: res.data.profile.profileImage }));
//       setImgPreview(res.data.profile.profileImage);
//       dispatch(loginSuccess({
//         token: localStorage.getItem('token'),
//         user: { ...user, spaceOwnerProfile: { ...profile, profileImage: res.data.profile.profileImage } }
//       }));
//       toast.success("Profile image updated!");
//     } catch {
//       toast.error("Image upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Save handler
//   const handleSave = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const patchData = { ...editData };
//       const res = await axiosInstance.patch('/user/profile', patchData);
//       setProfile(res.data.profile);
//       setEditData(res.data.profile);
//       setImgPreview(res.data.profile.profileImage);
//       setCompleteness("complete");
//       setEditMode(false);
//       dispatch(loginSuccess({
//         token: localStorage.getItem('token'),
//         user: { ...user, spaceOwnerProfile: res.data.profile }
//       }));
//       toast.success('Profile updated!');
//     } catch {
//       toast.error('Failed to update profile');
//     } finally {
//       setLoading(false);
//     }
//   };
//   //  this function component
// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Non-editable keys for view mode
//   const nonEditableFields = [
//     { label: "Email", value: user.email },
//     { label: "Role", value: user.role },
//     { label: "Owner Code", value: user.roleCode },
//     { label: "Plan", value: profile.hasSubscribed ? "Premium Listing" : "Free Listing" }
//   ];

//   return (
//     <div className="max-w-3xl mx-auto bg-white text-black rounded-xl shadow p-6 my-8">
//       <h2 className="text-2xl font-bold mb-4">My Profile</h2>
//       {completeness !== "complete" && (
//         <div className="mb-4 bg-yellow-50 text-yellow-700 p-3 rounded">
//           Complete your profile to unlock full features & payouts.
//         </div>
//       )}

//       {/* === View Mode === */}
//       {!editMode ? (
//         <div>
//           <div className="flex items-center gap-6 mb-4">
//             <img
//               src={profile.profileImage || '/user.png'}
//               alt="Profile"
//               className="w-20 h-20 rounded-full border object-cover"
//             />
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               onClick={handleEdit}
//             >Edit Profile</button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div><span className="font-semibold">Full Name:</span> {profile.fullName || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">Phone:</span> {profile.phone || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">Company Name:</span> {profile.companyName || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">PAN Number:</span> {profile.panNumber || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">Bank Account Holder:</span> {profile.accountHolder || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">Bank Name:</span> {profile.bankName || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">Bank Account Number:</span> {profile.accountNumber || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">IFSC Code:</span> {profile.ifsc || <span className="text-gray-400">—</span>}</div>
//             <div><span className="font-semibold">UPI:</span> {profile.upi || <span className="text-gray-400">—</span>}</div>
//           </div>
//           {/* Non-editable fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//             {nonEditableFields.map((f, i) => (
//               <div key={i}>
//                 <span className="font-semibold">{f.label}:</span> {f.value}
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//       // === Edit Mode ===
//       <form onSubmit={handleSave} className="space-y-4">
//         <div className="flex items-center gap-6">
//           <div>
//             <img
//               src={imgPreview || '/user.png'}
//               alt="Profile"
//               className="w-20 h-20 rounded-full border object-cover"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-medium">Profile Photo</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block"
//               disabled={loading}
//             />
//           </div>
//         </div>
//         {/* Editable Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium">Full Name</label>
//             <input
//               name="fullName"
//               value={editData.fullName || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Phone</label>
//             <input
//               name="phone"
//               value={editData.phone || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Company Name</label>
//             <input
//               name="companyName"
//               value={editData.companyName || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">PAN Number</label>
//             <input
//               name="panNumber"
//               value={editData.panNumber || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Bank Account Holder</label>
//             <input
//               name="accountHolder"
//               value={editData.accountHolder || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Bank Name</label>
//             <input
//               name="bankName"
//               value={editData.bankName || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Bank Account Number</label>
//             <input
//               name="accountNumber"
//               value={editData.accountNumber || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">IFSC Code</label>
//             <input
//               name="ifsc"
//               value={editData.ifsc || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">UPI</label>
//             <input
//               name="upi"
//               value={editData.upi || ""}
//               onChange={handleChange}
//               className="w-full border px-2 py-1 rounded"
//               autoComplete="off"
//             />
//           </div>
//         </div>
//         {/* --- Non-editable Referrals Section --- */}
// <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//   <div>
//     <label className="block text-sm font-medium text-gray-500">Referral Code</label>
//     <div className="flex items-center gap-2">
//       <input
//         value={user.referralCode || ""}
//         readOnly
//         disabled
//         className="w-full border px-2 py-1 rounded bg-gray-100 font-mono"
//       />
//       <button
//         type="button"
//         className="bg-gray-200 px-2 py-1 rounded text-xs"
//         onClick={() => {
//           navigator.clipboard.writeText(user.referralCode);
//           toast.success("Copied!");
//         }}
//       >Copy</button>
//     </div>
//   </div>
//   <div>
//     <label className="block text-sm font-medium text-gray-500">Total Referrals</label>
//     <input
//       value={user.referrals?.length || 0}
//       readOnly
//       disabled
//       className="w-full border px-2 py-1 rounded bg-gray-100"
//     />
//   </div>
// </div>
// {user.referrals && user.referrals.length > 0 && (
//   <div className="mt-3">
//     <label className="block text-xs text-gray-400 mb-1">Recent Referrals:</label>
//     <ul className="text-xs">
//       {user.referrals.slice(0, 5).map((ref, i) => (
//         <li key={i}>
//           {ref.fullName || "-"} ({ref.role}) — {new Date(ref.referredAt).toLocaleDateString()}
//         </li>
//       ))}
//     </ul>
//   </div>
// )}

//         {/* Non-editable fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           {nonEditableFields.map((f, i) => (
//             <div key={i}>
//               <label className="block text-sm font-medium text-gray-500">{f.label}</label>
//               <input
//                 value={f.value}
//                 readOnly
//                 disabled
//                 className="w-full border px-2 py-1 rounded bg-gray-100"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex gap-3 mt-4">
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           >
//             {loading ? "Saving..." : "Save Changes"}
//           </button>
//           <button
//             type="button"
//             disabled={loading}
//             onClick={handleCancel}
//             className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//       )}
//     </div>
//   );
// }
// src/pages/space-owner/ProfileSection.jsx
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../../api/axiosInstance';
import toast from 'react-hot-toast';
import { loginSuccess } from '../../../redux/slices/authSlice';

export default function ProfileSection() {
  const user = useSelector((state) => state.auth.user) || {};
  const dispatch = useDispatch();

  // For full Redux user updates
  const [profile, setProfile] = useState({});
  const [completeness, setCompleteness] = useState("incomplete");
  const [editData, setEditData] = useState({});
  const [imgPreview, setImgPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // For referrals etc.
  const referralCode = user.referralCode || "";
  const referrals = user.referrals || [];

  // Fetch latest profile from backend
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get('/auth/profile');
        const p = res.data.spaceOwnerProfile || {};
        setProfile(p);
        setEditData(p);
        setImgPreview(p.profilePic || "");
        setCompleteness(res.data.profileCompleteness || "incomplete");
        // Optionally: Redux update if needed
        // dispatch(loginSuccess({ token: localStorage.getItem('token'), user: res.data }))
      } catch (err) {
        toast.error("Failed to load profile");
      }
    })();
    // eslint-disable-next-line
  }, []);

  // Start edit
  const handleEdit = () => {
    setEditMode(true);
    setEditData(profile);
    setImgPreview(profile.profilePic || "");
  };

  // Cancel edit
  const handleCancel = () => {
    setEditMode(false);
    setEditData(profile);
    setImgPreview(profile.profilePic || "");
  };

  // Handle change for all editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Profile image upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImgPreview(URL.createObjectURL(file));
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('profilePic', file);
      // PATCH endpoint should return updated profile
      const res = await axiosInstance.patch('/auth/update-profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const newProfile = res.data.profile || {};
      setEditData((prev) => ({ ...prev, profileImage: newProfile.profileImage }));
      setProfile((prev) => ({ ...prev, profileImage: newProfile.profileImage }));
      setImgPreview(newProfile.profileImage);
      // Update redux (deep merge if needed)
      dispatch(loginSuccess({
        token: localStorage.getItem('token'),
        user: {
          ...user,
          spaceOwnerProfile: { ...user.spaceOwnerProfile, profilePic: newProfile.profilePic }
        }
      }));
      toast.success("Profile image updated!");
    } catch {
      toast.error("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  // Save handler for all editable data
  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const patchData = { ...editData };
      const res = await axiosInstance.patch('/user/profile', patchData);
      const updatedProfile = res.data.profile || {};
      setProfile(updatedProfile);
      setEditData(updatedProfile);
      setImgPreview(updatedProfile.profilePic);
      setCompleteness(res.data.profileCompleteness || "complete");
      setEditMode(false);
      // Update redux store user object
      dispatch(loginSuccess({
        token: localStorage.getItem('token'),
        user: {
          ...user,
          spaceOwnerProfile: updatedProfile
        }
      }));
      toast.success('Profile updated!');
    } catch {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  // Non-editable fields in all cases
  const nonEditableFields = [
    { label: "Email", value: user.email },
    { label: "Role", value: user.role },
    { label: "Owner Code", value: user.roleCode },
    { label: "Plan", value: profile.hasSubscribed ? "Premium Listing" : "Free Listing" }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white text-black rounded-xl shadow p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      {completeness !== "complete" && (
        <div className="mb-4 bg-yellow-50 text-yellow-700 p-3 rounded">
          Complete your profile to unlock full features & payouts.
        </div>
      )}

      {/* === VIEW MODE === */}
      {!editMode ? (
        <div>
          <div className="flex items-center gap-6 mb-4">
            <img
              src={profile.profileImage || '/user.png'}
              alt="Profile"
              className="w-20 h-20 rounded-full border object-cover"
              style={{ objectFit: "cover" }}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleEdit}
            >Edit Profile</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><span className="font-semibold">Full Name:</span> {profile.fullName || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">Phone:</span> {profile.phone || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">Company Name:</span> {profile.companyName || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">PAN Number:</span> {profile.panNumber || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">Bank Account Holder:</span> {profile.accountHolder || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">Bank Name:</span> {profile.bankName || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">Bank Account Number:</span> {profile.accountNumber || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">IFSC Code:</span> {profile.ifsc || <span className="text-gray-400">—</span>}</div>
            <div><span className="font-semibold">UPI:</span> {profile.upi || <span className="text-gray-400">—</span>}</div>
          </div>
          {/* Non-editable fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {nonEditableFields.map((f, i) => (
              <div key={i}>
                <span className="font-semibold">{f.label}:</span> {f.value}
              </div>
            ))}
          </div>
          {/* --- Referrals Section --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-500">Referral Code</label>
              <div className="flex items-center gap-2">
                <input
                  value={referralCode}
                  readOnly
                  disabled
                  className="w-full border px-2 py-1 rounded bg-gray-100 font-mono"
                />
                <button
                  type="button"
                  className="bg-gray-200 px-2 py-1 rounded text-xs"
                  onClick={() => {
                    navigator.clipboard.writeText(referralCode);
                    toast.success("Copied!");
                  }}
                >Copy</button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Total Referrals</label>
              <input
                value={referrals.length || 0}
                readOnly
                disabled
                className="w-full border px-2 py-1 rounded bg-gray-100"
              />
            </div>
          </div>
          {referrals && referrals.length > 0 && (
            <div className="mt-3">
              <label className="block text-xs text-gray-400 mb-1">Recent Referrals:</label>
              <ul className="text-xs">
                {referrals.slice(0, 5).map((ref, i) => (
                  <li key={i}>
                    {ref.fullName || "-"} ({ref.role}) — {new Date(ref.referredAt).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        // === EDIT MODE ===
        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex items-center gap-6">
            <div>
              <img
                src={imgPreview || '/user.png'}
                alt="Profile"
                className="w-20 h-20 rounded-full border object-cover"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Profile Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block"
                disabled={loading}
              />
            </div>
          </div>
          {/* Editable Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                name="fullName"
                value={editData.fullName || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                name="phone"
                value={editData.phone || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Company Name</label>
              <input
                name="companyName"
                value={editData.companyName || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">PAN Number</label>
              <input
                name="panNumber"
                value={editData.panNumber || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bank Account Holder</label>
              <input
                name="accountHolder"
                value={editData.accountHolder || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bank Name</label>
              <input
                name="bankName"
                value={editData.bankName || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bank Account Number</label>
              <input
                name="accountNumber"
                value={editData.accountNumber || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">IFSC Code</label>
              <input
                name="ifsc"
                value={editData.ifsc || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">UPI</label>
              <input
                name="upi"
                value={editData.upi || ""}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
                autoComplete="off"
              />
            </div>
          </div>
          {/* Non-editable fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {nonEditableFields.map((f, i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-500">{f.label}</label>
                <input
                  value={f.value}
                  readOnly
                  disabled
                  className="w-full border px-2 py-1 rounded bg-gray-100"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={handleCancel}
              className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
