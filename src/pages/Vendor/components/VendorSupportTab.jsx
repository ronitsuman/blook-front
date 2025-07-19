import React, { useState } from "react";

const FAQS = [
  {
    question: "How do I get paid for completed jobs?",
    answer: "Once you mark a job as completed and it's verified by the advertiser, your payment will be processed to your registered bank/UPI. Check the Payments tab for details."
  },
  {
    question: "How can I update my compliance documents?",
    answer: "Go to the Profile tab, click Edit Profile, and upload your latest compliance documents."
  },
  {
    question: "Who do I contact for job or campaign issues?",
    answer: "Submit a support ticket below or email vendor-support@blookmyspace.com."
  },
  // ...add more as per your use case
];

export default function VendorSupportTab() {
  const [show, setShow] = useState(Array(FAQS.length).fill(false));
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleAccordion = idx => setShow(show.map((s, i) => i === idx ? !s : s));
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Optionally send to backend (axiosInstance.post('/vendor/support/ticket', form))
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-purple-800">Support & Help</h2>

      {/* FAQ Accordion */}
      <div className="mb-10">
        <h3 className="text-lg font-bold mb-2 text-purple-700">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {FAQS.map((f, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-3 bg-purple-50 text-left"
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
        <h3 className="text-lg font-bold mb-2 text-purple-700">Raise a Support Ticket</h3>
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
            className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700"
          >
            Submit Ticket
          </button>
          {submitted && <div className="text-green-700 mt-2">Ticket submitted! Our team will contact you soon.</div>}
        </form>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-gray-700 text-center">
        <div>Or email us at <a href="mailto:vendor-support@blookmyspace.com" className="text-purple-600 underline">vendor-support@blookmyspace.com</a></div>
        <div>Call: <a href="tel:+911234567890" className="text-purple-600 underline">+91-1234567890</a></div>
      </div>
    </div>
  );
}
