// import { useAuth } from "../context/AuthContext"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { useState, useEffect } from "react"
// import { Link, useNavigate, useLocation } from "react-router-dom"
// import { useSelector } from "react-redux"

// export default function Navbar() {
//   const { isAuthenticated, user, token } = useSelector((state) => state.auth)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [moduleOpen, setModuleOpen] = useState(false)
//   const navigate = useNavigate()
//   const location = useLocation()

//   useEffect(() => {
//     setMobileOpen(false) // Close mobile menu on route change
//   }, [location.pathname])

//   const publicLinks = [
//     { name: "Home", href: "/" },
//     { name: "How It Works", href: "/how-it-works" },
//     { name: "Browse Spaces", href: "/browse" },
//     { name: "List Your Space", href: "/list-space" },
//     { name: "Videos", href: "/videos" },
//     { name: "About Us", href: "/about" },
//     { name: "Pricing", href: "/pricing" },
//     { name: "Supports", href: "/supports" },
//   ]

//   const modules = [
//     { name: "BlookMySpace", href: "/modules/blookmyspace" },
//     { name: "BlookForce", href: "/modules/blookforce" },
//     { name: "BlookWorks", href: "/modules/blookworks" },
//     { name: "BlookPerks", href: "/modules/blookperks" },
//     { name: "BlookHeat", href: "/modules/blookheat" },
//   ]

//   const roleLinks = {
//     admin: [
//       { name: "Dashboard", href: "/dashboard/admin" },
//       { name: "Users", href: "#" },
//       { name: "Disputes", href: "#" },
//       { name: "Reports", href: "#" },
//     ],
//     'space-owner': [
//       { name: "Dashboard", href: "/dashboard/space-owner" },
//       { name: "My Spaces", href: "#" },
//       { name: "Bookings", href: "#" },
//       { name: "Earnings", href: "#" },
//     ],
//     advertiser: [
//       { name: "Dashboard", href: "/dashboard/advertiser" },
//       { name: "Search Spaces", href: "#" },
//       { name: "My Campaigns", href: "#" },
//       { name: "Payments", href: "#" },
//     ],
//     vendor: [
//       { name: "Dashboard", href: "/dashboard/vendor" },
//       { name: "RFQs", href: "#" },
//       { name: "Active Jobs", href: "#" },
//       { name: "Payouts", href: "#" },
//     ],
//     agent: [
//       { name: "Dashboard", href: "/dashboard/agent" },
//       { name: "Add Visit", href: "#" },
//       { name: "Leads", href: "#" },
//       { name: "My Earnings", href: "#" },
//     ],
//   }

//   const navItems = user
//     ? roleLinks[user.role] || []
//     : publicLinks

//   return (
//     <nav className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/" >
//           <h1 className="text-xl font-bold text-blue-700">BLookMySpace</h1>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 items-center relative">
//           {navItems.map((link, i) => (
//             <Link key={i} to={link.href} className="text-blue-800 hover:text-blue-600 text-sm font-medium">
//               {link.name}
//             </Link>
//           ))}

//           {/* Modules Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setModuleOpen(true)}
//             onMouseLeave={() => setModuleOpen(false)}
//           >
//             <button className="text-sm font-medium text-blue-800 hover:text-blue-600 flex items-center gap-2">
//               Modules <ChevronDown className="w-4 h-4" />
//             </button>
//             {moduleOpen && (
//               <div className={`absolute bg-white border shadow-md rounded mt-[-4] w-48 z-50 transition-all duration-150 group-hover:block ${moduleOpen ? 'block' : 'hidden'}`}>
//                 {modules.map((mod, i) => (
//                   <Link
//                     key={i}
//                     to={mod.href}
//                     className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50"
//                   >
//                     {mod.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Auth Buttons */}
//           {user ? (
//             <>
//               <span className="text-blue-600 font-semibold text-sm">Hi, {user.name}</span>
//               <button
//                 onClick={logout}
//                 className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 onClick={() => navigate('/login')}
//                 className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/select-role')}
//                 className="text-sm px-4 py-2 bg-blue-600 text-white rounded"
//               >
//                 Sign Up
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-blue-800">
//           {mobileOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white border-t border-blue-100 px-4 py-4 space-y-3">
//           {[...navItems, ...modules].map((link, i) => (
//             <Link key={i} to={link.href} className="block text-blue-800 font-medium">
//               {link.name}
//             </Link>
//           ))}
//           {user ? (
//             <>
//               <span className="block text-sm text-blue-600">Hi, {user.name}</span>
//               <button
//                 onClick={logout}
//                 className="text-sm w-full py-2 border border-blue-600 text-blue-600 rounded"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 onClick={() => navigate('/login')}
//                 className="w-full text-sm py-2 border border-blue-600 text-blue-600 rounded"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate('/select-role')}
//                 className="w-full text-sm py-2 bg-blue-600 text-white rounded"
//               >
//                 Sign Up
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   )
// }







import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../redux/slices/authSlice"

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moduleOpen, setModuleOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Browse Spaces", href: "/browse" },
    { name: "List Your Space", href: "/list-space" },
    { name: "Videos", href: "/videos" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Supports", href: "/supports" },
  ]

  const modules = [
    { name: "BlookMySpace", href: "/modules/blookmyspace" },
    { name: "BlookForce", href: "/modules/blookforce" },
    { name: "BlookWorks", href: "/modules/blookworks" },
    { name: "BlookPerks", href: "/modules/blookperks" },
    { name: "BlookHeat", href: "/modules/blookheat" },
  ]

  const roleLinks = {
    admin: [
      { name: "Dashboard", href: "/dashboard/admin" },
      { name: "Users", href: "#" },
      { name: "Disputes", href: "#" },
      { name: "Reports", href: "#" },
      { name: "Browse Spaces", href: "/browse" },
    ],
    spaceOwner: [
      { name: "Dashboard", href: "/dashboard/space-owner" },
      { name: "My Spaces", href: "#" },
      { name: "Bookings", href: "#" },
      { name: "Earnings", href: "#" },
      { name: "Browse Spaces", href: "/browse" },
    ],
    advertiser: [
      { name: "Dashboard", href: "/dashboard/advertiser" },
      { name: "Search Spaces", href: "#" },
      { name: "My Campaigns", href: "#" },
      { name: "Payments", href: "#" },
      { name: "Browse Spaces", href: "/browse" },
      { name: "Profile", href: "/profile" },
    ],
    vendor: [
      { name: "Dashboard", href: "/dashboard/vendor" },
      { name: "RFQs", href: "#" },
      { name: "Active Jobs", href: "#" },
      { name: "Payouts", href: "#" },
      { name: "Browse Spaces", href: "/browse" },
    ],
    agent: [
      { name: "Dashboard", href: "/dashboard/agent" },
      { name: "Add Visit", href: "#" },
      { name: "Leads", href: "#" },
      { name: "My Earnings", href: "#" },
      { name: "Browse Spaces", href: "/browse" },
    ],
  }

  const navItems = user ? roleLinks[user.role] || [] : publicLinks

  return (
    <nav className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          {/* <h1 className="text-xl font-bold text-blue-700">BLookMySpace</h1> */}
          <img src="logo.png" width={150} height={50} className="mx-auto"  alt="" />

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center relative">
          {navItems.map((link, i) => (
            <Link key={i} to={link.href} className="text-blue-800 hover:text-blue-600 text-sm font-medium">
              {link.name}
            </Link>
          ))}

          {/* Modules Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setModuleOpen(true)}
            onMouseLeave={() => setModuleOpen(false)}
          >
            <button className="text-sm font-medium text-blue-800 hover:text-blue-600 flex items-center gap-2">
              Modules <ChevronDown className="w-4 h-4" />
            </button>
            {moduleOpen && (
              <div className="absolute bg-white border shadow-md rounded mt-[-4] w-48 z-50 transition-all duration-150">
                {modules.map((mod, i) => (
                  <Link
                    key={i}
                    to={mod.href}
                    className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50"
                  >
                    {mod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <>
              <span className="text-blue-600 font-semibold text-sm">Hi, {user?.name || 'User'}</span>
              <button
                onClick={handleLogout}
                className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/select-role')}
                className="text-sm px-4 py-2 bg-blue-600 text-white rounded"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-blue-800">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 py-4 space-y-3">
          {[...navItems, ...modules].map((link, i) => (
            <Link key={i} to={link.href} className="block text-blue-800 font-medium">
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <>
              <span className="block text-sm text-blue-600">Hi, {user?.name || 'User'}</span>
              <button
                onClick={handleLogout}
                className="text-sm w-full py-2 border border-blue-600 text-blue-600 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="w-full text-sm py-2 border border-blue-600 text-blue-600 rounded"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/select-role')}
                className="w-full text-sm py-2 bg-blue-600 text-white rounded"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
