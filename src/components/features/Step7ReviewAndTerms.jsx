// // // // export default function Step7ReviewAndTerms({ formData, setFormData, back, onSubmit, submitting }) {
// // // //     const [agreed, setAgreed] = useState(false);
  
// // // //     const handleAgree = (e) => setAgreed(e.target.checked);
  
// // // //     return (
// // // //       <div>
// // // //         <h3 className="font-bold mb-4">Review Your Details</h3>
// // // //         <div className="bg-gray-50 rounded p-4 mb-6">
// // // //           <pre className="text-xs">{JSON.stringify(formData, null, 2)}</pre>
// // // //         </div>
// // // //         <label className="flex items-center gap-2 mb-4">
// // // //           <input type="checkbox" checked={agreed} onChange={handleAgree} />
// // // //           I agree to the <a href="/terms" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">terms and conditions</a>
// // // //         </label>
// // // //         <div className="flex justify-between mt-6">
// // // //           <button className="btn-secondary" onClick={back}>Back</button>
// // // //           <button className="btn-primary" onClick={onSubmit} disabled={!agreed || submitting}>
// // // //             {submitting ? "Submitting..." : "Submit"}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }
  

// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import axiosInstance from '../../api/axiosInstance'; // Your Axios wrapper
// // // // import toast from 'react-hot-toast';

// // // // export default function Step7ReviewAndSubmit({ formData, back }) {
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const handleSubmit = async () => {
// // // //     setLoading(true);

// // // //     try {
// // // //       // Format brandingZones: sizeSqFt = Number
// // // //       const brandingZones = (formData.brandingZones || []).map((zone) => ({
// // // //         ...zone,
// // // //         sizeSqFt: Number(zone.sizeSqFt || 0),
// // // //       }));

// // // //       const finalPayload = {
// // // //         spaceName: formData.spaceName,
// // // //         description: formData.description,
// // // //         spaceType: formData.spaceType,
// // // //         companyName: formData.companyName,
// // // //         fullName: formData.fullName,
// // // //         phone: formData.phone,
// // // //         email: formData.email,
// // // //         location: formData.location,
// // // //         availability: formData.availability || [],
// // // //         suggestedPrice: formData.suggestedPrice,
// // // //         footfall: formData.footfall,
// // // //         demographics: formData.demographics,
// // // //         brandingZones,
// // // //         images: formData.images,
// // // //         heatMappingConsent: {
// // // //           consentGiven: formData.heatMappingConsent?.consentGiven || false,
// // // //           cameraCount: Number(formData.heatMappingConsent?.cameraCount || 0),
// // // //           heatMapProof: formData.heatMappingConsent?.heatMapProof || '',
// // // //         },
// // // //         panNumber: formData.panNumber,
// // // //         authorizedToMonetize: formData.authorizedToMonetize || false,
// // // //         agreedToTerms: formData.agreedToTerms || false,
// // // //         listingType: formData.listingType,
// // // //         referralCode: formData.referralCode || '',
// // // //       };

// // // //       // Store in localStorage for Premium flow
// // // //       if (formData.listingType === 'premium') {
// // // //         localStorage.setItem('spaceListingData', JSON.stringify(finalPayload));
// // // //         setLoading(false);
// // // //         navigate('/payment-page');
// // // //       } else {
// // // //         // Directly POST to backend
// // // //         const res = await axiosInstance.post('/api/spaces/register', finalPayload);

// // // //         setLoading(false);
// // // //         toast.success('Space registered successfully!');
// // // //         navigate('/dashboard');
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       toast.error('Submission failed. Please try again.');
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
// // // //       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
// // // //         <h2 className="text-3xl font-bold text-center text-purple-800">Review & Submit</h2>

// // // //         <div className="space-y-4 text-sm md:text-base text-gray-700">
// // // //           <p><strong>Space Name:</strong> {formData.spaceName}</p>
// // // //           <p><strong>Company:</strong> {formData.companyName}</p>
// // // //           <p><strong>Space Type:</strong> {formData.spaceType}</p>
// // // //           <p><strong>Email:</strong> {formData.email}</p>
// // // //           <p><strong>Phone:</strong> {formData.phone}</p>
// // // //           <p><strong>Location:</strong> {formData.location?.address}</p>
// // // //           <p><strong>Description:</strong> {formData.description}</p>
// // // //           <p><strong>Footfall:</strong> {`Weekday: ${formData.footfall?.weekday}, Weekend: ${formData.footfall?.weekend}, Monthly: ${formData.footfall?.monthly}`}</p>
// // // //           <p><strong>Demographics:</strong> {`${formData.demographics?.ageGroups}, ${formData.demographics?.gender}, ${formData.demographics?.incomeGroup}`}</p>
// // // //           <p><strong>Suggested Price:</strong> ₹{formData.suggestedPrice || 'N/A'}</p>
// // // //           <p><strong>Availability:</strong> {formData.availability?.[0]?.from?.toString().slice(0, 10)} to {formData.availability?.[0]?.to?.toString().slice(0, 10)}</p>
// // // //           <p><strong>PAN Number:</strong> {formData.panNumber}</p>
// // // //           <p><strong>Listing Type:</strong> {formData.listingType}</p>
// // // //           {/* <P><Strong>Front{formdata.images}                 </Strong> </P> */}
// // // //         </div>

// // // //         <div className="flex justify-between mt-8">
// // // //           <button
// // // //             onClick={back}
// // // //             className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
// // // //           >
// // // //             Back
// // // //           </button>
// // // //           <button
// // // //             onClick={handleSubmit}
// // // //             disabled={loading}
// // // //             className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
// // // //           >
// // // //             {loading ? 'Submitting...' : formData.listingType === 'premium' ? 'Go to Payment' : 'Submit'}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import toast from 'react-hot-toast';
// // // import axiosInstance from '../../api/axiosInstance';

// // // export default function Step7ReviewAndSubmit({ formData, back }) {
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const prepareFormData = () => {
// // //     const form = new FormData();

// // //     // Add non-file fields
// // //     form.append("spaceName", formData.spaceName);
// // //     form.append("description", formData.description);
// // //     form.append("spaceType", formData.spaceType);
// // //     form.append("companyName", formData.companyName);
// // //     form.append("fullName", formData.fullName);
// // //     form.append("phone", formData.phone);
// // //     form.append("email", formData.email);
// // //     form.append("listingType", formData.listingType);
// // //     form.append("panNumber", formData.panNumber);
// // //     form.append("referralCode", formData.referralCode || "");
// // //     form.append("heatMappingConsent", formData.heatMappingConsent?.consentGiven || false);
// // //     form.append("cameraCount", formData.heatMappingConsent?.cameraCount || 0);

// // //     form.append("location", JSON.stringify(formData.location));
// // //     form.append("footfall", JSON.stringify(formData.footfall));
// // //     form.append("demographics", JSON.stringify(formData.demographics));
// // //     form.append("brandingZones", JSON.stringify(formData.brandingZones));
// // //     form.append("availability", JSON.stringify(formData.availability));
// // //     form.append("suggestedPricing", JSON.stringify(formData.suggestedPrice));
// // //     form.append("bankDetails", JSON.stringify(formData.bankDetails || {}));

// // //     // Add image files (actual File objects)
// // //     form.append('frontFacade', formData.images.frontFacadeFile);
// // // form.append('interiorView', formData.images.interiorViewFile);
// // //     // if (formData.images.interiorViewFile) form.append("interiorView", formData.images.interiorViewFile);
// // //     if (formData.images.brandingZoneFile) form.append("brandingZone", formData.images.brandingZoneFile);
// // //     if (formData.images.heatMapPhotoFile) form.append("heatMapPhoto", formData.images.heatMapPhotoFile);
// // //     (formData.images.otherPhotosFiles || []).forEach(file => {
// // //       form.append("otherPhotos", file);
// // //     });

// // //     return form;
// // //   };

// //   // const handleSubmit = async () => {
// //   //   setLoading(true);
// //   //   try {
// //   //     if (formData.listingType === 'premium') {
// //   //       const raw = prepareFormData();
// //   //       localStorage.setItem("spaceListingForm", JSON.stringify(Object.fromEntries(raw)));
// //   //       localStorage.setItem("spaceFiles", JSON.stringify({
// //   //         frontFacade: formData.images.frontFacadeFile?.name,
// //   //       }));
// //   //       // Instead of files, store raw again for reprocessing in payment page
// //   //       setLoading(false);
// //   //       navigate("/payment-page");
// //   //     } else {
// //   //       const payload = prepareFormData();
// //   //       const token = localStorage.getItem('token');

// //   //       const res = await axiosInstance.post('/api/spaces/register', {
// //   //         method: "POST",
// //   //         headers: {
// //   //           Authorization: `Bearer ${token}`
// //   //         },
// //   //         body: payload
// //   //       });

// //   //       if (res.ok) {
// //   //         toast.success("Space registered successfully!");
// //   //         navigate("/dashboard");
// //   //       } else {
// //   //         toast.error("Failed to register space.");
// //   //       }

// //   //       setLoading(false);
// //   //     }
// //   //   } catch (err) {
// //   //     console.error(err);
// //   //     toast.error("Something went wrong.");
// //   //     setLoading(false);
// //   //   }
// //   // };

// //   // const handleSubmit = async () => {
// //   //   setLoading(true);
// //   //   try {
// //   //     const form = prepareFormData();  // tumhara FormData builder
// //   //     const token = localStorage.getItem('token');
// //   //     const config = {
// //   //       headers: {
// //   //         Authorization: `Bearer ${token}`,
// //   //         // 'Content-Type': 'multipart/form-data'
// //   //       }
// //   //     };
  
// //   //     const res = await axiosInstance.post(
// //   //       '/spaces/register',
// //   //       form,
// //   //       config
// //   //     );
  
// //   //     toast.success("Space registered successfully!");
// //   //     navigate("/dashboard");
// //   //   } catch (err) {
// //   //     console.error("Register error:", err.response?.data || err.message);
// //   //     toast.error("Failed to register space.");
// //   //   } finally {
// //   //     setLoading(false);
// //   //   }
// //   // };
// //   // inside ReviewAndSubmit.jsx

// //   import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import toast from 'react-hot-toast';
// // import axiosInstance from '../../api/axiosInstance';

// // export default function Step7ReviewAndSubmit({ formData, back, setShowSuccess, setStep }) {
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Prepare FormData (with files) for backend
// //   const prepareFormData = () => {
// //     const form = new FormData();
// //     form.append("spaceName", formData.spaceName);
// //     form.append("description", formData.description);
// //     form.append("spaceType", formData.spaceType);
// //     form.append("companyName", formData.companyName);
// //     form.append("fullName", formData.fullName);
// //     form.append("phone", formData.phone);
// //     form.append("email", formData.email);
// //     form.append("listingType", formData.listingType);
// //     form.append("panNumber", formData.panNumber);
// //     form.append("referralCode", formData.referralCode || "");
// //     form.append("heatMappingConsent", JSON.stringify(formData.heatMappingConsent || {}));
// //     form.append("location", JSON.stringify(formData.location || {}));
// //     form.append("footfall", JSON.stringify(formData.footfall || {}));
// //     form.append("demographics", JSON.stringify(formData.demographics || {}));
// //     form.append("brandingZones", JSON.stringify(formData.brandingZones || []));
// //     form.append("availability", JSON.stringify(formData.availability || []));
// //     form.append("suggestedPricing", JSON.stringify(formData.suggestedPricing || {}));
// //     form.append("bankDetails", JSON.stringify(formData.bankDetails || {}));
// //     // Add image files
// //     if (formData.images.frontFacadeFile) form.append('frontFacade', formData.images.frontFacadeFile);
// //     if (formData.images.interiorViewFile) form.append('interiorView', formData.images.interiorViewFile);
// //     if (formData.images.brandingZoneFile) form.append('brandingZone', formData.images.brandingZoneFile);
// //     if (formData.images.heatMapPhotoFile) form.append('heatMapPhoto', formData.images.heatMapPhotoFile);
// //     (formData.images.otherPhotosFiles || []).forEach(file => {
// //       form.append("otherPhotos", file);
// //     });
// //     return form;
// //   };

// //   // Razorpay Integration for Premium
// //   const handleRazorpay = async () => {
// //     setLoading(true);
// //     try {
// //       // Backend: create Razorpay order
// //       const orderRes = await axiosInstance.post('/payment/create-order', {
// //         amount: 1800 * 100, currency: 'INR'
// //       });
// //       const orderId = orderRes.data.id;

// //       const options = {
// //         key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay LIVE/TEST key
// //         amount: 1800 * 100,
// //         currency: "INR",
// //         name: "BlookMySpace",
// //         description: "Premium Space Listing (1 year)",
// //         order_id: orderId,
// //         handler: async function (response) {
// //           try {
// //             const payload = prepareFormData();
// //             const token = localStorage.getItem('token');
// //             payload.append("razorpayPaymentId", response.razorpay_payment_id);
// //             payload.append("razorpayOrderId", response.razorpay_order_id);
// //             payload.append("razorpaySignature", response.razorpay_signature);

// //             await axiosInstance.post('/spaces/register', payload, {
// //               headers: { Authorization: `Bearer ${token}` },
// //             });
// //             toast.success("Space registered successfully!");
// //             setShowSuccess(true);
// //             setStep(9);
// //           } catch (err) {
// //             toast.error("Submission failed after payment.");
// //           } finally {
// //             setLoading(false);
// //           }
// //         },
// //         prefill: {
// //           name: formData.fullName,
// //           email: formData.email,
// //           contact: formData.phone
// //         },
// //         theme: { color: "#7C3AED" }
// //       };

// //       const rzp = new window.Razorpay(options);
// //       rzp.open();
// //     } catch (err) {
// //       toast.error("Could not initiate payment. Try again.");
// //       setLoading(false);
// //     }
// //   };

// //   // Submit Handler (basic & premium)
// //   const handleSubmit = async () => {
// //     if (formData.listingType === "premium") {
// //       handleRazorpay();
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       const payload = prepareFormData();
// //       const token = localStorage.getItem('token');
// //       await axiosInstance.post('/spaces/register', payload, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
// //       toast.success("Space registered successfully!");
// //       setShowSuccess(true);
// //       setStep(9);
// //     } catch (err) {
// //       toast.error("Submission failed.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // UI: Listing type strip
// //   const renderListingTypeCard = () => (
// //     <div className="flex gap-4 mb-6">
// //       <div
// //         className={`flex-1 p-4 rounded-xl border ${formData.listingType === "basic" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
// //       >
// //         <h4 className="font-bold text-blue-700 mb-1">Basic Listing</h4>
// //         <p className="text-xs text-gray-700">Free, visible after approval, not featured.</p>
// //       </div>
// //       <div
// //         className={`flex-1 p-4 rounded-xl border ${formData.listingType === "premium" ? "border-purple-700 bg-purple-50" : "border-gray-300"}`}
// //       >
// //         <h4 className="font-bold text-purple-700 mb-1">Premium Listing</h4>
// //         <p className="text-xs text-purple-700">₹1800/year, featured homepage badge, top search results.</p>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="p-8 bg-white rounded-xl shadow max-w-2xl mx-auto">
// //       <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
// //       {/* Listing type highlight */}
// //       {renderListingTypeCard()}
// //       {/* Summary */}
// //       <div className="space-y-4 text-sm md:text-base text-gray-700">
// //         <p><strong>Space Name:</strong> {formData.spaceName}</p>
// //         <p><strong>Company:</strong> {formData.companyName}</p>
// //         <p><strong>Space Type:</strong> {formData.spaceType}</p>
// //         <p><strong>Email:</strong> {formData.email}</p>
// //         <p><strong>Phone:</strong> {formData.phone}</p>
// //         <p><strong>Location:</strong> {formData.location?.address}</p>
// //         <p><strong>Description:</strong> {formData.description}</p>
// //         <p><strong>Footfall:</strong> {`Weekday: ${formData.footfall?.weekday}, Weekend: ${formData.footfall?.weekend}, Monthly: ${formData.footfall?.monthly}`}</p>
// //         <p><strong>Demographics:</strong> {`${formData.demographics?.ageGroups}, ${formData.demographics?.gender}, ${formData.demographics?.incomeGroup}`}</p>
// //         <p><strong>Suggested Price:</strong> ₹{formData.suggestedPricing?.monthly || 'N/A'}</p>
// //         <p><strong>Availability:</strong> {formData.availability?.[0]?.from?.toString().slice(0, 10)} to {formData.availability?.[0]?.to?.toString().slice(0, 10)}</p>
// //         <p><strong>PAN Number:</strong> {formData.panNumber}</p>
// //         <p><strong>Listing Type:</strong> <span className={formData.listingType === "premium" ? "text-purple-700 font-semibold" : "text-blue-700 font-semibold"}>{formData.listingType.toUpperCase()}</span></p>
// //       </div>
// //       <div className="flex justify-between mt-6">
// //         <button onClick={back} className="btn">Back</button>
// //         <button onClick={handleSubmit} className="btn-primary" disabled={loading}>
// //           {loading
// //             ? "Submitting..."
// //             : formData.listingType === "premium"
// //               ? "Pay ₹1800 & Submit"
// //               : "Submit"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import toast from 'react-hot-toast';
// // import axiosInstance from '../../api/axiosInstance';

// // export default function Step7ReviewAndSubmit({ formData, back, setShowSuccess, setStep }) {
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Prepare FormData (with files) for backend
// //   const prepareFormData = () => {
// //     const form = new FormData();
// //     form.append("spaceName", formData.spaceName);
// //     form.append("description", formData.description);
// //     form.append("spaceType", formData.spaceType);
// //     form.append("companyName", formData.companyName);
// //     form.append("fullName", formData.fullName);
// //     form.append("phone", formData.phone);
// //     form.append("email", formData.email);
// //     form.append("listingType", formData.listingType);
// //     form.append("panNumber", formData.panNumber);
// //     form.append("referralCode", formData.referralCode || "");
// //     form.append("heatMappingConsent", JSON.stringify(formData.heatMappingConsent || {}));
// //     form.append("location", JSON.stringify(formData.location || {}));
// //     form.append("footfall", JSON.stringify(formData.footfall || {}));
// //     form.append("demographics", JSON.stringify(formData.demographics || {}));
// //     form.append("brandingZones", JSON.stringify(formData.brandingZones || []));
// //     form.append("availability", JSON.stringify(formData.availability || []));
// //     form.append("suggestedPricing", JSON.stringify(formData.suggestedPricing || {}));
// //     form.append("bankDetails", JSON.stringify(formData.bankDetails || {}));
// //     // Add image files
// //     if (formData.images.frontFacadeFile) form.append('frontFacade', formData.images.frontFacadeFile);
// //     if (formData.images.interiorViewFile) form.append('interiorView', formData.images.interiorViewFile);
// //     if (formData.images.brandingZoneFile) form.append('brandingZone', formData.images.brandingZoneFile);
// //     if (formData.images.heatMapPhotoFile) form.append('heatMapPhoto', formData.images.heatMapPhotoFile);
// //     (formData.images.otherPhotosFiles || []).forEach(file => {
// //       form.append("otherPhotos", file);
// //     });
// //     return form;
// //   };

// //   // Razorpay Integration for Premium
// //   const handleRazorpay = async () => {
// //     setLoading(true);
// //     try {
// //       // Backend: create Razorpay order
// //       const orderRes = await axiosInstance.post('/payment/create-order', {
// //         amount: 1800 * 100, currency: 'INR'
// //       });
// //       const orderId = orderRes.data.id;

// //       const options = {
// //         key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay LIVE/TEST key
// //         amount: 1800 * 100,
// //         currency: "INR",
// //         name: "BlookMySpace",
// //         description: "Premium Space Listing (1 year)",
// //         order_id: orderId,
// //         handler: async function (response) {
// //           try {
// //             const payload = prepareFormData();
// //             const token = localStorage.getItem('token');
// //             payload.append("razorpayPaymentId", response.razorpay_payment_id);
// //             payload.append("razorpayOrderId", response.razorpay_order_id);
// //             payload.append("razorpaySignature", response.razorpay_signature);

// //             await axiosInstance.post('/spaces/register', payload, {
// //               headers: { Authorization: `Bearer ${token}` },
// //             });
// //             toast.success("Space registered successfully!");
// //             setShowSuccess(true);
// //             setStep(9);
// //           } catch (err) {
// //             toast.error("Submission failed after payment.");
// //           } finally {
// //             setLoading(false);
// //           }
// //         },
// //         prefill: {
// //           name: formData.fullName,
// //           email: formData.email,
// //           contact: formData.phone
// //         },
// //         theme: { color: "#7C3AED" }
// //       };

// //       const rzp = new window.Razorpay(options);
// //       rzp.open();
// //     } catch (err) {
// //       toast.error("Could not initiate payment. Try again.");
// //       setLoading(false);
// //     }
// //   };

// //   // Submit Handler (basic & premium)
// //   const handleSubmit = async () => {
// //     if (formData.listingType === "premium") {
// //       handleRazorpay();
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       const payload = prepareFormData();
// //       const token = localStorage.getItem('token');
// //       await axiosInstance.post('/spaces/register', payload, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
// //       toast.success("Space registered successfully!");
// //       setShowSuccess(true);
// //       setStep(9);
// //     } catch (err) {
// //       toast.error("Submission failed.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Listing Type Card
// //   const renderListingTypeCard = () => (
// //     <div className="flex gap-4 mb-6">
// //       <div
// //         className={`flex-1 p-4 rounded-xl border ${formData.listingType === "basic" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
// //       >
// //         <h4 className="font-bold text-blue-700 mb-1">Basic Listing</h4>
// //         <p className="text-xs text-gray-700">Free, visible after approval, not featured.</p>
// //       </div>
// //       <div
// //         className={`flex-1 p-4 rounded-xl border ${formData.listingType === "premium" ? "border-purple-700 bg-purple-50" : "border-gray-300"}`}
// //       >
// //         <h4 className="font-bold text-purple-700 mb-1">Premium Listing</h4>
// //         <p className="text-xs text-purple-700">₹1800/year, featured homepage badge, top search results.</p>
// //       </div>
// //     </div>
// //   );

// //   // Images Preview Section
// //   const renderImagesPreview = () => (
// //     <div className="mt-6">
// //       <h3 className="font-bold text-gray-800 mb-2">Uploaded Images</h3>
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //         {formData.images.frontFacade && (
// //           <div>
// //             <p className="text-xs text-gray-600">Front Facade</p>
// //             <img src={formData.images.frontFacade} alt="Front Facade" className="w-full h-24 object-cover rounded-lg shadow" />
// //           </div>
// //         )}
// //         {formData.images.interiorView && (
// //           <div>
// //             <p className="text-xs text-gray-600">Interior View</p>
// //             <img src={formData.images.interiorView} alt="Interior" className="w-full h-24 object-cover rounded-lg shadow" />
// //           </div>
// //         )}
// //         {formData.images.brandingZone && (
// //           <div>
// //             <p className="text-xs text-gray-600">Branding Zone</p>
// //             <img src={formData.images.brandingZone} alt="Branding" className="w-full h-24 object-cover rounded-lg shadow" />
// //           </div>
// //         )}
// //         {formData.images.heatMapPhoto && (
// //           <div>
// //             <p className="text-xs text-gray-600">Heat Map Photo</p>
// //             <img src={formData.images.heatMapPhoto} alt="Heat Map" className="w-full h-24 object-cover rounded-lg shadow" />
// //           </div>
// //         )}
// //         {Array.isArray(formData.images.otherPhotos) && formData.images.otherPhotos.length > 0 && (
// //           formData.images.otherPhotos.map((url, idx) => (
// //             <div key={idx}>
// //               <p className="text-xs text-gray-600">Other Photo {idx + 1}</p>
// //               <img src={url} alt={`Other ${idx}`} className="w-full h-24 object-cover rounded-lg shadow" />
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="p-8 bg-white rounded-xl shadow max-w-2xl mx-auto">
// //       <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
// //       {renderListingTypeCard()}
// //       <div className="space-y-4 text-sm md:text-base text-gray-700">
// //         <p><strong>Space Name:</strong> {formData.spaceName}</p>
// //         <p><strong>Company:</strong> {formData.companyName}</p>
// //         <p><strong>Space Type:</strong> {formData.spaceType}</p>
// //         <p><strong>Email:</strong> {formData.email}</p>
// //         <p><strong>Phone:</strong> {formData.phone}</p>
// //         <p><strong>Location:</strong> {formData.location?.address}</p>
// //         <p><strong>Description:</strong> {formData.description}</p>
// //         <p><strong>Footfall:</strong> {`Weekday: ${formData.footfall?.weekday}, Weekend: ${formData.footfall?.weekend}, Monthly: ${formData.footfall?.monthly}`}</p>
// //         <p><strong>Demographics:</strong> {`${formData.demographics?.ageGroups}, ${formData.demographics?.gender}, ${formData.demographics?.incomeGroup}`}</p>
// //         <p><strong>Suggested Price:</strong> ₹{formData.suggestedPricing?.monthly || 'N/A'}</p>
// //         <p><strong>Availability:</strong> {formData.availability?.[0]?.from?.toString().slice(0, 10)} to {formData.availability?.[0]?.to?.toString().slice(0, 10)}</p>
// //         <p><strong>PAN Number:</strong> {formData.panNumber}</p>
// //         <p><strong>Listing Type:</strong> <span className={formData.listingType === "premium" ? "text-purple-700 font-semibold" : "text-blue-700 font-semibold"}>{formData.listingType.toUpperCase()}</span></p>
// //       </div>

// //       {/* Images Preview */}
// //       {renderImagesPreview()}

// //       <div className="flex justify-between mt-6">
// //         <button onClick={back} className="btn">Back</button>
// //         <button onClick={handleSubmit} className="btn-primary" disabled={loading}>
// //           {loading
// //             ? "Submitting..."
// //             : formData.listingType === "premium"
// //               ? "Pay ₹1800 & Submit"
// //               : "Submit"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import axiosInstance from '../../api/axiosInstance';

// export default function Step7ReviewAndSubmit({ formData, back, setShowSuccess, setStep }) {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Prepare FormData (with files) for backend
//   const prepareFormData = () => {
//     const form = new FormData();
//     form.append("spaceName", formData.spaceName);
//     form.append("description", formData.description);
//     form.append("spaceType", formData.spaceType);
//     form.append("companyName", formData.companyName);
//     form.append("fullName", formData.fullName);
//     form.append("phone", formData.phone);
//     form.append("email", formData.email);
//     form.append("listingType", formData.listingType);
//     form.append("panNumber", formData.panNumber);
//     form.append("referralCode", formData.referralCode || "");
//     form.append("heatMappingConsent", JSON.stringify(formData.heatMappingConsent || {}));
//     form.append("location", JSON.stringify(formData.location || {}));
//     form.append("footfall", JSON.stringify(formData.footfall || {}));
//     form.append("demographics", JSON.stringify(formData.demographics || {}));
//     form.append("brandingZones", JSON.stringify(formData.brandingZones || []));
//     form.append("availability", JSON.stringify(formData.availability || []));
//     form.append("suggestedPricing", JSON.stringify(formData.suggestedPricing || {}));
//     form.append("bankDetails", JSON.stringify(formData.bankDetails || {}));
//     // Add image files
//     if (formData.images.frontFacadeFile) form.append('frontFacade', formData.images.frontFacadeFile);
//     if (formData.images.interiorViewFile) form.append('interiorView', formData.images.interiorViewFile);
//     if (formData.images.brandingZoneFile) form.append('brandingZone', formData.images.brandingZoneFile);
//     if (formData.images.heatMapPhotoFile) form.append('heatMapPhoto', formData.images.heatMapPhotoFile);
//     (formData.images.otherPhotosFiles || []).forEach(file => {
//       form.append("otherPhotos", file);
//     });
//     return form;
    
//   };
//   console.log(formData.images.frontFacadeFile) 
//   // Razorpay Integration for Premium
//   const handleRazorpay = async () => {
//     setLoading(true);
//     try {
//       // Backend: create Razorpay order
//       const orderRes = await axiosInstance.post('/payment/create-order', {
//         amount: 1800 * 100, currency: 'INR'
//       });
//       const orderId = orderRes.data.id;

//       const options = {
//         key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay LIVE/TEST key
//         amount: 1800 * 100,
//         currency: "INR",
//         name: "BlookMySpace",
//         description: "Premium Space Listing (1 year)",
//         order_id: orderId,
//         handler: async function (response) {
//           try {
//             const payload = prepareFormData();
//             const token = localStorage.getItem('token');
//             payload.append("razorpayPaymentId", response.razorpay_payment_id);
//             payload.append("razorpayOrderId", response.razorpay_order_id);
//             payload.append("razorpaySignature", response.razorpay_signature);

//             await axiosInstance.post('/spaces/register', payload, {
//               headers: { Authorization: `Bearer ${token}` },
//             });
//             toast.success("Space registered successfully!");
//             setShowSuccess(true);
//             setStep(9);
//           } catch (err) {
//             toast.error("Submission failed after payment.");
//           } finally {
//             setLoading(false);
//           }
//         },
//         prefill: {
//           name: formData.fullName,
//           email: formData.email,
//           contact: formData.phone
//         },
//         theme: { color: "#7C3AED" }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       toast.error("Could not initiate payment. Try again.");
//       setLoading(false);
//     }
//   };

//   // Submit Handler (basic & premium)
//   const handleSubmit = async () => {
//     if (formData.listingType === "premium") {
//       handleRazorpay();
//       return;
//     }
//     setLoading(true);
//     try {
//       const payload = prepareFormData();
//       const token = localStorage.getItem('token');
//       await axiosInstance.post('/spaces/register', payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       toast.success("Space registered successfully!");
//       setShowSuccess(true);
//       setStep(9);
//     } catch (err) {
//       toast.error("Submission failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Listing Type Card
//   const renderListingTypeCard = () => (
//     <div className="flex gap-4 mb-6">
//       <div
//         className={`flex-1 p-4 rounded-xl border ${formData.listingType === "basic" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
//       >
//         <h4 className="font-bold text-blue-700 mb-1">Basic Listing</h4>
//         <p className="text-xs text-gray-700">Free, visible after approval, not featured.</p>
//       </div>
//       <div
//         className={`flex-1 p-4 rounded-xl border ${formData.listingType === "premium" ? "border-purple-700 bg-purple-50" : "border-gray-300"}`}
//       >
//         <h4 className="font-bold text-purple-700 mb-1">Premium Listing</h4>
//         <p className="text-xs text-purple-700">₹1800/year, featured homepage badge, top search results.</p>
//       </div>
//     </div>
//   );

//   // Images Preview Section
//   const renderImagesPreview = () => (
//     <div className="mt-6">
//       <h3 className="font-bold text-gray-800 mb-2">Uploaded Images</h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {formData.images.frontFacade && (
//           <div>
//             <p className="text-xs text-gray-600">Front Facade</p>
//             <img src={formData.images.frontFacade} alt="Front Facade" className="w-full h-24 object-cover rounded-lg shadow" />
//           </div>
//         )}
//         {formData.images.interiorView && (
//           <div>
//             <p className="text-xs text-gray-600">Interior View</p>
//             <img src={formData.images.interiorView} alt="Interior" className="w-full h-24 object-cover rounded-lg shadow" />
//           </div>
//         )}
//         {formData.images.brandingZone && (
//           <div>
//             <p className="text-xs text-gray-600">Branding Zone</p>
//             <img src={formData.images.brandingZone} alt="Branding" className="w-full h-24 object-cover rounded-lg shadow" />
//           </div>
//         )}
//         {formData.images.heatMapPhoto && (
//           <div>
//             <p className="text-xs text-gray-600">Heat Map Photo</p>
//             <img src={formData.images.heatMapPhoto} alt="Heat Map" className="w-full h-24 object-cover rounded-lg shadow" />
//           </div>
//         )}
//         {Array.isArray(formData.images.otherPhotos) && formData.images.otherPhotos.length > 0 && (
//           formData.images.otherPhotos.map((url, idx) => (
//             <div key={idx}>
//               <p className="text-xs text-gray-600">Other Photo {idx + 1}</p>
//               <img src={url} alt={`Other ${idx}`} className="w-full h-24 object-cover rounded-lg shadow" />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-8 bg-white rounded-xl shadow max-w-2xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
//       {renderListingTypeCard()}
//       <div className="space-y-4 text-sm md:text-base text-gray-700">
//         <p><strong>Space Name:</strong> {formData.spaceName}</p>
//         <p><strong>Company:</strong> {formData.companyName}</p>
//         <p><strong>Space Type:</strong> {formData.spaceType}</p>
//         <p><strong>Email:</strong> {formData.email}</p>
//         <p><strong>Phone:</strong> {formData.phone}</p>
//         <p><strong>Location:</strong> {formData.location?.address}</p>
//         <p><strong>Description:</strong> {formData.description}</p>
//         <p><strong>Footfall:</strong> {`Weekday: ${formData.footfall?.weekday}, Weekend: ${formData.footfall?.weekend}, Monthly: ${formData.footfall?.monthly}`}</p>
//         <p><strong>Demographics:</strong> {`${formData.demographics?.ageGroups}, ${formData.demographics?.gender}, ${formData.demographics?.incomeGroup}`}</p>
//         <p><strong>Suggested Price:</strong> ₹{formData.suggestedPricing?.monthly || 'N/A'}</p>
//         <p><strong>Availability:</strong> {formData.availability?.[0]?.from?.toString().slice(0, 10)} to {formData.availability?.[0]?.to?.toString().slice(0, 10)}</p>
//         <p><strong>PAN Number:</strong> {formData.panNumber}</p>
//         <p><strong>Listing Type:</strong> <span className={formData.listingType === "premium" ? "text-purple-700 font-semibold" : "text-blue-700 font-semibold"}>{formData.listingType.toUpperCase()}</span></p>
//       </div>

//       {/* Images Preview */}
//       {renderImagesPreview()}

//       <div className="flex justify-between mt-6">
//         <button onClick={back} className="btn">Back</button>
//         <button onClick={handleSubmit} className="btn-primary" disabled={loading}>
//           {loading
//             ? "Submitting..."
//             : formData.listingType === "premium"
//               ? "Pay ₹1800 & Submit"
//               : "Submit"}
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../../api/axiosInstance';

export default function Step7ReviewAndSubmit({ formData, back, setShowSuccess, setStep }) {
  const [loading, setLoading] = useState(false);

  // Prepare FormData (with files)
  const prepareFormData = () => {
    const form = new FormData();
    form.append("spaceName", formData.spaceName);
    form.append("description", formData.description);
    form.append("spaceType", formData.spaceType);
    form.append("companyName", formData.companyName);
    form.append("fullName", formData.fullName);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("listingType", formData.listingType);
    form.append("panNumber", formData.panNumber);
    form.append("referralCode", formData.referralCode || "");
    form.append("heatMappingConsent", JSON.stringify(formData.heatMappingConsent || {}));
    form.append("location", JSON.stringify(formData.location || {}));
    form.append("footfall", JSON.stringify(formData.footfall || {}));
    form.append("demographics", JSON.stringify(formData.demographics || {}));
    form.append("brandingZones", JSON.stringify(formData.brandingZones || []));
    form.append("availability", JSON.stringify(formData.availability || []));
    form.append("suggestedPricing", JSON.stringify(formData.suggestedPricing || {}));
    form.append("bankDetails", JSON.stringify(formData.bankDetails || {}));
    // Add image files (most important)
    if (formData.images.frontFacadeFile) form.append('frontFacade', formData.images.frontFacadeFile);
    if (formData.images.interiorViewFile) form.append('interiorView', formData.images.interiorViewFile);
    if (formData.images.brandingZoneFile) form.append('brandingZone', formData.images.brandingZoneFile);
    if (formData.images.heatMapPhotoFile) form.append('heatMapPhoto', formData.images.heatMapPhotoFile);
    (formData.images.otherPhotosFiles || []).forEach(file => {
      form.append("otherPhotos", file);
    });
    return form;
  };

  // Submit Handler (basic & premium)
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = prepareFormData();
      const token = localStorage.getItem('token');
      await axiosInstance.post('/spaces/register', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          // DON'T set 'Content-Type': Axios will do it!
        }
      });
      toast.success("Space registered successfully!");
      setShowSuccess(true);
      setStep(9);
    } catch (err) {
      toast.error("Submission failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ...UI code (same as before)
  // Add a preview showing image names/file info if needed


  const renderListingTypeCard = () => (
        <div className="flex gap-4 mb-6">
          <div
            className={`flex-1 p-4 rounded-xl border ${formData.listingType === "basic" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
          >
            <h4 className="font-bold text-blue-700 mb-1">Basic Listing</h4>
            <p className="text-xs text-gray-700">Free, visible after approval, not featured.</p>
          </div>
          <div
            className={`flex-1 p-4 rounded-xl border ${formData.listingType === "premium" ? "border-purple-700 bg-purple-50" : "border-gray-300"}`}
          >
            <h4 className="font-bold text-purple-700 mb-1">Premium Listing</h4>
            <p className="text-xs text-purple-700">₹1800/year, featured homepage badge, top search results.</p>
          </div>
        </div>
      );
    
      // Images Preview Section
      const renderImagesPreview = () => (
        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-2">Uploaded Images</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formData.images.frontFacade && (
              <div>
                <p className="text-xs text-gray-600">Front Facade</p>
                <img src={formData.images.frontFacade} alt="Front Facade" className="w-full h-24 object-cover rounded-lg shadow" />
              </div>
            )}
            {formData.images.interiorView && (
              <div>
                <p className="text-xs text-gray-600">Interior View</p>
                <img src={formData.images.interiorView} alt="Interior" className="w-full h-24 object-cover rounded-lg shadow" />
              </div>
            )}
            {formData.images.brandingZone && (
              <div>
                <p className="text-xs text-gray-600">Branding Zone</p>
                <img src={formData.images.brandingZone} alt="Branding" className="w-full h-24 object-cover rounded-lg shadow" />
              </div>
            )}
            {formData.images.heatMapPhoto && (
              <div>
                <p className="text-xs text-gray-600">Heat Map Photo</p>
                <img src={formData.images.heatMapPhoto} alt="Heat Map" className="w-full h-24 object-cover rounded-lg shadow" />
              </div>
            )}
            {Array.isArray(formData.images.otherPhotos) && formData.images.otherPhotos.length > 0 && (
              formData.images.otherPhotos.map((url, idx) => (
                <div key={idx}>
                  <p className="text-xs text-gray-600">Other Photo {idx + 1}</p>
                  <img src={url} alt={`Other ${idx}`} className="w-full h-24 object-cover rounded-lg shadow" />
                </div>
              ))
            )}
          </div>
        </div>
      );

  return (
    <div className="p-8 bg-white rounded-xl shadow max-w-2xl mx-auto">
      {/* ...rest of your summary UI */}
      <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
       {renderListingTypeCard()}
       <div className="space-y-4 text-sm md:text-base text-gray-700">
         <p><strong>Space Name:</strong> {formData.spaceName}</p>
         <p><strong>Company:</strong> {formData.companyName}</p>
         <p><strong>Space Type:</strong> {formData.spaceType}</p>
         <p><strong>Email:</strong> {formData.email}</p>
         <p><strong>Phone:</strong> {formData.phone}</p>
         <p><strong>Location:</strong> {formData.location?.address}</p>
         <p><strong>Description:</strong> {formData.description}</p>
         <p><strong>Footfall:</strong> {`Weekday: ${formData.footfall?.weekday}, Weekend: ${formData.footfall?.weekend}, Monthly: ${formData.footfall?.monthly}`}</p>
         <p><strong>Demographics:</strong> {`${formData.demographics?.ageGroups}, ${formData.demographics?.gender}, ${formData.demographics?.incomeGroup}`}</p>
         <p><strong>Suggested Price:</strong> ₹{formData.suggestedPricing?.monthly || 'N/A'}</p>
         <p><strong>Availability:</strong> {formData.availability?.[0]?.from?.toString().slice(0, 10)} to {formData.availability?.[0]?.to?.toString().slice(0, 10)}</p>
         <p><strong>PAN Number:</strong> {formData.panNumber}</p>
         <p><strong>Listing Type:</strong> <span className={formData.listingType === "premium" ? "text-purple-700 font-semibold" : "text-blue-700 font-semibold"}>{formData.listingType.toUpperCase()}</span></p>
         <p><strong>Suggested Price:</strong> 
  ₹{formData.suggestedPricing?.daily || '--'} (Daily) | 
  ₹{formData.suggestedPricing?.weekly || '--'} (Weekly) | 
  ₹{formData.suggestedPricing?.monthly || '--'} (Monthly)
</p>
       </div>

       {/* Images Preview */}
       {renderImagesPreview()}
      
      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn">Back</button>
        <button onClick={handleSubmit} className="btn-primary" disabled={loading}>
          {loading
            ? "Submitting..."
            : formData.listingType === "premium"
              ? "Pay ₹1800 & Submit"
              : "Submit"}
        </button>
      </div>
    </div>
  );
}
