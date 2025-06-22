// src/pages/space-owner/tabs/DashboardHome.jsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import {useNavigate} from 'react-router-dom'


const DashboardHome = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  
  

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axiosInstance.get('/space-owner/dashboard');
        setUser(res.data.user);
      } catch (err) {
        console.error('Failed to load dashboard', err);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.name || 'Space Owner'}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-bold">Email</h3>
          <p>{user?.email}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-bold">Plan</h3>
          <p>{user?.subscriptionPlan}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-bold">Total Spaces Listed</h3>
          <p>{user?.spaceCount}</p>
        </div>
        <div className="bg-blue-400  rounded shadow">
          <button onClick={()=>navigate('/list-your-space')}  className="font-bold text-center p-12">Add Space</button >
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
