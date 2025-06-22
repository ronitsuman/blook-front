import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const roles = ['space-owner', 'advertiser', 'vendor', 'agent']

export default function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const defaultRole = queryParams.get('role') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: defaultRole,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, mobile, password, confirmPassword, role } = formData

    if (!name || !email || !mobile || !password || !confirmPassword || !role) {
      toast.error('All fields are required')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    try {
      setLoading(true)
      const res = await axios.post('https://blook-back.onrender.com/api/auth/register', {
        name,
        email,
        mobile,
        password,
        role,
      })

      if (res.data.success) {
        toast.success('Signup successful! Redirecting to login...')
        setTimeout(() => navigate('/login'), 2000)
      } else {
        toast.error(res.data.message || 'Signup failed')
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <ToastContainer />
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Your Account</h2>

        {formData.role === '' && (
          <div className="bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded mb-4">
            Please choose your role before signing up.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
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
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Select Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">-- Select --</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r.replace('-', ' ').toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
