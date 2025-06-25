// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Building2 } from "lucide-react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // export default function SpaceOwnerSignup() {
// // //   const navigate = useNavigate();
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     phone: "",
// // //     password: "",
// // //     companyName: "",
// // //     panNumber: "",
// // //     referralCode: "",
// // //     profilePictureUrl: "",
// // //     accountHolder: "",
// // //     bankName: "",
// // //     ifsc: "",
// // //     accountNumber: "",
// // //     upi: "",
// // //     authorizedToMonetize: false,
// // //   });
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: type === "checkbox" ? checked : value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError("");
// // //     try {
// // //       // Send JSON payload to backend
// // //       const res = await axios.post(
// // //         `${import.meta.env.REACT_APP_API_URL || 'https://blook-back.onrender.com'}/api/auth/register`,
// // //         {
// // //           ...formData,
// // //           role: "spaceOwner"
// // //         }
// // //       );
// // //       if (res.status === 201) {
// // //         // Registration successful
// // //         navigate("/dashboard/space-owner");
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError(err.response?.data?.message || "Registration failed");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3f0ec9] to-[#511cc3] px-4 py-10">
// // //       <motion.form
// // //         onSubmit={handleSubmit}
// // //         initial={{ opacity: 0, y: 40 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
// // //       >
// // //         <div className="flex flex-col items-center mb-6">
// // //           <div className="bg-blue-100 p-3 rounded-full mb-2">
// // //             <img src="logo.png" width={170} className="mx-auto" height={30} alt="logo" />
// // //           </div>
// // //           <h2 className="text-xl font-bold text-center text-blue-800">
// // //             Space Owner Sign Up
// // //           </h2>
// // //           <p className="text-sm text-gray-500 text-center">
// // //             Join BLookMySpace and start monetizing your space
// // //           </p>
// // //         </div>

// // //         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// // //         {[
// // //           { label: "Full Name", name: "fullName" },
// // //           { label: "Email Address", name: "email", type: "email" },
// // //           { label: "Phone Number", name: "phone" },
// // //           { label: "Password", name: "password", type: "password" },
// // //           { label: "Company Name", name: "companyName" },
// // //           { label: "PAN Number", name: "panNumber" },
// // //           { label: "Referral Code", name: "referralCode", optional: true },
// // //           { label: "Profile Picture URL", name: "profilePictureUrl" },
// // //         ].map(({ label, name, type = "text", optional }) => (
// // //           <div key={name} className="mb-4">
// // //             <label className="block text-sm text-gray-600 mb-1">
// // //               {label} {optional ? "(optional)" : "*"}
// // //             </label>
// // //             <input
// // //               type={type}
// // //               name={name}
// // //               value={formData[name]}
// // //               onChange={handleChange}
// // //               className="w-full px-6 h-8 py-2 border bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // //               required={!optional}
// // //             />
// // //           </div>
// // //         ))}

// // //         <div className="border-t pt-4 mt-4">
// // //           <h3 className="text-sm font-semibold text-gray-700 mb-2">🏦 Bank Information</h3>
// // //           {[
// // //             { label: "Account Holder Name", name: "accountHolder" },
// // //             { label: "Bank Name", name: "bankName" },
// // //             { label: "IFSC Code", name: "ifsc" },
// // //             { label: "Account Number", name: "accountNumber" },
// // //             { label: "UPI ID", name: "upi" },
// // //           ].map(({ label, name }) => (
// // //             <div key={name} className="mb-4">
// // //               <label className="block text-sm text-gray-600 mb-1">
// // //                 {label} *
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name={name}
// // //                 value={formData[name]}
// // //                 onChange={handleChange}
// // //                 className="w-full px-4 py-3 h-8 bg-gray-100 border-b-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
// // //                 required
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="flex gap-2 mb-6">
// // //           <input
// // //             type="checkbox"
// // //             name="authorizedToMonetize"
// // //             checked={formData.authorizedToMonetize}
// // //             onChange={handleChange}
// // //             className="mr-2"
// // //           />
// // //           <label className="text-sm text-blue-700">
// // //             I confirm I'm authorized to monetize this space *
// // //           </label>
// // //         </div>

// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
// // //         >
// // //           {loading ? 'Registering...' : 'Register'}
// // //         </button>

// // //         <p className="text-xs text-center text-gray-500 mt-4">
// // //           Already have an account?{' '}
// // //           <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/login')}>
// // //             Sign in here
// // //           </span>
// // //         </p>
// // //       </motion.form>
// // //     </div>
// // //   );
// // // }


// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Building2 } from "lucide-react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // export default function SpaceOwnerSignup() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //     companyName: "",
// //     panNumber: "",
// //     referralCode: "",
// //     profilePictureUrl: "",
// //     accountHolder: "",
// //     bankName: "",
// //     ifsc: "",
// //     accountNumber: "",
// //     upi: "",
// //     authorizedToMonetize: false,
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     try {
// //       // Send JSON payload to backend
// //       const res = await axios.post(
// //         `${process.env.REACT_APP_API_URL || 'https://blook-back.onrender.com'}/api/auth/register`,
// //         {
// //           ...formData,
// //           role: "spaceOwner"
// //         }
// //       );
// //       if (res.status === 201) {
// //         // Registration successful
// //         navigate("/dashboard");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.response?.data?.message || "Registration failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3f0ec9] to-[#511cc3] px-4 py-10">
// //       <motion.form
// //         onSubmit={handleSubmit}
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
// //       >
// //         <div className="flex flex-col items-center mb-6">
// //           <div className="bg-blue-100 p-3 rounded-full mb-2">
// //             <img src="logo.png" width={170} className="mx-auto" height={30} alt="logo" />
// //           </div>
// //           <h2 className="text-xl font-bold text-center text-blue-800">
// //             Space Owner Sign Up
// //           </h2>
// //           <p className="text-sm text-gray-500 text-center">
// //             Join BLookMySpace and start monetizing your space
// //           </p>
// //         </div>

// //         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// //         {[
// //           { label: "Full Name", name: "fullName" },
// //           { label: "Email Address", name: "email", type: "email" },
// //           { label: "Phone Number", name: "phone" },
// //           { label: "Password", name: "password", type: "password" },
// //           { label: "Company Name", name: "companyName" },
// //           { label: "PAN Number", name: "panNumber" },
// //           { label: "Referral Code", name: "referralCode", optional: true },
// //           { label: "Profile Picture URL", name: "profilePictureUrl" },
// //         ].map(({ label, name, type = "text", optional }) => (
// //           <div key={name} className="mb-4">
// //             <label className="block text-sm text-gray-600 mb-1">
// //               {label} {optional ? "(optional)" : "*"}
// //             </label>
// //             <input
// //               type={type}
// //               name={name}
// //               value={formData[name]}
// //               onChange={handleChange}
// //               className="w-full px-6 h-8 py-2 border bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //               required={!optional}
// //             />
// //           </div>
// //         ))}

// //         <div className="border-t pt-4 mt-4">
// //           <h3 className="text-sm font-semibold text-gray-700 mb-2">🏦 Bank Information</h3>
// //           {[
// //             { label: "Account Holder Name", name: "accountHolder" },
// //             { label: "Bank Name", name: "bankName" },
// //             { label: "IFSC Code", name: "ifsc" },
// //             { label: "Account Number", name: "accountNumber" },
// //             { label: "UPI ID", name: "upi" },
// //           ].map(({ label, name }) => (
// //             <div key={name} className="mb-4">
// //               <label className="block text-sm text-gray-600 mb-1">
// //                 {label} *
// //               </label>
// //               <input
// //                 type="text"
// //                 name={name}
// //                 value={formData[name]}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 h-8 bg-gray-100 border-b-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //                 required
// //               />
// //             </div>
// //           ))}
// //         </div>

// //         <div className="flex gap-2 mb-6">
// //           <input
// //             type="checkbox"
// //             name="authorizedToMonetize"
// //             checked={formData.authorizedToMonetize}
// //             onChange={handleChange}
// //             className="mr-2"
// //           />
// //           <label className="text-sm text-blue-700">
// //             I confirm I'm authorized to monetize this space *
// //           </label>
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
// //         >
// //           {loading ? 'Registering...' : 'Register'}
// //         </button>

// //         <p className="text-xs text-center text-gray-500 mt-4">
// //           Already have an account?{' '}
// //           <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/login')}>
// //             Sign in here
// //           </span>
// //         </p>
// //       </motion.form>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Building2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function SpaceOwnerSignup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     password: "",
//     companyName: "",
//     panNumber: "",
//     referralCode: "",
//     profilePictureUrl: "",
//     accountHolder: "",
//     bankName: "",
//     ifsc: "",
//     accountNumber: "",
//     upi: "",
//     authorizedToMonetize: false,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [imageLoading, setImageLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setImageLoading(true);
//     try {
//       const data = new FormData();
//       data.append('file', file);
//       // Assuming you have an upload endpoint
//       const res = await axios.post(
//         `${import.meta.REACT_APP_API_URL || 'https://blook-back.onrender.com'}/api/upload`,
//         data,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       setFormData((prev) => ({
//         ...prev,
//         profilePictureUrl: res.data.url,
//       }));
//     } catch (err) {
//       console.error('Image upload failed', err);
//       setError('Failed to upload image');
//     } finally {
//       setImageLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const res = // Register pe
//       await axios.post(
//         `${import.meta.env.VITE_API_URL || 'https://blook-back.onrender.com'}/api/auth/register`,
//         {
//           ...formData,
//           profilePic: formData.profilePictureUrl, // <-- Yeh add karo
//           role: "spaceOwner"
//         }
//       );
      
//       if (res.status === 201) navigate("/dashboard/spaceOwner");
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3f0ec9] to-[#511cc3] px-4 py-10">
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
//       >
//         <div className="flex flex-col items-center mb-6">
//           <div className="bg-blue-100 p-3 rounded-full mb-2">
//             <img src="logo.png" width={170} height={30} alt="logo" className="mx-auto" />
//           </div>
//           <h2 className="text-xl font-bold text-center text-blue-800">
//             Space Owner Sign Up
//           </h2>
//           <p className="text-sm text-gray-500 text-center">
//             Join BLookMySpace and start monetizing your space
//           </p>
//         </div>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         {[
//           { label: "Full Name", name: "fullName" },
//           { label: "Email Address", name: "email", type: "email" },
//           { label: "Phone Number", name: "phone" },
//           { label: "Password", name: "password", type: "password" },
//           { label: "Company Name", name: "companyName" },
//           { label: "PAN Number", name: "panNumber" },
//           { label: "Referral Code", name: "referralCode", optional: true },
//         ].map(({ label, name, type = "text", optional }) => (
//           <div key={name} className="mb-4">
//             <label className="block text-sm text-gray-600 mb-1">
//               {label} {optional ? "(optional)" : "*"}
//             </label>
//             <input
//               type={type}
//               name={name}
//               value={formData[name]}
//               onChange={handleChange}
//               className="w-full px-6 h-8 py-2 border bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               required={!optional}
//             />
//           </div>
//         ))}

//         {/* Profile Image Upload */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">
//             Profile Picture *
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="w-full"
//             required
//           />
//           {imageLoading && <p className="text-sm text-gray-500 mt-2">Uploading image...</p>}
//           {formData.profilePictureUrl && (
//             <img
//               src={formData.profilePictureUrl}
//               alt="Preview"
//               className="w-20 h-20 object-cover rounded-full mt-2"
//             />
//           )}
//         </div>

//         <div className="border-t pt-4 mt-4">
//           <h3 className="text-sm font-semibold text-gray-700 mb-2">🏦 Bank Information</h3>
//           {[
//             { label: "Account Holder Name", name: "accountHolder" },
//             { label: "Bank Name", name: "bankName" },
//             { label: "IFSC Code", name: "ifsc" },
//             { label: "Account Number", name: "accountNumber" },
//             { label: "UPI ID", name: "upi" },
//           ].map(({ label, name }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-sm text-gray-600 mb-1">
//                 {label} *
//               </label>
//               <input
//                 type="text"
//                 name={name}
//                 value={formData[name]}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 h-8 bg-gray-100 border-b-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 required
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex gap-2 mb-6">
//           <input
//             type="checkbox"
//             name="authorizedToMonetize"
//             checked={formData.authorizedToMonetize}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <label className="text-sm text-blue-700">
//             I confirm I'm authorized to monetize this space *
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           {loading ? 'Registering...' : 'Register'}
//         </button>

//         <p className="text-xs text-center text-gray-500 mt-4">
//           Already have an account?{' '}
//           <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/login')}>
//             Sign in here
//           </span>
//         </p>
//       </motion.form>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SpaceOwnerSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    companyName: "",
    panNumber: "",
    referralCode: "",
    profilePictureUrl: "",
    accountHolder: "",
    bankName: "",
    ifsc: "",
    accountNumber: "",
    upi: "",
    authorizedToMonetize: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageLoading(true);
    try {
      const data = new FormData();
      data.append('file', file);
      // Assuming you have an upload endpoint
      const res = await axios.post(
        `${import.meta.REACT_APP_API_URL || 'https://blook-back.onrender.com'}/api/upload`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setFormData((prev) => ({
        ...prev,
        profilePictureUrl: res.data.url,
      }));
    } catch (err) {
      console.error('Image upload failed', err);
      setError('Failed to upload image');
    } finally {
      setImageLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = // Register pe
      await axios.post(
        `${import.meta.env.VITE_API_URL || 'https://blook-back.onrender.com'}/api/auth/register`,
        {
          ...formData,
          profilePic: formData.profilePictureUrl, // <-- Yeh add karo
          role: "spaceOwner"
        }
      );
      
      if (res.status === 201) navigate("/dashboard/spaceOwner");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3f0ec9] to-[#511cc3] px-4 py-10">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mb-2">
            <img src="logo.png" width={170} height={30} alt="logo" className="mx-auto" />
          </div>
          <h2 className="text-xl font-bold text-center text-blue-800">
            Space Owner Sign Up
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Join BLookMySpace and start monetizing your space
          </p>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {[
          { label: "Full Name", name: "fullName" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Phone Number", name: "phone" },
          { label: "Password", name: "password", type: "password" },
          { label: "Company Name", name: "companyName" },
          { label: "PAN Number", name: "panNumber" },
          { label: "Referral Code", name: "referralCode", optional: true },
        ].map(({ label, name, type = "text", optional }) => (
          <div key={name} className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              {label} {optional ? "(optional)" : "*"}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-6 h-8 py-2 border bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required={!optional}
            />
          </div>
        ))}

        {/* Profile Image Upload */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Profile Picture *
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
            required
          />
          {imageLoading && <p className="text-sm text-gray-500 mt-2">Uploading image...</p>}
          {formData.profilePictureUrl && (
            <img
              src={formData.profilePictureUrl}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-full mt-2"
            />
          )}
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">🏦 Bank Information</h3>
          {[
            { label: "Account Holder Name", name: "accountHolder" },
            { label: "Bank Name", name: "bankName" },
            { label: "IFSC Code", name: "ifsc" },
            { label: "Account Number", name: "accountNumber" },
            { label: "UPI ID", name: "upi" },
          ].map(({ label, name }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                {label} *
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-3 h-8 bg-gray-100 border-b-blue-500 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="checkbox"
            name="authorizedToMonetize"
            checked={formData.authorizedToMonetize}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm text-blue-700">
            I confirm I'm authorized to monetize this space *
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/login')}>
            Sign in here
          </span>
        </p>
      </motion.form>
    </div>
  );
}
