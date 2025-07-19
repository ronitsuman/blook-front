// src/pages/advertiser/components/Sidebar.jsx
export default function Sidebar({ activeTab, setActiveTab, tabs }) {
    return (
      <aside className="w-60 bg-white/90 shadow-xl min-h-screen flex flex-col">
        <div className="p-6 border-b font-bold text-xl text-blue-800 tracking-wide">Advertiser Panel</div>
        <nav className="flex-1 py-6">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`block w-full text-left px-6 py-3 font-medium text-blue-700 hover:bg-blue-100 rounded-r-xl transition
                ${activeTab === tab.key ? "bg-blue-50 font-bold" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>
    )
  }
  