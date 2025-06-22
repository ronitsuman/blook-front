
import { Flame, Eye, MapPin, BarChart3, Clock9 } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BlookHeat() {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Real-Time Detection",
      desc: "Get live visibility of space activity using privacy-safe camera feeds."
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Heatmap Visualization",
      desc: "View hotspot movement data to analyze which zones get most traffic."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Engagement Insights",
      desc: "Brands can measure campaign reach and space owners optimize placement."
    },
    {
      icon: <Clock9 className="w-8 h-8 text-white" />,
      title: "Time Based Trends",
      desc: "Track footfall trends hourly, daily or seasonally for smarter decisions."
    }
  ]

  return (
    <div className="bg-white text-blue-900">
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Introducing BlookHeat™</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Our upcoming heatmapping technology will transform how brands & space owners measure real-world engagement. Launching in September 2025.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-white text-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-100"
        >
          Request Early Access →
        </button>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lg">
            {features.map((f, i) => (
              <div key={i} className="bg-blue-700 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-semibold text-xl mb-1">{f.title}</h3>
                <p className="text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get Notified When BlookHeat Launches</h2>
        <p className="text-base max-w-2xl mx-auto text-gray-700">
          Be among the first to experience footfall tracking, smart reporting, and campaign performance with live heatmap data.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-blue-700 text-white px-6 py-3 rounded font-medium hover:bg-blue-800"
        >
          Notify Me →
        </button>
      </section>
    </div>
  )
}
