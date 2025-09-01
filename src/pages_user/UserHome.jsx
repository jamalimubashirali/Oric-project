import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import Sidebar from '../components/Sidebar'; // Your existing combined sidebar-navbar component
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  XCircle,
  Calendar,
  ChevronDown,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function UserHome() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalArticles: 0,
    acceptedArticles: 0,
    pendingArticles: 0,
    approvedUsers: 0,
    pendingUsers: 0
  });
  
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Closed by default on mobile
  const user = JSON.parse(localStorage.getItem('user'));

  const timeFilters = [
    { value: 'all', label: 'All Time' },
    { value: 'year', label: 'This Year' },
    { value: 'month', label: 'This Month' },
    { value: 'week', label: 'This Week' },
    { value: 'day', label: 'Today' }
  ];

  useEffect(() => {
    fetchData();
  }, [timeFilter]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const usersRes = await axios.get("/api/auth/getStudents", {
        params: { timeframe: timeFilter }
      });
      
      const articlesRes = await axios.get("/api/admin/requests", {
        params: { timeframe: timeFilter }
      });

      setStats({
        totalUsers: usersRes.data.Total_Users?.length || 0,
        approvedUsers: usersRes.data.Total_approved_Users?.length || 0,
        pendingUsers: usersRes.data.Total_pending_Users?.length || 0,
        totalArticles: articlesRes.data.Total?.length || 0,
        acceptedArticles: articlesRes.data.Total_accepted?.length || 0,
        pendingArticles: articlesRes.data.Total_pending?.length || 0
      });
      
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Combined Sidebar-Navbar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content Area */}
      {/* <div className="flex-1 flex flex-col overflow-hidden"> */}
        {/* Dashboard Content */}
        {/* <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50"> */}
          <div className='flex w-full justify-center items-center text-3xl'>
            welcome <br/>
            {
              user.username
            }
          </div>
        {/* </main> */}
      </div>
    // </div>
  );
}

const StatCard = ({ icon, title, value, trend, percentage, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    teal: 'bg-teal-50 text-teal-600',
    red: 'bg-red-50 text-red-600',
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 transition-all`}
    >
      <div className="flex justify-between items-start">
        <div className={`p-2 sm:p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="text-right">
          <span className={`inline-flex items-center text-xs sm:text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? (
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            ) : (
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 transform rotate-180" />
            )}
            {percentage}
          </span>
        </div>
      </div>
      <h3 className="text-gray-500 text-xs sm:text-sm font-medium mt-3 sm:mt-4">{title}</h3>
      <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </motion.div>
  );
};