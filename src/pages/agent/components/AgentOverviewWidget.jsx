import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function AgentOverviewWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get("/agent/dashboard/overview")
      .then(res => setData(res.data))
      .catch(() => setData(null));
  }, []);

  if (!data)
    return <div className="text-gray-400 animate-pulse">Loading overview...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <WidgetBox label="Total Spaces" value={data.totalSpaces} />
      <WidgetBox label="Pending" value={data.pendingSpaces} />
      <WidgetBox label="Approved" value={data.approvedSpaces} />
      <WidgetBox label="Rejected" value={data.rejectedSpaces} />
      <WidgetBox label="Commission (₹)" value={data.totalCommission} />
    </div>
  );
}

function WidgetBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center border-l-4 border-purple-400">
      <div className="text-2xl font-bold text-purple-700">{value ?? "—"}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
