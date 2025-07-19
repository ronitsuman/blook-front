// // // // src/pages/space-owner/tabs/DashboardHome.jsx
// // // import { useEffect, useState } from 'react';
// // // import axiosInstance from '../../../api/axiosInstance';
// // // import {useNavigate} from 'react-router-dom'


// // // const DashboardHome = () => {
// // //   const [user, setUser] = useState(null);

// // //   const navigate = useNavigate();
  
  

// // //   useEffect(() => {
// // //     const fetchDashboard = async () => {
// // //       try {
// // //         const res = await axiosInstance.get('/spaces/my-spaces');
// // //         setUser(res.data.user);
// // //       } catch (err) {
// // //         console.error('Failed to load dashboard', err);
// // //       }
// // //     };
// // //     fetchDashboard();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.name || 'Space Owner'}!</h2>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //         <div className="bg-blue-100 p-4 rounded shadow">
// // //           <h3 className="font-bold">Email</h3>
// // //           <p>{user?.email}</p>
// // //         </div>
// // //         <div className="bg-green-100 p-4 rounded shadow">
// // //           <h3 className="font-bold">Plan</h3>
// // //           <p>{user?.subscriptionPlan}</p>
// // //         </div>
// // //         <div className="bg-yellow-100 p-4 rounded shadow">
// // //           <h3 className="font-bold">Total Spaces Listed</h3>
// // //           <p>{user?.spaceCount}</p>
// // //         </div>
// // //         <div className="bg-blue-400  rounded shadow">
// // //           <button onClick={()=>navigate('/list-space')}  className="font-bold text-center p-12">Add Space</button >
// // //           <p></p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DashboardHome;

// // import { useEffect, useState } from 'react';
// // import axiosInstance from '../../../api/axiosInstance';
// // import { useNavigate } from 'react-router-dom';

// // const DashboardHome = () => {
// //   const [spaces, setSpaces] = useState([]);
// //   const [userEmail, setUserEmail] = useState('');
// //   const [plan, setPlan] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchDashboard = async () => {
// //       try {
// //         // Get all spaces owned by the current user
// //         const res = await axiosInstance.get('/spaces/my-spaces');
// //         setSpaces(res.data.spaces || res.data); // depends on backend return

// //         // Try to get email & plan from first space (assuming user owns them all)
// //         if ((res.data.spaces && res.data.spaces.length) || (res.data.length)) {
// //           const s = res.data.spaces ? res.data.spaces[0] : res.data[0];
// //           setUserEmail(
// //             s?.spaceOwnerId?.email || 
// //             s?.ownerEmail || 
// //             localStorage.getItem('userEmail') || // fallback to LS if present
// //             ''
// //           );
// //           setPlan(s?.listingType || 'N/A');
// //         }
// //       } catch (err) {
// //         console.error('Failed to load dashboard', err);
// //       }
// //     };
// //     fetchDashboard();
// //   }, []);

// //   return (
// //     <div>
// //       <h2 className="text-2xl font-semibold mb-4">Welcome, Space Owner!</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         <div className="bg-blue-100 p-4 rounded shadow">
// //           <h3 className="font-bold">Email</h3>
// //           <p>{userEmail ? userEmail : "—"}</p>
// //         </div>
// //         <div className="bg-green-100 p-4 rounded shadow">
// //           <h3 className="font-bold">Current Plan</h3>
// //           <p className={plan === "premium" ? "text-purple-700 font-semibold" : "text-blue-700 font-semibold"}>
// //             {plan === "premium"
// //               ? "Premium Listing"
// //               : plan === "basic"
// //               ? "Free Listing"
// //               : plan || "—"}
// //           </p>
// //         </div>
// //         <div className="bg-yellow-100 p-4 rounded shadow">
// //           <h3 className="font-bold">Total Spaces Listed</h3>
// //           <p>{spaces.length}</p>
// //         </div>
// //         <div className="bg-blue-400 rounded shadow">
// //           <button onClick={() => navigate('/list-space')} className="font-bold text-center p-12 w-full text-white hover:bg-blue-500">Add Space</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardHome;

// import { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// const DashboardHome = () => {
//   const [spaces, setSpaces] = useState([]);
//   const [userEmail, setUserEmail] = useState('');
//   const [plan, setPlan] = useState('');
//   const [pending, setPending] = useState(0);
//   const [approved, setApproved] = useState(0);
//   const [rejected, setRejected] = useState(0);
//   const user = useSelector(state=>state.auth.user)

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const res = await axiosInstance.get('/spaces/my-spaces');
//         const spaceList = res.data.spaces || res.data;
//         setSpaces(spaceList);

//         // status counts
//         setPending(spaceList.filter(s => s.status === "pending").length);
//         setApproved(spaceList.filter(s => s.status === "approved").length);
//         setRejected(spaceList.filter(s => s.status === "rejected").length);

//         // Email and plan from first space
//         if (spaceList.length) {
//           const s = spaceList[0];
//           setUserEmail(s?.spaceOwnerId?.email || s?.ownerEmail || localStorage.getItem('userEmail') || '');
//           setPlan(s?.listingType || 'N/A');
//         }
//       } catch (err) {
//         console.error('Failed to load dashboard', err);
//       }
//     };
//     fetchDashboard();
//   }, []);

//   // Show top 3 recent spaces
//   const topSpaces = spaces.slice(0, 3);

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.fullName || user?.name || "User"}!</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="bg-blue-100 p-4 rounded shadow">
//           <h3 className="font-bold">Email</h3>
//           <p>{userEmail ? userEmail : "—"}</p>
//         </div>
//         <div className="bg-green-100 p-4 rounded shadow">
//           <h3 className="font-bold">Current Plan</h3>
//           <p className={plan === "premium" ? "text-purple-700 font-semibold" : "text-blue-700 font-semibold"}>
//             {plan === "premium"
//               ? "Premium Listing"
//               : plan === "basic"
//               ? "Free Listing"
//               : plan || "—"}
//           </p>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded shadow">
//           <h3 className="font-bold">Total Spaces Listed</h3>
//           <p>{spaces.length}</p>
//         </div>
//         <div className="bg-blue-400 rounded shadow">
//           <button onClick={() => navigate('/list-space')} className="font-bold text-center p-12 w-full text-white hover:bg-blue-500">Add Space</button>
//         </div>
//       </div>

//       {/* --- Status Counts --- */}
//       <div className="grid grid-cols-3 gap-4 my-8">
//         <div className="bg-gray-50 border-l-4 border-yellow-400 rounded p-4 text-center">
//           <p className="text-lg font-semibold">{pending}</p>
//           <p className="text-xs text-gray-700">Pending Spaces</p>
//         </div>
//         <div className="bg-gray-50 border-l-4 border-green-400 rounded p-4 text-center">
//           <p className="text-lg font-semibold">{approved}</p>
//           <p className="text-xs text-gray-700">Approved Spaces</p>
//         </div>
//         <div className="bg-gray-50 border-l-4 border-red-400 rounded p-4 text-center">
//           <p className="text-lg font-semibold">{rejected}</p>
//           <p className="text-xs text-gray-700">Rejected Spaces</p>
//         </div>
//       </div>

//       {/* --- Top 3 Spaces Table --- */}
//       <div className="mt-6 bg-white p-4 rounded-xl shadow">
//         <h4 className="font-bold mb-3">Your Latest Spaces</h4>
//         {topSpaces.length === 0 ? (
//           <div className="text-gray-500 italic text-sm">No spaces registered yet.</div>
//         ) : (
//           <table className="w-full text-sm">
//             <thead>
//               <tr>
//                 <th className="p-2 border">Space Code</th>
//                 <th className="p-2 border">Name</th>
//                 <th className="p-2 border">Type</th>
//                 <th className="p-2 border">Plan</th>
//                 <th className="p-2 border">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {topSpaces.map((s, idx) => (
//                 <tr key={s._id} className="border-t">
//                   <td className="p-2 border font-mono">{s.spaceCode}</td>
//                   <td className="p-2 border">{s.spaceName}</td>
//                   <td className="p-2 border">{s.spaceType}</td>
//                   <td className="p-2 border">
//                     <span className={s.listingType === "premium" 
//                       ? "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
//                       : "bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"}>
//                       {s.listingType === "premium" ? "Premium" : "Free"}
//                     </span>
//                   </td>
//                   <td className="p-2 border">
//                     <span className={
//                       s.status === "approved"
//                         ? "text-green-700 font-bold"
//                         : s.status === "pending"
//                         ? "text-yellow-700 font-bold"
//                         : s.status === "rejected"
//                         ? "text-red-700 font-bold"
//                         : "text-gray-500 font-bold"
//                     }>
//                       {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         <button
//           onClick={() => navigate('/my-spaces')}
//           className="mt-4 text-blue-600 underline text-xs hover:text-blue-800"
//         >View all spaces</button>
//       </div>

//       {/* --- Quick Links (Optional) --- */}
//       <div className="mt-8 flex flex-wrap gap-4">
//         <button
//           onClick={() => navigate('/my-spaces')}
//           className="bg-blue-100 px-4 py-2 rounded shadow hover:bg-blue-200 text-sm"
//         >My Spaces</button>
//         <button
//           onClick={() => navigate('/support')}
//           className="bg-green-100 px-4 py-2 rounded shadow hover:bg-green-200 text-sm"
//         >Support</button>
//         <button
//           onClick={() => navigate('/profile')}
//           className="bg-yellow-100 px-4 py-2 rounded shadow hover:bg-yellow-200 text-sm"
//         >Profile</button>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;



// import { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const DashboardHome = () => {
//   const [spaces, setSpaces] = useState([]);
//   const [plan, setPlan] = useState('');
//   const [pending, setPending] = useState(0);
//   const [approved, setApproved] = useState(0);
//   const [rejected, setRejected] = useState(0);
//   const user = useSelector(state => state.auth.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const res = await axiosInstance.get('/spaces/my-spaces');
//         const spaceList = res.data.spaces || res.data;
//         setSpaces(spaceList);

//         // status counts
//         setPending(spaceList.filter(s => s.status === "pending").length);
//         setApproved(spaceList.filter(s => s.status === "approved").length);
//         setRejected(spaceList.filter(s => s.status === "rejected").length);

//         // Plan from first space
//         if (spaceList.length) {
//           const s = spaceList[0];
//           setPlan(s?.listingType || 'N/A');
//         }
//       } catch (err) {
//         console.error('Failed to load dashboard', err);
//       }
//     };
//     fetchDashboard();
//   }, []);

//   // Show top 3 recent spaces
//   const topSpaces = spaces.slice(0, 3);

//   console.log("redux user",user)

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">
//         Welcome, {user?.fullName || user?.name || "User"}!
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="bg-blue-100 p-4 rounded shadow">
//           <h3 className="font-bold">Email</h3>
//           <p>{user?.email ? user.email : "—"}</p>
//         </div>
//         <div className="bg-green-100 p-4 rounded shadow">
//           <h3 className="font-bold">Current Plan</h3>
//           <p className={plan === "premium" ? "text-purple-700 font-semibold" : "text-blue-700 font-semibold"}>
//             {plan === "premium"
//               ? "Premium Listing"
//               : plan === "basic"
//               ? "Free Listing"
//               : plan || "—"}
//           </p>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded shadow">
//           <h3 className="font-bold">Total Spaces Listed</h3>
//           <p className='text-xl '>{spaces.length}</p>
//         </div>
//         <div className="bg-blue-400 rounded shadow">
//           <button onClick={() => navigate('/list-space')} className="font-bold text-center p-12 w-full text-white hover:bg-blue-500">Add Space</button>
//         </div>
//       </div>

//       {/* --- Status Counts --- */}
//       <div className="grid grid-cols-3 gap-4 my-8">
//         <div className="bg-gray-50 border-l-4 border-yellow-400 rounded p-4 text-center">
//           <p className="text-lg font-semibold">{pending}</p>
//           <p className="text-xs text-gray-700">Pending Spaces</p>
//         </div>
//         <div className="bg-gray-50 border-l-4 border-green-400 rounded p-4 text-center">
//           <p className="text-lg font-semibold">{approved}</p>
//           <p className="text-xs text-gray-700">Approved Spaces</p>
//         </div>
//         <div className="bg-gray-50 border-l-4 border-red-400 rounded p-4 text-center">
//           <p className="text-lg font-semibold">{rejected}</p>
//           <p className="text-xs text-gray-700">Rejected Spaces</p>
//         </div>
//       </div>

//       {/* --- Top 3 Spaces Table --- */}
//       <div className="mt-6 bg-white p-4 rounded-xl shadow">
//         <h4 className="font-bold mb-3">Your Latest Spaces</h4>
//         {topSpaces.length === 0 ? (
//           <div className="text-gray-500 italic text-sm">No spaces registered yet.</div>
//         ) : (
//           <table className="w-full text-sm">
//             <thead>
//               <tr>
//                 <th className="p-2 border">Space Code</th>
//                 <th className="p-2 border">Name</th>
//                 <th className="p-2 border">Type</th>
//                 <th className="p-2 border">Plan</th>
//                 <th className="p-2 border">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {topSpaces.map((s) => (
//                 <tr key={s._id} className="border-t">
//                   <td className="p-2 border font-mono">{s.spaceCode}</td>
//                   <td className="p-2 border">{s.spaceName}</td>
//                   <td className="p-2 border">{s.spaceType}</td>
//                   <td className="p-2 border">
//                     <span className={s.listingType === "premium" 
//                       ? "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
//                       : "bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"}>
//                       {s.listingType === "premium" ? "Premium" : "Free"}
//                     </span>
//                   </td>
//                   <td className="p-2 border">
//                     <span className={
//                       s.status === "approved"
//                         ? "text-green-700 font-bold"
//                         : s.status === "pending"
//                         ? "text-yellow-700 font-bold"
//                         : s.status === "rejected"
//                         ? "text-red-700 font-bold"
//                         : "text-gray-500 font-bold"
//                     }>
//                       {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         <button
//           onClick={() => navigate('/my-spaces')}
//           className="mt-4 text-blue-600 underline text-xs hover:text-blue-800"
//         >View all spaces</button>
//       </div>

//       {/* --- Quick Links (Optional) --- */}
//       <div className="mt-8 flex flex-wrap gap-4">
//         <button
//           onClick={() => navigate('/my-spaces')}
//           className="bg-blue-100 px-4 py-2 rounded shadow hover:bg-blue-200 text-sm"
//         >My Spaces</button>
//         <button
//           onClick={() => navigate('/support')}
//           className="bg-green-100 px-4 py-2 rounded shadow hover:bg-green-200 text-sm"
//         >Support</button>
//         <button
//           onClick={() => navigate('/profile')}
//           className="bg-yellow-100 px-4 py-2 rounded shadow hover:bg-yellow-200 text-sm"
//         >Profile</button>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;
 
//final upr wala sahi hai 
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';

const COLORS = ['#FFD600', '#4CAF50', '#F44336']; // Pending, Approved, Rejected

function isProfileIncomplete(profile = {}) {
  // You can add more fields as needed
  return (
    !profile.profileImage ||
    !profile.panNumber ||
    !profile.accountNumber ||
    !profile.companyName
  );
}

const DashboardHome = () => {
  const [spaces, setSpaces] = useState([]);
  const [pending, setPending] = useState(0);
  const [approved, setApproved] = useState(0);
  const [rejected, setRejected] = useState(0);

  const user = useSelector((state) => state.auth.user);
  const profile = user?.spaceOwnerProfile || {};
  const lastLogin = user?.lastLogin
    ? new Date(user.lastLogin).toLocaleString()
    : 'N/A';

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axiosInstance.get('/spaces/my-spaces');
        const spaceList = res.data.spaces || res.data || [];
        setSpaces(spaceList);
        setPending(spaceList.filter((s) => s.status === 'pending').length);
        setApproved(spaceList.filter((s) => s.status === 'approved').length);
        setRejected(spaceList.filter((s) => s.status === 'rejected').length);
      } catch (err) {
        setSpaces([]);
      }
    };
    fetchDashboard();
  }, []);

  const stats = [
    { name: 'Pending', value: pending },
    { name: 'Approved', value: approved },
    { name: 'Rejected', value: rejected },
  ];

  // Dummy Quick Stats: update with real API if available
  const quickStats = [
    { label: 'Total Bookings', value: 5 },
    { label: 'Earnings (This Month)', value: '₹2,500' },
    { label: 'Avg. Approval Time', value: '2 days' },
  ];

  const profileIncomplete = isProfileIncomplete(profile);

  // Latest spaces table
  const topSpaces = spaces.slice(0, 3);

  return (
    <div>
      {/* Profile completeness warning */}
      {/* {profileIncomplete && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 border border-red-200">
          <b>Profile Incomplete:</b> Please update your profile details like Profile Photo, PAN Number, Company Name, Account Number for payouts.
        </div>
      )} */}

      <div className="flex items-center gap-4 mb-4 flex-wrap">
        {/* Profile photo */}
        {profile.profileImage && (
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-blue-400 shadow"
          />
        )}
        <div>
          <h2 className="text-2xl font-semibold mb-1">
            Welcome, {profile.fullName || user.fullName || 'User'}!
          </h2>
          <div className="text-xs text-gray-600">Last login: {lastLogin}</div>
        </div>
      </div>

      {/* Stats & Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-bold">Email</h3>
          <p>{user.email}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-bold">Current Plan</h3>
          <p className={profile.hasSubscribed ? 'text-purple-700 font-semibold' : 'text-blue-700 font-semibold'}>
            {profile.hasSubscribed ? 'Premium Listing' : 'Free Listing'}
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-bold">Total Spaces Listed</h3>
          <p>{spaces.length}</p>
        </div>
        <div className="bg-blue-400 rounded shadow flex items-center justify-center">
          <button
            onClick={() => navigate('/list-space')}
            className="font-bold text-center p-8 w-full text-white hover:bg-blue-500"
          >
            Add Space
          </button>
        </div>
      </div>

      {/* --- Quick Stats Widgets --- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {quickStats.map((s, idx) => (
          <div key={idx} className="bg-white border shadow p-4 rounded text-center">
            <div className="text-sm text-gray-500">{s.label}</div>
            <div className="text-2xl font-bold">{s.value}</div>
          </div>
        ))}
      </div>

      {/* --- Pie Chart --- */}
      <div className="mb-8 bg-white p-4 rounded-xl shadow">
        <h4 className="font-bold mb-3">Space Status Overview</h4>
        <div className="w-full" style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {stats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- Top 3 Spaces Table --- */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow">
        <h4 className="font-bold mb-3">Your Latest Spaces</h4>
        {topSpaces.length === 0 ? (
          <div className="text-gray-500 italic text-sm">No spaces registered yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="p-2 border">Space Code</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Plan</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {topSpaces.map((s, idx) => (
                <tr key={s._id} className="border-t">
                  <td className="p-2 border font-mono">{s.spaceCode}</td>
                  <td className="p-2 border">{s.spaceName}</td>
                  <td className="p-2 border">{s.spaceType}</td>
                  <td className="p-2 border">
                    <span
                      className={
                        s.listingType === 'premium'
                          ? 'bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs'
                          : 'bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs'
                      }
                    >
                      {s.listingType === 'premium' ? 'Premium' : 'Free'}
                    </span>
                  </td>
                  <td className="p-2 border">
                    <span
                      className={
                        s.status === 'approved'
                          ? 'text-green-700 font-bold'
                          : s.status === 'pending'
                          ? 'text-yellow-700 font-bold'
                          : s.status === 'rejected'
                          ? 'text-red-700 font-bold'
                          : 'text-gray-500 font-bold'
                      }
                    >
                      {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button
          onClick={() => navigate('/my-spaces')}
          className="mt-4 text-blue-600 underline text-xs hover:text-blue-800"
        >
          View all spaces
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
