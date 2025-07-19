// // // src/pages/advertiser/CampaignCreate.jsx
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axiosInstance from "../../../api/axiosInstance";

// // export default function CampaignCreate() {
// //   const bookingData = JSON.parse(localStorage.getItem("blook_booking_for_campaign") || "{}");
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({
// //     campaignName: "",
// //     description: "",
// //     creativeLinks: [""],
// //     worksType: "",
// //     isBlookPerksApplied: false,
// //   });
// //   const [submitting, setSubmitting] = useState(false);

// //   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
// //   const handleCreativeChange = (i, v) => {
// //     const links = [...form.creativeLinks];
// //     links[i] = v;
// //     setForm(f => ({ ...f, creativeLinks: links }));
// //   };

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     setSubmitting(true);
// //     try {
// //       await axiosInstance.post("/campaigns", {
// //         ...form,
// //         bookingId: bookingData._id,
// //         spaceId: bookingData.spaceId?._id || bookingData.spaceId, // just in case
// //         brandingTypes: bookingData.brandingTypes,
// //         startDate: bookingData.fromDate,
// //         endDate: bookingData.toDate,
// //       });
// //       alert("Campaign created successfully!");
// //       navigate("/dashboard/advertiser?tab=campaigns");
// //     } catch (err) {
// //       alert("Failed to create campaign");
// //     }
// //     setSubmitting(false);
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto my-12 bg-white p-8 rounded-xl shadow">
// //       <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>
// //       {/* -- Booking Info Summary -- */}
// //       <div className="mb-4 text-gray-800">
// //         <div><b>Space:</b> {bookingData.spaceId?.spaceCode} — {bookingData.spaceId?.spaceName}</div>
// //         <div><b>Dates:</b> {bookingData.fromDate} to {bookingData.toDate}</div>
// //         <div><b>Branding Types:</b> {(bookingData.brandingTypes || []).join(", ")}</div>
// //         <div><b>Amount:</b> ₹{bookingData.amount}</div>
// //       </div>
// //       {/* -- Campaign Form -- */}
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input required type="text" name="campaignName" placeholder="Campaign Name"
// //           value={form.campaignName} onChange={handleChange} className="w-full border px-3 py-2 rounded"/>
// //         <textarea required name="description" placeholder="Campaign Description"
// //           value={form.description} onChange={handleChange} className="w-full border px-3 py-2 rounded"/>
// //         {/* Creative Links - Simple for demo */}
// //         <label className="block text-sm font-semibold">Creative Links</label>
// //         {form.creativeLinks.map((link, i) => (
// //           <input key={i} type="text" value={link}
// //             onChange={e => handleCreativeChange(i, e.target.value)}
// //             className="w-full border px-3 py-2 rounded mb-2"/>
// //         ))}
// //         <button type="button" onClick={() => setForm(f => ({ ...f, creativeLinks: [...f.creativeLinks, ""] }))}
// //           className="text-blue-600 underline">Add More Creative</button>
// //         <select name="worksType" value={form.worksType} onChange={handleChange}
// //           className="w-full border px-3 py-2 rounded" required>
// //           <option value="">Select Works Type</option>
// //           <option value="self">Self Managed</option>
// //           <option value="blookworks">BlookWorks (Managed)</option>
// //         </select>
// //         <label className="block mt-2">
// //           <input type="checkbox" name="isBlookPerksApplied"
// //             checked={form.isBlookPerksApplied}
// //             onChange={e => setForm(f => ({ ...f, isBlookPerksApplied: e.target.checked }))}
// //           /> Apply BlookPerks Reward?
// //         </label>
// //         <button type="submit" disabled={submitting}
// //           className="w-full bg-blue-600 text-white py-2 rounded font-bold mt-4">
// //           {submitting ? "Creating..." : "Create Campaign"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// // import { useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axiosInstance from "../../../api/axiosInstance";
// // import { toast } from "react-toastify";

// // const BRANDING_TYPES = [
// //   "LED",
// //   "Entry Banner",
// //   "Hoarding",
// //   "Digital Screen",
// //   "Lift Branding",
// //   "Reception",
// //   "Wall Space",
// //   "Custom"
// // ];

// // export default function CreateCampaign() {
// //   const { spaceId } = useParams(); // If coming from space details
// //   const navigate = useNavigate();
// //   const [step, setStep] = useState(1);

// //   // --- Form State ---
// //   const [campaignName, setCampaignName] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [selectedBrandingTypes, setSelectedBrandingTypes] = useState([]);
// //   const [startDate, setStartDate] = useState("");
// //   const [endDate, setEndDate] = useState("");

// //   // RFQ / Vendor
// //   const [worksType, setWorksType] = useState("custom"); // or "blookworks"
// //   const [customVendorName, setCustomVendorName] = useState("");
// //   const [customVendorPhone, setCustomVendorPhone] = useState("");
// //   const [artworkFile, setArtworkFile] = useState(null);

// //   // BlookPerks
// //   const [isBlookPerksApplied, setIsBlookPerksApplied] = useState(false);

// //   // Creative artwork uploads
// //   const [creativeLinks, setCreativeLinks] = useState([]);

// //   // Loading
// //   const [submitting, setSubmitting] = useState(false);

// //   // --- Handlers ---
// //   const handleBrandingTypeChange = (e) => {
// //     const options = Array.from(e.target.selectedOptions).map((o) => o.value);
// //     setSelectedBrandingTypes(options);
// //   };

// //   // Artwork uploader (single or multiple)
// //   const handleArtworkUpload = async (e) => {
// //     const file = e.target.files[0];
// //     setArtworkFile(file);
// //     // Optional: Upload to Cloudinary directly here, else send to backend on submit
// //   };

// //   // --- Step 4: Final submit ---
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitting(true);

// //     // Prepare creativeLinks (artwork file) — in real app, use Cloudinary uploader here
// //     let uploadedArtworkUrl = "";
// //     if (artworkFile) {
// //       const formData = new FormData();
// //       formData.append("file", artworkFile);
// //       formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET"); // replace with yours
// //       const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_NAME/image/upload", {
// //         method: "POST",
// //         body: formData
// //       });
// //       const data = await res.json();
// //       uploadedArtworkUrl = data.secure_url;
// //     }

// //     try {
// //       const payload = {
// //         campaignName,
// //         description,
// //         spaceId,
// //         brandingTypes: selectedBrandingTypes,
// //         startDate,
// //         endDate,
// //         creativeLinks: uploadedArtworkUrl ? [uploadedArtworkUrl] : [],
// //         worksType,
// //         isBlookPerksApplied,
// //         customVendor: worksType === "custom" ? { name: customVendorName, phone: customVendorPhone } : undefined
// //       };
// //       await axiosInstance.post("/campaigns", payload);
// //       toast.success("Campaign created! Next: Wait for vendor quotes or assign vendor.");
// //       navigate("/dashboard/advertiser?tab=campaigns");
// //     } catch (err) {
// //       toast.error("Failed to create campaign.");
// //       console.error(err);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   // --- Steps ---
// //   return (
// //     <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl mt-10 p-8 mb-10 font-sans">
// //       <h1 className="text-3xl font-bold text-blue-900 mb-6">Create New Campaign</h1>
// //       <form className="space-y-8" onSubmit={handleSubmit}>

// //         {/* --- Step 1: Campaign Info --- */}
// //         <section className="space-y-4 border-b pb-6">
// //           <h2 className="text-xl font-semibold text-blue-700 mb-2">Campaign Details</h2>
// //           <div>
// //             <label className="block font-medium">Campaign Name</label>
// //             <input type="text" className="input" required value={campaignName} onChange={e => setCampaignName(e.target.value)} placeholder="Enter campaign name" />
// //           </div>
// //           <div>
// //             <label className="block font-medium">Description</label>
// //             <textarea className="input" required value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe your campaign..." />
// //           </div>
// //           <div>
// //             <label className="block font-medium">Branding Types <span className="text-xs text-gray-500">(Select multiple)</span></label>
// //             <select multiple className="input" required value={selectedBrandingTypes} onChange={handleBrandingTypeChange}>
// //               {BRANDING_TYPES.map((b, i) => <option value={b} key={i}>{b}</option>)}
// //             </select>
// //             <p className="text-xs text-gray-500 mt-1">Ctrl/Cmd + click for multi select.</p>
// //           </div>
// //           <div className="flex gap-4">
// //             <div className="flex-1">
// //               <label className="block font-medium">Start Date</label>
// //               <input type="date" className="input" required value={startDate} onChange={e => setStartDate(e.target.value)} />
// //             </div>
// //             <div className="flex-1">
// //               <label className="block font-medium">End Date</label>
// //               <input type="date" className="input" required value={endDate} onChange={e => setEndDate(e.target.value)} />
// //             </div>
// //           </div>
// //         </section>

// //         {/* --- Step 2: BlookWorks / Vendor RFQ --- */}
// //         <section className="space-y-4 border-b pb-6">
// //           <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
// //             BlookWorks <span className="bg-purple-100 text-purple-700 rounded px-2 py-1 text-xs font-bold">RFQ</span>
// //             <span title="Let BlookMySpace find & onboard top vendors for your campaign. You get multiple quotes to select the best!">
// //               <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
// //             </span>
// //           </h2>
// //           <div className="flex items-center gap-4">
// //             <label className="flex items-center gap-2 font-medium">
// //               <input type="radio" checked={worksType === "blookworks"} onChange={() => setWorksType("blookworks")} />
// //               Use BlookWorks RFQ Flow
// //             </label>
// //             <label className="flex items-center gap-2 font-medium">
// //               <input type="radio" checked={worksType === "custom"} onChange={() => setWorksType("custom")} />
// //               Use My Own Vendor
// //             </label>
// //           </div>
// //           {worksType === "custom" && (
// //             <div className="flex gap-3">
// //               <input type="text" className="input flex-1" placeholder="Vendor Name" value={customVendorName} onChange={e => setCustomVendorName(e.target.value)} />
// //               <input type="tel" className="input flex-1" placeholder="Vendor Phone" value={customVendorPhone} onChange={e => setCustomVendorPhone(e.target.value)} />
// //             </div>
// //           )}
// //           {/* Artwork upload */}
// //           <div>
// //             <label className="block font-medium">Upload Artwork / Design File <span className="text-xs text-gray-500">(optional)</span></label>
// //             <input type="file" className="block mt-1" accept="image/*,application/pdf" onChange={handleArtworkUpload} />
// //           </div>
// //         </section>

// //         {/* --- Step 3: BlookPerks Rewards --- */}
// //         <section className="space-y-3 border-b pb-6">
// //           <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">
// //             BlookPerks <span className="bg-green-100 text-green-700 rounded px-2 py-1 text-xs font-bold">QR & Rewards</span>
// //             <span title="Audience will scan your campaign QR to win rewards & promo codes. Track engagement in your dashboard.">
// //               <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
// //             </span>
// //           </h2>
// //           <label className="flex items-center gap-2 font-medium">
// //             <input
// //               type="checkbox"
// //               checked={isBlookPerksApplied}
// //               onChange={e => setIsBlookPerksApplied(e.target.checked)}
// //             />
// //             Enable BlookPerks (QR rewards, cashback, promo codes)
// //           </label>
// //           {isBlookPerksApplied && (
// //             <div className="rounded bg-green-50 p-3 text-sm border border-green-200">
// //               <b>BlookPerks enabled:</b> Audiences can scan QR at the campaign location and win cashback, promo codes, and more. Track all engagement live in your dashboard.
// //             </div>
// //           )}
// //         </section>

// //         {/* --- Step 4: Submit --- */}
// //         <div className="flex items-center justify-end gap-6 mt-8">
// //           <button
// //             type="submit"
// //             disabled={submitting}
// //             className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-white font-bold"
// //           >
// //             {submitting ? "Creating..." : "Create Campaign"}
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // // Tailwind helper (add to your global css if needed)
// // // .input { @apply w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-400 outline-none transition; }

// // import { useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axiosInstance from "../../../api/axiosInstance";
// // import { toast } from "react-toastify";

// // const BRANDING_TYPES = [
// //   "LED", "Entry Banner", "Hoarding", "Digital Screen",
// //   "Lift Branding", "Reception", "Wall Space", "Custom"
// // ];

// // export default function CreateCampaign() {
// //   const { spaceId } = useParams();
// //   const navigate = useNavigate();

// //   // --- Advertiser extra info ---
// //   const [brandName, setBrandName] = useState("");
// //   const [brandEmail, setBrandEmail] = useState("");
// //   const [contactPerson, setContactPerson] = useState("");

// //   // --- Main campaign info ---
// //   const [campaignName, setCampaignName] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [selectedBrandingTypes, setSelectedBrandingTypes] = useState([]);
// //   const [startDate, setStartDate] = useState("");
// //   const [endDate, setEndDate] = useState("");
// //   const [worksType, setWorksType] = useState("custom");
// //   const [customVendorName, setCustomVendorName] = useState("");
// //   const [customVendorPhone, setCustomVendorPhone] = useState("");
// //   const [artworkFile, setArtworkFile] = useState(null);
// //   const [isBlookPerksApplied, setIsBlookPerksApplied] = useState(false);
// //   const [submitting, setSubmitting] = useState(false);

// //   // Info/UX helpers
// //   const [showWorksInfo, setShowWorksInfo] = useState(false);
// //   const [showPerksInfo, setShowPerksInfo] = useState(false);

// //   // Branding Type handler
// //   const handleBrandingTypeChange = (e) => {
// //     const options = Array.from(e.target.selectedOptions).map((o) => o.value);
// //     setSelectedBrandingTypes(options);
// //   };

// //   // File handler
// //   const handleArtworkUpload = (e) => setArtworkFile(e.target.files[0]);

// //   // Upload to Cloudinary (update creds)
// //   async function uploadArtworkToCloudinary(file) {
// //     const formData = new FormData();
// //     formData.append("file", file);
// //     formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET"); // change this
// //     const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_NAME/image/upload", {
// //       method: "POST", body: formData
// //     });
// //     const data = await res.json();
// //     return data.secure_url;
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitting(true);
// //     let uploadedArtworkUrl = "";
// //     try {
// //       if (artworkFile) {
// //         uploadedArtworkUrl = await uploadArtworkToCloudinary(artworkFile);
// //       }
// //       const payload = {
// //         campaignName,
// //         description,
// //         spaceId,
// //         brandingTypes: selectedBrandingTypes,
// //         startDate,
// //         endDate,
// //         creativeLinks: uploadedArtworkUrl ? [uploadedArtworkUrl] : [],
// //         worksType,
// //         isBlookPerksApplied,
// //         // extra advertiser info for analytics or future, backend me save karna ho to
// //         advertiserInfo: { brandName, brandEmail, contactPerson },
// //         customVendor: worksType === "custom"
// //           ? { name: customVendorName, phone: customVendorPhone }
// //           : undefined
// //       };
// //       await axiosInstance.post("/campaigns", payload);
// //       toast.success("Campaign created! Vendor RFQ/payment next.");
// //       navigate("/dashboard/advertiser?tab=campaigns");
// //     } catch (err) {
// //       toast.error("Failed to create campaign.");
// //       console.error(err);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl mt-10 p-8 mb-10 font-sans">
// //       <h1 className="text-3xl font-bold text-blue-900 mb-6">Create New Campaign</h1>
// //       <form className="space-y-8" onSubmit={handleSubmit}>
        
// //         {/* --- Advertiser Info --- */}
// //         <section className="space-y-3 border-b pb-6">
// //           <h2 className="text-xl font-semibold text-gray-700 mb-2">Advertiser Details</h2>
// //           <div className="flex gap-4">
// //             <input className="input flex-1" required placeholder="Brand Name (e.g. Coca-Cola India)" value={brandName} onChange={e => setBrandName(e.target.value)} />
// //             <input className="input flex-1" required type="email" placeholder="Contact Email (e.g. manager@brand.com)" value={brandEmail} onChange={e => setBrandEmail(e.target.value)} />
// //           </div>
// //           <input className="input" required placeholder="Contact Person Name (e.g. Rahul Sharma)" value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
// //         </section>

// //         {/* --- Campaign Info --- */}
// //         <section className="space-y-4 border-b pb-6">
// //           <h2 className="text-xl font-semibold text-blue-700 mb-2">Campaign Details</h2>
// //           <input type="text" className="input" required value={campaignName}
// //             onChange={e => setCampaignName(e.target.value)}
// //             placeholder="Campaign Name (e.g. July Mall LED Blast)" />
// //           <textarea className="input" required value={description}
// //             onChange={e => setDescription(e.target.value)}
// //             placeholder="Short description (e.g. Premium LED campaign for 5 days, 3 malls)" />
// //           <div>
// //             <label className="block font-medium">Branding Types <span className="text-xs text-gray-500">(Select multiple)</span></label>
// //             <select multiple className="input" required value={selectedBrandingTypes} onChange={handleBrandingTypeChange}>
// //               {BRANDING_TYPES.map((b, i) => <option value={b} key={i}>{b}</option>)}
// //             </select>
// //             <p className="text-xs text-gray-500 mt-1">Eg: LED, Entry Banner, Hoarding. Ctrl/Cmd + click for multi select.</p>
// //           </div>
// //           <div className="flex gap-4">
// //             <input type="date" className="input flex-1" required value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="Start Date" />
// //             <input type="date" className="input flex-1" required value={endDate} onChange={e => setEndDate(e.target.value)} placeholder="End Date" />
// //           </div>
// //         </section>

// //         {/* --- BlookWorks Vendor / RFQ --- */}
// //         <section className="space-y-4 border-b pb-6">
// //           <div className="flex justify-between items-center">
// //             <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
// //               BlookWorks <span className="bg-purple-100 text-purple-700 rounded px-2 py-1 text-xs font-bold">RFQ</span>
// //             </h2>
// //             <button type="button" className="text-sm text-purple-600 underline" onClick={() => setShowWorksInfo(!showWorksInfo)}>
// //               What is this?
// //             </button>
// //           </div>
// //           {showWorksInfo &&
// //             <div className="bg-purple-50 p-3 rounded border mb-2 text-sm text-purple-800">
// //               <b>BlookWorks:</b> Our RFQ (Request for Quote) system allows you to get multiple price quotes from pre-verified vendors. <br />
// //               <b>How it works:</b> <br />
// //               <ol className="list-decimal pl-6">
// //                 <li>Select “BlookWorks” below, then create your campaign.</li>
// //                 <li>Vendors will send you their best quotes for your campaign.</li>
// //                 <li>After you approve a quote, you’ll see the payment option in your dashboard. Only after paying will the vendor start work.</li>
// //               </ol>
// //               <b>Why BlookWorks?</b> - Transparency, choice, and quality assurance!
// //             </div>
// //           }
// //           <div className="flex items-center gap-4">
// //             <label className="flex items-center gap-2 font-medium">
// //               <input type="radio" checked={worksType === "blookworks"} onChange={() => setWorksType("blookworks")} />
// //               Use BlookWorks RFQ (Get Vendor Quotes)
// //             </label>
// //             <label className="flex items-center gap-2 font-medium">
// //               <input type="radio" checked={worksType === "custom"} onChange={() => setWorksType("custom")} />
// //               Use My Own Vendor
// //             </label>
// //           </div>
// //           {worksType === "blookworks" && (
// //             <div className="rounded bg-purple-50 border p-3 text-sm">
// //               <b>Note:</b> After you approve a vendor quote, you’ll be able to pay securely from your dashboard. Only after payment will the campaign start.
// //             </div>
// //           )}
// //           {worksType === "custom" && (
// //             <div className="flex gap-3 mt-2">
// //               <input type="text" className="input flex-1" placeholder="Vendor Name (e.g. AdPrint Solutions)" value={customVendorName} onChange={e => setCustomVendorName(e.target.value)} />
// //               <input type="tel" className="input flex-1" placeholder="Vendor Phone (e.g. 9876543210)" value={customVendorPhone} onChange={e => setCustomVendorPhone(e.target.value)} />
// //             </div>
// //           )}
// //           <div>
// //             <label className="block font-medium">Upload Artwork / Design File <span className="text-xs text-gray-500">(optional)</span></label>
// //             <input type="file" className="block mt-1" accept="image/*,application/pdf" onChange={handleArtworkUpload} />
// //             {artworkFile && (
// //               <div className="text-sm mt-1 text-gray-700">{artworkFile.name}</div>
// //             )}
// //           </div>
// //         </section>

// //         {/* --- BlookPerks Rewards --- */}
// //         <section className="space-y-3 border-b pb-6">
// //           <div className="flex justify-between items-center">
// //             <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">
// //               BlookPerks <span className="bg-green-100 text-green-700 rounded px-2 py-1 text-xs font-bold">QR & Rewards</span>
// //             </h2>
// //             <button type="button" className="text-sm text-green-600 underline" onClick={() => setShowPerksInfo(!showPerksInfo)}>
// //               What is this?
// //             </button>
// //           </div>
// //           {showPerksInfo &&
// //             <div className="rounded bg-green-50 p-3 text-sm border border-green-200 text-green-800">
// //               <b>BlookPerks:</b> Add QR-based rewards and promo codes to your campaign.
// //               <ul className="list-disc pl-5 mt-1">
// //                 <li>Your audience will scan QR at your campaign spot and win rewards, cashback, or promo codes.</li>
// //                 <li>All engagement is tracked live in your dashboard.</li>
// //                 <li>Ideal for brand activation, sampling, and footfall tracking!</li>
// //               </ul>
// //             </div>
// //           }
// //           <label className="flex items-center gap-2 font-medium">
// //             <input
// //               type="checkbox"
// //               checked={isBlookPerksApplied}
// //               onChange={e => setIsBlookPerksApplied(e.target.checked)}
// //             />
// //             Enable BlookPerks (QR rewards, promo codes, cashback)
// //           </label>
// //           {isBlookPerksApplied && (
// //             <div className="rounded bg-green-50 p-3 text-sm border border-green-200">
// //               <b>Perks enabled:</b> Audiences can scan QR at campaign spot, win perks, and you track results live.
// //             </div>
// //           )}
// //         </section>

// //         {/* --- Submit --- */}
// //         <div className="flex items-center justify-end gap-6 mt-8">
// //           <button
// //             type="submit"
// //             disabled={submitting}
// //             className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-white font-bold"
// //           >
// //             {submitting ? "Creating..." : "Create Campaign"}
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../../api/axiosInstance";
// import { toast } from "react-toastify";

// // Branding type options
// const BRANDING_TYPES = [
//   "LED", "Entry Banner", "Hoarding", "Digital Screen",
//   "Lift Branding", "Reception", "Wall Space", "Custom"
// ];

// export default function CreateCampaign() {
//   const navigate = useNavigate();

//   // ---- Booking Data ----
//   const [booking, setBooking] = useState(null);

//   // ---- Advertiser info ----
//   const [brandName, setBrandName] = useState("");
//   const [brandEmail, setBrandEmail] = useState("");
//   const [contactPerson, setContactPerson] = useState("");

//   // ---- Main campaign info ----
//   const [campaignName, setCampaignName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedBrandingTypes, setSelectedBrandingTypes] = useState([]);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [worksType, setWorksType] = useState("custom");
//   const [customVendorName, setCustomVendorName] = useState("");
//   const [customVendorPhone, setCustomVendorPhone] = useState("");
//   const [artworkFile, setArtworkFile] = useState(null);
//   const [isBlookPerksApplied, setIsBlookPerksApplied] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   // Modal State
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   // BlookWorks RFQ fields
//   const [blookWorksDetails, setBlookWorksDetails] = useState({
//     jobType: "",
//     jobDescription: "",
//     expectedDate: "",
//     city: "",
//     quantity: "",
//     specs: "",
//     budget: "",
//     compliance: ""
//   });

//   // Info/UX helpers
//   const [showWorksInfo, setShowWorksInfo] = useState(false);
//   const [showPerksInfo, setShowPerksInfo] = useState(false);

//   // --- Booking auto-fill logic ---
//   useEffect(() => {
//     const bookingData = JSON.parse(localStorage.getItem("blook_booking_for_campaign"));
//     if (!bookingData) {
//       navigate("/dashboard/advertiser");
//       return;
//     }
//     setBooking(bookingData);
//     setCampaignName(`Campaign for ${bookingData.spaceId?.spaceName || ""}`);
//     setSelectedBrandingTypes(bookingData.brandingTypes || []);
//     setStartDate(bookingData.fromDate ? bookingData.fromDate.slice(0, 10) : "");
//     setEndDate(bookingData.toDate ? bookingData.toDate.slice(0, 10) : "");
//   }, [navigate]);

//   // Branding Type handler
//   const handleBrandingTypeChange = (e) => {
//     const options = Array.from(e.target.selectedOptions).map((o) => o.value);
//     setSelectedBrandingTypes(options);
//   };

//   // BlookWorks RFQ handler
//   const handleBlookWorksChange = (e) => {
//     const { name, value } = e.target;
//     setBlookWorksDetails(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // File handler
//   const handleArtworkUpload = (e) => setArtworkFile(e.target.files[0]);

//   // Upload to Cloudinary (add your creds)
//   async function uploadArtworkToCloudinary(file) {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET"); // change this
//     const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_NAME/image/upload", {
//       method: "POST", body: formData
//     });
//     const data = await res.json();
//     return data.secure_url;
//   }

//   // Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     let uploadedArtworkUrl = "";
//     try {
//       if (artworkFile) {
//         uploadedArtworkUrl = await uploadArtworkToCloudinary(artworkFile);
//       }
//       // Validate BlookWorks fields if needed
//       if (worksType === "blookworks") {
//         const required = ["jobType", "jobDescription", "expectedDate", "city", "quantity"];
//         for (const f of required) {
//           if (!blookWorksDetails[f]) {
//             toast.error("Please fill all required BlookWorks RFQ fields.");
//             setSubmitting(false);
//             return;
//           }
//         }
//       }
//       const payload = {
//         campaignName,
//         description,
//         spaceId: booking?.spaceId?._id || booking?.spaceId,
//         bookingId: booking?._id,
//         brandingTypes: selectedBrandingTypes,
//         startDate,
//         endDate,
//         creativeLinks: uploadedArtworkUrl ? [uploadedArtworkUrl] : [],
//         worksType,
//         blookWorksDetails: worksType === "blookworks" ? blookWorksDetails : undefined,
//         customVendor: worksType === "custom"
//           ? { name: customVendorName, phone: customVendorPhone }
//           : undefined,
//         isBlookPerksApplied,
//         advertiserInfo: { brandName, brandEmail, contactPerson }
//       };
//       await axiosInstance.post("/campaigns/create", payload);

//       // Instead of just toast, show modal (for both campaign & BlookPerks status)
//       setShowSuccessModal(true);

//       localStorage.removeItem("blook_booking_for_campaign");
//       // Don't navigate yet, modal handle karega!
//     } catch (err) {
//       toast.error("Failed to create campaign.");
//       console.error(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // ----------- UI -----------
//   return (
//     <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl mt-10 p-8 mb-10 font-sans">
//       <h1 className="text-3xl font-bold text-blue-900 mb-6">Create New Campaign</h1>

//       {/* Show Booking Info */}
//       {booking && (
//         <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
//           <div>
//             <b>Space:</b> {booking.spaceId?.spaceName || ""} <span className="text-xs text-gray-500">({booking.spaceId?.spaceCode})</span>
//           </div>
//           <div>
//             <b>Booking Dates:</b> {booking.fromDate?.slice(0,10)} to {booking.toDate?.slice(0,10)}
//           </div>
//           <div>
//             <b>Branding Types:</b> {(booking.brandingTypes || []).join(", ")}
//           </div>
//           <div>
//             <b>Booking Amount:</b> ₹{booking.amount}
//           </div>
//         </div>
//       )}

//       <form className="space-y-8" onSubmit={handleSubmit}>
//         {/* --- Advertiser Info --- */}
//         <section className="space-y-3 border-b pb-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Advertiser Details</h2>
//           <div className="flex gap-4">
//             <input className="input flex-1" required placeholder="Brand Name (e.g. Coca-Cola India)" value={brandName} onChange={e => setBrandName(e.target.value)} />
//             <input className="input flex-1" required type="email" placeholder="Contact Email (e.g. manager@brand.com)" value={brandEmail} onChange={e => setBrandEmail(e.target.value)} />
//           </div>
//           <input className="input" required placeholder="Contact Person Name (e.g. Rahul Sharma)" value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
//         </section>

//         {/* --- Campaign Info --- */}
//         <section className="space-y-4 border-b pb-6">
//           <h2 className="text-xl font-semibold text-blue-700 mb-2">Campaign Details</h2>
//           <input type="text" className="input" required value={campaignName}
//             onChange={e => setCampaignName(e.target.value)}
//             placeholder="Campaign Name (e.g. July Mall LED Blast)" />
//           <textarea className="input" required value={description}
//             onChange={e => setDescription(e.target.value)}
//             placeholder="Short description (e.g. Premium LED campaign for 5 days, 3 malls)" />
//           <div>
//             <label className="block font-medium">Branding Types <span className="text-xs text-gray-500">(Select multiple)</span></label>
//             <select multiple className="input" required value={selectedBrandingTypes} onChange={handleBrandingTypeChange}>
//               {BRANDING_TYPES.map((b, i) => <option value={b} key={i}>{b}</option>)}
//             </select>
//             <p className="text-xs text-gray-500 mt-1">Eg: LED, Entry Banner, Hoarding. Ctrl/Cmd + click for multi select.</p>
//           </div>
//           <div className="flex gap-4">
//             <input type="date" className="input flex-1" required value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="Start Date" />
//             <input type="date" className="input flex-1" required value={endDate} onChange={e => setEndDate(e.target.value)} placeholder="End Date" />
//           </div>
//         </section>

//         {/* --- BlookWorks Vendor / RFQ --- */}
//         <section className="space-y-4 border-b pb-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
//               BlookWorks <span className="bg-purple-100 text-purple-700 rounded px-2 py-1 text-xs font-bold">RFQ</span>
//             </h2>
//             <button type="button" className="text-sm text-purple-600 underline" onClick={() => setShowWorksInfo(!showWorksInfo)}>
//               What is this?
//             </button>
//           </div>
//           {showWorksInfo &&
//             <div className="bg-purple-50 p-3 rounded border mb-2 text-sm text-purple-800">
//               <b>BlookWorks:</b> Our RFQ (Request for Quote) system allows you to get multiple price quotes from pre-verified vendors. <br />
//               <b>How it works:</b> <br />
//               <ol className="list-decimal pl-6">
//                 <li>Select “BlookWorks” below, then create your campaign.</li>
//                 <li>Vendors will send you their best quotes for your campaign.</li>
//                 <li>After you approve a quote, you’ll see the payment option in your dashboard. Only after paying will the vendor start work.</li>
//               </ol>
//               <b>Why BlookWorks?</b> - Transparency, choice, and quality assurance!
//             </div>
//           }
//           <div className="flex items-center gap-4">
//             <label className="flex items-center gap-2 font-medium">
//               <input type="radio" checked={worksType === "blookworks"} onChange={() => setWorksType("blookworks")} />
//               Use BlookWorks RFQ (Get Vendor Quotes)
//             </label>
//             <label className="flex items-center gap-2 font-medium">
//               <input type="radio" checked={worksType === "custom"} onChange={() => setWorksType("custom")} />
//               Use My Own Vendor
//             </label>
//           </div>
//           {/* --- BlookWorks RFQ Required Fields --- */}
//           {worksType === "blookworks" && (
//             <div className="rounded bg-purple-50 border p-3 text-sm space-y-3 mt-3">
//               <div className="flex gap-3">
//                 <div className="flex-1">
//                   <label className="font-medium">Job Type</label>
//                   <select name="jobType" className="input w-full" required value={blookWorksDetails.jobType} onChange={handleBlookWorksChange}>
//                     <option value="">Select...</option>
//                     <option>Print</option>
//                     <option>Fabrication</option>
//                     <option>Installation</option>
//                     <option>All-in-one</option>
//                   </select>
//                 </div>
//                 <div className="flex-1">
//                   <label className="font-medium">Quantity</label>
//                   <input type="number" name="quantity" min="1" className="input w-full" required value={blookWorksDetails.quantity} onChange={handleBlookWorksChange} />
//                 </div>
//               </div>
//               <div>
//                 <label className="font-medium">Expected Completion Date</label>
//                 <input type="date" name="expectedDate" className="input w-full" required value={blookWorksDetails.expectedDate} onChange={handleBlookWorksChange} />
//               </div>
//               <div>
//                 <label className="font-medium">City/Region</label>
//                 <input type="text" name="city" className="input w-full" required value={blookWorksDetails.city} onChange={handleBlookWorksChange} />
//               </div>
//               <div>
//                 <label className="font-medium">Job Description</label>
//                 <textarea name="jobDescription" className="input w-full" required placeholder="Describe your requirement in detail" value={blookWorksDetails.jobDescription} onChange={handleBlookWorksChange} />
//               </div>
//               <div>
//                 <label className="font-medium">Specs/Instructions <span className="text-xs">(optional)</span></label>
//                 <textarea name="specs" className="input w-full" placeholder="Special instructions or specs" value={blookWorksDetails.specs} onChange={handleBlookWorksChange} />
//               </div>
//               <div>
//                 <label className="font-medium">Budget <span className="text-xs">(optional)</span></label>
//                 <input type="number" name="budget" className="input w-full" placeholder="₹" value={blookWorksDetails.budget} onChange={handleBlookWorksChange} />
//               </div>
//               <div>
//                 <label className="font-medium">Compliance Needs <span className="text-xs">(optional)</span></label>
//                 <textarea name="compliance" className="input w-full" placeholder="Any compliance required?" value={blookWorksDetails.compliance} onChange={handleBlookWorksChange} />
//               </div>
//             </div>
//           )}
//           {worksType === "custom" && (
//             <div className="flex gap-3 mt-2">
//               <input type="text" className="input flex-1" placeholder="Vendor Name (e.g. AdPrint Solutions)" value={customVendorName} onChange={e => setCustomVendorName(e.target.value)} />
//               <input type="tel" className="input flex-1" placeholder="Vendor Phone (e.g. 9876543210)" value={customVendorPhone} onChange={e => setCustomVendorPhone(e.target.value)} />
//             </div>
//           )}
//           <div>
//             <label className="block font-medium">Upload Artwork / Design File <span className="text-xs text-gray-500">(optional)</span></label>
//             <input type="file" className="block mt-1" accept="image/*,application/pdf" onChange={handleArtworkUpload} />
//             {artworkFile && (
//               <div className="text-sm mt-1 text-gray-700">{artworkFile.name}</div>
//             )}
//           </div>
//         </section>

//         {/* --- BlookPerks Rewards --- */}
//         <section className="space-y-3 border-b pb-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">
//               BlookPerks <span className="bg-green-100 text-green-700 rounded px-2 py-1 text-xs font-bold">QR & Rewards</span>
//             </h2>
//             <button type="button" className="text-sm text-green-600 underline" onClick={() => setShowPerksInfo(!showPerksInfo)}>
//               What is this?
//             </button>
//           </div>
//           {showPerksInfo &&
//             <div className="rounded bg-green-50 p-3 text-sm border border-green-200 text-green-800">
//               <b>BlookPerks:</b> Add QR-based rewards and promo codes to your campaign.
//               <ul className="list-disc pl-5 mt-1">
//                 <li>Your audience will scan QR at your campaign spot and win rewards, cashback, or promo codes.</li>
//                 <li>All engagement is tracked live in your dashboard.</li>
//                 <li>Ideal for brand activation, sampling, and footfall tracking!</li>
//                 <li>If enabled, BlookPerks job will be created and you’ll see Perks status in your dashboard.</li>
//               </ul>
//             </div>
//           }
//           <label className="flex items-center gap-2 font-medium">
//             <input
//               type="checkbox"
//               checked={isBlookPerksApplied}
//               onChange={e => setIsBlookPerksApplied(e.target.checked)}
//             />
//             Enable BlookPerks (QR rewards, promo codes, cashback)
//           </label>
//           {isBlookPerksApplied && (
//             <div className="rounded bg-green-50 p-3 text-sm border border-green-200">
//               <b>Perks enabled:</b> Audiences can scan QR at campaign spot, win perks, and you track results live.<br/>
//               <b>Note:</b> After submission, perks will show as <b>Pending</b> until approved by the tech team.
//             </div>
//           )}
//         </section>

//         {/* --- Submit --- */}
//         <div className="flex items-center justify-end gap-6 mt-8">
//           <button
//             type="submit"
//             disabled={submitting}
//             className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-white font-bold"
//           >
//             {submitting ? "Creating..." : "Create Campaign"}
//           </button>
//         </div>
//       </form>

//       {/* --- Success Modal --- */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center animate-fade-in">
//             <div className="text-green-600 text-5xl mb-4">🎉</div>
//             <h2 className="text-2xl font-bold mb-2">Campaign Created!</h2>
//             <p className="text-lg mb-2">Your campaign has been created and sent for review.</p>
//             <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-2 text-blue-900 text-sm">
//               <b>Waiting for Tech Team Approval.</b><br />
//               You can check campaign status in your dashboard.
//             </div>
//             {isBlookPerksApplied && (
//               <div className="bg-green-50 border border-green-200 rounded p-3 mb-2 text-green-900 text-sm">
//                 <b>BlookPerks (QR/Reward) Status:</b> <span className="font-bold text-orange-500">Pending</span><br />
//                 You’ll be notified when Perks are live. Track rewards status in your dashboard.
//               </div>
//             )}
//             <button
//               onClick={() => navigate("/dashboard/advertiser?tab=campaigns")}
//               className="bg-blue-600 hover:bg-blue-700 mt-4 px-8 py-2 text-white font-bold rounded-xl"
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
import { toast } from "react-toastify";

// Branding type options
const BRANDING_TYPES = [
  "LED", "Entry Banner", "Hoarding", "Digital Screen",
  "Lift Branding", "Reception", "Wall Space", "Custom"
];

export default function CreateCampaign() {
  const navigate = useNavigate();

  // ---- Booking Data ----
  const [booking, setBooking] = useState(null);

  // ---- Advertiser info ----
  const [brandName, setBrandName] = useState("");
  const [brandEmail, setBrandEmail] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  // ---- Main campaign info ----
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedBrandingTypes, setSelectedBrandingTypes] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [worksType, setWorksType] = useState("custom");
  const [customVendorName, setCustomVendorName] = useState("");
  const [customVendorPhone, setCustomVendorPhone] = useState("");
  const [artworkFile, setArtworkFile] = useState(null);
  const [isBlookPerksApplied, setIsBlookPerksApplied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Modal State
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // BlookWorks RFQ fields
  const [blookWorksDetails, setBlookWorksDetails] = useState({
    jobType: "",
    jobDescription: "",
    expectedDate: "",
    city: "",
    quantity: "",
    specs: "",
    budget: "",
    compliance: ""
  });

  // Info/UX helpers
  const [showWorksInfo, setShowWorksInfo] = useState(false);
  const [showPerksInfo, setShowPerksInfo] = useState(false);

  // --- Booking auto-fill logic ---
  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("blook_booking_for_campaign"));
    if (!bookingData) {
      navigate("/dashboard/advertiser");
      return;
    }
    setBooking(bookingData);
    setCampaignName(`Campaign for ${bookingData.spaceId?.spaceName || ""}`);
    setSelectedBrandingTypes(bookingData.brandingTypes || []);
    setStartDate(bookingData.fromDate ? bookingData.fromDate.slice(0, 10) : "");
    setEndDate(bookingData.toDate ? bookingData.toDate.slice(0, 10) : "");
  }, [navigate]);

  // Branding Type handler
  const handleBrandingTypeChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map((o) => o.value);
    setSelectedBrandingTypes(options);
  };

  // BlookWorks RFQ handler
  const handleBlookWorksChange = (e) => {
    const { name, value } = e.target;
    setBlookWorksDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // File handler
  const handleArtworkUpload = (e) => setArtworkFile(e.target.files[0]);

  // --- Handle Submit (FormData, multipart) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      // Basic fields
      formData.append("campaignName", campaignName);
      formData.append("description", description);
      formData.append("spaceId", booking?.spaceId?._id || booking?.spaceId);
      formData.append("brandingTypes", JSON.stringify(selectedBrandingTypes));
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("worksType", worksType);
      formData.append("isBlookPerksApplied", isBlookPerksApplied);

      // Vendor
      if (worksType === "custom") {
        formData.append("customVendorName", customVendorName);
        formData.append("customVendorPhone", customVendorPhone);
      }
      // BlookWorks RFQ
      if (worksType === "blookworks") {
        formData.append("blookWorksDetails", JSON.stringify(blookWorksDetails));
      }
      // Artwork file (optional)
      if (artworkFile) {
        formData.append("artworkFile", artworkFile);
      }
      // Optionally, add advertiserInfo (not used in backend now)
      formData.append("brandName", brandName);
      formData.append("brandEmail", brandEmail);
      formData.append("contactPerson", contactPerson);

      // Make API call (multipart/form-data automatically)
      await axiosInstance.post("/advertiser/campaign/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setShowSuccessModal(true);
      localStorage.removeItem("blook_booking_for_campaign");
    } catch (err) {
      toast.error("Failed to create campaign.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // ----------- UI -----------
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl mt-10 p-8 mb-10 font-sans">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Create New Campaign</h1>

      {/* Show Booking Info */}
      {booking && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div>
            <b>Space:</b> {booking.spaceId?.spaceName || ""} <span className="text-xs text-gray-500">({booking.spaceId?.spaceCode})</span>
          </div>
          <div>
            <b>Booking Dates:</b> {booking.fromDate?.slice(0,10)} to {booking.toDate?.slice(0,10)}
          </div>
          <div>
            <b>Branding Types:</b> {(booking.brandingTypes || []).join(", ")}
          </div>
          <div>
            <b>Booking Amount:</b> ₹{booking.amount}
          </div>
        </div>
      )}

      <form className="space-y-8" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* --- Advertiser Info --- */}
        <section className="space-y-3 border-b pb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Advertiser Details</h2>
          <div className="flex gap-4">
            <input className="input flex-1" required placeholder="Brand Name (e.g. Coca-Cola India)" value={brandName} onChange={e => setBrandName(e.target.value)} />
            <input className="input flex-1" required type="email" placeholder="Contact Email (e.g. manager@brand.com)" value={brandEmail} onChange={e => setBrandEmail(e.target.value)} />
          </div>
          <input className="input" required placeholder="Contact Person Name (e.g. Rahul Sharma)" value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
        </section>

        {/* --- Campaign Info --- */}
        <section className="space-y-4 border-b pb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Campaign Details</h2>
          <input type="text" className="input" required value={campaignName}
            onChange={e => setCampaignName(e.target.value)}
            placeholder="Campaign Name (e.g. July Mall LED Blast)" />
          <textarea className="input" required value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Short description (e.g. Premium LED campaign for 5 days, 3 malls)" />
          <div>
            <label className="block font-medium">Branding Types <span className="text-xs text-gray-500">(Select multiple)</span></label>
            <select multiple className="input" required value={selectedBrandingTypes} onChange={handleBrandingTypeChange}>
              {BRANDING_TYPES.map((b, i) => <option value={b} key={i}>{b}</option>)}
            </select>
            <p className="text-xs text-gray-500 mt-1">Eg: LED, Entry Banner, Hoarding. Ctrl/Cmd + click for multi select.</p>
          </div>
          <div className="flex gap-4">
            <input type="date" className="input flex-1" required value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="Start Date" />
            <input type="date" className="input flex-1" required value={endDate} onChange={e => setEndDate(e.target.value)} placeholder="End Date" />
          </div>
        </section>

        {/* --- BlookWorks Vendor / RFQ --- */}
        <section className="space-y-4 border-b pb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
              BlookWorks <span className="bg-purple-100 text-purple-700 rounded px-2 py-1 text-xs font-bold">RFQ</span>
            </h2>
            <button type="button" className="text-sm text-purple-600 underline" onClick={() => setShowWorksInfo(!showWorksInfo)}>
              What is this?
            </button>
          </div>
          {showWorksInfo &&
            <div className="bg-purple-50 p-3 rounded border mb-2 text-sm text-purple-800">
              <b>BlookWorks:</b> Our RFQ (Request for Quote) system allows you to get multiple price quotes from pre-verified vendors. <br />
              <b>How it works:</b> <br />
              <ol className="list-decimal pl-6">
                <li>Select “BlookWorks” below, then create your campaign.</li>
                <li>Vendors will send you their best quotes for your campaign.</li>
                <li>After you approve a quote, you’ll see the payment option in your dashboard. Only after paying will the vendor start work.</li>
              </ol>
              <b>Why BlookWorks?</b> - Transparency, choice, and quality assurance!
            </div>
          }
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 font-medium">
              <input type="radio" checked={worksType === "blookworks"} onChange={() => setWorksType("blookworks")} />
              Use BlookWorks RFQ (Get Vendor Quotes)
            </label>
            <label className="flex items-center gap-2 font-medium">
              <input type="radio" checked={worksType === "custom"} onChange={() => setWorksType("custom")} />
              Use My Own Vendor
            </label>
          </div>
          {/* --- BlookWorks RFQ Required Fields --- */}
          {worksType === "blookworks" && (
            <div className="rounded bg-purple-50 border p-3 text-sm space-y-3 mt-3">
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="font-medium">Job Type</label>
                  <select name="jobType" className="input w-full" required value={blookWorksDetails.jobType} onChange={handleBlookWorksChange}>
                    <option value="">Select...</option>
                    <option>Print</option>
                    <option>Fabrication</option>
                    <option>Installation</option>
                    <option>All-in-one</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="font-medium">Quantity</label>
                  <input type="number" name="quantity" min="1" className="input w-full" required value={blookWorksDetails.quantity} onChange={handleBlookWorksChange} />
                </div>
              </div>
              <div>
                <label className="font-medium">Expected Completion Date</label>
                <input type="date" name="expectedDate" className="input w-full" required value={blookWorksDetails.expectedDate} onChange={handleBlookWorksChange} />
              </div>
              <div>
                <label className="font-medium">City/Region</label>
                <input type="text" name="city" className="input w-full" required value={blookWorksDetails.city} onChange={handleBlookWorksChange} />
              </div>
              <div>
                <label className="font-medium">Job Description</label>
                <textarea name="jobDescription" className="input w-full" required placeholder="Describe your requirement in detail" value={blookWorksDetails.jobDescription} onChange={handleBlookWorksChange} />
              </div>
              <div>
                <label className="font-medium">Specs/Instructions <span className="text-xs">(optional)</span></label>
                <textarea name="specs" className="input w-full" placeholder="Special instructions or specs" value={blookWorksDetails.specs} onChange={handleBlookWorksChange} />
              </div>
              <div>
                <label className="font-medium">Budget <span className="text-xs">(optional)</span></label>
                <input type="number" name="budget" className="input w-full" placeholder="₹" value={blookWorksDetails.budget} onChange={handleBlookWorksChange} />
              </div>
              <div>
                <label className="font-medium">Compliance Needs <span className="text-xs">(optional)</span></label>
                <textarea name="compliance" className="input w-full" placeholder="Any compliance required?" value={blookWorksDetails.compliance} onChange={handleBlookWorksChange} />
              </div>
            </div>
          )}
          {worksType === "custom" && (
            <div className="flex gap-3 mt-2">
              <input type="text" className="input flex-1" placeholder="Vendor Name (e.g. AdPrint Solutions)" value={customVendorName} onChange={e => setCustomVendorName(e.target.value)} />
              <input type="tel" className="input flex-1" placeholder="Vendor Phone (e.g. 9876543210)" value={customVendorPhone} onChange={e => setCustomVendorPhone(e.target.value)} />
            </div>
          )}
          <div>
            <label className="block font-medium">Upload Artwork / Design File <span className="text-xs text-gray-500">(optional)</span></label>
            <input type="file" className="block mt-1" accept="image/*,application/pdf" onChange={handleArtworkUpload} />
            {artworkFile && (
              <div className="text-sm mt-1 text-gray-700">{artworkFile.name}</div>
            )}
          </div>
        </section>

        {/* --- BlookPerks Rewards --- */}
        <section className="space-y-3 border-b pb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">
              BlookPerks <span className="bg-green-100 text-green-700 rounded px-2 py-1 text-xs font-bold">QR & Rewards</span>
            </h2>
            <button type="button" className="text-sm text-green-600 underline" onClick={() => setShowPerksInfo(!showPerksInfo)}>
              What is this?
            </button>
          </div>
          {showPerksInfo &&
            <div className="rounded bg-green-50 p-3 text-sm border border-green-200 text-green-800">
              <b>BlookPerks:</b> Add QR-based rewards and promo codes to your campaign.
              <ul className="list-disc pl-5 mt-1">
                <li>Your audience will scan QR at your campaign spot and win rewards, cashback, or promo codes.</li>
                <li>All engagement is tracked live in your dashboard.</li>
                <li>Ideal for brand activation, sampling, and footfall tracking!</li>
                <li>If enabled, BlookPerks job will be created and you’ll see Perks status in your dashboard.</li>
              </ul>
            </div>
          }
          <label className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              checked={isBlookPerksApplied}
              onChange={e => setIsBlookPerksApplied(e.target.checked)}
            />
            Enable BlookPerks (QR rewards, promo codes, cashback)
          </label>
          {isBlookPerksApplied && (
            <div className="rounded bg-green-50 p-3 text-sm border border-green-200">
              <b>Perks enabled:</b> Audiences can scan QR at campaign spot, win perks, and you track results live.<br/>
              <b>Note:</b> After submission, perks will show as <b>Pending</b> until approved by the tech team.
            </div>
          )}
        </section>

        {/* --- Submit --- */}
        <div className="flex items-center justify-end gap-6 mt-8">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-white font-bold"
          >
            {submitting ? "Creating..." : "Create Campaign"}
          </button>
        </div>
      </form>

      {/* --- Success Modal --- */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center animate-fade-in">
            <div className="text-green-600 text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">Campaign Created!</h2>
            <p className="text-lg mb-2">Your campaign has been created and sent for review.</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-2 text-blue-900 text-sm">
              <b>Waiting for Tech Team Approval.</b><br />
              You can check campaign status in your dashboard.
            </div>
            {isBlookPerksApplied && (
              <div className="bg-green-50 border border-green-200 rounded p-3 mb-2 text-green-900 text-sm">
                <b>BlookPerks (QR/Reward) Status:</b> <span className="font-bold text-orange-500">Pending</span><br />
                You’ll be notified when Perks are live. Track rewards status in your dashboard.
              </div>
            )}
            <button
              onClick={() => navigate("/dashboard/advertiser?tab=campaigns")}
              className="bg-blue-600 hover:bg-blue-700 mt-4 px-8 py-2 text-white font-bold rounded-xl"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
