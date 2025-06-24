// import { useState } from "react";

// export default function Step6HeatMappingCompliance({ formData, setFormData, next, back }) {
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };
//   const handleBankChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       bankDetails: {
//         ...prev.bankDetails,
//         [e.target.name]: e.target.value
//       }
//     }));
//   };

//   const handleConsent = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       heatMappingConsent: e.target.checked
//     }));
//   };

//   const handleNext = () => {
//     if (formData.heatMappingConsent === undefined) {
//       setError("Please provide heat mapping consent.");
//       return;
//     }
//     next();
//   };

//   return (
//     <div>
//       <div className="space-y-4">
//         <label className="block font-semibold mb-1">Heat Mapping & Camera</label>
//         <input type="number" name="cameraCount" className="input" placeholder="Number of Cameras" value={formData.cameraCount || ""} onChange={handleChange} />
//         <input type="text" name="cameraTypes" className="input" placeholder="Camera Types (comma separated)" value={formData.cameraTypes || ""} onChange={handleChange} />
//         <label className="flex items-center gap-2 mt-2">
//           <input type="checkbox" checked={formData.cameraViewsAligned || false} onChange={e => setFormData(prev => ({ ...prev, cameraViewsAligned: e.target.checked }))} />
//           Camera Views Aligned
//         </label>
//         <label className="block mt-4 mb-1 font-semibold">Compliance / KYC</label>
//         <input type="text" name="panNumber" className="input" placeholder="PAN Number" value={formData.panNumber || ""} onChange={handleChange} />
//         <input type="text" name="gstNumber" className="input" placeholder="GST Number" value={formData.gstNumber || ""} onChange={handleChange} />
//         <input type="text" name="fssaiNumber" className="input" placeholder="FSSAI Number" value={formData.fssaiNumber || ""} onChange={handleChange} />
//         <input type="text" name="accountHolder" className="input" placeholder="Bank Account Holder" value={formData.bankDetails?.accountHolder || ""} onChange={handleBankChange} />
//         <input type="text" name="bankName" className="input" placeholder="Bank Name" value={formData.bankDetails?.bankName || ""} onChange={handleBankChange} />
//         <input type="text" name="accountNumber" className="input" placeholder="Bank Account Number" value={formData.bankDetails?.accountNumber || ""} onChange={handleBankChange} />
//         <input type="text" name="ifsc" className="input" placeholder="IFSC Code" value={formData.bankDetails?.ifsc || ""} onChange={handleBankChange} />
//         <input type="text" name="upi" className="input" placeholder="UPI ID" value={formData.bankDetails?.upi || ""} onChange={handleBankChange} />
//         <label className="flex items-center gap-2 mt-4">
//           <input type="checkbox" checked={formData.heatMappingConsent || false} onChange={handleConsent} />
//           I consent to heat mapping data collection
//         </label>
//       </div>
//       {error && <div className="text-red-600 my-2">{error}</div>}
//       <div className="flex justify-between mt-8">
//         <button className="btn-secondary" onClick={back}>Back</button>
//         <button className="btn-primary" onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function Step6TermsAgreement({ formData, setFormData, next, back }) {
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800">
          Step 6: Terms & Authorization
        </h2>

        {/* Authorized to Monetize */}
        <div className="space-y-2">
          <label className="block font-medium">
            <input
              type="checkbox"
              name="authorizedToMonetize"
              checked={formData.authorizedToMonetize || false}
              onChange={handleChange}
              className="mr-2"
            />
            I confirm that I am authorized to monetize this space.
          </label>
        </div>

        {/* PAN Number */}
        <div className="space-y-2">
          <label className="block font-medium">PAN Number (Required)</label>
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="e.g. ABCDE1234F"
          />
        </div>

        {/* Agree to Terms */}
        <div className="space-y-2">
          <label className="block font-medium">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms || false}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to the Terms & Conditions.
          </label>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={back}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={next}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
}
