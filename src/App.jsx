import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Browse from "./pages/Browse"
import Videos from "./pages/Videos"
// import ListSpace from "./pages/ListSpace"
import HowItWorks from "./pages/HowItWorks"
import ListYourSpace from "./pages/ListYourSpace"
import BlookMySpace from "./pages/modules/BlookMySpace"
import BlookForce from "./pages/modules/BlookForce"
import BlookWorks from "./pages/modules/BlookWorks"
import BlookPerks from "./pages/modules/BlookPerks"
import Pricing from "./pages/Pricing"
import BlookHeat from "./pages/modules/BlookHeat"
import Support from "./components/Support"
import SelectRole from "./pages/Auth/SelectRole"
import Signup from "./pages/Auth/Signup"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Login from "./pages/Auth/Login"
import SpaceOwnerDashboard from "./pages/space-owner/SpaceOwnerDashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import PaymentPage from "./pages/PaymentPage"
import MockPaymentPage from "./components/features/Step8Payment"
import AdminDashboard from "./pages/admin/AdminDashboard"
import SpaceDetails from "./pages/SpaceDetails"
import BookSpace from "./pages/BookSpace"
import AdvertiserDashboard from "./pages/advertiser/AdvertizerDashboard"
import Profile from "./pages/advertiser/Profile"
// import AdvertiserProfile from "./pages/advertiser/Profile"
// import SpaceOwnerModel from "../../backend/roles/space-owner/spaceOwner.model"
import EditSpace from "./pages/space-owner/EditSpaces"
import AgentDashboard from "./pages/agent/AgentDashboard"
import Dashboard from "./pages/advertiser/Dashboard"
import VendorDashboard from "./pages/Vendor/VendorDashboard"
import CampaignCreate from "./pages/advertiser/components/CampaignCreate"
import VendorJobsTable from "./pages/Vendor/components/vendorjobTable"


function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/how-it-works" element={<HowItWorks/>} />
        <Route path="/list-space" element={<ListYourSpace/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/payment-page" element={<MockPaymentPage/>} />

        <Route path="/supports" element={<Support/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/select-role" element={<SelectRole/>} />
        <Route path="/modules/blookmyspace" element={<BlookMySpace/>} />
        <Route path="/modules/blookforce" element={<BlookForce/>} />
        <Route path="/modules/blookperks" element={<BlookPerks/>} />
        <Route path="/modules/blookworks" element={<BlookWorks/>} />
        <Route path="/modules/blookheat" element={<BlookHeat/>} />
        <Route path="/edit-space/:id" element={<EditSpace/>} />

        <Route
            path="/dashboard/spaceOwner"
            element={
              <ProtectedRoute>
                <SpaceOwnerDashboard/>
              </ProtectedRoute>
            }
          />

        <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard/>
              </ProtectedRoute>
            }
          />
        <Route
            path="/dashboard/agent"
            element={
              <ProtectedRoute>
                <AgentDashboard/>
              </ProtectedRoute>
            }
          />
        <Route
            path="/space/:id"
            element={
              <ProtectedRoute>
                <SpaceDetails/>
              </ProtectedRoute>
            }
          />
        {/* <Route
            path="/book/id"
            element={
              <ProtectedRoute>
                <BookSpace/>
              </ProtectedRoute>
            }
          /> */}
          <Route
  path="/campaign/create"
  element={
    <ProtectedRoute>
      <CampaignCreate/>
    </ProtectedRoute>
  }
/>

          <Route path="/space/:id/book" element={ 
            <ProtectedRoute>
            <BookSpace />
            </ProtectedRoute>
            } />

<Route path="/payment/:orderId" element={<PaymentPage />} />

        <Route
            path="/dashboard/advertiser"
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          />
        <Route
            path="/dashboard/vendor"
            element={
              <ProtectedRoute>
                <VendorDashboard/>
              </ProtectedRoute>
            }
          />
        <Route
            path="/vendor/jobs"
            element={
              <ProtectedRoute>
                <VendorJobsTable/>
              </ProtectedRoute>
            }
          />
        <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile/>
                
              </ProtectedRoute>
            }
          />
        
      
        
      </Routes>
    </>
  )
}

export default App
