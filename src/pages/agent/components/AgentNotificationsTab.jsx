import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function AgentNotificationsTab() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/agent/dashboard/notifications")
      .then(res => {
        setNotifications(Array.isArray(res.data.notifications) ? res.data.notifications : []);
        setLoading(false);
      })
      .catch(() => {
        setNotifications([]);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="animate-pulse text-lg text-gray-400">Loading notifications...</div>;

  if (!notifications.length)
    return <div className="text-gray-500 py-10">No notifications yet.</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Notifications</h2>
      <div className="bg-white rounded-xl shadow border border-purple-100">
        <ul>
          {notifications.map((n, idx) => (
            <li key={n._id || idx} className={`border-b p-4 ${n.isRead ? "" : "bg-purple-50"}`}>
              <div className="font-semibold">{n.message}</div>
              <div className="text-xs text-gray-500">{new Date(n.createdAt).toLocaleString()}</div>
              {n.link && (
                <a href={n.link} className="text-purple-600 underline text-xs" target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
