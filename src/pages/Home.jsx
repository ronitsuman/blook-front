import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { MapPin, BarChart3, ShieldCheck, Zap } from "lucide-react"
import Navbar from "../components/Navbar"
import FeaturedSpaces from "../components/FeatureSpaces"
import BlookHeat_HomeTeaser from "../components/BlookHeat_HomeTeaser"
import ListingOptionSection from "../components/ListingOptionSection"
import IndustriesGrid from "../components/IndustriesGrid"
import AgencyCTA from "../components/AgencryCTA"
import NewsletterSignup from "../components/NewsletterSignup"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <>
    
    <section className="bg-gradient-to-r from-[#0f3ec9] to-[#251ac3] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase text-sm tracking-widest text-yellow-400 font-semibold mb-4">
            India’s #1 Ad Space Platform
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Transform Your Brand <br />
            <span className="text-yellow-400">Visibility</span> Across India
          </h1>
          <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-md">
            Discover verified advertising spaces, request vendor quotes, and launch outdoor campaigns with complete transparency & real-time analytics.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Explore Spaces
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition">
              Get Started
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm text-white/80">
            <div>
              <span className="text-xl font-bold text-white">500+</span> Spaces
            </div>
            <div>
              <span className="text-xl font-bold text-white">1000+</span> Clients
            </div>
            <div>
              <span className="text-xl font-bold text-white">25+</span> Cities
            </div>
          </div>
        </motion.div>

        {/* Right Side Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden relative">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Explainer Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
          <div className="absolute bottom-[-1.5rem] left-0 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl shadow-md">
            ✅ 95% Campaign Success Rate
          </div>
        </motion.div>
      </div>
    </section>
    
<section className="bg-white py-10 px-4 shadow-sm">
  <div className="max-w-6xl mx-auto">
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Find the Right Space for Your Campaign</h2>
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* City Input */}
        <input
          type="text"
          placeholder="Enter City (e.g., Patna)"
          className="border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Space Type */}
        <select className="border border-blue-200 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Select Space Type</option>
          <option value="mall">Mall</option>
          <option value="hoarding">Hoarding</option>
          <option value="rwa">RWA</option>
          <option value="roadBanner">Roadside Banner</option>
        </select>

        {/* Budget */}
        <select className="border border-blue-200 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Budget Range</option>
          <option value="below10k">Below ₹10,000</option>
          <option value="10k-25k">₹10,000 - ₹25,000</option>
          <option value="25k-50k">₹25,000 - ₹50,000</option>
          <option value="50kplus">₹50,000+</option>
        </select>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md font-semibold px-6 py-2 hover:bg-blue-700 transition-all"
        >
          🔍 Search Spaces
        </button>
      </form>
    </div>
  </div>
</section>
{/*  Featured Spaces Section */}

<FeaturedSpaces/>


{/* Stats Counter Strip */}
<section className="bg-blue-600 text-white py-12 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {[
      { label: "Active Spaces", value: "500+" },
      { label: "Happy Clients", value: "1000+" },
      { label: "Campaigns Delivered", value: "2500+" },
      { label: "Cities Covered", value: "25+" },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center">
        <p className="text-3xl font-extrabold">{item.value}</p>
        <p className="text-white/80 text-sm mt-1">{item.label}</p>
      </div>
    ))}
  </div>
</section>
<ListingOptionSection/>
<IndustriesGrid/>



{/*  Why Choose Us Section */}
<section className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose BLookMySpace?</h2>
    <p className="text-gray-600 text-sm max-w-xl mx-auto">
      Designed for transparency, efficiency, and real-world branding impact.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Location Discovery",
        desc: "Explore a wide variety of advertising spaces across India.",
        icon: <MapPin className="w-8 h-8 text-blue-600" />,
        bg: "bg-blue-100",
      },
      {
        title: "Real-Time Analytics",
        desc: "Heat mapping & footfall insights built-in.",
        icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
        bg: "bg-indigo-100",
      },
      {
        title: "Secure Transactions",
        desc: "Escrow-style payment system for peace of mind.",
        icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
        bg: "bg-green-100",
      },
      {
        title: "Quick Setup",
        desc: "Get your campaigns live in just 3 simple steps.",
        icon: <Zap className="w-8 h-8 text-yellow-600" />,
        bg: "bg-yellow-100",
      },
    ].map((feature, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.2 }}
        className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-left border border-blue-50"
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bg}`}>
          {feature.icon}
        </div>
        <h3 className="text-lg font-bold text-blue-800 mb-1">{feature.title}</h3>
        <p className="text-gray-600 text-sm">{feature.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


{/*  How It Works Section */}
<section className="bg-blue-50 py-20 px-4">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">How BLookMySpace Works</h2>
    <p className="text-blue-700 text-sm max-w-xl mx-auto">
      Get started in just 3 simple steps. We’ve simplified outdoor advertising for everyone.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        step: 1,
        title: "Discover Spaces",
        desc: "Browse verified spaces by location, type, and budget.",
      },
      {
        step: 2,
        title: "Book & Pay",
        desc: "Submit RFQ, get vendor quotes, and pay securely.",
      },
      {
        step: 3,
        title: "Track & Launch",
        desc: "See real-time updates, heat maps, and proof of execution.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.2 }}
        className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-600 hover:shadow-xl transition-all"
      >
        <div className="text-blue-600 text-3xl font-bold mb-3">Step {item.step}</div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>
<BlookHeat_HomeTeaser/>


{/*  Testimonials Section */}
<section className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
    <p className="text-gray-600 text-sm max-w-xl mx-auto">
      Trusted by advertisers, space owners, and campaign managers across India.
    </p>
  </div>

 {/* review   */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        name: "Aman Verma",
        role: "Marketing Lead, Nykaa",
        quote: "Super seamless process. We discovered new spaces and executed our campaign in just days!",
      },
      {
        name: "Priya Mehta",
        role: "Founder, BrandWise",
        quote: "Love the heat mapping & proof of execution. Makes outdoor campaigns feel digital.",
      },
      {
        name: "Siddharth Rao",
        role: "Space Owner – Mumbai",
        quote: "Finally a platform that helps us monetize our building space transparently.",
      },
    ].map((review, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.2 }}
        className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-xl"
      >
        <p className="text-gray-800 text-sm italic mb-4">“{review.quote}”</p>
        <div className="flex items-center gap-3 mt-4">
          <div className="text-sm">
            <p className="font-semibold text-blue-900">{review.name}</p>
            <p className="text-gray-600 text-xs">{review.role}</p>
          </div>
        </div>
        <div className="mt-3 text-yellow-400 flex gap-1 text-lg">★★★★★</div>
      </motion.div>
    ))}
  </div>
</section>


{/*  Final CTA Section */}
<section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 px-4 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
    <p className="text-white/80 mb-6">
      Join 1000+ advertisers and space owners growing their visibility with BLookMySpace.
    </p>
    <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
      🚀 Start Your Campaign
    </button>
  </div>
</section>

{/*  Footer Section */}
{/* <footer className="bg-blue-950 text-white py-10 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-xl font-bold mb-3">BLookMySpace</h3>
      <p className="text-sm text-white/80">
        Revolutionizing outdoor branding. Find verified ad spaces & launch campaigns with ease.
      </p>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
      <ul className="text-sm text-white/80 space-y-1">
        <li><a href="#">About</a></li>
        <li><a href="#">Spaces</a></li>
        <li><a href="#">Vendors</a></li>
        <li><a href="#">Agents</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
      <p className="text-sm text-white/80">support@blookmyspace.ai</p>
      <p className="text-sm text-white/80">+91 9876543210</p>
    </div>
  </div>
  <div className="text-center text-xs text-white/60 mt-8">
    © 2025 BLookMySpace.ai. All rights reserved.
  </div>
</footer> */}
<NewsletterSignup/>
<Footer/>



</>

  )
}
