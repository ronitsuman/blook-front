import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

const notifColors = {
  campaign: "bg-blue-100 text-blue-700",
  booking: "bg-green-100 text-green-700",
  approval: "bg-purple-100 text-purple-700",
  payment: "bg-yellow-100 text-yellow-700",
  system: "bg-gray-100 text-gray-700"
};

export default function AdvertiserNotificationsTab() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/advertiser/dashboard/notifications")
      .then(res => {
        setNotifications(Array.isArray(res.data.notifications) ? res.data.notifications : []);
        setLoading(false);
      })
      .catch(() => {
        setNotifications([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Notifications</h2>
      {loading ? (
        <div className="text-gray-400 animate-pulse">Loading notifications...</div>
      ) : !notifications.length ? (
        <div className="text-gray-500 py-10">No notifications yet.</div>
      ) : (
        <div className="space-y-4">
          {notifications.map(n => (
            <div key={n._id} className={`rounded-xl p-4 shadow border-l-4 ${notifColors[n.type] || "bg-gray-50"}`}>
              <div className="font-semibold mb-1">{n.message}</div>
              <div className="text-xs text-gray-500 flex items-center justify-between">
                <span>{n.type}</span>
                <span>{n.createdAt ? n.createdAt.slice(0, 10) : "—"}</span>
              </div>
              {n.link && (
                <a href={n.link} className="text-blue-600 underline text-xs" target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
