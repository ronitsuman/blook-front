
import { Briefcase, ClipboardList, FileCheck2, GalleryHorizontal, SendHorizontal, Sparkle, Star, Workflow } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BlookWorks() {
  const navigate = useNavigate()

  const features = [
    {
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      title: "Get RFQs",
      desc: "Receive campaign requests for services like printing, fabrication, installation and more."
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-white" />,
      title: "Submit Quotes",
      desc: "Send your pricing, delivery time, sample artwork and custom notes — all in one place."
    },
    {
      icon: <GalleryHorizontal className="w-8 h-8 text-white" />,
      title: "Upload Work",
      desc: "After selection, upload final creatives or proof of work with secure timestamps."
    },
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: "Status Tracking",
      desc: "Quote accepted or rejected? All campaign statuses are updated live on your dashboard."
    },
    {
      icon: <SendHorizontal className="w-8 h-8 text-white" />,
      title: "Client Messaging",
      desc: "Communicate with advertiser, ask queries, send samples or ask for clarification securely."
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Build Reputation",
      desc: "Earn stars, reviews and credibility to be prioritized for future vendor requests."
    }
  ]

  return (
    <div className="bg-white text-blue-900">
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">BlookWorks Vendor Portal</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          If you are a printing expert, fabricator, signage installer or promoter agency — BlookWorks gives you verified jobs with payment protection.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-white text-purple-700 px-6 py-3 rounded font-medium hover:bg-purple-100"
        >
          Join BlookWorks →
        </button>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-lg">
            {features.map((f, i) => (
              <div key={i} className="bg-purple-700 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-semibold text-xl mb-1">{f.title}</h3>
                <p className="text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Join BlookWorks?</h2>
        <p className="text-base max-w-2xl mx-auto text-gray-700">
          No monthly fees. Just verified campaign leads, escrow payment flow, messaging, artwork system and review-based ranking.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-purple-700 text-white px-6 py-3 rounded font-medium hover:bg-purple-800"
        >
          Start as Vendor →
        </button>
      </section>
    </div>
  )
}
