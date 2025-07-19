import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function AdminCustomRequirementsPanel() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/space/custom-requirements")
      .then(res => {
        setLeads(res.data.requirements || []);
        setLoading(false);
      });
  }, []);

  // Search/filter logic (by name, city, branding, phone)
  const filteredLeads = leads.filter(l =>
    (l.name || "").toLowerCase().includes(search.toLowerCase()) ||
    (l.targetCity || "").toLowerCase().includes(search.toLowerCase()) ||
    (l.brandingType || "").toLowerCase().includes(search.toLowerCase()) ||
    (l.phone || "").includes(search)
  );

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Custom Requirement Leads</h1>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name, city, branding, phone..."
          className="border rounded px-4 py-2 w-full max-w-lg"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-gray-400 animate-pulse text-lg">Loading leads...</div>
      ) : !filteredLeads.length ? (
        <div className="text-gray-500 py-10">No custom requirements found.</div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">City</th>
                <th className="px-4 py-3 text-left">Budget</th>
                <th className="px-4 py-3 text-left">Footfall</th>
                <th className="px-4 py-3 text-left">Branding</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map(l => (
                <tr key={l._id} className="border-t hover:bg-blue-50 transition">
                  <td className="px-4 py-2 font-semibold">{l.name}</td>
                  <td className="px-4 py-2">{l.phone}</td>
                  <td className="px-4 py-2">{l.email}</td>
                  <td className="px-4 py-2">{l.targetCity}</td>
                  <td className="px-4 py-2">{l.budget}</td>
                  <td className="px-4 py-2">{l.footfall}</td>
                  <td className="px-4 py-2">{l.brandingType}</td>
                  <td className="px-4 py-2 capitalize">{l.status}</td>
                  <td className="px-4 py-2">{l.createdAt ? l.createdAt.slice(0, 10) : "-"}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-600 underline font-semibold"
                      onClick={() => setSelected(l)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ---- LEAD MODAL ---- */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 relative">
            <button
              className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-blue-700"
              onClick={() => setSelected(null)}
            >×</button>
            <h2 className="text-xl font-bold mb-2 text-blue-700">{selected.name}</h2>
            <div className="text-sm mb-2 text-gray-500">{selected.email} | {selected.phone}</div>
            <div className="mb-1"><b>City:</b> {selected.targetCity}</div>
            <div className="mb-1"><b>Budget:</b> {selected.budget}</div>
            <div className="mb-1"><b>Footfall:</b> {selected.footfall}</div>
            <div className="mb-1"><b>Branding:</b> {selected.brandingType}</div>
            <div className="mb-1"><b>Dates:</b> {selected.dates}</div>
            <div className="mb-1"><b>Status:</b> <span className="capitalize">{selected.status}</span></div>
            <div className="mb-1"><b>Created:</b> {selected.createdAt ? selected.createdAt.slice(0, 10) : "-"}</div>
            <div className="mt-3"><b>Notes:</b>
              <div className="bg-blue-50 rounded p-2 mt-1 text-gray-700 min-h-[40px]">
                {selected.notes || <span className="italic text-gray-400">No notes</span>}
              </div>
            </div>
            {/* Future: Status update, assign, contact buttons here */}
            <div className="flex gap-3 mt-6">
              <a href={`mailto:${selected.email}`} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Contact</a>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
                onClick={() => setSelected(null)}
              >Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
