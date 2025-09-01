import React, { useEffect, useState } from "react";
import axios from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const TeacherDashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin/requests")
      .then((res) => setRequests(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleApprove = (id) => {
    axios
      .post(`/api/admin/approve/${id}`)
      .then((res) => {
        toast.success("✅ " + res.data.message, { autoClose: 3000 });
        setRequests((prev) => prev.filter((r) => r._id !== id));
      })
      .catch((err) => console.error(err));
  };

  const handleReject = (id) => {
    axios
      .post(`/api/admin/reject/${id}`)
      .then((res) => {
        toast.error("❌ " + res.data.message, { autoClose: 3000 });
        setRequests((prev) => prev.filter((r) => r._id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex justify-center items-center">
      <motion.div
        className="w-full max-w-3xl bg-[#0f172a] text-white shadow-2xl rounded-xl p-8 border border-cyan-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">
          👨‍🏫 Teacher Dashboard
        </h1>

        <h2 className="text-xl font-semibold text-cyan-300 mb-4">
          📋 Pending Resource Requests
        </h2>

        {requests.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            🎉 No pending requests!
          </p>
        ) : (
          <ul className="space-y-4">
            {requests.map((request) => (
              <motion.li
                key={request._id}
                className="flex justify-between items-center bg-[#1e293b] p-4 rounded-lg shadow hover:shadow-lg transition border border-cyan-800"
                whileHover={{ scale: 1.02 }}
              >
                {/* Request Title */}
                <span className="font-medium text-cyan-100">{request.title}</span>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(request._id)}
                    className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
                  >
                    <FaCheckCircle /> Approve
                  </button>

                  <button
                    onClick={() => handleReject(request._id)}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    <FaTimesCircle /> Reject
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default TeacherDashboard;
