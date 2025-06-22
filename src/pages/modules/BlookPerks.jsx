
import { Gift, Medal, Coins, Trophy, Users, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BlookPerks() {
  const navigate = useNavigate()

  const perks = [
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Referral Bonus",
      desc: "Earn rewards by inviting vendors, agents or advertisers to BlookMySpace."
    },
    {
      icon: <Coins className="w-8 h-8 text-white" />,
      title: "Earn Coins",
      desc: "Receive BlookCoins for completing verified actions on the platform."
    },
    {
      icon: <Medal className="w-8 h-8 text-white" />,
      title: "Loyalty Tiers",
      desc: "Bronze, Silver, Gold status with increasing benefits and visibility."
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Top Performer Rewards",
      desc: "Monthly gifts & recognition for top vendors, agents and advertisers."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Special Campaign Access",
      desc: "Get early access to premium campaigns and bigger budgets."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Team Points",
      desc: "Earn collective points if working in a team or agency. Level up together."
    }
  ]

  return (
    <div className="bg-white text-blue-900">
      <section className="bg-gradient-to-r from-yellow-600 to-amber-500 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Introducing BlookPerks</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          A reward & loyalty system for all active users on the BlookMySpace platform. Get rewarded while you work!
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-white text-yellow-700 px-6 py-3 rounded font-medium hover:bg-yellow-100"
        >
          Join & Earn →
        </button>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Perks & Rewards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-lg">
            {perks.map((f, i) => (
              <div key={i} className="bg-yellow-600 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-semibold text-xl mb-1">{f.title}</h3>
                <p className="text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Track. Earn. Redeem.</h2>
        <p className="text-base max-w-2xl mx-auto text-gray-700">
          Your dashboard will show coin balance, referral link, reward status, and monthly challenges. Coming soon: redeem coins for gifts, upgrades, and wallet credit!
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-yellow-600 text-white px-6 py-3 rounded font-medium hover:bg-yellow-700"
        >
          Start Earning →
        </button>
      </section>
    </div>
  )
}
