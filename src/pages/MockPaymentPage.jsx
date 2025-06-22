import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const MockPaymentPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const data = localStorage.getItem('pendingSpaceData')
    if (!data) return navigate('/list-space')

    const payload = JSON.parse(data)
    const token = localStorage.getItem('token')

    setTimeout(async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/space-owner/register-space', payload, {
          headers: { Authorization: `Bearer ${token}` },
        })
        localStorage.removeItem('pendingSpaceData')
        alert('Payment successful & space submitted!')
        navigate('/space-owner/dashboard')
      } catch (err) {
        console.error(err)
        alert('Payment done, but submission failed')
      }
    }, 2000)
  }, [navigate])

  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold text-blue-700">Processing Payment...</h2>
      <p className="mt-4 text-gray-600">Please wait while we finalize your premium listing.</p>
    </div>
  )
}

export default MockPaymentPage
