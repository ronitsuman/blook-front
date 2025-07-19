// NewsletterSignup.jsx
import { useState } from "react";

export default function NewsletterSignup() {
  const [form, setForm] = useState({ name: "", email: "", type: "" });
  return (
    <section className="bg-blue-100  py-3 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">💌 Stay in the Loop</h2>
        <p className="text-gray-700 mb-6">Get updates, offers & early access to BlookMySpace features.</p>
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input type="text" placeholder="Name" className="border border-blue-200 rounded-md px-4 py-2" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <input type="email" placeholder="Email" className="border border-blue-200 rounded-md px-4 py-2" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          <select className="border border-blue-200 rounded-md px-4 py-2" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
            <option value="">I’m a...</option>
            <option>Brand</option>
            <option>Space Owner</option>
            <option>Agency</option>
          </select>
          <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700">Sign Me Up</button>
        </form>
      </div>
    </section>
  );
}
