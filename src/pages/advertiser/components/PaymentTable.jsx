// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";

// export default function AdvertiserPaymentsTab() {
//   const [payments, setPayments] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     axiosInstance
//       .get("/advertiser/dashboard/payments", { params: { status: filter } })
//       .then(res => {
//         setPayments(Array.isArray(res.data.payments) ? res.data.payments : []);
//         setLoading(false);
//       })
//       .catch(() => {
//         setPayments([]);
//         setLoading(false);
//       });
//   }, [filter]);

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4 text-blue-800">Payments</h2>
//       <div className="mb-4 flex items-center gap-3">
//         <label className="text-sm text-blue-800">Filter:</label>
//         <select
//           className="border rounded px-2 py-1"
//           value={filter}
//           onChange={e => setFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="paid">Paid</option>
//           <option value="unpaid">Unpaid</option>
//           <option value="pending">Pending</option>
//         </select>
//       </div>
//       {loading ? (
//         <div className="text-gray-400 animate-pulse">Loading payments...</div>
//       ) : !payments.length ? (
//         <div className="text-gray-500 py-10">No payments found.</div>
//       ) : (
//         <div className="overflow-x-auto rounded-xl shadow border border-blue-100">
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
//               <tr>
//                 <th className="px-4 py-3 text-left">Campaign</th>
//                 <th className="px-4 py-3 text-left">Amount</th>
//                 <th className="px-4 py-3 text-left">Status</th>
//                 <th className="px-4 py-3 text-left">Date</th>
//                 <th className="px-4 py-3 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {payments.map(p => (
//                 <tr key={p._id} className="border-t">
//                   <td className="px-4 py-3">{p.campaignId?.campaignName || "-"}</td>
//                   <td className="px-4 py-3 font-semibold text-blue-800">₹{p.amount}</td>
//                   <td className="px-4 py-3 capitalize">
//                     <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
//                       p.status === "paid" ? "bg-green-100 text-green-700"
//                       : p.status === "pending" ? "bg-yellow-100 text-yellow-700"
//                       : "bg-red-100 text-red-700"
//                     }`}>
//                       {p.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3">{p.date ? p.date.slice(0, 10) : "-"}</td>
//                   <td className="px-4 py-3">
//                     {p.status === "unpaid" && (
//                       <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
//                         Pay Now
//                       </button>
//                     )}
//                     {p.receiptUrl && (
//                       <a
//                         href={p.receiptUrl}
//                         className="ml-2 text-blue-500 underline"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Receipt
//                       </a>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY; // .env wali key (test id)

export default function AdvertiserPaymentsTab() {
  const [payments, setPayments] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/advertiser/dashboard/payments", { params: { status: filter } })
      .then(res => {
        setPayments(Array.isArray(res.data.payments) ? res.data.payments : []);
        setLoading(false);
      })
      .catch(() => {
        setPayments([]);
        setLoading(false);
      });
  }, [filter]);

  // Razorpay handler
  const handleRazorpay = (amount, paymentId) => {
    if (!razorpayKey) {
      alert("Razorpay Key not found in env!");
      return;
    }
    const options = {
      key: razorpayKey,
      amount: amount * 100, // Razorpay paise me leta hai
      currency: "INR",
      name: "BlookMySpace",
      description: "Demo Payment",
      handler: function (response) {
        alert("Payment Success! ID: " + response.razorpay_payment_id);
        // TODO: Backend ko paymentId ke sath status update API call karo
        // Example:
        // axiosInstance.post(`/advertiser/dashboard/payments/${paymentId}/mark-paid`, { razorpayId: response.razorpay_payment_id })
        //   .then(() => fetchPayments());
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: { color: "#6366f1" }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // (Optional) Table refresh helper
  const fetchPayments = () => {
    setLoading(true);
    axiosInstance
      .get("/advertiser/dashboard/payments", { params: { status: filter } })
      .then(res => {
        setPayments(Array.isArray(res.data.payments) ? res.data.payments : []);
        setLoading(false);
      })
      .catch(() => {
        setPayments([]);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Payments</h2>
      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm text-blue-800">Filter:</label>
        <select
          className="border rounded px-2 py-1"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      {loading ? (
        <div className="text-gray-400 animate-pulse">Loading payments...</div>
      ) : !payments.length ? (
        <div className="text-gray-500 py-10">No payments found.</div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-blue-100">
          <table className="min-w-full">
            <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
              <tr>
                <th className="px-4 py-3 text-left">Campaign</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
                <tr key={p._id} className="border-t">
                  <td className="px-4 py-3">{p.campaignId?.campaignName || "-"}</td>
                  <td className="px-4 py-3 font-semibold text-blue-800">₹{p.amount}</td>
                  <td className="px-4 py-3 capitalize">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      p.status === "paid" ? "bg-green-100 text-green-700"
                      : p.status === "pending" ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{p.date ? p.date.slice(0, 10) : "-"}</td>
                  <td className="px-4 py-3">
                    {p.status === "unpaid" && (
                      <button
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={() => handleRazorpay(p.amount, p._id)}
                      >
                        Pay Now
                      </button>
                    )}
                    {p.receiptUrl && (
                      <a
                        href={p.receiptUrl}
                        className="ml-2 text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Receipt
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
