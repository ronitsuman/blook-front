
import { useNavigate } from "react-router-dom"

export default function Pricing() {
  
  const navigate = useNavigate()

  const handleProtectedClick = (path) => {
    if (!user) return navigate("/login")
    navigate(path)
  }

  return (
    <div className="bg-white text-blue-900 px-4 py-12 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold text-center">Simple, Transparent Pricing</h1>
      <p className="text-center text-gray-600 text-lg mt-2 mb-10">
        Choose the plan that works best for you. Upgrade anytime to unlock premium features and maximize your space monetization potential.
      </p>

      <h2 className="text-2xl font-semibold mb-4">For Space Owners</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
          <p className="text-2xl font-bold text-green-700 mb-3">₹0 /month</p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Basic space listing</li>
            <li>Standard visibility to brands</li>
            <li>Basic analytics dashboard</li>
            <li>Email support</li>
            <li>Up to 5 photos per space</li>
          </ul>
          <button onClick={() => handleProtectedClick("/list-space")} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded">
            Get Started Free
          </button>
        </div>

        <div className="border border-blue-600 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
            Premium Plan <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">Most Popular</span>
          </h3>
          <p className="text-2xl font-bold text-blue-700 mb-3">₹1,800 /year</p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Everything in Free Plan</li>
            <li>Featured badge on listings</li>
            <li>Priority in search results</li>
            <li>Advanced analytics & insights</li>
            <li>Unlimited photos & videos</li>
            <li>Early access to BlookHeat trial</li>
            <li>Homepage rotation listing</li>
            <li>Priority customer support</li>
            <li>1 month free trial</li>
          </ul>
          <button onClick={() => handleProtectedClick("/list-space")} className="mt-6 bg-blue-700 text-white px-5 py-2 rounded">
            Start Free Trial
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">For Brands & Advertisers</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-2xl font-bold text-green-700 mb-3">₹5,000 /month</p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Access to 500+ spaces</li>
            <li>Basic campaign analytics</li>
            <li>Email support</li>
            <li>Up to 5 active campaigns</li>
          </ul>
          <button onClick={() => handleProtectedClick("/browse")} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded">
            Get Started
          </button>
        </div>

        <div className="border border-green-600 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Professional <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Popular</span></h3>
          <p className="text-2xl font-bold text-green-700 mb-3">₹15,000 /month</p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Access to all 1200+ spaces</li>
            <li>Advanced analytics & insights</li>
            <li>Priority support</li>
            <li>Unlimited campaigns</li>
            <li>Heat mapping data access</li>
            <li>Dedicated account manager</li>
          </ul>
          <button onClick={() => handleProtectedClick("/browse")} className="mt-6 bg-green-700 text-white px-5 py-2 rounded">
            Get Started
          </button>
        </div>

        <div className="border p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-2xl font-bold text-gray-800 mb-3">Custom Pricing</p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Everything in Professional</li>
            <li>Custom integrations</li>
            <li>White-label options</li>
            <li>24/7 support & SLA</li>
          </ul>
          <button onClick={() => handleProtectedClick("/contact")} className="mt-6 bg-gray-700 text-white px-5 py-2 rounded">
            Contact Sales
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12 text-sm">
        <div className="border p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">BLookWorks (Vendor Services)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Printing: ₹50–200/sq ft</li>
            <li>Installation: ₹500–2000/job</li>
            <li>Digital Screen Setup: ₹5,000–15,000/unit</li>
            <li>Campaign Mgmt: 10–15% of brand budget</li>
          </ul>
          <button onClick={() => handleProtectedClick("/modules/blookworks")} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Get Quote
          </button>
        </div>

        <div className="border p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">BLookForce (Commission Structure)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Space Referral: ₹500–2,000 /space</li>
            <li>Client Referral: 5–10% of 1st campaign</li>
            <li>Vendor Referral: ₹1,000–5,000 /vendor</li>
            <li>Monthly Bonus: up to ₹50,000</li>
          </ul>
          <button onClick={() => handleProtectedClick("/modules/blookforce")} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            Join BLookForce
          </button>
        </div>
      </div>
    </div>
  )
}
