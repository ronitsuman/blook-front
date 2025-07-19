// src/pages/advertiser/components/QuickStatsWidget.jsx
import { useEffect, useState } from "react"
import axiosInstance from "../../../api/axiosInstance"
import { BarChart2, Briefcase, BadgePercent, ShoppingCart, Star } from "lucide-react"

export default function QuickStatsWidget() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await axiosInstance.get("/advertiser/dashboard/overview")
        setStats(res.data)
      } catch {
        setStats(null)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) return <div className="p-8">Loading quick stats...</div>
  if (!stats) return <div className="p-8 text-red-500">Failed to load stats.</div>

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
      <StatCard
        icon={<Briefcase className="text-blue-700 w-7 h-7" />}
        label="Total Campaigns"
        value={stats.totalCampaigns}
      />
      <StatCard
        icon={<BarChart2 className="text-green-700 w-7 h-7" />}
        label="Active Campaigns"
        value={stats.activeCampaigns}
      />
      <StatCard
        icon={<ShoppingCart className="text-yellow-700 w-7 h-7" />}
        label="Pending Quotes"
        value={stats.pendingQuotes}
      />
      <StatCard
        icon={<BadgePercent className="text-purple-700 w-7 h-7" />}
        label="Amount Spent"
        value={"₹" + stats.totalSpent}
      />
      <StatCard
        icon={<Star className="text-pink-700 w-7 h-7" />}
        label="Rewards Earned"
        value={stats.rewardsEarned}
      />
    </div>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
      <div className="mb-2">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  )
}
