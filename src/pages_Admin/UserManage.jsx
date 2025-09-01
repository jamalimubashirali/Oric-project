import React, { useState, useEffect } from "react";
import axios from "../services/api";
import { FaTrash, FaEye, FaSearch, FaFilter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StudentModel from "./models/StudentModel";
import Sidebar from "../components/Sidebar"; // Your combined sidebar-navbar component

const UserManage = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentmodel, setStudentmodel] = useState(false);
  const [student, setStudent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar state
  const navigate = useNavigate();

  // Fetch all students
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/auth/getStudents")
      .then((res) => {
        console.log(res.data.Total_Users)
        setStudents(res.data.Total_Users);
        setFilteredStudents(res.data.Total_Users);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  // Filter students based on search term and department
  useEffect(() => {
    let results = students;
    
    if (searchTerm) {
      results = results.filter(student =>
        student.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (departmentFilter !== "all") {
      results = results.filter(student =>
        student.department?.toLowerCase() === departmentFilter.toLowerCase()
      );
    }
    
    setFilteredStudents(results);
  }, [searchTerm, departmentFilter, students]);

  const departments = ["all", ...new Set(students.map(s => s.department).filter(Boolean))];

  const handleDeleteStudent = (studentId) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      axios
        .post("/api/auth/deleteuser", { userId: studentId })
        .then(() => {
          setStudents(students.filter((student) => student._id !== studentId));
        })
        .catch((err) => console.error("Error deleting student:", err));
    }
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
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">All Users</h1>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">View and manage all registered Users</p>
            </motion.div>

            {/* Search and Filter Bar */}
            <div className="mb-4 sm:mb-6 bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400 text-sm sm:text-base" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
                  >
                    <FaFilter className="text-gray-500" />
                    <span>Filters</span>
                  </button>
                  
                  <AnimatePresence>
                    {showFilters && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-md shadow-lg z-10 border border-gray-200 p-2"
                      >
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Department</label>
                        <select
                          className="w-full border border-gray-300 rounded-md px-2 sm:px-3 py-1 sm:py-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                          value={departmentFilter}
                          onChange={(e) => setDepartmentFilter(e.target.value)}
                        >
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept === "all" ? "All Departments" : dept}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
              Showing {filteredStudents.length} of {students.length} Users
            </div>

            {/* Table */}
            {loading ? (
              <div className="flex justify-center items-center h-48 sm:h-64">
                <div className="animate-spin rounded-full h-10 sm:h-12 w-10 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 text-center border border-gray-200">
                <p className="text-gray-500 text-sm sm:text-base">No User found matching your criteria</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredStudents.map((student) => (
                        <motion.tr
                          key={student._id}
                          whileHover={{ backgroundColor: "#f9fafb" }}
                          className="transition-colors"
                        >
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm sm:text-base">
                                {student.username.charAt(0).toUpperCase()}
                              </div>
                              <div className="ml-2 sm:ml-4">
                                <div className="text-xs sm:text-sm font-medium text-gray-900">{student.username}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{student.email}</td>
                          <td className="hidden sm:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                            {student.department || "N/A"}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              student.approved
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {student.approved?'Approved':'Pending'}
                            </span>
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                            <div className="flex justify-end space-x-2 sm:space-x-3">
                              <button
                                onClick={() => {
                                  setStudentmodel(true);
                                  setStudent(student);
                                }}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <FaEye className="h-4 w-4 sm:h-5 sm:w-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteStudent(student._id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <FaTrash className="h-4 w-4 sm:h-5 sm:w-5" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>

      {/* Student Modal */}
      {studentmodel && (
        <StudentModel 
          setStudentmodel={setStudentmodel} 
          student={student} 
        />
      )}
    </div>
  );
};

export default UserManage;