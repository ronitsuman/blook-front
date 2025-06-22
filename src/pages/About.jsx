import { Briefcase, BarChart3, Users, Landmark, MapPin, Target, Handshake } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="text-blue-900">
      {/* Hero */}
      <section className="bg-white text-center py-20 px-4 border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4">About <span className="text-blue-700">BLookMySpace</span></h1>
        <p className="text-gray-700 max-w-xl mx-auto text-sm">
          We’re revolutionizing how physical spaces connect with brands,
          creating a seamless ecosystem for space monetization and targeted advertising.
        </p>
        <div className="flex justify-center gap-6 mt-8 text-sm flex-wrap text-blue-800 font-medium">
          <span className="bg-blue-50 px-4 py-2 rounded">1200+ Spaces Onboarded</span>
          <span className="bg-blue-50 px-4 py-2 rounded">₹10M+ Revenue Generated</span>
          <span className="bg-blue-50 px-4 py-2 rounded">5000+ Campaigns Run</span>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-16 px-4">
        <div className="border p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-blue-800">🎯 Our Mission</h3>
          <p className="text-sm text-gray-700">
            To democratize advertising by connecting every physical space with brands,
            enabling space owners to monetize their assets while providing brands with precise,
            data-driven outdoor opportunities.
          </p>
        </div>
        <div className="border p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-blue-800">🌐 Our Vision</h3>
          <p className="text-sm text-gray-700">
            To become India’s largest hyperlocal advertising network, where every space becomes
            a smart, data-driven media asset that benefits owners, brands, and consumers alike.
          </p>
        </div>
      </section>

      {/* Ecosystem Grid */}
     {/* Ecosystem Grid */}
<section className="py-16 px-4 bg-blue-50">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold">Our Ecosystem</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center text-sm">
    {[
      {
        title: "BLookMySpace",
        subtitle: "Core Platform",
        icon: <Landmark className="text-blue-600 w-8 h-8 mx-auto" />,
        desc: "Connect space owners with brands for advertising opportunities. From RWAs to malls, every space can earn revenue.",
      },
      {
        title: "BLookForce",
        subtitle: "Sales Network",
        icon: <MapPin className="text-green-600 w-8 h-8 mx-auto" />,
        desc: "Our commission-based sales force that brings in new spaces and clients, expanding our network across India.",
      },
      {
        title: "BLookPerks",
        subtitle: "Rewards Program",
        icon: <Handshake className="text-purple-600 w-8 h-8 mx-auto" />,
        desc: "Consumer engagement and rewards program that drives footfall and creates value for both spaces and visitors.",
      },
      {
        title: "BLookWorks",
        subtitle: "Vendor Network",
        icon: <Briefcase className="text-orange-500 w-8 h-8 mx-auto" />,
        desc: "End-to-end execution services including printing, fabrication, installation, and campaign management.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
        className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
      >
        {item.icon}
        <h3 className="text-md font-semibold mt-3 text-blue-900">{item.title}</h3>
        <p className="text-xs text-blue-600 font-medium mb-2">{item.subtitle}</p>
        <p className="text-gray-600">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Why Choose Us */}
      {/* Why Choose Us */}
<section className="py-20 px-4 text-center bg-white">
  <div className="max-w-6xl mx-auto mb-10">
    <h2 className="text-3xl font-bold mb-4">Why Choose BLookMySpace?</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      {
        icon: <Users className="w-8 h-8 text-blue-600 mx-auto" />,
        title: "Verified Network",
        desc: "All spaces and vendors are verified through our rigorous onboarding process, ensuring quality and reliability for all stakeholders.",
      },
      {
        icon: <BarChart3 className="w-8 h-8 text-indigo-600 mx-auto" />,
        title: "Data-Driven Insights",
        desc: "Advanced analytics and heat mapping provide real-time insights into campaign performance and audience engagement.",
      },
      {
        icon: <Target className="w-8 h-8 text-green-600 mx-auto" />,
        title: "End-to-End Support",
        desc: "From campaign planning to execution and monitoring, we provide complete support through our integrated ecosystem.",
      },
    ].map((f, i) => (
      <div key={i} className="bg-blue-50 p-6 rounded-xl shadow">
        {f.icon}
        <h3 className="text-lg font-semibold mt-3">{f.title}</h3>
        <p className="text-sm text-gray-600">{f.desc}</p>
      </div>
    ))}
  </div>
</section>

   

      {/* Impact Counters */}
      <section className="py-16 bg-gray-50 px-4 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div><p className="text-3xl font-bold text-blue-700">1200+</p><p className="text-sm">Spaces Onboarded</p></div>
          <div><p className="text-3xl font-bold text-green-600">405</p><p className="text-sm">Heat Maps Enabled</p></div>
          <div><p className="text-3xl font-bold text-purple-600">5000+</p><p className="text-sm">Campaigns Executed</p></div>
          <div><p className="text-3xl font-bold text-orange-500">₹10M+</p><p className="text-sm">Revenue Generated</p></div>
        </div>
      </section>

      {/* Leadership */}
     {/* Leadership */}
<section className="py-20 px-4 text-center bg-white">
  <div className="max-w-6xl mx-auto mb-10">
    <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm">
    {[
      {
        name: "Rajesh Kumar",
        title: "Founder & CEO",
        desc: "15+ years in advertising and technology. Previously led digital transformation at major advertising agencies.",
      },
      {
        name: "Priya Sharma",
        title: "Co-founder & CTO",
        desc: "Tech veteran with expertise in AI/ML and data analytics. Former engineering lead at top tech companies.",
      },
      {
        name: "Amit Patel",
        title: "Chief Operating Officer",
        desc: "Operations expert with deep understanding of Indian markets. Scaled multiple startups from 0 to ₹100M+ revenue.",
      },
    ].map((person, i) => (
      <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
        <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 border border-blue-200" />
        <h4 className="font-bold text-blue-900">{person.name}</h4>
        <p className="text-blue-600 text-xs font-medium">{person.title}</p>
        <p className="text-gray-600 text-xs mt-2">{person.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Join Our Ecosystem?</h2>
        <p className="text-white/80 mb-6 text-sm">Whether you're a space owner, brand, vendor, or sales professional, there's a place for you here.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-800 px-5 py-2 rounded-full font-medium hover:bg-gray-100">List Your Space</button>
          <button className="bg-white text-blue-800 px-5 py-2 rounded-full font-medium hover:bg-gray-100">Advertise with Us</button>
          <button className="bg-white text-blue-800 px-5 py-2 rounded-full font-medium hover:bg-gray-100">Join as Vendor</button>
        </div>
      </section>
    </div>
  )
}
