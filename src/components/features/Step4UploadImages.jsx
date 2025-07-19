// // // export default function Step4UploadImages({ formData, setFormData, next, back }) {
// // //     const handleChange = (e) => {
// // //       setFormData(prev => ({
// // //         ...prev,
// // //         images: {
// // //           ...prev.images,
// // //           [e.target.name]: e.target.value
// // //         }
// // //       }));
// // //     };
// // //     // To integrate: plug in Cloudinary upload widget here and save URL to each field
// // //     return (
// // //       <div>
// // //         <div className="space-y-4">
// // //           <input type="text" name="frontFacade" className="input" placeholder="Front Facade Image URL*" value={formData.images?.frontFacade || ""} onChange={handleChange} />
// // //           <input type="text" name="interiorView" className="input" placeholder="Interior View Image URL" value={formData.images?.interiorView || ""} onChange={handleChange} />
// // //           <input type="text" name="brandingZone" className="input" placeholder="Branding Zone Image URL" value={formData.images?.brandingZone || ""} onChange={handleChange} />
// // //           <input type="text" name="heatMapPhoto" className="input" placeholder="Heat Mapping Photo URL" value={formData.images?.heatMapPhoto || ""} onChange={handleChange} />
// // //           <input type="text" name="otherPhotos" className="input" placeholder="Other Photos (comma separated URLs)" value={formData.images?.otherPhotos?.join(",") || ""} onChange={e => handleChange({ target: { name: "otherPhotos", value: e.target.value.split(",") } })} />
// // //         </div>
// // //         <div className="flex justify-between mt-8">
// // //           <button className="btn-secondary" onClick={back}>Back</button>
// // //           <button className="btn-primary" onClick={next}>Next</button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
  
// // import React, { useState } from 'react';

// // export default function Step4UploadImages({ formData, setFormData, next, back }) {
// //   const [uploadStatus, setUploadStatus] = useState({
// //     frontFacade: null,
// //     interiorView: null,
// //     brandingZone: null,
// //     heatMapPhoto: null,
// //     otherPhotos: [],
// //   });

// //   const handleImageUpload = async (field, file, index = null) => {
// //     setUploadStatus((prev) => ({
// //       ...prev,
// //       [field]: index !== null ? prev[field] : 'uploading',
// //     }));

// //     const reader = new FileReader();
// //     reader.onloadend = () => {
// //       if (field === 'otherPhotos') {
// //         const updated = [...(formData.images.otherPhotos || [])];
// //         updated[index] = reader.result;
// //         setFormData((prev) => ({
// //           ...prev,
// //           images: {
// //             ...prev.images,
// //             [field]: updated,
// //           },
// //         }));
// //         setUploadStatus((prev) => ({
// //           ...prev,
// //           [field]: [...(prev[field] || []), 'done'],
// //         }));
// //       } else {
// //         setFormData((prev) => ({
// //           ...prev,
// //           images: {
// //             ...prev.images,
// //             [field]: reader.result,
// //           },
// //         }));
// //         setUploadStatus((prev) => ({
// //           ...prev,
// //           [field]: 'done',
// //         }));
// //       }
// //     };
// //     reader.readAsDataURL(file);
// //   };

// //   const imageFields = [
// //     { name: 'frontFacade', label: 'Front Facade (Required)', required: true },
// //     { name: 'interiorView', label: 'Interior View' },
// //     { name: 'brandingZone', label: 'Branding Zone' },
// //     { name: 'heatMapPhoto', label: 'Heat Map Consent Photo' },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
// //       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
// //         <h2 className="text-3xl font-bold text-center text-purple-800">Step 4: Upload Images</h2>

// //         {/* Loop through single image uploads */}
// //         {imageFields.map(({ name, label, required }) => (
// //           <div key={name} className="space-y-2">
// //             <label className="block font-medium">{label}</label>
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={(e) => handleImageUpload(name, e.target.files[0])}
// //               className="w-full"
// //             />
// //             {uploadStatus[name] === 'uploading' && <p className="text-yellow-500">Uploading...</p>}
// //             {uploadStatus[name] === 'done' && (
// //               <img
// //                 src={formData.images?.[name]}
// //                 alt={name}
// //                 className="mt-2 w-48 h-32 object-cover rounded-lg shadow"
// //               />
// //             )}
// //           </div>
// //         ))}

// //         {/* Other Photos (Multiple Uploads) */}
// //         <div className="space-y-2">
// //           <label className="block font-medium">Other Photos (Optional, multiple)</label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             multiple
// //             onChange={(e) => {
// //               const files = Array.from(e.target.files);
// //               files.forEach((file, i) => handleImageUpload('otherPhotos', file, i));
// //             }}
// //             className="w-full"
// //           />
// //           <div className="flex flex-wrap gap-4 mt-3">
// //             {(formData.images?.otherPhotos || []).map((url, idx) => (
// //               <img
// //                 key={idx}
// //                 src={url}
// //                 alt={`Other ${idx}`}
// //                 className="w-32 h-24 object-cover rounded-lg border"
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Navigation Buttons */}
// //         <div className="flex justify-between mt-8">
// //           <button
// //             onClick={back}
// //             className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
// //           >
// //             Back
// //           </button>
// //           <button
// //             onClick={next}
// //             className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';

// export default function Step4UploadImages({ formData, setFormData, next, back }) {
//   const [uploadStatus, setUploadStatus] = useState({
//     frontFacade: null,
//     interiorView: null,
//     brandingZone: null,
//     heatMapPhoto: null,
//     otherPhotos: [],
//   });

//   const handleImageUpload = (field, file, index = null) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData(prev => {
//         let images = { ...prev.images };
//         // For otherPhotos (multi)
//         if (field === 'otherPhotos') {
//           // Keep arrays up-to-date
//           const previews = Array.isArray(images.otherPhotos) ? [...images.otherPhotos] : [];
//           const filesArr = Array.isArray(images.otherPhotosFiles) ? [...images.otherPhotosFiles] : [];
//           previews[index] = reader.result;
//           filesArr[index] = file;
//           images.otherPhotos = previews;
//           images.otherPhotosFiles = filesArr;
//         } else {
//           // For single fields, just set
//           images[field] = reader.result;
//           images[`${field}File`] = file;
//         }
//         return { ...prev, images };
//       });
//       setUploadStatus(prev => ({
//         ...prev,
//         [field]: field === 'otherPhotos'
//           ? [ ...(prev[field] || []), 'done']
//           : 'done',
//       }));
//     };
//     reader.readAsDataURL(file);
//   };
  

//   const imageFields = [
//     { name: 'frontFacade', label: 'Front Facade (Required)', required: true },
//     { name: 'interiorView', label: 'Interior View' },
//     { name: 'brandingZone', label: 'Branding Zone' },
//     { name: 'heatMapPhoto', label: 'Heat Map Consent Photo' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-center text-purple-800">Step 4: Upload Images</h2>

//         {/* Single image fields */}
//         {imageFields.map(({ name, label }) => (
//           <div key={name} className="space-y-2">
//             <label className="block font-medium">{label}</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleImageUpload(name, e.target.files[0])}
//               className="w-full"
//             />
//             {uploadStatus[name] === 'uploading' && <p className="text-yellow-500">Uploading...</p>}
//             {uploadStatus[name] === 'done' && (
//               <img
//                 src={formData.images?.[name]}
//                 alt={name}
//                 className="mt-2 w-48 h-32 object-cover rounded-lg shadow"
//               />
//             )}
//           </div>
//         ))}

//         {/* Multiple image field: otherPhotos */}
//         <div className="space-y-2">
//           <label className="block font-medium">Other Photos (Optional, multiple)</label>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={(e) => {
//               const files = Array.from(e.target.files);
//               files.forEach((file, i) => handleImageUpload('otherPhotos', file, i));
//             }}
//             className="w-full"
//           />
//           <div className="flex flex-wrap gap-4 mt-3">
//             {(formData.images?.otherPhotos || []).map((url, idx) => (
//               <img
//                 key={idx}
//                 src={url}
//                 alt={`Other ${idx}`}
//                 className="w-32 h-24 object-cover rounded-lg border"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-between mt-8">
//           <button
//             onClick={back}
//             className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
//           >
//             Back
//           </button>
//           <button
//             onClick={next}
//             className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';

// export default function Step4UploadImages({ formData, setFormData, next, back }) {
//   // Only for showing upload status on UI, not for storing files
//   const [uploadStatus, setUploadStatus] = useState({
//     frontFacade: null,
//     interiorView: null,
//     brandingZone: null,
//     heatMapPhoto: null,
//     otherPhotos: [],
//   });

//   // Helper to handle image file + preview (single/multiple both)
//   const handleImageUpload = (field, file, index = null) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData(prev => {
//         let images = { ...prev.images };

//         if (field === 'otherPhotos') {
//           // Other Photos (multiple)
//           const previews = Array.isArray(images.otherPhotos) ? [...images.otherPhotos] : [];
//           const filesArr = Array.isArray(images.otherPhotosFiles) ? [...images.otherPhotosFiles] : [];
//           previews[index] = reader.result;
//           filesArr[index] = file;
//           images.otherPhotos = previews;
//           images.otherPhotosFiles = filesArr;
//         } else {
//           // Single image fields
//           images[field] = reader.result;
//           images[`${field}File`] = file;
//         }
//         return { ...prev, images };
//       });
//       setUploadStatus(prev => ({
//         ...prev,
//         [field]: field === 'otherPhotos'
//           ? [ ...(prev[field] || []), 'done']
//           : 'done',
//       }));
//     };
//     if (file) reader.readAsDataURL(file);
//   };
//   console.log(formData.images.frontFacadeFile); // Should be a File object


//   const imageFields = [
//     { name: 'frontFacade', label: 'Front Facade (Required)', required: true },
//     { name: 'interiorView', label: 'Interior View' },
//     { name: 'brandingZone', label: 'Branding Zone' },
//     { name: 'heatMapPhoto', label: 'Heat Map Consent Photo' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-center text-purple-800">Step 4: Upload Images</h2>

//         {/* Single image fields */}
//         {imageFields.map(({ name, label, required }) => (
//           <div key={name} className="space-y-2">
//             <label className="block font-medium">{label}</label>
//             <input
//               type="file"
//               accept="image/*"
//               required={required}
//               onChange={(e) => handleImageUpload(name, e.target.files[0])}
//               className="w-full"
//             />
//             {uploadStatus[name] === 'uploading' && <p className="text-yellow-500">Uploading...</p>}
//             {formData.images?.[name] && (
//               <img
//                 src={formData.images[name]}
//                 alt={name}
//                 className="mt-2 w-48 h-32 object-cover rounded-lg shadow"
//               />
//             )}
//           </div>
//         ))}

//         {/* Multiple image field: otherPhotos */}
//         <div className="space-y-2">
//           <label className="block font-medium">Other Photos (Optional, multiple)</label>
//           // Image upload ke time:
// <input
//   type="file"
//   accept="image/*"
//   required
//   onChange={e => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData(prev => ({
//       ...prev,
//       images: {
//         ...prev.images,
//         frontFacade: URL.createObjectURL(file), // For preview
//         frontFacadeFile: file // For FormData
//       }
//     }));
//   }}
// />

//           <div className="flex flex-wrap gap-4 mt-3">
//             {(formData.images?.otherPhotos || []).map((url, idx) => (
//               <img
//                 key={idx}
//                 src={url}
//                 alt={`Other ${idx}`}
//                 className="w-32 h-24 object-cover rounded-lg border"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-between mt-8">
//           <button
//             type="button"
//             onClick={back}
//             className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
//           >
//             Back
//           </button>
//           <button
//             type="button"
//             onClick={next}
//             className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function Step4UploadImages({ formData, setFormData, next, back }) {
  const [uploadStatus, setUploadStatus] = useState({
    frontFacade: null,
    interiorView: null,
    brandingZone: null,
    heatMapPhoto: null,
    otherPhotos: [],
  });

  const handleImageUpload = (field, file, index = null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => {
        let images = { ...prev.images };
        if (field === 'otherPhotos') {
          // Other Photos (multi)
          const previews = Array.isArray(images.otherPhotos) ? [...images.otherPhotos] : [];
          const filesArr = Array.isArray(images.otherPhotosFiles) ? [...images.otherPhotosFiles] : [];
          previews[index] = reader.result;
          filesArr[index] = file;
          images.otherPhotos = previews;
          images.otherPhotosFiles = filesArr;
        } else {
          images[field] = reader.result; // Preview
          images[`${field}File`] = file; // File for FormData
        }
        return { ...prev, images };
      });
      setUploadStatus(prev => ({
        ...prev,
        [field]: field === 'otherPhotos'
          ? [ ...(prev[field] || []), 'done']
          : 'done',
      }));
    };
    reader.readAsDataURL(file); // For preview
  };

  const imageFields = [
    { name: 'frontFacade', label: 'Front Facade (Required)', required: true },
    { name: 'interiorView', label: 'Interior View' },
    { name: 'brandingZone', label: 'Branding Zone' },
    { name: 'heatMapPhoto', label: 'Heat Map Consent Photo' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800">Step 4: Upload Images</h2>

        {imageFields.map(({ name, label, required }) => (
          <div key={name} className="space-y-2">
            <label className="block font-medium">{label}</label>
            <input
              type="file"
              accept="image/*"
              required={required}
              onChange={e => handleImageUpload(name, e.target.files[0])}
              className="w-full"
            />
            {formData.images?.[name] && (
              <img
                src={formData.images[name]}
                alt={name}
                className="mt-2 w-48 h-32 object-cover rounded-lg shadow"
              />
            )}
          </div>
        ))}

        <div className="space-y-2">
          <label className="block font-medium">Other Photos (Optional, multiple)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={e => {
              const files = Array.from(e.target.files);
              files.forEach((file, i) => handleImageUpload('otherPhotos', file, i));
            }}
            className="w-full"
          />
          <div className="flex flex-wrap gap-4 mt-3">
            {(formData.images?.otherPhotos || []).map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Other ${idx}`}
                className="w-32 h-24 object-cover rounded-lg border"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button type="button" onClick={back} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400">
            Back
          </button>
          <button type="button" onClick={next} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
