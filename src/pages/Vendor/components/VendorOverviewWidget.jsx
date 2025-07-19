import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function VendorOverviewWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get("/vendor/dashboard/overview")
      .then(res => setData(res.data))
      .catch(() => setData(null));
  }, []);

  if (!data) return <div className="text-gray-400 animate-pulse">Loading vendor overview...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <WidgetBox label="Total Jobs" value={data.totalJobs} />
      <WidgetBox label="Active" value={data.activeJobs} />
      <WidgetBox label="Completed" value={data.completedJobs} />
      <WidgetBox label="Quotes Given" value={data.totalQuotes} />
      <WidgetBox label="Earnings (₹)" value={data.totalEarnings} />
    </div>
  );
}

function WidgetBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center border-l-4 border-blue-400">
      <div className="text-2xl font-bold text-blue-700">{value ?? "—"}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
