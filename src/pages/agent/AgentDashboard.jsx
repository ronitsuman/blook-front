// import React, { useState } from "react";
// // ... import AgentOverviewWidget, AgentReferralsTable, AgentCommissionTab, AgentProfileTab, AgentSupportTab

// const NAV_ITEMS = [
//   { label: "Overview", key: "overview" },
//   { label: "Referrals", key: "referrals" },
//   { label: "Commissions", key: "commissions" },
//   { label: "Profile", key: "profile" },
//   { label: "Support", key: "support" },
// ];

// export default function AgentDashboard() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Sidebar content
//   const Sidebar = (
//     <aside className="w-56 bg-gradient-to-b from-purple-700 to-blue-600 text-white flex flex-col shadow-2xl min-h-screen">
//       <div className="p-6 text-2xl font-extrabold tracking-wide mb-6">BlookMySpace</div>
//       <nav className="flex-1 space-y-2">
//         {NAV_ITEMS.map((item) => (
//           <button
//             key={item.key}
//             className={`w-full text-left px-5 py-3 rounded-lg text-lg font-semibold transition-all
//               ${activeTab === item.key ? "bg-white/20 shadow-md" : "hover:bg-white/10"}
//             `}
//             onClick={() => {
//               setActiveTab(item.key);
//               setSidebarOpen(false);
//             }}
//           >
//             {item.label}
//           </button>
//         ))}
//       </nav>
//       <div className="p-6 text-xs opacity-60 mt-auto hidden md:block">© 2024 BlookMySpace</div>
//     </aside>
//   );

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100">
//       {/* Sidebar (desktop) */}
//       <div className="hidden md:block">{Sidebar}</div>

//       {/* Sidebar (mobile: slide-in) */}
//       <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setSidebarOpen(false)}></div>
//         <div className="relative w-56 min-h-screen">{Sidebar}</div>
//       </div>

//       {/* Mobile topbar */}
//       <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white flex items-center shadow-lg px-3 py-3">
//         <button
//           className="mr-3 focus:outline-none"
//           onClick={() => setSidebarOpen(true)}
//           aria-label="Open sidebar"
//         >
//           {/* Hamburger */}
//           <svg className="h-7 w-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//         <span className="text-lg font-extrabold tracking-wide text-purple-700">BlookMySpace</span>
//       </div>

//       {/* Main content */}
//       <main className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 w-full mt-14 md:mt-0">
//         {/* Tab Content */}
//         {/* {activeTab === "overview" && <AgentOverviewWidget />} */}
//         {/* {activeTab === "referrals" && <AgentReferralsTable />} */}
//         {/* {activeTab === "commissions" && <AgentCommissionTab />} */}
//         {/* {activeTab === "profile" && <AgentProfileTab />} */}
//         {/* {activeTab === "support" && <AgentSupportTab />} */}
//       </main>
//     </div>
//   );
// }



import React, { useState } from "react";
import AgentOverviewWidget from "./components/AgentOverviewWidget";
import AgentSpacesTable from "./components/AgentSpacesTable";
import AgentEarningsTab from "./components/AgentEarningTab";
import AgentProfileTab from "./components/AgentProfileTab";
import AgentSupportTab from "./components/AgentSupportTab";
import AgentNotificationsTab from "./components/AgentNotificationsTab";
// import AgentOverviewWidget from "../components/AgentOverviewWidget";
// import AgentSpacesTable from "../components/AgentSpacesTable";
// import AgentEarningsTab from "../components/AgentEarningsTab";
// import AgentProfileTab from "../components/AgentProfileTab";
// import AgentSupportTab from "../components/AgentSupportTab";
// import AgentNotificationsTab from "../components/AgentNotificationsTab";

const NAV_ITEMS = [
  { label: "Overview", key: "overview" },
  { label: "Spaces", key: "spaces" },
  { label: "Earnings", key: "earnings" },
  { label: "Profile", key: "profile" },
  { label: "Support", key: "support" },
  { label: "Notifications", key: "notifications" },
];

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar content
  const Sidebar = (
    <aside className="w-56 bg-gradient-to-b from-blue-800 to-purple-700 text-white flex flex-col shadow-2xl min-h-screen">
      <div className="p-6 text-2xl font-extrabold tracking-wide mb-6">BlookForce</div>
      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            className={`w-full text-left px-5 py-3 rounded-lg text-lg font-semibold transition-all
              ${activeTab === item.key ? "bg-white/20 shadow-md" : "hover:bg-white/10"}
            `}
            onClick={() => {
              setActiveTab(item.key);
              setSidebarOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-6 text-xs opacity-60 mt-auto hidden md:block">© 2024 BlookMySpace</div>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Sidebar (desktop) */}
      <div className="hidden md:block">{Sidebar}</div>

      {/* Sidebar (mobile: slide-in) */}
      <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative w-56 min-h-screen">{Sidebar}</div>
      </div>

      {/* Mobile topbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white flex items-center shadow-lg px-3 py-3">
        <button
          className="mr-3 focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          {/* Hamburger */}
          <svg className="h-7 w-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-lg font-extrabold tracking-wide text-blue-800">BlookForce</span>
      </div>

      {/* Main content (responsive padding, margin-top on mobile for fixed topbar) */}
      <main className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 w-full mt-14 md:mt-0">
        {/* Tab Content */}
        {activeTab === "overview" && <div>
          {/* <AgentOverviewWidget /> */}
          <h1 className="text-2xl font-bold mb-6">Agent Dashboard Overview</h1>
          <AgentOverviewWidget/>
        </div>}
        {activeTab === "spaces" && <AgentSpacesTable/>}
        {activeTab === "earnings" && <AgentEarningsTab/>}
        {activeTab === "profile" && <AgentProfileTab/>}
        {activeTab === "support" && <AgentSupportTab/>}
        {activeTab === "notifications" && <AgentNotificationsTab/>}
      </main>
    </div>
  );
}
