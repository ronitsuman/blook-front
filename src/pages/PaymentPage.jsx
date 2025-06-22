// // // // File: src/pages/PaymentPage.jsx

// // // import { useEffect } from "react"
// // // import { useNavigate } from "react-router-dom"
// // // import { toast } from "react-toastify"
// // // import "react-toastify/dist/ReactToastify.css"

// // // export default function PaymentPage() {
// // //   const navigate = useNavigate()

// // //   const price = 499

// // //   const handlePayment = async () => {
// // //     try {
// // //       // ✅ Mocking Razorpay Payment Success (for now)
// // //       // In production, this will be replaced with real Razorpay logic

// // //       // --- Razorpay real logic (to enable later) ---
// // //       // const options = {
// // //       //   key: import.meta.env.VITE_RAZORPAY_KEY_ID,
// // //       //   amount: price * 100,
// // //       //   currency: "INR",
// // //       //   name: "BlookMySpace",
// // //       //   description: "Premium Space Listing",
// // //       //   handler: async function (response) {
// // //       //     await registerPremiumSpace(response.razorpay_payment_id)
// // //       //   },
// // //       //   prefill: {
// // //       //     name: "",
// // //       //     email: "",
// // //       //     contact: ""
// // //       //   },
// // //       //   theme: {
// // //       //     color: "#3399cc"
// // //       //   }
// // //       // }

// // //       // const rzp = new Razorpay(options)
// // //       // rzp.open()

// // //       // 🧪 Mock payment success flow:
// // //       await registerPremiumSpace("mock_payment_id_123")

// // //     } catch (err) {
// // //       console.error("Payment failed:", err)
// // //       toast.error("Payment failed. Please try again.")
// // //     }
// // //   }

// // //   const registerPremiumSpace = async (paymentId) => {
// // //     const storedData = localStorage.getItem("pendingPremiumSpace")
// // //     if (!storedData) return toast.error("No space data found. Please re-submit.")

// // //     const payload = JSON.parse(storedData)
// // //     payload.paymentId = paymentId

// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/space-owner/register-space", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${payload.token}`
// // //         },
// // //         body: JSON.stringify(payload)
// // //       })

// // //       if (!res.ok) throw new Error("Failed to register space")

// // //       localStorage.removeItem("pendingPremiumSpace")
// // //       toast.success("Payment successful. Waiting for approval!")

// // //       setTimeout(() => navigate("/dashboard/space-owner"), 1500)
// // //     } catch (error) {
// // //       console.error(error)
// // //       toast.error("Registration failed after payment.")
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     const data = localStorage.getItem("pendingPremiumSpace")
// // //     if (!data) navigate("/list-space")
// // //   }, [navigate])

// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
// // //       <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
// // //         <h2 className="text-2xl font-bold text-blue-800 mb-2">Premium Listing</h2>
// // //         <p className="text-sm text-gray-600 mb-6">Enjoy unlimited space listings and priority approval.</p>

// // //         <div className="text-center mb-6">
// // //           <span className="text-4xl font-extrabold text-blue-900">₹499</span>
// // //           <p className="text-sm text-gray-600">One-time fee</p>
// // //         </div>

// // //         <ul className="text-sm text-gray-700 mb-6 list-disc pl-5">
// // //           <li>Unlimited space submissions</li>
// // //           <li>Priority approval queue</li>
// // //           <li>Increased visibility on homepage</li>
// // //         </ul>

// // //         <button
// // //           onClick={handlePayment}
// // //           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
// // //         >
// // //           Proceed to Pay ₹499
// // //         </button>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // import { useEffect } from "react"
// // import { useNavigate } from "react-router-dom"
// // import { toast } from "react-toastify"
// // import "react-toastify/dist/ReactToastify.css"

// // export default function PaymentPage() {
// //   const navigate = useNavigate()
// //   const price = 499

// //   useEffect(() => {
// //     const data = localStorage.getItem("pendingPremiumSpace")
// //     if (!data) {
// //       toast.error("No space data found. Please fill the form first.")
// //       navigate("/list-space")
// //     }
// //   }, [navigate])

// //   const handlePayment = async () => {
// //     try {
// //       // ✅ MOCK PAYMENT FLOW
// //       // Replace with real Razorpay logic when ready
// //       await registerPremiumSpace("mock_payment_id_123")

// //       // ✅ REAL RAZORPAY PAYMENT (UNCOMMENT BELOW when key available)
// //       /*
// //       const storedData = localStorage.getItem("pendingPremiumSpace")
// //       const payload = JSON.parse(storedData)

// //       const options = {
// //         key: import.meta.env.VITE_RAZORPAY_KEY_ID, // add this in your .env
// //         amount: price * 100,
// //         currency: "INR",
// //         name: "BlookMySpace",
// //         description: "Premium Listing",
// //         handler: async function (response) {
// //           await registerPremiumSpace(response.razorpay_payment_id)
// //         },
// //         prefill: {
// //           name: payload?.spaceName || "",
// //           email: payload?.email || "",
// //           contact: payload?.phone || ""
// //         },
// //         theme: { color: "#3399cc" }
// //       }

// //       const rzp = new window.Razorpay(options)
// //       rzp.open()
// //       */
// //     } catch (err) {
// //       console.error("Payment failed:", err)
// //       toast.error("Payment failed. Please try again.")
// //     }
// //   }

// //   const registerPremiumSpace = async (paymentId) => {
// //     const storedData = localStorage.getItem("pendingPremiumSpace")
// //     if (!storedData) return toast.error("No space data found. Please re-submit.")

// //     const payload = JSON.parse(storedData)
// //     payload.paymentId = paymentId

// //     try {
// //       const res = await fetch("http://localhost:5000/api/space-owner/register-space", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${payload.token}`
// //         },
// //         body: JSON.stringify(payload)
// //       })

// //       if (!res.ok) throw new Error("Failed to register space")

// //       localStorage.removeItem("pendingPremiumSpace")
// //       toast.success("Payment successful. Waiting for approval!")

// //       setTimeout(() => navigate("/dashboard/space-owner"), 2000)
// //     } catch (error) {
// //       console.error(error)
// //       toast.error("Registration failed after payment.")
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
// //       <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
// //         <h2 className="text-2xl font-bold text-blue-800 mb-2">Premium Listing</h2>
// //         <p className="text-sm text-gray-600 mb-6">Enjoy unlimited space listings and priority approval.</p>

// //         <div className="text-center mb-6">
// //           <span className="text-4xl font-extrabold text-blue-900">₹499</span>
// //           <p className="text-sm text-gray-600">One-time fee</p>
// //         </div>

// //         <ul className="text-sm text-gray-700 mb-6 list-disc pl-5">
// //           <li>Unlimited space submissions</li>
// //           <li>Priority approval queue</li>
// //           <li>Increased visibility on homepage</li>
// //         </ul>

// //         <button
// //           onClick={handlePayment}
// //           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
// //         >
// //           Proceed to Pay ₹499
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }


// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// export default function PaymentPage() {
//   const navigate = useNavigate()
//   const price = 499

//   const handlePayment = async () => {
//     try {
//       // 🧪 Mock payment success (replace with Razorpay later)
//       await registerPremiumSpace("mock_payment_id_123")

//       // 🧾 Razorpay Real Flow (uncomment later)
//       /*
//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: price * 100,
//         currency: "INR",
//         name: "BlookMySpace",
//         description: "Premium Space Listing",
//         handler: async function (response) {
//           await registerPremiumSpace(response.razorpay_payment_id)
//         },
//         prefill: {
//           name: "",
//           email: "",
//           contact: ""
//         },
//         theme: {
//           color: "#3399cc"
//         }
//       }

//       const rzp = new window.Razorpay(options)
//       rzp.open()
//       */
//     } catch (err) {
//       console.error("Payment failed:", err)
//       toast.error("Payment failed. Please try again.")
//     }
//   }

//   const registerPremiumSpace = async (paymentId) => {
//     const storedData = localStorage.getItem("pendingPremiumSpace")
//     if (!storedData) return toast.error("No space data found. Please re-submit.")

//     const payload = JSON.parse(storedData)

//     const token = payload?.token
//     const spaceOwnerId = payload?.spaceOwnerId

//     if (!token || !spaceOwnerId) {
//       return toast.error("Token or Space Owner ID missing.")
//     }

//     const spaceData = {
//       ...payload,
//       listingType: "premium",
//       paymentId,
//       spaceOwnerId
//     }

//     delete spaceData.token // don't send token in body

//     try {
//       const res = await fetch("http://localhost:5000/api/space-owner/register-space", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(spaceData)
//       })

//       if (!res.ok) {
//         const errData = await res.json()
//         throw new Error(errData.message || "Failed to register space")
//       }

//       localStorage.removeItem("pendingPremiumSpace")
//       toast.success("Payment successful. Waiting for approval!")

//       setTimeout(() => navigate("/dashboard/space-owner"), 1500)
//     } catch (error) {
//       console.error(error)
//       toast.error(error.message || "Registration failed after payment.")
//     }
//   }

//   useEffect(() => {
//     const data = localStorage.getItem("pendingPremiumSpace")
//     if (!data) navigate("/list-space")
//   }, [navigate])

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
//       <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-blue-800 mb-2">Premium Listing</h2>
//         <p className="text-sm text-gray-600 mb-6">Enjoy unlimited space listings and priority approval.</p>

//         <div className="text-center mb-6">
//           <span className="text-4xl font-extrabold text-blue-900">₹499</span>
//           <p className="text-sm text-gray-600">One-time fee</p>
//         </div>

//         <ul className="text-sm text-gray-700 mb-6 list-disc pl-5">
//           <li>Unlimited space submissions</li>
//           <li>Priority approval queue</li>
//           <li>Increased visibility on homepage</li>
//         </ul>

//         <button
//           onClick={handlePayment}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
//         >
//           Proceed to Pay ₹499
//         </button>
//       </div>
//     </div>
//   )
// }

// src/components/ListYourSpaceForm/PaymentPage.jsx
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PaymentPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("spaceFormData"))
    if (!formData) return

    // ✅ MOCK Razorpay Success Flow (Replace when real keys available)
    setTimeout(async () => {
      alert("Mock Payment Successful! Submitting your space...")

      try {
        const token = localStorage.getItem("token")
        const res = await fetch("https://your-backend.com/api/space/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        })

        const data = await res.json()
        if (res.ok) {
          alert("Space submitted successfully!")
          navigate("/dashboard")
        } else {
          alert(data.message || "Submission failed")
        }
      } catch (err) {
        console.error(err)
        alert("Something went wrong during submission")
      }
    }, 2000)
  }, [navigate])

  return (
    <div className="text-center p-6">
      <h2 className="text-xl font-bold mb-2">Processing Mock Payment...</h2>
      <p>This is a mock payment screen. Your space will be auto-submitted.</p>
    </div>
  )
}

export default PaymentPage

/*
// ✅ TO ENABLE REAL RAZORPAY PAYMENT FLOW:
// Replace inside PaymentPage:

const options = {
  key: "<RAZORPAY_KEY>",
  amount: 99900, // ₹999 in paisa
  currency: "INR",
  name: "BlookMySpace",
  description: "Premium Listing",
  handler: async function (response) {
    // submit to backend with payment ID
  },
  prefill: { email: "", contact: "" }
}

const rzp = new window.Razorpay(options)
rzp.open()
*/
