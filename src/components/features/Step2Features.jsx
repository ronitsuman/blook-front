// // export default function Step2Features({ formData, setFormData, next, back }) {
// //     const handleChange = (e) => {
// //       setFormData((prev) => ({
// //         ...prev,
// //         [e.target.name]: e.target.value
// //       }));
// //     };
// //     const handleDemoChange = (e) => {
// //       setFormData((prev) => ({
// //         ...prev,
// //         demographics: {
// //           ...prev.demographics,
// //           [e.target.name]: e.target.value
// //         }
// //       }));
// //     };
// //     const handleFootfallChange = (e) => {
// //       setFormData((prev) => ({
// //         ...prev,
// //         footfall: {
// //           ...prev.footfall,
// //           [e.target.name]: e.target.value
// //         }
// //       }));
// //     };
  
// //     return (
// //       <div className="space-y-4">
// //         <input type="number" name="sizeSqFt" className="input" placeholder="Size (Sq.Ft)" value={formData.sizeSqFt || ""} onChange={handleChange} />
// //         <input type="text" name="spaceType" className="input" placeholder="Space Type (e.g. Mall, Society, Retail...)" value={formData.spaceType || ""} onChange={handleChange} />
// //         <div>
// //           <label className="font-semibold">Footfall</label>
// //           <div className="flex gap-3">
// //             <input type="number" name="weekday" className="input" placeholder="Weekday" value={formData.footfall?.weekday || ""} onChange={handleFootfallChange} />
// //             <input type="number" name="weekend" className="input" placeholder="Weekend" value={formData.footfall?.weekend || ""} onChange={handleFootfallChange} />
// //             <input type="number" name="monthly" className="input" placeholder="Monthly" value={formData.footfall?.monthly || ""} onChange={handleFootfallChange} />
// //           </div>
// //         </div>
// //         <div>
// //           <label className="font-semibold">Demographics</label>
// //           <div className="flex gap-3">
// //             <input type="text" name="ageGroups" className="input" placeholder="Age Groups (comma separated)" value={formData.demographics?.ageGroups || ""} onChange={handleDemoChange} />
// //             <input type="text" name="gender" className="input" placeholder="Gender" value={formData.demographics?.gender || ""} onChange={handleDemoChange} />
// //             <input type="text" name="incomeGroup" className="input" placeholder="Income Group" value={formData.demographics?.incomeGroup || ""} onChange={handleDemoChange} />
// //           </div>
// //         </div>
// //         <div className="flex justify-between mt-8">
// //           <button className="btn-secondary" onClick={back}>Back</button>
// //           <button className="btn-primary" onClick={next}>Next</button>
// //         </div>
// //       </div>
// //     );
// //   }
  


// import React from "react";

// export default function Step2Features({ formData, setFormData, next, back }) {
//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleDemoChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       demographics: {
//         ...prev.demographics,
//         [e.target.name]: e.target.value
//       }
//     }));
//   };

//   const handleFootfallChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       footfall: {
//         ...prev.footfall,
//         [e.target.name]: e.target.value
//       }
//     }));
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 p-6 rounded-xl shadow-lg space-y-6">
//       <h3 className="text-xl font-semibold text-gray-800">Space Features</h3>

//       <input
//         type="number"
//         name="sizeSqFt"
//         className="input w-full"
//         placeholder="Size (Sq.Ft)"
//         value={formData.sizeSqFt || ""}
//         onChange={handleChange}
//       />

//       <div>
//         <label className="block font-medium mb-1">Space Type</label>
//         <select
//           name="spaceType"
//           value={formData.spaceType || ""}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">Select Space Type</option>
//           <option value="Retail Spaces ">Retail Spaces / Shops / Showrooms</option>
//           <option value="Restaurants / Cafés / Food Outlets">Restaurants / Cafés / Food Outlets</option>
//           <option value="Residential Societies / RWAs">Residential Societies / RWAs</option>
//           <option value="Clinics / Hospitals">Clinics / Hospitals</option>
//           <option value="Multiplexes / Cinema Halls">Multiplexes / Cinema Halls</option>
//         </select>
//       </div>

//       <div>
//         <label className="font-semibold block mb-1">Footfall Estimates</label>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <input
//             type="number"
//             name="weekday"
//             className="input"
//             placeholder="Weekday"
//             value={formData.footfall?.weekday || ""}
//             onChange={handleFootfallChange}
//           />
//           <input
//             type="number"
//             name="weekend"
//             className="input"
//             placeholder="Weekend"
//             value={formData.footfall?.weekend || ""}
//             onChange={handleFootfallChange}
//           />
//           <input
//             type="number"
//             name="monthly"
//             className="input"
//             placeholder="Monthly"
//             value={formData.footfall?.monthly || ""}
//             onChange={handleFootfallChange}
//           />
//         </div>
//       </div>

//       <div>
//         <label className="font-semibold block mb-1">Audience Demographics</label>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <input
//             type="text"
//             name="ageGroups"
//             className="input"
//             placeholder="Age Groups (e.g. 18-24, 25-34)"
//             value={formData.demographics?.ageGroups || ""}
//             onChange={handleDemoChange}
//           />
//           <input
//             type="text"
//             name="gender"
//             className="input"
//             placeholder="Gender (Male/Female/Mixed)"
//             value={formData.demographics?.gender || ""}
//             onChange={handleDemoChange}
//           />
//           <input
//             type="text"
//             name="incomeGroup"
//             className="input"
//             placeholder="Income Group (e.g. Middle)"
//             value={formData.demographics?.incomeGroup || ""}
//             onChange={handleDemoChange}
//           />
//         </div>
//       </div>

//       <div className="flex justify-between pt-6">
//         <button className="btn-secondary" onClick={back}>
//           Back
//         </button>
//         <button className="btn-primary" onClick={next}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function Step2Features({ formData, setFormData, next, back }) {
  const handleFootfallChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      footfall: {
        ...prev.footfall,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleDemoChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      demographics: {
        ...prev.demographics,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800">Step 2: Space Features</h2>

        {/* Space Type Dropdown */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Space Type</label>
          <select
            name="spaceType"
            value={formData.spaceType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select a space type</option>
            <option value="Mall">Mall</option>
            <option value="Apartment">Apartment</option>
            <option value="Society Gate">Society Gate</option>
            <option value="Shop/Storefront">Shop/Storefront</option>
            <option value="Vehicle">Vehicle</option>
            <option value="Gym">Gym</option>
            <option value="Theatre">Theatre</option>
            <option value="Salon">Salon</option>
            <option value="Café">Café</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Footfall Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Weekday Footfall</label>
            <input
              type="number"
              name="weekday"
              value={formData.footfall?.weekday || ''}
              onChange={handleFootfallChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="e.g. 500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Weekend Footfall</label>
            <input
              type="number"
              name="weekend"
              value={formData.footfall?.weekend || ''}
              onChange={handleFootfallChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="e.g. 1200"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Monthly Footfall</label>
            <input
              type="number"
              name="monthly"
              value={formData.footfall?.monthly || ''}
              onChange={handleFootfallChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="e.g. 25000"
            />
          </div>
        </div>

        {/* Demographics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block mb-1 font-medium">Age Groups</label>
            <select
              name="ageGroups"
              value={formData.demographics?.ageGroups || ''}
              onChange={handleDemoChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select age group</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45+">45+</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              name="gender"
              value={formData.demographics?.gender || ''}
              onChange={handleDemoChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select gender</option>
              <option value="male">Mostly Male</option>
              <option value="female">Mostly Female</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Income Group</label>
            <select
              name="incomeGroup"
              value={formData.demographics?.incomeGroup || ''}
              onChange={handleDemoChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select income group</option>
              <option value="low">Low</option>
              <option value="middle">Middle</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {/* Navigation Buttons */}
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
