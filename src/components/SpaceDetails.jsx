
// // // export default function SpaceDetails({ formData, setFormData }) {
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target
// // //     setFormData(prev => ({ ...prev, [name]: value }))
// // //   }

// // //   return (
// // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // //       <h2 className="text-xl font-bold text-blue-900">Space Details</h2>

// // //       <input
// // //         type="text"
// // //         name="spaceSize"
// // //         value={formData.spaceSize || ""}
// // //         onChange={handleChange}
// // //         placeholder="Total Space Size (in sq. ft.)"
// // //         className="w-full border p-2 rounded"
// // //       />

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //         <input
// // //           type="number"
// // //           name="footfallWeekday"
// // //           value={formData.footfallWeekday || ""}
// // //           onChange={handleChange}
// // //           placeholder="Approx. Weekday Footfall"
// // //           className="w-full border p-2 rounded"
// // //         />
// // //         <input
// // //           type="number"
// // //           name="footfallWeekend"
// // //           value={formData.footfallWeekend || ""}
// // //           onChange={handleChange}
// // //           placeholder="Approx. Weekend Footfall"
// // //           className="w-full border p-2 rounded"
// // //         />
// // //       </div>

// // //       <div>
// // //         <label className="block mb-1 font-medium text-blue-800">Target Age Groups</label>
// // //         <select
// // //           name="ageGroups"
// // //           multiple
// // //           value={formData.ageGroups || []}
// // //           onChange={(e) =>
// // //             setFormData((prev) => ({
// // //               ...prev,
// // //               ageGroups: Array.from(e.target.selectedOptions, (o) => o.value),
// // //             }))
// // //           }
// // //           className="w-full border p-2 rounded h-32"
// // //         >
// // //           <option value="18-24">18–24</option>
// // //           <option value="25-34">25–34</option>
// // //           <option value="35-44">35–44</option>
// // //           <option value="45-54">45–54</option>
// // //           <option value="55+">55+</option>
// // //         </select>
// // //       </div>

// // //       <div>
// // //         <label className="block mb-1 font-medium text-blue-800">Income Group</label>
// // //         <select
// // //           name="incomeGroup"
// // //           value={formData.incomeGroup || ""}
// // //           onChange={handleChange}
// // //           className="w-full border p-2 rounded"
// // //         >
// // //           <option value="">Select</option>
// // //           <option value="mass">Mass</option>
// // //           <option value="middle">Middle</option>
// // //           <option value="premium">Premium</option>
// // //           <option value="luxury">Luxury</option>
// // //         </select>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // export default function SpaceDetails({ formData, setFormData }) {
// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData(prev => ({ ...prev, [name]: value }))
// //   }

// //   const handleMultiSelect = (e) => {
// //     const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
// //     setFormData(prev => ({ ...prev, ageGroups: selectedOptions }))
// //   }

// //   return (
// //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// //       <h2 className="text-xl font-bold text-blue-900">Space Details</h2>

// //       <input
// //         type="text"
// //         name="spaceSize"
// //         value={formData.spaceSize || ""}
// //         onChange={handleChange}
// //         placeholder="Total Space Size (in sq. ft.)"
// //         className="w-full border p-2 rounded"
// //       />

// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //         <input
// //           type="number"
// //           name="footfallWeekday"
// //           value={formData.footfallWeekday || ""}
// //           onChange={handleChange}
// //           placeholder="Approx. Weekday Footfall"
// //           className="w-full border p-2 rounded"
// //         />
// //         <input
// //           type="number"
// //           name="footfallWeekend"
// //           value={formData.footfallWeekend || ""}
// //           onChange={handleChange}
// //           placeholder="Approx. Weekend Footfall"
// //           className="w-full border p-2 rounded"
// //         />
// //       </div>

// //       <div>
// //         <label className="block mb-1 font-medium text-blue-800">Target Age Groups</label>
// //         <select
// //           name="ageGroups"
// //           multiple
// //           value={formData.ageGroups || []}
// //           onChange={handleMultiSelect}
// //           className="w-full border p-2 rounded h-32"
// //         >
// //           <option value="18-24">18–24</option>
// //           <option value="25-34">25–34</option>
// //           <option value="35-44">35–44</option>
// //           <option value="45-54">45–54</option>
// //           <option value="55+">55+</option>
// //         </select>
// //       </div>

// //       <div>
// //         <label className="block mb-1 font-medium text-blue-800">Income Group</label>
// //         <select
// //           name="incomeGroup"
// //           value={formData.incomeGroup || ""}
// //           onChange={handleChange}
// //           className="w-full border p-2 rounded"
// //         >
// //           <option value="">Select</option>
// //           <option value="mass">Mass</option>
// //           <option value="middle">Middle</option>
// //           <option value="premium">Premium</option>
// //           <option value="luxury">Luxury</option>
// //         </select>
// //       </div>
// //     </div>
// //   )
// // }

// // src/components/ListYourSpaceForm/BasicInfo.jsx



// // src/components/ListYourSpaceForm/SpaceDetails.jsx
// import React from "react"
// import { Input } from "../../ui/input"
// import { Label } from "../../ui/label"

// const SpaceDetails = ({ formData, setFormData }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }

//   return (
//     <div className="space-y-4">
//       <div>
//         <Label htmlFor="address">Address</Label>
//         <Input
//           type="text"
//           id="address"
//           name="address"
//           value={formData.address || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="pincode">Pincode</Label>
//         <Input
//           type="text"
//           id="pincode"
//           name="pincode"
//           value={formData.pincode || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="landmark">Landmark</Label>
//         <Input
//           type="text"
//           id="landmark"
//           name="landmark"
//           value={formData.landmark || ""}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <Label htmlFor="spaceType">Space Type</Label>
//         <Input
//           type="text"
//           id="spaceType"
//           name="spaceType"
//           value={formData.spaceType || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="size">Size (in sq. ft)</Label>
//         <Input
//           type="number"
//           id="size"
//           name="size"
//           value={formData.size || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="footfallWeekday">Footfall - Weekday</Label>
//         <Input
//           type="number"
//           id="footfallWeekday"
//           name="footfallWeekday"
//           value={formData.footfallWeekday || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="footfallWeekend">Footfall - Weekend</Label>
//         <Input
//           type="number"
//           id="footfallWeekend"
//           name="footfallWeekend"
//           value={formData.footfallWeekend || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="footfallMonthly">Footfall - Monthly</Label>
//         <Input
//           type="number"
//           id="footfallMonthly"
//           name="footfallMonthly"
//           value={formData.footfallMonthly || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//     </div>
//   )
// }

// export default SpaceDetails



// src/components/ListYourSpaceForm/SpaceDetails.jsx
import React from "react"

const SpaceDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="space-y-4 p-4 border rounded-md shadow-sm">
      <div>
        <p className="text-sm font-medium">Address</p>
        <input
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div>
        <p className="text-sm font-medium">Pincode</p>
        <input
          name="pincode"
          value={formData.pincode || ""}
          onChange={handleChange}
          placeholder="Enter pincode"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div>
        <p className="text-sm font-medium">Landmark</p>
        <input
          name="landmark"
          value={formData.landmark || ""}
          onChange={handleChange}
          placeholder="Enter landmark"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div>
        <p className="text-sm font-medium">Space Type</p>
        <input
          name="spaceType"
          value={formData.spaceType || ""}
          onChange={handleChange}
          placeholder="Enter space type"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
    </div>
  )
}

export default SpaceDetails