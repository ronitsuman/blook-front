// src/pages/space-owner/Sidebar.jsx
const Sidebar = ({ activeTab, setActiveTab, tabs }) => {
    return (
      <aside className="w-64 bg-white shadow-xl h-full">
        <div className="p-6 text-xl font-bold border-b">Owner Panel</div>
        <nav className="flex flex-col p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;