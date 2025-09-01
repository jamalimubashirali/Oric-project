import React, { useEffect, useState } from 'react';
import axios from '../services/api';

import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  XCircle,
  Filter,
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
      
      // Fetch user data
      const usersRes = await axios.get("/api/auth/getStudents", {
        params: { timeframe: timeFilter }
      });
      
      // Fetch article data
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
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-800"
        >
          Admin Dashboard
        </motion.h1>
        
        {/* Time Filter */}
        <div className="relative mt-4 md:mt-0">
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Calendar className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700">
              {timeFilters.find(f => f.value === timeFilter)?.label || 'Filter'}
            </span>
            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showFilterDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200"
            >
              {timeFilters.map(filter => (
                <button
                  key={filter.value}
                  onClick={() => {
                    setTimeFilter(filter.value);
                    setShowFilterDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${timeFilter === filter.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm h-32 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Users className="h-6 w-6" />}
            title="Total Users"
            value={stats.totalUsers}
            trend="up"
            percentage="12%"
            color="blue"
          />
          <StatCard
            icon={<FileText className="h-6 w-6" />}
            title="Total Articles"
            value={stats.totalArticles}
            trend="up"
            percentage="8%"
            color="indigo"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6" />}
            title="Accepted Articles"
            value={stats.acceptedArticles}
            trend="up"
            percentage="5%"
            color="green"
          />
          <StatCard
            icon={<Clock className="h-6 w-6" />}
            title="Pending Articles"
            value={stats.pendingArticles}
            trend="down"
            percentage="3%"
            color="yellow"
          />
          <StatCard
            icon={<Users className="h-6 w-6" />}
            title="Approved Users"
            value={stats.approvedUsers}
            trend="up"
            percentage="15%"
            color="teal"
          />
          <StatCard
            icon={<XCircle className="h-6 w-6" />}
            title="Pending Users"
            value={stats.pendingUsers}
            trend="down"
            percentage="7%"
            color="red"
          />
        </div>
      )}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">User Registration Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            [Chart Placeholder - Users Over Time]
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Article Submission Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            [Chart Placeholder - Articles Over Time]
          </div>
        </div>
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
      whileHover={{ y: -5 }}
      className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all`}
    >
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="text-right">
          <span className={`inline-flex items-center text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />
            )}
            {percentage}
          </span>
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mt-4">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </motion.div>
  );
};

// const RecentOrders= () => (
//   <div className="bg-white p-6 rounded-lg shadow-md">
//     <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
//     <div className="space-y-4">
//       {[1, 2, 3].map((order) => (
//         <div key={order} className="flex items-center justify-between border-b pb-4">
//           <div>
//             <p className="font-medium">Order #{order}23456</p>
//             <p className="text-sm text-gray-500">2 items • $199.99</p>
//           </div>
//           <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
//             Completed
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const TopSellers = ({data}) => (
//   <div className="bg-white p-6 rounded-lg shadow-md">
//     <h2 className="text-xl font-semibold mb-4">Top Sellers</h2>
//     <div className="space-y-4">
//       {data?.map((seller) => (
//         <div key={seller._id} className="flex items-center space-x-4 border-b pb-4">
//           <img
//             src={seller?.profilePic}
//             alt={`Seller ${seller}`}
//             className="w-10 h-10 rounded-full"
//           />
//           <div className="flex-1">
//             <p className="font-medium"> {seller.username.charAt(0).toUpperCase() + seller.username.slice(1)}</p>
//             <p className="text-sm text-gray-500"> ${seller.sellersorders.reduce((total, item) => total + item.totalAmount, 0)} sales</p>
//           </div>
//           <span className="text-sm font-medium text-blue-600">View</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );