
import { Building, MapPin, Handshake, Users, TrendingUp, SearchCheck, ShieldCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BlookForce() {
  const navigate = useNavigate()

  const benefits = [
    "Earn commissions per verified listing",
    "Flexible work — no targets or time restrictions",
    "Training support & agent dashboard access",
    "Earn from space onboarding, leads, and vendor additions"
  ]

  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Verified Listings",
      desc: "Add real physical spaces with geo-mapping and photos."
    },
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      title: "Onboard Vendors",
      desc: "Bring trusted vendors into the system and earn commission."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Lead Referrals",
      desc: "Connect advertisers or companies looking to run campaigns."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Verified Earnings",
      desc: "Get paid only after listing passes admin approval — no scams."
    },
    {
      icon: <SearchCheck className="w-6 h-6 text-white" />,
      title: "Agent Dashboard",
      desc: "Track your work, leads, commissions and payouts in one place."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Growth Potential",
      desc: "More listings = more earnings. Full India expansion happening."
    }
  ]

  return (
    <div className="bg-white text-blue-900">
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Join as a Blookforce Agent</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Earn passive income by helping us grow — onboard real spaces, connect local vendors, and refer advertisers from your area.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-white text-green-700 px-6 py-2 rounded font-medium hover:bg-green-100"
        >
          Become an Agent →
        </button>
      </section>

      <section className="py-20 px-6 max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Agent Benefits</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-center text-base">
          {benefits.map((b, i) => (
            <li key={i} className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">{b}</li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Key Activities</h2>
          <p className="text-center text-base text-gray-600 mb-12 max-w-3xl mx-auto">
            Here's what you’ll be doing as a certified Blookforce agent
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-green-600 text-white p-6 rounded-xl hover:shadow-lg">
                {f.icon}
                <h3 className="font-semibold text-lg mt-3">{f.title}</h3>
                <p className="text-sm mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-base max-w-xl mx-auto">It’s free to register. Earn money by simply connecting people, places and vendors.</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-8 bg-white text-green-700 px-6 py-3 rounded font-semibold hover:shadow-md"
        >
          Register as Blookforce →
        </button>
      </section>
    </div>
  )
}
