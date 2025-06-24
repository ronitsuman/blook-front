export default function SuccessModal() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white p-8 rounded-lg shadow max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Space Registered!</h2>
          <p className="mb-4">Your space has been submitted and is <b>waiting for tech team approval</b>.<br />
          You will be notified by email as soon as it’s approved.</p>
          <a href="/dashboard/space-owner" className="btn-primary block mt-4 text-center">Go to Dashboard</a>
        </div>
      </div>
    );
  }
  