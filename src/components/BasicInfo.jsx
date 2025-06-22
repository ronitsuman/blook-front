// // // // // // src/components/ListYourSpaceForm/Step1BasicInfo.jsx
// // // // // import React from "react"
// // // // // import GoogleMapPicker from "./GoogleMapPicker"
// // // // // import MapDemoPage from "./MapPage"



// // // // // const BasicInfo = ({ formData, setFormData }) => {
// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target
// // // // //     setFormData({ ...formData, [name]: value })
// // // // //   }

// // // // //   return (
// // // // //     <div className="grid gap-6">
// // // // //       <h2 className="text-2xl font-semibold text-blue-900">Basic Space Information</h2>

// // // // //       <div>
// // // // //         <label className="block text-md font-medium text-gray-800 mb-1">Space Name *</label>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="spaceName"
// // // // //           value={formData.spaceName || ""}
// // // // //           onChange={handleChange}
// // // // //           placeholder="e.g., Sunshine Apartments RWA"
// // // // //           className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //         />
// // // // //       </div>

// // // // //       <div>
// // // // //         <label className="block text-md font-medium text-gray-800 mb-1">Space Type *</label>
// // // // //         <select
// // // // //           name="spaceType"
// // // // //           value={formData.spaceType || ""}
// // // // //           onChange={handleChange}
// // // // //           className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //         >
// // // // //           <option value="">Select space type</option>
// // // // //           <option value="RWA / Housing Society">RWA / Housing Society</option>
// // // // //           <option value="Gym / Fitness Center">Gym / Fitness Center</option>
// // // // //           <option value="Mall / Shopping Center">Mall / Shopping Center</option>
// // // // //           <option value="Restaurant / Café">Restaurant / Café</option>
// // // // //           <option value="Retail Store">Retail Store</option>
// // // // //           <option value="Office Complex">Office Complex</option>
// // // // //           <option value="Hospital / Clinic">Hospital / Clinic</option>
// // // // //           <option value="Educational Institution">Educational Institution</option>
// // // // //           <option value="Hotel / Resort">Hotel / Resort</option>
// // // // //           <option value="Transportation Hub">Transportation Hub</option>
// // // // //           <option value="Other">Other</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       <div>
// // // // //         <label className="block text-md font-medium text-gray-800 mb-1">Complete Address *</label>
// // // // //         <textarea
// // // // //           name="address"
// // // // //           value={formData.address || ""}
// // // // //           onChange={handleChange}
// // // // //           placeholder="Building name, street, area"
// // // // //           rows={3}
// // // // //           className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //         ></textarea>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // //         <div>
// // // // //           <label className="block text-md font-medium text-gray-800 mb-1">City *</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             name="city"
// // // // //             value={formData.city || ""}
// // // // //             onChange={handleChange}
// // // // //             placeholder="e.g. Mumbai"
// // // // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //           />
// // // // //         </div>

// // // // //         <div>
// // // // //           <label className="block text-md font-medium text-gray-800 mb-1">State</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             name="state"
// // // // //             value={formData.state || ""}
// // // // //             onChange={handleChange}
// // // // //             placeholder="e.g. Maharashtra"
// // // // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //           />
// // // // //         </div>

// // // // //         <div>
// // // // //           <label className="block text-md font-medium text-gray-800 mb-1">Pincode *</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             name="pincode"
// // // // //             value={formData.pincode || ""}
// // // // //             onChange={handleChange}
// // // // //             placeholder="e.g. 400001"
// // // // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       <div>
// // // // //         <label className="block text-md font-medium text-gray-800 mb-1">Nearby Landmark</label>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="landmark"
// // // // //           value={formData.landmark || ""}
// // // // //           onChange={handleChange}
// // // // //           placeholder="e.g. Near Metro Station, Opp. Mall"
// // // // //           className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //         />
// // // // //       </div>

// // // // //       <div>
// // // // //         <label className="block text-md font-medium text-gray-800 mb-1">Pick Location from Map</label>
// // // // //         <div className="border rounded-md h-74 overflow-hidden">
// // // // //           {/* GoogleMapPicker Component goes here */}
// // // // //         <MapDemoPage/>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default BasicInfo

// // // // import React from "react"
// // // // import MapDemoPage from "./MapPage"
// // // // import GoogleMapPicker from "./GoogleMapPicker"

// // // // const BasicInfo = ({ formData, setFormData }) => {
// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target
// // // //     setFormData({ ...formData, [name]: value })
// // // //   }

// // // //   return (
// // // //     <div className="grid gap-6">
// // // //       <div className="grid md:grid-cols-2 gap-4">
// // // //         <div>
// // // //           <label className="block font-medium mb-1">Space Name *</label>
// // // //           <input
// // // //             type="text"
// // // //             name="spaceName"
// // // //             value={formData.spaceName || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="e.g. Sunshine Mall Entrance"
// // // //           />
// // // //         </div>

// // // //         <div>
// // // //           <label className="block font-medium mb-1">Space Type *</label>
// // // //           {/* <select
// // // //             name="spaceType"
// // // //             value={formData.spaceType || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //           >
// // // //             <option value="">Select type</option>
// // // //             <option value="Mall">Mall</option>
// // // //             <option value="RWA">RWA / Society</option>
// // // //             <option value="Gym">Gym</option>
// // // //             <option value="Retail">Retail</option>
// // // //             <option value="Cafe">Café / Restaurant</option>
// // // //             <option value="Office">Office</option>
// // // //             <option value="Hospital">Hospital</option>
// // // //             <option value="Cinema">Cinema / Multiplex</option>
// // // //             <option value="Outdoor">Outdoor</option>
// // // //           </select> */}
// // // //           <select
// // // //   name="spaceType"
// // // //   value={formData.spaceType || ""}
// // // //   onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
// // // //   className="w-full border px-4 py-2 rounded"
// // // // >
// // // //   <option value="">Select Type</option>
// // // //   <option value="Retail Spaces / Shops / Showrooms">Retail Spaces / Shops / Showrooms</option>
// // // //   <option value="Restaurants / Cafés / Food Outlets">Restaurants / Cafés / Food Outlets</option>
// // // //   <option value="Residential Societies / RWAs">Residential Societies / RWAs</option>
// // // //   <option value="Corporate Offices / Corporate Parks">Corporate Offices / Corporate Parks</option>
// // // //   <option value="Gyms / Fitness Centers">Gyms / Fitness Centers</option>
// // // //   <option value="Clinics / Hospitals">Clinics / Hospitals</option>
// // // //   <option value="Multiplexes / Cinema Halls">Multiplexes / Cinema Halls</option>
// // // //   <option value="Co-Working Spaces">Co-Working Spaces</option>
// // // //   <option value="Outdoor Spaces / Hoardings / Vehicles">Outdoor Spaces / Hoardings / Vehicles</option>
// // // // </select>
// // // //         </div>
// // // //       </div>

// // // //       <div className="grid md:grid-cols-2 gap-4">
// // // //         <div>
// // // //           <label className="block font-medium mb-1">Company Name</label>
// // // //           <input
// // // //             type="text"
// // // //             name="companyName"
// // // //             value={formData.companyName || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="ABC Pvt Ltd"
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label className="block font-medium mb-1">Full Name *</label>
// // // //           <input
// // // //             type="text"
// // // //             name="fullName"
// // // //             value={formData.fullName || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="Your full name"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div className="grid md:grid-cols-2 gap-4">
// // // //         <div>
// // // //           <label className="block font-medium mb-1">Email *</label>
// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             value={formData.email || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="you@example.com"
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label className="block font-medium mb-1">Phone *</label>
// // // //           <input
// // // //             type="tel"
// // // //             name="phone"
// // // //             value={formData.phone || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="9876543210"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div>
// // // //         <label className="block font-medium mb-1">Address *</label>
// // // //         <textarea
// // // //           name="address"
// // // //           value={formData.address || ""}
// // // //           onChange={handleChange}
// // // //           className="w-full border px-4 py-2 rounded"
// // // //           placeholder="Complete address including building, area, etc."
// // // //         />
// // // //       </div>

// // // //       <div className="grid md:grid-cols-3 gap-4">
// // // //         <div>
// // // //           <label className="block font-medium mb-1">City *</label>
// // // //           <input
// // // //             type="text"
// // // //             name="city"
// // // //             value={formData.city || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="City"
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label className="block font-medium mb-1">State</label>
// // // //           <input
// // // //             type="text"
// // // //             name="state"
// // // //             value={formData.state || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="State"
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label className="block font-medium mb-1">Pincode *</label>
// // // //           <input
// // // //             type="text"
// // // //             name="pincode"
// // // //             value={formData.pincode || ""}
// // // //             onChange={handleChange}
// // // //             className="w-full border px-4 py-2 rounded"
// // // //             placeholder="e.g. 400001"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div>
// // // //         <label className="block font-medium mb-1">Nearby Landmark</label>
// // // //         <input
// // // //           type="text"
// // // //           name="landmark"
// // // //           value={formData.landmark || ""}
// // // //           onChange={handleChange}
// // // //           className="w-full border px-4 py-2 rounded"
// // // //           placeholder="Opposite Infinity Mall"
// // // //         />
// // // //       </div>

// // // //       {/* Optional location picker here (map) */}
      
// // // //       <GoogleMapPicker onLocationSelect={(lat, lng, address) => {
// // // //         setFormData({ ...formData, location: { lat, lng, address } })
// // // //       }} />
     
// // // //     </div>
// // // //   )
// // // // }

// // // // export default BasicInfo


// // // import React from "react";

// // // const BasicInfo = ({ formData, setFormData }) => {
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   return (
// // //     <div className="grid gap-6">
// // //       <h2 className="text-2xl font-semibold text-blue-900">Space Information</h2>

// // //       <div className="grid md:grid-cols-2 gap-6">
// // //         <div>
// // //           <label className="block font-medium mb-1">Space Name *</label>
// // //           <input
// // //             type="text"
// // //             name="spaceName"
// // //             value={formData.spaceName || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. Juice Cafe, Infinity Mall Entrance"
// // //             className="w-full border px-4 py-2 rounded"
// // //             required
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Space Type *</label>
// // //           <select
// // //             name="spaceType"
// // //             value={formData.spaceType || ""}
// // //             onChange={handleChange}
// // //             className="w-full border px-4 py-2 rounded"
// // //             required
// // //           >
// // //             <option value="">Select type</option>
// // //             <option value="Retail Spaces / Shops / Showrooms">Retail Spaces</option>
// // //             <option value="Restaurants / Cafés / Food Outlets">Restaurants / Cafés</option>
// // //             <option value="Mall">Mall</option>
// // //             <option value="Corporate Park / IT Office">Corporate Park</option>
// // //             <option value="Coworking Space">Coworking Space</option>
// // //             <option value="Salon / Gym / Studio">Salon / Gym</option>
// // //             <option value="Society / RWA">Society / RWA</option>
// // //             <option value="Multiplex / Cinema">Multiplex / Cinema</option>
// // //             {/* Add other valid types if backend expects more */}
// // //           </select>
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Company Name</label>
// // //           <input
// // //             type="text"
// // //             name="companyName"
// // //             value={formData.companyName || ""}
// // //             onChange={handleChange}
// // //             placeholder="Optional"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Full Name *</label>
// // //           <input
// // //             type="text"
// // //             name="fullName"
// // //             value={formData.fullName || ""}
// // //             onChange={handleChange}
// // //             placeholder="Your full name"
// // //             className="w-full border px-4 py-2 rounded"
// // //             required
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Email *</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={formData.email || ""}
// // //             onChange={handleChange}
// // //             placeholder="example@email.com"
// // //             className="w-full border px-4 py-2 rounded"
// // //             required
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Phone Number *</label>
// // //           <input
// // //             type="text"
// // //             name="phone"
// // //             value={formData.phone || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. 9876543210"
// // //             className="w-full border px-4 py-2 rounded"
// // //             required
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="grid md:grid-cols-3 gap-6">
// // //         <div>
// // //           <label className="block font-medium mb-1">Address *</label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             value={formData.address || ""}
// // //             onChange={handleChange}
// // //             placeholder="Street address"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">City *</label>
// // //           <input
// // //             type="text"
// // //             name="city"
// // //             value={formData.city || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. Patna"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">State *</label>
// // //           <input
// // //             type="text"
// // //             name="state"
// // //             value={formData.state || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. Bihar"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Pin Code *</label>
// // //           <input
// // //             type="text"
// // //             name="pincode"
// // //             value={formData.pincode || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. 800001"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>

// // //         <div>
// // //           <label className="block font-medium mb-1">Landmark</label>
// // //           <input
// // //             type="text"
// // //             name="landmark"
// // //             value={formData.landmark || ""}
// // //             onChange={handleChange}
// // //             placeholder="e.g. Near railway station"
// // //             className="w-full border px-4 py-2 rounded"
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BasicInfo;


// // // import React from "react"
// // // import GoogleMapPicker from "./GoogleMapPicker"

// // // const BasicInfo = ({ formData, setFormData }) => {
// // //   const update = (field, value) => {
// // //     setFormData({ ...formData, [field]: value })
// // //   }

// // //   const handleLocationSelect = (lat, lng, address) => {
// // //     setFormData({
// // //       ...formData,
// // //       location: { lat, lng, address }
// // //     })
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <h2 className="text-xl font-bold text-blue-800">Basic Information</h2>

// // //       <div className="grid md:grid-cols-2 gap-4">
// // //         <input
// // //           type="text"
// // //           placeholder="Full Name"
// // //           value={formData.fullName || ""}
// // //           onChange={(e) => update("fullName", e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //         />

// // //         <input
// // //           type="text"
// // //           placeholder="Company Name"
// // //           value={formData.companyName || ""}
// // //           onChange={(e) => update("companyName", e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //         />
// // //       </div>

// // //       <div className="grid md:grid-cols-2 gap-4">
// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={formData.email || ""}
// // //           onChange={(e) => update("email", e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //         />

// // //         <input
// // //           type="tel"
// // //           placeholder="Phone Number"
// // //           value={formData.phone || ""}
// // //           onChange={(e) => update("phone", e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //         />
// // //       </div>

// // //       <div>
// // //         <label className="block font-medium mb-1">Space Name</label>
// // //         <input
// // //           type="text"
// // //           placeholder="e.g., Juice Cafe, Rooftop Billboard"
// // //           value={formData.spaceName || ""}
// // //           onChange={(e) => update("spaceName", e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //         />
// // //       </div>

// // //       <div>
// // //         <label className="block font-medium mb-1">Space Type</label>
// // //         <select
// // //           value={formData.spaceType || ""}
// // //           onChange={(e) => update("spaceType", e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //         >
// // //           <option value="">Select Space Type</option>
// // //           <option>Retail Spaces / Shops / Showrooms</option>
// // //           <option>Restaurants / Cafés / Food Outlets</option>
// // //           <option>Mall</option>
// // //           <option>Gym / Studio</option>
// // //           <option>Parking Zone</option>
// // //           <option>Cinema / Multiplex</option>
// // //           <option>Corporate / Co-working</option>
// // //           <option>Apartment / Society / RWA</option>
// // //           <option>Others</option>
// // //         </select>
// // //       </div>

// // //       <div>
// // //         <label className="block font-medium mb-1">Click to Set Location</label>
// // //         <GoogleMapPicker onLocationSelect={handleLocationSelect} />
// // //         {formData.location?.address && (
// // //           <p className="text-sm mt-2 text-blue-700">
// // //             📍 {formData.location.address}
// // //           </p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default BasicInfo


// // import React from "react"
// // import GoogleMapPicker from "../components/GoogleMapPicker"

// // const BasicInfo = ({ formData, setFormData, nextStep }) => {
// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData({ ...formData, [name]: value })
// //   }

// //   const handleLocationSelect = (lat, lng, address) => {
// //     setFormData({
// //       ...formData,
// //       location: { lat, lng, address }
// //     })
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-2xl font-bold text-blue-800">Step 1: Basic Info</h2>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         <input
// //           type="text"
// //           name="spaceName"
// //           placeholder="Space Name *"
// //           value={formData.spaceName || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="spaceType"
// //           placeholder="Space Type *"
// //           value={formData.spaceType || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="companyName"
// //           placeholder="Company Name"
// //           value={formData.companyName || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="text"
// //           name="fullName"
// //           placeholder="Full Name *"
// //           value={formData.fullName || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email *"
// //           value={formData.email || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="phone"
// //           placeholder="Phone *"
// //           value={formData.phone || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="address"
// //           placeholder="Address"
// //           value={formData.address || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="text"
// //           name="city"
// //           placeholder="City"
// //           value={formData.city || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="text"
// //           name="state"
// //           placeholder="State"
// //           value={formData.state || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="text"
// //           name="pincode"
// //           placeholder="Pincode"
// //           value={formData.pincode || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="text"
// //           name="landmark"
// //           placeholder="Landmark"
// //           value={formData.landmark || ""}
// //           onChange={handleChange}
// //           className="border p-2 rounded"
// //         />
// //       </div>

// //       <div>
// //         <label className="font-medium mb-1 block">Select Location on Map *</label>
// //         <GoogleMapPicker onLocationSelect={handleLocationSelect} />
// //         {formData.location?.address && (
// //           <p className="mt-2 text-sm text-gray-600">
// //             Selected: {formData.location.address}
// //           </p>
// //         )}
// //       </div>

// //       <div className="flex justify-end">
// //         <button
// //           onClick={nextStep}
// //           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// //         >
// //           Next →
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default BasicInfo

// import React from "react"
// import GoogleMapPicker from "./GoogleMapPicker"

// const spaceTypes = [
//   "Retail Spaces / Shops / Showrooms",
//   "Restaurants / Cafés / Food Outlets",
//   "Residential Societies / RWAs",
//   "Corporate Offices / Corporate Parks",
//   "Gyms / Fitness Centers",
//   "Clinics / Hospitals",
//   "Multiplexes / Cinema Halls",
//   "Co-Working Spaces",
//   "Outdoor Spaces / Hoardings / Vehicles"
// ]

// const BasicInfo = ({ formData, setFormData, nextStep }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }

//   const handleLocationSelect = (lat, lng, address) => {
//     setFormData({
//       ...formData,
//       location: {
//         lat,
//         lng,
//         address
//       }
//     })
//   }

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-bold text-blue-800">Basic Information</h2>

//       <div className="grid md:grid-cols-2 gap-4">
//         <input
//           type="text"
//           name="spaceName"
//           value={formData.spaceName || ""}
//           onChange={handleChange}
//           placeholder="Space Name"
//           className="border p-2 rounded"
//         />
//         <select
//           name="spaceType"
//           value={formData.spaceType || ""}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         >
//           <option value="">Select Space Type</option>
//           {spaceTypes.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           name="companyName"
//           value={formData.companyName || ""}
//           onChange={handleChange}
//           placeholder="Company Name"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName || ""}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="border p-2 rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email || ""}
//           onChange={handleChange}
//           placeholder="Email"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone || ""}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="address"
//           value={formData.address || ""}
//           onChange={handleChange}
//           placeholder="Address"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="landmark"
//           value={formData.landmark || ""}
//           onChange={handleChange}
//           placeholder="Landmark"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="city"
//           value={formData.city || ""}
//           onChange={handleChange}
//           placeholder="City"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="state"
//           value={formData.state || ""}
//           onChange={handleChange}
//           placeholder="State"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="pincode"
//           value={formData.pincode || ""}
//           onChange={handleChange}
//           placeholder="Pincode"
//           className="border p-2 rounded"
//         />
//       </div>

//       <div>
//         <label className="block font-medium mb-1">Pick Location from Google Map</label>
//         <GoogleMapPicker onLocationSelect={handleLocationSelect} />
//       </div>

//       <div className="flex justify-end mt-6">
//         <button
//           onClick={nextStep}
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Next →
//         </button>
//       </div>
//     </div>
//   )
// }

// export default BasicInfo


import React from "react"
import GoogleMapPicker from "./GoogleMapPicker"

const BasicInfo = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleMapLocation = (lat, lng, address) => {
    setFormData({
      ...formData,
      location: { lat, lng, address },
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800">Basic Space Info</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="spaceName" placeholder="Space Name" value={formData.spaceName || ""} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName || ""} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName || ""} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="email" placeholder="Email" value={formData.email || ""} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone || ""} onChange={handleChange} className="border p-2 rounded" />
      </div>

      <textarea name="description" placeholder="Describe the space..." value={formData.description || ""} onChange={handleChange} className="w-full border p-2 rounded"></textarea>

      <div className="grid grid-cols-2 gap-4">
        <select name="spaceType" value={formData.spaceType || ""} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Space Type</option>
          <option value="Retail Spaces / Shops / Showrooms">Retail Spaces / Shops / Showrooms</option>
          <option value="Restaurants / Cafés / Food Outlets">Restaurants / Cafés / Food Outlets</option>
          <option value="Residential Societies / RWAs">Residential Societies / RWAs</option>
          <option value="Clinics / Hospitals">Clinics / Hospitals</option>
          <option value="Multiplexes / Cinema Halls">Multiplexes / Cinema Halls</option>
        </select>
        <input type="text" name="address" placeholder="Address" value={formData.address || ""} onChange={handleChange} className="border p-2 rounded" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="city" placeholder="City" value={formData.city || ""} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="state" placeholder="State" value={formData.state || ""} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode || ""} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="landmark" placeholder="Landmark" value={formData.landmark || ""} onChange={handleChange} className="border p-2 rounded" />
      </div>

      <GoogleMapPicker onLocationSelect={handleMapLocation} />

      <button onClick={nextStep} className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
    </div>
  )
}

export default BasicInfo
