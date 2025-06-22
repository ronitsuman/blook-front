// // // // // // src/pages/AdvertiserDashboard.jsx
// // // // // import { useEffect, useState } from 'react'
// // // // // import { useNavigate } from 'react-router-dom'
// // // // // import { useSelector } from 'react-redux'
// // // // // import { BadgeCheck, AlertCircle, User, FileText, Building2 } from 'lucide-react'

// // // // // const Sidebar = ({ activeTab, setActiveTab }) => (
// // // // //   <aside className="w-full md:w-64 bg-white border-r h-full p-6 space-y-6">
// // // // //     <div className="text-xl font-bold text-blue-800 mb-4">Advertiser Panel</div>
// // // // //     <div className="space-y-3">
// // // // //       <button
// // // // //         onClick={() => setActiveTab('overview')}
// // // // //         className={`w-full flex items-center gap-2 px-3 py-2 rounded ${activeTab === 'overview' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-50 text-gray-700'}`}
// // // // //       >
// // // // //         <User className="w-5 h-5" /> Overview
// // // // //       </button>
// // // // //       <button
// // // // //         onClick={() => setActiveTab('documents')}
// // // // //         className={`w-full flex items-center gap-2 px-3 py-2 rounded ${activeTab === 'documents' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-50 text-gray-700'}`}
// // // // //       >
// // // // //         <FileText className="w-5 h-5" /> Documents
// // // // //       </button>
// // // // //       <button
// // // // //         onClick={() => setActiveTab('business')}
// // // // //         className={`w-full flex items-center gap-2 px-3 py-2 rounded ${activeTab === 'business' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-50 text-gray-700'}`}
// // // // //       >
// // // // //         <Building2 className="w-5 h-5" /> Business Info
// // // // //       </button>
// // // // //     </div>
// // // // //   </aside>
// // // // // )

// // // // // export default function AdvertiserDashboard() {
// // // // //   const navigate = useNavigate()
// // // // //   const { user } = useSelector(state => state.auth)
// // // // //   const profile = user?.advertiserProfile || {}
// // // // //   const [activeTab, setActiveTab] = useState('overview')

// // // // //   useEffect(() => {
// // // // //     if (user?.role !== 'advertiser') navigate('/')
// // // // //   }, [user, navigate])

// // // // //   const renderContent = () => {
// // // // //     switch (activeTab) {
// // // // //       case 'overview':
// // // // //         return (
// // // // //           <div className="bg-white border rounded-lg shadow-md p-6">
// // // // //             {profile?.isVerified ? (
// // // // //               <div className="flex items-center gap-3 text-green-700">
// // // // //                 <BadgeCheck className="w-6 h-6" />
// // // // //                 <span className="text-lg font-semibold">You are a Verified Advertiser</span>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="flex items-center gap-3 text-yellow-600">
// // // // //                 <AlertCircle className="w-6 h-6" />
// // // // //                 <span className="text-lg font-semibold">Profile incomplete. Please <button className="underline hover:text-yellow-800" onClick={() => navigate('/profile')}>complete your profile</button> to book spaces.</span>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         )
// // // // //       case 'documents':
// // // // //         return (
// // // // //           <div className="bg-white rounded-lg border p-6 shadow-sm">
// // // // //             <h2 className="text-lg font-semibold mb-4">Uploaded Documents</h2>
// // // // //             <p><strong>ID Proof:</strong> {profile.idProofUrl ? <a href={profile.idProofUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View</a> : 'Not uploaded'}</p>
// // // // //             <p><strong>Business Proof:</strong> {profile.businessProofUrl ? <a href={profile.businessProofUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View</a> : 'Not uploaded'}</p>
// // // // //           </div>
// // // // //         )
// // // // //       case 'business':
// // // // //         return (
// // // // //           <div className="bg-white rounded-lg border p-6 shadow-sm">
// // // // //             <h2 className="text-lg font-semibold mb-4">Business Information</h2>
// // // // //             <p><strong>Brand:</strong> {profile.brandName || 'N/A'}</p>
// // // // //             <p><strong>Company:</strong> {profile.companyName || 'N/A'}</p>
// // // // //             <p><strong>GST:</strong> {profile.gstNumber || 'N/A'}</p>
// // // // //           </div>
// // // // //         )
// // // // //       default:
// // // // //         return null
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex">
// // // // //       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
// // // // //       <main className="flex-1 px-6 py-10">
// // // // //         <h1 className="text-3xl font-bold mb-6">Advertiser Dashboard</h1>
// // // // //         {renderContent()}
// // // // //       </main>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // src/pages/AdvertiserDashboard.jsx
// // // // import { useSelector } from 'react-redux'
// // // // import { useEffect, useState } from 'react'
// // // // import { useNavigate } from 'react-router-dom'
// // // // import { ShieldCheck, FileText, Building2 } from 'lucide-react'

// // // // export default function AdvertiserDashboard() {
// // // //   const { user } = useSelector(state => state.auth)
// // // //   const navigate = useNavigate()
// // // //   const [activeTab, setActiveTab] = useState('overview')

// // // //   useEffect(() => {
// // // //     if (!user || user.role !== 'advertiser') {
// // // //       navigate('/')
// // // //     }
// // // //   }, [user])

// // // //   const profile = user?.advertiserProfile || {}
// // // //   const isVerified = profile?.isVerified

// // // //   const renderTab = () => {
// // // //     switch (activeTab) {
// // // //       case 'overview':
// // // //         return (
// // // //           <div className="p-6">
// // // //             <h2 className="text-xl font-semibold mb-4">Overview</h2>
// // // //             {isVerified ? (
// // // //               <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-md">
// // // //                 ✅ Verified Advertiser
// // // //               </div>
// // // //             ) : (
// // // //               <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md">
// // // //                 ⚠️ Your profile is incomplete. <span className="underline cursor-pointer" onClick={() => navigate('/profile')}>Complete now</span>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         )
// // // //       case 'documents':
// // // //         return (
// // // //           <div className="p-6">
// // // //             <h2 className="text-xl font-semibold mb-4">Documents</h2>
// // // //             <ul className="space-y-2 text-sm">
// // // //               <li>ID Proof: {profile.idProofUrl ? <a href={profile.idProofUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
// // // //               <li>GST Certificate: {profile.gstCertificateUrl ? <a href={profile.gstCertificateUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
// // // //             </ul>
// // // //           </div>
// // // //         )
// // // //       case 'business':
// // // //         return (
// // // //           <div className="p-6">
// // // //             <h2 className="text-xl font-semibold mb-4">Business Information</h2>
// // // //             <p><strong>Company Name:</strong> {profile.companyName || 'N/A'}</p>
// // // //             <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
// // // //             <p><strong>Contact Email:</strong> {profile.contactEmail || user.email}</p>
// // // //           </div>
// // // //         )
// // // //       default:
// // // //         return null
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex">
// // // //       {/* Sidebar */}
// // // //       <aside className="w-64 bg-white shadow-md p-6 space-y-6 border-r">
// // // //         <h1 className="text-xl font-bold text-blue-800 mb-6">Advertiser Dashboard</h1>
// // // //         <div className="space-y-3">
// // // //           <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
// // // //           <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" /> Documents</button>
// // // //           <button onClick={() => setActiveTab('business')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'business' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><Building2 className="w-5 h-5" /> Business Info</button>
// // // //         </div>
// // // //       </aside>

// // // //       {/* Main Content */}
// // // //       <main className="flex-1 overflow-y-auto bg-white shadow-inner rounded-lg m-4">
// // // //         {renderTab()}
// // // //       </main>
// // // //     </div>
// // // //   )
// // // // }


// // // // src/pages/AdvertiserDashboard.jsx
// // // import { useSelector } from 'react-redux'
// // // import { useEffect, useState } from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // import { ShieldCheck, FileText, Building2 } from 'lucide-react'

// // // export default function AdvertiserDashboard() {
// // //   const { user } = useSelector(state => state.auth)
// // //   const navigate = useNavigate()
// // //   const [activeTab, setActiveTab] = useState('overview')

// // //   useEffect(() => {
// // //     if (!user || user.role !== 'advertiser') {
// // //       navigate('/')
// // //     }
// // //   }, [user])

// // //   const profile = user?.advertiserProfile || {}
// // //   const isVerified = profile?.isVerified

// // //   const renderTab = () => {
// // //     switch (activeTab) {
// // //       case 'overview':
// // //         return (
// // //           <div className="p-6">
// // //             <h2 className="text-2xl font-semibold mb-4 text-blue-800">Overview</h2>
// // //             {isVerified ? (
// // //               <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-md">
// // //                 ✅ Verified Advertiser
// // //               </div>
// // //             ) : (
// // //               <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-md">
// // //                 ⚠️ Your profile is incomplete. <span className="underline cursor-pointer" onClick={() => navigate('/profile')}>Complete now</span>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )
// // //       case 'documents':
// // //         return (
// // //           <div className="p-6">
// // //             <h2 className="text-2xl font-semibold mb-4 text-blue-800">Documents</h2>
// // //             <ul className="space-y-3 text-sm">
// // //               <li>ID Proof: {profile.idProofUrl ? <a href={profile.idProofUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
// // //               <li>GST Certificate: {profile.gstCertificateUrl ? <a href={profile.gstCertificateUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
// // //             </ul>
// // //           </div>
// // //         )
// // //       case 'business':
// // //         return (
// // //           <div className="p-6">
// // //             <h2 className="text-2xl font-semibold mb-4 text-blue-800">Business Information</h2>
// // //             <div className="space-y-2">
// // //               <p><strong>Company Name:</strong> {profile.companyName || 'N/A'}</p>
// // //               <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
// // //               <p><strong>Contact Email:</strong> {profile.contactEmail || user.email}</p>
// // //             </div>
// // //           </div>
// // //         )
// // //       default:
// // //         return null
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex">
// // //       {/* Sidebar */}
// // //       <aside className="w-64 bg-gradient-to-b from-white to-blue-50 shadow-xl p-6 space-y-6 border-r border-blue-200">
// // //         <h1 className="text-2xl font-bold text-blue-900 mb-6">Advertiser Panel</h1>
// // //         <div className="space-y-3">
// // //           <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition font-medium ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900 shadow' : 'text-gray-700 hover:bg-blue-50'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
// // //           <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition font-medium ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900 shadow' : 'text-gray-700 hover:bg-blue-50'}`}><FileText className="w-5 h-5" /> Documents</button>
// // //           <button onClick={() => setActiveTab('business')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition font-medium ${activeTab === 'business' ? 'bg-blue-100 text-blue-900 shadow' : 'text-gray-700 hover:bg-blue-50'}`}><Building2 className="w-5 h-5" /> Business Info</button>
// // //         </div>
// // //       </aside>

// // //       {/* Main Content */}
// // //       <main className="flex-1 bg-white rounded-lg m-4 shadow-lg border border-blue-100">
// // //         {renderTab()}
// // //       </main>
// // //     </div>
// // //   )
// // // }

// // // src/pages/AdvertiserDashboard.jsx
// // import { useSelector } from 'react-redux'
// // import { useEffect, useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { ShieldCheck, FileText, Building2, UserCircle } from 'lucide-react'

// // export default function AdvertiserDashboard() {
// //   const { user } = useSelector(state => state.auth)
// //   const navigate = useNavigate()
// //   const [activeTab, setActiveTab] = useState('overview')

// //   useEffect(() => {
// //     if (!user || user.role !== 'advertiser') {
// //       navigate('/')
// //     }
// //   }, [user])

// //   const profile = user?.advertiserProfile || {}
// //   const isVerified = profile?.isVerified

// //   const renderTab = () => {
// //     switch (activeTab) {
// //       case 'overview':
// //         return (
// //           <div className="p-6">
// //             <h2 className="text-xl font-semibold mb-4">Overview</h2>
// //             {isVerified ? (
// //               <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-md">
// //                 ✅ Verified Advertiser
// //               </div>
// //             ) : (
// //               <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md">
// //                 ⚠️ Your profile is incomplete. <span className="underline cursor-pointer" onClick={() => setActiveTab('profile')}>Complete now</span>
// //               </div>
// //             )}
// //           </div>
// //         )
// //       case 'documents':
// //         return (
// //           <div className="p-6">
// //             <h2 className="text-xl font-semibold mb-4">Documents</h2>
// //             <ul className="space-y-2 text-sm">
// //               <li>ID Proof: {profile.idProofUrl ? <a href={profile.idProofUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
// //               <li>GST Certificate: {profile.gstCertificateUrl ? <a href={profile.gstCertificateUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
// //             </ul>
// //           </div>
// //         )
// //       case 'business':
// //         return (
// //           <div className="p-6">
// //             <h2 className="text-xl font-semibold mb-4">Business Information</h2>
// //             <p><strong>Company Name:</strong> {profile.companyName || 'N/A'}</p>
// //             <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
// //             <p><strong>Contact Email:</strong> {profile.contactEmail || user.email}</p>
// //           </div>
// //         )
// //       case 'profile':
// //         return (
// //           <div className="p-6">
// //             <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
// //             <p className="text-sm text-gray-600 mb-4">Upload your required documents to become a verified advertiser.</p>
// //             {/* File upload form placeholder */}
// //             <div className="space-y-4">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload ID Proof</label>
// //                 <input type="file" className="block w-full border border-gray-300 rounded-md" />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload GST Certificate</label>
// //                 <input type="file" className="block w-full border border-gray-300 rounded-md" />
// //               </div>
// //               <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Submit for Verification</button>
// //             </div>
// //           </div>
// //         )
// //       default:
// //         return null
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-white shadow-md p-6 space-y-6 border-r">
// //         <h1 className="text-xl font-bold text-blue-800 mb-6">Advertiser Dashboard</h1>
// //         <div className="space-y-3">
// //           <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
// //           <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" /> Documents</button>
// //           <button onClick={() => setActiveTab('business')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'business' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><Building2 className="w-5 h-5" /> Business Info</button>
// //           <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'profile' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><UserCircle className="w-5 h-5" /> Profile</button>
// //         </div>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 overflow-y-auto bg-white shadow-inner rounded-lg m-4">
// //         {renderTab()}
// //       </main>
// //     </div>
// //   )
// // }





// // src/pages/AdvertiserDashboard.jsx
// import { useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ShieldCheck, FileText, Building2, UserCircle } from 'lucide-react'

// export default function AdvertiserDashboard() {
//   const { user } = useSelector(state => state.auth)
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('overview')

//   useEffect(() => {
//     if (!user || user.role !== 'advertiser') {
//       navigate('/')
//     }
//   }, [user])

//   const profile = user?.advertiserProfile || {}
//   const isVerified = profile?.isVerified && profile.gstNumber && profile.panNumber && profile.billingAddress && profile.documents?.panImage && profile.documents?.gstImage

//   const renderTab = () => {
//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Overview</h2>
//             {isVerified ? (
//               <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-md">
//                 ✅ Verified Advertiser
//               </div>
//             ) : (
//               <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md">
//                 ⚠️ Your profile is incomplete. <span className="underline cursor-pointer" onClick={() => setActiveTab('profile')}>Complete now</span>
//               </div>
//             )}
//           </div>
//         )
//       case 'documents':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Documents</h2>
//             <ul className="space-y-2 text-sm">
//               <li>PAN Image: {profile.documents?.panImage ? <a href={profile.documents.panImage} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
//               <li>GST Certificate: {profile.documents?.gstImage ? <a href={profile.documents.gstImage} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
//             </ul>
//           </div>
//         )
//       case 'business':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Business Information</h2>
//             <p><strong>Brand Name:</strong> {profile.brandName || 'N/A'}</p>
//             <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
//             <p><strong>PAN Number:</strong> {profile.panNumber || 'N/A'}</p>
//             <p><strong>Billing Address:</strong> {profile.billingAddress || 'N/A'}</p>
//             <p><strong>Email:</strong> {profile.contactEmail || user.email}</p>
//           </div>
//         )
//       case 'profile':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
//             <p className="text-sm text-gray-600 mb-4">Upload your required documents to become a verified advertiser.</p>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload PAN Card</label>
//                 <input type="file" className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload GST Certificate</label>
//                 <input type="file" className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Submit for Verification</button>
//             </div>
//           </div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-6 space-y-6 border-r">
//         <h1 className="text-xl font-bold text-blue-800 mb-6">Advertiser Dashboard</h1>
//         <div className="space-y-3">
//           <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
//           <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" /> Documents</button>
//           <button onClick={() => setActiveTab('business')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'business' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><Building2 className="w-5 h-5" /> Business Info</button>
//           <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'profile' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><UserCircle className="w-5 h-5" /> Profile</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto bg-white shadow-inner rounded-lg m-4">
//         {renderTab()}
//       </main>
//     </div>
//   )
// }


// // src/pages/AdvertiserDashboard.jsx
// import { useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ShieldCheck, FileText, Building2, UserCircle } from 'lucide-react'
// import axios from 'axios'

// export default function AdvertiserDashboard() {
//   const { user, token } = useSelector(state => state.auth)
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('overview')
//   const [formData, setFormData] = useState({ panImage: null, gstImage: null })
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (!user || user.role !== 'advertiser') {
//       navigate('/')
//     }
//   }, [user])

//   const profile = user?.advertiserProfile || {}
//   const isVerified = profile?.isVerified && profile.gstNumber && profile.panNumber && profile.billingAddress && profile.documents?.panImage && profile.documents?.gstImage

//   const handleFileChange = (e) => {
//     const { name, files } = e.target
//     setFormData(prev => ({ ...prev, [name]: files[0] }))
//   }

//   const handleSubmit = async () => {
//     if (!formData.panImage || !formData.gstImage) return alert('Please upload both documents')
//     setLoading(true)
//     try {
//       const data = new FormData()
//       data.append('panImage', formData.panImage)
//       data.append('gstImage', formData.gstImage)

//       const res = await axios.put('http://localhost:5000/api/advertiser/profile', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       })
//       alert('Profile submitted for verification')
//     } catch (err) {
//       console.error(err)
//       alert('Error uploading documents')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const renderTab = () => {
//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Overview</h2>
//             {isVerified ? (
//               <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-md">
//                 ✅ Verified Advertiser
//               </div>
//             ) : (
//               <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md">
//                 ⚠️ Your profile is incomplete. <span className="underline cursor-pointer" onClick={() => setActiveTab('profile')}>Complete now</span>
//               </div>
//             )}
//           </div>
//         )
//       case 'documents':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Documents</h2>
//             <ul className="space-y-2 text-sm">
//               <li>PAN Image: {profile.documents?.panImage ? <a href={profile.documents.panImage} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
//               <li>GST Certificate: {profile.documents?.gstImage ? <a href={profile.documents.gstImage} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : 'Not uploaded'}</li>
//             </ul>
//           </div>
//         )
//       case 'business':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Business Information</h2>
//             <p><strong>Brand Name:</strong> {profile.brandName || 'N/A'}</p>
//             <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
//             <p><strong>PAN Number:</strong> {profile.panNumber || 'N/A'}</p>
//             <p><strong>Billing Address:</strong> {profile.billingAddress || 'N/A'}</p>
//             <p><strong>Email:</strong> {profile.contactEmail || user.email}</p>
//           </div>
//         )
//       case 'profile':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
//             <p className="text-sm text-gray-600 mb-4">Upload your required documents to become a verified advertiser.</p>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload PAN Card</label>
//                 <input type="file" name="panImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload GST Certificate</label>
//                 <input type="file" name="gstImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <button onClick={handleSubmit} disabled={loading} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//                 {loading ? 'Submitting...' : 'Submit for Verification'}
//               </button>
//             </div>
//           </div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-6 space-y-6 border-r">
//         <h1 className="text-xl font-bold text-blue-800 mb-6">Advertiser Dashboard</h1>
//         <div className="space-y-3">
//           <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
//           <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" /> Documents</button>
//           <button onClick={() => setActiveTab('business')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'business' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><Building2 className="w-5 h-5" /> Business Info</button>
//           <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'profile' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><UserCircle className="w-5 h-5" /> Profile</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto bg-white shadow-inner rounded-lg m-4">
//         {renderTab()}
//       </main>
//     </div>
//   )
// }


// // upload succesful
// // src/pages/AdvertiserDashboard.jsx
// import { useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ShieldCheck, FileText, Building2, UserCircle } from 'lucide-react'
// import axios from 'axios'

// export default function AdvertiserDashboard() {
//   const { user, token } = useSelector(state => state.auth)
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('overview')
//   const [formData, setFormData] = useState({ panImage: null, gstImage: null })
//   const [loading, setLoading] = useState(false)
//   const [profileData, setProfileData] = useState(null)

//   useEffect(() => {
//     if (!user || user.role !== 'advertiser') {
//       navigate('/')
//     } else {
//       fetchProfile()
//     }
//   }, [user])

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/advertiser/profile', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       console.log(res)
//       setProfileData(res.data)
//     } catch (err) {
//       console.error('Failed to fetch profile', err)
//     }
//   }

//   const profile = profileData || {}
//   const isVerified = profile?.isVerified && profile.gstNumber && profile.panNumber && profile.billingAddress && profile.documents?.panImage && profile.documents?.gstImage

//   const handleFileChange = (e) => {
//     const { name, files } = e.target
//     setFormData(prev => ({ ...prev, [name]: files[0] }))
//   }

//   const handleSubmit = async () => {
//     if (!formData.panImage || !formData.gstImage) return alert('Please upload both documents')
//     setLoading(true)
//     try {
//       const data = new FormData()
//       data.append('panImage', formData.panImage)
//       data.append('gstImage', formData.gstImage)

//       await axios.put('http://localhost:5000/api/advertiser/profile', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       })

//       alert('Profile submitted for verification')
//       fetchProfile()
//     } catch (err) {
//       console.error(err)
//       alert('Error uploading documents')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const renderTab = () => {
//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Overview</h2>
//             {isVerified ? (
//               <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-md">
//                 ✅ Verified Advertiser
//               </div>
//             ) : (
//               <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md">
//                 ⚠️ Your profile is incomplete. <span className="underline cursor-pointer" onClick={() => setActiveTab('profile')}>Complete now</span>
//               </div>
//             )}
//           </div>
//         )
//       case 'documents':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Documents</h2>
//             <ul className="space-y-4 text-sm">
//               <li>
//                 <p className="font-medium">PAN Image:</p>
//                 {profile.documents?.panImage ? (
//                   <img src={profile.documents.panImage} alt="PAN" className="mt-2 w-64 rounded shadow" />
//                 ) : 'Not uploaded'}
//               </li>
//               <li>
//                 <p className="font-medium">GST Certificate:</p>
//                 {profile.documents?.gstImage ? (
//                   <img src={profile.documents.gstImage} alt="GST" className="mt-2 w-64 rounded shadow" />
//                 ) : 'Not uploaded'}
//               </li>
//             </ul>
//           </div>
//         )
//       case 'business':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Business Information</h2>
//             <p><strong>Brand Name:</strong> {profile.brandName || 'N/A'}</p>
//             <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
//             <p><strong>PAN Number:</strong> {profile.panNumber || 'N/A'}</p>
//             <p><strong>Billing Address:</strong> {profile.billingAddress || 'N/A'}</p>
//             <p><strong>Email:</strong> {profile.contactEmail || user.email}</p>
//           </div>
//         )
//       case 'profile':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
//             <p className="text-sm text-gray-600 mb-4">Upload your required documents to become a verified advertiser.</p>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload PAN Card</label>
//                 <input type="file" name="panImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload GST Certificate</label>
//                 <input type="file" name="gstImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <button onClick={handleSubmit} disabled={loading} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//                 {loading ? 'Submitting...' : 'Submit for Verification'}
//               </button>
//             </div>
//           </div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-6 space-y-6 border-r">
//         <h1 className="text-xl font-bold text-blue-800 mb-6">Advertiser Dashboard</h1>
//         <div className="space-y-3">
//           <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
//           <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" /> Documents</button>
//           <button onClick={() => setActiveTab('business')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'business' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><Building2 className="w-5 h-5" /> Business Info</button>
//           <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'profile' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><UserCircle className="w-5 h-5" /> Profile</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto bg-white shadow-inner rounded-lg m-4">
//         {renderTab()}
//       </main>
//     </div>
//   )
// }


// // src/pages/AdvertiserDashboard.jsx
// import { useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ShieldCheck, FileText, Building2, UserCircle, Clock3, CheckCircle, AlertCircle } from 'lucide-react'
// import axios from 'axios'

// export default function AdvertiserDashboard() {
//   const { user, token } = useSelector(state => state.auth)
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('overview')
//   const [formData, setFormData] = useState({ panImage: null, gstImage: null })
//   const [loading, setLoading] = useState(false)
//   const [profileData, setProfileData] = useState(null)

//   useEffect(() => {
//     if (!user || user.role !== 'advertiser') {
//       navigate('/')
//     } else {
//       fetchProfile()
//     }
//   }, [user])

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/advertiser/profile', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       setProfileData(res.data)
//     } catch (err) {
//       console.error('Failed to fetch profile', err)
//     }
//   }

//   const profile = profileData || {}
//   const hasDocuments = profile.documents?.panImage && profile.documents?.gstImage
//   const hasBusinessInfo = profile.gstNumber && profile.panNumber && profile.billingAddress && profile.brandName
//   const isVerified = profile?.isVerified === true

//   const handleFileChange = (e) => {
//     const { name, files } = e.target
//     setFormData(prev => ({ ...prev, [name]: files[0] }))
//   }

//   const handleSubmit = async () => {
//     if (!formData.panImage || !formData.gstImage) return alert('Please upload both documents')
//     setLoading(true)
//     try {
//       const data = new FormData()
//       data.append('panImage', formData.panImage)
//       data.append('gstImage', formData.gstImage)

//       await axios.put('http://localhost:5000/api/advertiser/profile', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       })

//       alert('Profile submitted for verification')
//       fetchProfile()
//     } catch (err) {
//       console.error(err)
//       alert('Error uploading documents')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const renderTab = () => {
//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Verification Progress</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className={`p-4 rounded-md shadow ${hasDocuments && hasBusinessInfo ? 'bg-green-100 border border-green-300 text-green-800' : 'bg-yellow-50 border border-yellow-300 text-yellow-800'}`}>
//                 <div className="flex items-center gap-2">
//                   {hasDocuments && hasBusinessInfo ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
//                   <strong>Documents</strong>
//                 </div>
//                 <p className="text-sm mt-2">
//                   {hasDocuments && hasBusinessInfo
//                     ? 'All required documents submitted'
//                     : 'Upload PAN and GST documents to proceed with verification'}
//                 </p>
//               </div>
//               <div className={`p-4 rounded-md shadow ${isVerified ? 'bg-green-100 border border-green-300 text-green-800' : 'bg-yellow-100 border border-yellow-300 text-yellow-800'}`}>
//                 <div className="flex items-center gap-2">
//                   {isVerified ? <CheckCircle className="w-5 h-5" /> : <Clock3 className="w-5 h-5" />}
//                   <strong>Admin Approval</strong>
//                 </div>
//                 <p className="text-sm mt-2">
//                   {isVerified
//                     ? 'You are verified and eligible to book spaces'
//                     : 'Waiting for admin verification'}
//                 </p>
//               </div>
//             </div>
//             <div className="mt-6 text-sm text-gray-600">
//               <p className="mb-2">To book advertising spaces, ensure:</p>
//               <ul className="list-disc ml-6">
//                 <li>All required business and document details are submitted</li>
//                 <li>Admin has reviewed and verified your profile</li>
//               </ul>
//             </div>
//             {!hasDocuments || !hasBusinessInfo ? (
//               <button onClick={() => setActiveTab('profile')} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//                 Complete Profile Now
//               </button>
//             ) : null}
//           </div>
//         )
//       case 'documents':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Documents</h2>
//             <ul className="space-y-4 text-sm">
//               <li>
//                 <p className="font-medium">PAN Image:</p>
//                 {profile.documents?.panImage ? (
//                   <img src={profile.documents.panImage} alt="PAN" className="mt-2 w-64 rounded shadow" />
//                 ) : 'Not uploaded'}
//               </li>
//               <li>
//                 <p className="font-medium">GST Certificate:</p>
//                 {profile.documents?.gstImage ? (
//                   <img src={profile.documents.gstImage} alt="GST" className="mt-2 w-64 rounded shadow" />
//                 ) : 'Not uploaded'}
//               </li>
//             </ul>
//           </div>
//         )
//       case 'business':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Business Information</h2>
//             <p><strong>Brand Name:</strong> {profile.brandName || 'N/A'}</p>
//             <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
//             <p><strong>PAN Number:</strong> {profile.panNumber || 'N/A'}</p>
//             <p><strong>Billing Address:</strong> {profile.billingAddress || 'N/A'}</p>
//             <p><strong>Email:</strong> {profile.contactEmail || user.email}</p>
//           </div>
//         )
//       case 'profile':
//         return (
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
//             <p className="text-sm text-gray-600 mb-4">Upload your required documents to become a verified advertiser.</p>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload PAN Card</label>
//                 <input type="file" name="panImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Upload GST Certificate</label>
//                 <input type="file" name="gstImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
//               </div>
//               <button onClick={handleSubmit} disabled={loading} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//                 {loading ? 'Submitting...' : 'Submit for Verification'}
//               </button>
//             </div>
//           </div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex">
//       <aside className="w-64 bg-white shadow-md p-6 space-y-6 border-r">
//         <h1 className="text-xl font-bold text-blue-800 mb-6">Advertiser Dashboard</h1>
//         <div className="space-y-3">
//           <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
//           <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" /> Documents</button>
//           <button onClick={() => setActiveTab('business')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'business' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><Building2 className="w-5 h-5" /> Business Info</button>
//           <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg transition ${activeTab === 'profile' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><UserCircle className="w-5 h-5" /> Profile</button>
//         </div>
//       </aside>
//       <main className="flex-1 overflow-y-auto bg-white shadow-inner rounded-lg m-4">
//         {renderTab()}
//       </main>
//     </div>
//   )
// }


// src/pages/AdvertiserDashboard.jsx
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck, FileText, Building2, UserCircle, Clock3, CheckCircle, AlertCircle, BadgeCheck, Info } from 'lucide-react'
import axios from 'axios'

export default function AdvertiserDashboard() {
  const { user, token } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [formData, setFormData] = useState({ panImage: null, gstImage: null })
  const [loading, setLoading] = useState(false)
  const [profileData, setProfileData] = useState(null)
  const [showReminder, setShowReminder] = useState(false)

  useEffect(() => {
    if (!user || user.role !== 'advertiser') {
      navigate('/')
    } else {
      fetchProfile()
    }
  }, [user])

  const fetchProfile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/advertiser/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      setProfileData(res.data)
    } catch (err) {
      console.error('Failed to fetch profile', err)
    }
  }

  const profile = profileData || {}
  const hasDocuments = profile.documents?.panImage && profile.documents?.gstImage
  const hasBusinessInfo = profile.gstNumber && profile.panNumber && profile.billingAddress && profile.brandName
  const isVerified = profile?.isVerified === true

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData(prev => ({ ...prev, [name]: files[0] }))
  }

  const handleSubmit = async () => {
    if (!formData.panImage || !formData.gstImage) return alert('Please upload both documents')
    setLoading(true)
    try {
      const data = new FormData()
      data.append('panImage', formData.panImage)
      data.append('gstImage', formData.gstImage)

      await axios.put('http://localhost:5000/api/advertiser/profile', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      alert('Profile submitted for verification')
      fetchProfile()
    } catch (err) {
      console.error(err)
      alert('Error uploading documents')
    } finally {
      setLoading(false)
    }
  }

  const renderReminderToast = () => (
    showReminder && (
      <div className="fixed top-4 right-4 z-50 bg-yellow-100 text-yellow-900 border border-yellow-300 px-4 py-3 rounded shadow-md animate-pulse">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5" />
          <p className="text-sm font-medium">Complete profile and get verified to book spaces!</p>
        </div>
      </div>
    )
  )

  const renderTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="p-4 sm:p-6">
            {renderReminderToast()}
            <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              Verification Progress
              {isVerified && <span className="text-green-700 bg-green-100 px-2 py-1 text-xs rounded flex items-center gap-1"><BadgeCheck className="w-4 h-4" /> Verified</span>}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-md shadow transition-all duration-300 ${hasDocuments && hasBusinessInfo ? 'bg-green-100 border border-green-300 text-green-800' : 'bg-yellow-50 border border-yellow-300 text-yellow-800'}`}>
                <div className="flex items-center gap-2">
                  {hasDocuments && hasBusinessInfo ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <strong>Documents</strong>
                </div>
                <p className="text-sm mt-2">
                  {hasDocuments && hasBusinessInfo
                    ? 'All required documents submitted'
                    : 'Upload PAN and GST documents to proceed with verification'}
                </p>
              </div>
              <div className={`p-4 rounded-md shadow transition-all duration-300 ${isVerified ? 'bg-green-100 border border-green-300 text-green-800' : 'bg-yellow-100 border border-yellow-300 text-yellow-800'}`}>
                <div className="flex items-center gap-2">
                  {isVerified ? <CheckCircle className="w-5 h-5" /> : <Clock3 className="w-5 h-5" />}
                  <strong>Admin Approval</strong>
                </div>
                <p className="text-sm mt-2">
                  {isVerified
                    ? 'You are verified and eligible to book spaces'
                    : 'Waiting for admin verification'}
                </p>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p className="mb-2">To book advertising spaces, ensure:</p>
              <ul className="list-disc ml-6">
                <li>All required business and document details are submitted</li>
                <li>Admin has reviewed and verified your profile</li>
              </ul>
            </div>
            {!hasDocuments || !hasBusinessInfo ? (
              <button
                onClick={() => setActiveTab('profile')}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Complete Profile Now
              </button>
            ) : null}
          </div>
        )
    //   other cases (documents, business, profile) 
      case 'documents':
                return (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Documents</h2>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <p className="font-medium">PAN Image:</p>
                        {profile.documents?.panImage ? (
                          <img src={profile.documents.panImage} alt="PAN" className="mt-2 w-64 rounded shadow" />
                        ) : 'Not uploaded'}
                      </li>
                      <li>
                        <p className="font-medium">GST Certificate:</p>
                        {profile.documents?.gstImage ? (
                          <img src={profile.documents.gstImage} alt="GST" className="mt-2 w-64 rounded shadow" />
                        ) : 'Not uploaded'}
                      </li>
                    </ul>
                  </div>
                )
              case 'business':
                return (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Business Information</h2>
                    <p><strong>Brand Name:</strong> {profile.brandName || 'N/A'}</p>
                    <p><strong>GST Number:</strong> {profile.gstNumber || 'N/A'}</p>
                    <p><strong>PAN Number:</strong> {profile.panNumber || 'N/A'}</p>
                    <p><strong>Billing Address:</strong> {profile.billingAddress || 'N/A'}</p>
                    <p><strong>Email:</strong> {profile.contactEmail || user.email}</p>
                  </div>
                )
              case 'profile':
                return (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
                    <p className="text-sm text-gray-600 mb-4">Upload your required documents to become a verified advertiser.</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload PAN Card</label>
                        <input type="file" name="panImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload GST Certificate</label>
                        <input type="file" name="gstImage" onChange={handleFileChange} className="block w-full border border-gray-300 rounded-md" />
                      </div>
                      <button onClick={handleSubmit} disabled={loading} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        {loading ? 'Submitting...' : 'Submit for Verification'}
                      </button>
                    </div>
                  </div>
                )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-white shadow-md p-4 sm:p-6 space-y-4 md:space-y-6 border-b md:border-b-0 md:border-r">
        <h1 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Advertiser Dashboard</h1>
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:space-y-3">
          <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition ${activeTab === 'overview' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><ShieldCheck className="w-5 h-5" /> Overview</button>
          <button onClick={() => setActiveTab('documents')} className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition ${activeTab === 'documents' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" /> Documents</button>
          <button onClick={() => setActiveTab('business')} className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition ${activeTab === 'business' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><Building2 className="w-5 h-5" /> Business Info</button>
          <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition ${activeTab === 'profile' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}><UserCircle className="w-5 h-5" /> Profile</button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-white shadow-inner rounded-lg p-4 sm:p-6">
        {renderTab()}
      </main>
    </div>
  )
}
