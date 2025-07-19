import React, { useState } from "react";
import VendorOverviewWidget from "../Vendor/components/VendorOverviewWidget";
import VendorJobsTable from "./components/VendorJobsTable";
import VendorQuotesTable from "./components/VendorQuotesTable";
import VendorPaymentsTab from "./components/VendorPaymentTab";
import VendorProfileTab from "./components/VendotProfileTab";
import VendorSupportTab from "./components/VendorSupportTab";
import VendorBidCampaignsTab from "./components/VendorBidCampaignsTab";
// import VendorJobsTable from "../components/VendorJobsTable"; // Next step
// import VendorQuotesTable from "../components/VendorQuotesTable"; // Next step
// import VendorPaymentsTab from "../components/VendorPaymentsTab"; // Next step
// import VendorProfileTab from "../components/VendorProfileTab"; // Next step
// import VendorSupportTab from "../components/VendorSupportTab"; // Next step

const NAV_ITEMS = [
  { label: "Overview", key: "overview" },
  { label: "Jobs", key: "jobs" },
  { label: "Quotes", key: "quotes" },
  { label: "Payments", key: "payments" },
  { label: "Profile", key: "profile" },
  { label: "Support", key: "support" },
  { label: "bid-campaigns", key: "bid" }, 
];

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar content
  const Sidebar = (
    <aside className="w-56 bg-gradient-to-b from-blue-700 to-purple-600 text-white flex flex-col shadow-2xl min-h-screen">
      <div className="p-6 text-2xl font-extrabold tracking-wide mb-6">BlookMySpace</div>
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
          <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-lg font-extrabold tracking-wide text-blue-700">BlookMySpace</span>
      </div>

      {/* Main content (responsive padding, margin-top on mobile for fixed topbar) */}
      <main className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 w-full mt-14 md:mt-0">
        {/* Tab Content */}
        {activeTab === "overview" && <VendorOverviewWidget />}
        {activeTab === "jobs" && <VendorJobsTable/>}
        {activeTab === "quotes" && <VendorQuotesTable/>}
        {activeTab === "payments" && <VendorPaymentsTab/>}
        {activeTab === "profile" && <VendorProfileTab/>}
        {activeTab === "support" && <VendorSupportTab/>}
        {activeTab === "bid-campaigns" && <VendorBidCampaignsTab/>}

      </main>
    </div>
  );
}
