import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

const statusColor = {
  used: "bg-green-100 text-green-700",
  unused: "bg-blue-100 text-blue-700",
  expired: "bg-red-100 text-red-700"
};

export default function AdvertiserRewardsTab() {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/advertiser/dashboard/rewards", { params: { type: filter } })
      .then(res => {
        setRewards(Array.isArray(res.data.rewards) ? res.data.rewards : []);
        setLoading(false);
      })
      .catch(() => {
        setRewards([]);
        setLoading(false);
      });
  }, [filter]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Rewards & Perks</h2>
      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm text-purple-800">Type:</label>
        <select
          className="border rounded px-2 py-1"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="cashback">Cashback</option>
          <option value="discount">Discount</option>
          <option value="bonus">Bonus</option>
          <option value="gift">Gift</option>
        </select>
      </div>
      {loading ? (
        <div className="text-gray-400 animate-pulse">Loading rewards...</div>
      ) : !rewards.length ? (
        <div className="text-gray-500 py-10">No rewards found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rewards.map(r => (
            <div key={r._id} className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-300 flex flex-col">
              {r.image && <img src={r.image} alt="perk" className="h-16 w-16 mb-2 object-cover rounded" />}
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-lg">{r.title}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColor[r.status] || "bg-gray-100 text-gray-700"}`}>{r.status}</span>
              </div>
              <div className="text-sm text-gray-500 mb-1 capitalize">{r.rewardType} — ₹{r.rewardValue}</div>
              <div className="text-xs text-gray-400">Valid till: {r.validTill ? r.validTill.slice(0, 10) : "—"}</div>
              {/* QR code/How to use/etc. */}
              {r.qrCode && (
                <img src={r.qrCode} alt="QR code" className="h-14 w-14 mt-2" />
              )}
              {r.redeemLink && (
                <a href={r.redeemLink} className="text-purple-700 text-xs mt-2 underline" target="_blank" rel="noopener noreferrer">
                  Redeem Now
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
