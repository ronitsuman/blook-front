// src/components/RazorpayPayButton.jsx
import React from "react";

export default function RazorpayPayButton({ amount, onSuccess }) {
  const handleRazorpay = () => {
    const options = {
      key: "rzp_test_abc123xyz456", // <-- apna test key id yahan daalna
      amount: amount * 100, // in paise
      currency: "INR",
      name: "BlookMySpace Payment",
      description: "Test Payment",
      handler: function (response) {
        // response.razorpay_payment_id
        alert("Payment Success!\n" + response.razorpay_payment_id);
        onSuccess && onSuccess(response);
      },
      prefill: {
        name: "Test User",
        email: "testuser@email.com",
        contact: "9999999999"
      },
      theme: {
        color: "#6366f1"
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={handleRazorpay}
    >
      Pay Now (Razorpay Demo)
    </button>
  );
}
