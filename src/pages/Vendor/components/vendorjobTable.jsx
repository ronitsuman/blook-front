// import { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";
// import { toast } from "react-toastify";

// // Custom modal (no external dep)
// function CustomModal({ open, onClose, children }) {
//   if (!open) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
//       <div className="relative bg-white rounded-xl shadow-xl max-w-lg w-full p-8 z-50">
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
//           onClick={onClose}
//           aria-label="Close"
//         >
//           ×
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function VendorJobDiscoveryPage() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Quote modal state
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);

//   // Quote form fields
//   const [quoteAmount, setQuoteAmount] = useState("");
//   const [timeline, setTimeline] = useState("");
//   const [comments, setComments] = useState("");
//   const [file, setFile] = useState(null);
//   const [submitting, setSubmitting] = useState(false);

//   // Fetch open jobs
//   useEffect(() => {
//     async function fetchJobs() {
//       setLoading(true);
//       try {
//         const res = await axiosInstance.get("/jobs/jobs");
//         setJobs(res.data.campaigns || []);
//       } catch (err) {
//         setJobs([]);
//       }
//       setLoading(false);
//     }
//     fetchJobs();
//   }, []);

//   // Open quote modal
//   const handleOpenQuoteModal = (job) => {
//     setSelectedJob(job);
//     setQuoteAmount("");
//     setTimeline("");
//     setComments("");
//     setFile(null);
//     setModalOpen(true);
//   };

//   // Submit quote
//   const handleSubmitQuote = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       const formData = new FormData();
//       formData.append("campaignId", selectedJob._id);
//       formData.append("quoteAmount", quoteAmount);
//       formData.append("timeline", timeline);
//       formData.append("comments", comments);
//       if (file) formData.append("artworkFile", file);

//       await axiosInstance.post("/vendor/quotes", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       toast.success("Quote submitted!");
//       setModalOpen(false);
//       // Optionally: remove that job from the list (since quote submitted)
//       setJobs(jobs.filter(j => j._id !== selectedJob._id));
//     } catch (err) {
//       toast.error("Failed to submit quote");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <div className="text-center py-8">Loading jobs...</div>;
//   if (!jobs.length) return <div className="text-center py-8">No open jobs available.</div>;

//   return (
//     <div className="max-w-5xl mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-8 text-blue-800">Open Campaign Jobs</h1>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
//         {jobs.map(job => (
//           <div key={job._id} className="bg-white shadow-xl rounded-xl p-6 flex flex-col">
//             <div className="flex-1">
//               <h2 className="font-semibold text-xl text-blue-700 mb-1">{job.campaignName}</h2>
//               <div className="mb-2 text-gray-600">
//                 <div><b>Space:</b> {job.spaceId?.spaceName || "-"}</div>
//                 <div><b>City:</b> {job.rfqDetails?.city || "-"}</div>
//                 <div><b>Start:</b> {job.startDate?.slice(0,10) || "-"}</div>
//                 <div><b>End:</b> {job.endDate?.slice(0,10) || "-"}</div>
//                 <div><b>Status:</b> <span className="capitalize">{job.status}</span></div>
//                 <div>
//                   <b>BlookPerks:</b>{" "}
//                   {job.isBlookPerksApplied
//                     ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Required</span>
//                     : <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">No</span>}
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500">
//                 <b>Job Type:</b> {job.rfqDetails?.jobType || "-"}
//               </div>
//               <div className="text-sm text-gray-500">
//                 <b>Description:</b> {job.rfqDetails?.jobDescription || "-"}
//               </div>
//             </div>
//             <button
//               className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-800"
//               onClick={() => handleOpenQuoteModal(job)}
//             >
//               Submit Quote
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Submit Quote Modal */}
//       <CustomModal open={modalOpen} onClose={() => setModalOpen(false)}>
//         <form className="space-y-4" onSubmit={handleSubmitQuote} encType="multipart/form-data">
//           <h2 className="text-xl font-bold mb-2">Submit Quote for <span className="text-blue-700">{selectedJob?.campaignName}</span></h2>
//           <input
//             className="input w-full"
//             type="number"
//             min="0"
//             required
//             placeholder="Quote Amount (₹)"
//             value={quoteAmount}
//             onChange={e => setQuoteAmount(e.target.value)}
//           />
//           <input
//             className="input w-full"
//             type="text"
//             required
//             placeholder="Timeline (days or completion date)"
//             value={timeline}
//             onChange={e => setTimeline(e.target.value)}
//           />
//           <textarea
//             className="input w-full"
//             required
//             placeholder="Comments or Approach"
//             value={comments}
//             onChange={e => setComments(e.target.value)}
//           />
//           <input
//             className="input w-full"
//             type="file"
//             accept="image/*,application/pdf"
//             onChange={e => setFile(e.target.files[0])}
//           />
//           <div className="flex gap-4 justify-end">
//             <button
//               type="button"
//               className="px-4 py-2 rounded bg-gray-200"
//               onClick={() => setModalOpen(false)}
//             >Cancel</button>
//             <button
//               type="submit"
//               className="px-6 py-2 rounded bg-purple-700 text-white font-semibold"
//               disabled={submitting}
//             >
//               {submitting ? "Submitting..." : "Submit Quote"}
//             </button>
//           </div>
//         </form>
//       </CustomModal>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";
// import { toast } from "react-toastify";

// // Icons row for details
// function InfoRow({ icon, label, value }) {
//   return (
//     <div className="flex items-center gap-2 text-gray-700 mb-1 text-sm">
//       <span className="text-xl">{icon}</span>
//       <span className="font-semibold">{label}:</span>
//       <span className="font-normal text-gray-600">
//         {value !== undefined && value !== null && value !== "" ? value : "-"}
//       </span>
//     </div>
//   );
// }

// // Modal (no dependency)
// function CustomModal({ open, onClose, children }) {
//   if (!open) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
//       <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 z-50 animate-fade-in">
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
//           onClick={onClose}
//           aria-label="Close"
//         >
//           ×
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function VendorJobDiscoveryPage() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Quote modal state
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);

//   // Quote form fields
//   const [quoteAmount, setQuoteAmount] = useState("");
//   const [timeline, setTimeline] = useState("");
//   const [comments, setComments] = useState("");
//   const [file, setFile] = useState(null);
//   const [submitting, setSubmitting] = useState(false);

//   // Fetch open jobs (with space populated!)
//   useEffect(() => {
//     async function fetchJobs() {
//       setLoading(true);
//       try {
//         const res = await axiosInstance.get("/jobs/jobs?withSpace=1");
//         setJobs(res.data.campaigns || []);
//       } catch (err) {
//         setJobs([]);
//       }
//       setLoading(false);
//     }
//     fetchJobs();
//   }, []);

//   // Open quote modal
//   const handleOpenQuoteModal = (job) => {
//     setSelectedJob(job);
//     setQuoteAmount("");
//     setTimeline("");
//     setComments("");
//     setFile(null);
//     setModalOpen(true);
//   };

//   // Submit quote
//   const handleSubmitQuote = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       const formData = new FormData();
//       formData.append("campaignId", selectedJob._id);
//       formData.append("quotedAmount", quoteAmount);
//       formData.append("estimatedTimeline", timeline);
//       formData.append("message", comments);
//       if (file) formData.append("attachments", file);

//       await axiosInstance.post("/vendor/quotes/submit-quote", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       toast.success("Quote submitted!");
//       setModalOpen(false);
//       setJobs(jobs.filter(j => j._id !== selectedJob._id));
//     } catch (err) {
//       toast.error("Failed to submit quote");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Helper for images (space image)
//   function getSpaceImage(space) {
//     return (
//       space?.images?.frontFacade ||
//       space?.images?.interiorView ||
//       space?.images?.brandingZone ||
//       (Array.isArray(space?.images?.otherPhotos) && space?.images?.otherPhotos?.[0]) ||
//       "/placeholder-space.jpg"
//     );
//   }

//   // For readability (safe fields)
//   function bold(label, value) {
//     return (
//       <span className="mr-4">
//         <b>{label}:</b> {value !== undefined && value !== null && value !== "" ? value : "-"}
//       </span>
//     );
//   }

//   if (loading) return <div className="text-center py-8">Loading jobs...</div>;
//   if (!jobs.length) return <div className="text-center py-8">No open jobs available.</div>;

//   return (
//     <div className="max-w-6xl mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-8 text-blue-800">Open Campaign Jobs</h1>
//       <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
//         {jobs.map(job => {
//           const space = typeof job.spaceId === "object" && job.spaceId !== null ? job.spaceId : {};
//           return (
//             <div key={job._id} className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden border border-blue-100">
//               {/* Space Image */}
//               <div className="md:w-1/3 flex items-center justify-center bg-gray-100">
//                 <img
//                   src={getSpaceImage(space)}
//                   alt={space.spaceName || "Space"}
//                   className="object-cover w-full h-44 md:h-full"
//                   loading="lazy"
//                   style={{ minHeight: "180px", maxHeight: "250px" }}
//                   onError={e => (e.target.src = "/placeholder-space.jpg")}
//                 />
//               </div>
//               {/* Space & Campaign Info */}
//               <div className="md:w-2/3 flex-1 flex flex-col p-6 gap-2">
//                 <div className="flex flex-wrap gap-x-5 gap-y-1 mb-2">
//                   <span className="text-xl font-bold text-blue-700">{job.campaignName || "-"}</span>
//                   <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg uppercase tracking-wider">{job.status || "-"}</span>
//                 </div>
                
//                 {/* Client Budget */}
//                 {job.rfqDetails?.budget && (
//                   <div className="mb-2">
//                     <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">
//                       Client Budget: ₹{job.rfqDetails.budget}
//                     </span>
//                   </div>
//                 )}

//                 <div className="mb-2">
//                   <InfoRow icon="🏢" label="Space" value={space.spaceName} />
//                   <InfoRow icon="📍" label="Address" value={space.location?.address} />
//                   <InfoRow icon="🏷️" label="Type" value={space.spaceType} />
//                   <InfoRow icon="👤" label="Owner" value={space.ownerName} />
//                 </div>
//                 <div className="mb-2 flex flex-wrap gap-2 text-xs">
//                   {bold("City", job.rfqDetails?.city)}
//                   {bold("Start", job.startDate?.slice(0,10))}
//                   {bold("End", job.endDate?.slice(0,10))}
//                   {bold("Branding", Array.isArray(job.brandingTypes) ? job.brandingTypes.join(", ") : "")}
//                 </div>
//                 <div className="mb-2 text-gray-700">
//                   <InfoRow icon="📝" label="Campaign Desc" value={job.description} />
//                   <InfoRow icon="🔧" label="Job Type" value={job.rfqDetails?.jobType} />
//                   <InfoRow icon="ℹ️" label="Job Desc" value={job.rfqDetails?.jobDescription} />
//                   {space?.description &&
//                     <InfoRow icon="🏷️" label="Space Desc" value={space.description} />}
//                 </div>
//                 <div className="mb-2 text-xs text-gray-600">
//                   <span className="inline-block mr-3">
//                     <b>Footfall:</b>{" "}
//                     {space.footfall
//                       ? `Weekday: ${space.footfall.weekday || "-"}, Weekend: ${space.footfall.weekend || "-"}`
//                       : "-"}
//                   </span>
//                   <span className="inline-block mr-3">
//                     <b>Demographics:</b>{" "}
//                     {space.demographics && Array.isArray(space.demographics.ageGroups)
//                       ? `Ages: ${space.demographics.ageGroups.join(", ")}`
//                       : "-"}
//                   </span>
//                 </div>
//                 <div className="mb-2">
//                   <span className="font-semibold text-sm">BlookPerks:</span>{" "}
//                   {job.isBlookPerksApplied
//                     ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Required (QR to be enabled)</span>
//                     : <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">No</span>}
//                 </div>
                
//                 {/* Creative Artworks / Files */}
//                 {Array.isArray(job.creativeLinks) && job.creativeLinks.length > 0 && (
//                   <div className="mb-3">
//                     <div className="font-semibold text-sm mb-1 flex items-center gap-2">
//                       <span className="text-blue-600">🎨</span> Artwork / Creative Files:
//                     </div>
//                     <div className="flex flex-wrap gap-3">
//                       {job.creativeLinks.map((fileUrl, idx) => {
//                         const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(fileUrl);
//                         const isPdf = /\.pdf$/i.test(fileUrl);
//                         return (
//                           <div key={idx} className="flex flex-col items-center">
//                             {isImage ? (
//                               <a href={fileUrl} target="_blank" rel="noopener noreferrer">
//                                 <img
//                                   src={fileUrl}
//                                   alt={`Artwork ${idx + 1}`}
//                                   className="w-24 h-24 object-contain rounded border shadow"
//                                 />
//                               </a>
//                             ) : isPdf ? (
//                               <a
//                                 href={fileUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-3 py-2 bg-gray-100 rounded shadow text-blue-700 text-xs mt-1 flex items-center gap-1"
//                               >
//                                 <span className="text-lg">📄</span> View PDF
//                               </a>
//                             ) : (
//                               <a
//                                 href={fileUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-3 py-2 bg-gray-100 rounded shadow text-blue-700 text-xs mt-1 flex items-center gap-1"
//                               >
//                                 <span className="text-lg">📎</span> View File
//                               </a>
//                             )}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {/* Submit Quote Button */}
//                 <button
//                   className="mt-2 bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-800 w-full md:w-auto"
//                   onClick={() => handleOpenQuoteModal(job)}
//                 >
//                   Submit Quote
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Submit Quote Modal */}
//       <CustomModal open={modalOpen} onClose={() => setModalOpen(false)}>
//         <form className="space-y-4" onSubmit={handleSubmitQuote} encType="multipart/form-data">
//           {selectedJob?.rfqDetails?.budget && (
//             <div className="mb-1 text-xs text-yellow-800 bg-yellow-50 px-2 py-1 rounded inline-block">
//               Client Budget: ₹{selectedJob.rfqDetails.budget}
//             </div>
//           )}
//           <h2 className="text-xl font-bold mb-2">Submit Quote for <span className="text-blue-700">{selectedJob?.campaignName}</span></h2>
//           <input
//             className="input w-full"
//             type="number"
//             min="0"
//             required
//             placeholder="Quote Amount (₹)"
//             value={quoteAmount}
//             onChange={e => setQuoteAmount(e.target.value)}
//           />
//           <input
//             className="input w-full"
//             type="text"
//             required
//             placeholder="Timeline (days or completion date)"
//             value={timeline}
//             onChange={e => setTimeline(e.target.value)}
//           />
//           <textarea
//             className="input w-full"
//             required
//             placeholder="Comments or Approach"
//             value={comments}
//             onChange={e => setComments(e.target.value)}
//           />
//           <input
//             className="input w-full"
//             type="file"
//             accept="image/*,application/pdf"
//             onChange={e => setFile(e.target.files[0])}
//           />
//           <div className="flex gap-4 justify-end">
//             <button
//               type="button"
//               className="px-4 py-2 rounded bg-gray-200"
//               onClick={() => setModalOpen(false)}
//             >Cancel</button>
//             <button
//               type="submit"
//               className="px-6 py-2 rounded bg-purple-700 text-white font-semibold"
//               disabled={submitting}
//             >
//               {submitting ? "Submitting..." : "Submit Quote"}
//             </button>
//           </div>
//         </form>
//       </CustomModal>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { toast } from "react-toastify";

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 text-gray-700 mb-1 text-sm">
      <span className="text-xl">{icon}</span>
      <span className="font-semibold">{label}:</span>
      <span className="font-normal text-gray-600">
        {value !== undefined && value !== null && value !== "" ? value : "-"}
      </span>
    </div>
  );
}

function CustomModal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 z-50 animate-fade-in">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default function VendorJobDiscoveryPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [quoteAmount, setQuoteAmount] = useState("");
  const [timeline, setTimeline] = useState("");
  const [comments, setComments] = useState("");
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/jobs/jobs?withSpace=1");
        setJobs(res.data.campaigns || []);
      } catch (err) {
        setJobs([]);
      }
      setLoading(false);
    }
    fetchJobs();
  }, []);

  const handleOpenQuoteModal = (job) => {
    setSelectedJob(job);
    setQuoteAmount("");
    setTimeline("");
    setComments("");
    setFile(null);
    setModalOpen(true);
  };

  const handleSubmitQuote = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("campaignId", selectedJob._id);
      formData.append("quotedAmount", quoteAmount);
      formData.append("estimatedTimeline", timeline);
      formData.append("message", comments);
      if (file) formData.append("attachments", file);

      await axiosInstance.post("/vendor/submit-quote", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      toast.success("Quote submitted!");
      setModalOpen(false);
      setJobs(jobs.filter(j => j._id !== selectedJob._id));
    } catch (err) {
      toast.error("Failed to submit quote");
    } finally {
      setSubmitting(false);
    }
  };

  function getSpaceImage(space) {
    return (
      space?.images?.frontFacade ||
      space?.images?.interiorView ||
      space?.images?.brandingZone ||
      (Array.isArray(space?.images?.otherPhotos) && space?.images?.otherPhotos?.[0]) ||
      "/placeholder-space.jpg"
    );
  }

  function bold(label, value) {
    return (
      <span className="mr-4">
        <b>{label}:</b> {value !== undefined && value !== null && value !== "" ? value : "-"}
      </span>
    );
  }

  if (loading) return <div className="text-center py-8">Loading jobs...</div>;
  if (!jobs.length) return <div className="text-center py-8">No open jobs available.</div>;

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Open Campaign Jobs</h1>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
        {jobs.map(job => {
          const space = typeof job.spaceId === "object" && job.spaceId !== null ? job.spaceId : {};
          return (
            <div key={job._id} className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden border border-blue-100">
              {/* Space Image */}
              <div className="md:w-1/3 flex items-center justify-center bg-gray-100">
                <img
                  src={getSpaceImage(space)}
                  alt={space.spaceName || "Space"}
                  className="object-cover w-full h-44 md:h-full"
                  loading="lazy"
                  style={{ minHeight: "180px", maxHeight: "250px" }}
                  onError={e => (e.target.src = "/placeholder-space.jpg")}
                />
              </div>
              <div className="md:w-2/3 flex-1 flex flex-col p-6 gap-2">
                <div className="flex flex-wrap gap-x-5 gap-y-1 mb-2">
                  <span className="text-xl font-bold text-blue-700">{job.campaignName || "-"}</span>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg uppercase tracking-wider">{job.status || "-"}</span>
                </div>
                {/* Client Budget */}
                {job.rfqDetails?.budget && (
                  <div className="mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">
                      Client Budget: ₹{job.rfqDetails.budget}
                    </span>
                  </div>
                )}
                <div className="mb-2">
                  <InfoRow icon="🏢" label="Space" value={space.spaceName} />
                  <InfoRow icon="📍" label="Address" value={space.location?.address} />
                  <InfoRow icon="🏷️" label="Type" value={space.spaceType} />
                  <InfoRow icon="👤" label="Owner" value={space.ownerName} />
                </div>
                <div className="mb-2 flex flex-wrap gap-2 text-xs">
                  {bold("City", job.rfqDetails?.city)}
                  {bold("Start", job.startDate?.slice(0,10))}
                  {bold("End", job.endDate?.slice(0,10))}
                  {bold("Branding", Array.isArray(job.brandingTypes) ? job.brandingTypes.join(", ") : "")}
                </div>
                <div className="mb-2 text-gray-700">
                  <InfoRow icon="📝" label="Campaign Desc" value={job.description} />
                  <InfoRow icon="🔧" label="Job Type" value={job.rfqDetails?.jobType} />
                  <InfoRow icon="ℹ️" label="Job Desc" value={job.rfqDetails?.jobDescription} />
                  {space?.description &&
                    <InfoRow icon="🏷️" label="Space Desc" value={space.description} />}
                </div>
                <div className="mb-2 text-xs text-gray-600">
                  <span className="inline-block mr-3">
                    <b>Footfall:</b>{" "}
                    {space.footfall
                      ? `Weekday: ${space.footfall.weekday || "-"}, Weekend: ${space.footfall.weekend || "-"}`
                      : "-"}
                  </span>
                  <span className="inline-block mr-3">
                    <b>Demographics:</b>{" "}
                    {space.demographics && Array.isArray(space.demographics.ageGroups)
                      ? `Ages: ${space.demographics.ageGroups.join(", ")}`
                      : "-"}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-sm">BlookPerks:</span>{" "}
                  {job.isBlookPerksApplied
                    ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Required (QR to be enabled)</span>
                    : <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">No</span>}
                </div>
                {/* Creative Artworks / Files */}
                {Array.isArray(job.creativeLinks) && job.creativeLinks.length > 0 && (
                  <div className="mb-3">
                    <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                      <span className="text-blue-600">🎨</span> Artwork / Creative Files:
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {job.creativeLinks.map((fileUrl, idx) => {
                        const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(fileUrl);
                        const isPdf = /\.pdf$/i.test(fileUrl);
                        return (
                          <div key={idx} className="flex flex-col items-center">
                            {isImage ? (
                              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                  src={fileUrl}
                                  alt={`Artwork ${idx + 1}`}
                                  className="w-24 h-24 object-contain rounded border shadow"
                                />
                              </a>
                            ) : isPdf ? (
                              <a
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 bg-gray-100 rounded shadow text-blue-700 text-xs mt-1 flex items-center gap-1"
                              >
                                <span className="text-lg">📄</span> View PDF
                              </a>
                            ) : (
                              <a
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 bg-gray-100 rounded shadow text-blue-700 text-xs mt-1 flex items-center gap-1"
                              >
                                <span className="text-lg">📎</span> View File
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <button
                  className="mt-2 bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-800 w-full md:w-auto"
                  onClick={() => handleOpenQuoteModal(job)}
                >
                  Submit Quote
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <CustomModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <form className="space-y-4" onSubmit={handleSubmitQuote} encType="multipart/form-data">
          {selectedJob?.rfqDetails?.budget && (
            <div className="mb-1 text-xs text-yellow-800 bg-yellow-50 px-2 py-1 rounded inline-block">
              Client Budget: ₹{selectedJob.rfqDetails.budget}
            </div>
          )}
          <h2 className="text-xl font-bold mb-2">Submit Quote for <span className="text-blue-700">{selectedJob?.campaignName}</span></h2>
          <input
            className="input w-full"
            type="number"
            min="0"
            required
            placeholder="Quote Amount (₹)"
            value={quoteAmount}
            onChange={e => setQuoteAmount(e.target.value)}
          />
          <input
            className="input w-full"
            type="text"
            required
            placeholder="Timeline (days or completion date)"
            value={timeline}
            onChange={e => setTimeline(e.target.value)}
          />
          <textarea
            className="input w-full"
            required
            placeholder="Comments or Approach"
            value={comments}
            onChange={e => setComments(e.target.value)}
          />
          <input
            className="input w-full"
            type="file"
            accept="image/*,application/pdf"
            onChange={e => setFile(e.target.files[0])}
          />
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-200"
              onClick={() => setModalOpen(false)}
            >Cancel</button>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-purple-700 text-white font-semibold"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Quote"}
            </button>
          </div>
        </form>
      </CustomModal>
    </div>
  );
}
