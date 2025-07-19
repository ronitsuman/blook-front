import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-blue-100 text-blue-700",
  rejected: "bg-red-100 text-red-700",
  inprogress: "bg-indigo-100 text-indigo-700",
  completed: "bg-green-100 text-green-700"
};

export default function AdvertiserBookingsTab() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [payingId, setPayingId] = useState(null);
  const [creatingId, setCreatingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/bookings/advertiser");
      setBookings(res.data.bookings || []);
    } catch {
      setBookings([]);
    }
    setLoading(false);
  };

  // ---- Pay Now button handler
  const handlePayNow = async (booking) => {
    setPayingId(booking._id);
    try {
  //  Tumhare payment route ka call (demo code, adjust as needed)
      const res = await axiosInstance.post(`/payments/initiate`, { bookingId: booking._id, amount: booking.amount });
      // Simulate redirect to payment gateway or open modal
      if (res.data && res.data.orderId) {
        // Simulate: store info and navigate to payment page
        localStorage.setItem("blook_booking_payment", JSON.stringify(res.data));
        navigate(`/payment/${res.data.orderId}`);
      } else {
        alert("Failed to initiate payment. Try again.");
      }
    } catch (err) {
      alert("Payment initiation failed.");
    }
    setPayingId(null);
  };

  // ---- Create Campaign button handler
  const handleCreateCampaign = (booking) => {
    // Store booking info to use in campaign creation
    localStorage.setItem("blook_booking_for_campaign", JSON.stringify(booking));
    navigate(`/campaign/create?bookingId=${booking._id}`);
  };

  if (loading) return <div className="text-gray-400">Loading bookings...</div>;

  if (!bookings.length)
    return <div className="text-gray-500 py-10">No bookings found.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold text-blue-800 mb-4">My Booking Requests</h2>
      <div className="overflow-x-auto rounded-xl shadow border border-blue-100">
        <table className="min-w-full">
          <thead className="bg-gradient-to-tr from-blue-100 to-indigo-50">
            <tr>
              <th className="px-4 py-3 text-left">Space</th>
              <th className="px-4 py-3 text-left">Dates</th>
              <th className="px-4 py-3 text-left">Branding</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Payment</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => {
              const canPay = b.status === "approved" && b.paymentStatus === "unpaid";
              const canCreateCampaign = b.status === "approved" && b.paymentStatus === "paid";
              return (
                <tr key={b._id} className="border-t">
                  <td className="px-4 py-3 font-semibold">
                    {b.spaceId?.spaceName || b.spaceId?.spaceCode || "-"}
                    <div className="text-xs text-gray-500">{b.spaceId?.location?.address}</div>
                  </td>
                  <td className="px-4 py-3">
                    {b.fromDate && b.toDate
                      ? `${format(new Date(b.fromDate), "yyyy-MM-dd")} → ${format(new Date(b.toDate), "yyyy-MM-dd")}`
                      : "-"}
                  </td>
                  <td className="px-4 py-3">
                    {(b.brandingTypes || []).join(", ")}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-900">₹{b.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${statusColors[b.status] || "bg-gray-100 text-gray-500"}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 capitalize">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      b.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : b.paymentStatus === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {b.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {canPay && (
                      <button
                        className="px-4 py-1 rounded bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition"
                        onClick={() => handlePayNow(b)}
                        disabled={payingId === b._id}
                      >
                        {payingId === b._id ? "Processing..." : "Pay Now"}
                      </button>
                    )}
                    {canCreateCampaign && (
                      <button
                        className="px-4 py-1 rounded bg-green-600 text-white font-semibold text-xs hover:bg-green-700 transition"
                        onClick={() => handleCreateCampaign(b)}
                        disabled={creatingId === b._id}
                      >
                        Create Campaign
                      </button>
                    )}
                    {b.status === "pending" && (
                      <span className="text-xs text-gray-500">Waiting for Approval</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
