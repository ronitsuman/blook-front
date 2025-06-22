// // // // // // // // // // // // // export default function UploadImages({ formData, setFormData }) {
// // // // // // // // // // // // //   const handleFileChange = async (e) => {
// // // // // // // // // // // // //     const { name, files } = e.target
// // // // // // // // // // // // //     const fileList = Array.from(files)

// // // // // // // // // // // // //     const uploadedUrls = []

// // // // // // // // // // // // //     for (const file of fileList) {
// // // // // // // // // // // // //       const url = await uploadToBackend(file)
// // // // // // // // // // // // //       if (url) uploadedUrls.push(url)
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       images: {
// // // // // // // // // // // // //         ...prev.images,
// // // // // // // // // // // // //         [name]: uploadedUrls,
// // // // // // // // // // // // //       },
// // // // // // // // // // // // //     }))
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   // ✅ Upload image to backend with JWT
// // // // // // // // // // // // //   async function uploadToBackend(file) {
// // // // // // // // // // // // //     const token = localStorage.getItem("token")
// // // // // // // // // // // // //     if (!token) {
// // // // // // // // // // // // //       console.error("No token found.")
// // // // // // // // // // // // //       return ""
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const formData = new FormData()
// // // // // // // // // // // // //     formData.append("image", file)

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const res = await fetch("http://localhost:5000/api/upload/images", {
// // // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // //           Authorization: `Bearer ${token}`,
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //         body: formData,
// // // // // // // // // // // // //       })

// // // // // // // // // // // // //       if (!res.ok) {
// // // // // // // // // // // // //         console.error("Upload failed:", res.status)
// // // // // // // // // // // // //         return ""
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       const result = await res.json()
// // // // // // // // // // // // //       return result.url
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       console.error("Error uploading image:", err)
// // // // // // // // // // // // //       return ""
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // // // // // // // // // // // //       <h2 className="text-xl font-bold text-blue-900">Upload Space Photos</h2>

// // // // // // // // // // // // //       <div className="space-y-4">
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block font-medium text-blue-800">Front Facade</label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="file"
// // // // // // // // // // // // //             name="frontFacade"
// // // // // // // // // // // // //             accept="image/*"
// // // // // // // // // // // // //             onChange={handleFileChange}
// // // // // // // // // // // // //             className="w-full"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block font-medium text-blue-800">Main Indoor Area</label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="file"
// // // // // // // // // // // // //             name="mainArea"
// // // // // // // // // // // // //             accept="image/*"
// // // // // // // // // // // // //             multiple
// // // // // // // // // // // // //             onChange={handleFileChange}
// // // // // // // // // // // // //             className="w-full"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block font-medium text-blue-800">Branding Zones (if any)</label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="file"
// // // // // // // // // // // // //             name="brandingZones"
// // // // // // // // // // // // //             accept="image/*"
// // // // // // // // // // // // //             multiple
// // // // // // // // // // // // //             onChange={handleFileChange}
// // // // // // // // // // // // //             className="w-full"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block font-medium text-blue-800">Camera Views (optional)</label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="file"
// // // // // // // // // // // // //             name="cameraViews"
// // // // // // // // // // // // //             accept="image/*"
// // // // // // // // // // // // //             multiple
// // // // // // // // // // // // //             onChange={handleFileChange}
// // // // // // // // // // // // //             className="w-full"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   )
// // // // // // // // // // // // // }


// // // // // // // // // // // // import { useState } from "react"

// // // // // // // // // // // // export default function UploadImages({ formData, setFormData }) {
// // // // // // // // // // // //   const [uploading, setUploading] = useState(false)

// // // // // // // // // // // //   const handleFileChange = async (e) => {
// // // // // // // // // // // //     const { name, files } = e.target
// // // // // // // // // // // //     const fileList = Array.from(files)
// // // // // // // // // // // //     const uploadedUrls = []

// // // // // // // // // // // //     setUploading(true)

// // // // // // // // // // // //     for (const file of fileList) {
// // // // // // // // // // // //       const url = await uploadToBackend(file)
// // // // // // // // // // // //       if (url) uploadedUrls.push(url)
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setFormData(prev => ({
// // // // // // // // // // // //       ...prev,
// // // // // // // // // // // //       images: {
// // // // // // // // // // // //         ...prev.images,
// // // // // // // // // // // //         [name]: uploadedUrls
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }))

// // // // // // // // // // // //     setUploading(false)
// // // // // // // // // // // //   }

// // // // // // // // // // // //   const uploadToBackend = async (file) => {
// // // // // // // // // // // //     const data = new FormData()
// // // // // // // // // // // //     data.append("image", file)

// // // // // // // // // // // //     const token = localStorage.getItem("token")

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const res = await fetch("http://localhost:5000/api/upload/image", {
// // // // // // // // // // // //         method: "POST",
// // // // // // // // // // // //         headers: {
// // // // // // // // // // // //           Authorization: `Bearer ${token}`,
// // // // // // // // // // // //         },
// // // // // // // // // // // //         body: data,
// // // // // // // // // // // //       })

// // // // // // // // // // // //       const result = await res.json()

// // // // // // // // // // // //       if (!res.ok) {
// // // // // // // // // // // //         console.error("Upload failed:", result)
// // // // // // // // // // // //         alert(`Upload failed: ${result.message || "Unknown error"}`)
// // // // // // // // // // // //         return ""
// // // // // // // // // // // //       }

// // // // // // // // // // // //       return result.url
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       console.error("Fetch error:", err)
// // // // // // // // // // // //       alert("Upload failed: Network error")
// // // // // // // // // // // //       return ""
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // // // // // // // // // // //       <h2 className="text-xl font-bold text-blue-900">Upload Space Photos</h2>
// // // // // // // // // // // //       {uploading && <p className="text-sm text-gray-500">Uploading images...</p>}

// // // // // // // // // // // //       <div className="space-y-4">
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <label className="block font-medium text-blue-800">Front Facade</label>
// // // // // // // // // // // //           <input type="file" name="frontFacade" accept="image/*" onChange={handleFileChange} className="w-full" />
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <label className="block font-medium text-blue-800">Main Indoor Area</label>
// // // // // // // // // // // //           <input type="file" name="mainArea" accept="image/*" multiple onChange={handleFileChange} className="w-full" />
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <label className="block font-medium text-blue-800">Branding Zones (if any)</label>
// // // // // // // // // // // //           <input type="file" name="brandingZones" accept="image/*" multiple onChange={handleFileChange} className="w-full" />
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <label className="block font-medium text-blue-800">Camera Views (optional)</label>
// // // // // // // // // // // //           <input type="file" name="cameraViews" accept="image/*" multiple onChange={handleFileChange} className="w-full" />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   )
// // // // // // // // // // // // }




// // // // // // // // // // import { useState } from "react"

// // // // // // // // // // export default function UploadImages({ formData, setFormData }) {
// // // // // // // // // //   const [uploading, setUploading] = useState(false)

// // // // // // // // // //   const handleFileChange = async (e) => {
// // // // // // // // // //     const { name, files } = e.target
// // // // // // // // // //     const fileList = Array.from(files)
// // // // // // // // // //     const uploadedUrls = []

// // // // // // // // // //     setUploading(true)

// // // // // // // // // //     for (const file of fileList) {
// // // // // // // // // //       const url = await uploadToBackend(file)
// // // // // // // // // //       if (url) uploadedUrls.push(url)
// // // // // // // // // //     }

// // // // // // // // // //     setFormData(prev => ({
// // // // // // // // // //       ...prev,
// // // // // // // // // //       images: {
// // // // // // // // // //         ...prev.images,
// // // // // // // // // //         [name]: uploadedUrls
// // // // // // // // // //       }
// // // // // // // // // //     }))

// // // // // // // // // //     setUploading(false)
// // // // // // // // // //   }

// // // // // // // // // //   const uploadToBackend = async (file) => {
// // // // // // // // // //     const data = new FormData()
// // // // // // // // // //     data.append("image", file)
// // // // // // // // // //     const token = localStorage.getItem("token")

// // // // // // // // // //     try {
// // // // // // // // // //       const res = await fetch("http://localhost:5000/api/upload/image", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         headers: {
// // // // // // // // // //           Authorization: `Bearer ${token}`,
// // // // // // // // // //         },
// // // // // // // // // //         body: data,
// // // // // // // // // //       })

// // // // // // // // // //       const result = await res.json()

// // // // // // // // // //       if (!res.ok) {
// // // // // // // // // //         console.error("Upload failed:", result)
// // // // // // // // // //         alert(`Upload failed: ${result.message || "Unknown error"}`)
// // // // // // // // // //         return ""
// // // // // // // // // //       }

// // // // // // // // // //       return result.url
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Fetch error:", err)
// // // // // // // // // //       alert("Upload failed: Network error")
// // // // // // // // // //       return ""
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // // // // // // // // //       <h2 className="text-xl font-bold text-blue-900">Upload Space Photos</h2>
// // // // // // // // // //       {uploading && <p className="text-sm text-gray-500">Uploading images...</p>}

// // // // // // // // // //       <div className="space-y-4">
// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-blue-800">Front Facade</label>
// // // // // // // // // //           <input type="file" name="frontFacade" accept="image/*" onChange={handleFileChange} className="w-full" />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-blue-800">Main Indoor Area</label>
// // // // // // // // // //           <input type="file" name="mainArea" accept="image/*" multiple onChange={handleFileChange} className="w-full" />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-blue-800">Branding Zones (if any)</label>
// // // // // // // // // //           <input type="file" name="brandingZones" accept="image/*" multiple onChange={handleFileChange} className="w-full" />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-blue-800">Camera Views (optional)</label>
// // // // // // // // // //           <input type="file" name="cameraViews" accept="image/*" multiple onChange={handleFileChange} className="w-full" />
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }



// // // // // // // // // // import React, { useRef } from "react"

// // // // // // // // // // const ImageUpload = ({ formData, setFormData }) => {
// // // // // // // // // //   const fileInputRef = useRef(null)

// // // // // // // // // //   const handleFileChange = (e) => {
// // // // // // // // // //     const files = Array.from(e.target.files)
// // // // // // // // // //     const newFiles = files.map((file) => URL.createObjectURL(file))
// // // // // // // // // //     setFormData({ ...formData, photos: [...(formData.photos || []), ...newFiles] })
// // // // // // // // // //   }

// // // // // // // // // //   const handleRemove = (index) => {
// // // // // // // // // //     const updatedPhotos = formData.photos.filter((_, i) => i !== index)
// // // // // // // // // //     setFormData({ ...formData, photos: updatedPhotos })
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="space-y-6">
// // // // // // // // // //       <div>
// // // // // // // // // //         <label className="block text-lg font-semibold text-gray-800 mb-1">
// // // // // // // // // //           Space Photos <span className="text-red-500">*</span>
// // // // // // // // // //         </label>
// // // // // // // // // //         <p className="text-sm text-gray-600 mb-4">Upload at least 3 high-quality photos of your space</p>

// // // // // // // // // //         <div
// // // // // // // // // //           className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50"
// // // // // // // // // //           onClick={() => fileInputRef.current.click()}
// // // // // // // // // //         >
// // // // // // // // // //           <svg className="w-10 h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // // // // // // // // //           </svg>
// // // // // // // // // //           <p className="text-sm font-medium text-gray-600">Click to upload or drag and drop files</p>
// // // // // // // // // //         </div>

// // // // // // // // // //         <input
// // // // // // // // // //           type="file"
// // // // // // // // // //           accept="image/*"
// // // // // // // // // //           multiple
// // // // // // // // // //           ref={fileInputRef}
// // // // // // // // // //           className="hidden"
// // // // // // // // // //           onChange={handleFileChange}
// // // // // // // // // //         />
// // // // // // // // // //       </div>

// // // // // // // // // //       {formData.photos && formData.photos.length > 0 && (
// // // // // // // // // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // // // // // // // // //           {formData.photos.map((photo, index) => (
// // // // // // // // // //             <div key={index} className="relative group">
// // // // // // // // // //               <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-32 object-cover rounded shadow" />
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => handleRemove(index)}
// // // // // // // // // //                 className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-80 hover:opacity-100"
// // // // // // // // // //               >
// // // // // // // // // //                 ✕
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}

// // // // // // // // // //       <div>
// // // // // // // // // //         <label className="block text-lg font-semibold text-gray-800 mb-2">Upload Floor Plan (Optional)</label>
// // // // // // // // // //         <input
// // // // // // // // // //           type="file"
// // // // // // // // // //           accept="image/*,application/pdf"
// // // // // // // // // //           onChange={(e) => {
// // // // // // // // // //             const file = e.target.files[0]
// // // // // // // // // //             setFormData({ ...formData, floorPlan: file })
// // // // // // // // // //           }}
// // // // // // // // // //           className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default ImageUpload


// // // // // // // // // // import React from "react"

// // // // // // // // // // const ImageUpload = ({ formData, setFormData }) => {
// // // // // // // // // //   const handleImageChange = (field, value) => {
// // // // // // // // // //     setFormData({
// // // // // // // // // //       ...formData,
// // // // // // // // // //       images: {
// // // // // // // // // //         ...formData.images,
// // // // // // // // // //         [field]: value
// // // // // // // // // //       }
// // // // // // // // // //     })
// // // // // // // // // //   }

// // // // // // // // // //   const handleOtherPhotosChange = (index, value) => {
// // // // // // // // // //     const updatedPhotos = [...(formData.images?.otherPhotos || [])]
// // // // // // // // // //     updatedPhotos[index] = value
// // // // // // // // // //     setFormData({
// // // // // // // // // //       ...formData,
// // // // // // // // // //       images: {
// // // // // // // // // //         ...formData.images,
// // // // // // // // // //         otherPhotos: updatedPhotos
// // // // // // // // // //       }
// // // // // // // // // //     })
// // // // // // // // // //   }

// // // // // // // // // //   const addOtherPhoto = () => {
// // // // // // // // // //     const updatedPhotos = [...(formData.images?.otherPhotos || []), ""]
// // // // // // // // // //     setFormData({
// // // // // // // // // //       ...formData,
// // // // // // // // // //       images: {
// // // // // // // // // //         ...formData.images,
// // // // // // // // // //         otherPhotos: updatedPhotos
// // // // // // // // // //       }
// // // // // // // // // //     })
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="space-y-6">
// // // // // // // // // //       <h2 className="text-xl font-bold text-blue-800">Upload Space Images</h2>
// // // // // // // // // //       <p className="text-gray-600 mb-4">Upload at least one photo of the space and branding areas.</p>

// // // // // // // // // //       <div className="space-y-4">
// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-gray-700 mb-1">Front Facade Photo *</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             placeholder="Cloudinary image URL"
// // // // // // // // // //             value={formData.images?.frontFacade || ""}
// // // // // // // // // //             onChange={(e) => handleImageChange("frontFacade", e.target.value)}
// // // // // // // // // //             className="w-full border p-2 rounded"
// // // // // // // // // //             required
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-gray-700 mb-1">Interior View</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             placeholder="Optional interior photo URL"
// // // // // // // // // //             value={formData.images?.interiorView || ""}
// // // // // // // // // //             onChange={(e) => handleImageChange("interiorView", e.target.value)}
// // // // // // // // // //             className="w-full border p-2 rounded"
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-gray-700 mb-1">Branding Zone Photo</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             placeholder="Photo showing branding areas"
// // // // // // // // // //             value={formData.images?.brandingZone || ""}
// // // // // // // // // //             onChange={(e) => handleImageChange("brandingZone", e.target.value)}
// // // // // // // // // //             className="w-full border p-2 rounded"
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-gray-700 mb-1">Heat Map Camera Area Photo</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             placeholder="Heat mapping zone photo (if any)"
// // // // // // // // // //             value={formData.images?.heatMapPhoto || ""}
// // // // // // // // // //             onChange={(e) => handleImageChange("heatMapPhoto", e.target.value)}
// // // // // // // // // //             className="w-full border p-2 rounded"
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div>
// // // // // // // // // //           <label className="block font-medium text-gray-700 mb-2">Other Photos</label>
// // // // // // // // // //           {(formData.images?.otherPhotos || []).map((url, i) => (
// // // // // // // // // //             <input
// // // // // // // // // //               key={i}
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder={`Photo ${i + 1} URL`}
// // // // // // // // // //               value={url}
// // // // // // // // // //               onChange={(e) => handleOtherPhotosChange(i, e.target.value)}
// // // // // // // // // //               className="w-full border p-2 rounded mb-2"
// // // // // // // // // //             />
// // // // // // // // // //           ))}
// // // // // // // // // //           <button
// // // // // // // // // //             type="button"
// // // // // // // // // //             onClick={addOtherPhoto}
// // // // // // // // // //             className="px-4 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// // // // // // // // // //           >
// // // // // // // // // //             + Add More Photos
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // // export default ImageUploadimport React from "react";
// // // // // // // // // // import axios from "axios";
// // // // // // // // // // import { useSelector } from "react-redux";

// // // // // // // // // // const UploadImages = ({ formData, setFormData }) => {
// // // // // // // // // //   const { token } = useSelector((state) => state.auth);

// // // // // // // // // //   const handleImageUpload = async (field, files) => {
// // // // // // // // // //     const uploadedUrls = [];

// // // // // // // // // //     for (const file of files) {
// // // // // // // // // //       const data = new FormData();
// // // // // // // // // //       data.append("image", file);

// // // // // // // // // //       try {
// // // // // // // // // //         const res = await axios.post(
// // // // // // // // // //           `http://localhost:5000/api/upload/image`,
// // // // // // // // // //           data,
// // // // // // // // // //           {
// // // // // // // // // //             headers: {
// // // // // // // // // //               "Content-Type": "multipart/form-data",
// // // // // // // // // //               Authorization: `Bearer ${token}`,
// // // // // // // // // //             },
// // // // // // // // // //           }
// // // // // // // // // //         );

// // // // // // // // // //         uploadedUrls.push(res.data.url);
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error("Upload failed:", err);
// // // // // // // // // //       }
// // // // // // // // // //     }

// // // // // // // // // //     if (Array.isArray(formData.images?.[field])) {
// // // // // // // // // //       setFormData({
// // // // // // // // // //         ...formData,
// // // // // // // // // //         images: {
// // // // // // // // // //           ...formData.images,
// // // // // // // // // //           [field]: [...(formData.images[field] || []), ...uploadedUrls],
// // // // // // // // // //         },
// // // // // // // // // //       });
// // // // // // // // // //     } else {
// // // // // // // // // //       setFormData({
// // // // // // // // // //         ...formData,
// // // // // // // // // //         images: {
// // // // // // // // // //           ...formData.images,
// // // // // // // // // //           [field]: uploadedUrls[0] || "",
// // // // // // // // // //         },
// // // // // // // // // //       });
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="space-y-6">
// // // // // // // // // //       <h2 className="text-xl font-bold text-blue-800">Upload Images</h2>

// // // // // // // // // //       {[
// // // // // // // // // //         { label: "Front Facade (Required)", field: "frontFacade", multiple: true },
// // // // // // // // // //         { label: "Main Area (Required)", field: "mainArea", multiple: true },
// // // // // // // // // //         { label: "Interior View", field: "interiorView", multiple: false },
// // // // // // // // // //         { label: "Branding Zone", field: "brandingZone", multiple: false },
// // // // // // // // // //         { label: "Heat Map Photo", field: "heatMapPhoto", multiple: false },
// // // // // // // // // //         { label: "Other Photos", field: "otherPhotos", multiple: true },
// // // // // // // // // //         { label: "Branding Zones", field: "brandingZones", multiple: true },
// // // // // // // // // //         { label: "Camera Views", field: "cameraViews", multiple: true },
// // // // // // // // // //       ].map(({ label, field, multiple }) => (
// // // // // // // // // //         <div key={field}>
// // // // // // // // // //           <label className="block font-medium mb-1">{label}</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="file"
// // // // // // // // // //             multiple={multiple}
// // // // // // // // // //             accept="image/*"
// // // // // // // // // //             onChange={(e) => handleImageUpload(field, e.target.files)}
// // // // // // // // // //             className="w-full border p-2 rounded"
// // // // // // // // // //           />

// // // // // // // // // //           {formData.images?.[field] && Array.isArray(formData.images[field]) && (
// // // // // // // // // //             <div className="flex flex-wrap gap-2 mt-2">
// // // // // // // // // //               {formData.images[field].map((url, i) => (
// // // // // // // // // //                 <img
// // // // // // // // // //                   key={i}
// // // // // // // // // //                   src={url}
// // // // // // // // // //                   alt={`${field}-${i}`}
// // // // // // // // // //                   className="w-24 h-16 object-cover rounded border"
// // // // // // // // // //                 />
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           )}

// // // // // // // // // //           {formData.images?.[field] && !Array.isArray(formData.images[field]) && (
// // // // // // // // // //             <img
// // // // // // // // // //               src={formData.images[field]}
// // // // // // // // // //               alt={field}
// // // // // // // // // //               className="w-32 h-20 object-cover rounded border mt-2"
// // // // // // // // // //             />
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default UploadImages;



// // // // // // // // // import React from "react"
// // // // // // // // // import axios from "axios"

// // // // // // // // // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// // // // // // // // //   const uploadImage = async (e, field, isMultiple = false) => {
// // // // // // // // //     const files = e.target.files
// // // // // // // // //     if (!files || files.length === 0) return

// // // // // // // // //     const uploadedUrls = []

// // // // // // // // //     for (const file of files) {
// // // // // // // // //       const formDataImg = new FormData()
// // // // // // // // //       formDataImg.append("image", file)

// // // // // // // // //       try {
// // // // // // // // //         const res = await axios.post("http://localhost:5000/api/upload/image", formDataImg,
// // // // // // // // //           {
// // // // // // // // //                         headers: {
// // // // // // // // //                           "Content-Type": "multipart/form-data",
// // // // // // // // //                           Authorization: `Bearer ${token}`,
// // // // // // // // //                         },
// // // // // // // // //                       }
// // // // // // // // //                     );
        
// // // // // // // // //         uploadedUrls.push(res.data.url)
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Upload failed", err)
// // // // // // // // //       }
// // // // // // // // //     }

// // // // // // // // //     const updatedImages = { ...formData.images }

// // // // // // // // //     if (isMultiple) {
// // // // // // // // //       updatedImages[field] = [...(formData.images?.[field] || []), ...uploadedUrls]
// // // // // // // // //     } else {
// // // // // // // // //       updatedImages[field] = uploadedUrls[0]
// // // // // // // // //     }

// // // // // // // // //     setFormData({ ...formData, images: updatedImages })
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div className="space-y-6">
// // // // // // // // //       <h2 className="text-2xl font-bold text-blue-800">Upload Images</h2>

// // // // // // // // //       <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // //         <div>
// // // // // // // // //           <label>Main Area Photo</label>
// // // // // // // // //           <input type="file" onChange={(e) => uploadImage(e, "mainArea", true)} />
// // // // // // // // //         </div>
// // // // // // // // //         <div>
// // // // // // // // //           <label>Interior View</label>
// // // // // // // // //           <input type="file" onChange={(e) => uploadImage(e, "interiorView")} />
// // // // // // // // //         </div>
// // // // // // // // //         <div>
// // // // // // // // //           <label>Branding Zone</label>
// // // // // // // // //           <input type="file" onChange={(e) => uploadImage(e, "brandingZone")} />
// // // // // // // // //         </div>
// // // // // // // // //         <div>
// // // // // // // // //           <label>Heat Mapping Area Photo</label>
// // // // // // // // //           <input type="file" onChange={(e) => uploadImage(e, "heatMapPhoto")} />
// // // // // // // // //         </div>
// // // // // // // // //         <div>
// // // // // // // // //           <label>Camera Views</label>
// // // // // // // // //           <input type="file" multiple onChange={(e) => uploadImage(e, "cameraViews", true)} />
// // // // // // // // //         </div>
// // // // // // // // //         <div>
// // // // // // // // //           <label>Other Photos</label>
// // // // // // // // //           <input type="file" multiple onChange={(e) => uploadImage(e, "otherPhotos", true)} />
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Display uploaded image previews */}
// // // // // // // // //       <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
// // // // // // // // //         {(formData.images?.mainArea || []).map((url, idx) => (
// // // // // // // // //           <img key={idx} src={url} alt="main" className="rounded border" />
// // // // // // // // //         ))}
// // // // // // // // //         {formData.images?.interiorView && (
// // // // // // // // //           <img src={formData.images.interiorView} alt="interior" className="rounded border" />
// // // // // // // // //         )}
// // // // // // // // //         {formData.images?.brandingZone && (
// // // // // // // // //           <img src={formData.images.brandingZone} alt="branding" className="rounded border" />
// // // // // // // // //         )}
// // // // // // // // //         {formData.images?.heatMapPhoto && (
// // // // // // // // //           <img src={formData.images.heatMapPhoto} alt="heat" className="rounded border" />
// // // // // // // // //         )}
// // // // // // // // //         {(formData.images?.cameraViews || []).map((url, idx) => (
// // // // // // // // //           <img key={idx} src={url} alt="camera" className="rounded border" />
// // // // // // // // //         ))}
// // // // // // // // //         {(formData.images?.otherPhotos || []).map((url, idx) => (
// // // // // // // // //           <img key={idx} src={url} alt="other" className="rounded border" />
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Navigation buttons */}
// // // // // // // // //       <div className="flex justify-between mt-8">
// // // // // // // // //         <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">← Back</button>
// // // // // // // // //         <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next →</button>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default UploadImages

// // // // // // // // import React from "react"
// // // // // // // // import axios from "axios"

// // // // // // // // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// // // // // // // //   const handleUpload = async (e, field, isMultiple = false) => {
// // // // // // // //     const files = e.target.files
// // // // // // // //     if (!files.length) return

// // // // // // // //     const token = localStorage.getItem("token")
// // // // // // // //     const formDataUpload = new FormData()

// // // // // // // //     for (let i = 0; i < files.length; i++) {
// // // // // // // //       formDataUpload.append("images", files[i])
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const response = await axios.post("http://localhost:5000/api/upload/image", formDataUpload, {
// // // // // // // //         headers: {
// // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // //           Authorization: `Bearer ${token}`,
// // // // // // // //         },
// // // // // // // //       })

// // // // // // // //       const uploaded = response.data.urls

// // // // // // // //       setFormData({
// // // // // // // //         ...formData,
// // // // // // // //         images: {
// // // // // // // //           ...formData.images,
// // // // // // // //           [field]: isMultiple
// // // // // // // //             ? [...(formData.images?.[field] || []), ...uploaded]
// // // // // // // //             : uploaded[0],
// // // // // // // //         },
// // // // // // // //       })
// // // // // // // //     } catch (err) {
// // // // // // // //       alert("Upload failed. Please try again.")
// // // // // // // //       console.error(err)
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="space-y-6">
// // // // // // // //       <h2 className="text-xl font-bold text-blue-800">Upload Images</h2>

// // // // // // // //       <div className="grid md:grid-cols-2 gap-6">
// // // // // // // //         <div>
// // // // // // // //           <label>Main Area Image</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "mainArea", true)} multiple />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Front Facade</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "frontFacade", true)} multiple />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Interior View</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "interiorView")} />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Branding Zone Image</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "brandingZone")} />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Branding Zones (Multiple)</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "brandingZones", true)} multiple />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Camera Views (if any)</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "cameraViews", true)} multiple />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Heat Mapping Image</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "heatMapPhoto")} />
// // // // // // // //         </div>
// // // // // // // //         <div>
// // // // // // // //           <label>Other Photos</label>
// // // // // // // //           <input type="file" onChange={(e) => handleUpload(e, "otherPhotos", true)} multiple />
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <div className="flex justify-between mt-6">
// // // // // // // //         <button
// // // // // // // //           onClick={prevStep}
// // // // // // // //           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// // // // // // // //         >
// // // // // // // //           ← Back
// // // // // // // //         </button>
// // // // // // // //         <button
// // // // // // // //           onClick={nextStep}
// // // // // // // //           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// // // // // // // //         >
// // // // // // // //           Next →
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default UploadImages

// // // // // // // import React from "react"
// // // // // // // import axios from "axios"

// // // // // // // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// // // // // // //   const handleUpload = async (e, field, isMultiple = false) => {
// // // // // // //     const files = e.target.files
// // // // // // //     if (!files.length) return

// // // // // // //     const token = localStorage.getItem("token")
// // // // // // //     const formDataUpload = new FormData()

// // // // // // //     for (let i = 0; i < files.length; i++) {
// // // // // // //       formDataUpload.append("images", files[i])
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const response = await axios.post("http://localhost:5000/api/upload/image", formDataUpload, {
// // // // // // //         headers: {
// // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // //           Authorization: `Bearer ${token}`,
// // // // // // //         },
// // // // // // //       })

// // // // // // //       const uploaded = response.data.urls

// // // // // // //       setFormData({
// // // // // // //         ...formData,
// // // // // // //         images: {
// // // // // // //           ...formData.images,
// // // // // // //           [field]: isMultiple
// // // // // // //             ? [...(formData.images?.[field] || []), ...uploaded]
// // // // // // //             : uploaded[0],
// // // // // // //         },
// // // // // // //       })
// // // // // // //     } catch (err) {
// // // // // // //       alert("Upload failed. Please try again.")
// // // // // // //       console.error(err)
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="space-y-6">
// // // // // // //       <h2 className="text-xl font-bold text-blue-800">Upload Images</h2>

// // // // // // //       <div className="grid md:grid-cols-2 gap-6">
// // // // // // //         <div>
// // // // // // //           <label>Main Area Image</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "mainArea", true)} multiple />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Front Facade</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "frontFacade", true)} multiple />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Interior View</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "interiorView")} />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Branding Zone Image</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "brandingZone")} />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Branding Zones (Multiple)</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "brandingZones", true)} multiple />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Camera Views (if any)</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "cameraViews", true)} multiple />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Heat Mapping Image</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "heatMapPhoto")} />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label>Other Photos</label>
// // // // // // //           <input name="images" type="file" onChange={(e) => handleUpload(e, "otherPhotos", true)} multiple />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="flex justify-between mt-6">
// // // // // // //         <button
// // // // // // //           onClick={prevStep}
// // // // // // //           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// // // // // // //         >
// // // // // // //           ← Back
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           onClick={nextStep}
// // // // // // //           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// // // // // // //         >
// // // // // // //           Next →
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default UploadImages

// // // // // // import React from 'react'
// // // // // // import axios from 'axios'

// // // // // // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// // // // // //   const token = localStorage.getItem('token')

// // // // // //   const handleImageUpload = async (e, imageField, isMultiple = false) => {
// // // // // //     const files = e.target.files
// // // // // //     const uploaded = []

// // // // // //     for (let file of files) {
// // // // // //       const formData = new FormData()
// // // // // //       formData.append('image', file)

// // // // // //       try {
// // // // // //         const res = await axios.post('http://localhost:5000/api/upload/image', formData, {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${token}`,
// // // // // //             'Content-Type': 'multipart/form-data'
// // // // // //           }
// // // // // //         })

// // // // // //         uploaded.push(res.data.secure_url)
// // // // // //       } catch (err) {
// // // // // //         console.error('Upload failed:', err.message)
// // // // // //       }
// // // // // //     }

// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       images: {
// // // // // //         ...prev.images,
// // // // // //         [imageField]: isMultiple
// // // // // //           ? [...(prev.images?.[imageField] || []), ...uploaded]
// // // // // //           : uploaded[0]
// // // // // //       }
// // // // // //     }))
// // // // // //   }

// // // // // //   const renderUploadField = (label, field, multiple = false) => (
// // // // // //     <div>
// // // // // //       <label className="block font-medium mb-1">{label}</label>
// // // // // //       <input
// // // // // //         type="file"
// // // // // //         accept="image/*"
// // // // // //         multiple={multiple}
// // // // // //         onChange={(e) => handleImageUpload(e, field, multiple)}
// // // // // //         className="block border p-2 rounded w-full"
// // // // // //       />
// // // // // //       {formData.images?.[field] && (
// // // // // //         <div className="mt-2 text-sm text-gray-600">
// // // // // //           {multiple
// // // // // //             ? formData.images[field].map((url, i) => (
// // // // // //                 <img key={i} src={url} alt="preview" className="h-20 mb-2" />
// // // // // //               ))
// // // // // //             : <img src={formData.images[field]} alt="preview" className="h-20" />
// // // // // //           }
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   )

// // // // // //   return (
// // // // // //     <div className="space-y-6">
// // // // // //       <h2 className="text-xl font-bold text-blue-800">Upload Images</h2>

// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //         {renderUploadField("Front Facade", "frontFacade")}
// // // // // //         {renderUploadField("Interior View", "interiorView")}
// // // // // //         {renderUploadField("Main Area", "mainArea", true)}
// // // // // //         {renderUploadField("Branding Zone", "brandingZone")}
// // // // // //         {renderUploadField("Branding Zones (Multiple)", "brandingZones", true)}
// // // // // //         {renderUploadField("Camera Views", "cameraViews", true)}
// // // // // //         {renderUploadField("Heat Mapping Photo", "heatMapPhoto")}
// // // // // //         {renderUploadField("Other Photos", "otherPhotos", true)}
// // // // // //       </div>

// // // // // //       <div className="flex justify-between mt-6">
// // // // // //         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
// // // // // //         <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next →</button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default UploadImages

// // // // // import React from "react"
// // // // // import axios from "axios"

// // // // // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// // // // //   const token = localStorage.getItem("token")

// // // // //   const handleImageUpload = async (e, field) => {
// // // // //     const file = e.target.files[0]
// // // // //     if (!file) return

// // // // //     const formDataImg = new FormData()
// // // // //     formDataImg.append("image", file)

// // // // //     try {
// // // // //       const res = await axios.post("http://localhost:5000/api/upload/image", formDataImg, {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //           "Content-Type": "multipart/form-data",
// // // // //         },
// // // // //       })
// // // // //       setFormData((prev) => ({
// // // // //         ...prev,
// // // // //         images: { ...prev.images, [field]: res.data.secure_url },
// // // // //       }))
// // // // //     } catch (err) {
// // // // //       alert("Upload failed")
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div className="space-y-6">
// // // // //       <h2 className="text-xl font-bold text-blue-800">Upload Space Images</h2>

// // // // //       <div className="grid grid-cols-2 gap-4">
// // // // //         {["frontFacade", "interiorView", "brandingZone", "heatMapPhoto"].map((field) => (
// // // // //           <div key={field}>
// // // // //             <label className="block mb-1">{field}</label>
// // // // //             <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, field)} className="border p-2 rounded w-full" />
// // // // //             {formData.images?.[field] && (
// // // // //               <img src={formData.images[field]} alt={field} className="h-32 w-auto mt-2" />
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       <div className="flex justify-between">
// // // // //         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
// // // // //         <button onClick={nextStep} className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default UploadImages


// // // // import React from "react";
// // // // import axios from "axios";

// // // // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// // // //   const token = localStorage.getItem("token");

// // // //   const handleFileUpload = async (e, key) => {
// // // //     const file = e.target.files[0];
// // // //     if (!file) return;

// // // //     const formDataUpload = new FormData();
// // // //     formDataUpload.append("image", file);

// // // //     try {
// // // //       const res = await axios.post("http://localhost:5000/api/upload/image", formDataUpload, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //           "Content-Type": "multipart/form-data",
// // // //         },
// // // //       });

// // // //       const imageUrl = res.data.secure_url;

// // // //       if (["otherPhotos", "brandingZones", "cameraViews", "mainArea"].includes(key)) {
// // // //         const existing = formData.images[key] || [];
// // // //         setFormData({
// // // //           ...formData,
// // // //           images: {
// // // //             ...formData.images,
// // // //             [key]: [...existing, imageUrl],
// // // //           },
// // // //         });
// // // //       } else {
// // // //         setFormData({
// // // //           ...formData,
// // // //           images: {
// // // //             ...formData.images,
// // // //             [key]: imageUrl,
// // // //           },
// // // //         });
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Upload failed", err);
// // // //       alert("Image upload failed.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="space-y-4">
// // // //       <h2 className="text-2xl font-bold text-blue-700">Upload Images</h2>

// // // //       {[
// // // //         { label: "Front Facade", key: "frontFacade", required: true },
// // // //         { label: "Interior View", key: "interiorView" },
// // // //         { label: "Branding Zone", key: "brandingZone" },
// // // //         { label: "Heat Map Photo", key: "heatMapPhoto" },
// // // //         { label: "Other Photos", key: "otherPhotos", multiple: true },
// // // //         { label: "Main Area", key: "mainArea", multiple: true },
// // // //         { label: "Branding Zones", key: "brandingZones", multiple: true },
// // // //         { label: "Camera Views", key: "cameraViews", multiple: true },
// // // //       ].map(({ label, key, multiple }) => (
// // // //         <div key={key}>
// // // //           <label className="block mb-1 font-medium text-gray-700">{label}{key === "frontFacade" && " *"}</label>
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => handleFileUpload(e, key)}
// // // //             multiple={multiple}
// // // //             className="border p-2 rounded w-full"
// // // //           />
// // // //           {formData.images?.[key] && (
// // // //             <div className="mt-2">
// // // //               {Array.isArray(formData.images[key]) ? (
// // // //                 formData.images[key].map((url, idx) => (
// // // //                   <img key={idx} src={url} alt={`${key}-${idx}`} className="h-24 inline-block mr-2" />
// // // //                 ))
// // // //               ) : (
// // // //                 <img src={formData.images[key]} alt={key} className="h-24" />
// // // //               )}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       ))}

// // // //       <div className="flex justify-between mt-6">
// // // //         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
// // // //         <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next →</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UploadImages;


// // // import React from 'react'
// // // import axios from 'axios'

// // // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// // //   const token = localStorage.getItem('token')

// // //   const handleImageUpload = async (e, field) => {
// // //     const file = e.target.files[0]
// // //     if (!file) return

// // //     const formDataImg = new FormData()
// // //     formDataImg.append('image', file)

// // //     try {
// // //       const res = await axios.post('http://localhost:5000/api/upload/image', formDataImg, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       })

// // //       const imageUrl = res.data.secure_url

// // //       if (!imageUrl) return

// // //       // Handle multiple-image array field
// // //       if (field === 'otherPhotos') {
// // //         const updated = [...(formData.images.otherPhotos || []), imageUrl]
// // //         setFormData({
// // //           ...formData,
// // //           images: { ...formData.images, otherPhotos: updated },
// // //         })
// // //       } else {
// // //         setFormData({
// // //           ...formData,
// // //           images: { ...formData.images, [field]: imageUrl },
// // //         })
// // //       }
// // //     } catch (error) {
// // //       console.error('Image upload failed:', error)
// // //       alert('Image upload failed. Please try again.')
// // //     }
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <h2 className="text-2xl font-semibold text-blue-800">Upload Images</h2>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         {[
// // //           { key: 'frontFacade', label: 'Front Facade (Required)' },
// // //           { key: 'interiorView', label: 'Interior View' },
// // //           { key: 'brandingZone', label: 'Branding Zone' },
// // //           { key: 'heatMapPhoto', label: 'Heat Map Photo (if available)' },
// // //         ].map(({ key, label }) => (
// // //           <div key={key}>
// // //             <label className="block font-medium mb-1">{label}</label>
// // //             <input
// // //               type="file"
// // //               accept="image/*"
// // //               onChange={(e) => handleImageUpload(e, key)}
// // //               className="block w-full border px-3 py-2"
// // //             />
// // //             {formData.images?.[key] && (
// // //               <img src={formData.images[key]} alt={key} className="mt-2 h-32 object-cover rounded" />
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Other photos (multiple) */}
// // //       <div>
// // //         <label className="block font-medium mb-1">Other Photos (optional)</label>
// // //         <input
// // //           type="file"
// // //           accept="image/*"
// // //           onChange={(e) => handleImageUpload(e, 'otherPhotos')}
// // //           className="block w-full border px-3 py-2"
// // //         />
// // //         {formData.images?.otherPhotos?.length > 0 && (
// // //           <div className="flex gap-2 mt-2 flex-wrap">
// // //             {formData.images.otherPhotos.map((url, idx) => (
// // //               <img key={idx} src={url} alt={`Other ${idx}`} className="h-24 w-24 object-cover rounded" />
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       <div className="flex justify-between mt-6">
// // //         <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">← Back</button>
// // //         <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next →</button>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default UploadImages

// // import React from "react"
// // import axios from "axios"

// // const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
// //   const token = localStorage.getItem("token")

// //   const uploadImage = async (file, fieldKey) => {
// //     const data = new FormData()
// //     data.append("image", file)

// //     try {
// //       const res = await axios.post("http://localhost:5000/api/upload/image", data, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "multipart/form-data",
// //         },
// //       })

// //       const url = res.data.secure_url
// //       console.log(`✅ Uploaded image for field "${fieldKey}":`, url)
// //       return url
// //     } catch (error) {
// //       console.error(`❌ Failed to upload for "${fieldKey}":`, error.message)
// //       return null
// //     }
// //   }

// //   const handleFileChange = async (e, fieldKey, isArray = false) => {
// //     const files = Array.from(e.target.files)
// //     if (!files.length) return

// //     const uploadedUrls = await Promise.all(files.map((file) => uploadImage(file, fieldKey)))

// //     const validUrls = uploadedUrls.filter((url) => url !== null)

// //     setFormData((prev) => ({
// //       ...prev,
// //       images: {
// //         ...prev.images,
// //         [fieldKey]: isArray ? validUrls : validUrls[0] || "",
// //       },
// //     }))
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-xl font-semibold text-blue-800">Upload Images</h2>

// //       {[
// //         { label: "Front Facade *", key: "frontFacade", multiple: false },
// //         { label: "Interior View", key: "interiorView", multiple: false },
// //         { label: "Branding Zone", key: "brandingZone", multiple: false },
// //         { label: "Heat Map Photo", key: "heatMapPhoto", multiple: false },
// //         { label: "Other Photos", key: "otherPhotos", multiple: true },
// //       ].map(({ label, key, multiple }) => (
// //         <div key={key}>
// //           <label className="block mb-1">{label}</label>
// //           <input
// //             type="file"
// //             onChange={(e) => handleFileChange(e, key, multiple)}
// //             multiple={multiple}
// //             accept="image/*"
// //             className="border p-2 rounded w-full"
// //           />
// //           {formData.images?.[key] && (
// //             <p className="text-green-600 mt-1 text-sm">
// //               ✅ Uploaded {multiple ? formData.images[key].length : 1} image(s)
// //             </p>
// //           )}
// //         </div>
// //       ))}

// //       <div className="flex gap-4 mt-6">
// //         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
// //         <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next →</button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default UploadImages


// import React from "react"
// import axios from "axios"

// const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
//   const token = localStorage.getItem("token")

//   const uploadImage = async (file, fieldKey, multiple = false) => {
//     const data = new FormData()
//     data.append("image", file)

//     try {
//       const res = await axios.post("http://localhost:5000/api/upload/image", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data"
//         }
//       })

//       const url = res.data.secure_url
//       console.log(`✅ Uploaded to Cloudinary [${fieldKey}]:`, url)

//       setFormData((prev) => ({
//         ...prev,
//         images: {
//           ...prev.images,
//           [fieldKey]: multiple
//             ? [...(prev.images?.[fieldKey] || []), url]
//             : url
//         }
//       }))
//     } catch (error) {
//       console.error(`❌ Error uploading ${fieldKey}:`, error)
//       alert(`Failed to upload image for ${fieldKey}`)
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold text-blue-800">Upload Images</h2>

//       {[
//         { label: "Front Facade *", key: "frontFacade", multiple: false },
//         { label: "Interior View", key: "interiorView", multiple: false },
//         { label: "Branding Zone", key: "brandingZone", multiple: false },
//         { label: "Heat Map Photo", key: "heatMapPhoto", multiple: false },
//         { label: "Other Photos", key: "otherPhotos", multiple: true }
//       ].map(({ label, key, multiple }) => (
//         <div key={key}>
//           <label className="block mb-1">{label}</label>
//           <input
//             type="file"
//             multiple={multiple}
//             accept="image/*"
//             onChange={(e) => {
//               const files = Array.from(e.target.files)
//               files.forEach((file) => uploadImage(file, key, multiple))
//             }}
//             className="border p-2 rounded w-full"
//           />
//           {formData.images?.[key] && (
//             <p className="text-green-600 text-sm mt-1">
//               ✅ Uploaded {multiple ? formData.images[key].length : 1} image(s)
//             </p>
//           )}
//         </div>
//       ))}

//       <div className="flex gap-4 mt-6">
//         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
//         <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next →</button>
//       </div>
//     </div>
//   )
// }

// export default UploadImages

// import React from 'react'
// import axios from 'axios'

// const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
//   // const handleUpload = async (e, key, isMultiple = false) => {
//   //   const file = e.target.files[0]
//   //   if (!file) return

//   //   const form = new FormData()
//   //   form.append('image', file)

//   //   try {
//   //     const token = localStorage.getItem('token')
//   //     const res = await axios.post('http://localhost:5000/api/upload/image', form, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     })

//   //     const imageUrl = res.data?.secure_url
//   //     console.log(`✅ Uploaded to Cloudinary [${key}]:`, imageUrl)

//   //     if (!imageUrl) return alert("Upload failed")

//   //     setFormData((prev) => {
//   //       const updatedImages = { ...prev.images }

//   //       if (isMultiple) {
//   //         const prevArray = updatedImages[key] || []
//   //         updatedImages[key] = [...prevArray, imageUrl]
//   //       } else {
//   //         updatedImages[key] = imageUrl
//   //       }

//   //       return { ...prev, images: updatedImages }
//   //     })
//   //   } catch (err) {
//   //     console.error(`❌ Upload error for [${key}]`, err)
//   //     alert('Image upload failed. Please try again.')
//   //   }
//   // }
//   const handleUpload = async (e, field) => {
//     const file = e.target.files[0];
//     if (!file) return;
  
//     const formData = new FormData();
//     formData.append("image", file);
  
//     try {
//       const token = localStorage.getItem("token");
  
//       const res = await axios.post("http://localhost:5000/api/upload/image", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       const imageUrl = res.data?.secure_url || res.data?.url;
  
//       if (!imageUrl) {
//         console.error("Image upload response did not contain a valid URL");
//         alert("Upload failed. No image URL returned.");
//         return;
//       }
  
//       console.log(`✅ Uploaded to Cloudinary [${field}]:`, imageUrl);
  
//       setFormData((prev) => ({
//         ...prev,
//         images: {
//           ...prev.images,
//           [field]: imageUrl,
//         },
//       }));
//     } catch (err) {
//       console.error("Image upload failed", err);
//       alert("Image upload failed");
//     }
//   };
  
  

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-blue-800">Upload Images</h2>

//       <div>
//         <label className="block font-medium">Front Facade *</label>
//         <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'frontFacade')} />
//       </div>

//       <div>
//         <label className="block font-medium">Interior View</label>
//         <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'interiorView')} />
//       </div>

//       <div>
//         <label className="block font-medium">Branding Zone Photo</label>
//         <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'brandingZone')} />
//       </div>

//       <div>
//         <label className="block font-medium">Heat Map Camera View</label>
//         <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'heatMapPhoto')} />
//       </div>

//       <div>
//         <label className="block font-medium">Other Photos (Multiple)</label>
//         <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'otherPhotos', true)} multiple />
//       </div>

//       <div className="flex justify-between mt-6">
//         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
//         <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next →</button>
//       </div>
//     </div>
//   )
// }

// export default UploadImages


import React from 'react'
import axios from 'axios'

const UploadImages = ({ formData, setFormData, nextStep, prevStep }) => {
  const token = localStorage.getItem('token')

  const handleUpload = async (e, fieldName, isArray = false) => {
    const file = e.target.files[0]
    if (!file) return

    const formDataFile = new FormData()
    formDataFile.append('image', file)

    try {
      const res = await axios.post('http://localhost:5000/api/upload/image', formDataFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      const url = res.data?.url
      if (!url) return alert('Upload failed. No image URL returned.')

      console.log(`✅ Uploaded to Cloudinary [${fieldName}]:`, url)

      setFormData((prev) => ({
        ...prev,
        images: {
          ...prev.images,
          [fieldName]: isArray
            ? [...(prev.images?.[fieldName] || []), url]
            : url
        }
      }))
    } catch (err) {
      console.error('Upload error:', err)
      alert('Image upload failed')
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800">Upload Images</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">Front Facade *</label>
          <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'frontFacade')} />
          {formData.images?.frontFacade && <img src={formData.images.frontFacade} className="h-32 mt-2" />}
        </div>

        <div>
          <label className="block mb-1 font-medium">Interior View</label>
          <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'interiorView')} />
          {formData.images?.interiorView && <img src={formData.images.interiorView} className="h-32 mt-2" />}
        </div>

        <div>
          <label className="block mb-1 font-medium">Branding Zone</label>
          <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'brandingZone')} />
          {formData.images?.brandingZone && <img src={formData.images.brandingZone} className="h-32 mt-2" />}
        </div>

        <div>
          <label className="block mb-1 font-medium">Heat Map Photo</label>
          <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'heatMapPhoto')} />
          {formData.images?.heatMapPhoto && <img src={formData.images.heatMapPhoto} className="h-32 mt-2" />}
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Other Photos</label>
        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'otherPhotos', true)} />
        <div className="grid grid-cols-3 gap-2 mt-2">
          {(formData.images?.otherPhotos || []).map((url, i) => (
            <img key={i} src={url} alt="other" className="h-24 w-full object-cover rounded" />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">← Back</button>
        <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next →</button>
      </div>
    </div>
  )
}

export default UploadImages
