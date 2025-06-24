// import { useState } from "react";

// export default function Step5PricingAvailability({ formData, setFormData, next, back }) {
//   const [pricing, setPricing] = useState(formData.suggestedPricing || {});
//   const [availability, setAvailability] = useState(formData.availability || []);
//   const [dates, setDates] = useState({ from: "", to: "" });

//   const handlePricingChange = (type, value) => {
//     setPricing(prev => ({ ...prev, [type]: value }));
//   };

//   const addAvailability = () => {
//     if (dates.from && dates.to) {
//       setAvailability(prev => [...prev, { from: dates.from, to: dates.to }]);
//       setDates({ from: "", to: "" });
//     }
//   };

//   const handleNext = () => {
//     setFormData(prev => ({
//       ...prev,
//       suggestedPricing: pricing,
//       availability
//     }));
//     next();
//   };

//   return (
//     <div>
//       <div className="space-y-4">
//         <label className="font-semibold">Suggested Pricing (per branding type)</label>
//         {Object.keys(pricing).map((type, idx) => (
//           <div key={idx} className="flex items-center gap-2">
//             <span>{type}</span>
//             <input
//               type="number"
//               className="input"
//               value={pricing[type]}
//               onChange={e => handlePricingChange(type, e.target.value)}
//               placeholder="INR"
//             />
//           </div>
//         ))}
//         <button className="btn-secondary mt-2" onClick={() => handlePricingChange("Custom", "")}>Add Custom Pricing</button>
//         <label className="font-semibold mt-6">Availability (Add date ranges):</label>
//         <div className="flex gap-2">
//           <input type="date" value={dates.from} onChange={e => setDates(d => ({ ...d, from: e.target.value }))} />
//           <input type="date" value={dates.to} onChange={e => setDates(d => ({ ...d, to: e.target.value }))} />
//           <button className="btn-primary" onClick={addAvailability}>Add</button>
//         </div>
//         <ul className="mt-2">
//           {availability.map((a, i) => (
//             <li key={i} className="text-sm">{a.from} → {a.to}</li>
//           ))}
//         </ul>
//         <div className="mt-6">
//           <label className="block mb-1">Listing Type:</label>
//           <select
//             value={formData.listingType}
//             onChange={e => setFormData(prev => ({ ...prev, listingType: e.target.value }))}
//             className="input"
//           >
//             <option value="free">Free Listing</option>
//             <option value="premium">Premium Listing (featured, paid)</option>
//           </select>
//         </div>
//       </div>
//       <div className="flex justify-between mt-8">
//         <button className="btn-secondary" onClick={back}>Back</button>
//         <button className="btn-primary" onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Step5PricingAvailability({ formData, setFormData, next, back }) {
  const [calendarDates, setCalendarDates] = useState([new Date(), new Date()]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAvailability = (dates) => {
    setCalendarDates(dates);
    setFormData((prev) => ({
      ...prev,
      availability: [{ from: dates[0], to: dates[1] }],
    }));
  };

  const handleHeatMapChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue =
      type === 'checkbox' ? checked : type === 'file' ? URL.createObjectURL(files[0]) : value;

    setFormData((prev) => ({
      ...prev,
      heatMappingConsent: {
        ...prev.heatMappingConsent,
        [name]: fieldValue,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800">
          Step 5: Pricing & Availability
        </h2>

        {/* Suggested Price */}
        <div>
          <label className="block font-medium mb-1">Suggested Monthly Price (₹)</label>
          <input
            type="number"
            name="suggestedPrice"
            value={formData.suggestedPrice || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="e.g. 12000"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block font-medium mb-2">Availability (From - To)</label>
          <Calendar
            selectRange
            onChange={handleAvailability}
            value={calendarDates}
            className="rounded-xl border"
          />
        </div>

        {/* Heat Mapping Consent */}
        <div className="mt-6 space-y-3">
          <label className="block font-medium">Do you allow heat mapping consent?</label>
          <input
            type="checkbox"
            name="consentGiven"
            checked={formData.heatMappingConsent?.consentGiven || false}
            onChange={handleHeatMapChange}
            className="mr-2"
          />
          <label className="ml-2">Yes</label>

          {formData.heatMappingConsent?.consentGiven && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block font-medium mb-1">No. of Cameras Installed</label>
                <input
                  type="number"
                  name="cameraCount"
                  value={formData.heatMappingConsent?.cameraCount || ''}
                  onChange={handleHeatMapChange}
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Upload Heat Map Proof (image)</label>
                <input
                  type="file"
                  accept="image/*"
                  name="heatMapProof"
                  onChange={handleHeatMapChange}
                  className="w-full"
                />
                {formData.heatMappingConsent?.heatMapProof && (
                  <img
                    src={formData.heatMappingConsent.heatMapProof}
                    alt="heat proof"
                    className="w-40 h-28 object-cover mt-2 rounded-md shadow"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={back}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={next}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
