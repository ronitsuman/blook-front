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
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Eye, EyeOff } from "lucide-react";
import { loginSuccess } from "../../redux/slices/authSlice"
import { useDispatch } from 'react-redux'

export default function Login() {
  const location = useLocation();
  // Prefill from navigate (if available)
  const [email, setEmail] = useState(location.state?.prefillEmail || "");
  const [password, setPassword] = useState(location.state?.prefillPassword || "");
  const [showPassword, setShowPassword] = useState(false);
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
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })
    
    //  Change this line to avoid conflict with local formData.email
const { token, role, userId, fullName, email: userEmail, roleCode } = res.data;

//  Make user object using correct fields
const user = { role, userId, fullName, email: userEmail, roleCode };
dispatch(loginSuccess({ token, user }));

toast.success("Login successful!");
navigate(`/dashboard/${role}`);




//       // const { token, user } = res.data
//       const { token, role, userId, fullName, email, roleCode } = res.data;
//       const user = { role, userId, fullName, email, roleCode };
// dispatch(loginSuccess({ token, user }));

// toast.success("Login successful!");
// navigate(`/dashboard/${role}`);
      // console.log("first",res)

      // //  Save to Redux store
      // dispatch(loginSuccess({ token, user }))

      // toast.success('Login successful!')
      

      // setTimeout(() => {
      //   navigate(`/dashboard/${user.role}`)
      // }, 500)
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
          <div className="h-22 w-22  rounded-full inline-flex items-center justify-center text-2xl font-bold text-blue-600">
             <img src="logo.png" width={170} className="mx-auto" height={30} alt="" />

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
           {/* <div className="mb-6 relative">
        <input
          type={showPassword ? "text" : "password"}
          // className="input pr-12"
           className="w-full border bg-slate-200 px-3 py-2 rounded"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-700"
          onClick={() => setShowPassword(s => !s)}
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
        </button>
      </div> */}

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
