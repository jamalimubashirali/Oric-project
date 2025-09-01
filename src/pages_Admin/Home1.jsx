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

export default function Home() {
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

  //  const navigate=useNavigate()
   
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
    <div className="flex h-screen bg-gray-100  max-lg:mt-32 mt-14">
      {/* Combined Sidebar-Navbar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl font-bold text-gray-800"
              >
                Admin Dashboard
              </motion.h1>
              
              {/* Time Filter */}
              <div className="relative mt-3 md:mt-0">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  <span className="text-gray-700">
                    {timeFilters.find(f => f.value === timeFilter)?.label || 'Filter'}
                  </span>
                  <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 text-gray-500 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showFilterDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200"
                  >
                    {timeFilters.map(filter => (
                      <button
                        key={filter.value}
                        onClick={() => {
                          setTimeFilter(filter.value);
                          setShowFilterDropdown(false);
                        }}
                        className={`block w-full text-left px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm ${timeFilter === filter.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Stats Cards */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-sm h-28 sm:h-32 animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8">
                <StatCard
                  icon={<Users className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Total Users"
                  value={stats.totalUsers}
                  trend="up"
                  percentage="12%"
                  color="blue"
                />
                {/* <StatCard
                  icon={<FileText className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Total Articles"
                  value={stats.totalArticles}
                  trend="up"
                  percentage="8%"
                  color="indigo"
                /> */}
                {/* <StatCard
                  icon={<CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Accepted Articles"
                  value={stats.acceptedArticles}
                  trend="up"
                  percentage="5%"
                  color="green"
                /> */}
                {/* <StatCard
                  icon={<Clock className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Pending Articles"
                  value={stats.pendingArticles}
                  trend="down"
                  percentage="3%"
                  color="yellow"
                /> */}
                <StatCard
                  icon={<Users className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Approved Users"
                  value={stats.approvedUsers}
                  trend="up"
                  percentage="15%"
                  color="teal"
                />
                <StatCard
                  icon={<XCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Pending Users"
                  value={stats.pendingUsers}
                  trend="down"
                  percentage="7%"
                  color="red"
                />
              </div>
            )}

            {/* Charts Section */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">User Registration Trends</h3>
                <div className="h-48 sm:h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 text-sm sm:text-base">
                  [Chart Placeholder - Users Over Time]
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Article Submission Trends</h3>
                <div className="h-48 sm:h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 text-sm sm:text-base">
                  [Chart Placeholder - Articles Over Time]
                </div>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
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