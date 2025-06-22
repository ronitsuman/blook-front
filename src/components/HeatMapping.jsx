
// // // export default function HeatMapping({ formData, setFormData }) {
// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target
// // //     const val = type === "checkbox" ? checked : value
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       heatMapping: {
// // //         ...prev.heatMapping,
// // //         [name]: val
// // //       }
// // //     }))
// // //   }

// // //   return (
// // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // //       <h2 className="text-xl font-bold text-blue-900">Heat Mapping & CCTV</h2>

// // //       <label className="block font-medium text-blue-800">CCTV Cameras Installed?</label>
// // //       <select name="camerasInstalled" value={formData.heatMapping?.camerasInstalled || ""} onChange={handleChange} className="w-full border p-2 rounded">
// // //         <option value="">Select</option>
// // //         <option value="yes">Yes</option>
// // //         <option value="no">No</option>
// // //       </select>

// // //       {formData.heatMapping?.camerasInstalled === "yes" && (
// // //         <>
// // //           <input type="number" name="cameraCount" value={formData.heatMapping?.cameraCount || ""} onChange={handleChange}
// // //             placeholder="Number of Cameras" className="w-full border p-2 rounded" />

// // //           <label className="block mt-4 font-medium text-blue-800">Camera Types</label>
// // //           <select name="cameraType" value={formData.heatMapping?.cameraType || ""} onChange={handleChange} className="w-full border p-2 rounded">
// // //             <option value="">Select</option>
// // //             <option value="Dome">Dome</option>
// // //             <option value="Bullet">Bullet</option>
// // //             <option value="PTZ">PTZ</option>
// // //             <option value="Unknown">Unknown</option>
// // //           </select>

// // //           <label className="flex items-center gap-2 mt-3">
// // //             <input type="checkbox" name="clientTrialAllowed" checked={formData.heatMapping?.clientTrialAllowed || false} onChange={handleChange} />
// // //             Allow Client-Paid Trial?
// // //           </label>
// // //           <label className="flex items-center gap-2">
// // //             <input type="checkbox" name="freeTrial" checked={formData.heatMapping?.freeTrial || false} onChange={handleChange} />
// // //             Allow Free Heat Mapping Trial?
// // //           </label>
// // //         </>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // export default function HeatMapping({ formData, setFormData }) {
// //   const handleChange = (e) => {
// //     const { name, checked } = e.target
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: checked
// //     }))
// //   }

// //   return (
// //     <div className="bg-white p-6 rounded-xl shadow mt-10 space-y-4">
// //       <h2 className="text-xl font-bold text-blue-900">Heat Mapping & Trial Campaigns</h2>

// //       <label className="flex items-start gap-2 text-sm">
// //         <input
// //           type="checkbox"
// //           name="heatMapping"
// //           checked={formData.heatMapping || false}
// //           onChange={handleChange}
// //           className="mt-1"
// //         />
// //         I am open to run short trial campaigns or allow sensor-based heat mapping on my premises.
// //       </label>
// //     </div>
// //   )
// // }

// // src/components/ListYourSpaceForm/HeatMappingConsentForm.jsx
// import React from "react"
// import { Label } from "../../ui/label"
// import { Switch } from "../../ui/switch"
// import { Input } from "../../ui/input"

// const HeatMappingConsentForm = ({ formData, setFormData }) => {
//   const toggleConsent = () => {
//     setFormData({
//       ...formData,
//       heatMappingConsent: !formData.heatMappingConsent
//     })
//   }

//   const handleCCTVChange = (e) => {
//     setFormData({
//       ...formData,
//       cctvAvailable: e.target.value
//     })
//   }

//   return (
//     <div className="space-y-4">
//       <div>
//         <Label htmlFor="cctvAvailable">Is CCTV installed at this space? (Yes/No)</Label>
//         <Input
//           type="text"
//           id="cctvAvailable"
//           name="cctvAvailable"
//           value={formData.cctvAvailable || ""}
//           onChange={handleCCTVChange}
//           placeholder="Yes or No"
//         />
//       </div>

//       <Label htmlFor="heatMapping">Do you allow Heat Mapping & CCTV-based footfall estimation?</Label>
//       <div className="flex items-center gap-2">
//         <Switch
//           id="heatMapping"
//           checked={formData.heatMappingConsent || false}
//           onCheckedChange={toggleConsent}
//         />
//         <span>{formData.heatMappingConsent ? "Yes" : "No"}</span>
//       </div>
//     </div>
//   )
// }

// export default HeatMappingConsentForm


// src/components/ListYourSpaceForm/HeatMappingConsent.jsx
import React from "react"

const HeatMappingConsent = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  return (
    <div className="space-y-4 p-4 border rounded-md shadow-sm">
      <div>
        <p className="text-sm font-medium">Is CCTV Available? (Yes/No)</p>
        <input
          name="cctvAvailable"
          value={formData.cctvAvailable || ""}
          onChange={handleChange}
          placeholder="Yes or No"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="heatMappingConsent"
          checked={formData.heatMappingConsent || false}
          onChange={handleChange}
        />
        <p className="text-sm">I give consent for heat mapping and analytics.</p>
      </div>
    </div>
  )
}

export default HeatMappingConsent