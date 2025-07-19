import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// Helper: format number as INR
const rupee = n => n?.toLocaleString("en-IN", { style: "currency", currency: "INR" }) ?? "₹0";

export default function DashboardOverviewCards() {
  const [stats, setStats] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // NOTE: Replace with your auth logic (token from context/redux)
    const token = localStorage.getItem("token");
    axios.get("/advertiser/dashboard/overview", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => { setStats(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="animate-pulse text-lg text-gray-400">Loading dashboard...</div>;
  if (!stats) return <div className="text-red-500">Failed to load stats</div>;

  const cards = [
    {
      label: "Total Campaigns",
      value: stats.totalCampaigns,
      icon: (
        <svg className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6m-7 0h10M12 3v4" />
        </svg>
      )
    },
    {
      label: "Active Campaigns",
      value: stats.activeCampaigns,
      icon: (
        <svg className="h-7 w-7 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      label: "Completed Campaigns",
      value: stats.completedCampaigns,
      icon: (
        <svg className="h-7 w-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      label: "Pending Quotes",
      value: stats.pendingQuotes,
      icon: (
        <svg className="h-7 w-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M9 12h6m-3-3v6" /><circle cx="12" cy="12" r="10" />
        </svg>
      )
    },
    {
      label: "Total Spent",
      value: rupee(stats.totalSpent),
      icon: (
        <svg className="h-7 w-7 text-rose-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 8c-4 0-6 2-6 6h12c0-4-2-6-6-6z" /><path d="M12 4v4m0 12v-4" />
        </svg>
      )
    },
  ];

  return (
    <div className="w-full">
      {/* Overview cards (responsive grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mb-8">
        {cards.map(card => (
          <div
            key={card.label}
            className="flex flex-col items-start gap-2 bg-white shadow-lg rounded-2xl p-5 min-h-[110px]
              border-b-4 border-blue-400 hover:-translate-y-1 hover:shadow-xl transition
            "
          >
            <div className="flex items-center gap-3">
              {card.icon}
              <span className="font-bold text-lg text-gray-700">{card.label}</span>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-blue-700">{card.value}</span>
          </div>
        ))}
      </div>

      {/* Simple Analytics Chart Placeholder */}
      <div className="bg-white rounded-xl shadow p-5 mb-5">
        <div className="text-xl font-bold text-blue-800 mb-2">Quick Analytics</div>
        <div className="text-gray-500 mb-2">
          {/* Here you can add charts, e.g. recharts, chart.js etc. */}
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-200 to-purple-300 mr-2"></span>
          Campaign trends, daily bookings, payments — coming soon!
        </div>
        {/* Future: Add <ResponsiveContainer> for Recharts/Chart.js, or animated numbers */}
      </div>
    </div>
  );
}
