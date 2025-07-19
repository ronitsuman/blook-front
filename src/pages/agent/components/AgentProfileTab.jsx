import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function AgentProfileTab() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/agent/dashboard/profile")
      .then(res => {
        setProfile(res.data.profile);
        setForm(res.data.profile);
        setLoading(false);
      })
      .catch(() => {
        setProfile(null);
        setLoading(false);
      });
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // File upload (simulate Cloudinary, implement if backend ready)
  const handleFileChange = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    // TODO: Backend upload endpoint
    // const res = await axiosInstance.post("/agent/dashboard/upload", data);
    // setForm({ ...form, [field]: res.data.url });
    // For now, just local preview
    setForm({ ...form, [field]: URL.createObjectURL(file) });
  };

  const handleSave = () => {
    setSaving(true);
    axiosInstance
      .put("/agent/dashboard/profile", form)
      .then(res => {
        setProfile(res.data.profile);
        setEditMode(false);
        setSaving(false);
      })
      .catch(() => setSaving(false));
  };

  if (loading) return <div className="text-gray-400 animate-pulse">Loading profile...</div>;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Agent Profile</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex gap-6 items-center mb-4">
          <div>
            <img
              src={form.selfieUrl || "/avatar-placeholder.png"}
              className="w-24 h-24 object-cover rounded-full border"
              alt="selfie"
            />
            {editMode && (
              <input
                type="file"
                accept="image/*"
                className="mt-2"
                onChange={e => handleFileChange(e, "selfieUrl")}
              />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl">{form.fullName}</span>
              <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded text-xs font-semibold">
                Agent
              </span>
            </div>
            <div className="text-gray-500">{form.email}</div>
            <div className="text-gray-500">{form.phone}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">City</label>
            {editMode ? (
              <input
                type="text"
                name="city"
                value={form.city || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            ) : (
              <div className="text-gray-700">{form.city || "—"}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Agent Code</label>
            <div className="text-gray-700">{form.agentCode || "—"}</div>
          </div>
        </div>
        {/* Compliance Docs */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Compliance Documents</label>
          {form.complianceDocs && form.complianceDocs.length ? (
            <ul>
              {form.complianceDocs.map((url, idx) => (
                <li key={idx} className="flex items-center gap-2 mb-1">
                  <a href={url} className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Document {idx + 1}</a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500">No documents uploaded.</div>
          )}
          {editMode && (
            <input type="file" className="mt-2" multiple onChange={e => handleFileChange(e, "complianceDocs")} />
          )}
        </div>
        {/* Bank Details */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Bank Details</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium">Account Holder</label>
              {editMode ? (
                <input type="text" name="accountHolder" value={form.accountHolder || ""} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              ) : (
                <div className="text-gray-700">{form.accountHolder || "—"}</div>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium">Account Number</label>
              {editMode ? (
                <input type="text" name="accountNumber" value={form.accountNumber || ""} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              ) : (
                <div className="text-gray-700">{form.accountNumber || "—"}</div>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium">IFSC</label>
              {editMode ? (
                <input type="text" name="ifsc" value={form.ifsc || ""} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              ) : (
                <div className="text-gray-700">{form.ifsc || "—"}</div>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium">UPI</label>
              {editMode ? (
                <input type="text" name="upi" value={form.upi || ""} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              ) : (
                <div className="text-gray-700">{form.upi || "—"}</div>
              )}
            </div>
          </div>
        </div>
        {/* Edit / Save / Cancel */}
        <div className="mt-8 flex gap-4">
          {editMode ? (
            <>
              <button
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300"
                onClick={() => { setEditMode(false); setForm(profile); }}
                disabled={saving}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
