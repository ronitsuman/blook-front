// ListingOptionSection.jsx
import { motion } from "framer-motion";

export default function ListingOptionSection() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Choose the Right Plan for Your Space</h2>
        <p className="text-gray-700 mb-6">Compare Free vs Premium Listing and unlock more earnings & visibility.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          {
            title: "Free Listing",
            features: [
              "Visible on Client Dashboard",
              "Heat Mapping Trial (Sept)",
            ],
            cta: "List Your Space Free",
          },
          {
            title: "Premium Listing",
            features: [
              "All Free Listing Features",
              "Feature on Top Search",
              "Monthly Insights & Leads",
              "Dedicated Client Manager",
              "Priority for Brand Shortlisting",
            ],
            cta: "Go Premium (₹1800/year)",
          }
        ].map((plan, idx) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-8 text-left border-2 border-blue-200 flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
            <ul className="text-gray-700 mb-6 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✔</span> {f}
                </li>
              ))}
            </ul>
            <button className={`px-6 py-2 rounded-full font-semibold mt-auto ${idx === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
