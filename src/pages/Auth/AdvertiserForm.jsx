import { useState } from "react";
import { UploadCloud, FileText, Plus, Banknote } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


export default function AdvertiserRegistration() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    companyName: "",
    contactPerson: "",
    industryType: "",
    website: "",
    hasRightsToAdvertise: false,
    profileImage: null,
    complianceDocs: [],
    bankDetails: {
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
      ifscCode: "",
      upiId: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.bankDetails) {
      setFormData((prev) => ({
        ...prev,
        bankDetails: {
          ...prev.bankDetails,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
  };

  const handleAddComplianceDoc = () => {
    setFormData((prev) => ({
      ...prev,
      complianceDocs: [...prev.complianceDocs, { name: "", file: null }],
    }));
  };

  const handleComplianceChange = (index, field, value) => {
    const updated = [...formData.complianceDocs];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, complianceDocs: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
  
    // Main fields
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("phone", formData.phone);
    data.append("companyName", formData.companyName);
    data.append("contactPerson", formData.contactPerson);
    data.append("industryType", formData.industryType);
    data.append("website", formData.website);
    data.append("hasRightsToAdvertise", formData.hasRightsToAdvertise);
    data.append("role", "advertiser");
  
    // Bank
    data.append("accountHolder", formData.bankDetails.accountHolderName);
    data.append("bankName", formData.bankDetails.bankName);
    data.append("accountNumber", formData.bankDetails.accountNumber);
    data.append("ifsc", formData.bankDetails.ifscCode);
    data.append("upi", formData.bankDetails.upiId);
  
    // Profile image
    if (formData.profileImage) {
      data.append("profileImage", formData.profileImage);
    }
  
    // Compliance Docs
    formData.complianceDocs.forEach((doc, i) => {
      if (doc.file) data.append("complianceDocs", doc.file); // field name must match Multer config
      data.append("complianceDocNames", doc.name);           // parallel array of names (backend expects this)
    });
  
    // POST
    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      // Instead of alert, save creds in state or localStorage and redirect
      navigate("/login", {
        state: {
          prefillEmail: formData.email,
          prefillPassword: formData.password,
        }
      });
    } catch (err) {
      console.error(err);
      alert("Error during registration");
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center py-10 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">
            <img src="logo.png" width={170} className="mx-auto" height={30} alt="" />
            {/* <FileText size={40} className="mx-auto" /> */}
          </div>
          <h2 className="text-xl font-bold">Advertiser Registration</h2>
          <p className="text-sm opacity-75">
            Join our professional marketing platform
          </p>
        </div>

        <h3 className="mb-2 font-semibold">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input  name="fullName" required placeholder="Full Name" className="input h-8 p-2" onChange={handleInputChange} />
          <input  name="email" required type="email" placeholder="Email Address" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input  name="password" required type="password" placeholder="Password" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input  name="phone" required placeholder="Phone Number" className="input h-8 p-2 text-black" onChange={handleInputChange} />
        </div>

        <h3 className="mb-2 font-semibold">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input name="companyName" required placeholder="Company Name" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input name="contactPerson" placeholder="Contact Person" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input name="industryType" placeholder="Select Industry Type" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input name="website" placeholder="Website URL" className="input h-8 p-2 text-black" onChange={handleInputChange} />
        </div>

        <h3 className="mb-2 font-semibold">Profile Image</h3>
        <div className="mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <UploadCloud /> Upload Profile Image
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        <label className="flex items-center gap-2 mb-6">
          <input type="checkbox" name="hasRightsToAdvertise" onChange={handleInputChange} />
          I confirm that I have the legal rights to advertise on behalf of my company
        </label>

        <h3 className="mb-2 font-semibold">Compliance Documents <span>Adhar Card , Pan Card are required</span></h3>
        <div className="mb-6 space-y-4">
          {formData.complianceDocs.map((doc, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                placeholder="Enter Doc name (e.g. PAN, Aadhar)"
                className="input text-black"
                value={doc.name}
                onChange={(e) => handleComplianceChange(i, "name", e.target.value)}
              />
              <input
                type="file"
                className="input"
                onChange={(e) => handleComplianceChange(i, "file", e.target.files[0])}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddComplianceDoc}
            className="px-3 py-1 bg-white text-purple-700 font-semibold rounded shadow hover:bg-gray-100"
          >
            <Plus className="inline-block mr-1" size={16} /> Add Document
          </button>
        </div>

        <h3 className="mb-2 font-semibold">Bank Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input name="accountHolderName" required placeholder="Account Holder Name" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input name="bankName" required placeholder="Bank Name" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input name="ifscCode" required placeholder="IFSC Code" className="input h-8 p-2 text-black" onChange={handleInputChange} />
          <input name="accountNumber" required placeholder="Account Number" className="input h-8 p-2 text-black "  onChange={handleInputChange} />
          <input name="upiId" placeholder="UPI ID (optional)" className="input md:col-span-2 h-8 p-2 text-black
           " onChange={handleInputChange} />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded font-bold text-white"
        >
          Create Advertiser Account
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