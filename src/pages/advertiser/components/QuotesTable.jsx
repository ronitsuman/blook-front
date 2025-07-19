// // // // // import React, { useEffect, useState } from "react";
// // // // // import axiosInstance from "../../../api/axiosInstance";

// // // // // const statusColors = {
// // // // //   submitted: "bg-yellow-100 text-yellow-700",
// // // // //   accepted: "bg-green-100 text-green-700",
// // // // //   rejected: "bg-red-100 text-red-700",
// // // // // };

// // // // // export default function CampaignQuotesTable({ campaignId }) {
// // // // //   const [quotes, setQuotes] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [approving, setApproving] = useState(null);

// // // // //   useEffect(() => {
// // // // //     if (!campaignId) {
// // // // //       setQuotes([]);
// // // // //       setLoading(false);
// // // // //       return;
// // // // //     }
// // // // //     setLoading(true);
// // // // //     axiosInstance
// // // // //       .get(`advertiser/dashboard/quotes/${campaignId}`)
// // // // //       .then(res => {
// // // // //         setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
// // // // //         setLoading(false);
// // // // //       })
// // // // //       .catch(() => {
// // // // //         setQuotes([]);
// // // // //         setLoading(false);
// // // // //       });
// // // // //   }, [campaignId]);

// // // // //   const approveQuote = async (quoteId) => {
// // // // //     if (!window.confirm("Approve this quote? All others will be rejected.")) return;
// // // // //     setApproving(quoteId);
// // // // //     try {
// // // // //       await axiosInstance.post(`advertiser/dashboard/quotes/${quoteId}/accept`);
// // // // //       // Refetch quotes after approval
// // // // //       const res = await axiosInstance.get(`advertiser/dashboard/quotes/${campaignId}`);
// // // // //       setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
// // // // //     } catch (err) {
// // // // //       alert("Error approving quote");
// // // // //     } finally {
// // // // //       setApproving(null);
// // // // //     }
// // // // //   };

// // // // //   if (!campaignId) return <div className="text-gray-400">Select a campaign to view quotes.</div>;
// // // // //   if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;
// // // // //   if (!quotes.length) return <div className="text-gray-500 py-6">No vendor quotes for this campaign yet.</div>;

// // // // //   return (
// // // // //     <div>
// // // // //       <div className="mb-4 flex items-center justify-between">
// // // // //         <h2 className="text-lg font-bold text-blue-800">Vendor Quotes</h2>
// // // // //         <span className="text-sm text-gray-500">Total: {quotes.length}</span>
// // // // //       </div>
// // // // //       <div className="overflow-x-auto rounded-xl shadow border border-blue-100">
// // // // //         {/* Desktop/tablet */}
// // // // //         <table className="min-w-full hidden md:table">
// // // // //           <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
// // // // //             <tr>
// // // // //               <th className="px-4 py-3 text-left">Vendor</th>
// // // // //               <th className="px-4 py-3 text-left">Amount</th>
// // // // //               <th className="px-4 py-3 text-left">Timeline</th>
// // // // //               <th className="px-4 py-3 text-left">Message</th>
// // // // //               <th className="px-4 py-3 text-left">Attachment</th>
// // // // //               <th className="px-4 py-3 text-left">Status</th>
// // // // //               <th className="px-4 py-3"></th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {quotes.map(q => (
// // // // //               <tr key={q._id} className="border-t">
// // // // //                 <td className="px-4 py-3">
// // // // //                   <div className="font-semibold">{q.vendorId?.vendorProfile?.companyName || "-"}</div>
// // // // //                   <div className="text-xs text-gray-500">{q.vendorId?.email}</div>
// // // // //                   <div className="text-xs">{q.vendorId?.vendorProfile?.cities?.join(", ")}</div>
// // // // //                 </td>
// // // // //                 <td className="px-4 py-3 font-bold text-blue-800">₹{q.quotedAmount?.toLocaleString()}</td>
// // // // //                 <td className="px-4 py-3">{q.estimatedTimeline}</td>
// // // // //                 <td className="px-4 py-3">{q.message || <span className="text-gray-400">-</span>}</td>
// // // // //                 <td className="px-4 py-3">
// // // // //                   {q.attachmentLinks?.length
// // // // //                     ? <a href={q.attachmentLinks[0]} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">View</a>
// // // // //                     : <span className="text-gray-400">-</span>
// // // // //                   }
// // // // //                 </td>
// // // // //                 <td className="px-4 py-3">
// // // // //                   <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${statusColors[q.status] || "bg-gray-100 text-gray-500"}`}>{q.status}</span>
// // // // //                 </td>
// // // // //                 <td className="px-4 py-3">
// // // // //                   {q.status === "submitted" && (
// // // // //                     <button
// // // // //                       className={`px-4 py-1 rounded bg-green-100 text-green-700 font-semibold text-xs hover:bg-green-200 transition ${approving === q._id ? "opacity-50 pointer-events-none" : ""}`}
// // // // //                       onClick={() => approveQuote(q._id)}
// // // // //                       disabled={approving === q._id}
// // // // //                     >
// // // // //                       {approving === q._id ? "Approving..." : "Approve"}
// // // // //                     </button>
// // // // //                   )}
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //         {/* Mobile */}
// // // // //         <div className="md:hidden space-y-4 p-2">
// // // // //           {quotes.map(q => (
// // // // //             <div key={q._id} className="bg-white rounded-xl p-4 shadow border-l-4 border-blue-300">
// // // // //               <div className="font-bold mb-1">{q.vendorId?.vendorProfile?.companyName || "-"}</div>
// // // // //               <div className="text-xs text-gray-500 mb-1">{q.vendorId?.email}</div>
// // // // //               <div className="text-xs mb-1">Cities: {q.vendorId?.vendorProfile?.cities?.join(", ")}</div>
// // // // //               <div className="text-xs mb-1">Amount: <span className="font-bold text-blue-800">₹{q.quotedAmount?.toLocaleString()}</span></div>
// // // // //               <div className="text-xs mb-1">Timeline: {q.estimatedTimeline}</div>
// // // // //               <div className="text-xs mb-1">Attachment: {q.attachmentLinks?.length
// // // // //                 ? <a href={q.attachmentLinks[0]} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">View</a>
// // // // //                 : <span className="text-gray-400">-</span>}
// // // // //               </div>
// // // // //               <div className="flex items-center gap-2 mt-1">
// // // // //                 <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColors[q.status] || "bg-gray-100 text-gray-500"}`}>{q.status}</span>
// // // // //                 {q.status === "submitted" && (
// // // // //                   <button
// // // // //                     className={`px-4 py-1 rounded bg-green-100 text-green-700 font-semibold text-xs hover:bg-green-200 transition ${approving === q._id ? "opacity-50 pointer-events-none" : ""}`}
// // // // //                     onClick={() => approveQuote(q._id)}
// // // // //                     disabled={approving === q._id}
// // // // //                   >
// // // // //                     {approving === q._id ? "Approving..." : "Approve"}
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useEffect, useState } from "react";
// // // // import axiosInstance from "../../../api/axiosInstance";

// // // // export default function CampaignQuotesTable({ campaignId }) {
// // // //   const [quotes, setQuotes] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     if (!campaignId) {
// // // //       setQuotes([]);
// // // //       setLoading(false);
// // // //       return;
// // // //     }
// // // //     setLoading(true);
// // // //     axiosInstance
// // // //       .get(`advertiser/dashboard/quotes/${campaignId}`)
// // // //       .then(res => {
// // // //         setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
// // // //         setLoading(false);
// // // //       })
// // // //       .catch(() => {
// // // //         setQuotes([]);
// // // //         setLoading(false);
// // // //       });
// // // //   }, [campaignId]);

// // // //   if (!campaignId) return <div className="text-gray-400">Select a campaign to view quotes.</div>;
// // // //   if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;
// // // //   if (!quotes.length) return <div className="text-gray-500 py-6">No vendor quotes for this campaign yet.</div>;

// // // //   return <div>Quotes loaded: {quotes.length}</div>;
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import axiosInstance from "../../../api/axiosInstance";

// // // export default function QuotesTable({ campaignId }) {
// // //   const [quotes, setQuotes] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     console.log("QuotesTable mounted, campaignId:", campaignId); // <--- Debug
// // //     if (!campaignId) {
// // //       setQuotes([]);
// // //       setLoading(false);
// // //       return;
// // //     }
// // //     setLoading(true);
// // //     axiosInstance
// // //       .get(`advertiser/dashboard/quotes/${campaignId}`)
// // //       .then(res => {
// // //         console.log("Quotes API result", res.data); // <--- Debug
// // //         setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
// // //         setLoading(false);
// // //       })
// // //       .catch((err) => {
// // //         console.log("Quotes API ERROR", err); // <--- Debug
// // //         setQuotes([]);
// // //         setLoading(false);
// // //       });
// // //   }, [campaignId]);

// // //   if (!campaignId) return <div className="text-gray-400">Select a campaign to view quotes.</div>;
// // //   if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;
// // //   if (!quotes.length) return <div className="text-gray-500 py-6">No vendor quotes for this campaign yet.</div>;

// // //   return <div>Quotes loaded: {quotes.length}</div>;
// // // }

// // import React, { useEffect, useState } from "react";
// // import axiosInstance from "../../../api/axiosInstance";

// // export default function QuotesTable({ campaignId }) {
// //   const [quotes, setQuotes] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!campaignId) {
// //       setQuotes([]);
// //       setLoading(false);
// //       return;
// //     }
// //     setLoading(true);
// //     axiosInstance
// //       .get(`/advertiser/dashboard/quotes/${campaignId}`)
// //       .then(res => {
// //         setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
// //         setLoading(false);
// //       })
// //       .catch(() => {
// //         setQuotes([]);
// //         setLoading(false);
// //       });
// //   }, [campaignId]);

// //   if (!campaignId) return <div className="text-gray-400">Select a campaign to view quotes.</div>;
// //   if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;
// //   if (!quotes.length) return <div className="text-gray-500 py-6">No vendor quotes for this campaign yet.</div>;

// //   // For demo: show count and list, production me full table render kar lena!
// //   return (
// //     <div>
// //       <div className="mb-2 text-blue-700 font-bold">Quotes loaded: {quotes.length}</div>
// //       <pre className="bg-gray-50 p-2 rounded">{JSON.stringify(quotes, null, 2)}</pre>
// //     </div>
// //   );
// // }

// // src/components/QuotesTable.jsx

// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";

// export default function QuotesTable({ campaignId }) {
//   const [quotes, setQuotes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!campaignId) {
//       setQuotes([]);
//       setLoading(false);
//       return;
//     }
//     setLoading(true);
//     axiosInstance
//       .get(`/advertiser/dashboard/quotes/${campaignId}`)
//       .then(res => {
//         console.log("QuotesTable quotes", res.data); // Debug: You must see quotes array here
//         setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
//         setLoading(false);
//       })
//       .catch(() => {
//         setQuotes([]);
//         setLoading(false);
//       });
//   }, [campaignId]);

//   if (!campaignId) return <div className="text-gray-400">Select a campaign to view quotes.</div>;
//   if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;
//   if (!quotes.length) return <div className="text-gray-500 py-6">No vendor quotes for this campaign yet.</div>;

//   // Full quotes list, for demo - you can replace with table UI
//   return (
//     <div>
//       <h3 className="text-xl font-semibold mb-3 text-blue-700">Quotes for Selected Campaign</h3>
//       <ul className="divide-y">
//         {quotes.map(q => (
//           <li key={q._id} className="py-4">
//             <div>
//               <span className="font-bold text-blue-800">
//                 {q.vendorId?.vendorProfile?.companyName || "-"}
//               </span>
//               <span className="ml-4 text-gray-500">₹{q.quotedAmount}</span>
//               <span className="ml-4 text-gray-600 text-xs">{q.status}</span>
//             </div>
//             <div className="text-xs text-gray-500">{q.message}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// src/components/QuotesTable.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function QuotesTable({ campaignId }) {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (!campaignId) {
      setQuotes([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    axiosInstance
      .get(`/advertiser/dashboard/quotes/${campaignId}`)
      .then(res => {
        setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
        setLoading(false);
      })
      .catch(() => {
        setQuotes([]);
        setLoading(false);
      });
  }, [campaignId]);

  const handleAccept = async (quoteId) => {
    if (!window.confirm("Accept this quote? All others will be rejected.")) return;
    setActionLoading(true);
    try {
      await axiosInstance.post(`/advertiser/dashboard/quotes/${quoteId}/accept`);
      const res = await axiosInstance.get(`/advertiser/dashboard/quotes/${campaignId}`);
      setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
    } catch (err) {
      alert("Error accepting quote");
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async (quoteId) => {
    if (!window.confirm("Reject this quote?")) return;
    setActionLoading(true);
    try {
      await axiosInstance.post(`/advertiser/dashboard/quotes/${quoteId}/reject`);
      const res = await axiosInstance.get(`/advertiser/dashboard/quotes/${campaignId}`);
      setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
    } catch (err) {
      alert("Error rejecting quote");
    } finally {
      setActionLoading(false);
    }
  };

  if (!campaignId) return <div className="text-gray-400">Select a campaign to view quotes.</div>;
  if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;
  if (!quotes.length) return <div className="text-gray-500 py-6">No vendor quotes for this campaign yet.</div>;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3 text-blue-700">Quotes for Selected Campaign</h3>
      <ul className="divide-y">
        {quotes.map(q => (
          <li key={q._id} className="py-4 flex items-center justify-between">
            <div>
              <div>
                <span className="font-bold text-blue-800">
                  {q.vendorId?.vendorProfile?.companyName || "-"}
                </span>
                <span className="ml-4 text-gray-500">₹{q.quotedAmount}</span>
                <span className="ml-4 text-gray-600 text-xs">
                  <b>{q.status}</b>
                </span>
              </div>
              <div className="text-xs text-gray-500">{q.message}</div>
            </div>
            <div className="flex gap-2">
              {q.status === "submitted" && (
                <>
                  <button
                    onClick={() => handleAccept(q._id)}
                    disabled={actionLoading}
                    className="px-3 py-1 rounded bg-green-100 text-green-800 hover:bg-green-200 text-xs font-semibold"
                  >
                    {actionLoading ? "Working..." : "Accept"}
                  </button>
                  <button
                    onClick={() => handleReject(q._id)}
                    disabled={actionLoading}
                    className="px-3 py-1 rounded bg-red-100 text-red-800 hover:bg-red-200 text-xs font-semibold"
                  >
                    {actionLoading ? "Working..." : "Reject"}
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
