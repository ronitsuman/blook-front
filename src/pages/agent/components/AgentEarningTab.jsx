import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function AgentEarningsTab() {
  const [commissions, setCommissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({ total: 0, paid: 0, pending: 0 });

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/agent/dashboard/earnings")
      .then(res => {
        setCommissions(Array.isArray(res.data.commissions) ? res.data.commissions : []);
        setSummary({
          total: res.data.total || 0,
          paid: res.data.paid || 0,
          pending: res.data.pending || 0
        });
        setLoading(false);
      })
      .catch(() => {
        setCommissions([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Earnings & Commissions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <SummaryBox label="Total Commission" value={summary.total} />
        <SummaryBox label="Paid" value={summary.paid} />
        <SummaryBox label="Pending" value={summary.pending} />
      </div>
      {loading ? (
        <div className="text-gray-400 animate-pulse">Loading earnings...</div>
      ) : !commissions.length ? (
        <div className="text-gray-500 py-10">No commissions yet.</div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-purple-100">
          <table className="min-w-full">
            <thead className="bg-gradient-to-tr from-purple-100 to-indigo-50">
              <tr>
                <th className="px-4 py-3 text-left">Space</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                {/* <th className="px-4 py-3 text-left">Receipt</th> */}
              </tr>
            </thead>
            <tbody>
              {commissions.map(c => (
                <tr key={c._id} className="border-t">
                  <td className="px-4 py-3">{c.spaceId?.spaceName || "-"}</td>
                  <td className="px-4 py-3 font-semibold text-purple-800">₹{c.amount}</td>
                  <td className="px-4 py-3 capitalize">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      c.status === "paid" ? "bg-green-100 text-green-700"
                      : c.status === "approved" ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{c.createdAt ? c.createdAt.slice(0, 10) : "-"}</td>
                  {/* <td className="px-4 py-3">
                    {c.receiptUrl ? (
                      <a href={c.receiptUrl} className="ml-2 text-purple-500 underline" target="_blank" rel="noopener noreferrer">Receipt</a>
                    ) : <span className="text-gray-400">-</span>}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function SummaryBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center border-l-4 border-purple-400">
      <div className="text-2xl font-bold text-purple-700">₹{value ?? 0}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
