
import { Users, Building2, BadgePercent, CreditCard, MapPinned, Rocket, ShieldCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function BlookMySpace() {
  const navigate = useNavigate()

  const benefits = [
    "All-in-one advertising platform",
    "Automated vendor + space workflows",
    "Real-time analytics & heat mapping",
    "Verified execution + transparent pricing"
  ]

  const userRoles = [
    { icon: <Rocket className="w-8 h-8 text-blue-700" />, title: "Advertisers", desc: "Plan, run and manage outdoor campaigns with complete control." },
    { icon: <Building2 className="w-8 h-8 text-blue-700" />, title: "Space Owners", desc: "Monetize underutilized space by listing it for brand campaigns." },
    { icon: <BadgePercent className="w-8 h-8 text-blue-700" />, title: "Vendors", desc: "Quote and execute campaign logistics like printing, installation etc." },
    { icon: <Users className="w-8 h-8 text-blue-700" />, title: "Blookforce Agents", desc: "Earn commissions by onboarding spaces, clients or vendors." }
  ]

  const features = [
    { icon: <MapPinned className="w-6 h-6 text-white" />, title: "Verified Locations", desc: "Discover curated spaces across India with verified traffic data." },
    { icon: <CreditCard className="w-6 h-6 text-white" />, title: "Escrow Payments", desc: "Funds are securely held until campaign fulfillment is verified." },
    { icon: <ShieldCheck className="w-6 h-6 text-white" />, title: "Automated Flow", desc: "From submission to quote to approval, all workflows are seamless." },
  ]

  return (
    <div className="bg-white text-blue-900">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-4 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">BLookMySpace Platform</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          India’s unified ecosystem for physical advertising — connect brands, spaces, vendors & agents under one smart platform.
        </p>
        <button onClick={() => navigate("/login")} className="mt-6 bg-white text-blue-700 px-6 py-2 rounded font-medium hover:bg-blue-100">
          Get Started →
        </button>
      </section>

      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Who Is It For?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {userRoles.map((role, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-3">{role.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{role.title}</h3>
              <p className="text-sm text-gray-600">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Key Features</h2>
          <p className="text-center text-sm text-gray-600 mb-10 max-w-2xl mx-auto">
            Everything you need to plan, execute and track your brand visibility campaigns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="bg-blue-600 text-white p-6 rounded-xl">
                {feat.icon}
                <h3 className="font-semibold text-lg mt-3">{feat.title}</h3>
                <p className="text-sm mt-2">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          <div>
            <div className="text-3xl text-blue-700 font-bold mb-2">1</div>
            <p><strong>Register</strong><br />Create an account & set your role</p>
          </div>
          <div>
            <div className="text-3xl text-blue-700 font-bold mb-2">2</div>
            <p><strong>Submit / Search</strong><br />List your space or find campaign options</p>
          </div>
          <div>
            <div className="text-3xl text-blue-700 font-bold mb-2">3</div>
            <p><strong>Quote / Book</strong><br />Get matched with vendors or book instantly</p>
          </div>
          <div>
            <div className="text-3xl text-blue-700 font-bold mb-2">4</div>
            <p><strong>Track & Earn</strong><br />Follow live status and collect earnings</p>
          </div>
        </div>
      </section>
      

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose BLookMySpace?</h2>
        <ul className="flex flex-wrap justify-center gap-4 text-sm max-w-4xl mx-auto mt-4">
          {benefits.map((b, i) => (
            <li key={i} className="bg-white text-blue-800 px-4 py-2 rounded-full">{b}</li>
          ))}
        </ul>
        <button onClick={() => navigate("/login")} className="mt-8 bg-white text-blue-700 px-6 py-2 rounded font-medium hover:bg-blue-100">
          Join the Platform →
        </button>
      </section>
    </div>
  )
}
