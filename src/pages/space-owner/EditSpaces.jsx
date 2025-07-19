// // // src/pages/space-owner/tabs/EditSpace.jsx
// // import { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axiosInstance from '../../../api/axiosInstance';

// // const EditSpace = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchSpace = async () => {
// //       try {
// //         const res = await axiosInstance.get(`/space-owner/my-spaces`);
// //         const space = res.data.find(s => s._id === id);
// //         setFormData(space);
// //       } catch (err) {
// //         console.error('Error fetching space:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchSpace();
// //   }, [id]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axiosInstance.put(`/space-owner/edit-space/${id}`, formData);
// //       alert('Space updated successfully');
// //       navigate('/dashboard');
// //     } catch (err) {
// //       console.error('Update failed', err);
// //       alert('Failed to update space');
// //     }
// //   };

// //   if (loading || !formData) return <div>Loading...</div>;

// //   return (
// //     <div>
// //       <h2 className="text-xl font-semibold mb-4">Edit Space</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label className="block font-medium">Space Name</label>
// //           <input
// //             type="text"
// //             name="spaceName"
// //             value={formData.spaceName || ''}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium">Description</label>
// //           <textarea
// //             name="description"
// //             value={formData.description || ''}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium">Space Type</label>
// //           <input
// //             type="text"
// //             name="spaceType"
// //             value={formData.spaceType || ''}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //         >
// //           Update Space
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditSpace;
// // src/pages/space-owner/tabs/EditSpace.jsx
// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../api/axiosInstance';

// const EditSpace = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSpace = async () => {
//       try {
//         const res = await axiosInstance.get(`/space-owner/my-spaces`);
//         const space = res.data.find(s => s._id === id);
//         setFormData(space);
//       } catch (err) {
//         console.error('Error fetching space:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSpace();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axiosInstance.put(`/space-owner/edit-space/${id}`, formData);
//       alert('Space updated successfully');
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Update failed', err);
//       alert('Failed to update space');
//     }
//   };

//   if (loading || !formData) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Edit Space</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Space Name</label>
//           <input type="text" name="spaceName" value={formData.spaceName || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Description</label>
//           <textarea name="description" value={formData.description || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Space Type</label>
//           <input type="text" name="spaceType" value={formData.spaceType || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Company Name</label>
//           <input type="text" name="companyName" value={formData.companyName || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Phone</label>
//           <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Email</label>
//           <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Peak Hours</label>
//           <input type="text" name="peakHours" value={formData.peakHours || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Target Audience</label>
//           <input type="text" name="targetAudience" value={formData.targetAudience || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">PAN Number</label>
//           <input type="text" name="panNumber" value={formData.panNumber || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div>
//           <label className="block font-medium">Referral Code</label>
//           <input type="text" name="referralCode" value={formData.referralCode || ''} onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>

//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Update Space
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditSpace;

// // src/pages/space-owner/tabs/EditSpace.jsx
// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../api/axiosInstance';

// const EditSpace = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSpace = async () => {
//       try {
//         const res = await axiosInstance.get(`/space-owner/my-spaces`);
//         const space = res.data.find(s => s._id === id);
//         setFormData(space);
//       } catch (err) {
//         console.error('Error fetching space:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSpace();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const keys = name.split('.');
//     if (keys.length > 1) {
//       setFormData(prev => ({
//         ...prev,
//         [keys[0]]: {
//           ...prev[keys[0]],
//           [keys[1]]: value
//         }
//       }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleImageChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData(prev => ({
//         ...prev,
//         images: {
//           ...prev.images,
//           [key]: reader.result
//         }
//       }));
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axiosInstance.put(`/space-owner/edit-space/${id}`, formData);
//       alert('Space updated successfully');
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Update failed', err);
//       alert('Failed to update space');
//     }
//   };

//   if (loading || !formData) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Edit Space</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Existing inputs... */}

//         <div>
//           <label className="block font-medium">Availability Dates (comma-separated)</label>
//           <input
//             type="text"
//             name="availability"
//             value={formData.availability?.map(date => `${date.from} to ${date.to}`).join(', ') || ''}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Branding Zones (JSON format)</label>
//           <textarea
//             name="brandingZones"
//             value={JSON.stringify(formData.brandingZones || [], null, 2)}
//             onChange={(e) => {
//               try {
//                 const parsed = JSON.parse(e.target.value);
//                 setFormData(prev => ({ ...prev, brandingZones: parsed }));
//               } catch {
//                 console.warn('Invalid JSON');
//               }
//             }}
//             className="w-full p-2 border rounded h-32"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Custom Branding Options</label>
//           <input
//             type="text"
//             name="customBrandingOptions"
//             value={formData.customBrandingOptions || ''}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Image Uploads with Preview */}
//         <div>
//           <label className="block font-medium">Front Facade Image</label>
//           {formData.images?.frontFacade && <img src={formData.images.frontFacade} alt="Front Facade" className="w-32 mb-2" />}
//           <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'frontFacade')} />
//         </div>

//         <div>
//           <label className="block font-medium">Interior View</label>
//           {formData.images?.interiorView && <img src={formData.images.interiorView} alt="Interior View" className="w-32 mb-2" />}
//           <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'interiorView')} />
//         </div>

//         <div>
//           <label className="block font-medium">Branding Zone Photo</label>
//           {formData.images?.brandingZone && <img src={formData.images.brandingZone} alt="Branding Zone" className="w-32 mb-2" />}
//           <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'brandingZone')} />
//         </div>

//         <div>
//           <label className="block font-medium">Heatmap Photo</label>
//           {formData.images?.heatMapPhoto && <img src={formData.images.heatMapPhoto} alt="Heat Map" className="w-32 mb-2" />}
//           <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'heatMapPhoto')} />
//         </div>

//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Update Space
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditSpace;
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';

const EditSpace = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get single space by ID
  useEffect(() => {
    const fetchSpace = async () => {
      try {
        // Better to fetch one space by ID
        const res = await axiosInstance.get(`/space-owner/get-space/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error('Error fetching space:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSpace();
  }, [id]);

  // Handle simple input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle nested objects (brandingZones, images, etc)
  const handleNestedChange = (e, objKey, index = null, innerKey = null) => {
    const value = e.target.value;
    setFormData(prev => {
      if (index !== null && innerKey) {
        // for brandingZones array fields
        const arr = [...prev[objKey]];
        arr[index][innerKey] = value;
        return { ...prev, [objKey]: arr };
      } else {
        // for images object
        return { ...prev, [objKey]: { ...prev[objKey], [e.target.name]: value } };
      }
    });
  };

  // Handle file upload, sets the actual File object
  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData(prev => ({
      ...prev,
      images: { ...prev.images, [key]: file },
      [`${key}Preview`]: URL.createObjectURL(file)
    }));
  };

  // Handle submit with FormData
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        // For image files
        Object.entries(value).forEach(([imgKey, imgVal]) => {
          // Only send File object, not string url
          if (imgVal instanceof File) form.append(imgKey, imgVal);
        });
      } else if (Array.isArray(value) || typeof value === 'object') {
        form.append(key, JSON.stringify(value));
      } else {
        form.append(key, value);
      }
    });

    try {
      await axiosInstance.put(`/space-owner/edit-space/${id}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Space updated successfully');
      navigate('/dashboard');
    } catch (err) {
      console.error('Update failed', err);
      alert('Failed to update space');
    }
  };

  if (loading || !formData) return <div>Loading...</div>;

  // For previewing images, support File or existing URL
  const getPreview = (key) =>
    formData[`${key}Preview`] || (formData.images && typeof formData.images[key] === 'string' ? formData.images[key] : null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Space</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium">Space Name</label>
          <input name="spaceName" value={formData.spaceName || ''} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea name="description" value={formData.description || ''} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Branding Zones: Show each and allow edit */}
        <div>
          <label className="block font-medium">Branding Zones</label>
          {formData.brandingZones?.map((zone, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input type="text" value={zone.type || ''} onChange={e => handleNestedChange(e, 'brandingZones', idx, 'type')} className="p-1 border rounded w-24" />
              <input type="number" value={zone.sizeSqFt || ''} onChange={e => handleNestedChange(e, 'brandingZones', idx, 'sizeSqFt')} className="p-1 border rounded w-24" />
              <input type="text" value={zone.photo || ''} onChange={e => handleNestedChange(e, 'brandingZones', idx, 'photo')} className="p-1 border rounded w-32" />
              <select value={zone.available ? 'true' : 'false'} onChange={e => handleNestedChange(e, 'brandingZones', idx, 'available')} className="p-1 border rounded w-16">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          ))}
        </div>

        {/* Images */}
        <div>
          <label className="block font-medium">Front Facade Image</label>
          {getPreview('frontFacade') && <img src={getPreview('frontFacade')} alt="Front Facade" className="w-32 mb-2" />}
          <input type="file" accept="image/*" onChange={e => handleImageChange(e, 'frontFacade')} />
        </div>
        <div>
          <label className="block font-medium">Interior View</label>
          {getPreview('interiorView') && <img src={getPreview('interiorView')} alt="Interior View" className="w-32 mb-2" />}
          <input type="file" accept="image/*" onChange={e => handleImageChange(e, 'interiorView')} />
        </div>
        <div>
          <label className="block font-medium">Branding Zone Photo</label>
          {getPreview('brandingZone') && <img src={getPreview('brandingZone')} alt="Branding Zone" className="w-32 mb-2" />}
          <input type="file" accept="image/*" onChange={e => handleImageChange(e, 'brandingZone')} />
        </div>
        <div>
          <label className="block font-medium">Heatmap Photo</label>
          {getPreview('heatMapPhoto') && <img src={getPreview('heatMapPhoto')} alt="Heat Map" className="w-32 mb-2" />}
          <input type="file" accept="image/*" onChange={e => handleImageChange(e, 'heatMapPhoto')} />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Update Space
        </button>
      </form>
    </div>
  );
};

export default EditSpace;
