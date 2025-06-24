// import { useState } from "react";

// // Define your branding types by spaceType per docs
// const BRANDING_TYPES = {
//   Mall: ["Lift", "Facade", "Tabletop", "EntryGate"],
//   Society: ["MainGate", "NoticeBoard", "Lift", "Parking"],
//   Retail: ["ShopFront", "Counter", "POSM"],
//   // Add others...
// };

// export default function Step3BrandingOptions({ formData, setFormData, next, back }) {
//   const [brandingZones, setBrandingZones] = useState(formData.brandingZones || []);

//   const brandingTypeList = BRANDING_TYPES[formData.spaceType] || ["Custom"];

//   const addZone = () => setBrandingZones([...brandingZones, { type: "", available: true, sizeSqFt: "", photo: "", customName: "" }]);
//   const updateZone = (idx, field, value) => {
//     const zones = [...brandingZones];
//     zones[idx][field] = value;
//     setBrandingZones(zones);
//   };
//   const removeZone = (idx) => setBrandingZones(brandingZones.filter((_, i) => i !== idx));

//   const handleNext = () => {
//     setFormData((prev) => ({ ...prev, brandingZones }));
//     next();
//   };

//   return (
//     <div>
//       <div className="space-y-4">
//         {brandingZones.map((zone, idx) => (
//           <div key={idx} className="border rounded p-3 mb-2 bg-blue-50">
//             <select value={zone.type} className="input" onChange={e => updateZone(idx, "type", e.target.value)}>
//               <option value="">Select Branding Type</option>
//               {brandingTypeList.map((t) => <option key={t} value={t}>{t}</option>)}
//               <option value="Custom">Custom</option>
//             </select>
//             {zone.type === "Custom" && (
//               <input type="text" className="input" placeholder="Custom Name" value={zone.customName} onChange={e => updateZone(idx, "customName", e.target.value)} />
//             )}
//             <input type="number" className="input" placeholder="Size (Sq.Ft)" value={zone.sizeSqFt || ""} onChange={e => updateZone(idx, "sizeSqFt", e.target.value)} />
//             <input type="checkbox" checked={zone.available} onChange={e => updateZone(idx, "available", e.target.checked)} />
//             <span className="ml-2">Available</span>
//             {/* Simple image field; for full upload, plug in Cloudinary upload widget here */}
//             <input type="text" className="input" placeholder="Photo URL" value={zone.photo || ""} onChange={e => updateZone(idx, "photo", e.target.value)} />
//             <button className="btn-secondary mt-2" onClick={() => removeZone(idx)}>Remove</button>
//           </div>
//         ))}
//         <button className="btn-primary mt-4" onClick={addZone}>Add Branding Zone</button>
//       </div>
//       <div className="flex justify-between mt-8">
//         <button className="btn-secondary" onClick={back}>Back</button>
//         <button className="btn-primary" onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';

const brandingOptionsBySpaceType = {
  Mall: ["Hoardings", "Lift Branding", "Entry Gate Banner", "Digital Screen"],
  Apartment: ["Lift Branding", "Parking Area Ads", "Notice Board"],
  SocietyGate: ["Gate Banner", "Wall Branding"],
  Vehicle: ["Vehicle Wrap", "Back Glass Sticker"],
  Gym: ["Locker Room Ads", "Equipment Branding", "Digital Screen"],
  Theatre: ["Seat Backs", "Screen Ads", "Standees"],
  Salon: ["Mirror Stickers", "Waiting Area Frames"],
  Café: ["Table Top", "Wall Frame", "Counter Display"],
  Restaurant: ["Menu Branding", "Table Tent", "Restroom Posters"],
  Shop: ["Cash Counter Display", "Glass Sticker"],
  Others: ["Custom Branding"]
};

export default function Step3BrandingOptions({ formData, setFormData, next, back }) {
  const [brandingFields, setBrandingFields] = useState([]);

  useEffect(() => {
    const options = brandingOptionsBySpaceType[formData.spaceType] || [];
    setBrandingFields(
      options.map((type) => ({
        type,
        available: true,
        sizeSqFt: '',
        photo: ''
      }))
    );
  }, [formData.spaceType]);

  const handleFieldChange = (index, key, value) => {
    const updated = [...brandingFields];
    updated[index][key] = value;
    setBrandingFields(updated);
    setFormData((prev) => ({
      ...prev,
      brandingZones: updated
    }));
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleFieldChange(index, 'photo', reader.result); // You can later replace with Cloudinary logic
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800">Step 3: Branding Options</h2>

        {brandingFields.length === 0 ? (
          <p className="text-gray-600 text-center">Please select a space type first.</p>
        ) : (
          <div className="space-y-6">
            {brandingFields.map((field, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-lg space-y-3">
                <h3 className="text-xl font-semibold text-purple-700">{field.type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Available?</label>
                    <select
                      value={field.available ? 'yes' : 'no'}
                      onChange={(e) =>
                        handleFieldChange(index, 'available', e.target.value === 'yes')
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Size (sq ft)</label>
                    <input
                      type="number"
                      value={field.sizeSqFt}
                      onChange={(e) => handleFieldChange(index, 'sizeSqFt', e.target.value)}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="e.g. 10"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Upload Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e.target.files[0])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
