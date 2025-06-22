
import React from 'react'

const BlookHeat_HomeTeaser = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">🔥 BlookHeat™ is Coming This September</h2>
    <p className="text-gray-700 max-w-xl mx-auto text-lg">
      A revolutionary heatmapping feature to visualize real-time footfall and engagement using smart camera data. Launching soon!
    </p>
    <button
      onClick={() => (window.location.href = "/modules/blookheat")}
      className="mt-6 bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
    >
      Learn More
    </button>
  </div>
</section>
  )
}

export default BlookHeat_HomeTeaser

