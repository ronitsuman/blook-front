// import { useState } from "react";
// import { UploadCloud, FileText, Plus, X } from "lucide-react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function AgentRegistration() {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     city: "",
//     profileImage: null,
//     selfieImage: null,
//     complianceDocs: [
//       { name: "Aadhar", file: null },
//       { name: "PAN", file: null },
//     ],
//     bankDetails: {
//       accountHolder: "",
//       bankName: "",
//       accountNumber: "",
//       ifsc: "",
//       upi: ""
//     }
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name in formData.bankDetails) {
//       setFormData((prev) => ({
//         ...prev,
//         bankDetails: { ...prev.bankDetails, [name]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const updateComplianceDoc = (index, field, value) => {
//     const docs = [...formData.complianceDocs];
//     docs[index][field] = value;
//     setFormData(prev => ({ ...prev, complianceDocs: docs }));
//   };

//   const addComplianceDoc = () => {
//     setFormData(prev => ({
//       ...prev,
//       complianceDocs: [...prev.complianceDocs, { name: "", file: null }],
//     }));
//   };

//   const handleFileChange = (e, field) => {
//     const file = e.target.files[0];
//     setFormData(prev => ({ ...prev, [field]: file }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.entries(formData).forEach(([key, val]) => {
//       if (key === "complianceDocs") {
//         val.forEach((doc, i) => {
//           data.append(`complianceDocs[${i}][name]`, doc.name);
//           data.append(`complianceDocs[${i}][file]`, doc.file);
//         });
//       } else if (key === "bankDetails") {
//         Object.entries(val).forEach(([bk, bv]) => data.append(`bankDetails[${bk}]`, bv));
//       } else if (key === "profileImage" || key === "selfieImage") {
//         if (val) data.append(key, val);
//       } else {
//         data.append(key, val);
//       }
//     });

//     try {
//       await axios.post("/api/auth/register", data);
//       alert("Agent registered successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center py-10 px-4">
//       <motion.form
//         onSubmit={handleSubmit}
//         className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-white"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <div className="text-center mb-8">
//           <div className="text-4xl mb-2">
//             {/* <FileText size={40} className="mx-auto" /> */}
//                         <img src="logo.png" width={170} className="mx-auto" height={30} alt="" />

//           </div>
//           <h2 className="text-xl font-bold">BlookForce Agent Registration</h2>
//           <p className="text-sm opacity-75">Enter details to become an approved field agent</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           <input name="fullName" required placeholder="Full Name" className="input h-8 p-2" onChange={handleChange} />
//           <input name="email" required type="email" placeholder="Email Address" className="input h-8 p-2" onChange={handleChange} />
//           <input name="password" required type="password" placeholder="Password" className="input h-8 p-2" onChange={handleChange} />
//           <input name="phone" required placeholder="Phone Number" className="input h-8 p-2" onChange={handleChange} />
//           <input name="city" required placeholder="City" className="input h-8 p-2" onChange={handleChange} />
//         </div>

//         <div className="mb-6 space-y-2">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <UploadCloud /> Upload Profile Image
//             <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "profileImage")} />
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer">
//             <UploadCloud /> Upload Selfie (Required for identity verification)
//             <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "selfieImage")} />
//           </label>
//         </div>

//         <h3 className="mb-2 font-semibold">Compliance Documents (Required: Aadhar, PAN)</h3>
//         <div className="mb-6 space-y-4">
//           {formData.complianceDocs.map((doc, i) => (
//             <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2">
//               <input
//                 placeholder="Document name (e.g. PAN, Aadhar, Voter ID)"
//                 className="input"
//                 value={doc.name}
//                 onChange={(e) => updateComplianceDoc(i, "name", e.target.value)}
//               />
//               <input
//                 type="file"
//                 className="input"
//                 onChange={(e) => updateComplianceDoc(i, "file", e.target.files[0])}
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addComplianceDoc}
//             className="px-3 py-1 bg-white text-purple-700 font-semibold rounded shadow hover:bg-gray-100"
//           >
//             <Plus className="inline-block mr-1" size={16} /> Add Document
//           </button>
//         </div>

//         <h3 className="mb-2 font-semibold">Bank Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           <input name="accountHolder" placeholder="Account Holder" className="inpu h-8 p-2t" onChange={handleChange} />
//           <input name="bankName" placeholder="Bank Name" className="input h-8 p-2" onChange={handleChange} />
//           <input name="accountNumber" placeholder="Account Number" className="input h-8 p-2" onChange={handleChange} />
//           <input name="ifsc" placeholder="IFSC Code" className="input h-8 p-2" onChange={handleChange} />
//           <input name="upi" placeholder="UPI ID" className="input h-8 p-2" onChange={handleChange} />
//         </div>

//         <button type="submit" className="w-full py-3 bg-purple-700 hover:bg-purple-800 transition rounded font-bold text-white">
//           Submit Agent Application
//         </button>
//         <p className="text-sm text-center mt-4 text-white/80">
//           Already have an account? <a className="underline" onClick={()=>navigate('/login')}>Sign in here</a>
//         </p>
//       </motion.form>

//       <style jsx>{`
//         .input {
//           @apply px-4 py-2 rounded bg-white/10 backdrop-blur-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState } from "react";
import { UploadCloud, FileText, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AgentRegistration() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    profileImage: null,
    selfieImage: null,
    complianceDocs: [
      { name: "Aadhar", file: null },
      { name: "PAN", file: null },
    ],
    bankDetails: {
      accountHolder: "",
      bankName: "",
      accountNumber: "",
      ifsc: "",
      upi: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.bankDetails) {
      setFormData((prev) => ({
        ...prev,
        bankDetails: { ...prev.bankDetails, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const updateComplianceDoc = (index, field, value) => {
    const docs = [...formData.complianceDocs];
    docs[index][field] = value;
    setFormData(prev => ({ ...prev, complianceDocs: docs }));
  };

  const addComplianceDoc = () => {
    setFormData(prev => ({
      ...prev,
      complianceDocs: [...prev.complianceDocs, { name: "", file: null }],
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   Object.entries(formData).forEach(([key, val]) => {
  //     if (key === "complianceDocs") {
  //       val.forEach((doc, i) => {
  //         data.append(`complianceDocs[${i}][name]`, doc.name);
  //         data.append(`complianceDocs[${i}][file]`, doc.file);
  //       });
  //     } else if (key === "bankDetails") {
  //       Object.entries(val).forEach(([bk, bv]) => data.append(`bankDetails[${bk}]`, bv));
  //     } else if (key === "profileImage" || key === "selfieImage") {
  //       if (val) data.append(key, val);
  //     } else {
  //       data.append(key, val);
  //     }
  //   });

  //   try {
  //     await axios.post("http://localhost:5000/api/auth/register", data);
  //     alert("Agent registered successfully!");
  //   } catch (err) {
  //     console.error(err);
  //     alert("Registration failed");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
  
    // 1) Basic fields
    data.append("fullName", formData.fullName);
    data.append("email",    formData.email);
    data.append("password", formData.password);
    data.append("phone",    formData.phone);
    data.append("city",     formData.city);
    data.append("role",     "agent");
  
    // 2) Profile + selfie images
    if (formData.profileImage) data.append("profileImage", formData.profileImage);
    if (formData.selfieImage)  data.append("selfieImage",  formData.selfieImage);
  
    // 3) Compliance docs (flat) + names
    formData.complianceDocs.forEach((doc) => {
      if (doc.file) {
        data.append("complianceDocs", doc.file);         // Multer field
        data.append("complianceDocNames", doc.name);      // parallel array of names
      }
    });
  
    // 4) Bank details
    Object.entries(formData.bankDetails).forEach(([k, v]) => {
      data.append(k, v);
    });
  
    try {
      await axios.post("https://blook-back.onrender.com/api/auth/register", data);
      alert("Agent registered successfully!");
      navigate("/dashboard/agent");
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed");
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center py-10 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">
            {/* <FileText size={40} className="mx-auto" /> */}
                        <img src="logo.png" width={170} className="mx-auto" height={30} alt="" />

          </div>
          <h2 className="text-xl font-bold">BlookForce Agent Registration</h2>
          <p className="text-sm opacity-75">Enter details to become an approved field agent</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input name="fullName" required placeholder="Full Name" className="input h-8 p-2 text-black" onChange={handleChange} />
          <input name="email" required type="email" placeholder="Email Address" className="input h-8 p-2 text-black" onChange={handleChange} />
          <input name="password" required type="password" placeholder="Password" className="input h-8 p-2 text-black" onChange={handleChange} />
          <input name="phone" required placeholder="Phone Number" className="input h-8 p-2 text-black" onChange={handleChange} />
          <input name="city" required placeholder="City" className="input h-8 p-2 text-black" onChange={handleChange} />
        </div>

        <div className="mb-6 space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <UploadCloud /> Upload Profile Image
            <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "profileImage")} />
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <UploadCloud /> Upload Selfie (Required for identity verification)
            <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "selfieImage")} />
          </label>
        </div>

        <h3 className="mb-2 font-semibold">Compliance Documents (Required: Aadhar, PAN)</h3>
        <div className="mb-6 space-y-4">
          {formData.complianceDocs.map((doc, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                placeholder="Document name (e.g. PAN, Aadhar, Voter ID)"
                className="input text-black"
                value={doc.name}
                onChange={(e) => updateComplianceDoc(i, "name", e.target.value)}
              />
              <input
                type="file"
                className="input"
                onChange={(e) => updateComplianceDoc(i, "file", e.target.files[0])}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addComplianceDoc}
            className="px-3 py-1 bg-white text-purple-700 font-semibold rounded shadow hover:bg-gray-100"
          >
            <Plus className="inline-block mr-1" size={16} /> Add Document
          </button>
        </div>

        <h3 className="mb-2 font-semibold">Bank Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input name="accountHolder" placeholder="Account Holder" className="inpu h-8 p-2t text-black" onChange={handleChange} />
          <input name="bankName" placeholder="Bank Name" className="input h-8 p-2 text-black" onChange={handleChange} />
          <input name="accountNumber" placeholder="Account Number" className="input h-8 p-2 text-black" onChange={handleChange} />
          <input name="ifsc" placeholder="IFSC Code" className="input h-8 p-2 text-black" onChange={handleChange} />
          <input name="upi" placeholder="UPI ID" className="input h-8 p-2 text-black" onChange={handleChange} />
        </div>

        <button type="submit" className="w-full py-3 bg-purple-700 hover:bg-purple-800 transition rounded font-bold text-white">
          Submit Agent Application
        </button>
        <p className="text-sm text-center mt-4 text-white/80">
          Already have an account? <a className="underline" onClick={()=>navigate('/login')}>Sign in here</a>
        </p>
      </motion.form>

      <style jsx>{`
        .input {
          @apply px-4 py-2 rounded bg-white/10 backdrop-blur-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50;
        }
      `}</style>
    </div>
  );
}
