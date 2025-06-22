
import { CheckCircle, Users, Building, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Users className="w-10 h-10 text-blue-700" />,
      title: "Register Your Role",
      desc: "Sign up as Advertiser, Space Owner, Vendor, or Blookforce Agent to get started.",
    },
    {
      icon: <Building className="w-10 h-10 text-blue-700" />,
      title: "Add / Browse Spaces",
      desc: "Space Owners list properties, Advertisers browse and launch campaigns.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-blue-700" />,
      title: "Get Quotes & Book",
      desc: "Advertisers receive vendor quotes, finalize jobs, and pay securely.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-700" />,
      title: "Track & Earn",
      desc: "Vendors deliver. Agents report. Spaces get booked. Payments processed seamlessly.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">How It Works</h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg mb-10">
          A simple process for everyone involved.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition text-left">
              <div className="mb-4">{step.icon}</div>
              <h4 className="font-bold text-blue-800 text-lg mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
