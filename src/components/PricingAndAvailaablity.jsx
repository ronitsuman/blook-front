// // // import React from "react";

// // // const PricingAvailability = ({ formData, setFormData }) => {
// // //   const update = (field, value) => {
// // //     setFormData({ ...formData, [field]: value });
// // //   };

// // //   const updatePricing = (index, field, value) => {
// // //     const updated = [...(formData.suggestedPricing || [])];
// // //     if (!updated[index]) updated[index] = {};
// // //     updated[index][field] = value;
// // //     setFormData({ ...formData, suggestedPricing: updated });
// // //   };

// // //   const updateAvailability = (index, field, value) => {
// // //     const updated = [...(formData.availability || [])];
// // //     if (!updated[index]) updated[index] = {};
// // //     updated[index][field] = value;
// // //     setFormData({ ...formData, availability: updated });
// // //   };

// // //   const addAvailabilityRange = () => {
// // //     setFormData({
// // //       ...formData,
// // //       availability: [...(formData.availability || []), { from: "", to: "" }],
// // //     });
// // //   };

// // //   const updateBank = (field, value) => {
// // //     setFormData({
// // //       ...formData,
// // //       bankDetails: { ...formData.bankDetails, [field]: value },
// // //     });
// // //   };

// // //   const updateHeatMapping = (field, value) => {
// // //     setFormData({
// // //       ...formData,
// // //       heatMappingConsent: { ...formData.heatMappingConsent, [field]: value },
// // //     });
// // //   };

// // //   const toggleHeatArray = (value) => {
// // //     const arr = formData.heatMappingConsent.cameraTypes || [];
// // //     const newArr = arr.includes(value)
// // //       ? arr.filter((v) => v !== value)
// // //       : [...arr, value];
// // //     updateHeatMapping("cameraTypes", newArr);
// // //   };

// // //   return (
// // //     <div className="space-y-6">
// // //       <h2 className="text-xl font-bold text-blue-800">Pricing & Availability</h2>

// // //       <div className="grid md:grid-cols-2 gap-4">
// // //         <div>
// // //           <label className="block mb-1">Monthly Base Price (₹)</label>
// // //           <input
// // //             type="number"
// // //             value={formData.basePrice || ""}
// // //             onChange={(e) => update("basePrice", e.target.value)}
// // //             className="w-full border p-2 rounded"
// // //             placeholder="e.g., 10000"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block mb-1">Monthly Premium Price (₹)</label>
// // //           <input
// // //             type="number"
// // //             value={formData.premiumPrice || ""}
// // //             onChange={(e) => update("premiumPrice", e.target.value)}
// // //             className="w-full border p-2 rounded"
// // //             placeholder="e.g., 15000"
// // //           />
// // //         </div>
// // //       </div>

// // //       <section>
// // //         <h3 className="font-medium">Suggested Pricing</h3>
// // //         {(formData.suggestedPricing || []).map((item, i) => (
// // //           <div key={i} className="grid grid-cols-2 gap-4 my-2">
// // //             <input
// // //               type="text"
// // //               placeholder="Type"
// // //               value={item.brandingType || ""}
// // //               onChange={(e) => updatePricing(i, "brandingType", e.target.value)}
// // //               className="border p-2 rounded"
// // //             />
// // //             <input
// // //               type="number"
// // //               placeholder="₹ / month"
// // //               value={item.pricePerMonth || ""}
// // //               onChange={(e) => updatePricing(i, "pricePerMonth", e.target.value)}
// // //               className="border p-2 rounded"
// // //             />
// // //           </div>
// // //         ))}
// // //         <button
// // //           onClick={() =>
// // //             update("suggestedPricing", [...(formData.suggestedPricing || []), {}])
// // //           }
// // //           className="px-4 py-2 bg-blue-600 text-white rounded"
// // //         >
// // //           + Add Pricing
// // //         </button>
// // //       </section>

// // //       <section>
// // //         <h3 className="font-medium">Availability (Date Ranges)</h3>
// // //         {(formData.availability || []).map((item, i) => (
// // //           <div key={i} className="grid grid-cols-2 gap-4 my-2">
// // //             <input
// // //               type="date"
// // //               value={item.from || ""}
// // //               onChange={(e) => updateAvailability(i, "from", e.target.value)}
// // //               className="border p-2 rounded"
// // //             />
// // //             <input
// // //               type="date"
// // //               value={item.to || ""}
// // //               onChange={(e) => updateAvailability(i, "to", e.target.value)}
// // //               className="border p-2 rounded"
// // //             />
// // //           </div>
// // //         ))}
// // //         <button
// // //           onClick={addAvailabilityRange}
// // //           className="px-4 py-2 bg-blue-600 text-white rounded"
// // //         >
// // //           + Add Date Range
// // //         </button>
// // //       </section>

// // //       <section>
// // //         <h3 className="text-lg font-semibold text-blue-700 my-2">Bank Details</h3>
// // //         <div className="grid md:grid-cols-2 gap-4">
// // //           {["accountHolderName", "accountNumber", "ifscCode", "upi"].map((field, idx) => (
// // //             <input
// // //               key={field}
// // //               type="text"
// // //               placeholder={field === "upi" ? "UPI ID (optional)" : field.replace(/([A-Z])/g, " $1")}
// // //               value={formData.bankDetails?.[field] || ""}
// // //               onChange={(e) => updateBank(field, e.target.value)}
// // //               className="border p-2 rounded"
// // //             />
// // //           ))}
// // //         </div>
// // //       </section>

// // //       <section>
// // //         <h3 className="text-lg font-semibold text-blue-700 my-2">Heat Mapping Consent</h3>
// // //         <div className="flex items-center gap-4 my-2">
// // //           <label><input
// // //             type="checkbox"
// // //             checked={formData.heatMappingConsent.freeTrial}
// // //             onChange={(e) => updateHeatMapping("freeTrial", e.target.checked)}
// // //           /> freeTrial</label>
// // //           <label><input
// // //             type="checkbox"
// // //             checked={formData.heatMappingConsent.clientTrialAllowed}
// // //             onChange={(e) => updateHeatMapping("clientTrialAllowed", e.target.checked)}
// // //           /> clientTrialAllowed</label>
// // //         </div>
// // //         <div className="grid md:grid-cols-2 gap-4">
// // //           <div>
// // //             <label>Camera Count</label>
// // //             <input
// // //               type="number"
// // //               value={formData.heatMappingConsent.cameraCount || ""}
// // //               onChange={(e) => updateHeatMapping("cameraCount", e.target.value)}
// // //               className="border p-2 rounded"
// // //             />
// // //           </div>
// // //           <div>
// // //             <label>Camera Types (comma-separated)</label>
// // //             <input
// // //               type="text"
// // //               value={(formData.heatMappingConsent.cameraTypes || []).join(", ")}
// // //               onChange={(e) =>
// // //                 updateHeatMapping("cameraTypes", e.target.value.split(",").map((s) => s.trim()))
// // //               }
// // //               className="border p-2 rounded"
// // //               placeholder="e.g. fixed, PTZ"
// // //             />
// // //           </div>
// // //         </div>
// // //         <div className="my-2">
// // //           <label>Camera Zone Photo URL</label>
// // //           <input
// // //             type="text"
// // //             value={formData.heatMappingConsent.cameraZonePhoto || ""}
// // //             onChange={(e) => updateHeatMapping("cameraZonePhoto", e.target.value)}
// // //             className="w-full border p-2 rounded"
// // //             placeholder="➡️ Upload link"
// // //           />
// // //         </div>
// // //       </section>
// // //     </div>
// // // );

// // // export default PricingAvailability ; 


// // import React from "react";

// // const PricingAvailability = ({ formData, setFormData }) => {
// //   const update = (field, value) => {
// //     setFormData({ ...formData, [field]: value });
// //   };

// //   const updatePricing = (index, field, value) => {
// //     const updated = [...(formData.suggestedPricing || [])];
// //     if (!updated[index]) updated[index] = {};
// //     updated[index][field] = value;
// //     setFormData({ ...formData, suggestedPricing: updated });
// //   };

// //   const updateAvailability = (index, field, value) => {
// //     const updated = [...(formData.availability || [])];
// //     if (!updated[index]) updated[index] = {};
// //     updated[index][field] = value;
// //     setFormData({ ...formData, availability: updated });
// //   };

// //   const addAvailabilityRange = () => {
// //     setFormData({
// //       ...formData,
// //       availability: [...(formData.availability || []), { from: "", to: "" }],
// //     });
// //   };

// //   const updateBank = (field, value) => {
// //     setFormData({
// //       ...formData,
// //       bankDetails: { ...formData.bankDetails, [field]: value },
// //     });
// //   };

// //   const updateHeatMapping = (field, value) => {
// //     setFormData({
// //       ...formData,
// //       heatMappingConsent: {
// //         ...formData.heatMappingConsent,
// //         [field]: value,
// //       },
// //     });
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-xl font-bold text-blue-800">Pricing & Availability</h2>

// //       {/* Base & Premium Price */}
// //       <div className="grid md:grid-cols-2 gap-4">
// //         <div>
// //           <label className="block mb-1">Monthly Base Price (₹)</label>
// //           <input
// //             type="number"
// //             value={formData.basePrice || ""}
// //             onChange={(e) => update("basePrice", e.target.value)}
// //             className="w-full border p-2 rounded"
// //             placeholder="e.g., 10000"
// //           />
// //         </div>
// //         <div>
// //           <label className="block mb-1">Monthly Premium Price (₹)</label>
// //           <input
// //             type="number"
// //             value={formData.premiumPrice || ""}
// //             onChange={(e) => update("premiumPrice", e.target.value)}
// //             className="w-full border p-2 rounded"
// //             placeholder="e.g., 15000"
// //           />
// //         </div>
// //       </div>

// //       {/* Suggested Pricing */}
// //       <section>
// //         <h3 className="font-medium">Suggested Pricing</h3>
// //         {(formData.suggestedPricing || []).map((item, i) => (
// //           <div key={i} className="grid grid-cols-2 gap-4 my-2">
// //             <input
// //               type="text"
// //               placeholder="Type"
// //               value={item.brandingType || ""}
// //               onChange={(e) => updatePricing(i, "brandingType", e.target.value)}
// //               className="border p-2 rounded"
// //             />
// //             <input
// //               type="number"
// //               placeholder="₹ / month"
// //               value={item.pricePerMonth || ""}
// //               onChange={(e) => updatePricing(i, "pricePerMonth", e.target.value)}
// //               className="border p-2 rounded"
// //             />
// //           </div>
// //         ))}
// //         <button
// //           onClick={() =>
// //             update("suggestedPricing", [...(formData.suggestedPricing || []), {}])
// //           }
// //           className="px-4 py-2 bg-blue-600 text-white rounded"
// //         >
// //           + Add Pricing
// //         </button>
// //       </section>

// //       {/* Availability */}
// //       <section>
// //         <h3 className="font-medium">Availability (Date Ranges)</h3>
// //         {(formData.availability || []).map((item, i) => (
// //           <div key={i} className="grid grid-cols-2 gap-4 my-2">
// //             <input
// //               type="date"
// //               value={item.from || ""}
// //               onChange={(e) => updateAvailability(i, "from", e.target.value)}
// //               className="border p-2 rounded"
// //             />
// //             <input
// //               type="date"
// //               value={item.to || ""}
// //               onChange={(e) => updateAvailability(i, "to", e.target.value)}
// //               className="border p-2 rounded"
// //             />
// //           </div>
// //         ))}
// //         <button
// //           onClick={addAvailabilityRange}
// //           className="px-4 py-2 bg-blue-600 text-white rounded"
// //         >
// //           + Add Date Range
// //         </button>
// //       </section>

// //       {/* Bank Details */}
// //       <section>
// //         <h3 className="text-lg font-semibold text-blue-700 my-2">Bank Details</h3>
// //         <div className="grid md:grid-cols-2 gap-4">
// //           {["accountHolderName", "accountNumber", "ifscCode", "upi"].map((field) => (
// //             <input
// //               key={field}
// //               type="text"
// //               placeholder={field === "upi" ? "UPI ID (optional)" : field.replace(/([A-Z])/g, " $1")}
// //               value={formData.bankDetails?.[field] || ""}
// //               onChange={(e) => updateBank(field, e.target.value)}
// //               className="border p-2 rounded"
// //             />
// //           ))}
// //         </div>
// //       </section>

// //       {/* Heat Mapping */}
// //       <section>
// //         <h3 className="text-lg font-semibold text-blue-700 my-2">Heat Mapping Consent</h3>
// //         <div className="flex items-center gap-4 my-2">
// //           <label>
// //             <input
// //               type="checkbox"
// //               checked={formData.heatMappingConsent?.freeTrial || false}
// //               onChange={(e) =>
// //                 updateHeatMapping("freeTrial", e.target.checked)
// //               }
// //             />{" "}
// //             Free Trial
// //           </label>
// //           <label>
// //             <input
// //               type="checkbox"
// //               checked={formData.heatMappingConsent?.clientTrialAllowed || false}
// //               onChange={(e) =>
// //                 updateHeatMapping("clientTrialAllowed", e.target.checked)
// //               }
// //             />{" "}
// //             Client Trial Allowed
// //           </label>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-4">
// //           <div>
// //             <label>Camera Count</label>
// //             <input
// //               type="number"
// //               value={formData.heatMappingConsent?.cameraCount || ""}
// //               onChange={(e) =>
// //                 updateHeatMapping("cameraCount", e.target.value)
// //               }
// //               className="border p-2 rounded w-full"
// //             />
// //           </div>
// //           <div>
// //             <label>Camera Types (comma-separated)</label>
// //             <input
// //               type="text"
// //               value={(formData.heatMappingConsent?.cameraTypes || []).join(", ")}
// //               onChange={(e) =>
// //                 updateHeatMapping(
// //                   "cameraTypes",
// //                   e.target.value.split(",").map((s) => s.trim())
// //                 )
// //               }
// //               className="border p-2 rounded w-full"
// //               placeholder="e.g., fixed, PTZ"
// //             />
// //           </div>
// //         </div>

// //         <div className="mt-2">
// //           <label>Camera Zone Photo URL</label>
// //           <input
// //             type="text"
// //             value={formData.heatMappingConsent?.cameraZonePhoto || ""}
// //             onChange={(e) =>
// //               updateHeatMapping("cameraZonePhoto", e.target.value)
// //             }
// //             className="w-full border p-2 rounded"
// //             placeholder="Upload link"
// //           />
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default PricingAvailability;


// import React from "react"

// const PricingAvailability = ({ formData, setFormData }) => {
//   const update = (field, value) => {
//     setFormData({ ...formData, [field]: value })
//   }

//   const updatePricing = (index, field, value) => {
//     const updated = [...(formData.suggestedPricing || [])]
//     if (!updated[index]) updated[index] = {}
//     updated[index][field] = value
//     setFormData({ ...formData, suggestedPricing: updated })
//   }

//   const updateAvailability = (index, field, value) => {
//     const updated = [...(formData.availability || [])]
//     if (!updated[index]) updated[index] = {}
//     updated[index][field] = value
//     setFormData({ ...formData, availability: updated })
//   }

//   const addAvailabilityRange = () => {
//     setFormData({
//       ...formData,
//       availability: [...(formData.availability || []), { from: "", to: "" }],
//     })
//   }

//   const updateBank = (field, value) => {
//     setFormData({
//       ...formData,
//       bankDetails: { ...formData.bankDetails, [field]: value },
//     })
//   }

//   const updateHeatMapping = (field, value) => {
//     setFormData({
//       ...formData,
//       heatMappingConsent: {
//         ...formData.heatMappingConsent,
//         [field]: value,
//       },
//     })
//   }

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-bold text-blue-800">Pricing & Availability</h2>

//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1">Monthly Base Price (₹)</label>
//           <input
//             type="number"
//             value={formData.basePrice || ""}
//             onChange={(e) => update("basePrice", e.target.value)}
//             className="w-full border p-2 rounded"
//             placeholder="e.g., 10000"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Monthly Premium Price (₹)</label>
//           <input
//             type="number"
//             value={formData.premiumPrice || ""}
//             onChange={(e) => update("premiumPrice", e.target.value)}
//             className="w-full border p-2 rounded"
//             placeholder="e.g., 15000"
//           />
//         </div>
//       </div>

//       <div>
//         <h3 className="font-medium mb-2">Suggested Pricing</h3>
//         {(formData.suggestedPricing || []).map((item, i) => (
//           <div key={i} className="grid grid-cols-2 gap-4 mb-2">
//             <input
//               type="text"
//               placeholder="Branding Type"
//               value={item.brandingType || ""}
//               onChange={(e) => updatePricing(i, "brandingType", e.target.value)}
//               className="border p-2 rounded"
//             />
//             <input
//               type="number"
//               placeholder="₹ / month"
//               value={item.pricePerMonth || ""}
//               onChange={(e) => updatePricing(i, "pricePerMonth", e.target.value)}
//               className="border p-2 rounded"
//             />
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             update("suggestedPricing", [...(formData.suggestedPricing || []), {}])
//           }
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           + Add Pricing
//         </button>
//       </div>

//       <div>
//         <h3 className="font-medium mb-2">Availability (Date Ranges)</h3>
//         {(formData.availability || []).map((item, i) => (
//           <div key={i} className="grid grid-cols-2 gap-4 mb-2">
//             <input
//               type="date"
//               value={item.from || ""}
//               onChange={(e) => updateAvailability(i, "from", e.target.value)}
//               className="border p-2 rounded"
//             />
//             <input
//               type="date"
//               value={item.to || ""}
//               onChange={(e) => updateAvailability(i, "to", e.target.value)}
//               className="border p-2 rounded"
//             />
//           </div>
//         ))}
//         <button
//           onClick={addAvailabilityRange}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           + Add Date Range
//         </button>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold text-blue-700 mb-2">Bank Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Account Holder Name"
//             value={formData.bankDetails?.accountHolderName || ""}
//             onChange={(e) => updateBank("accountHolderName", e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Account Number"
//             value={formData.bankDetails?.accountNumber || ""}
//             onChange={(e) => updateBank("accountNumber", e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="IFSC Code"
//             value={formData.bankDetails?.ifscCode || ""}
//             onChange={(e) => updateBank("ifscCode", e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="UPI ID"
//             value={formData.bankDetails?.upi || ""}
//             onChange={(e) => updateBank("upi", e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold text-blue-700 mb-2">Heat Mapping Consent</h3>
//         <div className="grid md:grid-cols-2 gap-4">
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={formData.heatMappingConsent?.freeTrial || false}
//               onChange={(e) => updateHeatMapping("freeTrial", e.target.checked)}
//             />
//             Free Trial Consent
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={formData.heatMappingConsent?.clientTrialAllowed || false}
//               onChange={(e) => updateHeatMapping("clientTrialAllowed", e.target.checked)}
//             />
//             Client Trial Allowed
//           </label>
//         </div>
//         <div className="grid md:grid-cols-2 gap-4 mt-4">
//           <input
//             type="number"
//             placeholder="No. of Cameras"
//             value={formData.heatMappingConsent?.cameraCount || ""}
//             onChange={(e) => updateHeatMapping("cameraCount", e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Camera Types (comma separated)"
//             value={(formData.heatMappingConsent?.cameraTypes || []).join(", ")}
//             onChange={(e) =>
//               updateHeatMapping(
//                 "cameraTypes",
//                 e.target.value.split(",").map((s) => s.trim())
//               )
//             }
//             className="w-full border p-2 rounded"
//           />
//         </div>
//         <input
//           type="text"
//           placeholder="Camera Zone Photo URL"
//           value={formData.heatMappingConsent?.cameraZonePhoto || ""}
//           onChange={(e) => updateHeatMapping("cameraZonePhoto", e.target.value)}
//           className="w-full border p-2 rounded mt-4"
//         />
//       </div>
//     </div>
//   )
// }

// export default PricingAvailability

import React from "react"

const PricingAvailability = ({ formData, setFormData, nextStep, prevStep }) => {
  const update = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const updatePricing = (index, field, value) => {
    const updated = [...(formData.suggestedPricing || [])]
    if (!updated[index]) updated[index] = {}
    updated[index][field] = value
    setFormData({ ...formData, suggestedPricing: updated })
  }

  const updateAvailability = (index, field, value) => {
    const updated = [...(formData.availability || [])]
    if (!updated[index]) updated[index] = {}
    updated[index][field] = value
    setFormData({ ...formData, availability: updated })
  }

  const addAvailabilityRange = () => {
    setFormData({
      ...formData,
      availability: [...(formData.availability || []), { from: "", to: "" }],
    })
  }

  const updateBank = (field, value) => {
    setFormData({
      ...formData,
      bankDetails: {
        ...formData.bankDetails,
        [field]: value,
      },
    })
  }

  const updateHeatMapping = (field, value) => {
    setFormData({
      ...formData,
      heatMappingConsent: {
        ...formData.heatMappingConsent,
        [field]: value,
      },
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800">Pricing & Availability</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label>Base Price (₹)</label>
          <input
            type="number"
            value={formData.basePrice || ""}
            onChange={(e) => update("basePrice", e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Premium Price (₹)</label>
          <input
            type="number"
            value={formData.premiumPrice || ""}
            onChange={(e) => update("premiumPrice", e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Suggested Pricing</h3>
        {(formData.suggestedPricing || []).map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-4 mb-2">
            <input
              type="text"
              placeholder="Branding Type"
              value={item.brandingType || ""}
              onChange={(e) => updatePricing(i, "brandingType", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="₹/month"
              value={item.pricePerMonth || ""}
              onChange={(e) => updatePricing(i, "pricePerMonth", e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        ))}
        <button
          onClick={() =>
            update("suggestedPricing", [...(formData.suggestedPricing || []), {}])
          }
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Pricing
        </button>
      </div>

      <div>
        <h3 className="font-medium mb-2">Availability</h3>
        {(formData.availability || []).map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-4 mb-2">
            <input
              type="date"
              value={item.from || ""}
              onChange={(e) => updateAvailability(i, "from", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={item.to || ""}
              onChange={(e) => updateAvailability(i, "to", e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        ))}
        <button
          onClick={addAvailabilityRange}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Date Range
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-700 my-2">Bank Details</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Account Holder Name"
            value={formData.bankDetails?.accountHolderName || ""}
            onChange={(e) => updateBank("accountHolderName", e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Account Number"
            value={formData.bankDetails?.accountNumber || ""}
            onChange={(e) => updateBank("accountNumber", e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="IFSC Code"
            value={formData.bankDetails?.ifscCode || ""}
            onChange={(e) => updateBank("ifscCode", e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="UPI ID"
            value={formData.bankDetails?.upi || ""}
            onChange={(e) => updateBank("upi", e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-700 my-2">Heat Mapping Consent</h3>
        <div className="flex gap-4 my-2">
          <label>
            <input
              type="checkbox"
              checked={formData.heatMappingConsent?.freeTrial || false}
              onChange={(e) => updateHeatMapping("freeTrial", e.target.checked)}
            />{" "}
            Free Trial
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.heatMappingConsent?.clientTrialAllowed || false}
              onChange={(e) => updateHeatMapping("clientTrialAllowed", e.target.checked)}
            />{" "}
            Client Trial Allowed
          </label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Camera Count"
            value={formData.heatMappingConsent?.cameraCount || ""}
            onChange={(e) => updateHeatMapping("cameraCount", e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Camera Types (comma separated)"
            value={(formData.heatMappingConsent?.cameraTypes || []).join(", ")}
            onChange={(e) =>
              updateHeatMapping(
                "cameraTypes",
                e.target.value.split(",").map((val) => val.trim())
              )
            }
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Camera Zone Photo URL"
            value={formData.heatMappingConsent?.cameraZonePhoto || ""}
            onChange={(e) => updateHeatMapping("cameraZonePhoto", e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
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

export default PricingAvailability
