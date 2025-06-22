// src/pages/admin/Sidebar.jsx
import { Home, FileText, Users, Briefcase, BarChart, MessageCircle } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 space-y-6 shadow-lg">
      <div className="text-2xl font-bold mb-8">BlookMySpace Admin</div>
      <nav className="space-y-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-700 ${
              activeTab === tab ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            <span className="mr-3">{getIcon(tab)}</span>
            {tab}
          </button>
        ))}
      </nav>
    </aside>
  );
};

const getIcon = (tab) => {
  switch (tab) {
    case 'Pending Spaces':
    case 'Edited Spaces':
    case 'Deleted by Agent':
      return <FileText size={18} />;
    case 'Pending Campaigns':
      return <Briefcase size={18} />;
    case 'Blookforce Agents':
      return <Users size={18} />;
    case 'Pending Vendors':
      return <MessageCircle size={18} />;
    default:
      return <Home size={18} />;
  }
};

export default Sidebar;
