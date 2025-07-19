// // // // // // // // // // import React from "react"

// // // // // // // // // // const ReviewSubmit = ({ formData }) => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="space-y-6">
// // // // // // // // // //       <h2 className="text-xl font-bold text-blue-800 mb-4">Final Review</h2>

// // // // // // // // // //       <div className="bg-white shadow rounded p-4">
// // // // // // // // // //         <h3 className="font-semibold text-lg text-gray-700 mb-2">Basic Info</h3>
// // // // // // // // // //         <p><strong>Space Name:</strong> {formData.spaceName}</p>
// // // // // // // // // //         <p><strong>Full Name:</strong> {formData.fullName}</p>
// // // // // // // // // //         <p><strong>Email:</strong> {formData.email}</p>
// // // // // // // // // //         <p><strong>Phone:</strong> {formData.phone}</p>
// // // // // // // // // //         <p><strong>Space Type:</strong> {formData.spaceType}</p>
// // // // // // // // // //         <p><strong>Company:</strong> {formData.companyName}</p>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div className="bg-white shadow rounded p-4">
// // // // // // // // // //         <h3 className="font-semibold text-lg text-gray-700 mb-2">Space Details</h3>
// // // // // // // // // //         <p><strong>Target Age Groups:</strong> {formData.demographics?.ageGroups?.join(", ")}</p>
// // // // // // // // // //         <p><strong>Gender:</strong> {formData.demographics?.gender}</p>
// // // // // // // // // //         <p><strong>Income Group:</strong> {formData.demographics?.incomeGroup}</p>
// // // // // // // // // //         <p><strong>Footfall (weekday/weekend):</strong> {formData.footfall?.weekday} / {formData.footfall?.weekend}</p>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div className="bg-white shadow rounded p-4">
// // // // // // // // // //         <h3 className="font-semibold text-lg text-gray-700 mb-2">Branding Zones</h3>
// // // // // // // // // //         {formData.brandingZones?.map((bz, i) => (
// // // // // // // // // //           <div key={i} className="mb-2">
// // // // // // // // // //             <p><strong>{bz.type}</strong> – Size: {bz.sizeSqFt} sq.ft</p>
// // // // // // // // // //             {bz.photo && <img src={bz.photo} alt="branding" className="w-24 h-24 object-cover rounded" />}
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //         {formData.customBrandingOptions?.length > 0 && (
// // // // // // // // // //           <>
// // // // // // // // // //             <h4 className="font-semibold mt-3">Custom Zones</h4>
// // // // // // // // // //             {formData.customBrandingOptions.map((c, i) => (
// // // // // // // // // //               <p key={i}>
// // // // // // // // // //                 <strong>{c.label}</strong>: {c.sizeSqFt} sq.ft
// // // // // // // // // //               </p>
// // // // // // // // // //             ))}
// // // // // // // // // //           </>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>

// // // // // // // // // //       <div className="bg-white shadow rounded p-4">
// // // // // // // // // //         <h3 className="font-semibold text-lg text-gray-700 mb-2">Images</h3>
// // // // // // // // // //         {formData.images?.frontFacade && (
// // // // // // // // // //           <img src={formData.images.frontFacade} alt="Facade" className="w-32 h-24 object-cover mb-2 rounded" />
// // // // // // // // // //         )}
// // // // // // // // // //         {formData.images?.interiorView && (
// // // // // // // // // //           <img src={formData.images.interiorView} alt="Interior" className="w-32 h-24 object-cover mb-2 rounded" />
// // // // // // // // // //         )}
// // // // // // // // // //         {(formData.images?.otherPhotos || []).map((url, i) => (
// // // // // // // // // //           <img key={i} src={url} alt="Other" className="w-24 h-20 object-cover rounded inline-block mr-2 mb-2" />
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       <div className="bg-white shadow rounded p-4">
// // // // // // // // // //         <h3 className="font-semibold text-lg text-gray-700 mb-2">Bank & Pricing</h3>
// // // // // // // // // //         <p><strong>Account Holder:</strong> {formData.bankDetails?.accountHolderName}</p>
// // // // // // // // // //         <p><strong>Account No:</strong> {formData.bankDetails?.accountNumber}</p>
// // // // // // // // // //         <p><strong>IFSC:</strong> {formData.bankDetails?.ifscCode}</p>
// // // // // // // // // //         {formData.bankDetails?.upi && <p><strong>UPI:</strong> {formData.bankDetails.upi}</p>}
// // // // // // // // // //         <p><strong>Base Price:</strong> ₹{formData.basePrice}</p>
// // // // // // // // // //         <p><strong>Premium Price:</strong> ₹{formData.premiumPrice}</p>
// // // // // // // // // //       </div>

// // // // // // // // // //       <p className="text-gray-500 text-sm mt-4">
// // // // // // // // // //         Please review all details before clicking submit. You’ll be redirected to payment (if premium) or your dashboard.
// // // // // // // // // //       </p>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default ReviewSubmit

// // // // // // // // // import React from "react"
// // // // // // // // // import axios from "axios"
// // // // // // // // // import { useSelector } from "react-redux"
// // // // // // // // // import { useNavigate } from "react-router-dom"

// // // // // // // // // const ReviewAndSubmit = ({ formData }) => {
// // // // // // // // //   const navigate = useNavigate()
// // // // // // // // //   const { token } = useSelector((state) => state.auth)

// // // // // // // // //   const handleSubmit = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const payload = {
// // // // // // // // //         ...formData,
// // // // // // // // //         footfall: {
// // // // // // // // //           weekday: Number(formData.weekdayFootfall),
// // // // // // // // //           weekend: Number(formData.weekendFootfall),
// // // // // // // // //           monthly: Number(formData.monthlyFootfall) || undefined
// // // // // // // // //         },
// // // // // // // // //         demographics: {
// // // // // // // // //           ageGroups: formData.ageGroups || [],
// // // // // // // // //           gender: formData.gender || "",
// // // // // // // // //           incomeGroup: formData.incomeGroup || ""
// // // // // // // // //         },
// // // // // // // // //         images: {
// // // // // // // // //           ...formData.images,
// // // // // // // // //           frontFacade: Array.isArray(formData.images.frontFacade)
// // // // // // // // //             ? formData.images.frontFacade[0]
// // // // // // // // //             : formData.images.frontFacade,
// // // // // // // // //         },
// // // // // // // // //       }

// // // // // // // // //       const res = await axios.post(
// // // // // // // // //         "http://localhost:5000/api/space-owner/register-space",
// // // // // // // // //         payload,
// // // // // // // // //         {
// // // // // // // // //           headers: {
// // // // // // // // //             Authorization: `Bearer ${token}`
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       )

// // // // // // // // //       alert("✅ Space successfully submitted!")
// // // // // // // // //       navigate("/dashboard/space-owner")

// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Submission failed", error)
// // // // // // // // //       alert("❌ Failed to submit: " + error?.response?.data?.message || error.message)
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div className="p-6 space-y-4">
// // // // // // // // //       <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>

// // // // // // // // //       <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
// // // // // // // // //         <div><strong>Space Name:</strong> {formData.spaceName}</div>
// // // // // // // // //         <div><strong>Type:</strong> {formData.spaceType}</div>
// // // // // // // // //         <div><strong>Owner Name:</strong> {formData.fullName}</div>
// // // // // // // // //         <div><strong>Email:</strong> {formData.email}</div>
// // // // // // // // //         <div><strong>Phone:</strong> {formData.phone}</div>
// // // // // // // // //         <div><strong>Location:</strong> {formData.location?.address}</div>
// // // // // // // // //         <div><strong>Company:</strong> {formData.companyName}</div>
// // // // // // // // //         <div><strong>Pan Number:</strong> {formData.panNumber}</div>
// // // // // // // // //         <div><strong>Referral Code:</strong> {formData.referralCode || "N/A"}</div>
// // // // // // // // //         <div><strong>Subscription:</strong> {formData.subscriptionPlan}</div>
// // // // // // // // //       </div>

// // // // // // // // //       <button
// // // // // // // // //         onClick={handleSubmit}
// // // // // // // // //         className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// // // // // // // // //       >
// // // // // // // // //          Submit for Approval
// // // // // // // // //       </button>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default ReviewAndSubmit

// // // // // // // // import React from "react"
// // // // // // // // import axios from "axios"
// // // // // // // // import { useSelector } from "react-redux"
// // // // // // // // import { useNavigate } from "react-router-dom"

// // // // // // // // const ReviewAndSubmit = ({ formData }) => {
// // // // // // // //   const navigate = useNavigate()
// // // // // // // //   const { token } = useSelector((state) => state.auth)

// // // // // // // //   const handleSubmit = async () => {
// // // // // // // //     try {
// // // // // // // //       const payload = {
// // // // // // // //         ...formData,
// // // // // // // //         footfall: {
// // // // // // // //           weekday: Number(formData.weekdayFootfall),
// // // // // // // //           weekend: Number(formData.weekendFootfall),
// // // // // // // //           monthly: Number(formData.monthlyFootfall) || undefined
// // // // // // // //         },
// // // // // // // //         demographics: {
// // // // // // // //           ageGroups: formData.ageGroups || [],
// // // // // // // //           gender: formData.gender || "",
// // // // // // // //           incomeGroup: formData.incomeGroup || ""
// // // // // // // //         },
// // // // // // // //         images: {
// // // // // // // //           ...formData.images,
// // // // // // // //           frontFacade: Array.isArray(formData.images.frontFacade)
// // // // // // // //             ? formData.images.frontFacade[0]
// // // // // // // //             : formData.images.frontFacade,
// // // // // // // //         },
// // // // // // // //       }

// // // // // // // //       const res = await axios.post(
// // // // // // // //         "http://localhost:5000/api/space-owner/register-space",
// // // // // // // //         payload,
// // // // // // // //         {
// // // // // // // //           headers: {
// // // // // // // //             Authorization: `Bearer ${token}`
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       )

// // // // // // // //       alert("✅ Space successfully submitted!")
// // // // // // // //       navigate("/dashboard/space-owner")

// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Submission failed", error)
// // // // // // // //       alert("❌ Failed to submit: " + error?.response?.data?.message || error.message)
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="p-6 space-y-4">
// // // // // // // //       <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>

// // // // // // // //       <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
// // // // // // // //         <div><strong>Space Name:</strong> {formData.spaceName}</div>
// // // // // // // //         <div><strong>Type:</strong> {formData.spaceType}</div>
// // // // // // // //         <div><strong>Owner Name:</strong> {formData.fullName}</div>
// // // // // // // //         <div><strong>Email:</strong> {formData.email}</div>
// // // // // // // //         <div><strong>Phone:</strong> {formData.phone}</div>
// // // // // // // //         <div><strong>Location:</strong> {formData.location?.address}</div>
// // // // // // // //         <div><strong>Company:</strong> {formData.companyName}</div>
// // // // // // // //         <div><strong>Pan Number:</strong> {formData.panNumber}</div>
// // // // // // // //         <div><strong>Referral Code:</strong> {formData.referralCode || "N/A"}</div>
// // // // // // // //         <div><strong>Subscription:</strong> {formData.subscriptionPlan}</div>
// // // // // // // //       </div>

// // // // // // // //       <button
// // // // // // // //         onClick={handleSubmit}
// // // // // // // //         className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// // // // // // // //       >
// // // // // // // //         🚀 Submit for Approval
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default ReviewAndSubmit
// // // // // // // import React from 'react'
// // // // // // // import axios from 'axios'
// // // // // // // import { useNavigate } from 'react-router-dom'

// // // // // // // const ReviewAndSubmit = ({ formData, prevStep }) => {
// // // // // // //   const navigate = useNavigate()

// // // // // // //   const submit = async () => {
// // // // // // //     try {
// // // // // // //       const token = localStorage.getItem('token')

// // // // // // //       const payload = {
// // // // // // //         ...formData,
// // // // // // //         footfall: {
// // // // // // //           weekday: parseInt(formData.footfall.weekday || 0),
// // // // // // //           weekend: parseInt(formData.footfall.weekend || 0),
// // // // // // //           monthly: parseInt(formData.footfall.monthly || 0)
// // // // // // //         },
// // // // // // //         demographics: {
// // // // // // //           ageGroups: formData.demographics.ageGroups || [],
// // // // // // //           gender: formData.demographics.gender || '',
// // // // // // //           incomeGroup: formData.demographics.incomeGroup || ''
// // // // // // //         },
// // // // // // //         listingType: formData.listingType,
// // // // // // //         panNumber: formData.panNumber || '',
// // // // // // //         referralCode: formData.referralCode || ''
// // // // // // //       }

// // // // // // //       // Format frontFacade to string if it's still array
// // // // // // //       if (Array.isArray(payload.images?.frontFacade)) {
// // // // // // //         payload.images.frontFacade = payload.images.frontFacade[0] || ''
// // // // // // //       }

// // // // // // //       if (formData.listingType === 'premium') {
// // // // // // //         localStorage.setItem('pendingSpaceData', JSON.stringify(payload))
// // // // // // //         navigate('/payment')
// // // // // // //       } else {
// // // // // // //         const res = await axios.post('http://localhost:5000/api/space-owner/register-space', payload, {
// // // // // // //           headers: {
// // // // // // //             Authorization: `Bearer ${token}`
// // // // // // //           }
// // // // // // //         })
// // // // // // //         alert('Space registered successfully')
// // // // // // //         navigate('/space-owner/dashboard')
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       console.error('Submission failed', err)
// // // // // // //       alert('Failed to submit space. Try again.')
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="space-y-6">
// // // // // // //       <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>
// // // // // // //       <pre className="text-sm bg-gray-100 p-4 rounded overflow-x-auto max-h-80">{JSON.stringify(formData, null, 2)}</pre>

// // // // // // //       <div className="flex gap-4">
// // // // // // //         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
// // // // // // //         <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default ReviewAndSubmit

// // // // // // import React from "react"
// // // // // // import axios from "axios"
// // // // // // import { useNavigate } from "react-router-dom"

// // // // // // const ReviewAndSubmit = ({ formData, prevStep }) => {
// // // // // //   const navigate = useNavigate()

// // // // // //   const submit = async () => {
// // // // // //     try {
// // // // // //       const token = localStorage.getItem("token")

// // // // // //       const payload = {
// // // // // //         ...formData,
// // // // // //         footfall: {
// // // // // //           weekday: parseInt(formData.weekdayFootfall || 0),
// // // // // //           weekend: parseInt(formData.weekendFootfall || 0),
// // // // // //           monthly: parseInt(formData.monthlyFootfall || 0)
// // // // // //         },
// // // // // //         demographics: {
// // // // // //           ageGroups: formData.ageGroups || [],
// // // // // //           gender: formData.gender || "",
// // // // // //           incomeGroup: formData.incomeGroup || ""
// // // // // //         },
// // // // // //         isPremium: formData.listingType === "premium",
// // // // // //         subscriptionPlan: formData.listingType === "premium" ? "premium" : "free"
// // // // // //       }

// // // // // //       if (formData.listingType === "premium") {
// // // // // //         localStorage.setItem("pendingSpaceData", JSON.stringify(payload))
// // // // // //         navigate("/payment")
// // // // // //       } else {
// // // // // //         const res = await axios.post(
// // // // // //           "http://localhost:5000/api/space-owner/register-space",
// // // // // //           payload,
// // // // // //           {
// // // // // //             headers: {
// // // // // //               Authorization: `Bearer ${token}`
// // // // // //             }
// // // // // //           }
// // // // // //         )
// // // // // //         alert("Space registered successfully 🎉")
// // // // // //         navigate("/space-owner/dashboard")
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.error("Submission failed", err)
// // // // // //       alert("Failed to submit space. Please check all fields.")
// // // // // //     }
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="space-y-6">
// // // // // //       <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>

// // // // // //       <div className="bg-gray-100 rounded p-4 max-h-80 overflow-y-auto text-sm">
// // // // // //         <pre>{JSON.stringify(formData, null, 2)}</pre>
// // // // // //       </div>

// // // // // //       <div className="flex justify-between">
// // // // // //         <button
// // // // // //           onClick={prevStep}
// // // // // //           className="bg-gray-300 px-4 py-2 rounded"
// // // // // //         >
// // // // // //           ← Back
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={submit}
// // // // // //           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// // // // // //         >
// // // // // //           Submit
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default ReviewAndSubmit

// // // // // import React from 'react'
// // // // // import axios from 'axios'
// // // // // import { useNavigate } from 'react-router-dom'

// // // // // const ReviewAndSubmit = ({ formData, prevStep }) => {
// // // // //   const navigate = useNavigate()

// // // // //   const submit = async () => {
// // // // //     try {
// // // // //       const token = localStorage.getItem('token')

// // // // //       const payload = {
// // // // //         ...formData,
// // // // //         footfall: {
// // // // //           weekday: parseInt(formData.footfall?.weekday || formData.weekdayFootfall || 0),
// // // // //           weekend: parseInt(formData.footfall?.weekend || formData.weekendFootfall || 0),
// // // // //           monthly: parseInt(formData.footfall?.monthly || formData.monthlyFootfall || 0)
// // // // //         },
// // // // //         demographics: {
// // // // //           ageGroups: formData.ageGroups || [],
// // // // //           gender: formData.gender || '',
// // // // //           incomeGroup: formData.incomeGroup || ''
// // // // //         }
// // // // //       }

// // // // //       if (formData.listingType === 'premium') {
// // // // //         localStorage.setItem('pendingSpaceData', JSON.stringify(payload))
// // // // //         navigate('/payment')
// // // // //       } else {
// // // // //         const res = await axios.post('http://localhost:5000/api/space-owner/register-space', payload, {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${token}`,
// // // // //           },
// // // // //         })
// // // // //         alert('Space registered successfully!')
// // // // //         navigate('/space-owner/dashboard')
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error('Submission failed', err)
// // // // //       alert('Failed to submit space. Try again.')
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div className="space-y-6">
// // // // //       <h2 className="text-2xl font-bold text-blue-800">Review & Submit</h2>
// // // // //       <p className="text-sm text-gray-500">Please review all the details before submitting.</p>

// // // // //       <div className="bg-gray-100 p-4 rounded max-h-[400px] overflow-y-scroll text-sm">
// // // // //         <pre>{JSON.stringify(formData, null, 2)}</pre>
// // // // //       </div>

// // // // //       <div className="flex gap-4 mt-6">
// // // // //         <button
// // // // //           onClick={prevStep}
// // // // //           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// // // // //         >
// // // // //           ← Back
// // // // //         </button>
// // // // //         <button
// // // // //           onClick={submit}
// // // // //           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// // // // //         >
// // // // //           Submit →
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default ReviewAndSubmit

// // // // import React from 'react'
// // // // import axios from 'axios'
// // // // import { useNavigate } from 'react-router-dom'

// // // // const ReviewAndSubmit = ({ formData, prevStep }) => {
// // // //   const navigate = useNavigate()

// // // //   const submit = async () => {
// // // //     try {
// // // //       const token = localStorage.getItem('token')

// // // //       const cleanedBrandingZones = (formData.brandingZones || []).map(zone => ({
// // // //         ...zone,
// // // //         sizeSqFt: parseFloat(zone.sizeSqFt),
// // // //         number: zone.number ? parseInt(zone.number) : undefined
// // // //       }))

// // // //       const payload = {
// // // //         ...formData,
// // // //         footfall: {
// // // //           weekday: parseInt(formData.footfall?.weekday || formData.weekdayFootfall || 0),
// // // //           weekend: parseInt(formData.footfall?.weekend || formData.weekendFootfall || 0),
// // // //           monthly: parseInt(formData.footfall?.monthly || formData.monthlyFootfall || 0),
// // // //         },
// // // //         demographics: {
// // // //           ageGroups: formData.ageGroups || [],
// // // //           gender: formData.gender || "",
// // // //           incomeGroup: formData.incomeGroup || "",
// // // //         },
// // // //         brandingZones: cleanedBrandingZones,
// // // //         isPremium: formData.listingType === 'premium',
// // // //         subscriptionPlan: formData.listingType || 'free',
// // // //       }
// // // //       console.log(payload)

// // // //       if (formData.listingType === 'premium') {
// // // //         localStorage.setItem('pendingSpaceData', JSON.stringify(payload))
// // // //         navigate('/payment')
// // // //       } else {
// // // //         const res = await axios.post('http://localhost:5000/api/space-owner/register-space', payload, {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //         })
// // // //         alert('Space registered successfully ✅')
// // // //         navigate('/space-owner/dashboard')
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('❌ Submission failed:', err)
// // // //       alert('❌ Failed to submit space. Check form or try again.')
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="space-y-6">
// // // //       <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>

// // // //       <div className="bg-gray-50 border p-4 rounded max-h-[400px] overflow-y-auto text-sm font-mono whitespace-pre-wrap">
// // // //         {JSON.stringify(formData, null, 2)}
// // // //       </div>

// // // //       <div className="flex justify-between mt-4">
// // // //         <button
// // // //           onClick={prevStep}
// // // //           className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
// // // //         >
// // // //           ← Back
// // // //         </button>
// // // //         <button
// // // //           onClick={submit}
// // // //           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// // // //         >
// // // //           Submit
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ReviewAndSubmit

// // // import React from 'react'
// // // import axios from 'axios'
// // // import { useNavigate } from 'react-router-dom'

// // // const ReviewAndSubmit = ({ formData, prevStep }) => {
// // //   const navigate = useNavigate()

// // //   const cleanImageArray = (arr) => {
// // //     return (arr || []).filter((url) => url && url !== null)
// // //   }

// // //   const preparePayload = () => {
// // //     const isPremium = formData.listingType === 'premium'

// // //     return {
// // //       listingType: formData.listingType,
// // //       subscriptionPlan: isPremium ? 'premium' : 'free',
// // //       isPremium,

// // //       spaceName: formData.spaceName,
// // //       spaceType: formData.spaceType,
// // //       description: formData.description || '',
// // //       companyName: formData.companyName,
// // //       fullName: formData.fullName,
// // //       email: formData.email,
// // //       phone: formData.phone,
// // //       address: formData.address,
// // //       city: formData.city,
// // //       state: formData.state,
// // //       pincode: formData.pincode,
// // //       landmark: formData.landmark,
// // //       totalArea: formData.totalArea,
// // //       peakHours: formData.peakHours,
// // //       targetAudience: formData.targetAudience,
// // //       panNumber: formData.panNumber,

// // //       location: formData.location,

// // //       images: {
// // //         frontFacade: formData.images.frontFacade || '',
// // //         interiorView: formData.images.interiorView || '',
// // //         brandingZone: formData.images.brandingZone || '',
// // //         heatMapPhoto: formData.images.heatMapPhoto || '',
// // //         otherPhotos: cleanImageArray(formData.images.otherPhotos),
// // //         mainArea: cleanImageArray(formData.images.mainArea),
// // //         brandingZones: cleanImageArray(formData.images.brandingZones),
// // //         cameraViews: cleanImageArray(formData.images.cameraViews),
// // //       },

// // //       brandingZones: (formData.brandingZones || []).map((zone) => ({
// // //         type: zone.type,
// // //         sizeSqFt: Number(zone.sizeSqFt),
// // //         ...(zone.number ? { number: Number(zone.number) } : {}),
// // //       })),

// // //       customBrandingOptions: formData.customBrandingOptions || [],
// // //       suggestedPricing: (formData.suggestedPricing || []).map((item) => ({
// // //         brandingType: item.brandingType,
// // //         pricePerMonth: Number(item.pricePerMonth),
// // //       })),
// // //       availability: formData.availability || [],
// // //       amenities: formData.amenities || [],

// // //       footfall: {
// // //         weekday: Number(formData.footfall.weekday || 0),
// // //         weekend: Number(formData.footfall.weekend || 0),
// // //         monthly: Number(formData.footfall.monthly || 0),
// // //       },

// // //       demographics: {
// // //         ageGroups: formData.demographics.ageGroups || [],
// // //         gender: formData.demographics.gender || '',
// // //         incomeGroup: formData.demographics.incomeGroup || '',
// // //       },

// // //       heatMappingConsent: {
// // //         freeTrial: !!formData.heatMappingConsent.freeTrial,
// // //         clientTrialAllowed: !!formData.heatMappingConsent.clientTrialAllowed,
// // //         cameraCount: Number(formData.heatMappingConsent.cameraCount || 0),
// // //         cameraTypes: formData.heatMappingConsent.cameraTypes || [],
// // //         cameraZonePhoto: formData.heatMappingConsent.cameraZonePhoto || '',
// // //       },

// // //       bankDetails: {
// // //         accountHolderName: formData.bankDetails.accountHolderName || '',
// // //         accountNumber: formData.bankDetails.accountNumber || '',
// // //         ifscCode: formData.bankDetails.ifscCode || '',
// // //         upi: formData.bankDetails.upi || '',
// // //       },

// // //       authorizedToMonetize: !!formData.authorizedToMonetize,
// // //       agreedToTerms: !!formData.agreedToTerms,
// // //       submittedBy: formData.submittedBy,
// // //     }
// // //   }

// // //   const submit = async () => {
// // //     try {
// // //       const token = localStorage.getItem('token')
// // //       const payload = preparePayload()

// // //       if (formData.listingType === 'premium') {
// // //         localStorage.setItem('pendingSpaceData', JSON.stringify(payload))
// // //         navigate('/payment')
// // //       } else {
// // //         const res = await axios.post('http://localhost:5000/api/space-owner/register-space', payload, {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         })
// // //         alert('Space registered successfully')
// // //         navigate('/space-owner/dashboard')
// // //       }
// // //     } catch (err) {
// // //       console.error('❌ Submission failed:', err)
// // //       alert('Failed to submit space. Try again.')
// // //     }
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>
// // //       <pre className="text-sm bg-gray-100 p-4 rounded overflow-x-auto max-h-96">
// // //         {JSON.stringify(formData, null, 2)}
// // //       </pre>

// // //       <div className="flex gap-4">
// // //         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
// // //         <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
// // //           Submit
// // //         </button>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default ReviewAndSubmit

// // import React from "react"
// // import axios from "axios"
// // import { useNavigate } from "react-router-dom"

// // const ReviewAndSubmit = ({ formData, prevStep }) => {
// //   const navigate = useNavigate()

// //   const submit = async () => {
// //     try {
// //       const token = localStorage.getItem("token")
// //       const payload = {
// //         ...formData,
// //         footfall: {
// //           weekday: parseInt(formData.footfall?.weekday || formData.weekdayFootfall || 0),
// //           weekend: parseInt(formData.footfall?.weekend || formData.weekendFootfall || 0),
// //           monthly: parseInt(formData.footfall?.monthly || formData.monthlyFootfall || 0),
// //         },
// //         demographics: {
// //           ageGroups: formData.ageGroups || [],
// //           gender: formData.gender || "",
// //           incomeGroup: formData.incomeGroup || "",
// //         },
// //         isPremium: formData.listingType === "premium",
// //         subscriptionPlan: formData.listingType || "free",
// //       }

// //       if (formData.listingType === "premium") {
// //         localStorage.setItem("pendingSpaceData", JSON.stringify(payload))
// //         navigate("/payment")
// //       } else {
// //         const res = await axios.post("http://localhost:5000/api/space-owner/register-space", payload, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         })
// //         alert("Space registered successfully")
// //         navigate("/space-owner/dashboard")
// //       }
// //     } catch (err) {
// //       console.error("Submission failed", err)
// //       alert("Submission failed")
// //     }
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-xl font-semibold text-blue-800">Review & Submit</h2>
// //       <pre className="bg-gray-100 p-4 rounded text-sm max-h-96 overflow-y-auto">
// //         {JSON.stringify(formData, null, 2)}
// //       </pre>
// //       <div className="flex gap-4">
// //         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
// //         <button onClick={submit} className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default ReviewAndSubmit



// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ReviewAndSubmit = ({ formData, prevStep }) => {
//   const navigate = useNavigate();

//   const submit = async () => {
//     try {
//       const token = localStorage.getItem('token');

//       const payload = {
//         ...formData,
//         footfall: {
//           weekday: parseInt(formData.weekdayFootfall || 0),
//           weekend: parseInt(formData.weekendFootfall || 0),
//           monthly: parseInt(formData.monthlyFootfall || 0)
//         },
//         demographics: {
//           ageGroups: formData.ageGroups || [],
//           gender: formData.gender || '',
//           incomeGroup: formData.incomeGroup || ''
//         },
//         isPremium: formData.listingType === "premium",
//         subscriptionPlan: formData.listingType === "premium" ? "premium" : "free"
//       };

//       if (formData.listingType === 'premium') {
//         localStorage.setItem('pendingSpaceData', JSON.stringify(payload));
//         navigate('/payment');
//       } else {
//         const res = await axios.post('http://localhost:5000/api/space-owner/register-space', payload, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         alert("Space registered successfully");
//         navigate('/space-owner/dashboard');
//       }
//     } catch (err) {
//       console.error("Submission failed", err);
//       alert("Failed to submit space. Try again.");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>
//       <pre className="text-sm bg-gray-100 p-4 rounded overflow-x-auto max-h-80">{JSON.stringify(formData, null, 2)}</pre>

//       <div className="flex justify-between">
//         <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">← Back</button>
//         <button onClick={submit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default ReviewAndSubmit;

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReviewAndSubmit = ({ formData, prevStep }) => {
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const token = localStorage.getItem('token');

      const payload = {
        ...formData,
        footfall: {
          weekday: parseInt(formData.footfall.weekday || 0),
          weekend: parseInt(formData.footfall.weekend || 0),
          monthly: parseInt(formData.footfall.monthly || 0),
        },
        demographics: {
          ageGroups: formData.ageGroups || [],
          gender: formData.gender || '',
          incomeGroup: formData.incomeGroup || '',
        },
        isPremium: formData.listingType === 'premium',
        subscriptionPlan: formData.listingType,
      };

      if (formData.listingType === 'premium') {
        localStorage.setItem('pendingSpaceData', JSON.stringify(payload));
        navigate('/payment');
      } else {
        const res = await axios.post(
          'http://localhost:5000/api/space-owner/register-space',
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert('Space registered successfully');
        navigate('/space-owner/dashboard');
      }
    } catch (err) {
      console.error('Submission failed', err);
      alert('Failed to submit space. Try again.');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-blue-800">Review & Submit</h2>
      <div className="bg-gray-100 p-4 rounded text-sm max-h-[500px] overflow-y-auto">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
        >
          ← Back
        </button>
        <button
          onClick={submit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewAndSubmit;
