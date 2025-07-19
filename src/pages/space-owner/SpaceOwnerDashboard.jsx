// // src/pages/space-owner/SpaceOwnerDashboard.jsx
// import { useState } from 'react';
// import Sidebar from './Sidebar';
// import DashboardHome from './tabs/DashboardHome';
// import MySpaces from './tabs/MySpaces';
// import RegisterSpace from './tabs/';
// import Bookings from './tabs/Bookings';

// const tabs = [
//   'Dashboard',
//   'My Spaces',
//   'Register Space',
//   'Bookings'
// ];

// const SpaceOwnerDashboard = () => {
//   const [activeTab, setActiveTab] = useState('Dashboard');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Dashboard':
//         return <DashboardHome />;
//       case 'My Spaces':
//         return <MySpaces />;
//       case 'Register Space':
//         return <RegisterSpace />;
//       case 'Bookings':
//         return <Bookings />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-blue-800 to-blue-400">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
//       <main className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-3xl font-bold text-white mb-6">Space Owner Dashboard</h1>
//         <div className="bg-white rounded-xl p-6 shadow-xl animate-fade-in">
//           {renderContent()}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SpaceOwnerDashboard;

// src/pages/space-owner/SpaceOwnerDashboard.jsx
import { useState } from 'react';
import DashboardHome from './tabs/DashboardHome';
import MySpaces from './tabs/MySpaces';
// import EditSpace from './tabs/EditSpace';
import Bookings from './tabs/Bookings';
import Vendors from './tabs/Vendor';
import Advertisers from './tabs/Advertisers';
import AnalyticsEarnings from './tabs/AnalyticsEarnings';
import Support from './tabs/Supports';
import ProfileSection from './tabs/ProfileSection';

const TABS = [
  'Dashboard',
  'My Spaces',
  'Bookings',
  'Vendors',
  'Advertisers',
  'Analytics & Earnings',
  'Support',
  'Profile'
];

const SpaceOwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardHome />;
      case 'My Spaces':
        return <MySpaces />;
      case 'Bookings':
        return <Bookings />;
      case 'Vendors':
        return <Vendors />;
      case 'Advertisers':
        return <Advertisers />;
      case 'Analytics & Earnings':
        return <AnalyticsEarnings />;
      case 'Support':
        return <Support />;
      case 'Profile':
        return < ProfileSection/>;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gradient-to-b from-blue-700 to-blue-500 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Space Owner</h2>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`block w-full text-left px-3 py-2 rounded ${
              activeTab === tab ? 'bg-white text-blue-700 font-semibold' : 'hover:bg-blue-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default SpaceOwnerDashboard;