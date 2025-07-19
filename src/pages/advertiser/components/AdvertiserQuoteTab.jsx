// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axiosInstance from "../../../api/axiosInstance";
// // // // // // // // // import CampaignQuotesTable from "./CampaignTable";

// // // // // // // // // export default function AdvertiserQuotesTab() {
// // // // // // // // //   const [campaigns, setCampaigns] = useState([]);
// // // // // // // // //   const [selectedCampaignId, setSelectedCampaignId] = useState(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     // Get all campaigns for dropdown
// // // // // // // // //     axiosInstance
// // // // // // // // //       .get("advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
// // // // // // // // //       .then(res => {
// // // // // // // // //         setCampaigns(res.data.campaigns || []);
// // // // // // // // //       });
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <div className="mb-5">
// // // // // // // // //         <label className="block text-sm font-medium text-blue-800 mb-1">Select Campaign:</label>
// // // // // // // // //         <select
// // // // // // // // //           className="w-full max-w-md border rounded p-2"
// // // // // // // // //           value={selectedCampaignId || ""}
// // // // // // // // //           onChange={e => setSelectedCampaignId(e.target.value)}
// // // // // // // // //         >
// // // // // // // // //           <option value="">-- Select --</option>
// // // // // // // // //           {campaigns.map(c => (
// // // // // // // // //             <option value={c._id} key={c._id}>
// // // // // // // // //               {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
// // // // // // // // //             </option>
// // // // // // // // //           ))}
// // // // // // // // //         </select>
// // // // // // // // //       </div>

// // // // // // // // //       <div>
// // // // // // // // //         {/* Quotes Table: Only show if campaign selected */}
// // // // // // // // //         <CampaignQuotesTable campaignId={selectedCampaignId} />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import axiosInstance from "../../../api/axiosInstance";
// // // // // // // // import CampaignQuotesTable from "./CampaignTable"; // Path sahi rakhna

// // // // // // // // export default function AdvertiserQuotesTab() {
// // // // // // // //   const [campaigns, setCampaigns] = useState([]);
// // // // // // // //   const [selectedCampaignId, setSelectedCampaignId] = useState("");

// // // // // // // //   useEffect(() => {
// // // // // // // //     axiosInstance
// // // // // // // //       .get("advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
// // // // // // // //       .then(res => {
// // // // // // // //         setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
// // // // // // // //       });
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <div className="mb-5">
// // // // // // // //         <label className="block text-sm font-medium text-blue-800 mb-1">Select Campaign:</label>
// // // // // // // //         <select
// // // // // // // //           className="w-full max-w-md border rounded p-2"
// // // // // // // //           value={selectedCampaignId}
// // // // // // // //           onChange={e => setSelectedCampaignId(e.target.value)}
// // // // // // // //         >
// // // // // // // //           <option value="">-- Select Campaign --</option>
// // // // // // // //           {campaigns.map(c => (
// // // // // // // //             <option value={c._id} key={c._id}>
// // // // // // // //               {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
// // // // // // // //             </option>
// // // // // // // //           ))}
// // // // // // // //         </select>
// // // // // // // //       </div>

// // // // // // // //       {/* Only show quotes if a campaign is selected */}
// // // // // // // //       <CampaignQuotesTable campaignId={selectedCampaignId || null} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import axiosInstance from "../../../api/axiosInstance";
// // // // // // // import CampaignQuotesTable from './QuotesTable' // Path check kar lena

// // // // // // // export default function AdvertiserQuotesTab() {
// // // // // // //   const [campaigns, setCampaigns] = useState([]);
// // // // // // //   const [selectedCampaignId, setSelectedCampaignId] = useState("");

// // // // // // //   useEffect(() => {
// // // // // // //     axiosInstance
// // // // // // //       .get("advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
// // // // // // //       .then(res => {
// // // // // // //         setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
// // // // // // //       });
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <div className="mb-5">
// // // // // // //         <label className="block text-sm font-medium text-blue-800 mb-1">Select Campaign:</label>
// // // // // // //         <select
// // // // // // //           className="w-full max-w-md border rounded p-2"
// // // // // // //           value={selectedCampaignId}
// // // // // // //           onChange={e => setSelectedCampaignId(e.target.value)}
// // // // // // //         >
// // // // // // //           <option value="">-- Select Campaign --</option>
// // // // // // //           {campaigns.map(c => (
// // // // // // //             <option value={c._id} key={c._id}>
// // // // // // //               {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
// // // // // // //             </option>
// // // // // // //           ))}
// // // // // // //         </select>
// // // // // // //       </div>

// // // // // // //       {/* Quotes Table will show for selected campaign */}
// // // // // // //       <CampaignQuotesTable campaignId={selectedCampaignId || null} />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axiosInstance from "../../../api/axiosInstance";

// // // // // // export default function CampaignQuotesTable({ campaignId }) {
// // // // // //   const [quotes, setQuotes] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     if (!campaignId) {
// // // // // //       setQuotes([]);
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }
// // // // // //     setLoading(true);
// // // // // //     axiosInstance
// // // // // //       .get(`advertiser/dashboard/quotes/${campaignId}`)
// // // // // //       .then(res => {
// // // // // //         setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
// // // // // //         setLoading(false);
// // // // // //       })
// // // // // //       .catch(() => {
// // // // // //         setQuotes([]);
// // // // // //         setLoading(false);
// // // // // //       });
// // // // // //   }, [campaignId]);

// // // // // //   if (!campaignId) return <div className="text-gray-400">Select a campaign to view quotes.</div>;
// // // // // //   if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;
// // // // // //   if (!quotes.length) return <div className="text-gray-500 py-6">No vendor quotes for this campaign yet.</div>;

// // // // // //   return <div>Quotes loaded: {quotes.length}</div>;
// // // // // // }

// // // // // // src/components/AdvertiserQuotesTab.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import axiosInstance from "../../../api/axiosInstance";
// // // // // import QuotesTable from "./QuotesTable"; // ✅ Correct import

// // // // // export default function AdvertiserQuotesTab() {
// // // // //   const [campaigns, setCampaigns] = useState([]);
// // // // //   const [selectedCampaignId, setSelectedCampaignId] = useState("");

// // // // //   useEffect(() => {
// // // // //     axiosInstance
// // // // //       .get("advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
// // // // //       .then(res => {
// // // // //         setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
// // // // //       });
// // // // //   }, []);

// // // // //   return (
// // // // //     <div>
// // // // //       <div className="mb-5">
// // // // //         <label className="block text-sm font-medium text-blue-800 mb-1">Select Campaign:</label>
// // // // //         <select
// // // // //           className="w-full max-w-md border rounded p-2"
// // // // //           value={selectedCampaignId}
// // // // //           onChange={e => setSelectedCampaignId(e.target.value)}
// // // // //         >
// // // // //           <option value="">-- Select Campaign --</option>
// // // // //           {campaigns.map(c => (
// // // // //             <option value={c._id} key={c._id}>
// // // // //               {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
// // // // //             </option>
// // // // //           ))}
// // // // //         </select>
// // // // //       </div>
// // // // //       <QuotesTable campaignId={selectedCampaignId || null} /> {/* Pass as prop */}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useEffect, useState } from "react";
// // // // import axiosInstance from "../../../api/axiosInstance";
// // // // import QuotesTable from "./QuotesTable";

// // // // export default function AdvertiserQuotesTab() {
// // // //   const [campaigns, setCampaigns] = useState([]);
// // // //   const [selectedCampaignId, setSelectedCampaignId] = useState("");

// // // //   useEffect(() => {
// // // //     axiosInstance
// // // //       .get("advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
// // // //       .then(res => {
// // // //         console.log("Campaigns API", res.data); // check what comes here
// // // //         setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
// // // //       });
// // // //   }, []);

// // // //   return (
// // // //     <div>
// // // //       <div className="mb-5">
// // // //         <label className="block text-sm font-medium text-blue-800 mb-1">Select Campaign:</label>
// // // //         <select
// // // //           className="w-full max-w-md border rounded p-2"
// // // //           value={selectedCampaignId}
// // // //           onChange={e => {
// // // //             console.log("Selected campaignId", e.target.value);
// // // //             setSelectedCampaignId(e.target.value);
// // // //           }}
// // // //         >
// // // //           <option value="">-- Select Campaign --</option>
// // // //           {campaigns.map(c => (
// // // //             <option value={c._id} key={c._id}>
// // // //               {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //       </div>
// // // //       <QuotesTable campaignId={selectedCampaignId || null} />
// // // //     </div>
// // // //   );
// // // // }

// // // // AdvertiserQuotesTab.jsx
// // // import React, { useEffect, useState } from "react";
// // // import axiosInstance from "../../../api/axiosInstance";
// // // import QuotesTable from "./QuotesTable";

// // // export default function AdvertiserQuotesTab() {
// // //   const [campaigns, setCampaigns] = useState([]);
// // //   const [selectedCampaignId, setSelectedCampaignId] = useState("");
// // //   useEffect(() => {
// // //     axiosInstance
// // //       .get("advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
// // //       .then(res => {
// // //         console.log("Campaigns API", res.data); // Yeh line check karo!
// // //         setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
// // //       });
// // //   }, []);
  

// // //   return (
// // //     <div>
// // //       <div className="mb-5">
// // //         <pre>{JSON.stringify(campaigns, null, 2)}</pre> {/* SHOWS RAW CAMPAIGNS */}
// // //         <label className="block text-sm font-medium text-blue-800 mb-1">Select Campaign:</label>
// // //         <select
// // //           className="w-full max-w-md border rounded p-2"
// // //           value={selectedCampaignId}
// // //           onChange={e => setSelectedCampaignId(e.target.value)}
// // //         >
// // //           <option value="">-- Select Campaign --</option>
// // //           {campaigns.map(c => (
// // //             <option value={c._id} key={c._id}>
// // //               {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>
// // //       <QuotesTable campaignId={selectedCampaignId || null} />
// // //     </div>
// // //   );
// // // }

// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../../api/axiosInstance";
// import QuotesTable from "./QuotesTable";

// export default function AdvertiserQuotesTab() {
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaignId, setSelectedCampaignId] = useState("");
//   useEffect(() => {
//     axiosInstance
//       .get("/advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
//       .then(res => {
//         console.log("Campaigns in QuotesTab", res.data); // yahan dekhna kya aa raha hai!
//         setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
//       })
//       .catch(err => {
//         console.log("QuotesTab API ERROR", err);
//       });
//   }, []);
  

//   return (
//     <div>
//       <div className="mb-5">
//         {/* Debug: Always show campaigns array raw */}
//         <pre className="bg-gray-100 p-2 rounded text-xs mb-2">
//           {JSON.stringify(campaigns, null, 2)}
//         </pre>
//         <label className="block text-sm font-medium text-blue-800 mb-1">Select Campaign:</label>
//         <select
//           className="w-full max-w-md border rounded p-2"
//           value={selectedCampaignId}
//           onChange={e => {
//             setSelectedCampaignId(e.target.value);
//           }}
//         >
//           <option value="">-- Select Campaign --</option>
//           {Array.isArray(campaigns) && campaigns.map(c => (
//             <option value={c._id} key={c._id}>
//               {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
//             </option>
//           ))}
//         </select>
//       </div>
//       {/* Quotes Table for selected campaign */}
//       <QuotesTable campaignId={selectedCampaignId || null} />
//     </div>
//   );
// }


// src/components/AdvertiserQuotesTab.jsx

import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import QuotesTable from "./QuotesTable";

export default function AdvertiserQuotesTab() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaignId, setSelectedCampaignId] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/advertiser/dashboard/campaigns", { params: { limit: 100, page: 1 } })
      .then(res => {
        console.log("AdvertiserQuotesTab campaigns", res.data); // Debug: You must see campaigns array here
        setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
      })
      .catch(err => {
        console.log("QuotesTab API ERROR", err);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Quotes</h2>
      <div className="mb-5">
        <label className="block text-sm font-medium text-blue-800 mb-1">
          Select Campaign:
        </label>
        <select
          className="w-full max-w-md border rounded p-2"
          value={selectedCampaignId}
          onChange={e => setSelectedCampaignId(e.target.value)}
        >
          <option value="">-- Select Campaign --</option>
          {Array.isArray(campaigns) &&
            campaigns.map(c => (
              <option value={c._id} key={c._id}>
                {c.campaignName} ({c.spaceId?.spaceName || "No Space"})
              </option>
            ))}
        </select>
      </div>
      <QuotesTable campaignId={selectedCampaignId || null} />
    </div>
  );
}
