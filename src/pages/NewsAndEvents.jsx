import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ImageModal from './NewsAndEvents.jsx'; // You'll need to create this component

// Import your images from assets
import geothermalSession from "../assets/events/1.jpg";
import engroDrive from "../assets/events/2.jpg";
import bitsproDrive from "../assets/events/3.jpg";
import careerFair from "../assets/events/1.jpg";
import muetAward from "../assets/events/2.jpg";

const NewsAndEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 3;

  const newsItems = [
    {
      id: 1,
      title: "TECHNICAL SESSION ON GEOTHERMAL ENERGY",
      date: "February 15, 2025",
      excerpt:
        "A Technical Session on Geothermal Energy was organized at the Science & Technology Park...",
      category: "Academic",
      image: geothermalSession,
      fullImage: geothermalSession, // Can be different if you have higher-res versions
    },
    {
      id: 2,
      title: "ENGRO Corporation Recruitment Drive",
      date: "February 11, 2025",
      excerpt:
        "ENGRO Corporation conducted a recruitment drive at Mehran University...",
      category: "Career",
      image: engroDrive,
      fullImage: engroDrive,
    },
    {
      id: 3,
      title: "BitsPro Paid Internship Program",
      date: "February 10, 2025",
      excerpt:
        "BitsPro is organizing a recruitment drive for fresh graduates in collaboration with ORIC...",
      category: "Opportunity",
      image: bitsproDrive,
      fullImage: bitsproDrive,
    },
    {
      id: 4,
      title: "MUET CAREER FAIR 2025",
      date: "January 26, 2025",
      excerpt:
        "The MUET Career Fair, organized by ORIC at Mehran University...",
      category: "Event",
      image: careerFair,
      fullImage: careerFair,
    },
    {
      id: 5,
      title: "Proud Moment for MUET!",
      date: "January 20, 2025",
      excerpt:
        "Three talented teams from MUET recognized for innovative solutions...",
      category: "Achievement",
      image: muetAward,
      fullImage: muetAward,
    },
  ];

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const currentItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Category colors
  const categoryColors = {
    Academic: "bg-purple-100 text-purple-800",
    Career: "bg-blue-100 text-blue-800",
    Opportunity: "bg-green-100 text-green-800",
    Event: "bg-amber-100 text-amber-800",
    Achievement: "bg-rose-100 text-rose-800",
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated gradient underline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
              News & Events
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings and opportunities at MUET
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "10rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* News Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image with parallax effect */}
                <div className="h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating category badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    categoryColors[item.category] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {item.category}
                </div>

                {/* Content */}
                <div className="p-6 relative z-20">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{item.excerpt}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openImageModal(item.fullImage)}
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all group-hover:shadow-cyan-500/30"
                  >
                    Read More
                    <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Creative Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <motion.button
            onClick={prevPage}
            disabled={currentPage === 1}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-800 shadow-lg hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </motion.button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <motion.button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-800 shadow-lg hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            Next
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full filter blur-3xl -z-10" />
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={closeImageModal} />
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all"
          onClick={() => window.open("https://www.linkedin.com/company/oricmehranuniversity/", "_blank")}
        >
          For more Events & News
        </motion.button>
      </div>
    </div>
  );
};

export default NewsAndEvents;
