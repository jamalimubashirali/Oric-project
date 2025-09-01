import React from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaUniversity, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const StudentModel = ({ setStudentmodel, student }) => {
  return (
    <AnimatePresence>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50 font-sans p-4 mb-20"
      >
        {/* Overlay with subtle gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-[#0f172a]/95 to-[#1e293b]/95 backdrop-blur-sm"
          onClick={() => setStudentmodel(false)}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-200 dark:border-gray-700 mt-20"
        >
          {/* Header with close button
          <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FaUser className="text-blue-200" />
              User Profile
            </h2>
            <button
              onClick={() => setStudentmodel(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <FaTimes />
            </button>
          </div> */}

          {/* Profile Section */}
          <div className="p-2 sm:p-8">
            {/* Profile Picture with Status */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <img
                  src={student?.profilePic || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                />
                <div className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ${
                  student?.approved ? 'bg-green-500' : 'bg-gray-400'
                }`} />
              </div>
              
              <DetailItem label="Registration Date" value={new Date(student?.createdAt).toLocaleDateString() || 'Unknown'} />

              <div className=" border-t border-gray-100 dark:border-gray-800">
            
            
             
            
          </div>
            </div>

            {/* User Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard 
                icon={<FaUser className="text-blue-500" />}
                label="Full Name" 
                value={student?.name || 'Not provided'} 
              />
              <InfoCard 
                icon={<FaEnvelope className="text-purple-500" />}
                label="Email" 
                value={student?.email || 'N/A'} 
              />
              <InfoCard 
                icon={<FaPhone className="text-green-500" />}
                label="Phone" 
                value={student?.number || 'Not provided'} 
              />
              <InfoCard 
                icon={<FaUniversity className="text-yellow-500" />}
                label="Department" 
                value={student?.department || 'Not specified'} 
              />
              <InfoCard 
                icon={student?.approved ? 
                  <FaCheckCircle className="text-emerald-500" /> : 
                  <FaTimesCircle className="text-red-500" />}
                label="Account Status" 
                value={student?.approved ? 'Verified' : 'Pending Approval'} 
                valueColor={student?.approved ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}
              />
            </div>

            {/* Additional Details Section */}
           
          </div>

          {/* Footer with Action Buttons */}
          <div className="px-2  bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 flex justify-end space-x-3">
            <button
              onClick={() => setStudentmodel(false)}
              className="px-6 py-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors "
            >
              Close
            </button>
          
          </div>
         
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const InfoCard = ({ icon, label, value, valueColor = 'text-gray-700 dark:text-gray-300' }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow">
    <div className="flex items-start space-x-3">
      <div className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <p className={`text-lg font-semibold mt-1 ${valueColor}`}>{value}</p>
      </div>
    </div>
  </div>
);

const DetailItem = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</span>
  </div>
);

export default StudentModel;