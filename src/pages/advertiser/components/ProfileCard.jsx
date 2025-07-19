import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export default function AdvertiserProfileTab() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 1. Fetch profile on mount
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/advertiser/dashboard/profile")
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

  // 2. Handle input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Save profile (PUT API)
  const handleSave = () => {
    setSaving(true);
    axiosInstance
      .put("/advertiser/dashboard/profile", form)
      .then(res => {
        setProfile(res.data.profile);
        setEditMode(false);
        setSaving(false);
      })
      .catch(() => {
        setSaving(false);
      });
  };

  // 4. File upload handler (Profile pic / compliance docs)
  const handleFileChange = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    // Optional: you may need to send "field" in API to know what you're uploading
    const res = await axiosInstance.post("/advertiser/dashboard/upload", data);
    setForm({ ...form, [field]: res.data.url });
  };

  if (loading) return <div className="text-gray-400 animate-pulse">Loading profile...</div>;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Your Profile</h2>
      <div className="bg-white rounded-xl shadow p-6">
        {/* Profile pic */}
        <div className="flex gap-6 items-center mb-4">
          <div>
            <img
              src={form.profileImage || "/avatar-placeholder.png"}
              className="w-24 h-24 object-cover rounded-full border"
              alt="profile"
            />
            {editMode && (
              <input
                type="file"
                accept="image/*"
                className="mt-2"
                onChange={e => handleFileChange(e, "profileImage")}
              />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl">{form.fullName}</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-semibold">
                Advertiser
              </span>
            </div>
            <div className="text-gray-500">{form.email}</div>
            <div className="text-gray-500">{form.phone}</div>
          </div>
        </div>
        {/* Info fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Company Name</label>
            {editMode ? (
              <input
                type="text"
                name="companyName"
                value={form.companyName || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            ) : (
              <div className="text-gray-700">{form.companyName || "—"}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Industry Type</label>
            {editMode ? (
              <input
                type="text"
                name="industryType"
                value={form.industryType || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            ) : (
              <div className="text-gray-700">{form.industryType || "—"}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Website</label>
            {editMode ? (
              <input
                type="text"
                name="website"
                value={form.website || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            ) : (
              <a href={form.website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                {form.website}
              </a>
            )}
          </div>
        </div>
        {/* Compliance Docs */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Compliance Documents</label>
          {form.complianceDocs && form.complianceDocs.length ? (
            <ul>
              {form.complianceDocs.map((doc, idx) => (
                <li key={idx} className="flex items-center gap-2 mb-1">
                  <a href={doc.fileUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{doc.name}</a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500">No documents uploaded.</div>
          )}
          {editMode && (
            <input type="file" className="mt-2" onChange={e => handleFileChange(e, "complianceDocs")} />
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
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
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
