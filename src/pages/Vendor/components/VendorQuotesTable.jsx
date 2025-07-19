import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

const statusColors = {
  submitted: "bg-yellow-100 text-yellow-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export default function VendorQuotesTable() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/vendor/dashboard/quotes")
      .then(res => {
        setQuotes(Array.isArray(res.data.quotes) ? res.data.quotes : []);
        setLoading(false);
      })
      .catch(() => {
        setQuotes([]);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="animate-pulse text-lg text-gray-400">Loading quotes...</div>;

  if (!quotes.length)
    return <div className="text-gray-500 py-10">No quotes submitted yet.</div>;

  return (
    <div className="overflow-x-auto rounded-xl shadow border border-blue-100 bg-white">
      <table className="min-w-full">
        <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
          <tr>
            <th className="px-4 py-3 text-left">Campaign</th>
            <th className="px-4 py-3 text-left">Space</th>
            <th className="px-4 py-3 text-left">Amount</th>
            <th className="px-4 py-3 text-left">Timeline</th>
            <th className="px-4 py-3 text-left">Message</th>
            <th className="px-4 py-3 text-left">Attachment</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(q => (
            <tr key={q._id} className="border-t">
              <td className="px-4 py-3 font-semibold">{q.campaignId?.campaignName || "-"}</td>
              <td className="px-4 py-3">{q.campaignId?.spaceId?.spaceName || "-"}</td>
              <td className="px-4 py-3 font-bold text-blue-800">₹{q.quotedAmount}</td>
              <td className="px-4 py-3">{q.estimatedTimeline}</td>
              <td className="px-4 py-3">{q.message || <span className="text-gray-400">-</span>}</td>
              <td className="px-4 py-3">
                {q.attachmentLinks?.length
                  ? <a href={q.attachmentLinks[0]} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">View</a>
                  : <span className="text-gray-400">-</span>
                }
              </td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${statusColors[q.status] || "bg-gray-100 text-gray-500"}`}>
                  {q.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
