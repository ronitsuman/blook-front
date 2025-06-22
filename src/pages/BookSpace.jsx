// // // src/pages/BookSpace.jsx
// // import { useLocation, useParams, useNavigate } from 'react-router-dom'
// // import { useState } from 'react'
// // import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'

// // export default function BookSpace() {
// //   const { id } = useParams()
// //   const navigate = useNavigate()
// //   const { state } = useLocation()
// //   const [step, setStep] = useState(1)
// //   const [form, setForm] = useState({
// //     campaignName: '',
// //     brandName: '',
// //     description: '',
// //     campaignType: '',
// //     audience: ''
// //   })

// //   const next = () => setStep(s => Math.min(s + 1, 4))
// //   const prev = () => setStep(s => Math.max(s - 1, 1))

// //   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 md:px-16 py-10 text-blue-900">
// //       <button onClick={() => navigate(-1)} className="text-sm text-blue-600 mb-6 hover:underline">&larr; Back to Space Details</button>

// //       <h1 className="text-3xl font-bold mb-6">Book Space</h1>
// //       <p className="text-gray-500 mb-10">Complete your booking for <span className="font-semibold text-blue-800">{state?.spaceName || 'this space'}</span></p>

// //       {/* Top Info Card */}
// //       <div className="flex flex-col md:flex-row items-center justify-between bg-white border p-4 rounded-xl shadow-sm mb-10">
// //         <div className="flex items-center gap-4 w-full md:w-3/4">
// //           <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
// //           <div className="space-y-1">
// //             <h2 className="text-lg font-semibold">{state?.spaceName}</h2>
// //             <p className="flex items-center text-sm text-gray-600"><MapPin className="w-4 h-4 mr-1" /> {state?.address?.split(',')[0]}</p>
// //             <p className="text-sm text-gray-500">👥 {state?.footfall || 0} weekday footfall &nbsp; • &nbsp; 💰 ₹{state?.price || 0}/month</p>
// //           </div>
// //         </div>
// //         <div className="hidden md:flex items-center gap-2 text-blue-700 font-semibold text-lg">
// //           Step {step} <span className="text-gray-400">/ 4</span>
// //         </div>
// //       </div>

// //       {/* Step Indicator */}
// //       <div className="flex justify-center gap-4 mb-10">
// //         {[1, 2, 3, 4].map(n => (
// //           <div key={n} className={`w-8 h-8 rounded-full border-2 ${step >= n ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white text-gray-500'} flex items-center justify-center transition-all`}>{n}</div>
// //         ))}
// //       </div>

// //       {/* Step 1 Form */}
// //       {step === 1 && (
// //         <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto animate-fade-in">
// //           <h2 className="text-xl font-semibold mb-6">Step 1: Campaign Details</h2>
// //           <div className="grid md:grid-cols-2 gap-6">
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Campaign Name *</label>
// //               <input type="text" name="campaignName" value={form.campaignName} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="e.g., Summer Product Launch" required />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Campaign Type *</label>
// //               <select name="campaignType" value={form.campaignType} onChange={handleChange} className="w-full border px-4 py-2 rounded">
// //                 <option value="">Select campaign type</option>
// //                 <option>Brand Awareness</option>
// //                 <option>Product Launch</option>
// //                 <option>Event Promotion</option>
// //                 <option>Retail Offer</option>
// //               </select>
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Brand/Company Name *</label>
// //               <input type="text" name="brandName" value={form.brandName} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Your brand name" required />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Target Audience</label>
// //               <input type="text" name="audience" value={form.audience} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="e.g., Young professionals 25-35" />
// //             </div>
// //           </div>
// //           <div className="mt-6">
// //             <label className="block text-sm font-medium mb-1">Campaign Description</label>
// //             <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full border px-4 py-2 rounded" placeholder="Describe your campaign objectives and key messages"></textarea>
// //           </div>
// //           <div className="flex justify-between mt-8">
// //             <button onClick={prev} disabled={step === 1} className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 border rounded disabled:opacity-30"><ArrowLeft className="w-4 h-4" /> Previous</button>
// //             <button onClick={next} className="flex items-center gap-1 px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Next <ArrowRight className="w-4 h-4" /></button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // src/pages/BookSpace.jsx
// import { useLocation, useParams, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import axios from 'axios'

// export default function BookSpace() {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const { state } = useLocation()
//   const [step, setStep] = useState(1)
//   const [form, setForm] = useState({
//     campaignName: '',
//     brandName: '',
//     description: '',
//     campaignType: '',
//     audience: '',
//     startDate: '',
//     endDate: '',
//     selectedZones: [],
//     services: [],
//     contactName: '',
//     contactEmail: '',
//     contactPhone: ''
//   })

//   const next = () => setStep(s => Math.min(s + 1, 4))
//   const prev = () => setStep(s => Math.max(s - 1, 1))

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
//   const toggleArrayItem = (key, value) => {
//     setForm(prev => ({
//       ...prev,
//       [key]: prev[key].includes(value)
//         ? prev[key].filter(item => item !== value)
//         : [...prev[key], value]
//     }))
//   }

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(`/api/bookings/${id}`, form)
//       alert('Booking submitted successfully')
//       navigate('/my-bookings')
//     } catch (error) {
//       console.error(error)
//       alert('Booking failed. Try again.')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 md:px-16 py-10 text-blue-900">
//       <button onClick={() => navigate(-1)} className="text-sm text-blue-600 mb-6 hover:underline">&larr; Back to Space Details</button>
//       <h1 className="text-3xl font-bold mb-6">Book Space</h1>
//       <p className="text-gray-500 mb-10">Complete your booking for <span className="font-semibold text-blue-800">{state?.spaceName || 'this space'}</span></p>

//       {/* Top Info Card */}
//       <div className="flex flex-col md:flex-row items-center justify-between bg-white border p-4 rounded-xl shadow-sm mb-10">
//         <div className="flex items-center gap-4 w-full md:w-3/4">
//           <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
//           <div className="space-y-1">
//             <h2 className="text-lg font-semibold">{state?.spaceName}</h2>
//             <p className="flex items-center text-sm text-gray-600"><MapPin className="w-4 h-4 mr-1" /> {state?.address?.split(',')[0]}</p>
//             <p className="text-sm text-gray-500">👥 {state?.footfall || 0} weekday footfall &nbsp; • &nbsp; 💰 ₹{state?.price || 0}/month</p>
//           </div>
//         </div>
//         <div className="hidden md:flex items-center gap-2 text-blue-700 font-semibold text-lg">
//           Step {step} <span className="text-gray-400">/ 4</span>
//         </div>
//       </div>

//       {/* Step Indicator */}
//       <div className="flex justify-center gap-4 mb-10">
//         {[1, 2, 3, 4].map(n => (
//           <div key={n} className={`w-8 h-8 rounded-full border-2 ${step >= n ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white text-gray-500'} flex items-center justify-center transition-all`}>{n}</div>
//         ))}
//       </div>

//       {/* Step 1: Campaign Details */}
//       {step === 1 && (
//         <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto animate-fade-in">
//           <h2 className="text-xl font-semibold mb-6">Step 1: Campaign Details</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Campaign Name *</label>
//               <input type="text" name="campaignName" value={form.campaignName} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="e.g., Summer Product Launch" required />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Campaign Type *</label>
//               <select name="campaignType" value={form.campaignType} onChange={handleChange} className="w-full border px-4 py-2 rounded">
//                 <option value="">Select campaign type</option>
//                 <option>Brand Awareness</option>
//                 <option>Product Launch</option>
//                 <option>Event Promotion</option>
//                 <option>Retail Offer</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Brand/Company Name *</label>
//               <input type="text" name="brandName" value={form.brandName} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Your brand name" required />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Target Audience</label>
//               <input type="text" name="audience" value={form.audience} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="e.g., Young professionals 25-35" />
//             </div>
//           </div>
//           <div className="mt-6">
//             <label className="block text-sm font-medium mb-1">Campaign Description</label>
//             <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full border px-4 py-2 rounded" placeholder="Describe your campaign objectives and key messages"></textarea>
//           </div>
//           <div className="flex justify-between mt-8">
//             <button onClick={prev} disabled={step === 1} className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 border rounded disabled:opacity-30"><ArrowLeft className="w-4 h-4" /> Previous</button>
//             <button onClick={next} className="flex items-center gap-1 px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Next <ArrowRight className="w-4 h-4" /></button>
//           </div>
//         </div>
//       )}

//       {/* Step 2: Dates */}
//       {step === 2 && (
//         <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto animate-fade-in">
//           <h2 className="text-xl font-semibold mb-6">Step 2: Select Duration & Dates</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-2">Start Date *</label>
//               <Calendar onChange={date => setForm({ ...form, startDate: date })} value={form.startDate} minDate={new Date()} />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">End Date *</label>
//               <Calendar onChange={date => setForm({ ...form, endDate: date })} value={form.endDate} minDate={form.startDate || new Date()} />
//             </div>
//           </div>
//           <div className="flex justify-between mt-8">
//             <button onClick={prev} className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 border rounded"><ArrowLeft className="w-4 h-4" /> Previous</button>
//             <button onClick={next} className="flex items-center gap-1 px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Next <ArrowRight className="w-4 h-4" /></button>
//           </div>
//         </div>
//       )}

//       {/* Step 3: Branding & Services */}
//       {step === 3 && (
//         <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto animate-fade-in">
//           <h2 className="text-xl font-semibold mb-6">Step 3: Select Branding Options</h2>
//           <div>
//             <p className="text-sm font-medium mb-2">Branding Zones *</p>
//             {['Facade', 'Wall', 'Reception', 'Standee'].map(zone => (
//               <label key={zone} className="flex items-center gap-2 mb-2">
//                 <input type="checkbox" checked={form.selectedZones.includes(zone)} onChange={() => toggleArrayItem('selectedZones', zone)} /> {zone}
//               </label>
//             ))}
//           </div>

//           <div className="mt-6">
//             <p className="text-sm font-medium mb-2">Extra Services (optional)</p>
//             {['Design Support', 'Printing', 'Installation'].map(service => (
//               <label key={service} className="flex items-center gap-2 mb-2">
//                 <input type="checkbox" checked={form.services.includes(service)} onChange={() => toggleArrayItem('services', service)} /> {service}
//               </label>
//             ))}
//           </div>

//           <div className="flex justify-between mt-8">
//             <button onClick={prev} className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 border rounded"><ArrowLeft className="w-4 h-4" /> Previous</button>
//             <button onClick={next} className="flex items-center gap-1 px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Next <ArrowRight className="w-4 h-4" /></button>
//           </div>
//         </div>
//       )}

//       {/* Step 4: Final Details & Submit */}
//       {step === 4 && (
//         <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto animate-fade-in">
//           <h2 className="text-xl font-semibold mb-6">Step 4: Final Contact & Submit</h2>
//           <div className="grid gap-4">
//             <input type="text" name="contactName" placeholder="Contact Person" value={form.contactName} onChange={handleChange} className="border px-4 py-2 rounded w-full" required />
//             <input type="email" name="contactEmail" placeholder="Email" value={form.contactEmail} onChange={handleChange} className="border px-4 py-2 rounded w-full" required />
//             <input type="tel" name="contactPhone" placeholder="Phone Number" value={form.contactPhone} onChange={handleChange} className="border px-4 py-2 rounded w-full" required />
//           </div>

//           <div className="flex justify-between mt-8">
//             <button onClick={prev} className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 border rounded"><ArrowLeft className="w-4 h-4" /> Previous</button>
//             <button onClick={handleSubmit} className="flex items-center gap-1 px-6 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">Submit Booking</button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// src/pages/BookSpace.jsx
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function BookSpace() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const { user, token } = useSelector(state => state.auth)

  const [step, setStep] = useState(1)
  const [isVerified, setIsVerified] = useState(null)
  const [form, setForm] = useState({
    campaignName: '',
    brandName: '',
    description: '',
    campaignType: '',
    audience: ''
  })

  const next = () => setStep(s => Math.min(s + 1, 4))
  const prev = () => setStep(s => Math.max(s - 1, 1))
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  // ✅ Check advertiser profile status
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/advertiser/profile', {
          headers: { Authorization: `Bearer ${token}` }
        })
        const profile = res.data
        if (!profile || !profile.gstNumber || !profile.idProofUrl || !profile.companyName) {
          setIsVerified(false)
        } else {
          setIsVerified(true)
        }
      } catch (err) {
        setIsVerified(false)
      }
    }

    if (user?.role === 'advertiser') fetchProfile()
  }, [token, user])

  // ⛔ Unverified advertiser gets redirected to profile form
  if (user?.role === 'advertiser' && isVerified === false) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div className="max-w-md w-full bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Profile Incomplete</h2>
          <p className="text-gray-600 mb-4">To book any space, you must complete your advertiser profile and submit required documents.</p>
          <button onClick={() => navigate('/profile')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Complete Profile
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 md:px-16 py-10 text-blue-900">
      <button onClick={() => navigate(-1)} className="text-sm text-blue-600 mb-6 hover:underline">&larr; Back to Space Details</button>

      <h1 className="text-3xl font-bold mb-6">Book Space</h1>
      <p className="text-gray-500 mb-10">Complete your booking for <span className="font-semibold text-blue-800">{state?.spaceName || 'this space'}</span></p>

      {/* Top Info Card */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white border p-4 rounded-xl shadow-sm mb-10">
        <div className="flex items-center gap-4 w-full md:w-3/4">
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">{state?.spaceName}</h2>
            <p className="flex items-center text-sm text-gray-600"><MapPin className="w-4 h-4 mr-1" /> {state?.address?.split(',')[0]}</p>
            <p className="text-sm text-gray-500">👥 {state?.footfall || 0} weekday footfall &nbsp; • &nbsp; 💰 ₹{state?.price || 0}/month</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-blue-700 font-semibold text-lg">
          Step {step} <span className="text-gray-400">/ 4</span>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center gap-4 mb-10">
        {[1, 2, 3, 4].map(n => (
          <div key={n} className={`w-8 h-8 rounded-full border-2 ${step >= n ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white text-gray-500'} flex items-center justify-center transition-all`}>{n}</div>
        ))}
      </div>

      {/* Step 1 Form */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-xl font-semibold mb-6">Step 1: Campaign Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Campaign Name *</label>
              <input type="text" name="campaignName" value={form.campaignName} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="e.g., Summer Product Launch" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Campaign Type *</label>
              <select name="campaignType" value={form.campaignType} onChange={handleChange} className="w-full border px-4 py-2 rounded">
                <option value="">Select campaign type</option>
                <option>Brand Awareness</option>
                <option>Product Launch</option>
                <option>Event Promotion</option>
                <option>Retail Offer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Brand/Company Name *</label>
              <input type="text" name="brandName" value={form.brandName} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Your brand name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Target Audience</label>
              <input type="text" name="audience" value={form.audience} onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="e.g., Young professionals 25-35" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">Campaign Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full border px-4 py-2 rounded" placeholder="Describe your campaign objectives and key messages"></textarea>
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={prev} disabled={step === 1} className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 border rounded disabled:opacity-30"><ArrowLeft className="w-4 h-4" /> Previous</button>
            <button onClick={next} className="flex items-center gap-1 px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Next <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}
    </div>
  )
}
