
// // // // // // export default function TermsAgreement({ formData, setFormData }) {
// // // // // //   const handleCheck = (e) => {
// // // // // //     const { name, checked } = e.target
// // // // // //     setFormData(prev => ({ ...prev, [name]: checked }))
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // // // // //       <h2 className="text-xl font-bold text-blue-900">Terms & Consent</h2>

// // // // // //       <label className="flex items-start gap-2 text-sm">
// // // // // //         <input
// // // // // //           type="checkbox"
// // // // // //           name="agreedToTerms"
// // // // // //           checked={formData.agreedToTerms || false}
// // // // // //           onChange={handleCheck}
// // // // // //           className="mt-1"
// // // // // //         />
// // // // // //         I hereby declare that all the information provided is accurate and I am authorized to list this space for branding opportunities.
// // // // // //       </label>

// // // // // //       <label className="flex items-start gap-2 text-sm">
// // // // // //         <input
// // // // // //           type="checkbox"
// // // // // //           name="authorizedToMonetize"
// // // // // //           checked={formData.authorizedToMonetize || false}
// // // // // //           onChange={handleCheck}
// // // // // //           className="mt-1"
// // // // // //         />
// // // // // //         I am legally authorized to monetize this space for commercial and promotional use.
// // // // // //       </label>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // export default function TermsAgreement({ formData, setFormData }) {
// // // // //   const handleCheck = (e) => {
// // // // //     const { name, checked } = e.target
// // // // //     setFormData(prev => ({ ...prev, [name]: checked }))
// // // // //   }

// // // // //   return (
// // // // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // // // //       <h2 className="text-xl font-bold text-blue-900">Terms & Consent</h2>

// // // // //       <label className="flex items-start gap-2 text-sm">
// // // // //         <input
// // // // //           type="checkbox"
// // // // //           name="agreedToTerms"
// // // // //           checked={formData.agreedToTerms || false}
// // // // //           onChange={handleCheck}
// // // // //           className="mt-1"
// // // // //         />
// // // // //         I hereby declare that all the information provided is accurate and I am authorized to list this space for branding opportunities.
// // // // //       </label>

// // // // //       <label className="flex items-start gap-2 text-sm">
// // // // //         <input
// // // // //           type="checkbox"
// // // // //           name="authorizedToMonetize"
// // // // //           checked={formData.authorizedToMonetize || false}
// // // // //           onChange={handleCheck}
// // // // //           className="mt-1"
// // // // //         />
// // // // //         I am legally authorized to monetize this space for commercial and promotional use.
// // // // //       </label>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // src/components/ListYourSpaceForm/TermsAgreementForm.jsx
// // // // import React from "react"
// // // // import { Label } from "../../ui/label"
// // // // import { Checkbox } from "../../ui/checkbox"

// // // // const TermsAgreementForm = ({ formData, setFormData }) => {
// // // //   const toggleField = (field) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [field]: !formData[field]
// // // //     })
// // // //   }

// // // //   return (
// // // //     <div className="space-y-4">
// // // //       <div className="flex items-center gap-2">
// // // //         <Checkbox
// // // //           id="authorizedToMonetize"
// // // //           checked={formData.authorizedToMonetize || false}
// // // //           onCheckedChange={() => toggleField("authorizedToMonetize")}
// // // //         />
// // // //         <Label htmlFor="authorizedToMonetize">
// // // //           I confirm I am authorized to monetize this space.
// // // //         </Label>
// // // //       </div>
// // // //       <div className="flex items-center gap-2">
// // // //         <Checkbox
// // // //           id="agreedToTerms"
// // // //           checked={formData.agreedToTerms || false}
// // // //           onCheckedChange={() => toggleField("agreedToTerms")}
// // // //         />
// // // //         <Label htmlFor="agreedToTerms">
// // // //           I agree to the terms and conditions.
// // // //         </Label>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default TermsAgreementForm
// // // // src/components/ListYourSpaceForm/TermsAgreement.jsx
// // // import React from "react"

// // // const TermsAgreement = ({ formData, setFormData }) => {
// // //   const handleChange = (e) => {
// // //     const { name, type, checked } = e.target
// // //     setFormData({ ...formData, [name]: type === "checkbox" ? checked : e.target.value })
// // //   }

// // //   return (
// // //     <div className="space-y-4 p-4 border rounded-md shadow-sm">
// // //       <div className="flex items-center gap-2">
// // //         <input
// // //           type="checkbox"
// // //           name="authorizedToMonetize"
// // //           checked={formData.authorizedToMonetize || false}
// // //           onChange={handleChange}
// // //         />
// // //         <p className="text-sm">I confirm that I am authorized to monetize this space.</p>
// // //       </div>
// // //       <div className="flex items-center gap-2">
// // //         <input
// // //           type="checkbox"
// // //           name="agreedToTerms"
// // //           checked={formData.agreedToTerms || false}
// // //           onChange={handleChange}
// // //         />
// // //         <p className="text-sm">I agree to the terms and conditions.</p>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default TermsAgreement


// // import React from "react"

// // const TermsAgreement = ({ formData, setFormData }) => {
// //   const handleCheckbox = (field) => {
// //     setFormData({ ...formData, [field]: !formData[field] })
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
// //         <h2 className="text-xl font-semibold mb-4 text-gray-800">Terms & Agreement</h2>

// //         <label className="flex items-start space-x-3">
// //           <input
// //             type="checkbox"
// //             checked={formData.agreedToTerms || false}
// //             onChange={() => handleCheckbox("agreedToTerms")}
// //             className="mt-1"
// //           />
// //           <span className="text-gray-700 text-sm">
// //             I agree to the <a href="/terms" className="text-blue-600 underline">Terms and Conditions</a> of listing this space.
// //           </span>
// //         </label>

// //         <label className="flex items-start space-x-3">
// //           <input
// //             type="checkbox"
// //             checked={formData.authorizedToMonetize || false}
// //             onChange={() => handleCheckbox("authorizedToMonetize")}
// //             className="mt-1"
// //           />
// //           <span className="text-gray-700 text-sm">
// //             I confirm that I am authorized to monetize and allow branding for this property.
// //           </span>
// //         </label>
// //       </div>
// //     </div>
// //   )
// // }

// // export default TermsAgreement

// import React from "react"

// export default function Step6TermsAgreement({ formData, setFormData }) {
//   const handleChange = (e) => {
//     const { name, type, checked, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value
//     })
//   }

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-blue-800">Final Agreement</h2>

//       {/* PAN Number */}
//       <div>
//         <label className="block font-medium text-gray-800 mb-1">PAN Card Number *</label>
//         <input
//           type="text"
//           name="panNumber"
//           value={formData.panNumber || ""}
//           onChange={handleChange}
//           placeholder="e.g. ABCDE1234F"
//           required
//           className="w-full border px-4 py-2 rounded"
//         />
//       </div>

//       {/* Terms and Consent */}
//       <div className="bg-blue-50 p-4 rounded border border-blue-200">
//         <p className="text-sm text-gray-800">
//           Please confirm the following to proceed with space registration:
//         </p>

//         <label className="flex items-start gap-3 mt-4">
//           <input
//             type="checkbox"
//             name="agreedToTerms"
//             checked={formData.agreedToTerms || false}
//             onChange={handleChange}
//             className="mt-1"
//           />
//           <span className="text-sm text-gray-700">
//             I confirm that all the information provided above is accurate and I agree to the terms and conditions of BlookMySpace.
//           </span>
//         </label>

//         <label className="flex items-start gap-3 mt-4">
//           <input
//             type="checkbox"
//             name="authorizedToMonetize"
//             checked={formData.authorizedToMonetize || false}
//             onChange={handleChange}
//             className="mt-1"
//           />
//           <span className="text-sm text-gray-700">
//             I am authorized to monetize this space and allow branding activities.
//           </span>
//         </label>
//       </div>

//       {/* Referral Code */}
//       <div>
//         <label className="block font-medium text-gray-800 mb-1">
//           Referral Code (optional)
//         </label>
//         <input
//           type="text"
//           name="referralCode"
//           value={formData.referralCode || ""}
//           onChange={handleChange}
//           placeholder="Enter referral code if any"
//           className="w-full border px-4 py-2 rounded"
//         />
//       </div>
//     </div>
//   )
// }


import React from "react"

const TermsAgreement = ({ formData, setFormData, nextStep, prevStep }) => {
  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-800">Terms & Agreement</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">PAN Number *</label>
          <input
            type="text"
            value={formData.panNumber || ""}
            onChange={(e) => updateField("panNumber", e.target.value)}
            placeholder="e.g. ABCDE1234F"
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Referral Code (optional)</label>
          <input
            type="text"
            value={formData.referralCode || ""}
            onChange={(e) => updateField("referralCode", e.target.value)}
            placeholder="e.g. BLOOK10"
            className="w-full border px-4 py-2 rounded"
          />
        </div>
      </div>

      <div className="space-y-4 mt-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.authorizedToMonetize || false}
            onChange={(e) => updateField("authorizedToMonetize", e.target.checked)}
          />
          I confirm I am authorized to monetize this space.
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.agreedToTerms || false}
            onChange={(e) => updateField("agreedToTerms", e.target.checked)}
          />
          I agree to the terms and conditions.
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
          ← Back
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Next →
        </button>
      </div>
    </div>
  )
}

export default TermsAgreement
