
// export default function SuggestedPricing({ formData, setFormData }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       pricing: {
//         ...prev.pricing,
//         [name]: value
//       }
//     }))
//   }

//   const fields = [
//     "Wall / Facade Branding",
//     "Digital Screen Ads",
//     "In-store Activations",
//     "Sampling / Promoter",
//     "QR Code Campaigns"
//   ]

//   return (
//     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
//       <h2 className="text-xl font-bold text-blue-900">Suggested Pricing</h2>
//       <p className="text-gray-500 text-sm mb-4">Enter estimated monthly pricing for the following services (in ₹):</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {fields.map((field, i) => (
//           <div key={i}>
//             <label className="block text-sm font-medium text-blue-800 mb-1">
//               {field}
//             </label>
//             <input
//               type="number"
//               name={field}
//               value={formData.pricing?.[field] || ""}
//               onChange={handleChange}
//               placeholder="₹ per month"
//               className="w-full border p-2 rounded"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export default function SuggestedPricing({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [name]: value
      }
    }))
  }

  const fields = [
    "Wall / Facade Branding",
    "Digital Screen Ads",
    "In-store Activations",
    "Sampling / Promoter",
    "QR Code Campaigns"
  ]

  return (
    <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
      <h2 className="text-xl font-bold text-blue-900">Suggested Pricing</h2>
      <p className="text-gray-500 text-sm mb-4">Enter estimated monthly pricing for the following services (in ₹):</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((field, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-blue-800 mb-1">{field}</label>
            <input
              type="number"
              name={field}
              value={formData.pricing?.[field] || ""}
              onChange={handleChange}
              placeholder="₹ per month"
              className="w-full border p-2 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
