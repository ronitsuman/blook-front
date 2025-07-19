// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Building2 } from "lucide-react";

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
//     authorizedToMonetize: false,
//     // NOTE: file fields are null initially
//     profileImage: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError]     = useState("");

//   // generic text / checkbox handler
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((f) => ({
//       ...f,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // for profileImage file input
//   const handleFileChange = (e) => {
//     setFormData((f) => ({ ...f, profileImage: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const data = new FormData();

//       // 1) Core fields
//       data.append("fullName",           formData.fullName);
//       data.append("email",              formData.email);
//       data.append("phone",              formData.phone);
//       data.append("password",           formData.password);
//       data.append("companyName",        formData.companyName);
//       data.append("panNumber",          formData.panNumber);
//       data.append("referralCode",       formData.referralCode);
//       data.append("authorizedToMonetize", formData.authorizedToMonetize);
//       data.append("role",               "spaceOwner");

//       // 2) Profile image file
//       if (formData.profileImage) {
//         data.append("profileImage", formData.profileImage);
//       }

//       // 3) Bank details
//       // These keys must exactly match what your controller does:
//       data.append("accountHolder", formData.accountHolder);
//       data.append("bankName",      formData.bankName);
//       data.append("accountNumber", formData.accountNumber);
//       data.append("ifsc",          formData.ifsc);
//       data.append("upi",           formData.upi);

//       // POST to your register endpoint
//       const res = await axios.post(
//         `${ "http://localhost:5000"}/api/auth/register`,
//         data,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       if (res.status === 201) {
//         navigate("/dashboard/spaceOwner");
//       }
//     } catch (err) {
//       console.error("Registration error:", err);
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
//             <Building2 size={32} className="text-blue-600" />
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
//           { label: "Email",     name: "email",    type: "email" },
//           { label: "Phone",     name: "phone" },
//           { label: "Password",  name: "password", type: "password" },
//           { label: "Company",   name: "companyName" },
//           { label: "PAN No.",   name: "panNumber" },
//           { label: "Referral",  name: "referralCode", optional: true },
//         ].map(({ label, name, type="text", optional }) => (
//           <div key={name} className="mb-4">
//             <label className="block text-sm text-gray-600 mb-1">
//               {label} {optional ? "(optional)" : "*"}
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded"
//               type={type}
//               name={name}
//               value={formData[name]}
//               onChange={handleChange}
//               required={!optional}
//             />
//           </div>
//         ))}

//         {/* Profile Image */}
//         <div className="mb-4">
//           <label className="block text-sm text-gray-600 mb-1">
//             Profile Picture *
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full"
//             required
//           />
//         </div>

//         {/* Bank Info */}
//         <div className="border-t pt-4 mt-4">
//           <h3 className="text-sm font-semibold text-gray-700 mb-2">🏦 Bank Information</h3>
//           {[
//             { label: "Account Holder", name: "accountHolder" },
//             { label: "Bank Name",      name: "bankName" },
//             { label: "IFSC Code",      name: "ifsc" },
//             { label: "Account Number", name: "accountNumber" },
//             { label: "UPI ID",         name: "upi", optional: true },
//           ].map(({ label, name, optional }) => (
//             <div key={name} className="mb-4">
//               <label className="block text-sm text-gray-600 mb-1">
//                 {label} {optional ? "(optional)" : "*"}
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded"
//                 type="text"
//                 name={name}
//                 value={formData[name]}
//                 onChange={handleChange}
//                 required={!optional}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center mb-6">
//           <input
//             type="checkbox"
//             name="authorizedToMonetize"
//             checked={formData.authorizedToMonetize}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <label className="text-sm text-gray-700">
//             I confirm I'm authorized to monetize this space
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//         >
//           {loading ? "Registering..." : "Register"}
//         </button>

//         <p className="text-xs text-center text-gray-500 mt-4">
//           Already have an account?{" "}
//           <button onClick={() => navigate("/login")} className="text-blue-600 underline">
//             Sign in
//           </button>
//         </p>
//       </motion.form>
//     </div>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Building2 } from "lucide-react";

export default function SpaceOwnerSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    companyName: "",
    panNumber: "",
    referredBy: "",
    authorizedToMonetize: false,
    profileImage: null,
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    upi: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profileImage: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("role", "spaceOwner");

      for (const key in formData) {
        if (formData[key]) data.append(key, formData[key]);
      }

      const res = await axios.post("http://localhost:5000/api/auth/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("🎉 Registration successful!");
      if (res.status === 201) navigate("/dashboard/spaceOwner");
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed. Try again!";
      toast.error(`❌ ${msg}`);
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
            <Building2 size={32} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-center text-blue-800">Space Owner Sign Up</h2>
          <p className="text-sm text-gray-500 text-center">
            Join BLookMySpace and start monetizing your space
          </p>
        </div>

        {/* Input Fields */}
        {[
          { label: "Full Name", name: "fullName" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone" },
          { label: "Password", name: "password", type: "password" },
          { label: "Company Name", name: "companyName" },
          { label: "PAN Number", name: "panNumber" },
          { label: "Referral Code (if any)", name: "referredBy", optional: true },
        ].map(({ label, name, type = "text", optional }) => (
          <div key={name} className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              {label} {optional ? "(optional)" : "*"}
            </label>
            <input
              className="w-full px-4 py-2 border rounded"
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required={!optional}
            />
          </div>
        ))}

        {/* Profile Image */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Profile Picture *</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full" required />
        </div>

        {/* Bank Info */}
        <div className="border-t pt-4 mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">🏦 Bank Information</h3>
          {[
            { label: "Account Holder", name: "accountHolder" },
            { label: "Bank Name", name: "bankName" },
            { label: "IFSC Code", name: "ifsc" },
            { label: "Account Number", name: "accountNumber" },
            { label: "UPI ID", name: "upi", optional: true },
          ].map(({ label, name, optional }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                {label} {optional ? "(optional)" : "*"}
              </label>
              <input
                className="w-full px-4 py-2 border rounded"
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={!optional}
              />
            </div>
          ))}
        </div>

        {/* Authorization */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="authorizedToMonetize"
            checked={formData.authorizedToMonetize}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">
            I confirm I'm authorized to monetize this space
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-blue-600 underline">
            Sign in
          </button>
        </p>
      </motion.form>
    </div>
  );
}
