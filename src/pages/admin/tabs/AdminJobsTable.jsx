// // import { useEffect, useState } from "react";
// // import axiosInstance from "../../../api/axiosInstance";

// // export default function AdminJobsTable() {
// //   const [jobs, setJobs] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchJobs() {
// //       try {
// //         const res = await axiosInstance.get("/admin/jobs"); // Create this API to return all campaigns
// //         setJobs(res.data.campaigns);
// //       } catch (err) {
// //         setJobs([]);
// //       }
// //       setLoading(false);
// //     }
// //     fetchJobs();
// //   }, []);

// //   if (loading) return <div className="text-center py-8">Loading jobs...</div>;
// //   if (!jobs.length) return <div className="text-center py-8">No campaigns found.</div>;

// //   return (
// //     <div className="overflow-x-auto">
// //       <table className="min-w-full bg-white rounded-xl shadow">
// //         <thead>
// //           <tr className="bg-blue-100 text-blue-700">
// //             <th className="p-3 text-left">Campaign</th>
// //             <th className="p-3">Space</th>
// //             <th className="p-3">City</th>
// //             <th className="p-3">Start</th>
// //             <th className="p-3">End</th>
// //             <th className="p-3">Status</th>
// //             <th className="p-3">Bids</th>
// //             <th className="p-3"></th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {jobs.map(job => (
// //             <tr key={job._id} className="border-b">
// //               <td className="p-3 font-semibold">{job.campaignName}</td>
// //               <td className="p-3">{job.spaceId?.spaceName || "-"}</td>
// //               <td className="p-3">{job.rfqDetails?.city || "-"}</td>
// //               <td className="p-3">{job.startDate?.slice(0,10) || "-"}</td>
// //               <td className="p-3">{job.endDate?.slice(0,10) || "-"}</td>
// //               <td className="p-3">{job.status}</td>
// //               <td className="p-3">{job.quotesCount || 0}</td>
// //               <td className="p-3">
// //                 <button className="bg-blue-600 text-white px-4 py-2 rounded">
// //                   View
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";

// export default function AdminJobsTable() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal State
//   const [open, setOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [quotes, setQuotes] = useState([]);
//   const [quotesLoading, setQuotesLoading] = useState(false);

//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const res = await axiosInstance.get("/admin/jobs");
//         setJobs(res.data.campaigns || []);
//       } catch (err) {
//         setJobs([]);
//       }
//       setLoading(false);
//     }
//     fetchJobs();
//   }, []);

//   // Fetch all quotes when view button clicked
//   async function handleView(job) {
//     setSelectedJob(job);
//     setOpen(true);
//     setQuotesLoading(true);
//     try {
//       const res = await axiosInstance.get(`/admin/jobs/${job._id}/quotes`);
//       setQuotes(res.data.quotes || []);
//     } catch (err) {
//       setQuotes([]);
//     }
//     setQuotesLoading(false);
//   }

//   // Helper: status color
//   function statusColor(status) {
//     if (status === "completed") return "bg-green-100 text-green-700";
//     if (status === "approved") return "bg-blue-100 text-blue-700";
//     if (status === "rejected") return "bg-red-100 text-red-700";
//     if (status === "pending") return "bg-yellow-100 text-yellow-700";
//     return "bg-gray-100 text-gray-700";
//   }

//   // Custom modal
//   function CustomModal({ open, onClose, children }) {
//     if (!open) return null;
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center">
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
//         {/* Modal */}
//         <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-8 z-50 animate-fade-in">
//           <button
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
//             onClick={onClose}
//             aria-label="Close"
//             tabIndex={0}
//           >
//             ×
//           </button>
//           {children}
//         </div>
//       </div>
//     );
//   }

//   if (loading) return <div className="text-center py-8">Loading jobs...</div>;
//   if (!jobs.length) return <div className="text-center py-8">No campaigns found.</div>;

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white rounded-xl shadow">
//         <thead>
//           <tr className="bg-blue-100 text-blue-700">
//             <th className="p-3 text-left">Campaign</th>
//             <th className="p-3">Space</th>
//             <th className="p-3">City</th>
//             <th className="p-3">BlookPerks</th>
//             <th className="p-3">Payment</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Quotes</th>
//             <th className="p-3"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobs.map(job => (
//             <tr key={job._id} className="border-b">
//               <td className="p-3 font-semibold">{job.campaignName}</td>
//               <td className="p-3">{job.spaceId?.spaceName || "-"}</td>
//               <td className="p-3">{job.rfqDetails?.city || "-"}</td>
//               <td className="p-3">
//                 {job.isBlookPerksApplied
//                   ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Enabled/Required</span>
//                   : <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">No</span>}
//               </td>
//               <td className="p-3">
//                 <span className={`px-2 py-1 rounded text-xs ${job.paymentStatus === "paid"
//                   ? "bg-green-100 text-green-700"
//                   : "bg-orange-100 text-orange-700"}`}>
//                   {job.paymentStatus === "paid" ? "Paid" : "Unpaid"}
//                 </span>
//               </td>
//               <td className="p-3">
//                 <span className={`px-2 py-1 rounded text-xs ${statusColor(job.status)}`}>{job.status}</span>
//               </td>
//               <td className="p-3">{job.quotesCount || 0}</td>
//               <td className="p-3">
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded"
//                   onClick={() => handleView(job)}>
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for details + all quotes */}
//       <CustomModal open={open && selectedJob} onClose={() => setOpen(false)}>
//         {selectedJob && (
//           <div>
//             <h2 className="text-2xl font-bold mb-3">{selectedJob.campaignName}</h2>
//             <div className="mb-2 space-y-1">
//               <div><b>Space:</b> {selectedJob.spaceId?.spaceName}</div>
//               <div><b>City:</b> {selectedJob.rfqDetails?.city || "-"}</div>
//               <div>
//                 <b>Status:</b> <span className={statusColor(selectedJob.status)}>{selectedJob.status}</span>
//               </div>
//               <div>
//                 <b>BlookPerks QR Required:</b> {selectedJob.isBlookPerksApplied ? "Yes" : "No"}
//               </div>
//               {selectedJob.isBlookPerksApplied && (
//                 <div>
//                   <b>QR Status:</b> {selectedJob.qrCodes?.length ? "Generated" : "Pending"}
//                 </div>
//               )}
//               <div><b>Payment Status:</b> {selectedJob.paymentStatus || "unpaid"}</div>
//             </div>
//             <h3 className="font-semibold text-lg mt-4 mb-2">All Quotes/Bids</h3>
//             {quotesLoading ? (
//               <div>Loading quotes...</div>
//             ) : quotes.length === 0 ? (
//               <div className="text-gray-500">No quotes submitted yet.</div>
//             ) : (
//               <table className="min-w-full border">
//                 <thead>
//                   <tr className="bg-blue-50">
//                     <th className="p-2">Vendor</th>
//                     <th className="p-2">Amount</th>
//                     <th className="p-2">Timeline</th>
//                     <th className="p-2">Comments</th>
//                     <th className="p-2">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {quotes.map(q => (
//                     <tr key={q._id} className="border-t">
//                       <td className="p-2">{q.vendorId?.companyName || q.vendorId?.fullName}</td>
//                       <td className="p-2">₹{q.quoteAmount}</td>
//                       <td className="p-2">{q.timeline}</td>
//                       <td className="p-2">{q.comments}</td>
//                       <td className="p-2">{q.status}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         )}
//       </CustomModal>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function AdminJobsTable() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [quotesLoading, setQuotesLoading] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await axiosInstance.get("/admin/jobs");
        setJobs(res.data.campaigns || []);
      } catch (err) {
        setJobs([]);
      }
      setLoading(false);
    }
    fetchJobs();
  }, []);

  // Fetch all quotes when view button clicked
  async function handleView(job) {
    setSelectedJob(job);
    setOpen(true);
    setQuotesLoading(true);
    try {
      const res = await axiosInstance.get(`/admin/jobs/${job._id}/quotes`);
      setQuotes(res.data.quotes || []);
    } catch (err) {
      setQuotes([]);
    }
    setQuotesLoading(false);
  }

  // Helper: status color
  function statusColor(status) {
    if (status === "completed") return "bg-green-100 text-green-700";
    if (status === "approved") return "bg-blue-100 text-blue-700";
    if (status === "rejected") return "bg-red-100 text-red-700";
    if (status === "pending") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  }

  // Custom modal
  function CustomModal({ open, onClose, children }) {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-8 z-50 animate-fade-in">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
            onClick={onClose}
            aria-label="Close"
            tabIndex={0}
          >
            ×
          </button>
          {children}
        </div>
      </div>
    );
  }

  if (loading) return <div className="text-center py-8">Loading jobs...</div>;
  if (!jobs.length) return <div className="text-center py-8">No campaigns found.</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-blue-100 text-blue-700">
            <th className="p-3 text-left">Campaign</th>
            <th className="p-3">Space</th>
            <th className="p-3">City</th>
            <th className="p-3">BlookPerks</th>
            <th className="p-3">Payment</th>
            <th className="p-3">Status</th>
            <th className="p-3">Quotes</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job._id} className="border-b">
              <td className="p-3 font-semibold">{job.campaignName}</td>
              <td className="p-3">{job.spaceId?.spaceName || "-"}</td>
              <td className="p-3">{job.rfqDetails?.city || "-"}</td>
              <td className="p-3">
                {job.isBlookPerksApplied
                  ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Enabled/Required</span>
                  : <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">No</span>}
              </td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded text-xs ${job.paymentStatus === "paid"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"}`}>
                  {job.paymentStatus === "paid" ? "Paid" : "Unpaid"}
                </span>
              </td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded text-xs ${statusColor(job.status)}`}>{job.status}</span>
              </td>
              <td className="p-3">{job.quotesCount || 0}</td>
              <td className="p-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => handleView(job)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for details + all quotes */}
      <CustomModal open={open && selectedJob} onClose={() => setOpen(false)}>
        {selectedJob && (
          <div>
            <h2 className="text-2xl font-bold mb-3">{selectedJob.campaignName}</h2>
            <div className="mb-2 space-y-1">
              <div><b>Space:</b> {selectedJob.spaceId?.spaceName}</div>
              <div><b>City:</b> {selectedJob.rfqDetails?.city || "-"}</div>
              <div>
                <b>Status:</b> <span className={statusColor(selectedJob.status)}>{selectedJob.status}</span>
              </div>
              <div>
                <b>BlookPerks QR Required:</b> {selectedJob.isBlookPerksApplied ? "Yes" : "No"}
              </div>
              {selectedJob.isBlookPerksApplied && (
                <div>
                  <b>QR Status:</b> {selectedJob.qrCodes?.length ? "Generated" : "Pending"}
                </div>
              )}
              <div><b>Payment Status:</b> {selectedJob.paymentStatus || "unpaid"}</div>
            </div>
            <h3 className="font-semibold text-lg mt-4 mb-2">All Quotes/Bids</h3>
            {quotesLoading ? (
              <div>Loading quotes...</div>
            ) : quotes.length === 0 ? (
              <div className="text-gray-500">No quotes submitted yet.</div>
            ) : (
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="p-2">Vendor</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Timeline</th>
                    <th className="p-2">Comments</th>
                    <th className="p-2">Attachments</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map(q => (
                    <tr key={q._id} className="border-t">
                      <td className="p-2">{q.vendorId?.companyName || q.vendorId?.fullName || q.vendorId?.email || "-"}</td>
                      <td className="p-2">₹{q.quotedAmount || "-"}</td>
                      <td className="p-2">{q.estimatedTimeline || "-"}</td>
                      <td className="p-2">{q.message || "-"}</td>
                      <td className="p-2">
                        {q.attachmentLinks?.length > 0
                          ? q.attachmentLinks.map((url, i) => (
                              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs mr-2">
                                Attachment {i + 1}
                              </a>
                            ))
                          : "-"}
                      </td>
                      <td className="p-2">{q.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </CustomModal>
    </div>
  );
}
