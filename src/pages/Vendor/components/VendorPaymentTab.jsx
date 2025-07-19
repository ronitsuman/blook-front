import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function VendorPaymentsTab() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({ totalEarnings: 0, paid: 0, pending: 0 });

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/vendor/dashboard/payments")
      .then(res => {
        setPayments(Array.isArray(res.data.payments) ? res.data.payments : []);
        setSummary({
          totalEarnings: res.data.totalEarnings || 0,
          paid: res.data.paid || 0,
          pending: res.data.pending || 0
        });
        setLoading(false);
      })
      .catch(() => {
        setPayments([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Payments & Earnings</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <SummaryBox label="Total Earnings" value={summary.totalEarnings} />
        <SummaryBox label="Paid" value={summary.paid} />
        <SummaryBox label="Pending" value={summary.pending} />
      </div>
      {loading ? (
        <div className="text-gray-400 animate-pulse">Loading payments...</div>
      ) : !payments.length ? (
        <div className="text-gray-500 py-10">No payments yet.</div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-blue-100">
          <table className="min-w-full">
            <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
              <tr>
                <th className="px-4 py-3 text-left">Campaign</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
                <tr key={p._id} className="border-t">
                  <td className="px-4 py-3">{p.campaignId?.campaignName || "-"}</td>
                  <td className="px-4 py-3 font-semibold text-blue-800">₹{p.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      p.status === "paid" ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{p.date ? p.date.slice(0, 10) : "-"}</td>
                  <td className="px-4 py-3">
                    {p.receiptUrl ? (
                      <a
                        href={p.receiptUrl}
                        className="ml-2 text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Receipt
                      </a>
                    ) : (
                      <span className="text-gray-400">-</span>
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

function SummaryBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center border-l-4 border-blue-400">
      <div className="text-2xl font-bold text-blue-700">₹{value ?? 0}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
