
import { useNavigate } from "react-router-dom"
import { dummySpaces } from "../components/data/spaces" // shared dummy list from a central file

export default function FeaturedSpaces() {
  const navigate = useNavigate()
  const featuredSpaces = dummySpaces.filter(space =>
    space.tags.includes("Featured")
  ).slice(0, 3)

  return (
    <section className="bg-blue-50 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Featured Spaces</h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Handpicked locations with top performance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {featuredSpaces.map(space => (
            <div key={space.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={space.image} alt={space.name} className="w-full h-52 object-cover" />
              <div className="p-5 text-left">
                <h3 className="font-bold text-blue-900 text-lg">{space.name}</h3>
                <p className="text-sm text-gray-500">{space.type} - {space.city}</p>
                <p className="text-blue-700 font-semibold mt-2">₹{space.price}</p>
                <button
                  onClick={() => navigate("/browse")}
                  className="mt-4 w-full py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/browse")}
          className="mt-10 inline-block px-6 py-2 text-sm font-medium bg-white text-blue-700 border border-blue-700 rounded hover:bg-blue-50"
        >
          Explore All Spaces →
        </button>
      </div>
    </section>
  )
}
