
// import { useState } from "react"
// import { MapPin, Star, Search } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"

// const dummySpaces = [
//   {
//     id: 1,
//     name: "Sunshine Apartments RWA",
//     city: "Andheri East, Mumbai",
//     type: "RWA / Housing Society",
//     image: "https://via.placeholder.com/300x200?text=RWA",
//     price: 8000,
//     weekday: 500,
//     weekend: 800,
//     tags: ["Featured", "Heat Map"],
//     rating: 4.8,
//     reviews: 18,
//     branding: ["Wall Space", "Facade", "Standee"],
//   },
//   {
//     id: 2,
//     name: "Green Valley Hospital",
//     city: "Sector 18, Noida",
//     type: "Hospital",
//     image: "https://via.placeholder.com/300x200?text=Hospital",
//     price: 7000,
//     weekday: 2000,
//     weekend: 4000,
//     tags: ["Heat Map"],
//     rating: 4.5,
//     reviews: 15,
//     branding: ["Waiting Area", "Reception", "Corridor"],
//   },
// ]

// export default function Browse() {
//   const { user } = useAuth()
//   const navigate = useNavigate()
//   const [query, setQuery] = useState("")
//   const [maxPrice, setMaxPrice] = useState(30000)
//   const [footfall, setFootfall] = useState(2000)
//   const [featuredOnly, setFeaturedOnly] = useState(false)
//   const [heatMapOnly, setHeatMapOnly] = useState(false)
//   const [cityFilter, setCityFilter] = useState("")
//   const [ageGroup, setAgeGroup] = useState("")
//   const [brandingType, setBrandingType] = useState("")

//   const filteredSpaces = dummySpaces.filter(space => {
//     const matchesSearch = space.name.toLowerCase().includes(query.toLowerCase())
//     const matchesPrice = space.price <= maxPrice
//     const matchesFootfall = space.weekend <= footfall
//     const matchesFeatured = !featuredOnly || space.tags.includes("Featured")
//     const matchesHeatMap = !heatMapOnly || space.tags.includes("Heat Map")
//     const matchesCity = !cityFilter || space.city.includes(cityFilter)
//     const matchesAge = !ageGroup || (space.ageGroup && space.ageGroup.includes(ageGroup))
//     const matchesBranding = !brandingType || space.branding.includes(brandingType)
//     return matchesSearch && matchesPrice && matchesFootfall && matchesFeatured && matchesHeatMap && matchesCity && matchesAge && matchesBranding
//   })

//   const handleViewDetails = (id) => {
//     if (!user) {
//       navigate("/login")
//     } else {
//       navigate(`/space/${id}`)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white text-blue-900 font-sans">
//       <section className="bg-white py-12 px-4 md:px-12 text-center border-b">
//         <h1 className="text-3xl md:text-5xl font-bold mb-2">Explore Advertising Spaces</h1>
//         <p className="text-base md:text-lg text-gray-600">Find the perfect spots for your next campaign</p>
//       </section>

//       <section className="max-w-[1440px] mx-auto py-8 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="md:col-span-3 bg-blue-50 p-6 rounded-lg shadow-md">
//           <div className="flex flex-col gap-6">
//             <div className="flex gap-3 items-center">
//               <Search className="w-6 h-6 text-blue-600" />
//               <input
//                 type="text"
//                 placeholder="Search by name or city..."
//                 value={query}
//                 onChange={e => setQuery(e.target.value)}
//                 className="w-full text-base px-4 py-2 border rounded focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Price (max ₹{maxPrice})</label>
//               <input
//                 type="range"
//                 min="0"
//                 max="30000"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Footfall (max {footfall})</label>
//               <input
//                 type="range"
//                 min="0"
//                 max="10000"
//                 value={footfall}
//                 onChange={(e) => setFootfall(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>

            
//             <div>
//               <label className="text-sm font-medium text-gray-800">City</label>
//               <select
//                 value={cityFilter}
//                 onChange={e => setCityFilter(e.target.value)}
//                 className="w-full border px-4 py-2 rounded mt-1"
//               >
//                 <option value="">All Cities</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Noida">Noida</option>
//                 <option value="Delhi">Delhi</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Target Age Group</label>
//               <select
//                 value={ageGroup}
//                 onChange={e => setAgeGroup(e.target.value)}
//                 className="w-full border px-4 py-2 rounded mt-1"
//               >
//                 <option value="">All</option>
//                 <option value="18-24">18-24</option>
//                 <option value="25-34">25-34</option>
//                 <option value="35-50">35-50</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Branding Type</label>
//               <select
//                 value={brandingType}
//                 onChange={e => setBrandingType(e.target.value)}
//                 className="w-full border px-4 py-2 rounded mt-1"
//               >
//                 <option value="">All</option>
//                 <option value="Wall Space">Wall Space</option>
//                 <option value="Reception">Reception</option>
//                 <option value="Waiting Area">Waiting Area</option>
//               </select>
//             </div>


// <div className="flex gap-6 text-base">
//               <label>
//                 <input type="checkbox" checked={featuredOnly} onChange={() => setFeaturedOnly(!featuredOnly)} /> Featured only
//               </label>
//               <label>
//                 <input type="checkbox" checked={heatMapOnly} onChange={() => setHeatMapOnly(!heatMapOnly)} /> Heat Map only
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="md:col-span-1 text-sm space-y-2">
//           <h3 className="text-blue-800 font-bold text-lg">Results</h3>
//           <p>{filteredSpaces.length} spaces found</p>
//         </div>
//       </section>

//       <section className="max-w-[1440px] mx-auto px-4 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {filteredSpaces.map(space => (
//           <div key={space.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
//             <img src={space.image} alt={space.name} className="w-full h-56 object-cover" />
//             <div className="p-6">
//               <div className="flex gap-3 mb-2">
//                 {space.tags.map((tag, i) => (
//                   <span key={i} className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <h3 className="font-bold text-blue-900 text-lg">{space.name}</h3>
//               <p className="text-sm text-gray-600">{space.type}</p>
//               <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
//                 <MapPin className="w-5 h-5" /> {space.city}
//               </p>
//               <div className="text-sm text-gray-700 mt-3 space-y-1">
//                 <p>Weekday: <strong>{space.weekday}</strong></p>
//                 <p>Weekend: <strong>{space.weekend}</strong></p>
//               </div>
//               <div className="flex gap-2 mt-3 flex-wrap">
//                 {space.branding.map((zone, i) => (
//                   <span key={i} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">{zone}</span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center mt-5 text-base">
//                 <span className="text-blue-700 font-bold">₹{space.price}</span>
//                 <span className="flex items-center gap-1 text-yellow-600">
//                   <Star className="w-5 h-5" /> {space.rating} ({space.reviews})
//                 </span>
//               </div>
//               <div className="flex gap-3 mt-5">
//                 <button
//                   onClick={() => handleViewDetails(space.id)}
//                   className="w-full py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                 >
//                   View Details
//                 </button>
//                 <button className="w-full py-2 text-sm bg-white border border-blue-600 text-blue-700 rounded hover:bg-blue-50 transition">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   )
// }

// // src/pages/Browse.// src/pages/Browse.jsx// src/pages/Browse.jsx
// import { useState, useEffect } from "react"
// import { MapPin, Star, Search } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import axiosInstance from "../api/axiosInstance"

// export default function Browse() {
//   const user = useSelector(state => state.auth.user)
//   const navigate = useNavigate()
//   const [query, setQuery] = useState("")
//   const [maxPrice, setMaxPrice] = useState(30000)
//   const [footfall, setFootfall] = useState(2000)
//   const [featuredOnly, setFeaturedOnly] = useState(false)
//   const [heatMapOnly, setHeatMapOnly] = useState(false)
//   const [cityFilter, setCityFilter] = useState("")
//   const [ageGroup, setAgeGroup] = useState("")
//   const [brandingType, setBrandingType] = useState("")
//   const [spaces, setSpaces] = useState([])

//   useEffect(() => {
//     const fetchSpaces = async () => {
//       try {
//         const res = await axiosInstance.get("/space-owner/public")
//         setSpaces(res.data) // assuming response is an array
//       } catch (err) {
//         console.error("Failed to fetch spaces", err)
//       }
//     }
//     fetchSpaces()
//   }, [])

//   const filteredSpaces = spaces.filter(space => {
//     const matchesSearch = space.spaceName?.toLowerCase().includes(query.toLowerCase())
//     const matchesPrice = !space.suggestedPricing?.length || space.suggestedPricing[0]?.pricePerMonth <= maxPrice
//     const matchesFootfall = space.footfall?.weekend <= footfall
//     const matchesFeatured = !featuredOnly || space.tags?.includes("Featured")
//     const matchesHeatMap = !heatMapOnly || space.tags?.includes("Heat Map")
//     const matchesCity = !cityFilter || space.location?.address?.includes(cityFilter)
//     const matchesAge = !ageGroup || space.demographics?.ageGroups?.includes(ageGroup)
//     const brandingTypes = space.brandingZones?.map(b => b.type) || []
//     const matchesBranding = !brandingType || brandingTypes.includes(brandingType)
//     return matchesSearch && matchesPrice && matchesFootfall && matchesFeatured && matchesHeatMap && matchesCity && matchesAge && matchesBranding
//   })

//   const handleViewDetails = (id) => {
//     if (!user) navigate("/login")
//     else navigate(`/space/${id}`)
//   }

//   const handleBookNow = (id) => {
//     if (!user) navigate("/login")
//     else navigate(`/space/${id}/book`)
//   }

//   return (
//     <div className="min-h-screen bg-white text-blue-900 font-sans">
//       <section className="bg-white py-12 px-4 md:px-12 text-center border-b">
//         <h1 className="text-3xl md:text-5xl font-bold mb-2">Explore Advertising Spaces</h1>
//         <p className="text-base md:text-lg text-gray-600">Find the perfect spots for your next campaign</p>
//       </section>

//       <section className="max-w-[1440px] mx-auto py-8 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="md:col-span-3 bg-blue-50 p-6 rounded-lg shadow-md">
//           <div className="flex flex-col gap-6">
//             <div className="flex gap-3 items-center">
//               <Search className="w-6 h-6 text-blue-600" />
//               <input
//                 type="text"
//                 placeholder="Search by name or city..."
//                 value={query}
//                 onChange={e => setQuery(e.target.value)}
//                 className="w-full text-base px-4 py-2 border rounded focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Price (max ₹{maxPrice})</label>
//               <input
//                 type="range"
//                 min="0"
//                 max="30000"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Footfall (max {footfall})</label>
//               <input
//                 type="range"
//                 min="0"
//                 max="10000"
//                 value={footfall}
//                 onChange={(e) => setFootfall(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">City</label>
//               <input
//                 type="text"
//                 placeholder="Enter city..."
//                 value={cityFilter}
//                 onChange={e => setCityFilter(e.target.value)}
//                 className="w-full px-4 py-2 border rounded"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Target Age Group</label>
//               <select
//                 value={ageGroup}
//                 onChange={e => setAgeGroup(e.target.value)}
//                 className="w-full border px-4 py-2 rounded mt-1"
//               >
//                 <option value="">All</option>
//                 <option value="18-24">18-24</option>
//                 <option value="25-34">25-34</option>
//                 <option value="35-50">35-50</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-800">Branding Type</label>
//               <select
//                 value={brandingType}
//                 onChange={e => setBrandingType(e.target.value)}
//                 className="w-full border px-4 py-2 rounded mt-1"
//               >
//                 <option value="">All</option>
//                 <option value="Wall Space">Wall Space</option>
//                 <option value="Reception">Reception</option>
//                 <option value="Waiting Area">Waiting Area</option>
//               </select>
//             </div>

//             <div className="flex gap-6 text-base">
//               <label>
//                 <input type="checkbox" checked={featuredOnly} onChange={() => setFeaturedOnly(!featuredOnly)} /> Featured only
//               </label>
//               <label>
//                 <input type="checkbox" checked={heatMapOnly} onChange={() => setHeatMapOnly(!heatMapOnly)} /> Heat Map only
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="md:col-span-1 text-sm space-y-2">
//           <h3 className="text-blue-800 font-bold text-lg">Results</h3>
//           <p>{filteredSpaces.length} spaces found</p>
//         </div>
//       </section>

//       <section className="max-w-[1440px] mx-auto px-4 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {filteredSpaces.map(space => (
//           <div key={space._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
//             <img src={space.images?.frontFacade} alt={space.spaceName} className="w-full h-56 object-cover" />
//             <div className="p-6">
//               <h3 className="font-bold text-blue-900 text-lg mb-1">{space.spaceName}</h3>
//               <p className="text-sm text-gray-600 mb-1">{space.spaceType}</p>
//               <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
//                 <MapPin className="w-4 h-4" /> {space.location?.address?.split(",")[0] || "Unknown Location"}
//               </p>
//               <div className="text-sm text-gray-700 space-y-1">
//                 <p>Weekend Footfall: <strong>{space.footfall?.weekend || 0}</strong></p>
//                 <p>Plan: <strong className="capitalize">{space.subscriptionPlan}</strong></p>
//               </div>
//               <div className="flex justify-between items-center mt-4 text-base">
//                 <span className="text-blue-700 font-bold">₹{space.suggestedPricing[0]?.pricePerMonth || 0}</span>
//                 <span className="flex items-center gap-1 text-yellow-600">
//                   <Star className="w-4 h-4" /> {space.rating || "4.5"}
//                 </span>
//               </div>
//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={() => handleViewDetails(space._id)}
//                   className="w-full py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                 >
//                   View Details
//                 </button>
//                 <button
//                   onClick={() => handleBookNow(space._id)}
//                   className="w-full py-2 text-sm bg-white border border-blue-600 text-blue-700 rounded hover:bg-blue-50 transition"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   )
// }
 

/// below down was working perfectly 

// import { useState, useEffect } from "react"
// import { MapPin, Star, Search } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import axiosInstance from "../api/axiosInstance"

// export default function Browse() {
//   const user = useSelector(state => state.auth.user)
//   const navigate = useNavigate()
//   const [query, setQuery] = useState("")
//   const [maxPrice, setMaxPrice] = useState(30000)
//   const [footfall, setFootfall] = useState(2000)
//   const [featuredOnly, setFeaturedOnly] = useState(false)
//   const [heatMapOnly, setHeatMapOnly] = useState(false)
//   const [cityFilter, setCityFilter] = useState("")
//   const [ageGroup, setAgeGroup] = useState("")
//   const [brandingType, setBrandingType] = useState("")
//   const [spaces, setSpaces] = useState([])

//   useEffect(() => {
//     if (!user) return;
//     const fetchSpaces = async () => {
//       try {
//         const res = await axiosInstance.get("/spaces/browse") // Your backend endpoint
//         setSpaces(res.data)
//       } catch (err) {
//         console.error("Failed to fetch spaces", err)
//       }
//     }
//     fetchSpaces()
//   }, [user])

//   // BLOCK UI if not logged in
//   if (!user) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
//         <h2 className="text-xl font-bold text-blue-700 mb-2">You must login to view spaces.</h2>
//         <button
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold"
//           onClick={() => navigate('/login')}
//         >
//           Login
//         </button>
//       </div>
//     )
//   }

//   // All filters (no missing!)
//   const filteredSpaces = spaces.filter(space => {
//     // Only SAFE fields used
//     const matchesSearch = (space.spaceCode || space.spaceName || "").toLowerCase().includes(query.toLowerCase())
//     const matchesPrice =
//       !space.suggestedPricing?.monthly ||
//       Number(space.suggestedPricing.monthly) <= maxPrice
//     const matchesFootfall =
//       !space.footfall?.weekend ||
//       Number(space.footfall.weekend) <= footfall
//     const matchesFeatured =
//       !featuredOnly || space.subscriptionPlan === "premium"
//     const matchesHeatMap =
//       !heatMapOnly || !!space.heatMappingConsent
//     const matchesCity =
//       !cityFilter ||
//       (space.location?.address?.toLowerCase().includes(cityFilter.toLowerCase()))
//     const matchesAge =
//       !ageGroup ||
//       (space.demographics?.ageGroups?.includes(ageGroup))
//     const brandingTypes = space.brandingZones?.map(b => b.type) || []
//     const matchesBranding =
//       !brandingType || brandingTypes.includes(brandingType)
//     return (
//       matchesSearch &&
//       matchesPrice &&
//       matchesFootfall &&
//       matchesFeatured &&
//       matchesHeatMap &&
//       matchesCity &&
//       matchesAge &&
//       matchesBranding
//     )
//   })

//   const handleViewDetails = (id) => {
//     navigate(`/space/${id}`)
//   }
//   const handleBookNow = (id) => {
//     navigate(`/space/${id}/book`)
//   }

//   return (
//     <div className="min-h-screen bg-white text-blue-900 font-sans">
//       <section className="bg-white py-12 px-4 md:px-12 text-center border-b">
//         <h1 className="text-3xl md:text-5xl font-bold mb-2">Explore Advertising Spaces</h1>
//         <p className="text-base md:text-lg text-gray-600">Find the perfect spots for your next campaign</p>
//       </section>

//       {/* ---- FILTERS ---- */}
//       <section className="max-w-[1440px] mx-auto py-8 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="md:col-span-3 bg-blue-50 p-6 rounded-lg shadow-md">
//           <div className="flex flex-col gap-6">
//             <div className="flex gap-3 items-center">
//               <Search className="w-6 h-6 text-blue-600" />
//               <input
//                 type="text"
//                 placeholder="Search by name or city..."
//                 value={query}
//                 onChange={e => setQuery(e.target.value)}
//                 className="w-full text-base px-4 py-2 border rounded focus:outline-none"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-800">Price (max ₹{maxPrice})</label>
//               <input
//                 type="range"
//                 min="0"
//                 max="30000"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-800">Footfall (max {footfall})</label>
//               <input
//                 type="range"
//                 min="0"
//                 max="10000"
//                 value={footfall}
//                 onChange={(e) => setFootfall(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-800">City</label>
//               <input
//                 type="text"
//                 placeholder="Enter city..."
//                 value={cityFilter}
//                 onChange={e => setCityFilter(e.target.value)}
//                 className="w-full px-4 py-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-800">Target Age Group</label>
//               <select
//                 value={ageGroup}
//                 onChange={e => setAgeGroup(e.target.value)}
//                 className="w-full border px-4 py-2 rounded mt-1"
//               >
//                 <option value="">All</option>
//                 <option value="18-24">18-24</option>
//                 <option value="25-34">25-34</option>
//                 <option value="35-44">35-44</option>
//                 <option value="45-60">45-60</option>
//               </select>
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-800">Branding Type</label>
//               <select
//                 value={brandingType}
//                 onChange={e => setBrandingType(e.target.value)}
//                 className="w-full border px-4 py-2 rounded mt-1"
//               >
//                 <option value="">All</option>
//                 <option value="Wall Space">Wall Space</option>
//                 <option value="Reception">Reception</option>
//                 <option value="Waiting Area">Waiting Area</option>
//                 {/* Add more types as per your DB */}
//               </select>
//             </div>
//             <div className="flex gap-6 text-base">
//               <label>
//                 <input type="checkbox" checked={featuredOnly} onChange={() => setFeaturedOnly(!featuredOnly)} /> Featured only
//               </label>
//               <label>
//                 <input type="checkbox" checked={heatMapOnly} onChange={() => setHeatMapOnly(!heatMapOnly)} /> Heat Map only
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="md:col-span-1 text-sm space-y-2">
//           <h3 className="text-blue-800 font-bold text-lg">Results</h3>
//           <p>{filteredSpaces.length} spaces found</p>
//         </div>
//       </section>

//       {/* ---- RESULTS ---- */}
//       <section className="max-w-[1440px] mx-auto px-4 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {filteredSpaces.map(space => (
//           <div key={space._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
//             <img src={space.images?.frontFacade} alt={space.spaceCode || space.spaceName} className="w-full h-56 object-cover" />
//             <div className="p-6">
//               <h3 className="font-bold text-blue-900 text-lg mb-1">{space.spaceCode || space.spaceName}</h3>
//               <p className="text-sm text-gray-600 mb-1">{space.spaceType}</p>
//               <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
//                 <MapPin className="w-4 h-4" /> {space.location?.address?.split(",")[0] || "Unknown"}
//               </p>
//               <div className="text-sm text-gray-700 space-y-1">
//                 <p>Weekend Footfall: <strong>{space.footfall?.weekend || 0}</strong></p>
//                 <p>Plan: <strong className="capitalize">{space.subscriptionPlan || "Basic"}</strong></p>
//               </div>
//               <div className="flex justify-between items-center mt-4 text-base">
//                 <span className="text-blue-700 font-bold">₹{space.suggestedPricing?.monthly || 0}</span>
//                 <span className="flex items-center gap-1 text-yellow-600">
//                   <Star className="w-4 h-4" /> {space.rating || "—"}
//                 </span>
//               </div>
//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={() => handleViewDetails(space._id)}
//                   className="w-full py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                 >
//                   View Details
//                 </button>
//                 <button
//                   onClick={() => handleBookNow(space._id)}
//                   className="w-full py-2 text-sm bg-white border border-blue-600 text-blue-700 rounded hover:bg-blue-50 transition"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   )
// }


import { useState, useEffect } from "react";
import { MapPin, Star, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosInstance";

// --- Custom Requirement Form Component (INLINE for single file!) ---
function CustomRequirementForm({ onSuccess, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    targetCity: "",
    budget: "",
    footfall: "",
    brandingType: "",
    dates: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axiosInstance.post("/spaces/custom-requirement", form);
      setDone(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      alert("Failed to submit. Please try again.");
    }
    setSubmitting(false);
  };

  if (done)
    return (
      <div className="p-6 text-center">
        <div className="text-green-600 font-bold text-lg mb-2">
          Thank you! Our team will reach out with best matching spaces.
        </div>
        <button
          onClick={onClose}
          className="mt-3 px-6 py-2 bg-blue-600 text-white rounded"
        >
          Close
        </button>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <h2 className="text-lg font-bold mb-2 text-blue-800">Custom Space Requirement</h2>
      <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full border rounded px-3 py-2" />
      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full border rounded px-3 py-2" />
      <input required type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone" className="w-full border rounded px-3 py-2" />
      <input required type="text" name="targetCity" value={form.targetCity} onChange={handleChange} placeholder="Target City" className="w-full border rounded px-3 py-2" />
      <input type="text" name="dates" value={form.dates} onChange={handleChange} placeholder="Preferred Dates" className="w-full border rounded px-3 py-2" />
      <input type="number" name="budget" value={form.budget} onChange={handleChange} placeholder="Budget (₹)" className="w-full border rounded px-3 py-2" />
      <input type="number" name="footfall" value={form.footfall} onChange={handleChange} placeholder="Minimum Footfall" className="w-full border rounded px-3 py-2" />
      <input type="text" name="brandingType" value={form.brandingType} onChange={handleChange} placeholder="Branding Type (e.g., Hoarding, Digital, etc.)" className="w-full border rounded px-3 py-2" />
      <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Special requirements / comments" className="w-full border rounded px-3 py-2" />
      <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {submitting ? "Submitting..." : "Submit Requirement"}
      </button>
    </form>
  );
}

// --- Main Browse Page ---
export default function Browse() {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  // Filters state
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(30000);
  const [footfall, setFootfall] = useState(2000);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [heatMapOnly, setHeatMapOnly] = useState(false);
  const [cityFilter, setCityFilter] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [brandingType, setBrandingType] = useState("");
  const [spaces, setSpaces] = useState([]);
  const [showRequirement, setShowRequirement] = useState(false);

  useEffect(() => {
    if (!user) return;
    const fetchSpaces = async () => {
      try {
        const res = await axiosInstance.get("/spaces/browse"); // Your backend endpoint
        setSpaces(res.data);
      } catch (err) {
        console.error("Failed to fetch spaces", err);
      }
    };
    fetchSpaces();
  }, [user]);

  // BLOCK UI if not logged in
  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <h2 className="text-xl font-bold text-blue-700 mb-2">You must login to view spaces.</h2>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    );
  }

  // All filters (no missing!)
  const filteredSpaces = spaces.filter(space => {
    // Only SAFE fields used
    const matchesSearch = (space.spaceCode || space.spaceName || "").toLowerCase().includes(query.toLowerCase());
    const matchesPrice =
      !space.suggestedPricing?.monthly ||
      Number(space.suggestedPricing.monthly) <= maxPrice;
    const matchesFootfall =
      !space.footfall?.weekend ||
      Number(space.footfall.weekend) <= footfall;
    const matchesFeatured =
      !featuredOnly || space.subscriptionPlan === "premium";
    const matchesHeatMap =
      !heatMapOnly || !!space.heatMappingConsent;
    const matchesCity =
      !cityFilter ||
      (space.location?.address?.toLowerCase().includes(cityFilter.toLowerCase()));
    const matchesAge =
      !ageGroup ||
      (space.demographics?.ageGroups?.includes(ageGroup));
    const brandingTypes = space.brandingZones?.map(b => b.type) || [];
    const matchesBranding =
      !brandingType || brandingTypes.includes(brandingType);
    return (
      matchesSearch &&
      matchesPrice &&
      matchesFootfall &&
      matchesFeatured &&
      matchesHeatMap &&
      matchesCity &&
      matchesAge &&
      matchesBranding
    );
  });

  const handleViewDetails = (id) => {
    navigate(`/space/${id}`);
  };
  const handleBookNow = (id) => {
    navigate(`/space/${id}/book`);
  };

  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      {/* ---- HEADER ---- */}
      <section className="bg-white py-12 px-4 md:px-12 text-center border-b">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Explore Advertising Spaces</h1>
        <p className="text-base md:text-lg text-gray-600">Find the perfect spots for your next campaign</p>
      </section>

      {/* ---- CUSTOM REQUIREMENT BUTTON ---- */}
      <div className="text-center my-8">
        <button
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold shadow-lg hover:scale-105 transition"
          onClick={() => setShowRequirement(true)}
        >
          Didn’t find your perfect space? Custom Requirement →
        </button>
      </div>

      {/* ---- MODAL ---- */}
      {showRequirement && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full relative">
            <button
              className="absolute top-3 right-5 text-2xl text-gray-400 hover:text-blue-700"
              onClick={() => setShowRequirement(false)}
            >×</button>
            <CustomRequirementForm onClose={() => setShowRequirement(false)} />
          </div>
        </div>
      )}

      {/* ---- FILTERS ---- */}
      <section className="max-w-[1440px] mx-auto py-8 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 bg-blue-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <Search className="w-6 h-6 text-blue-600" />
              <input
                type="text"
                placeholder="Search by name or city..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full text-base px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800">Price (max ₹{maxPrice})</label>
              <input
                type="range"
                min="0"
                max="30000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800">Footfall (max {footfall})</label>
              <input
                type="range"
                min="0"
                max="10000"
                value={footfall}
                onChange={(e) => setFootfall(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800">City</label>
              <input
                type="text"
                placeholder="Enter city..."
                value={cityFilter}
                onChange={e => setCityFilter(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800">Target Age Group</label>
              <select
                value={ageGroup}
                onChange={e => setAgeGroup(e.target.value)}
                className="w-full border px-4 py-2 rounded mt-1"
              >
                <option value="">All</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-60">45-60</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800">Branding Type</label>
              <select
                value={brandingType}
                onChange={e => setBrandingType(e.target.value)}
                className="w-full border px-4 py-2 rounded mt-1"
              >
                <option value="">All</option>
                <option value="Wall Space">Wall Space</option>
                <option value="Reception">Reception</option>
                <option value="Waiting Area">Waiting Area</option>
                {/* Add more types as per your DB */}
              </select>
            </div>
            <div className="flex gap-6 text-base">
              <label>
                <input type="checkbox" checked={featuredOnly} onChange={() => setFeaturedOnly(!featuredOnly)} /> Featured only
              </label>
              <label>
                <input type="checkbox" checked={heatMapOnly} onChange={() => setHeatMapOnly(!heatMapOnly)} /> Heat Map only
              </label>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 text-sm space-y-2">
          <h3 className="text-blue-800 font-bold text-lg">Results</h3>
          <p>{filteredSpaces.length} spaces found</p>
        </div>
      </section>

      {/* ---- RESULTS ---- */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredSpaces.map(space => (
          <div key={space._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img src={space.images?.frontFacade} alt={space.spaceCode || space.spaceName} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-blue-900 text-lg mb-1">{space.spaceCode || space.spaceName}</h3>
              <p className="text-sm text-gray-600 mb-1">{space.spaceType}</p>
              <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4" /> {space.location?.address?.split(",")[0] || "Unknown"}
              </p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Weekend Footfall: <strong>{space.footfall?.weekend || 0}</strong></p>
                <p>Plan: <strong className="capitalize">{space.subscriptionPlan || "Basic"}</strong></p>
              </div>
              <div className="flex justify-between items-center mt-4 text-base">
                <span className="text-blue-700 font-bold">₹{space.suggestedPricing?.monthly || 0}</span>
                <span className="flex items-center gap-1 text-yellow-600">
                  <Star className="w-4 h-4" /> {space.rating || "—"}
                </span>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleViewDetails(space._id)}
                  className="w-full py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleBookNow(space._id)}
                  className="w-full py-2 text-sm bg-white border border-blue-600 text-blue-700 rounded hover:bg-blue-50 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
