// // src/pages/admin/AdminDashboard.jsx
// import { useState } from 'react';
// import Sidebar from './Sidebar';
// import PendingSpaces from './tabs/PendingSpaces';
// import EditedSpaces from './tabs/EditedSpaces';
// import DeletedSpaces from './tabs/DeletedSpaces';
// import CampaignApprovals from './tabs/CampaignApprovals';
// import BlookforceAgents from './tabs/BlookforceAgents';
// import Vendors from './tabs/Vendors';

// const tabs = [
//   'Pending Spaces',
//   'Edited Spaces',
//   'Deleted by Agent',
//   'Pending Campaigns',
//   'Blookforce Agents',
//   'Pending Vendors',
// ];

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('Pending Spaces');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Pending Spaces':
//         return <PendingSpaces />;
//       case 'Edited Spaces':
//         return <EditedSpaces />;
//       case 'Deleted by Agent':
//         return <DeletedSpaces />;
//       case 'Pending Campaigns':
//         return <CampaignApprovals />;
//       case 'Blookforce Agents':
//         return <BlookforceAgents />;
//       case 'Pending Vendors':
//         return <Vendors />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-blue-700 to-blue-400">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
//       <main className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-3xl font-bold text-white mb-6">Admin Dashboard</h1>
//         <div className="bg-white rounded-xl p-6 shadow-xl animate-fade-in">
//           {renderContent()}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// src/pages/admin/AdminDashboard.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import PendingSpaces from './tabs/PendingSpaces';
import EditedSpaces from './tabs/EditiedSpaces';
import DeletedSpaces from './tabs/DeletedSpaces';
import CampaignApprovals from './tabs/CampaignApprovals';
import BlookforceAgents from './tabs/BlookforceAgents';
import Vendors from './tabs/Vendors';
import AdvertiserApprovals from './tabs/AdvertiserApprovals';
import AdminCustomRequirementsPanel from './tabs/CustomRequirmentPaannel';
import AdminJobsTable from './tabs/AdminJobsTable';

const tabs = [
  'Pending Spaces',
  'Edited Spaces',
  'Deleted by Agent',
  'Pending Campaigns',
  'Blookforce Agents',
  'Pending Vendors',
  'Advertiser Approvals',
  'Custom Requirments',
  'Vendor Jobs Table'
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Pending Spaces');

  const renderContent = () => {
    switch (activeTab) {
      case 'Pending Spaces':
        return <PendingSpaces />;
      case 'Edited Spaces':
        return <EditedSpaces />;
      case 'Deleted by Agent':
        return <DeletedSpaces />;
      case 'Pending Campaigns':
        return <CampaignApprovals />;
      case 'Blookforce Agents':
        return <BlookforceAgents />;
      case 'Pending Vendors':
        return <Vendors />;
      case 'Advertiser Approvals':
        return <AdvertiserApprovals/>;
      case 'Vendor Jobs Table':
        return <AdminJobsTable/>;
      case 'Custom Requirments':
        return <AdminCustomRequirementsPanel/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-700 to-blue-400">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Admin Dashboard</h1>
        <div className="bg-white rounded-xl p-6 shadow-xl animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;