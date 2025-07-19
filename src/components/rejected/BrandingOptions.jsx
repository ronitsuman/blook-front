
// // import React, { useState } from "react"
// // import brandingZonesConfig from "./data/brandingZonesConfig.json"

// // const BrandingZones = ({ formData, setFormData }) => {
// //   const [customOptions, setCustomOptions] = useState(formData.customBrandingOptions || [])

// //   const selectedType = formData.spaceType
// //   const brandingZones = brandingZonesConfig[selectedType] || []

// //   const handleZoneChange = (zoneId, field, value) => {
// //     const updatedZones = [...(formData.brandingZones || [])]
// //     const index = updatedZones.findIndex(z => z.type === zoneId)
// //     if (index !== -1) {
// //       updatedZones[index][field] = value
// //     } else {
// //       const newZone = { type: zoneId, [field]: value }
// //       updatedZones.push(newZone)
// //     }
// //     setFormData({ ...formData, brandingZones: updatedZones })
// //   }

// //   const handleCustomOptionChange = (index, field, value) => {
// //     const updated = [...customOptions]
// //     updated[index][field] = value
// //     setCustomOptions(updated)
// //     setFormData({ ...formData, customBrandingOptions: updated })
// //   }

// //   const addCustomOption = () => {
// //     const newCustom = { label: "", sizeSqFt: "", photo: "" }
// //     const updated = [...customOptions, newCustom]
// //     setCustomOptions(updated)
// //     setFormData({ ...formData, customBrandingOptions: updated })
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-xl font-bold text-blue-800">Branding Zones</h2>
// //       <p className="text-gray-600">Based on your space type, select branding areas available:</p>

// //       {brandingZones.length === 0 ? (
// //         <p className="text-red-500">Please select a space type first to load branding zones.</p>
// //       ) : (
// //         brandingZones.map((zone) => {
// //           const current = (formData.brandingZones || []).find(z => z.type === zone.id) || {}
// //           return (
// //             <div key={zone.id} className="border p-4 rounded-lg shadow bg-gray-50 mb-4">
// //               <h3 className="font-semibold mb-2">{zone.label}</h3>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <input
// //                   type="number"
// //                   placeholder="Number of units"
// //                   value={current.number || ""}
// //                   onChange={(e) => handleZoneChange(zone.id, "number", e.target.value)}
// //                   className="border rounded p-2 w-full"
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Size (sq.ft)"
// //                   value={current.sizeSqFt || ""}
// //                   onChange={(e) => handleZoneChange(zone.id, "sizeSqFt", e.target.value)}
// //                   className="border rounded p-2 w-full"
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Photo URL (or upload)"
// //                   value={current.photo || ""}
// //                   onChange={(e) => handleZoneChange(zone.id, "photo", e.target.value)}
// //                   className="border rounded p-2 w-full"
// //                 />
// //               </div>
// //             </div>
// //           )
// //         })
// //       )}

// //       <div className="mt-8">
// //         <h3 className="font-semibold text-lg mb-2">Add Custom Branding Option</h3>
// //         {customOptions.map((opt, i) => (
// //           <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// //             <input
// //               type="text"
// //               placeholder="Label"
// //               value={opt.label}
// //               onChange={(e) => handleCustomOptionChange(i, "label", e.target.value)}
// //               className="border rounded p-2 w-full"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Size (sq.ft)"
// //               value={opt.sizeSqFt}
// //               onChange={(e) => handleCustomOptionChange(i, "sizeSqFt", e.target.value)}
// //               className="border rounded p-2 w-full"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Photo URL"
// //               value={opt.photo}
// //               onChange={(e) => handleCustomOptionChange(i, "photo", e.target.value)}
// //               className="border rounded p-2 w-full"
// //             />
// //           </div>
// //         ))}
// //         <button
// //           onClick={addCustomOption}
// //           className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //         >
// //           + Add More
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default BrandingZones


// // import React, { useEffect, useState } from "react"
// // import { brandingOptionsMap } from "./data/BrandingOptionsMapExpanded.js"

// // const BrandingZones = ({ formData, setFormData }) => {
// //   const [options, setOptions] = useState([])

// //   useEffect(() => {
// //     if (formData.spaceType && brandingOptionsMap[formData.spaceType]) {
// //       setOptions(brandingOptionsMap[formData.spaceType])
// //     } else {
// //       setOptions([])
// //     }
// //   }, [formData.spaceType])

// //   const handleZoneChange = (key, checked) => {
// //     const updated = checked
// //       ? [...formData.brandingZones, key]
// //       : formData.brandingZones.filter((z) => z !== key)
// //     setFormData((prev) => ({ ...prev, brandingZones: updated }))
// //   }

// //   const handleCustomChange = (e) => {
// //     setFormData((prev) => ({ ...prev, customBrandingOptions: e.target.value }))
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-xl font-semibold text-gray-800">Select Branding Zones</h2>
// //       {options.length > 0 ? (
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {options.map((zone) => (
// //             <label key={zone.key} className="flex items-center space-x-2">
// //               <input
// //                 type="checkbox"
// //                 checked={formData.brandingZones.includes(zone.key)}
// //                 onChange={(e) => handleZoneChange(zone.key, e.target.checked)}
// //               />
// //               <span>{zone.label}</span>
// //             </label>
// //           ))}
// //         </div>
// //       ) : (
// //         <p className="text-gray-500">Select a space type to see branding options.</p>
// //       )}

// //       <div>
// //         <label className="block text-md font-medium text-gray-700 mb-1">
// //           Add Custom Branding Option (if any)
// //         </label>
// //         <textarea
// //           className="w-full border px-3 py-2 rounded-lg"
// //           rows={3}
// //           placeholder="e.g., Lift ceilings, Cafeteria trays..."
// //           value={formData.customBrandingOptions}
// //           onChange={handleCustomChange}
// //         />
// //       </div>
// //     </div>
// //   )
// // }

// // export default BrandingZones



// // import React, { useEffect, useState } from "react"

// // const brandingOptionsMap = {
// //   "Retail Spaces / Shops / Showrooms": [
// //     { key: "shopFrontBoard", label: "Shop Front Board (Glow Sign / Non-lit)" },
// //     { key: "entryGlassBranding", label: "Entry Glass/Window Branding (Vinyl Stickers)" },
// //     { key: "insideEmptyWalls", label: "Inside Empty Walls (posters, screens)" },
// //     { key: "billingCounter", label: "Billing Counter Space" },
// //     { key: "floorStickers", label: "Floors / Steps (stickers, decals)" },
// //     { key: "productShelves", label: "Product Shelves (wobbler ads)" },
// //     { key: "ceilingHangings", label: "Ceiling Hangings (mobiles, danglers)" },
// //     { key: "fittingRoom", label: "Fitting Room (mirror, door stickers)" },
// //     { key: "deliveryPackaging", label: "Delivery Packaging (bags, covers)" }
// //   ],
// //   "Restaurants / Cafés / Food Outlets": [
// //     { key: "entryDoorBranding", label: "Entry Glass or Door (stickers, signage)" },
// //     { key: "tableTops", label: "Tabletops (tent cards, table mats)" },
// //     { key: "insideWalls", label: "Inside Walls (posters, frames)" },
// //     { key: "menuCard", label: "Menu Card Branding" },
// //     { key: "deliveryPackaging", label: "Delivery Packaging (bags, boxes)" },
// //     { key: "washroomBranding", label: "Washroom Doors/Mirrors (vinyls)" },
// //     { key: "takeawayCounter", label: "Takeaway Counters (stickers, danglers)" },
// //     { key: "umbrellaChairs", label: "Outside Umbrellas / Chairs (photo)" }
// //   ],
// //   "Residential Societies / RWAs": [
// //     { key: "mainGate", label: "Main Gate / Entry Arch (banners)" },
// //     { key: "clubhouseWalls", label: "Clubhouse Walls / Notice Boards" },
// //     { key: "lifts", label: "Lifts (inside panels, outside doors)" },
// //     { key: "emptyWalls", label: "Empty Walls (basement, common areas)" },
// //     { key: "staircases", label: "Staircases (steps, walls)" },
// //     { key: "parkingArea", label: "Parking Area (pillars, walls)" },
// //     { key: "digitalDisplay", label: "Digital Display (photo & specs)" }
// //   ],
// //   "Corporate Offices / Corporate Parks": [
// //     { key: "liftBranding", label: "Lift Branding (panels, doors)" },
// //     { key: "lobbyScreens", label: "Lobby Digital Screens" },
// //     { key: "cafeteriaBranding", label: "Cafeteria Tables / Walls" },
// //     { key: "meetingRoom", label: "Meeting Rooms (glass, doors)" },
// //     { key: "receptionDesk", label: "Reception Desk Branding" },
// //     { key: "parkingLot", label: "Parking Lot (pillars, gates)" },
// //     { key: "eventSponsorships", label: "Event Sponsorships (calendar)" }
// //   ],
// //   "Gyms / Fitness Centers": [
// //     { key: "receptionArea", label: "Reception Area (countertop, wall)" },
// //     { key: "mirrors", label: "Mirrors (vinyls)" },
// //     { key: "equipmentBranding", label: "Gym Equipment (photo)" },
// //     { key: "lockerRooms", label: "Locker Rooms (doors, lockers)" },
// //     { key: "waterBars", label: "Water Dispensers / Supplement Bars" }
// //   ],
// //   "Clinics / Hospitals": [
// //     { key: "waitingAreaWalls", label: "Waiting Area Walls (posters, screens)" },
// //     { key: "liftDoors", label: "Lift Doors" },
// //     { key: "pharmacyCounters", label: "Pharmacy Counters (photo)" },
// //     { key: "prescriptionFiles", label: "Discharge Files / Prescription Sheets" },
// //     { key: "doctorDoors", label: "Doctor Chamber Doors (vinyls)" }
// //   ],
// //   "Multiplexes / Cinema Halls": [
// //     { key: "foyerPanels", label: "Foyer Wall Panels" },
// //     { key: "stairRails", label: "Staircases / Railings" },
// //     { key: "foodCounter", label: "Food Counter (photo)" },
// //     { key: "seatBacks", label: "Seat Backs (specs)" },
// //     { key: "trailerScreens", label: "Digital Screens (trailer loops)" }
// //   ],
// //   "Co-Working Spaces": [
// //     { key: "commonAreas", label: "Common Areas (walls, glass)" },
// //     { key: "meetingRoomGlass", label: "Meeting Room Glass" },
// //     { key: "desks", label: "Desks (tent cards, mats)" },
// //     { key: "pantry", label: "Pantry (photo)" }
// //   ],
// //   "Outdoor Spaces / Hoardings / Vehicles": [
// //     { key: "gateArch", label: "Gate Arch / Perimeter Wall" },
// //     { key: "rooftopHoardings", label: "Rooftop Hoardings (size)" },
// //     { key: "lookwalkers", label: "Lookwalkers (vendor photo)" },
// //     { key: "brandedVehicles", label: "Branded Vehicles (type, size)" }
// //   ]
// // }

// // const BrandingZones = ({ formData, setFormData }) => {
// //   const [options, setOptions] = useState([])

// //   useEffect(() => {
// //     if (formData.spaceType && brandingOptionsMap[formData.spaceType]) {
// //       setOptions(brandingOptionsMap[formData.spaceType])
// //     } else {
// //       setOptions([])
// //     }
// //   }, [formData.spaceType])

// //   const handleZoneChange = (key, checked) => {
// //     const updated = checked
// //       ? [...formData.brandingZones, key]
// //       : formData.brandingZones.filter((z) => z !== key)
// //     setFormData((prev) => ({ ...prev, brandingZones: updated }))
// //   }

// //   const handleCustomChange = (e) => {
// //     setFormData((prev) => ({ ...prev, customBrandingOptions: e.target.value }))
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-xl font-semibold text-gray-800">Select Branding Zones</h2>
// //       {options.length > 0 ? (
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {options.map((zone) => (
// //             <label key={zone.key} className="flex items-center space-x-2">
// //               <input
// //                 type="checkbox"
// //                 checked={formData.brandingZones.includes(zone.key)}
// //                 onChange={(e) => handleZoneChange(zone.key, e.target.checked)}
// //               />
// //               <span>{zone.label}</span>
// //             </label>
// //           ))}
// //         </div>
// //       ) : (
// //         <p className="text-gray-500">Select a space type to see branding options.</p>
// //       )}

// //       <div>
// //         <label className="block text-md font-medium text-gray-700 mb-1">
// //           Add Custom Branding Option (if any)
// //         </label>
// //         <textarea
// //           className="w-full border px-3 py-2 rounded-lg"
// //           rows={3}
// //           placeholder="e.g., Lift ceilings, Cafeteria trays..."
// //           value={formData.customBrandingOptions}
// //           onChange={handleCustomChange}
// //         />
// //       </div>
// //     </div>
// //   )
// // }

// // export default BrandingZones


// import React, { useEffect, useState } from "react"

// const BrandingZones = ({ formData, setFormData }) => {
//   const [options, setOptions] = useState([])

//   const brandingOptionsMap = {
//     "Retail Spaces / Shops / Showrooms": [
//       { label: "Shop Front Board", key: "shopFrontBoard", inputFields: ["size"] },
//       { label: "Entry Glass/Window Branding", key: "entryGlass", inputFields: ["size"] },
//       { label: "Inside Empty Walls", key: "insideWalls", inputFields: ["number", "size"] },
//       { label: "Billing Counter Space", key: "billingCounter", inputFields: ["size"] },
//       { label: "Floors / Steps", key: "floors", inputFields: ["number", "size"] },
//       { label: "Product Shelves", key: "shelves", inputFields: ["number", "size"] },
//       { label: "Ceiling Hangings", key: "ceiling", inputFields: ["number", "size"] },
//       { label: "Fitting Room", key: "fittingRoom", inputFields: ["number", "size"] },
//       { label: "Delivery Packaging", key: "packaging", inputFields: ["file"] },
//     ],
//     "Restaurants / Cafés / Food Outlets": [
//       { label: "Entry Glass or Door", key: "entryGlass", inputFields: ["size"] },
//       { label: "Tabletops", key: "tabletops", inputFields: ["number", "size"] },
//       { label: "Inside Walls", key: "insideWalls", inputFields: ["number", "size"] },
//       { label: "Menu Card Branding", key: "menuCard", inputFields: ["file"] },
//       { label: "Delivery Packaging", key: "packaging", inputFields: ["file"] },
//       { label: "Washroom Doors/Mirrors", key: "washroom", inputFields: ["number", "size"] },
//       { label: "Takeaway Counters", key: "takeaway", inputFields: ["size"] },
//       { label: "Outside Umbrellas / Chairs", key: "umbrellaChair", inputFields: ["file"] },
//     ],
//     // ... Add rest here same pattern
//   }

//   useEffect(() => {
//     if (formData.spaceType && brandingOptionsMap[formData.spaceType]) {
//       setOptions(brandingOptionsMap[formData.spaceType])
//     } else {
//       setOptions([])
//     }
//   }, [formData.spaceType])

//   const handleInputChange = (key, field, value) => {
//     const updatedZones = [...(formData.brandingZones || [])]
//     const zoneIndex = updatedZones.findIndex((z) => z.type === key)
//     if (zoneIndex === -1) {
//       updatedZones.push({ type: key, [field]: value })
//     } else {
//       updatedZones[zoneIndex][field] = value
//     }
//     setFormData({ ...formData, brandingZones: updatedZones })
//   }

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold text-gray-800">Branding Zones</h2>

//       <p className="text-sm text-gray-600 mb-2">
//         Selected Space Type: <strong>{formData.spaceType || "None"}</strong>
//       </p>

//       {options.length === 0 && (
//         <p className="text-red-500">Please select a space type in Step 1 or 2 to view branding options.</p>
//       )}

//       {options.map((option) => (
//         <div key={option.key} className="border rounded-lg p-4 bg-white shadow-sm">
//           <h3 className="font-medium mb-2 text-blue-700">{option.label}</h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {option.inputFields.includes("number") && (
//               <input
//                 type="number"
//                 placeholder="Number of units"
//                 className="border px-3 py-2 rounded"
//                 onChange={(e) => handleInputChange(option.key, "number", e.target.value)}
//               />
//             )}
//             {option.inputFields.includes("size") && (
//               <input
//                 type="text"
//                 placeholder="Size (in sq.ft)"
//                 className="border px-3 py-2 rounded"
//                 onChange={(e) => handleInputChange(option.key, "sizeSqFt", e.target.value)}
//               />
//             )}
//             {option.inputFields.includes("file") && (
//               <input
//                 type="text"
//                 placeholder="Upload Image URL"
//                 className="border px-3 py-2 rounded"
//                 onChange={(e) => handleInputChange(option.key, "photo", e.target.value)}
//               />
//             )}
//           </div>
//         </div>
//       ))}

//       <div className="mt-6">
//         <label className="block font-medium text-gray-700 mb-1">Custom Branding Option</label>
//         <input
//           type="text"
//           placeholder="Describe any custom zone (optional)"
//           value={formData.customBrandingOptions?.[0]?.label || ""}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               customBrandingOptions: [{ label: e.target.value }]
//             })
//           }
//           className="w-full border px-3 py-2 rounded"
//         />
//       </div>
//     </div>
//   )
// }

// export default BrandingZones


// import React from "react"

// const brandingTypesBySpace = {
//   "Retail Spaces / Shops / Showrooms": [
//     "shopFrontBoard", "entryGlass", "insideWalls", "billingCounter", "floors", "ceilings"
//   ],
//   "Restaurants / Cafés / Food Outlets": [
//     "tabletops", "walls", "menus", "counter", "standees"
//   ],
//   "Gyms / Fitness Centres": [
//     "equipment", "mirrors", "walls", "reception", "changingArea"
//   ],
//   "Salons / Spas": [
//     "mirrors", "productShelves", "walls", "glassEntry"
//   ],
//   "Educational Institutes / Coaching Centres": [
//     "classroomWalls", "noticeBoards", "entryGates", "waitingArea"
//   ]
// }

// const BrandingOptions = ({ formData, setFormData }) => {
//   const selectedTypes = brandingTypesBySpace[formData.spaceType] || []

//   const updateBrandingZone = (index, field, value) => {
//     const updated = [...(formData.brandingZones || [])]
//     if (!updated[index]) updated[index] = {}
//     updated[index][field] = value
//     setFormData({ ...formData, brandingZones: updated })
//   }

//   const updateCustomBranding = (index, field, value) => {
//     const updated = [...(formData.customBrandingOptions || [])]
//     if (!updated[index]) updated[index] = {}
//     updated[index][field] = value
//     setFormData({ ...formData, customBrandingOptions: updated })
//   }

//   const addCustomBranding = () => {
//     setFormData({
//       ...formData,
//       customBrandingOptions: [...(formData.customBrandingOptions || []), {}]
//     })
//   }

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-bold text-blue-800">Branding Options</h2>

//       {selectedTypes.map((type, i) => (
//         <div key={i} className="grid md:grid-cols-4 gap-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Type</label>
//             <input
//               type="text"
//               value={type}
//               readOnly
//               className="w-full border px-3 py-2 rounded bg-gray-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Number (if any)</label>
//             <input
//               type="number"
//               value={formData.brandingZones?.[i]?.number || ""}
//               onChange={(e) => updateBrandingZone(i, "number", e.target.value)}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Size (sq.ft)</label>
//             <input
//               type="text"
//               value={formData.brandingZones?.[i]?.sizeSqFt || ""}
//               onChange={(e) => updateBrandingZone(i, "sizeSqFt", e.target.value)}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Photo URL</label>
//             <input
//               type="text"
//               value={formData.brandingZones?.[i]?.photo || ""}
//               onChange={(e) => updateBrandingZone(i, "photo", e.target.value)}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//         </div>
//       ))}

//       <div className="mt-6">
//         <h3 className="font-medium text-lg text-blue-700">Custom Branding Options</h3>
//         {(formData.customBrandingOptions || []).map((item, i) => (
//           <div key={i} className="grid md:grid-cols-3 gap-4 mt-3">
//             <input
//               type="text"
//               placeholder="Label"
//               value={item.label || ""}
//               onChange={(e) => updateCustomBranding(i, "label", e.target.value)}
//               className="border px-3 py-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Size (sq.ft)"
//               value={item.sizeSqFt || ""}
//               onChange={(e) => updateCustomBranding(i, "sizeSqFt", e.target.value)}
//               className="border px-3 py-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Photo URL"
//               value={item.photo || ""}
//               onChange={(e) => updateCustomBranding(i, "photo", e.target.value)}
//               className="border px-3 py-2 rounded"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={addCustomBranding}
//           className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           + Add Custom Branding
//         </button>
//       </div>
//     </div>
//   )
// }

// export default BrandingOptions


import React, { useState, useEffect } from "react"

const brandingOptionsMap = {
  "Retail Spaces / Shops / Showrooms": [
    { key: "shopFrontBoard", label: "Shop Front Board (Glow Sign / Non-lit)" },
    { key: "entryGlass", label: "Entry Glass/Window Branding (Vinyl Stickers)" },
    { key: "insideWalls", label: "Inside Empty Walls (posters, screens)" },
    { key: "billingCounter", label: "Billing Counter Space" },
    { key: "floors", label: "Floors / Steps (stickers, decals)" },
    { key: "productShelves", label: "Product Shelves (wobbler ads)" },
    { key: "ceilingHangings", label: "Ceiling Hangings (mobiles, danglers)" },
    { key: "fittingRoom", label: "Fitting Room (mirror, door stickers)" },
    { key: "deliveryPackaging", label: "Delivery Packaging (bags, covers)" }
  ],
  "Restaurants / Cafés / Food Outlets": [
    { key: "entryDoor", label: "Entry Glass or Door (stickers, signage)" },
    { key: "tabletops", label: "Tabletops (tent cards, table mats)" },
    { key: "insideWalls", label: "Inside Walls (posters, frames)" },
    { key: "menuCard", label: "Menu Card Branding" },
    { key: "deliveryPackaging", label: "Delivery Packaging (bags, boxes)" },
    { key: "washroomBranding", label: "Washroom Doors/Mirrors (vinyls)" },
    { key: "takeawayCounter", label: "Takeaway Counters (stickers, danglers)" },
    { key: "umbrellaChairs", label: "Outside Umbrellas / Chairs (photo)" }
  ],
  "Residential Societies / RWAs": [
    { key: "mainGate", label: "Main Gate / Entry Arch (banners)" },
    { key: "clubhouseWalls", label: "Clubhouse Walls / Notice Boards" },
    { key: "lifts", label: "Lifts (inside panels, outside doors)" },
    { key: "emptyWalls", label: "Empty Walls (basement, common areas)" },
    { key: "staircases", label: "Staircases (steps, walls)" },
    { key: "parkingArea", label: "Parking Area (pillars, walls)" },
    { key: "digitalDisplay", label: "Digital Display (photo & specs)" }
  ],
  "Corporate Offices / Corporate Parks": [
    { key: "liftBranding", label: "Lift Branding (panels, doors)" },
    { key: "lobbyScreens", label: "Lobby Digital Screens" },
    { key: "cafeteriaBranding", label: "Cafeteria Tables / Walls" },
    { key: "meetingRoom", label: "Meeting Rooms (glass, doors)" },
    { key: "receptionDesk", label: "Reception Desk Branding" },
    { key: "parkingLot", label: "Parking Lot (pillars, gates)" },
    { key: "eventSponsorships", label: "Event Sponsorships (calendar)" }
  ],
  "Gyms / Fitness Centers": [
    { key: "receptionArea", label: "Reception Area (countertop, wall)" },
    { key: "mirrors", label: "Mirrors (vinyls)" },
    { key: "equipmentBranding", label: "Gym Equipment (photo)" },
    { key: "lockerRooms", label: "Locker Rooms (doors, lockers)" },
    { key: "waterBars", label: "Water Dispensers / Supplement Bars" }
  ],
  "Clinics / Hospitals": [
    { key: "waitingAreaWalls", label: "Waiting Area Walls (posters, screens)" },
    { key: "liftDoors", label: "Lift Doors" },
    { key: "pharmacyCounters", label: "Pharmacy Counters (photo)" },
    { key: "prescriptionFiles", label: "Discharge Files / Prescription Sheets" },
    { key: "doctorDoors", label: "Doctor Chamber Doors (vinyls)" }
  ],
  "Cinema / Multiplex": [
    { key: "foyerPanels", label: "Foyer Wall Panels" },
    { key: "stairRails", label: "Staircases / Railings" },
    { key: "foodCounter", label: "Food Counter (photo)" },
    { key: "seatBacks", label: "Seat Backs (specs)" },
    { key: "trailerScreens", label: "Digital Screens (trailer loops)" }
  ],
  "Co-Working Spaces": [
    { key: "commonAreas", label: "Common Areas (walls, glass)" },
    { key: "meetingRoomGlass", label: "Meeting Room Glass" },
    { key: "desks", label: "Desks (tent cards, mats)" },
    { key: "pantry", label: "Pantry (photo)" }
  ],
  "Outdoor Spaces / Hoardings / Vehicles": [
    { key: "gateArch", label: "Gate Arch / Perimeter Wall" },
    { key: "rooftopHoardings", label: "Rooftop Hoardings (size)" },
    { key: "lookwalkers", label: "Lookwalkers (vendor photo)" },
    { key: "brandedVehicles", label: "Branded Vehicles (type, size)" }
  ]
}

const BrandingOptions = ({ formData, setFormData, nextStep, prevStep }) => {
  const [customBrand, setCustomBrand] = useState({ label: "", sizeSqFt: "" })

  const spaceType = formData.spaceType
  const options = brandingOptionsMap[spaceType] || []

  const toggleOption = (key) => {
    const current = formData.brandingZones || []
    const exists = current.find((b) => b.type === key)
    if (exists) {
      setFormData({
        ...formData,
        brandingZones: current.filter((b) => b.type !== key)
      })
    } else {
      setFormData({
        ...formData,
        brandingZones: [...current, { type: key }]
      })
    }
  }

  const updateZoneField = (type, field, value) => {
    const updated = formData.brandingZones.map((item) =>
      item.type === type ? { ...item, [field]: value } : item
    )
    setFormData({ ...formData, brandingZones: updated })
  }

  const addCustomBranding = () => {
    if (customBrand.label && customBrand.sizeSqFt) {
      setFormData({
        ...formData,
        customBrandingOptions: [
          ...(formData.customBrandingOptions || []),
          { ...customBrand }
        ]
      })
      setCustomBrand({ label: "", sizeSqFt: "" })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-blue-800">Branding Options</h2>

      <div className="space-y-3">
        {options.map((opt) => {
          const selected = formData.brandingZones?.find((b) => b.type === opt.key)
          return (
            <div key={opt.key} className="border p-3 rounded bg-gray-50">
              <label className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={!!selected}
                  onChange={() => toggleOption(opt.key)}
                />
                {opt.label}
              </label>
              {selected && (
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Size (e.g. 12ft)"
                    value={selected.sizeSqFt || ""}
                    onChange={(e) =>
                      updateZoneField(opt.key, "sizeSqFt", e.target.value)
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Number (optional)"
                    value={selected.number || ""}
                    onChange={(e) =>
                      updateZoneField(opt.key, "number", e.target.value)
                    }
                    className="border p-2 rounded"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-2">Custom Branding</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Label"
            value={customBrand.label}
            onChange={(e) => setCustomBrand({ ...customBrand, label: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Size (e.g. 10ft)"
            value={customBrand.sizeSqFt}
            onChange={(e) => setCustomBrand({ ...customBrand, sizeSqFt: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={addCustomBranding}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Custom Branding
        </button>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
          ← Back
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded">
          Next →
        </button>
      </div>
    </div>
  )
}

export default BrandingOptions
