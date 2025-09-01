import { motion } from "framer-motion";
import { FaUniversity, FaFlask, FaUserGraduate, FaSearch } from "react-icons/fa";
import { useState } from "react";
import fundedProjectsData from '../data/fundedProjectsNew.json';

const FundProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Combine faculty and student projects with proper type indication
  const allProjects = [
    ...fundedProjectsData.projects.faculty,
    ...fundedProjectsData.projects.student
  ];
  
  // Filter projects based on search term
  const filteredProjects = allProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.pi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (project.department && project.department.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const facultyProjects = filteredProjects.filter(project => project.type === "faculty");
  const studentProjects = filteredProjects.filter(project => project.type === "student");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            {fundedProjectsData.pageTitle}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg text-blue-200 max-w-4xl mx-auto"
          >
            {fundedProjectsData.pageDescription}
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#0A192F]/70 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-blue-300"
            />
          </div>
        </motion.div>

        {/* Projects Sections */}
        <div className="space-y-12">
          {/* Faculty Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-cyan-500/10 p-2 rounded-lg mr-3">
                <FaUniversity className="text-cyan-400 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Faculty Projects ({facultyProjects.length})</h2>
            </div>
            
            <div className="grid gap-4">
              {facultyProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-[#0A192F]/70 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-2 text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-200">
                    <span className="font-medium">Principal Investigator:</span> {project.pi}
                    {project.position && `, ${project.position}`}
                    {project.department && `, ${project.department}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Student Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-green-500/10 p-2 rounded-lg mr-3">
                <FaUserGraduate className="text-green-400 text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Student Projects ({studentProjects.length})</h2>
            </div>
            
            <div className="grid gap-4">
              {studentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.03 }}
                  className="bg-[#0A192F]/70 border border-green-500/20 rounded-lg p-4 hover:border-green-400/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-2 text-green-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-200">
                    <span className="font-medium">Student:</span> {project.pi}
                    {project.department && `, ${project.department}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* No Results Message */}
        {searchTerm && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-blue-200">No projects found matching "{searchTerm}"</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FundProjects;