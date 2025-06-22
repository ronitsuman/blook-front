// // // src/pages/SpaceDetails.jsx
// // import { useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom'
// // import { useSelector } from 'react-redux'
// // import axiosInstance from '../api/axiosInstance'
// // import { MapPin, Info, ShieldAlert, IndianRupee } from 'lucide-react'

// // export default function SpaceDetails() {
// //   const { id } = useParams()
// //   const [space, setSpace] = useState(null)
// //   const [activeTab, setActiveTab] = useState('more')
// //   const { user } = useSelector(state => state.auth)

// //   useEffect(() => {
// //     const fetchDetails = async () => {
// //       try {
// //         const res = await axiosInstance.get(`/space-owner/public/${id}`)
// //         setSpace(res.data)
// //         console.log(res.data)
// //       } catch (err) {
// //         console.error('Failed to load space details:', err)
// //       }
// //     }
// //     fetchDetails()
// //   }, [id])

// //   if (!space) return <div className="text-center py-20 text-blue-600 font-medium">Loading...</div>

// //   const isAdmin = user?.role === 'admin'

// //   return (
// //     <div className="min-h-screen bg-white text-blue-900">
// //       <div className="max-w-6xl mx-auto p-6">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           <div className="space-y-4">
// //             <img src={space.images?.frontFacade} alt="Front" className="rounded shadow w-full h-64 object-cover" />
// //             {space.images?.interiorView && <img src={space.images.interiorView} alt="Interior" className="rounded shadow w-full h-64 object-cover" />}
// //             {space.images?.brandingZone && <img src={space.images.brandingZone} alt="Branding" className="rounded shadow w-full h-64 object-cover" />}
// //           </div>

// //           <div className="space-y-3">
// //             <h1 className="text-3xl font-bold">{space.spaceName}</h1>
// //             <p className="text-gray-700">{space.description}</p>
// //             <p className="flex items-center gap-2 text-sm text-gray-600">
// //               <MapPin className="w-4 h-4" /> {space.location?.address}
// //             </p>
// //             <p className="text-sm font-medium">Type: {space.spaceType}</p>
// //             <p className="text-sm">Plan: {space.subscriptionPlan} ({space.isPremium ? 'Premium' : 'Free'})</p>
// //             <button className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded shadow flex items-center gap-2">
// //               <ShieldAlert className="w-4 h-4" /> Report This Space
// //             </button>
// //           </div>
// //         </div>

// //         <div className="mt-12 border-t pt-6">
// //           <div className="flex gap-6 border-b mb-4">
// //             <button onClick={() => setActiveTab('more')} className={activeTab === 'more' ? 'font-bold border-b-2 border-blue-600 pb-2' : 'text-gray-500'}>More</button>
// //             <button onClick={() => setActiveTab('pricing')} className={activeTab === 'pricing' ? 'font-bold border-b-2 border-blue-600 pb-2' : 'text-gray-500'}>Pricing</button>
// //             <button onClick={() => setActiveTab('amenities')} className={activeTab === 'amenities' ? 'font-bold border-b-2 border-blue-600 pb-2' : 'text-gray-500'}>Amenities</button>
// //             {isAdmin && <button onClick={() => setActiveTab('admin')} className={activeTab === 'admin' ? 'font-bold border-b-2 border-blue-600 pb-2' : 'text-gray-500'}>Admin View</button>}
// //           </div>

// //           {activeTab === 'more' && (
// //             <div className="space-y-3">
// //               <p><strong>Footfall:</strong> Weekday: {space.footfall?.weekday}, Weekend: {space.footfall?.weekend}</p>
// //               <p><strong>Target Audience:</strong> {space.demographics?.ageGroups?.join(', ')} | {space.demographics?.gender} | {space.demographics?.incomeGroup}</p>
// //               <p><strong>Branding Zones:</strong></p>
// //               <ul className="list-disc ml-6">
// //                 {space.brandingZones?.map((zone, idx) => (
// //                   <li key={idx}>{zone.type} ({zone.sizeSqFt} sqft)</li>
// //                 ))}
// //               </ul>
// //               <iframe
// //                 title="map"
// //                 className="w-full h-64 mt-4 border rounded"
// //                 src={`https://maps.google.com/maps?q=${space.location?.lat},${space.location?.lng}&z=15&output=embed`}
// //                 allowFullScreen
// //               ></iframe>
// //             </div>
// //           )}

// //           {activeTab === 'pricing' && (
// //             <div className="space-y-2">
// //               {space.suggestedPricing?.length > 0 ? space.suggestedPricing.map((item, i) => (
// //                 <div key={i} className="bg-blue-50 px-4 py-2 rounded">
// //                   <p><strong>{item.brandingType}</strong>: ₹{item.pricePerMonth}/mo</p>
// //                 </div>
// //               )) : <p>No pricing data available.</p>}
// //             </div>
// //           )}

// //           {activeTab === 'amenities' && (
// //             <div>
// //               {space.amenities?.length > 0 ? (
// //                 <ul className="list-disc ml-6">
// //                   {space.amenities.map((item, i) => <li key={i}>{item}</li>)}
// //                 </ul>
// //               ) : <p>No amenities listed.</p>}
// //             </div>
// //           )}

// //           {activeTab === 'admin' && isAdmin && (
// //             <div className="bg-gray-50 p-4 rounded">
// //               <p><strong>Submitted By:</strong> {space.fullName} ({space.email})</p>
// //               <p><strong>Contact:</strong> {space.phone}</p>
// //               <p><strong>Status:</strong> {space.status}</p>
// //               <p><strong>Referral Code:</strong> {space.referralCode || 'N/A'}</p>
// //               <p><strong>Space Code:</strong> {space.spaceCode}</p>
// //               <p><strong>Created:</strong> {new Date(space.createdAt).toLocaleString()}</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // src/pages/SpaceDetails.jsx
// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
// import axiosInstance from "../api/axiosInstance"
// import { CalendarDays, Camera, Star } from "lucide-react"
// import dayjs from "dayjs"
// import Map from "../components/Map"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel"
// import { useSelector } from "react-redux"

// export default function SpaceDetails() {
//   const { id } = useParams()
//   const { user } = useSelector((state) => state.auth)
//   const [space, setSpace] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchSpace = async () => {
//       try {
//         const res = await axiosInstance.get(`/space-owner/public/${id}`)
//         setSpace(res.data)
//       } catch (err) {
//         console.error("Failed to fetch space", err)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchSpace()
//   }, [id])

//   if (loading) return <div className="text-center py-20 text-lg">Loading space details...</div>
//   if (!space) return <div className="text-center py-20 text-lg">Space not found</div>

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-blue-900 px-4 md:px-16 py-8">
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Left: Photos Carousel */}
//         <div>
//           <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
//             {Object.values(space.images).filter(Boolean).map((img, i) => (
//               <div key={i}>
//                 <img src={img} alt={`space-photo-${i}`} className="rounded-xl" />
//               </div>
//             ))}
//           </Carousel>
//         </div>

//         {/* Right: Details */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//             {space.isPremium && <span className="px-3 py-1 bg-yellow-300 text-yellow-800 rounded-full text-sm">Premium</span>}
//             {space.heatMappingConsent?.cameraCount > 1 && <span className="flex items-center gap-1 px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm"><Camera className="w-4 h-4" /> {space.heatMappingConsent.cameraCount} Cameras</span>}
//           </div>

//           <h1 className="text-3xl font-bold">{space.spaceName}</h1>
//           <p className="text-gray-700 text-lg">{space.description}</p>
//           <p className="text-sm text-gray-500">Posted on {dayjs(space.createdAt).format("DD MMM YYYY, hh:mm A")}</p>

//           <div className="mt-4">
//             <h3 className="font-semibold text-lg mb-1">Submitted By</h3>
//             <p className="text-sm text-gray-700">{space.fullName} ({space.email})</p>
//           </div>

//           <div className="mt-4">
//             <h3 className="font-semibold text-lg mb-1">Demographics</h3>
//             <ul className="text-sm text-gray-700 list-disc ml-5">
//               <li>Age Groups: {space.demographics?.ageGroups?.join(", ")}</li>
//               <li>Gender: {space.demographics?.gender}</li>
//               <li>Income Group: {space.demographics?.incomeGroup}</li>
//             </ul>
//           </div>

//           <div className="mt-6">
//             <h3 className="font-semibold text-lg mb-1">Amenities</h3>
//             <div className="flex flex-wrap gap-2">
//               {space.amenities?.map((item, i) => (
//                 <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">{item}</span>
//               ))}
//             </div>
//           </div>

//           <div className="mt-6">
//             <h3 className="font-semibold text-lg mb-1">Pricing</h3>
//             {space.suggestedPricing?.length ? (
//               <ul className="text-sm text-gray-800 list-disc ml-5">
//                 {space.suggestedPricing.map((item, i) => (
//                   <li key={i}>{item.brandingType}: ₹{item.pricePerMonth}/month</li>
//                 ))}
//               </ul>
//             ) : <p className="text-sm text-gray-500">Pricing not provided</p>}
//           </div>

//           <div className="mt-6">
//             <h3 className="font-semibold text-lg mb-1">Location</h3>
//             <Map lat={space.location?.lat} lng={space.location?.lng} height="300px" />
//             <p className="text-sm text-gray-700 mt-1">{space.location?.address}</p>
//           </div>

//           <div className="mt-8">
//             <button className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 transition">Report This Space</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// 
// 
// src/pages/SpaceDetails.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { MapPin, Star, Camera, Send, X } from 'lucide-react'
import { Carousel } from 'react-responsive-carousel'
import { useSelector } from 'react-redux'
import Calendar from 'react-calendar'
import dayjs from 'dayjs'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-calendar/dist/Calendar.css'
import Map from '../components/Map'

export default function SpaceDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)

  const [space, setSpace] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()])
  const [showSuccess, setShowSuccess] = useState(false)
  const [tab, setTab] = useState('details')
  const [fullscreenImg, setFullscreenImg] = useState(null)

  const isNotSpaceOwner = user?.role !== 'space-owner'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/space-owner/public/${id}`)
        setSpace(res.data)
      } catch (err) {
        console.error('Error fetching space:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  const handleBooking = async () => {
    if (!user) return navigate('/login')
     navigate('/book/:id')
  }

// const handleBooking = async () => {
//     if (!user) return navigate('/login');
  
//     try {
//       const [startDate, endDate] = selectedDates;
  
//       const res = await axiosInstance.post(`/advertiser/book-space/${space._id}`, {
//         brandingType: space.brandingTypes[0],
//         startDate,
//         endDate,
//         notes: 'Booking from SpaceDetails page',
//       });
  
//       // ✅ Navigate after successful booking
//     //   navigate(`/book-space/${space._id}`, {
//     //     state: {
//     //       bookingId: res.data._id, // agar backend response me _id ya bookingId return hota ho
//     //       space,
//     //       startDate,
//     //       endDate
//     //     }
//     //   });
//     } catch (err) {
//       alert(err?.response?.data?.message || 'Booking failed');
//     }
//   };
  

  if (loading) return <div className="text-center py-10">Loading space...</div>
  if (!space) return <div className="text-center py-10 text-red-500">Space not found</div>

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white min-h-screen px-4 md:px-10 py-8 text-blue-900">
      <button className="text-sm text-blue-600 mb-4 hover:underline" onClick={() => navigate(-1)}>&larr; Back to Spaces</button>

      {fullscreenImg && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <img src={fullscreenImg} className="max-w-full max-h-full" alt="Zoomed" />
          <button className="absolute top-6 right-6 text-white text-xl" onClick={() => setFullscreenImg(null)}><X /></button>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <div className="border rounded-xl overflow-hidden">
            <Carousel autoPlay infiniteLoop showThumbs={true} showStatus={false}>
              {Object.values(space.images).filter(Boolean).map((img, i) => (
                <div key={i} onClick={() => setFullscreenImg(img)} className="cursor-zoom-in">
                  <img src={img} alt={`img-${i}`} className="max-h-[500px] object-cover w-full" />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="flex flex-wrap gap-3">
            {space.tags?.map((tag, i) => <span key={i} className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">{tag}</span>)}
            {space.heatMappingConsent?.cameraCount > 1 && (
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Camera className="w-4 h-4" /> {space.heatMappingConsent.cameraCount} Cameras
              </span>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-1 text-blue-900">{space.spaceName}</h1>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {space.location?.address?.split(',')[0]}
            </p>
            <p className="text-yellow-600 mt-1 text-sm flex items-center gap-2">
              <Star className="w-4 h-4" /> 4.8 <span className="text-gray-500">(2 reviews)</span>
            </p>
            <p className="mt-4 text-gray-800 text-sm leading-relaxed">{space.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-white border rounded-lg p-4 shadow-sm text-sm">
            <div>
              <p className="font-bold text-lg">{space.footfall?.weekday || 0}</p>
              <p>Weekday Footfall</p>
            </div>
            <div>
              <p className="font-bold text-lg">{space.footfall?.weekend || 0}</p>
              <p>Weekend Footfall</p>
            </div>
            <div>
              <p className="font-bold text-lg">{space.totalArea || 2500} sq ft</p>
              <p>Total Area</p>
            </div>
            <div>
              <p className="font-bold text-lg">6 AM - 10 PM</p>
              <p>Access Hours</p>
            </div>
          </div>

          <div className="border-b flex gap-6 mt-6 text-sm overflow-x-auto">
            {['details', 'amenities', 'demographics', 'reviews'].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-2 capitalize ${tab === t ? 'border-b-2 border-blue-600 font-semibold text-blue-800' : 'text-gray-500 hover:text-blue-500'}`}
              >{t}</button>
            ))}
          </div>

          {tab === 'details' && (
            <div className="mt-4 space-y-2 text-sm">
              <p><strong>Next Available:</strong> 2024-02-01</p>
              <p><strong>Min Duration:</strong> 1 month</p>
              <p><strong>Pricing:</strong></p>
              <ul className="list-disc ml-6">
                {space.suggestedPricing?.map((p, i) => (
                  <li key={i}>{p.brandingType}: ₹{p.pricePerMonth}/mo</li>
                )) || 'N/A'}
              </ul>
            </div>
          )}

          {tab === 'amenities' && (
            <div className="mt-4 flex flex-wrap gap-2">
              {space.amenities?.map((item, i) => (
                <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{item}</span>
              )) || 'N/A'}
            </div>
          )}

          {tab === 'demographics' && (
            <div className="mt-4 space-y-2 text-sm">
              <p><strong>Age Groups:</strong> {space.demographics?.ageGroups?.join(', ')}</p>
              <p><strong>Gender:</strong> {space.demographics?.gender}</p>
              <p><strong>Income Group:</strong> {space.demographics?.incomeGroup}</p>
            </div>
          )}

          {tab === 'reviews' && (
            <div className="mt-4 text-sm text-gray-500 italic">No reviews yet.</div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <p className="text-xl font-bold text-blue-800">₹{space.suggestedPricing?.[0]?.pricePerMonth || 8000}</p>
            <p className="text-sm text-gray-500">per month</p>
            <p className="mt-2 text-sm text-gray-600">Next Available: <strong>2024-02-01</strong></p>
            <p className="text-sm text-gray-600">Min Duration: <strong>1 month</strong></p>
            <Calendar
              selectRange
              value={selectedDates}
              onChange={setSelectedDates}
              className="mt-4 border rounded w-full"
            />
            {isNotSpaceOwner && (
              <>
                <button onClick={handleBooking} className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  {user ? 'Book Now' : 'Login to Book'}
                </button>
                <button className="w-full mt-2 border border-blue-600 text-blue-700 py-2 rounded hover:bg-blue-50">Request Custom Quote</button>
              </>
            )}
          </div>

          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-lg mb-1">Space Owner</h3>
            <p className="text-sm">{space.fullName}</p>
            <p className="text-xs text-gray-500">Member Since: Jan 2023</p>
            <p className="text-xs text-gray-500">Total Spaces: 3</p>
            <div className="flex gap-2 mt-2">
              <button className="bg-gray-100 px-3 py-1 rounded text-sm">Message</button>
              <button className="bg-gray-100 px-3 py-1 rounded text-sm">Call</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border">
            <h3 className="font-semibold text-lg mb-1">Location</h3>
            <Map lat={space.location?.lat} lng={space.location?.lng} height="200px" />
            <p className="text-xs text-gray-600 mt-2">{space.location?.address}</p>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          Booking successful!
        </div>
      )}
    </div>
  )
}