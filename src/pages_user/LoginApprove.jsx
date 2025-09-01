import React, { useEffect, useState } from "react";
import axios from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaUser, FaEnvelope, FaPhone, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar"; // Your combined sidebar-navbar component

const LoginApprove = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar state

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = () => {
        setLoading(true);
        axios
            .get("/api/admin/Register-requests")
            .then((res) => {
                setRequests(res.data.Total_pending || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to load requests");
                setLoading(false);
            });
    };

    const handleApprove = (id) => {
        axios
            .post(`/api/admin/Register-approve/${id}`)
            .then((res) => {
                toast.success("✅ " + res.data.message, { autoClose: 3000 });
                setRequests((prev) => prev.filter((r) => r._id !== id));
            })
            .catch((err) => {
                console.error(err);
                toast.error("Approval failed");
            });
    };

    const handleReject = (id) => {
        axios
            .post(`/api/admin/reject/${id}`)
            .then((res) => {
                toast.error("❌ " + res.data.message, { autoClose: 3000 });
                setRequests((prev) => prev.filter((r) => r._id !== id));
            })
            .catch((err) => {
                console.error(err);
                toast.error("Rejection failed");
            });
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden mt-10">
            {/* Combined Sidebar-Navbar */}
            <Sidebar 
                isOpen={sidebarOpen} 
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
                    <motion.div
                        className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
                            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                <FaUser className="inline" /> Teacher Approval Requests
                            </h1>
                            <p className="text-sm md:text-base opacity-90">
                                Review and approve new teacher registration requests
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-4 md:p-6">
                            {loading ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            ) : requests.length === 0 ? (
                                <div className="text-center py-8">
                                    <div className="text-5xl mb-4">🎉</div>
                                    <h3 className="text-xl font-medium text-gray-700">No pending requests!</h3>
                                    <p className="text-gray-500">All requests have been processed</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <FaUser className="inline mr-1" /> Name
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <FaEnvelope className="inline mr-1" /> Email
                                                </th>
                                                <th className="hidden sm:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <FaPhone className="inline mr-1" /> Phone
                                                </th>
                                                <th className="hidden md:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <FaUniversity className="inline mr-1" /> Department
                                                </th>
                                                <th className="hidden lg:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <FaCalendarAlt className="inline mr-1" /> Date
                                                </th>
                                                <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {requests.map((request) => (
                                                <motion.tr
                                                    key={request._id}
                                                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                                                    className="transition-colors"
                                                >
                                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {request.username}
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {request.email}
                                                    </td>
                                                    <td className="hidden sm:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {request.number}
                                                    </td>
                                                    <td className="hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {request.department}
                                                    </td>
                                                    <td className="hidden lg:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {new Date(request.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <div className="flex justify-end space-x-2">
                                                            <button
                                                                onClick={() => handleApprove(request._id)}
                                                                className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 border border-transparent text-xs sm:text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                                                            >
                                                                <FaCheckCircle className="mr-1" /> Approve
                                                            </button>
                                                            <button
                                                                onClick={() => handleReject(request._id)}
                                                                className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 border border-transparent text-xs sm:text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                                                            >
                                                                <FaTimesCircle className="mr-1" /> Reject
                                                            </button>
                                                        </div>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Toast Notifications - Positioned within the dashboard */}
                    <ToastContainer 
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </main>
            </div>
        </div>
    );
};

export default LoginApprove;