import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  deleted: "bg-gray-200 text-gray-600",
};

export default function AgentSpacesTable() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/agent/dashboard/spaces")
      .then(res => {
        setSpaces(Array.isArray(res.data.spaces) ? res.data.spaces : []);
        setLoading(false);
      })
      .catch(() => {
        setSpaces([]);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="animate-pulse text-lg text-gray-400">Loading spaces...</div>;

  if (!spaces.length)
    return <div className="text-gray-500 py-10">No spaces referred yet.</div>;

  return (
    <div className="overflow-x-auto rounded-xl shadow border border-purple-100 bg-white">
      <table className="min-w-full">
        <thead className="bg-gradient-to-tr from-purple-100 to-indigo-50">
          <tr>
            <th className="px-4 py-3 text-left">Space</th>
            <th className="px-4 py-3 text-left">Owner</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Registered</th>
            <th className="px-4 py-3 text-left">Commission</th>
            <th className="px-4 py-3 text-left">Commission Status</th>
          </tr>
        </thead>
        <tbody>
          {spaces.map(s => (
            <tr key={s._id} className="border-t">
              <td className="px-4 py-3 font-semibold">{s.spaceName}</td>
              <td className="px-4 py-3">
                {s.spaceOwnerId?.spaceOwnerProfile?.fullName}
                <div className="text-xs text-gray-500">{s.spaceOwnerId?.spaceOwnerProfile?.companyName}</div>
              </td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${statusColors[s.status] || "bg-gray-100 text-gray-500"}`}>{s.status}</span>
              </td>
              <td className="px-4 py-3">{s.createdAt ? s.createdAt.slice(0, 10) : "-"}</td>
              <td className="px-4 py-3 font-bold text-purple-800">
                {s.commission ? `₹${s.commission.amount}` : "-"}
              </td>
              <td className="px-4 py-3 capitalize">
                {s.commission ? (
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                    s.commission.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : s.commission.status === "approved"
                      ? "bg-blue-100 text-blue-700"
                      : s.commission.status === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {s.commission.status}
                  </span>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
