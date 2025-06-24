// import GoogleMapPicker from "./GoogleMapPicker";
// import { useState } from "react";

// export default function Step1BasicInfo({ formData, setFormData, next }) {
//   const [error, setError] = useState("");

//   const handleLocation = (lat, lng, address) => {
//     setFormData((prev) => ({
//       ...prev,
//       location: { lat, lng, address }
//     }));
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleNext = () => {
//     if (!formData.spaceName || !formData.description || !formData.location?.lat || !formData.location?.lng || !formData.location?.address) {
//       setError("Please fill all required fields and select location.");
//       return;
//     }
//     next();
//   };

//   return (
//     <div>
//       <div className="space-y-4">
//         <input type="text" name="spaceName" className="input" placeholder="Space Name*" value={formData.spaceName || ""} onChange={handleChange} />
//         <textarea name="description" className="input" placeholder="Description*" value={formData.description || ""} onChange={handleChange} />
//         <input type="text" name="companyName" className="input" placeholder="Company Name" value={formData.companyName || ""} onChange={handleChange} />
//         <input type="text" name="fullName" className="input" placeholder="Contact Person" value={formData.fullName || ""} onChange={handleChange} />
//         <input type="tel" name="phone" className="input" placeholder="Phone*" value={formData.phone || ""} onChange={handleChange} />
//         <input type="email" name="email" className="input" placeholder="Email*" value={formData.email || ""} onChange={handleChange} />
//         <div>
//           <label className="font-semibold block mb-1">Location (Google Map):</label>
//           <GoogleMapPicker onLocationSelect={handleLocation} />
//           {formData.location?.address && <p className="mt-1 text-sm">Selected: {formData.location.address}</p>}
//         </div>
//         <input type="text" name="agentCode" className="input" placeholder="Agent Code (if any)" value={formData.agentCode || ""} onChange={handleChange} />
//         <input type="text" name="referralCode" className="input" placeholder="Referral Code (if any)" value={formData.referralCode || ""} onChange={handleChange} />
//       </div>
//       {error && <div className="text-red-600 my-2">{error}</div>}
//       <button className="btn-primary mt-6" onClick={handleNext}>Next</button>
//     </div>
//   );
// }

import { useState } from "react";
import GoogleMapPicker from "./GoogleMapPicker";

export default function Step1BasicInfo({ formData, setFormData, next }) {
  const [error, setError] = useState("");

  const handleLocation = (lat, lng, address) => {
    setFormData((prev) => ({
      ...prev,
      location: { lat, lng, address }
    }));
  };
  const handleMapLocation = (lat, lng, address) => {
    setFormData({
      ...formData,
      location: { lat, lng, address },
    })
  }


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    if (!formData.spaceName || !formData.description || !formData.location?.lat || !formData.location?.lng || !formData.location?.address) {
      setError("Please fill all required fields and select location.");
      return;
    }
    next();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">Step 1: Basic Information</h3>
      <div className="space-y-4">
        <input type="text" name="spaceName" className="w-full p-2 border rounded focus:outline-none" placeholder="Space Name*" value={formData.spaceName || ""} onChange={handleChange} />
        <textarea name="description" className="w-full p-2 border rounded focus:outline-none" placeholder="Description*" value={formData.description || ""} onChange={handleChange} />
        <input type="text" name="companyName" className="w-full p-2 border rounded focus:outline-none" placeholder="Company Name" value={formData.companyName || ""} onChange={handleChange} />
        <input type="text" name="fullName" className="w-full p-2 border rounded focus:outline-none" placeholder="Contact Person" value={formData.fullName || ""} onChange={handleChange} />
        <input type="tel" name="phone" className="w-full p-2 border rounded focus:outline-none" placeholder="Phone*" value={formData.phone || ""} onChange={handleChange} />
        <input type="email" name="email" className="w-full p-2 border rounded focus:outline-none" placeholder="Email*" value={formData.email || ""} onChange={handleChange} />

        <div>
          <label className="font-medium text-blue-700 mb-1 block">Location (Google Map):</label>
          <GoogleMapPicker onLocationSelect={handleMapLocation} />

          {formData.location?.address && <p className="mt-1 text-sm text-gray-700">Selected: {formData.location.address}</p>}
        </div>

        <input type="text" name="agentCode" className="w-full p-2 border rounded focus:outline-none" placeholder="Agent Code (if any)" value={formData.agentCode || ""} onChange={handleChange} />
        <input type="text" name="referralCode" className="w-full p-2 border rounded focus:outline-none" placeholder="Referral Code (if any)" value={formData.referralCode || ""} onChange={handleChange} />
      </div>
      {error && <div className="text-red-600 my-2 text-sm font-medium">{error}</div>}
      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={handleNext}>Next</button>
    </div>
  );
}
