// src/pages/advertiser/Dashboard.jsx
import { useState } from "react"
import Sidebar from "./components/Sidebar"
import QuickStatsWidget from "./components/QuickStaatsWidget"
import CampaignsTable from "./components/CampaignTable"
import QuotesTable from "./components/QuotesTable"
import PaymentsTable from "./components/PaymentTable"
import RewardsSection from "./components/RewardsSection"
import ProfileCard from "./components/ProfileCard"
import SupportWidget from "./components/SupportWidget"
import AdvertiserQuotesTab from "./components/AdvertiserQuoteTab"
import AdvertiserRewardsTab from "./components/RewardsSection"
import AdvertiserNotificationsTab from "./components/AdvertiserNotificationTab"
import AdvertiserProfileTab from "./components/ProfileCard"
import AdvertiserSupportTab from "./components/SupportWidget"
import AdvertiserBookingsTab from "./components/AdvertiserBookingsTab"

const TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "campaigns", label: "My Campaigns" },
  { key: "bookings", label: "My Bookings" }, 
  { key: "quotes", label: "Quotes" },
  { key: "payments", label: "Payments" },
  { key: "rewards", label: "Rewards" },
  { key: "profile", label: "Profile" },
  { key: "support", label: "Support" },
  { key: "notification", label: "notification" },
]

export default function AdvertiserDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "dashboard" && <QuickStatsWidget />}
        {activeTab === "campaigns" && <CampaignsTable />}
        {activeTab === "bookings" && <AdvertiserBookingsTab/>}
        {activeTab === "quotes" && <AdvertiserQuotesTab/>}
        {activeTab === "payments" && <PaymentsTable/>}
        {activeTab === "rewards" && <AdvertiserRewardsTab/>}
        {activeTab === "profile" && <AdvertiserProfileTab/>}
        {activeTab === "support" && <AdvertiserSupportTab/>}
        {activeTab === "notification" && <AdvertiserNotificationsTab/>}
      </main>
    </div>
  )
}
