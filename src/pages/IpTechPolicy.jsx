import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const IpTechPolicy = () => {
  const navigate = useNavigate();

  // Handle download
  const handleDownload = () => {
    const pdfUrl = "/MUET-IP-Policy.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MUET-IP-Tech-Transfer-Policy.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#0C2D57] text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
      

        <div className="bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-blue-500/20 p-8 shadow-2xl mt-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            IP & Technology Transfer Policy
          </h1>
          
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-blue-100 mb-4">
              Mehran University of Engineering and Technology is committed to fostering innovation and protecting intellectual property rights. Our IP & Technology Transfer Policy outlines the framework for managing and commercializing intellectual property developed at the university.
            </p>
            
            <h2 className="text-xl font-semibold text-blue-300 mt-6 mb-3">Key Features:</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Clear guidelines for ownership of intellectual property</li>
              <li>Process for disclosure of inventions and discoveries</li>
              <li>Framework for technology transfer and commercialization</li>
              <li>Revenue sharing policy for inventors and creators</li>
              <li>Protection mechanisms for university IP</li>
            </ul>
            
            <p className="text-blue-100 mt-6">
              Download the complete policy document to understand all provisions and procedures in detail.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="mr-2" size={18} />
            Download Policy Document (PDF)
          </motion.button>

          <p className="text-sm text-blue-300 mt-3">
            File size: ~1.46MB | Last updated: January 2025
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default IpTechPolicy;