// // // // // src/components/ListYourSpaceForm/Step2Features.jsx
// // // // import React from "react"

// // // // const amenitiesList = [
// // // //   "WiFi Available",
// // // //   "Parking Available",
// // // //   "Security Guards",
// // // //   "CCTV Surveillance",
// // // //   "Air Conditioning",
// // // //   "Washroom Facilities",
// // // //   "Food Court",
// // // //   "Elevator Access",
// // // //   "Wheelchair Accessible",
// // // //   "24/7 Access",
// // // //   "Power Backup",
// // // //   "Sound System",
// // // // ]

// // // // const Features = ({ formData, setFormData }) => {
// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target
// // // //     setFormData({ ...formData, [name]: value })
// // // //   }

// // // //   const toggleAmenity = (amenity) => {
// // // //     const current = formData.amenities || []
// // // //     if (current.includes(amenity)) {
// // // //       setFormData({ ...formData, amenities: current.filter((a) => a !== amenity) })
// // // //     } else {
// // // //       setFormData({ ...formData, amenities: [...current, amenity] })
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="grid gap-6">
// // // //       <h2 className="text-2xl font-semibold text-blue-900">Space Features</h2>

// // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //         <div>
// // // //           <label className="block text-md font-medium text-gray-800 mb-1">Total Area (sq ft) *</label>
// // // //           <input
// // // //             type="number"
// // // //             name="totalArea"
// // // //             value={formData.totalArea || ""}
// // // //             onChange={handleChange}
// // // //             placeholder="e.g. 1000"
// // // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //         </div>

// // // //         <div>
// // // //           <label className="block text-md font-medium text-gray-800 mb-1">Peak Hours</label>
// // // //           <input
// // // //             type="text"
// // // //             name="peakHours"
// // // //             value={formData.peakHours || ""}
// // // //             onChange={handleChange}
// // // //             placeholder="e.g. 4 PM – 8 PM"
// // // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //         <div>
// // // //           <label className="block text-md font-medium text-gray-800 mb-1">Weekday Footfall *</label>
// // // //           <input
// // // //             type="number"
// // // //             name="weekdayFootfall"
// // // //             value={formData.weekdayFootfall || ""}
// // // //             onChange={handleChange}
// // // //             placeholder="e.g. 300"
// // // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //         </div>

// // // //         <div>
// // // //           <label className="block text-md font-medium text-gray-800 mb-1">Weekend Footfall *</label>
// // // //           <input
// // // //             type="number"
// // // //             name="weekendFootfall"
// // // //             value={formData.weekendFootfall || ""}
// // // //             onChange={handleChange}
// // // //             placeholder="e.g. 500"
// // // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div>
// // // //         <label className="block text-md font-medium text-gray-800 mb-1">Target Audience</label>
// // // //         <textarea
// // // //           name="targetAudience"
// // // //           value={formData.targetAudience || ""}
// // // //           onChange={handleChange}
// // // //           placeholder="Describe who visits this space: age, interests, profession..."
// // // //           rows={3}
// // // //           className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // //         ></textarea>
// // // //       </div>

// // // //       <div>
// // // //         <label className="block text-md font-medium text-gray-800 mb-2">Available Amenities</label>
// // // //         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// // // //           {amenitiesList.map((amenity) => (
// // // //             <label key={amenity} className="flex items-center gap-2 text-sm">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 checked={formData.amenities?.includes(amenity)}
// // // //                 onChange={() => toggleAmenity(amenity)}
// // // //                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // //               />
// // // //               {amenity}
// // // //             </label>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Features

// // // import React from "react"

// // // const SpaceFeatures = ({ formData, setFormData }) => {
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target
// // //     setFormData({ ...formData, [name]: value })
// // //   }

// // //   const handleArrayChange = (field, value) => {
// // //     const existing = formData[field] || []
// // //     setFormData({
// // //       ...formData,
// // //       [field]: existing.includes(value)
// // //         ? existing.filter((v) => v !== value)
// // //         : [...existing, value],
// // //     })
// // //   }

// // //   const amenitiesList = [
// // //     "WiFi", "Parking", "Security", "Washroom", "CCTV", "Elevator",
// // //     "Wheelchair Access", "Power Backup", "AC", "Food Court"
// // //   ]

// // //   const ageGroupOptions = ["Under 18", "18-24", "25-34", "35-44", "45-60", "60+"]
// // //   const genderOptions = ["male", "female", "mixed"]
// // //   const incomeGroups = ["low", "middle", "high"]

// // //   return (
// // //     <div className="grid gap-6">
// // //       <div className="grid md:grid-cols-3 gap-4">
// // //         <div>
// // //           <label className="block font-medium mb-1">Total Area (sq.ft) *</label>
// // //           <input
// // //             type="number"
// // //             name="totalArea"
// // //             value={formData.totalArea || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. 1000"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block font-medium mb-1">Peak Hours</label>
// // //           <input
// // //             type="text"
// // //             name="peakHours"
// // //             value={formData.peakHours || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. 5 PM - 9 PM"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block font-medium mb-1">Target Audience</label>
// // //           <input
// // //             type="text"
// // //             name="targetAudience"
// // //             value={formData.targetAudience || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. Shoppers, Gym-goers, Families"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="grid md:grid-cols-3 gap-4">
// // //         <div>
// // //           <label className="block font-medium mb-1">Weekday Footfall *</label>
// // //           <input
// // //             type="number"
// // //             name="weekdayFootfall"
// // //             value={formData.weekdayFootfall || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. 300"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block font-medium mb-1">Weekend Footfall *</label>
// // //           <input
// // //             type="number"
// // //             name="weekendFootfall"
// // //             value={formData.weekendFootfall || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. 600"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block font-medium mb-1">Monthly Footfall</label>
// // //           <input
// // //             type="number"
// // //             name="monthlyFootfall"
// // //             value={formData.monthlyFootfall || ""}
// // //             onChange={handleChange}
// // //             placeholder="Optional"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>
// // //       </div>

// // //       <div>
// // //         <label className="block font-medium mb-1">Age Groups</label>
// // //         <div className="flex flex-wrap gap-3 mt-2">
// // //           {ageGroupOptions.map((group) => (
// // //             <label key={group} className="flex items-center space-x-2">
// // //               <input
// // //                 type="checkbox"
// // //                 checked={formData.ageGroups?.includes(group)}
// // //                 onChange={() => handleArrayChange("ageGroups", group)}
// // //               />
// // //               <span>{group}</span>
// // //             </label>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="grid md:grid-cols-2 gap-6">
// // //         <div>
// // //           <label className="block font-medium mb-1">Gender Preference</label>
// // //           <select
// // //             name="gender"
// // //             value={formData.gender || ""}
// // //             onChange={handleChange}
// // //             className="w-full border px-4 py-2 rounded"
// // //           >
// // //             <option value="">Select</option>
// // //             {genderOptions.map((g) => (
// // //               <option key={g} value={g}>{g}</option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Income Group</label>
// // //           <select
// // //             name="incomeGroup"
// // //             value={formData.incomeGroup || ""}
// // //             onChange={handleChange}
// // //             className="w-full border px-4 py-2 rounded"
// // //           >
// // //             <option value="">Select</option>
// // //             {incomeGroups.map((inc) => (
// // //               <option key={inc} value={inc}>{inc}</option>
// // //             ))}
// // //           </select>
// // //         </div>
// // //       </div>

// // //       <div>
// // //         <label className="block font-medium mb-1">Amenities</label>
// // //         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// // //           {amenitiesList.map((amenity) => (
// // //             <label key={amenity} className="flex items-center space-x-2">
// // //               <input
// // //                 type="checkbox"
// // //                 checked={formData.amenities?.includes(amenity)}
// // //                 onChange={() => handleArrayChange("amenities", amenity)}
// // //               />
// // //               <span>{amenity}</span>
// // //             </label>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default SpaceFeatures

// // import React from "react"

// // const SpaceFeatures = ({ formData, setFormData }) => {
// //   const handleNestedChange = (object, field, value) => {
// //     setFormData({
// //       ...formData,
// //       [object]: {
// //         ...(formData[object] || {}),
// //         [field]: value,
// //       },
// //     })
// //   }

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData({ ...formData, [name]: value })
// //   }

// //   const handleArrayChange = (field, value) => {
// //     const existing = formData[field] || []
// //     setFormData({
// //       ...formData,
// //       [field]: existing.includes(value)
// //         ? existing.filter((v) => v !== value)
// //         : [...existing, value],
// //     })
// //   }

// //   const amenitiesList = [
// //     "WiFi", "Parking", "Security", "Washroom", "CCTV", "Elevator",
// //     "Wheelchair Access", "Power Backup", "AC", "Food Court"
// //   ]

// //   const ageGroupOptions = ["Under 18", "18-24", "25-34", "35-44", "45-60", "60+"]
// //   const genderOptions = ["male", "female", "mixed"]
// //   const incomeGroups = ["low", "middle", "high"]

// //   return (
// //     <div className="grid gap-6">
// //       <div className="grid md:grid-cols-3 gap-4">
// //         <div>
// //           <label className="block font-medium mb-1">Total Area (sq.ft) *</label>
// //           <input
// //             type="number"
// //             name="totalArea"
// //             value={formData.totalArea || ""}
// //             onChange={handleChange}
// //             placeholder="e.g. 1000"
// //             className="w-full border px-4 py-2 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Peak Hours</label>
// //           <input
// //             type="text"
// //             name="peakHours"
// //             value={formData.peakHours || ""}
// //             onChange={handleChange}
// //             placeholder="e.g. 5 PM - 9 PM"
// //             className="w-full border px-4 py-2 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Target Audience</label>
// //           <input
// //             type="text"
// //             name="targetAudience"
// //             value={formData.targetAudience || ""}
// //             onChange={handleChange}
// //             placeholder="e.g. Shoppers, Gym-goers, Families"
// //             className="w-full border px-4 py-2 rounded"
// //           />
// //         </div>
// //       </div>

// //       <div className="grid md:grid-cols-3 gap-4">
// //         <div>
// //           <label className="block font-medium mb-1">Weekday Footfall *</label>
// //           <input
// //             type="number"
// //             value={formData.footfall?.weekday || ""}
// //             onChange={(e) => handleNestedChange("footfall", "weekday", e.target.value)}
// //             placeholder="e.g. 300"
// //             className="w-full border px-4 py-2 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Weekend Footfall *</label>
// //           <input
// //             type="number"
// //             value={formData.footfall?.weekend || ""}
// //             onChange={(e) => handleNestedChange("footfall", "weekend", e.target.value)}
// //             placeholder="e.g. 600"
// //             className="w-full border px-4 py-2 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Monthly Footfall</label>
// //           <input
// //             type="number"
// //             value={formData.footfall?.monthly || ""}
// //             onChange={(e) => handleNestedChange("footfall", "monthly", e.target.value)}
// //             placeholder="Optional"
// //             className="w-full border px-4 py-2 rounded"
// //           />
// //         </div>
// //       </div>

// //       <div>
// //         <label className="block font-medium mb-1">Age Groups</label>
// //         <div className="flex flex-wrap gap-3 mt-2">
// //           {ageGroupOptions.map((group) => (
// //             <label key={group} className="flex items-center space-x-2">
// //               <input
// //                 type="checkbox"
// //                 checked={formData.demographics?.ageGroups?.includes(group)}
// //                 onChange={() => {
// //                   const current = formData.demographics?.ageGroups || []
// //                   const newGroups = current.includes(group)
// //                     ? current.filter((g) => g !== group)
// //                     : [...current, group]
// //                   setFormData({
// //                     ...formData,
// //                     demographics: {
// //                       ...(formData.demographics || {}),
// //                       ageGroups: newGroups
// //                     }
// //                   })
// //                 }}
// //               />
// //               <span>{group}</span>
// //             </label>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="grid md:grid-cols-2 gap-6">
// //         <div>
// //           <label className="block font-medium mb-1">Gender Preference</label>
// //           <select
// //             value={formData.demographics?.gender || ""}
// //             onChange={(e) =>
// //               handleNestedChange("demographics", "gender", e.target.value)
// //             }
// //             className="w-full border px-4 py-2 rounded"
// //           >
// //             <option value="">Select</option>
// //             {genderOptions.map((g) => (
// //               <option key={g} value={g}>{g}</option>
// //             ))}
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block font-medium mb-1">Income Group</label>
// //           <select
// //             value={formData.demographics?.incomeGroup || ""}
// //             onChange={(e) =>
// //               handleNestedChange("demographics", "incomeGroup", e.target.value)
// //             }
// //             className="w-full border px-4 py-2 rounded"
// //           >
// //             <option value="">Select</option>
// //             {incomeGroups.map((inc) => (
// //               <option key={inc} value={inc}>{inc}</option>
// //             ))}
// //           </select>
// //         </div>
// //       </div>

// //       <div>
// //         <label className="block font-medium mb-1">Amenities</label>
// //         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// //           {amenitiesList.map((amenity) => (
// //             <label key={amenity} className="flex items-center space-x-2">
// //               <input
// //                 type="checkbox"
// //                 checked={formData.amenities?.includes(amenity)}
// //                 onChange={() => handleArrayChange("amenities", amenity)}
// //               />
// //               <span>{amenity}</span>
// //             </label>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default SpaceFeatures


// import React from "react"

// const amenitiesList = [
//   "WiFi", "Parking", "Security", "Washroom", "CCTV", "Elevator",
//   "Wheelchair Access", "Power Backup", "AC", "Food Court"
// ]

// const ageGroupOptions = ["Under 18", "18-24", "25-34", "35-44", "45-60", "60+"]
// const genderOptions = ["male", "female", "mixed"]
// const incomeGroups = ["low", "middle", "high"]

// export default function Features({ formData, setFormData }) {
//   const update = (field, value) => {
//     setFormData({ ...formData, [field]: value })
//   }

//   const updateFootfall = (key, value) => {
//     setFormData({
//       ...formData,
//       footfall: {
//         ...formData.footfall,
//         [key]: value
//       }
//     })
//   }

//   const updateDemographics = (key, value) => {
//     setFormData({
//       ...formData,
//       demographics: {
//         ...formData.demographics,
//         [key]: value
//       }
//     })
//   }

//   const toggleArrayField = (field, value) => {
//     const current = formData.demographics?.[field] || []
//     const updated = current.includes(value)
//       ? current.filter((v) => v !== value)
//       : [...current, value]

//     updateDemographics(field, updated)
//   }

//   const toggleAmenity = (amenity) => {
//     const current = formData.amenities || []
//     const updated = current.includes(amenity)
//       ? current.filter((a) => a !== amenity)
//       : [...current, amenity]

//     update("amenities", updated)
//   }

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-bold text-blue-800">Space Features</h2>

//       <div className="grid md:grid-cols-3 gap-4">
//         <input
//           type="number"
//           placeholder="Total Area (sq.ft)"
//           value={formData.totalArea || ""}
//           onChange={(e) => update("totalArea", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Peak Hours (e.g. 4pm-9pm)"
//           value={formData.peakHours || ""}
//           onChange={(e) => update("peakHours", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Target Audience"
//           value={formData.targetAudience || ""}
//           onChange={(e) => update("targetAudience", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </div>

//       <div className="grid md:grid-cols-3 gap-4">
//         <input
//           type="number"
//           placeholder="Weekday Footfall"
//           value={formData.footfall?.weekday || ""}
//           onChange={(e) => updateFootfall("weekday", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Weekend Footfall"
//           value={formData.footfall?.weekend || ""}
//           onChange={(e) => updateFootfall("weekend", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Monthly Footfall (optional)"
//           value={formData.footfall?.monthly || ""}
//           onChange={(e) => updateFootfall("monthly", e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </div>

//       <div>
//         <label className="block font-medium mb-1">Age Groups</label>
//         <div className="flex flex-wrap gap-3 mt-2">
//           {ageGroupOptions.map((group) => (
//             <label key={group} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={formData.demographics?.ageGroups?.includes(group)}
//                 onChange={() => toggleArrayField("ageGroups", group)}
//               />
//               {group}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-4">
//         <select
//           value={formData.demographics?.gender || ""}
//           onChange={(e) => updateDemographics("gender", e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">Select Gender Preference</option>
//           {genderOptions.map((g) => (
//             <option key={g} value={g}>{g}</option>
//           ))}
//         </select>

//         <select
//           value={formData.demographics?.incomeGroup || ""}
//           onChange={(e) => updateDemographics("incomeGroup", e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">Select Income Group</option>
//           {incomeGroups.map((g) => (
//             <option key={g} value={g}>{g}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="block font-medium mb-1">Amenities</label>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//           {amenitiesList.map((amenity) => (
//             <label key={amenity} className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={formData.amenities?.includes(amenity)}
//                 onChange={() => toggleAmenity(amenity)}
//               />
//               {amenity}
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import React from "react"

const SpaceFeatures = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleArrayChange = (field, value) => {
    const existing = formData[field] || []
    setFormData({
      ...formData,
      [field]: existing.includes(value)
        ? existing.filter((v) => v !== value)
        : [...existing, value],
    })
  }

  const amenitiesList = [
    "WiFi", "Parking", "Security", "Washroom", "CCTV", "Elevator",
    "Wheelchair Access", "Power Backup", "AC", "Food Court"
  ]

  const ageGroupOptions = ["Under 18", "18-24", "25-34", "35-44", "45-60", "60+"]
  const genderOptions = ["male", "female", "mixed"]
  const incomeGroups = ["low", "middle", "high"]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-800">Step 2: Space Features</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">Total Area (sq.ft) *</label>
          <input
            type="number"
            name="totalArea"
            value={formData.totalArea || ""}
            onChange={handleChange}
            placeholder="e.g. 1000"
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Peak Hours</label>
          <input
            type="text"
            name="peakHours"
            value={formData.peakHours || ""}
            onChange={handleChange}
            placeholder="e.g. 5 PM - 9 PM"
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Target Audience</label>
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience || ""}
            onChange={handleChange}
            placeholder="e.g. Shoppers, Gym-goers, Families"
            className="w-full border px-4 py-2 rounded"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">Weekday Footfall *</label>
          <input
            type="number"
            name="weekdayFootfall"
            value={formData.weekdayFootfall || ""}
            onChange={handleChange}
            placeholder="e.g. 300"
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Weekend Footfall *</label>
          <input
            type="number"
            name="weekendFootfall"
            value={formData.weekendFootfall || ""}
            onChange={handleChange}
            placeholder="e.g. 600"
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Monthly Footfall</label>
          <input
            type="number"
            name="monthlyFootfall"
            value={formData.monthlyFootfall || ""}
            onChange={handleChange}
            placeholder="Optional"
            className="w-full border px-4 py-2 rounded"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Age Groups</label>
        <div className="flex flex-wrap gap-3 mt-2">
          {ageGroupOptions.map((group) => (
            <label key={group} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.ageGroups?.includes(group)}
                onChange={() => handleArrayChange("ageGroups", group)}
              />
              <span>{group}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Gender Preference</label>
          <select
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select</option>
            {genderOptions.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Income Group</label>
          <select
            name="incomeGroup"
            value={formData.incomeGroup || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select</option>
            {incomeGroups.map((inc) => (
              <option key={inc} value={inc}>{inc}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.amenities?.includes(amenity)}
                onChange={() => handleArrayChange("amenities", amenity)}
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default SpaceFeatures
