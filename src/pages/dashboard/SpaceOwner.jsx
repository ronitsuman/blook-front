// import { useEffect, useState } from 'react'
// import { useAuth } from '../../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// export default function SpaceOwnerDashboard() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const [loading, setLoading] = useState(true)

//   const { isAuthenticated, user } = useSelector((state) => state.auth)

//   useEffect(() => {
//     if (!user || user.role !== 'space-owner') {
//       navigate('/login')
//     } else {
//       setLoading(false)
//     }
//   }, [user, navigate])

//   if (loading) return null

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-6 py-10">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl mb-6">
//           <h1 className="text-3xl font-bold text-blue-800 mb-1">Welcome, {user.name} 👋</h1>
//           <p className="text-sm text-gray-600">
//             Role: <span className="font-medium capitalize">{user.role}</span> | ID: <span className="text-xs">{user._id}</span>
//           </p>

//           <button
//             onClick={() => navigate('/list-space')}
//             className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
//           >
//             + List a New Space
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold text-blue-700">My Spaces</h3>
//             <p className="text-sm text-gray-600 mt-1">Manage all your listed properties</p>
//           </div>

//           <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold text-blue-700">Bookings</h3>
//             <p className="text-sm text-gray-600 mt-1">Track current and past bookings</p>
//           </div>

//           <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold text-blue-700">Earnings</h3>
//             <p className="text-sm text-gray-600 mt-1">See your earnings (coming soon)</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function SpaceOwnerDashboard() {
  const navigate = useNavigate()

  // ✅ Grab auth values from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ✅ Check if user is logged in and has correct role
    if (!isAuthenticated || !user || user.role !== 'space-owner') {
      navigate('/login')
    } else {
      setLoading(false)
    }
  }, [isAuthenticated, user, navigate])

  if (loading) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-1">Welcome, {user.name} 👋</h1>
          <p className="text-sm text-gray-600">
            Role: <span className="font-medium capitalize">{user.role}</span> | ID: <span className="text-xs">{user._id}</span>
          </p>

          <button
            onClick={() => navigate('/list-space')}
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            + List a New Space
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700">My Spaces</h3>
            <p className="text-sm text-gray-600 mt-1">Manage all your listed properties</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700">Bookings</h3>
            <p className="text-sm text-gray-600 mt-1">Track current and past bookings</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700">Earnings</h3>
            <p className="text-sm text-gray-600 mt-1">See your earnings (coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
