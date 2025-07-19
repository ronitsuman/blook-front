// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";

// const statusColors = {
//   "in-progress": "bg-indigo-100 text-indigo-700",
//   "pending": "bg-yellow-100 text-yellow-700",
//   "completed": "bg-green-100 text-green-700",
//   "rejected": "bg-red-100 text-red-700",
// };

// export default function VendorJobsTable() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axiosInstance
//       .get("/vendor/dashboard/jobs")
//       .then(res => {
//         setJobs(Array.isArray(res.data.jobs) ? res.data.jobs : []);
//         setLoading(false);
//       })
//       .catch(() => {
//         setJobs([]);
//         setLoading(false);
//       });
//   }, []);

//   const handleMarkComplete = async (campaignId) => {
//     if (!window.confirm("Are you sure to mark this job as completed?")) return;
//     setUploading(campaignId);
//     try {
//       // Optionally add proof file upload here
//       await axiosInstance.post(`/vendor/dashboard/jobs/${campaignId}/complete`, { proofLinks: [] });
//       // Refetch jobs
//       const res = await axiosInstance.get("/vendor/dashboard/jobs");
//       setJobs(Array.isArray(res.data.jobs) ? res.data.jobs : []);
//     } catch (err) {
//       alert("Failed to mark as complete");
//     } finally {
//       setUploading(null);
//     }
//   };

//   if (loading)
//     return <div className="animate-pulse text-lg text-gray-400">Loading jobs...</div>;

//   if (!jobs.length)
//     return <div className="text-gray-500 py-10">No jobs assigned yet.</div>;

//   return (
//     <div className="overflow-x-auto rounded-xl shadow border border-blue-100 bg-white">
//       <table className="min-w-full">
//         <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
//           <tr>
//             <th className="px-4 py-3 text-left">Campaign</th>
//             <th className="px-4 py-3 text-left">Advertiser</th>
//             <th className="px-4 py-3 text-left">Space</th>
//             <th className="px-4 py-3 text-left">Dates</th>
//             <th className="px-4 py-3 text-left">Status</th>
//             <th className="px-4 py-3"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobs.map(job => (
//             <tr key={job._id} className="border-t">
//               <td className="px-4 py-3 font-semibold">{job.campaignName}</td>
//               <td className="px-4 py-3">
//                 {job.advertiserId?.advertiserProfile?.fullName}
//                 <div className="text-xs text-gray-500">
//                   {job.advertiserId?.advertiserProfile?.companyName}
//                 </div>
//               </td>
//               <td className="px-4 py-3">
//                 {job.spaceId?.spaceName}
//                 <div className="text-xs text-gray-500">
//                   {job.spaceId?.location?.address}
//                 </div>
//               </td>
//               <td className="px-4 py-3">
//                 <span className="block">{job.startDate?.slice(0,10)} -</span>
//                 <span className="block">{job.endDate?.slice(0,10)}</span>
//               </td>
//               <td className="px-4 py-3">
//                 <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${statusColors[job.status] || "bg-gray-100 text-gray-500"}`}>{job.status}</span>
//               </td>
//               <td className="px-4 py-3">
//                 {job.status === "in-progress" && (
//                   <button
//                     onClick={() => handleMarkComplete(job._id)}
//                     disabled={uploading === job._id}
//                     className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
//                   >
//                     {uploading === job._id ? "Marking..." : "Mark Complete"}
//                   </button>
//                 )}
//                 {job.status === "completed" && (
//                   <span className="text-green-600 font-semibold">Done</span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";

// // Status badge colors
// const statusColors = {
//   "in-progress": "bg-indigo-100 text-indigo-700",
//   "pending": "bg-yellow-100 text-yellow-700",
//   "completed": "bg-green-100 text-green-700",
//   "rejected": "bg-red-100 text-red-700",
// };

// export default function VendorJobsTable() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [proofFiles, setProofFiles] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   // Fetch jobs list on mount
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = () => {
//     setLoading(true);
//     axiosInstance
//       .get("/vendor/dashboard/jobs")
//       .then(res => {
//         setJobs(Array.isArray(res.data.jobs) ? res.data.jobs : []);
//         setLoading(false);
//       })
//       .catch(() => {
//         setJobs([]);
//         setLoading(false);
//       });
//   };

//   // Proof file input handler (multiple)
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setProofFiles(files);
//   };

//   // Open modal for Mark Complete
//   const handleMarkComplete = (job) => {
//     setSelectedJob(job);
//     setShowModal(true);
//     setProofFiles([]);
//   };

//   // Submit proof to backend (simulate upload, TODO: integrate Cloudinary)
//   const handleSubmitProof = async () => {
//     setUploading(true);
//     try {
//       // For demo, use local file object URLs as fake cloud URLs
//       const proofLinks = proofFiles.map(file => URL.createObjectURL(file));
//       await axiosInstance.post(`/vendor/dashboard/jobs/${selectedJob._id}/complete`, { proofLinks });
//       setShowModal(false);
//       setProofFiles([]);
//       setSelectedJob(null);
//       fetchJobs(); // Refresh jobs table
//     } catch (err) {
//       alert("Failed to submit proof: " + (err?.response?.data?.message || err.message));
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (loading)
//     return <div className="animate-pulse text-lg text-gray-400">Loading jobs...</div>;

//   if (!jobs.length)
//     return <div className="text-gray-500 py-10">No jobs assigned yet.</div>;

//   return (
//     <>
//       <div className="overflow-x-auto rounded-xl shadow border border-blue-100 bg-white">
//         <table className="min-w-full">
//           <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
//             <tr>
//               <th className="px-4 py-3 text-left">Campaign</th>
//               <th className="px-4 py-3 text-left">Advertiser</th>
//               <th className="px-4 py-3 text-left">Space</th>
//               <th className="px-4 py-3 text-left">Dates</th>
//               <th className="px-4 py-3 text-left">Status</th>
//               <th className="px-4 py-3"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map(job => (
//               <tr key={job._id} className="border-t">
//                 <td className="px-4 py-3 font-semibold">{job.campaignName}</td>
//                 <td className="px-4 py-3">
//                   {job.advertiserId?.advertiserProfile?.fullName}
//                   <div className="text-xs text-gray-500">
//                     {job.advertiserId?.advertiserProfile?.companyName}
//                   </div>
//                 </td>
//                 <td className="px-4 py-3">
//                   {job.spaceId?.spaceName}
//                   <div className="text-xs text-gray-500">
//                     {job.spaceId?.location?.address}
//                   </div>
//                 </td>
//                 <td className="px-4 py-3">
//                   <span className="block">{job.startDate?.slice(0,10)} -</span>
//                   <span className="block">{job.endDate?.slice(0,10)}</span>
//                 </td>
//                 <td className="px-4 py-3">
//                   <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${statusColors[job.status] || "bg-gray-100 text-gray-500"}`}>{job.status}</span>
//                 </td>
//                 <td className="px-4 py-3">
//                   {job.status === "in-progress" && (
//                     <button
//                       onClick={() => handleMarkComplete(job)}
//                       className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
//                     >
//                       Mark Complete
//                     </button>
//                   )}
//                   {job.status === "completed" && (
//                     <span className="text-green-600 font-semibold">Done</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for proof upload */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute right-4 top-4 text-gray-400 hover:text-blue-600 text-2xl font-bold"
//             >×</button>
//             <h2 className="text-lg font-bold mb-2 text-blue-800">Upload Completion Proof</h2>
//             <input
//               type="file"
//               multiple
//               accept="image/*,application/pdf"
//               className="block mb-4"
//               onChange={handleFileChange}
//             />
//             <div className="flex flex-wrap gap-2 mb-4">
//               {proofFiles.map((file, idx) => (
//                 <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
//                   {file.name}
//                 </span>
//               ))}
//             </div>
//             <button
//               className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
//               onClick={handleSubmitProof}
//               disabled={uploading || !proofFiles.length}
//             >
//               {uploading ? "Uploading..." : "Submit Proof & Complete"}
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

// Status badge colors
const statusColors = {
  "in-progress": "bg-indigo-100 text-indigo-700",
  "pending": "bg-yellow-100 text-yellow-700",
  "completed": "bg-green-100 text-green-700",
  "rejected": "bg-red-100 text-red-700",
};

export default function VendorJobsTable() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [proofFiles, setProofFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Fetch jobs list on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    setLoading(true);
    axiosInstance
      .get("/vendor/dashboard/jobs")
      .then(res => {
        setJobs(Array.isArray(res.data.jobs) ? res.data.jobs : []);
        setLoading(false);
      })
      .catch(() => {
        setJobs([]);
        setLoading(false);
      });
  };

  // Proof file input handler (multiple)
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProofFiles(files);
  };

  // Open modal for Mark Complete
  const handleMarkComplete = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setProofFiles([]);
  };

  // Submit proof to backend using FormData for proper upload
  const handleSubmitProof = async () => {
    setUploading(true);
    try {
      const formData = new FormData();
      proofFiles.forEach(file => formData.append("proof", file)); // field name: proof

      await axiosInstance.patch(
        `/vendor/dashboard/jobs/${selectedJob._id}/complete`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setShowModal(false);
      setProofFiles([]);
      setSelectedJob(null);
      fetchJobs(); // Refresh jobs table
    } catch (err) {
      alert("Failed to submit proof: " + (err?.response?.data?.message || err.message));
    } finally {
      setUploading(false);
    }
  };

  if (loading)
    return <div className="animate-pulse text-lg text-gray-400">Loading jobs...</div>;

  if (!jobs.length)
    return <div className="text-gray-500 py-10">No jobs assigned yet.</div>;

  return (
    <>
      <div className="overflow-x-auto rounded-xl shadow border border-blue-100 bg-white">
        <table className="min-w-full">
          <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
            <tr>
              <th className="px-4 py-3 text-left">Campaign</th>
              <th className="px-4 py-3 text-left">Advertiser</th>
              <th className="px-4 py-3 text-left">Space</th>
              <th className="px-4 py-3 text-left">Dates</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job._id} className="border-t">
                <td className="px-4 py-3 font-semibold">{job.campaignName}</td>
                <td className="px-4 py-3">
                  {job.advertiserId?.advertiserProfile?.fullName}
                  <div className="text-xs text-gray-500">
                    {job.advertiserId?.advertiserProfile?.companyName}
                  </div>
                </td>
                <td className="px-4 py-3">
                  {job.spaceId?.spaceName}
                  <div className="text-xs text-gray-500">
                    {job.spaceId?.location?.address}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="block">{job.startDate?.slice(0,10)} -</span>
                  <span className="block">{job.endDate?.slice(0,10)}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${statusColors[job.status] || "bg-gray-100 text-gray-500"}`}>{job.status}</span>
                </td>
                <td className="px-4 py-3">
                  {job.status === "in-progress" && (
                    <button
                      onClick={() => handleMarkComplete(job)}
                      className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                      Mark Complete
                    </button>
                  )}
                  {job.status === "completed" && (
                    <span className="text-green-600 font-semibold">Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for proof upload */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-blue-600 text-2xl font-bold"
            >×</button>
            <h2 className="text-lg font-bold mb-2 text-blue-800">Upload Completion Proof</h2>
            <input
              type="file"
              multiple
              accept="image/*,application/pdf"
              className="block mb-4"
              onChange={handleFileChange}
              disabled={uploading}
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {proofFiles.map((file, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                  {file.name}
                </span>
              ))}
            </div>
            <button
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
              onClick={handleSubmitProof}
              disabled={uploading || !proofFiles.length}
            >
              {uploading ? "Uploading..." : "Submit Proof & Complete"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
