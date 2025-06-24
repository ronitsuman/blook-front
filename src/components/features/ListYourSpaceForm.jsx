
// // // // // // // import React, { useState } from "react"
// // // // // // // import { useNavigate } from "react-router-dom"
// // // // // // // import BasicInfo from "./BasicInfo"
// // // // // // // import SpaceFeatures from "./Features"
// // // // // // // import BrandingZones from "./BrandingOptions"
// // // // // // // import ImageUpload from "./UploadImages"
// // // // // // // import PricingAvailability from "./PricingAndAvailaablity"
// // // // // // // import TermsAgreement from "./TermsAgreement"
// // // // // // // import ReviewSubmit from "./RevieewAndSubmit"
// // // // // // // import { useSelector } from "react-redux"

// // // // // // // const steps = [
// // // // // // //   "Basic Info",
// // // // // // //   "Space Features",
// // // // // // //   "Branding Zones",
// // // // // // //   "Image Uploads",
// // // // // // //   "Pricing & Contact",
// // // // // // //   "Terms & Agreement",
// // // // // // //   "Review & Submit"
// // // // // // // ]
// // // // // // // const ListYourSpaceForm = () => {
// // // // // // //   const navigate = useNavigate()

// // // // // // // const { token, user, isAuthenticated } = useSelector((state) => state.auth)

// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     brandingZones: [],
// // // // // // //     customBrandingOptions: [],
// // // // // // //     amenities: [],
// // // // // // //     suggestedPricing: [],
// // // // // // //     availability: [],
// // // // // // //     bankDetails: {
// // // // // // //       accountHolderName: "",
// // // // // // //       accountNumber: "",
// // // // // // //       ifscCode: "",
// // // // // // //       upi: ""
// // // // // // //     },
// // // // // // //     demographics: {
// // // // // // //       ageGroups: [],
// // // // // // //       gender: "",
// // // // // // //       incomeGroup: ""
// // // // // // //     },
// // // // // // //     images: {
// // // // // // //       frontFacade: "",
// // // // // // //       interiorView: "",
// // // // // // //       brandingZone: "",
// // // // // // //       heatMapPhoto: "",
// // // // // // //       otherPhotos: []
// // // // // // //     },
// // // // // // //     location: { lat: "", lng: "", address: "" },
// // // // // // //     agreedToTerms: false,
// // // // // // //     authorizedToMonetize: false,
// // // // // // //     heatMappingConsent: {
// // // // // // //       freeTrial: false,
// // // // // // //       clientTrialAllowed: false,
// // // // // // //       cameraCount: 0,
// // // // // // //       cameraTypes: [],
// // // // // // //       cameraZonePhoto: ""
// // // // // // //     }
// // // // // // //   })

// // // // // // //   const [currentStep, setCurrentStep] = useState(0)
// // // // // // //   const [listingType, setListingType] = useState("basic")
// // // // // // //   const [submitting, setSubmitting] = useState(false)
// // // // // // //   const [showModal, setShowModal] = useState(false)
// // // // // // //   const [showSuccess, setShowSuccess] = useState(false)

// // // // // // //   const handleChange = (field, value) => {
// // // // // // //     setFormData((prev) => ({ ...prev, [field]: value }))
// // // // // // //   }

// // // // // // //   const nextStep = () => {
// // // // // // //     if (currentStep < steps.length - 1) {
// // // // // // //       setCurrentStep((prev) => prev + 1)
// // // // // // //     } else {
// // // // // // //       if (listingType === "premium") {
// // // // // // //         localStorage.setItem("listingFormData", JSON.stringify(formData))
// // // // // // //         localStorage.setItem("listingType", listingType)
// // // // // // //         navigate("/payment")
// // // // // // //       } else {
// // // // // // //         handleSubmit()
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const prevStep = () => {
// // // // // // //     if (currentStep > 0) setCurrentStep((prev) => prev - 1)
// // // // // // //   }

// // // // // // //   const handleSubmit = async () => {
// // // // // // //     setSubmitting(true)
// // // // // // //     try {
// // // // // // //       const payload = {
// // // // // // //         ...formData,
// // // // // // //         submittedBy: user?._id,
// // // // // // //         subscriptionPlan: listingType
// // // // // // //       }

// // // // // // //       const res = await fetch("http://localhost:5000/api/space-owner/register-space", {
// // // // // // //         method: "POST",
// // // // // // //         headers: {
// // // // // // //           "Content-Type": "application/json",
// // // // // // //           Authorization: `Bearer ${user?.token}`
// // // // // // //         },
// // // // // // //         body: JSON.stringify(payload)
// // // // // // //       })

// // // // // // //       if (!res.ok) throw new Error("Failed to submit")

// // // // // // //       setShowSuccess(true)
// // // // // // //       setTimeout(() => setShowModal(true), 1500)
// // // // // // //     } catch (error) {
// // // // // // //       alert("Submission failed.")
// // // // // // //       console.error(error)
// // // // // // //     } finally {
// // // // // // //       setSubmitting(false)
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const renderStep = () => {
// // // // // // //     switch (currentStep) {
// // // // // // //       case 0: return <BasicInfo formData={formData} setFormData={setFormData} />
// // // // // // //       case 1: return <SpaceFeatures formData={formData} setFormData={setFormData} />
// // // // // // //       case 2: return <BrandingZones formData={formData} setFormData={setFormData} />
// // // // // // //       case 3: return <ImageUpload formData={formData} setFormData={setFormData} />
// // // // // // //       case 4: return <PricingAvailability formData={formData} setFormData={setFormData} />
// // // // // // //       case 5: return <TermsAgreement formData={formData} setFormData={setFormData} />
// // // // // // //       case 6: return <ReviewSubmit formData={formData} />
// // // // // // //       default: return null
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-4 py-10">
// // // // // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-6 py-8">
// // // // // // //         <h1 className="text-3xl font-bold text-blue-800 mb-6">List Your Space</h1>

// // // // // // //         <div className="mb-6">
// // // // // // //           <label className="block mb-2 text-md font-semibold text-gray-700">Choose Listing Type:</label>
// // // // // // //           <div className="flex gap-4">
// // // // // // //             <button
// // // // // // //               onClick={() => setListingType("basic")}
// // // // // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "basic" ? "bg-green-600" : "bg-gray-400"}`}
// // // // // // //             >
// // // // // // //               Basic (₹0)
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => setListingType("premium")}
// // // // // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "premium" ? "bg-purple-600" : "bg-gray-400"}`}
// // // // // // //             >
// // // // // // //               Premium (₹999)
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <p className="text-sm text-gray-600 mb-4">
// // // // // // //           Step {currentStep + 1} of {steps.length}: <strong>{steps[currentStep]}</strong>
// // // // // // //         </p>

// // // // // // //         {renderStep()}

// // // // // // //         <div className="flex justify-between mt-8">
// // // // // // //           <button
// // // // // // //             onClick={prevStep}
// // // // // // //             disabled={currentStep === 0}
// // // // // // //             className="px-4 py-2 rounded bg-gray-300 text-gray-800 disabled:opacity-50"
// // // // // // //           >
// // // // // // //             Back
// // // // // // //           </button>

// // // // // // //           <button
// // // // // // //             onClick={nextStep}
// // // // // // //             className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
// // // // // // //             disabled={submitting}
// // // // // // //           >
// // // // // // //             {currentStep === steps.length - 1 ? (listingType === "premium" ? "Go to Payment" : "Submit") : "Next"}
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {showSuccess && (
// // // // // // //         <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all">
// // // // // // //           ✅ Space Registered Successfully!
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {showModal && (
// // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // // // // // //           <div className="bg-white rounded-xl p-8 max-w-md shadow-xl text-center">
// // // // // // //             <h2 className="text-xl font-bold text-blue-800 mb-4">🎉 Submission Complete!</h2>
// // // // // // //             <p className="text-gray-700 text-md">
// // // // // // //               Your space has been submitted and is under review by our tech team.
// // // // // // //               <br />
// // // // // // //               Please allow 24–48 hours for approval.
// // // // // // //             </p>
// // // // // // //             <button
// // // // // // //               className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // // // // //               onClick={() => {
// // // // // // //                 setShowModal(false)
// // // // // // //                 navigate("/dashboard/space-owner")
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Go to Dashboard
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default ListYourSpaceForm


// // // // // // import React, { useState } from "react"
// // // // // // import { useNavigate, Navigate } from "react-router-dom"
// // // // // // import { useSelector } from "react-redux"

// // // // // // import BasicInfo from "./BasicInfo"
// // // // // // import SpaceFeatures from "./Features"
// // // // // // import BrandingZones from "./BrandingOptions"
// // // // // // import ImageUpload from "./UploadImages"
// // // // // // import PricingAvailability from "./PricingAndAvailaablity"
// // // // // // import TermsAgreement from "./TermsAgreement"
// // // // // // import ReviewSubmit from "./RevieewAndSubmit"

// // // // // // const steps = [
// // // // // //   "Basic Info",
// // // // // //   "Space Features",
// // // // // //   "Branding Zones",
// // // // // //   "Image Uploads",
// // // // // //   "Pricing & Contact",
// // // // // //   "Terms & Agreement",
// // // // // //   "Review & Submit"
// // // // // // ]

// // // // // // const ListYourSpaceForm = () => {
// // // // // //   const navigate = useNavigate()

// // // // // //   const { user, token } = useSelector((state) => state.auth)

// // // // // //   // ❗ Optional redirect to login if unauthenticated
// // // // // //   if (!user || !token) {
// // // // // //     return <Navigate to="/login" replace />
// // // // // //   }

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     brandingZones: [],
// // // // // //     customBrandingOptions: [],
// // // // // //     amenities: [],
// // // // // //     suggestedPricing: [],
// // // // // //     availability: [],
// // // // // //     bankDetails: {
// // // // // //       accountHolderName: "",
// // // // // //       accountNumber: "",
// // // // // //       ifscCode: "",
// // // // // //       upi: ""
// // // // // //     },
// // // // // //     demographics: {
// // // // // //       ageGroups: [],
// // // // // //       gender: "",
// // // // // //       incomeGroup: ""
// // // // // //     },
// // // // // //     images: {
// // // // // //       frontFacade: "",
// // // // // //       interiorView: "",
// // // // // //       brandingZone: "",
// // // // // //       heatMapPhoto: "",
// // // // // //       otherPhotos: []
// // // // // //     },
// // // // // //     location: { lat: "", lng: "", address: "" },
// // // // // //     agreedToTerms: false,
// // // // // //     authorizedToMonetize: false,
// // // // // //     heatMappingConsent: {
// // // // // //       freeTrial: false,
// // // // // //       clientTrialAllowed: false,
// // // // // //       cameraCount: 0,
// // // // // //       cameraTypes: [],
// // // // // //       cameraZonePhoto: ""
// // // // // //     }
// // // // // //   })

// // // // // //   const [currentStep, setCurrentStep] = useState(0)
// // // // // //   const [listingType, setListingType] = useState("basic")
// // // // // //   const [submitting, setSubmitting] = useState(false)
// // // // // //   const [showModal, setShowModal] = useState(false)
// // // // // //   const [showSuccess, setShowSuccess] = useState(false)

// // // // // //   const handleChange = (field, value) => {
// // // // // //     setFormData((prev) => ({ ...prev, [field]: value }))
// // // // // //   }

// // // // // //   const nextStep = () => {
// // // // // //     if (currentStep < steps.length - 1) {
// // // // // //       setCurrentStep((prev) => prev + 1)
// // // // // //     } else {
// // // // // //       if (listingType === "premium") {
// // // // // //         localStorage.setItem("listingFormData", JSON.stringify(formData))
// // // // // //         localStorage.setItem("listingType", listingType)
// // // // // //         navigate("/payment")
// // // // // //       } else {
// // // // // //         handleSubmit()
// // // // // //       }
// // // // // //     }
// // // // // //   }

// // // // // //   const prevStep = () => {
// // // // // //     if (currentStep > 0) setCurrentStep((prev) => prev - 1)
// // // // // //   }

// // // // // //   const handleSubmit = async () => {
// // // // // //     setSubmitting(true)
// // // // // //     try {
// // // // // //       const payload = {
// // // // // //         ...formData,
// // // // // //         submittedBy: user._id,
// // // // // //         subscriptionPlan: listingType
// // // // // //       }

// // // // // //       const res = await fetch("http://localhost:5000/api/space-owner/register-space", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //           Authorization: `Bearer ${token}`
// // // // // //         },
// // // // // //         body: JSON.stringify(payload)
// // // // // //       })

// // // // // //       if (!res.ok) throw new Error("Failed to submit")

// // // // // //       setShowSuccess(true)
// // // // // //       setTimeout(() => setShowModal(true), 1500)
// // // // // //     } catch (error) {
// // // // // //       alert("Submission failed.")
// // // // // //       console.error(error)
// // // // // //     } finally {
// // // // // //       setSubmitting(false)
// // // // // //     }
// // // // // //   }

// // // // // //   const renderStep = () => {
// // // // // //     switch (currentStep) {
// // // // // //       case 0: return <BasicInfo formData={formData} setFormData={setFormData} />
// // // // // //       case 1: return <SpaceFeatures formData={formData} setFormData={setFormData} />
// // // // // //       case 2: return <BrandingZones formData={formData} setFormData={setFormData} />
// // // // // //       case 3: return <ImageUpload formData={formData} setFormData={setFormData} />
// // // // // //       case 4: return <PricingAvailability formData={formData} setFormData={setFormData} />
// // // // // //       case 5: return <TermsAgreement formData={formData} setFormData={setFormData} />
// // // // // //       case 6: return <ReviewSubmit formData={formData} />
// // // // // //       default: return null
// // // // // //     }
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-4 py-10">
// // // // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-6 py-8">
// // // // // //         <h1 className="text-3xl font-bold text-blue-800 mb-6">List Your Space</h1>

// // // // // //         <div className="mb-6">
// // // // // //           <label className="block mb-2 text-md font-semibold text-gray-700">Choose Listing Type:</label>
// // // // // //           <div className="flex gap-4">
// // // // // //             <button
// // // // // //               onClick={() => setListingType("basic")}
// // // // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "basic" ? "bg-green-600" : "bg-gray-400"}`}
// // // // // //             >
// // // // // //               Basic (₹0)
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => setListingType("premium")}
// // // // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "premium" ? "bg-purple-600" : "bg-gray-400"}`}
// // // // // //             >
// // // // // //               Premium (₹999)
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <p className="text-sm text-gray-600 mb-4">
// // // // // //           Step {currentStep + 1} of {steps.length}: <strong>{steps[currentStep]}</strong>
// // // // // //         </p>

// // // // // //         {renderStep()}

// // // // // //         <div className="flex justify-between mt-8">
// // // // // //           <button
// // // // // //             onClick={prevStep}
// // // // // //             disabled={currentStep === 0}
// // // // // //             className="px-4 py-2 rounded bg-gray-300 text-gray-800 disabled:opacity-50"
// // // // // //           >
// // // // // //             Back
// // // // // //           </button>

// // // // // //           <button
// // // // // //             onClick={nextStep}
// // // // // //             className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
// // // // // //             disabled={submitting}
// // // // // //           >
// // // // // //             {currentStep === steps.length - 1 ? (listingType === "premium" ? "Go to Payment" : "Submit") : "Next"}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {showSuccess && (
// // // // // //         <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all">
// // // // // //           ✅ Space Registered Successfully!
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {showModal && (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // // // // //           <div className="bg-white rounded-xl p-8 max-w-md shadow-xl text-center">
// // // // // //             <h2 className="text-xl font-bold text-blue-800 mb-4">🎉 Submission Complete!</h2>
// // // // // //             <p className="text-gray-700 text-md">
// // // // // //               Your space has been submitted and is under review by our tech team.
// // // // // //               <br />
// // // // // //               Please allow 24–48 hours for approval.
// // // // // //             </p>
// // // // // //             <button
// // // // // //               className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // // // //               onClick={() => {
// // // // // //                 setShowModal(false)
// // // // // //                 navigate("/dashboard/space-owner")
// // // // // //               }}
// // // // // //             >
// // // // // //               Go to Dashboard
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default ListYourSpaceForm


// // // // // import React, { useState } from "react"
// // // // // import { useNavigate, Navigate } from "react-router-dom"
// // // // // import { useSelector } from "react-redux"

// // // // // import BasicInfo from "./BasicInfo"
// // // // // import SpaceFeatures from "./Features"
// // // // // import BrandingZones from "./BrandingOptions"
// // // // // import ImageUpload from "./UploadImages"
// // // // // import PricingAvailability from "./PricingAndAvailaablity"
// // // // // import TermsAgreement from "./TermsAgreement"
// // // // // import ReviewSubmit from "./RevieewAndSubmit"

// // // // // const steps = [
// // // // //   "Basic Info",
// // // // //   "Space Features",
// // // // //   "Branding Zones",
// // // // //   "Image Uploads",
// // // // //   "Pricing & Contact",
// // // // //   "Terms & Agreement",
// // // // //   "Review & Submit"
// // // // // ]

// // // // // const ListYourSpaceForm = () => {
// // // // //   const navigate = useNavigate()
// // // // //   const { user, token } = useSelector((state) => state.auth)

// // // // //   if (!user || !token) {
// // // // //     return <Navigate to="/login" replace />
// // // // //   }

// // // // //   const [formData, setFormData] = useState({
// // // // //     // Step 1: Basic Info
// // // // //     spaceName: "",
// // // // //     spaceType: "",
// // // // //     companyName: "",
// // // // //     fullName: "",
// // // // //     phone: "",
// // // // //     email: "",

// // // // //     // Step 2: Features
// // // // //     totalArea: "",
// // // // //     peakHours: "",
// // // // //     targetAudience: "",
// // // // //     weekdayFootfall: "",
// // // // //     weekendFootfall: "",
// // // // //     monthlyFootfall: "",
// // // // //     ageGroups: [],
// // // // //     gender: "",
// // // // //     incomeGroup: "",
// // // // //     amenities: [],

// // // // //     // Step 3: Branding
// // // // //     brandingZones: [],
// // // // //     customBrandingOptions: [],
// // // // //     brandingTypes: [],

// // // // //     // Step 4: Images
// // // // //     images: {
// // // // //       frontFacade: "",
// // // // //       interiorView: "",
// // // // //       brandingZone: "",
// // // // //       heatMapPhoto: "",
// // // // //       otherPhotos: []
// // // // //     },

// // // // //     // Step 5: Location, Availability, Pricing
// // // // //     location: { lat: "", lng: "", address: "" },
// // // // //     availability: [],
// // // // //     suggestedPricing: [],
// // // // //     contactPerson: "",
// // // // //     contactPhone: "",
// // // // //     contactEmail: "",

// // // // //     // Step 6: Heat Mapping & Consent
// // // // //     heatMappingConsent: {
// // // // //       freeTrial: false,
// // // // //       clientTrialAllowed: false,
// // // // //       cameraCount: 0,
// // // // //       cameraTypes: [],
// // // // //       cameraZonePhoto: ""
// // // // //     },

// // // // //     // Step 7: Banking & Authorization
// // // // //     panNumber: "",
// // // // //     bankDetails: {
// // // // //       accountHolderName: "",
// // // // //       accountNumber: "",
// // // // //       ifscCode: "",
// // // // //       upi: ""
// // // // //     },
// // // // //     agreedToTerms: false,
// // // // //     authorizedToMonetize: false
// // // // //   })

// // // // //   const [currentStep, setCurrentStep] = useState(0)
// // // // //   const [listingType, setListingType] = useState("basic")
// // // // //   const [submitting, setSubmitting] = useState(false)
// // // // //   const [showModal, setShowModal] = useState(false)
// // // // //   const [showSuccess, setShowSuccess] = useState(false)

// // // // //   const handleChange = (field, value) => {
// // // // //     setFormData((prev) => ({ ...prev, [field]: value }))
// // // // //   }

// // // // //   const nextStep = () => {
// // // // //     if (currentStep < steps.length - 1) {
// // // // //       setCurrentStep((prev) => prev + 1)
// // // // //     } else {
// // // // //       if (listingType === "premium") {
// // // // //         localStorage.setItem("listingFormData", JSON.stringify(formData))
// // // // //         localStorage.setItem("listingType", listingType)
// // // // //         navigate("/payment")
// // // // //       } else {
// // // // //         handleSubmit()
// // // // //       }
// // // // //     }
// // // // //   }

// // // // //   const prevStep = () => {
// // // // //     if (currentStep > 0) setCurrentStep((prev) => prev - 1)
// // // // //   }

// // // // //   const handleSubmit = async () => {
// // // // //     setSubmitting(true)
// // // // //     try {
// // // // //       const payload = {
// // // // //         ...formData,
// // // // //         submittedBy: user._id,
// // // // //         subscriptionPlan: listingType
// // // // //       }

// // // // //       const res = await fetch("http://localhost:5000/api/space-owner/register-space", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           Authorization: `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify(payload)
// // // // //       })

// // // // //       if (!res.ok) throw new Error("Failed to submit")

// // // // //       setShowSuccess(true)
// // // // //       setTimeout(() => setShowModal(true), 1500)
// // // // //     } catch (error) {
// // // // //       alert("Submission failed.")
// // // // //       console.error(error)
// // // // //     } finally {
// // // // //       setSubmitting(false)
// // // // //     }
// // // // //   }

// // // // //   const renderStep = () => {
// // // // //     switch (currentStep) {
// // // // //       case 0: return <BasicInfo formData={formData} setFormData={setFormData} />
// // // // //       case 1: return <SpaceFeatures formData={formData} setFormData={setFormData} />
// // // // //       case 2: return <BrandingZones formData={formData} setFormData={setFormData} />
// // // // //       case 3: return <ImageUpload formData={formData} setFormData={setFormData} />
// // // // //       case 4: return <PricingAvailability formData={formData} setFormData={setFormData} />
// // // // //       case 5: return <TermsAgreement formData={formData} setFormData={setFormData} />
// // // // //       case 6: return <ReviewSubmit formData={formData} />
// // // // //       default: return null
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-4 py-10">
// // // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-6 py-8">
// // // // //         <h1 className="text-3xl font-bold text-blue-800 mb-6">List Your Space</h1>

// // // // //         <div className="mb-6">
// // // // //           <label className="block mb-2 text-md font-semibold text-gray-700">Choose Listing Type:</label>
// // // // //           <div className="flex gap-4">
// // // // //             <button
// // // // //               onClick={() => setListingType("basic")}
// // // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "basic" ? "bg-green-600" : "bg-gray-400"}`}
// // // // //             >
// // // // //               Basic (₹0)
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setListingType("premium")}
// // // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "premium" ? "bg-purple-600" : "bg-gray-400"}`}
// // // // //             >
// // // // //               Premium (₹999)
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         <p className="text-sm text-gray-600 mb-4">
// // // // //           Step {currentStep + 1} of {steps.length}: <strong>{steps[currentStep]}</strong>
// // // // //         </p>

// // // // //         {renderStep()}

// // // // //         <div className="flex justify-between mt-8">
// // // // //           <button
// // // // //             onClick={prevStep}
// // // // //             disabled={currentStep === 0}
// // // // //             className="px-4 py-2 rounded bg-gray-300 text-gray-800 disabled:opacity-50"
// // // // //           >
// // // // //             Back
// // // // //           </button>

// // // // //           <button
// // // // //             onClick={nextStep}
// // // // //             className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
// // // // //             disabled={submitting}
// // // // //           >
// // // // //             {currentStep === steps.length - 1 ? (listingType === "premium" ? "Go to Payment" : "Submit") : "Next"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {showSuccess && (
// // // // //         <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all">
// // // // //           ✅ Space Registered Successfully!
// // // // //         </div>
// // // // //       )}

// // // // //       {showModal && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // // // //           <div className="bg-white rounded-xl p-8 max-w-md shadow-xl text-center">
// // // // //             <h2 className="text-xl font-bold text-blue-800 mb-4">🎉 Submission Complete!</h2>
// // // // //             <p className="text-gray-700 text-md">
// // // // //               Your space has been submitted and is under review by our tech team.
// // // // //               <br />
// // // // //               Please allow 24–48 hours for approval.
// // // // //             </p>
// // // // //             <button
// // // // //               className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // // //               onClick={() => {
// // // // //                 setShowModal(false)
// // // // //                 navigate("/dashboard/space-owner")
// // // // //               }}
// // // // //             >
// // // // //               Go to Dashboard
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default ListYourSpaceForm

// // // // import React, { useState } from "react"
// // // // import { useNavigate } from "react-router-dom"
// // // // import { useSelector } from "react-redux"
// // // // import BasicInfo from "./BasicInfo"
// // // // import SpaceFeatures from "./Features"
// // // // import BrandingZones from "./BrandingOptions"
// // // // import ImageUpload from "./UploadImages"
// // // // import PricingAvailability from "./PricingAndAvailaablity"
// // // // import TermsAgreement from "./TermsAgreement"
// // // // import ReviewSubmit from "./RevieewAndSubmit"

// // // // const steps = [
// // // //   "Basic Info",
// // // //   "Space Features",
// // // //   "Branding Zones",
// // // //   "Image Uploads",
// // // //   "Pricing & Contact",
// // // //   "Terms & Agreement",
// // // //   "Review & Submit"
// // // // ]

// // // // const ListYourSpaceForm = () => {
// // // //   const navigate = useNavigate()
// // // //   const { token, user } = useSelector((state) => state.auth)

// // // //   const [formData, setFormData] = useState({
// // // //     brandingZones: [],
// // // //     customBrandingOptions: [],
// // // //     amenities: [],
// // // //     suggestedPricing: [],
// // // //     availability: [],
// // // //     bankDetails: {
// // // //       accountHolderName: "",
// // // //       accountNumber: "",
// // // //       ifscCode: "",
// // // //       upi: ""
// // // //     },
// // // //     demographics: {
// // // //       ageGroups: [],
// // // //       gender: "",
// // // //       incomeGroup: ""
// // // //     },
// // // //     images: {
// // // //       frontFacade: "",
// // // //       interiorView: "",
// // // //       brandingZone: "",
// // // //       heatMapPhoto: "",
// // // //       otherPhotos: []
// // // //     },
// // // //     location: { lat: "", lng: "", address: "" },
// // // //     agreedToTerms: false,
// // // //     authorizedToMonetize: false,
// // // //     heatMappingConsent: {
// // // //       freeTrial: false,
// // // //       clientTrialAllowed: false,
// // // //       cameraCount: 0,
// // // //       cameraTypes: [],
// // // //       cameraZonePhoto: ""
// // // //     }
// // // //   })

// // // //   const [currentStep, setCurrentStep] = useState(0)
// // // //   const [listingType, setListingType] = useState("basic")
// // // //   const [submitting, setSubmitting] = useState(false)
// // // //   const [showModal, setShowModal] = useState(false)
// // // //   const [showSuccess, setShowSuccess] = useState(false)

// // // //   const nextStep = () => {
// // // //     if (currentStep < steps.length - 1) {
// // // //       setCurrentStep((prev) => prev + 1)
// // // //     } else {
// // // //       if (listingType === "premium") {
// // // //         localStorage.setItem("listingFormData", JSON.stringify(formData))
// // // //         localStorage.setItem("listingType", listingType)
// // // //         navigate("/payment")
// // // //       } else {
// // // //         handleSubmit()
// // // //       }
// // // //     }
// // // //   }

// // // //   const prevStep = () => {
// // // //     if (currentStep > 0) setCurrentStep((prev) => prev - 1)
// // // //   }

// // // //   const handleSubmit = async () => {
// // // //     setSubmitting(true)
// // // //     try {
// // // //       const payload = {
// // // //         ...formData,
// // // //         submittedBy: user?._id,
// // // //         subscriptionPlan: listingType,
// // // //         role:user?.role
// // // //       }

// // // //       const res = await fetch("http://localhost:5000/api/space-owner/register-space", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${token}`
// // // //         },
// // // //         body: JSON.stringify(payload)
// // // //       })

// // // //       const data = await res.json()
// // // //       if (!res.ok) throw new Error(data.message || "Failed to submit")

// // // //       setShowSuccess(true)
// // // //       setTimeout(() => setShowModal(true), 1500)
// // // //     } catch (error) {
// // // //       alert(error.message)
// // // //     } finally {
// // // //       setSubmitting(false)
// // // //     }
// // // //   }

// // // //   const renderStep = () => {
// // // //     switch (currentStep) {
// // // //       case 0: return <BasicInfo formData={formData} setFormData={setFormData} />
// // // //       case 1: return <SpaceFeatures formData={formData} setFormData={setFormData} />
// // // //       case 2: return <BrandingZones formData={formData} setFormData={setFormData} />
// // // //       case 3: return <ImageUpload formData={formData} setFormData={setFormData} />
// // // //       case 4: return <PricingAvailability formData={formData} setFormData={setFormData} />
// // // //       case 5: return <TermsAgreement formData={formData} setFormData={setFormData} />
// // // //       case 6: return <ReviewSubmit formData={formData} />
// // // //       default: return null
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-4 py-10">
// // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-6 py-8">
// // // //         <h1 className="text-3xl font-bold text-blue-800 mb-6">List Your Space</h1>

// // // //         <div className="mb-6">
// // // //           <label className="block mb-2 text-md font-semibold text-gray-700">Choose Listing Type:</label>
// // // //           <div className="flex gap-4">
// // // //             <button
// // // //               onClick={() => setListingType("basic")}
// // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "basic" ? "bg-green-600" : "bg-gray-400"}`}
// // // //             >
// // // //               Basic (₹0)
// // // //             </button>
// // // //             <button
// // // //               onClick={() => setListingType("premium")}
// // // //               className={`px-4 py-2 rounded-lg text-white ${listingType === "premium" ? "bg-purple-600" : "bg-gray-400"}`}
// // // //             >
// // // //               Premium (₹999)
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         <p className="text-sm text-gray-600 mb-4">
// // // //           Step {currentStep + 1} of {steps.length}: <strong>{steps[currentStep]}</strong>
// // // //         </p>

// // // //         {renderStep()}

// // // //         <div className="flex justify-between mt-8">
// // // //           <button
// // // //             onClick={prevStep}
// // // //             disabled={currentStep === 0}
// // // //             className="px-4 py-2 rounded bg-gray-300 text-gray-800 disabled:opacity-50"
// // // //           >
// // // //             Back
// // // //           </button>

// // // //           <button
// // // //             onClick={nextStep}
// // // //             className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
// // // //             disabled={submitting}
// // // //           >
// // // //             {currentStep === steps.length - 1 ? (listingType === "premium" ? "Go to Payment" : "Submit") : "Next"}
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {showSuccess && (
// // // //         <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all">
// // // //           ✅ Space Registered Successfully!
// // // //         </div>
// // // //       )}

// // // //       {showModal && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // // //           <div className="bg-white rounded-xl p-8 max-w-md shadow-xl text-center">
// // // //             <h2 className="text-xl font-bold text-blue-800 mb-4">🎉 Submission Complete!</h2>
// // // //             <p className="text-gray-700 text-md">
// // // //               Your space has been submitted and is under review by our tech team.
// // // //               <br />
// // // //               Please allow 24–48 hours for approval.
// // // //             </p>
// // // //             <button
// // // //               className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // //               onClick={() => {
// // // //                 setShowModal(false)
// // // //                 navigate("/dashboard/space-owner")
// // // //               }}
// // // //             >
// // // //               Go to Dashboard
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ListYourSpaceForm

// // // import { useState } from "react"
// // // import BasicInfo from "./BasicInfo"
// // // import Features from "./Features"
// // // import BrandingOptions from "./BrandingOptions"
// // // import UploadImages from "./UploadImages"
// // // import PricingAvailability from "./PricingAndAvailaablity"
// // // import TermsAgreement from "./TermsAgreement"
// // // import ReviewSubmit from "./RevieewAndSubmit"
// // // import { useNavigate } from "react-router-dom"
// // // import { useSelector } from "react-redux"

// // // const steps = [
// // //   "Basic Info",
// // //   "Space Features",
// // //   "Branding Options",
// // //   "Upload Images",
// // //   "Pricing & Availability",
// // //   "Terms & Agreement",
// // //   "Review & Submit",
// // // ]

// // // export default function ListYourSpaceForm() {
// // //   const [step, setStep] = useState(0)
// // //   const [formData, setFormData] = useState({
// // //     subscriptionPlan: "free",
// // //     brandingZones: [],
// // //     customBrandingOptions: [],
// // //     suggestedPricing: [],
// // //     availability: [],
// // //     demographics: { ageGroups: [], gender: "", incomeGroup: "" },
// // //     images: {
// // //       frontFacade: "",
// // //       interiorView: "",
// // //       brandingZone: "",
// // //       heatMapPhoto: "",
// // //       otherPhotos: [],
// // //       brandingZones: [],
// // //       cameraViews: [],
// // //       mainArea: [],
// // //     },
// // //     heatMappingConsent: {
// // //       freeTrial: false,
// // //       clientTrialAllowed: false,
// // //       cameraCount: 0,
// // //       cameraTypes: [],
// // //       cameraZonePhoto: "",
// // //     },
// // //     bankDetails: {
// // //       accountHolderName: "",
// // //       accountNumber: "",
// // //       ifscCode: "",
// // //       upi: "",
// // //     },
// // //   })

// // //   const navigate = useNavigate()
// // //   const { token, user } = useSelector((state) => state.auth)

// // //   const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1))
// // //   const prevStep = () => setStep((prev) => Math.max(prev - 1, 0))

// // //   const handleSubmit = () => {
// // //     const payload = {
// // //       ...formData,
// // //       submittedBy: user?._id,
// // //     }

// // //     if (formData.subscriptionPlan === "premium") {
// // //       localStorage.setItem("pendingSpace", JSON.stringify(payload))
// // //       navigate("/payment")
// // //     } else {
// // //       fetch("http://localhost:5000/api/space-owner/register-space", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify(payload),
// // //       })
// // //         .then((res) => res.json())
// // //         .then((res) => {
// // //           alert("Space registered successfully!")
// // //           navigate("/dashboard/space-owner")
// // //         })
// // //         .catch((err) => {
// // //           console.error(err)
// // //           alert("Something went wrong. Try again.")
// // //         })
// // //     }
// // //   }

// // //   return (
// // //     <div className="max-w-5xl mx-auto p-6 space-y-6">
// // //       <h1 className="text-3xl font-bold text-blue-700">List Your Space</h1>
// // //       <div className="text-sm text-gray-500">Step {step + 1} of {steps.length}: {steps[step]}</div>

// // //       <div className="bg-white rounded shadow p-6 space-y-4">
// // //         {step === 0 && (
// // //           <BasicInfo formData={formData} setFormData={setFormData} />
// // //         )}
// // //         {step === 1 && (
// // //           <Features formData={formData} setFormData={setFormData} />
// // //         )}
// // //         {step === 2 && (
// // //           <BrandingOptions formData={formData} setFormData={setFormData} />
// // //         )}
// // //         {step === 3 && (
// // //           <UploadImages formData={formData} setFormData={setFormData} />
// // //         )}
// // //         {step === 4 && (
// // //           <PricingAvailability formData={formData} setFormData={setFormData} />
// // //         )}
// // //         {step === 5 && (
// // //           <TermsAgreement formData={formData} setFormData={setFormData} />
// // //         )}
// // //         {step === 6 && (
// // //           <ReviewSubmit formData={formData} />
// // //         )}

// // //         <div className="flex justify-between items-center mt-6">
// // //           {step > 0 ? (
// // //             <button
// // //               onClick={prevStep}
// // //               className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
// // //             >
// // //               Back
// // //             </button>
// // //           ) : <div />}

// // //           {step < steps.length - 1 ? (
// // //             <button
// // //               onClick={nextStep}
// // //               className="px-4 py-2 bg-blue-600 text-white rounded"
// // //             >
// // //               Next
// // //             </button>
// // //           ) : (
// // //             <button
// // //               onClick={handleSubmit}
// // //               className="px-6 py-2 bg-green-600 text-white rounded"
// // //             >
// // //               {formData.subscriptionPlan === "premium"
// // //                 ? "Proceed to Payment"
// // //                 : "Submit"}
// // //             </button>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // import React, { useState } from 'react'
// // import BasicInfo from './BasicInfo'
// // import Features from './Features'
// // import BrandingOptions from './BrandingOptions'
// // import UploadImages from './UploadImages'
// // import PricingAvailability from './PricingAndAvailaablity'
// // import TermsAgreement from './TermsAgreement'
// // import ReviewAndSubmit from './RevieewAndSubmit'

// // const ListYourSpaceForm = () => {
// //   const [step, setStep] = useState(1)
// //   const [formData, setFormData] = useState({
// //     listingType: 'basic',
// //     brandingZones: [],
// //     customBrandingOptions: [],
// //     suggestedPricing: [],
// //     availability: [],
// //     amenities: [],
// //     images: {},
// //     heatMappingConsent: {},
// //     bankDetails: {},
// //     footfall: {
// //       weekday: '',
// //       weekend: '',
// //       monthly: ''
// //     },
// //     demographics: {
// //       ageGroups: [],
// //       gender: '',
// //       incomeGroup: ''
// //     },
// //     panNumber: '',
// //     referralCode: ''
// //   })

// //   const nextStep = () => setStep(step + 1)
// //   const prevStep = () => setStep(step - 1)

// //   const renderStep = () => {
// //     switch (step) {
// //       case 1: return <BasicInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />
// //       case 2: return <Features formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
// //       case 3: return <BrandingOptions formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
// //       case 4: return <UploadImages formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
// //       case 5: return <PricingAvailability formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
// //       case 6: return <TermsAgreement formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
// //       case 7: return <ReviewAndSubmit formData={formData} prevStep={prevStep} />
// //       default: return <div>Invalid Step</div>
// //     }
// //   }

// //   return (
// //     <div className="max-w-5xl mx-auto p-6 space-y-6">
// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Choose Listing Type</label>
// //         <select
// //           value={formData.listingType}
// //           onChange={(e) => setFormData({ ...formData, listingType: e.target.value })}
// //           className="border p-2 rounded"
// //         >
// //           <option value="basic">Basic (Free - Max 3 spaces)</option>
// //           <option value="premium">Premium (With Heat Mapping & Boost)</option>
// //         </select>
// //       </div>
// //       {renderStep()}
// //     </div>
// //   )
// // }

// // export default ListYourSpaceForm

// import React, { useState } from 'react';
// import BasicInfo from './BasicInfo';
// import Features from './Features';
// import BrandingOptions from './BrandingOptions';
// import UploadImages from './UploadImages';
// import PricingAvailability from './PricingAndAvailaablity';
// import TermsAgreement from './TermsAgreement';
// import ReviewAndSubmit from './RevieewAndSubmit';
// import PaymentPage from '../pages/PaymentPage';

// const steps = [
//   "Basic Info",
//   "Space Features",
//   "Branding Options",
//   "Upload Images",
//   "Pricing & Availability",
//   "Terms Agreement",
//   "Review & Submit"
// ];

// const ListYourSpaceForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     listingType: 'basic',
//     brandingZones: [],
//     customBrandingOptions: [],
//     suggestedPricing: [],
//     availability: [],
//     amenities: [],
//     images: {},
//     heatMappingConsent: {},
//     bankDetails: {},
//     footfall: {},
//     demographics: {},
//   });

//   const nextStep = () => {
//     if (step < steps.length) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1: return <BasicInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />;
//       case 2: return <Features formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//       case 3: return <BrandingOptions formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//       case 4: return <UploadImages formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//       case 5: return <PricingAvailability formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//       case 6: return <TermsAgreement formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//       case 7: return <ReviewAndSubmit formData={formData} prevStep={prevStep} />;
//       default: return <div>Invalid step</div>;
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 space-y-6">
//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Choose Listing Type</label>
//         <select
//           value={formData.listingType}
//           onChange={(e) => setFormData({ ...formData, listingType: e.target.value })}
//           className="border p-2 rounded"
//         >
//           <option value="basic">Basic (Free - Max 3 spaces)</option>
//           <option value="premium">Premium (With Heat Mapping & Boost)</option>
//         </select>
//       </div>

//       <div className="text-sm text-gray-700">
//         <strong>Step {step}:</strong> {steps[step - 1]}
//       </div>

//       <div className="border p-4 rounded-md shadow-md bg-white">
//         {renderStep()}
//       </div>
//     </div>
//   );
// };

// export default ListYourSpaceForm;



import React, { useState } from 'react';
import Step1BasicInfo from './Step1BasicInfo';
import Step2Features from './Step2Features';
import Step3BrandingOptions from './Step3BrandingOptions';
import Step4UploadImages from './Step4UploadImages';
import Step5PricingAvailability from './Step5PricingAvailability';
import Step6TermsAgreement from './Step6HeatMappingCompliance';
import Step7ReviewAndSubmit from './Step7ReviewAndTerms';

export default function ListYourSpaceForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    spaceName: '',
    description: '',
    spaceType: '',
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    location: {
      lat: '',
      lng: '',
      address: '',
    },
    images: {
      frontFacade: '',
      interiorView: '',
      brandingZone: '',
      heatMapPhoto: '',
      otherPhotos: [],
    },
    availability: [],
    suggestedPrice: '',
    footfall: {
      weekday: '',
      weekend: '',
      monthly: '',
    },
    demographics: {
      ageGroups: '',
      gender: '',
      incomeGroup: '',
    },
    brandingZones: [],
    heatMappingConsent: {
      consentGiven: false,
      cameraCount: 0,
      heatMapProof: '',
    },
    panNumber: '',
    authorizedToMonetize: false,
    agreedToTerms: false,
    listingType: 'basic', // default
    referralCode: '',
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && (
        <Step1BasicInfo formData={formData} setFormData={setFormData} next={next} />
      )}
      {step === 2 && (
        <Step2Features formData={formData} setFormData={setFormData} next={next} back={back} />
      )}
      {step === 3 && (
        <Step3BrandingOptions formData={formData} setFormData={setFormData} next={next} back={back} />
      )}
      {step === 4 && (
        <Step4UploadImages formData={formData} setFormData={setFormData} next={next} back={back} />
      )}
      {step === 5 && (
        <Step5PricingAvailability formData={formData} setFormData={setFormData} next={next} back={back} />
      )}
      {step === 6 && (
        <Step6TermsAgreement formData={formData} setFormData={setFormData} next={next} back={back} />
      )}
      {step === 7 && (
        <Step7ReviewAndSubmit formData={formData} back={back} />
      )}
    </div>
  );
}
