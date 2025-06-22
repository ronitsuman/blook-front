import { Mail, Phone, MessageCircle, Video } from "lucide-react"
import { useState } from "react"

const tabs = ["FAQ", "Support Tickets", "Contact Us", "Resources"]

const faqs = {
  "Getting Started": [
    "How do I create an account on BLookMySpace?",
    "What types of spaces can I list on the platform?",
    "How does the booking process work?"
  ],
  "Payments & Billing": [
    "What payment methods are accepted?",
    "When do I get paid as a space owner?",
    "What are the platform fees?"
  ],
  "Technical Support": [
    "I'm having trouble uploading images. What should I do?",
    "How do I reset my password?",
    "Can I access the platform on mobile devices?"
  ],
  "Account & Security": [
    "How do I verify my account?",
    "Is my personal information secure?",
    "How do I delete my account?"
  ]
}

export default function Support() {
  const [activeTab, setActiveTab] = useState("FAQ")

  return (
    <div className="bg-white text-blue-900 px-4 py-10 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2">Help & Support</h1>
      <p className="text-center text-gray-600 mb-10">
        Get help with your BLookMySpace account and services
      </p>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { icon: <MessageCircle className="w-6 h-6" />, label: "Live Chat", desc: "Chat with our support team" },
          { icon: <Phone className="w-6 h-6" />, label: "Phone Support", desc: "+91 1800-123-4567" },
          { icon: <Mail className="w-6 h-6" />, label: "Email Support", desc: "support@blookmyspace.com" },
          { icon: <Video className="w-6 h-6" />, label: "Video Tutorials", desc: "Watch how-to guides" }
        ].map((item, i) => (
          <div key={i} className="bg-blue-50 p-5 rounded-lg text-center shadow-sm hover:shadow-md transition">
            <div className="text-blue-700 flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-md font-semibold">{item.label}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activeTab === tab
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-blue-700 border-blue-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      {activeTab === "FAQ" && (
        <div className="space-y-6">
          {Object.entries(faqs).map(([category, questions]) => (
            <div key={category} className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">{category}</h3>
              <ul className="space-y-2 text-sm">
                {questions.map((q, i) => (
                  <li key={i} className="border-b pb-2 hover:underline cursor-pointer">{q}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Coming Soon Tabs */}
      {activeTab !== "FAQ" && (
        <div className="text-center text-gray-500 text-sm py-20">Coming soon...</div>
      )}
    </div>
  )
}
