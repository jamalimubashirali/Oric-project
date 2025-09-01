import { motion } from "framer-motion";
import { FaBookOpen, FaExternalLinkAlt, FaGlobe, FaUniversity } from "react-icons/fa";
import logo from '../assets/logo/logo2.png';


const ResearchJournals = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    >
                        Research Journals
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-lg text-blue-200 max-w-3xl mx-auto"
                    >
                        Publishing cutting-edge research in engineering and technology
                    </motion.p>
                </div>

                {/* Journal Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0A192F]/70 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8 mb-12 shadow-lg"
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-shrink-0">
                            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-lg w-48 h-48 flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Custom Image"
                                    className="w-40 h-40 object-contain"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-4">

                                <h2 className="text-2xl md:text-3xl font-bold">
                                    Mehran University Research Journal of Engineering and Technology
                                </h2>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <p className="mb-4">
                                    Mehran University Research Journal of Engineering and Technology is an international, multidisciplinary, open-access scholarly journal. This journal publishes high-quality original research articles describing the latest research and developments in all engineering and technology fields.
                                </p>
                                <p className="mb-4">
                                    Review and survey papers in the priority areas are also considered for publication only by editorial invitation. As per HEC Journals and Publications Policy 2024, all Journals indexed in the Emerging Sources Citation Index (ESCI) collection of Web of Science (WOS) are recognized as 'X' category journals.
                                </p>

                                <div className="mt-6">
                                    <div className="flex items-center mb-2">
                                        <FaGlobe className="text-cyan-400 mr-2" />
                                        <span className="font-medium">Journal Website:</span>
                                    </div>
                                    <a
                                        href="https://publications.muet.edu.pk/index.php/muetrj"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        https://publications.muet.edu.pk/index.php/muetrj
                                        <FaExternalLinkAlt className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>




            </div>
        </motion.div>
    );
};

export default ResearchJournals;