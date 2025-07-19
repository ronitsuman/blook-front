import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import toast from 'react-hot-toast';

const BlookforceAgents = () => {
  const [agents, setAgents] = useState([]);
  const [zoomImg, setZoomImg] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axiosInstance.get('/admin/agents/pending');
        setAgents(res.data);
      } catch (err) {
        toast.error('Failed to fetch agents');
      }
    };
    fetchAgents();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axiosInstance.patch(`/admin/agents/${id}/approve`);
      setAgents((prev) => prev.filter((a) => a._id !== id));
      toast.success('Agent Approved!');
    } catch {
      toast.error('Approval failed');
    }
  };

  const handleReject = async (id) => {
    try {
      await axiosInstance.patch(`/admin/agents/${id}/reject`);
      setAgents((prev) => prev.filter((a) => a._id !== id));
      toast.success('Agent Rejected!');
    } catch {
      toast.error('Rejection failed');
    }
  };

  return (
    <div>
      {/* Image zoom modal */}
      {zoomImg && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <img src={zoomImg} className="max-w-xl max-h-[90vh] rounded shadow-2xl" alt="Zoom" />
          <button onClick={() => setZoomImg(null)} className="absolute top-8 right-10 text-white text-4xl font-bold">&times;</button>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Pending Blookforce Agents</h2>
      {agents.length === 0 ? (
        <p className="text-gray-500">No pending agents found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {agents.map((a) => (
            <div key={a._id} className="border p-4 rounded-xl shadow-md bg-white">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p><strong>Name:</strong> {a.agentProfile?.fullName}</p>
                  <p><strong>Email:</strong> {a.email}</p>
                  <p><strong>Phone:</strong> {a.agentProfile?.phone}</p>
                  <p><strong>City:</strong> {a.agentProfile?.city || <span className="text-gray-400">—</span>}</p>
                  <p><strong>Status:</strong> <span className="capitalize">{a.agentProfile?.status}</span></p>
                  <p><strong>Agent Code:</strong> {a.agentProfile?.agentCode}</p>
                  {/* Profile image */}
                  {a.agentProfile?.profileImage && (
                    <div className="my-2">
                      <img
                        src={a.agentProfile.profileImage}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border cursor-zoom-in object-cover"
                        onClick={() => setZoomImg(a.agentProfile.profileImage)}
                      />
                      <div className="text-xs text-gray-500">Click to enlarge</div>
                    </div>
                  )}
                  {/* Selfie */}
                  {a.agentProfile?.selfieUrl && (
                    <div className="my-2">
                      <span className="text-xs font-medium">Selfie:</span>
                      <img
                        src={a.agentProfile.selfieUrl}
                        alt="Selfie"
                        className="w-20 h-20 rounded-full border cursor-zoom-in object-cover mt-1"
                        onClick={() => setZoomImg(a.agentProfile.selfieUrl)}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => handleApprove(a._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleReject(a._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
              {/* Compliance Docs */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {a.agentProfile?.complianceDocs?.length > 0 ? (
                  a.agentProfile.complianceDocs.map((doc, i) => (
                    <div key={i}>
                      <p className="text-xs font-medium">Doc {i + 1}</p>
                      <img
                        src={doc}
                        alt={`Compliance ${i + 1}`}
                        className="w-full h-36 object-cover border rounded cursor-zoom-in"
                        onClick={() => setZoomImg(doc)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="col-span-2 text-gray-500">No compliance docs uploaded.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlookforceAgents;
