import React, { useState } from "react";

const FAQS = [
  {
    question: "How do I use my rewards or perks?",
    answer: "Go to the Rewards tab, select an active perk, and follow the redeem instructions. Some rewards may require scanning a QR code or using a promo code at checkout."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can submit a support ticket using the form below, or email us at support@blookmyspace.com."
  },
  {
    question: "How to check my payment or invoice?",
    answer: "Visit the Payments tab. Click the receipt link next to your payment to download your invoice."
  },
  {
    question: "Can I edit my profile details?",
    answer: "Yes, go to the Profile tab and click the Edit Profile button to update your information."
  },
  // ...add more
];

export default function AdvertiserSupportTab() {
  const [show, setShow] = useState(Array(FAQS.length).fill(false));
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleAccordion = idx => {
    setShow(show.map((s, i) => i === idx ? !s : s));
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Optionally send to backend (axiosInstance.post('/support/ticket', form))
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Support & Help</h2>

      {/* FAQ Accordion */}
      <div className="mb-10">
        <h3 className="text-lg font-bold mb-2 text-blue-700">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {FAQS.map((f, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-left"
                onClick={() => handleAccordion(idx)}
              >
                <span>{f.question}</span>
                <svg
                  className={`h-5 w-5 transition-transform ${show[idx] ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {show[idx] && (
                <div className="px-4 py-3 bg-white border-t text-gray-700">
                  {f.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submit a ticket */}
      <div className="mb-10">
        <h3 className="text-lg font-bold mb-2 text-blue-700">Raise a Support Ticket</h3>
        <form onSubmit={handleSubmit} className="space-y-3 bg-white rounded-xl shadow p-5">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Message</label>
            <textarea
              required
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Submit Ticket
          </button>
          {submitted && <div className="text-green-700 mt-2">Ticket submitted! Our team will contact you soon.</div>}
        </form>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-gray-700 text-center">
        <div>Or email us at <a href="mailto:support@blookmyspace.com" className="text-blue-600 underline">support@blookmyspace.com</a></div>
        <div>Call: <a href="tel:+911234567890" className="text-blue-600 underline">+91-1234567890</a></div>
      </div>
    </div>
  );
}
