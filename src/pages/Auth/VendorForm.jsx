import { useState } from "react";
import { UploadCloud, FileText, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SERVICE_OPTIONS = ["Printing", "Fabrication", "Digital Ads", "Event Setup", "Lighting","installation"];

export default function VendorRegistration() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    companyName: "",
    isIndividual: false,
    minQuoteValue: "",
    serviceCategories: [],
    cities: [],
    cityInput: "",
    profileImage: null,
    complianceDocs: [],
    bankDetails: {
      accountHolder: "",
      bankName: "",
      accountNumber: "",
      ifsc: "",
      upi: ""
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.bankDetails) {
      setFormData((prev) => ({
        ...prev,
        bankDetails: { ...prev.bankDetails, [name]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleServiceCategoryChange = (value) => {
    setFormData((prev) => {
      const exists = prev.serviceCategories.includes(value);
      return {
        ...prev,
        serviceCategories: exists
          ? prev.serviceCategories.filter((s) => s !== value)
          : [...prev.serviceCategories, value],
      };
    });
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
  };

  const addComplianceDoc = () => {
    setFormData((prev) => ({
      ...prev,
      complianceDocs: [...prev.complianceDocs, { name: "", file: null }],
    }));
  };

  const updateComplianceDoc = (index, field, value) => {
    const docs = [...formData.complianceDocs];
    docs[index][field] = value;
    setFormData((prev) => ({ ...prev, complianceDocs: docs }));
  };

  const addCity = () => {
    const trimmed = formData.cityInput.trim();
    if (trimmed && !formData.cities.includes(trimmed)) {
      setFormData((prev) => ({
        ...prev,
        cities: [...prev.cities, trimmed],
        cityInput: "",
      }));
    }
  };

  const removeCity = (city) => {
    setFormData((prev) => ({
      ...prev,
      cities: prev.cities.filter((c) => c !== city),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === "complianceDocs") {
        val.forEach((doc, i) => {
          data.append(`complianceDocs[${i}][name]`, doc.name);
          data.append(`complianceDocs[${i}][file]`, doc.file);
        });
      } else if (key === "bankDetails") {
        Object.entries(val).forEach(([bk, bv]) =>
          data.append(`bankDetails[${bk}]`, bv)
        );
      } else if (key === "serviceCategories" || key === "cities") {
        val.forEach((v) => data.append(`${key}[]`, v));
      } else if (key === "profileImage" && val) {
        data.append("profileImage", val);
      } else if (key !== "cityInput") {
        data.append(key, val);
      }
    });
    try {
      await axios.post("/api/auth/register", data);
      alert("Vendor registered successfully!");
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
            {/* <FileText size={40} className="mx-auto" /> */}
                        <img src="logo.png" width={170} className="mx-auto" height={30} alt="" />

          </div>
          <h2 className="text-xl font-bold">Vendor Registration</h2>
          <p className="text-sm opacity-75">Join our trusted vendor network</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input name="fullName" required placeholder="Full Name" className="input h-8 p-2 " onChange={handleChange} />
          <input name="email" required type="email" placeholder="Email Address" className="input h-8 p-2" onChange={handleChange} />
          <input name="password" required type="password" placeholder="Password" className="input h-8 p-2" onChange={handleChange} />
          <input name="phone" required placeholder="Phone Number" className="input h-8 p-2" onChange={handleChange} />
          <input name="companyName" placeholder="Company Name" className="input h-8 p-2" onChange={handleChange} />
          <input name="minQuoteValue" placeholder="Minimum Quote Value" className="input h-8 p-2" onChange={handleChange} />
        </div>

        <div className="mb-4">
          <label className="mr-2 font-medium">Individual Vendor:</label>
          <input type="checkbox" name="isIndividual" onChange={handleChange} />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Select Services</label>
          <div className="flex flex-wrap gap-2">
            {SERVICE_OPTIONS.map((service) => (
              <span
                key={service}
                onClick={() => handleServiceCategoryChange(service)}
                className={`px-3 py-1 rounded cursor-pointer text-sm ${formData.serviceCategories.includes(service) ? "bg-white text-purple-600" : "bg-white/20"}`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 flex flex-row gap-6">
          <label className="block font-semibold mb-1">Cities You Serve</label>
          <div className="flex gap-2 mb-2">
            <input
              placeholder="Add City"
              className="input w-full flex-1 h-8 p-2"
              value={formData.cityInput}
              onChange={(e) => setFormData(prev => ({ ...prev, cityInput: e.target.value }))}
            />
            <button type="button" className="bg-white text-purple-600 px-3 rounded" onClick={addCity}>Add</button>
          </div>
          <div className="flex flex-row  flex-wrap gap-2">
            {formData.cities.map((city, i) => (
              <span key={i} className="bg-white/20 px-2 py-1 rounded flex items-center gap-1">
                {city}
                <X size={14} className="cursor-pointer" onClick={() => removeCity(city)} />
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <UploadCloud /> Upload Profile Image
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        <h3 className="mb-2 font-semibold">Compliance Documents</h3>
        <div className="mb-6 space-y-4">
          {formData.complianceDocs.map((doc, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                placeholder="Document name (e.g. PAN, Aadhar)"
                className="input"
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
          <input name="accountHolder" placeholder="Account Holder" className="input h-8 p-2" onChange={handleChange} />
          <input name="bankName" placeholder="Bank Name" className="input h-8 p-2" onChange={handleChange} />
          <input name="accountNumber" placeholder="Account Number" className="input h-8 p-2" onChange={handleChange} />
          <input name="ifsc" placeholder="IFSC Code" className="input h-8 p-2" onChange={handleChange} />
          <input name="upi" placeholder="UPI ID" className="input h-8 p-2" onChange={handleChange} />
        </div>

        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded font-bold text-white">
          Create Vendor Account
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
