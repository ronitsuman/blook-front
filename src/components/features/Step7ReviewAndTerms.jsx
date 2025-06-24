// export default function Step7ReviewAndTerms({ formData, setFormData, back, onSubmit, submitting }) {
//     const [agreed, setAgreed] = useState(false);
  
//     const handleAgree = (e) => setAgreed(e.target.checked);
  
//     return (
//       <div>
//         <h3 className="font-bold mb-4">Review Your Details</h3>
//         <div className="bg-gray-50 rounded p-4 mb-6">
//           <pre className="text-xs">{JSON.stringify(formData, null, 2)}</pre>
//         </div>
//         <label className="flex items-center gap-2 mb-4">
//           <input type="checkbox" checked={agreed} onChange={handleAgree} />
//           I agree to the <a href="/terms" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">terms and conditions</a>
//         </label>
//         <div className="flex justify-between mt-6">
//           <button className="btn-secondary" onClick={back}>Back</button>
//           <button className="btn-primary" onClick={onSubmit} disabled={!agreed || submitting}>
//             {submitting ? "Submitting..." : "Submit"}
//           </button>
//         </div>
//       </div>
//     );
//   }
  

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance'; // Your Axios wrapper
import toast from 'react-hot-toast';

export default function Step7ReviewAndSubmit({ formData, back }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Format brandingZones: sizeSqFt = Number
      const brandingZones = (formData.brandingZones || []).map((zone) => ({
        ...zone,
        sizeSqFt: Number(zone.sizeSqFt || 0),
      }));

      const finalPayload = {
        spaceName: formData.spaceName,
        description: formData.description,
        spaceType: formData.spaceType,
        companyName: formData.companyName,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        availability: formData.availability || [],
        suggestedPrice: formData.suggestedPrice,
        footfall: formData.footfall,
        demographics: formData.demographics,
        brandingZones,
        images: formData.images,
        heatMappingConsent: {
          consentGiven: formData.heatMappingConsent?.consentGiven || false,
          cameraCount: Number(formData.heatMappingConsent?.cameraCount || 0),
          heatMapProof: formData.heatMappingConsent?.heatMapProof || '',
        },
        panNumber: formData.panNumber,
        authorizedToMonetize: formData.authorizedToMonetize || false,
        agreedToTerms: formData.agreedToTerms || false,
        listingType: formData.listingType,
        referralCode: formData.referralCode || '',
      };

      // Store in localStorage for Premium flow
      if (formData.listingType === 'premium') {
        localStorage.setItem('spaceListingData', JSON.stringify(finalPayload));
        setLoading(false);
        navigate('/payment-page');
      } else {
        // Directly POST to backend
        const res = await axiosInstance.post('/spaces/register', finalPayload);
        setLoading(false);
        toast.success('Space registered successfully!');
        navigate('/dashboard');
      }
    } catch (err) {
      console.error(err);
      toast.error('Submission failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800">Review & Submit</h2>

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
          <p><strong>Suggested Price:</strong> ₹{formData.suggestedPrice || 'N/A'}</p>
          <p><strong>Availability:</strong> {formData.availability?.[0]?.from?.toString().slice(0, 10)} to {formData.availability?.[0]?.to?.toString().slice(0, 10)}</p>
          <p><strong>PAN Number:</strong> {formData.panNumber}</p>
          <p><strong>Listing Type:</strong> {formData.listingType}</p>
          {/* <P><Strong>Front{formdata.images}                 </Strong> </P> */}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={back}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            {loading ? 'Submitting...' : formData.listingType === 'premium' ? 'Go to Payment' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
