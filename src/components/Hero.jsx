// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="bg-blue-50 border-b border-blue-200 text-blue-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">BlookMySpace</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#features" className="hover:text-blue-600">Flow</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
  