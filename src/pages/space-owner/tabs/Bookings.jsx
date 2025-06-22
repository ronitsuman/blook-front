// src/pages/space-owner/tabs/Bookings.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get('/space-owner/bookings');
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      await axiosInstance.patch(`/space-owner/bookings/${id}/${status}`);
      setBookings(prev => prev.map(b => b._id === id ? { ...b, status } : b));
    } catch (err) {
      console.error(`Failed to ${status} booking:`, err);
    }
  };

  if (loading) return <div>Loading bookings...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Booking Requests</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className="w-full border bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Space</th>
              <th className="p-2 border">Advertiser</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-t">
                <td className="p-2 border">{b.spaceName || b.space?.spaceName}</td>
                <td className="p-2 border">{b.advertiser?.name}</td>
                <td className="p-2 border">{new Date(b.createdAt).toLocaleDateString()}</td>
                <td className="p-2 border capitalize">{b.status}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => setSelectedBooking(b)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                  {b.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleUpdateStatus(b._id, 'approve')}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(b._id, 'reject')}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
            <h3 className="text-lg font-semibold mb-2">Booking Detail</h3>
            <p><strong>Advertiser:</strong> {selectedBooking.advertiser?.name}</p>
            <p><strong>Email:</strong> {selectedBooking.advertiser?.email}</p>
            <p><strong>Space:</strong> {selectedBooking.space?.spaceName}</p>
            <p><strong>Date:</strong> {new Date(selectedBooking.createdAt).toLocaleString()}</p>
            <p><strong>Status:</strong> {selectedBooking.status}</p>
            <button
              onClick={() => setSelectedBooking(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;