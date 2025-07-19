import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function VendorBidCampaignsTab() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [quoteForm, setQuoteForm] = useState({
    quotedAmount: "",
    estimatedTimeline: "",
    message: "",
    attachment: null,
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/vendor/dashboard/quote-campaigns")
      .then(res => {
        setCampaigns(Array.isArray(res.data.campaigns) ? res.data.campaigns : []);
        setLoading(false);
      })
      .catch(() => {
        setCampaigns([]);
        setLoading(false);
      });
  }, []);

  const openQuoteModal = (campaign) => {
    setSelectedCampaign(campaign);
    setShowModal(true);
    setQuoteForm({ quotedAmount: "", estimatedTimeline: "", message: "", attachment: null });
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setQuoteForm(form => ({
      ...form,
      [name]: files ? files[0] : value,
    }));
  };

  const handleQuoteSubmit = async () => {
    setSubmitting(true);
    try {
      let attachmentLink = null;
      if (quoteForm.attachment) {
        // Upload to Cloudinary or any backend endpoint
        const formData = new FormData();
        formData.append("file", quoteForm.attachment);
        const uploadRes = await axiosInstance.post("/vendor/dashboard/upload", formData);
        attachmentLink = uploadRes.data.url;
      }

      await axiosInstance.post("/vendor/dashboard/quotes", {
        campaignId: selectedCampaign._id,
        quotedAmount: quoteForm.quotedAmount,
        estimatedTimeline: quoteForm.estimatedTimeline,
        message: quoteForm.message,
        attachmentLinks: attachmentLink ? [attachmentLink] : [],
      });
      setShowModal(false);
      setSelectedCampaign(null);
      // Optionally: refetch campaigns to remove this row if "one-time quote" policy
    } catch (err) {
      alert("Failed to submit quote: " + (err?.response?.data?.message || err.message));
    }
    setSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Open Campaigns for Quoting</h2>
      {loading ? (
        <div className="text-gray-400 animate-pulse">Loading campaigns...</div>
      ) : !campaigns.length ? (
        <div className="text-gray-500 py-10">No open campaigns for quoting right now.</div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-purple-100 bg-white">
          <table className="min-w-full">
            <thead className="bg-gradient-to-tr from-purple-100 to-indigo-50">
              <tr>
                <th className="px-4 py-3 text-left">Campaign</th>
                <th className="px-4 py-3 text-left">Space</th>
                <th className="px-4 py-3 text-left">Start</th>
                <th className="px-4 py-3 text-left">End</th>
                <th className="px-4 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map(c => (
                <tr key={c._id} className="border-t">
                  <td className="px-4 py-3">{c.campaignName}</td>
                  <td className="px-4 py-3">{c.spaceId?.spaceName || "-"}</td>
                  <td className="px-4 py-3">{c.startDate?.slice(0,10) || "-"}</td>
                  <td className="px-4 py-3">{c.endDate?.slice(0,10) || "-"}</td>
                  <td className="px-4 py-3">
                    <button
                      className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                      onClick={() => openQuoteModal(c)}
                    >
                      Submit Quote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Quote Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-purple-600 text-2xl font-bold"
            >×</button>
            <h2 className="text-lg font-bold mb-2 text-purple-800">Submit Quote for "{selectedCampaign.campaignName}"</h2>
            <div className="space-y-3">
              <input
                type="number"
                name="quotedAmount"
                placeholder="Quoted Amount (₹)"
                className="w-full border rounded px-3 py-2"
                value={quoteForm.quotedAmount}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="estimatedTimeline"
                placeholder="Timeline (e.g. 7 days)"
                className="w-full border rounded px-3 py-2"
                value={quoteForm.estimatedTimeline}
                onChange={handleFormChange}
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Your message (optional)"
                className="w-full border rounded px-3 py-2"
                value={quoteForm.message}
                onChange={handleFormChange}
              />
              <input
                type="file"
                name="attachment"
                className="block"
                accept="image/*,application/pdf"
                onChange={handleFormChange}
              />
              <button
                className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 w-full"
                onClick={handleQuoteSubmit}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Quote"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
