// export default function Step8Payment({ formData, setFormData, back, onSuccess }) {
//     // You can integrate Razorpay/Stripe here, for now mock a payment success
//     const handlePay = () => {
//       // Call your backend/payment API here, then:
//       setTimeout(() => {
//         alert("Payment Successful!");
//         onSuccess();
//       }, 1000);
//     };
  
//     return (
//       <div>
//         <h3 className="font-bold mb-4">Premium Listing Payment</h3>
//         <p>To get a featured listing, please pay <span className="font-bold text-blue-600">INR 5,000</span> (example).</p>
//         <div className="flex justify-between mt-8">
//           <button className="btn-secondary" onClick={back}>Back</button>
//           <button className="btn-primary" onClick={handlePay}>Pay & Submit</button>
//         </div>
//       </div>
//     );
//   }
  
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import toast from 'react-hot-toast';

export default function MockPaymentPage() {
  const [spaceData, setSpaceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('spaceListingData');
    if (saved) {
      setSpaceData(JSON.parse(saved));
    } else {
      toast.error('No listing data found. Redirecting...');
      navigate('/');
    }
  }, []);

  const handlePaymentAndSubmit = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post('/space/register', spaceData);
      toast.success('Payment successful! Space registered.');
      localStorage.removeItem('spaceListingData');
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      toast.error('Submission failed. Try again.');
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-center text-purple-700">
          Premium Listing Payment
        </h2>

        {!submitted ? (
          <>
            <p className="text-center text-gray-600">
              Premium listing fee: <strong>₹499</strong>
            </p>

            <button
              onClick={handlePaymentAndSubmit}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              {loading ? 'Processing...' : 'Mock Pay & Submit'}
            </button>
          </>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600 font-bold text-lg">✅ Payment Successful!</p>
            <p className="text-gray-700">Your space has been registered successfully.</p>

            <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl shadow">
              <p className="text-yellow-800 font-medium">
                ⏳ Waiting for tech team approval...
              </p>
            </div>

            <button
              onClick={() => navigate('/dashboard')}
              className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
