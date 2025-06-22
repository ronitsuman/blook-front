// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { useAuth } from '../../context/AuthContext' // 👈 import useAuth
// import { useDispatch } from "react-redux"
// import { loginSuccess } from "../../redux/slices/authSlice"

// export default function Login() {
//   const navigate = useNavigate()
//   const { login } = useAuth()  // 👈 use login from context
//   const [formData, setFormData] = useState({ email: '', password: '' })
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const { email, password } = formData

//     if (!email || !password) {
//       toast.error('Please enter email and password')
//       return
//     }

//     try {
//       setLoading(true)
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })

//       const { token, user } = res.data


//       // // ✅ Call AuthContext login
//       // login({
//       //   token,
//       //   role: user.role,
//       //   name: user.name,
//       //   _id: user._id
//       // })
//       console.log(res)

//       toast.success('Login successful!')
//       dispatch(loginSuccess({ token: res.data.token, user: res.data.user }))

//       setTimeout(() => {
//         navigate(`/dashboard/${user.role}`)
//       }, 1000)
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Login failed')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
//       <ToastContainer />
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
//         <div className="text-center mb-6">
//           <div className="h-12 w-12 bg-blue-100 rounded-full inline-flex items-center justify-center text-2xl font-bold text-blue-600">
//             B
//           </div>
//           <h1 className="text-xl font-semibold mt-2">Welcome Back</h1>
//           <p className="text-sm text-gray-500">Login to continue</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//               placeholder="Enter password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           Don’t have an account?{' '}
//           <a href="/select-role" className="text-blue-600 hover:underline">
//             Sign up here
//           </a>
//         </p>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { loginSuccess } from "../../redux/slices/authSlice"
import { useDispatch } from 'react-redux'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formData

    if (!email || !password) {
      toast.error('Please enter email and password')
      return
    }

    try {
      setLoading(true)
      const res = await axios.post('https://blook-back.onrender.com/api/auth/login', { email, password })

      const { token, user } = res.data

      // ✅ Save to Redux store
      dispatch(loginSuccess({ token, user }))

      toast.success('Login successful!')
      

      setTimeout(() => {
        navigate(`/dashboard/${user.role}`)
      }, 500)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <div className="text-center mb-6">
          <div className="h-12 w-12 bg-blue-100 rounded-full inline-flex items-center justify-center text-2xl font-bold text-blue-600">
            B
          </div>
          <h1 className="text-xl font-semibold mt-2">Welcome Back</h1>
          <p className="text-sm text-gray-500">Login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <a href="/select-role" className="text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  )
}
