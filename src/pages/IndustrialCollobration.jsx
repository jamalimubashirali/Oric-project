import { motion } from "framer-motion";
import {
  Building,
  Link2,
  Download,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import local images from assets folder
import pakistanCablesLogo from "../assets/companies/Pakistan Cables.jpg";
// import jpclLogo from "../assets/companies/1.jpg";
import dawlanceLogo from "../assets/companies/dawlance-logo-png_seeklogo-218284.png";
import secmcLogo from "../assets/companies/1.jpg";
import engroLogo from "../assets/companies/engro-energy-logo.jpg";
import hubcoLogo from "../assets/companies/Hubco.jpg";
import haleonLogo from "../assets/companies/Haleon.jpg";
import crescentLogo from "../assets/companies/Crescent Steel & Allied Products Limited.png";
import aghaSteelLogo from "../assets/companies/Agha Steel Mills.jpeg";
import sapphireLogo from "../assets/companies/sapphire-logo.jpg";
import libertyMillsLogo from "../assets/companies/Liberty Mills.png";
import ntdcLogo from "../assets/companies/1.jpg";
import fastCablesLogo from "../assets/companies/Fast cables.png";
import archromaLogo from "../assets/companies/Archroma.jpg";
import nadraLogo from "../assets/companies/NADRA.png";
import harbinLogo from "../assets/companies/Herbin Electric Corporation.png";

// Company data with local images
const companies = [
  {
    name: "Pakistan Cables",
    logo: pakistanCablesLogo,
    url: "https://www.pakistancables.com",
  },
  // {
  //   name: "Jamshoro Power Company",
  //   logo: jpclLogo,
  //   url: "https://www.jpcl.com.pk",
  // },
  {
    name: "Dawlance Pakistan",
    logo: dawlanceLogo,
    url: "https://www.dawlance.com.pk",
  },
  {
    name: "Sindh Engro Coal Mining",
    logo: secmcLogo,
    url: "https://www.secmc.com.pk",
  },
  { name: "Engro Powergen", logo: engroLogo, url: "https://www.engro.com" },
  { name: "Hubco Power", logo: hubcoLogo, url: "https://www.hubpower.com" },
  { name: "Haleon Pakistan", logo: haleonLogo, url: "https://www.haleon.com" },
  {
    name: "Crescent Steel",
    logo: crescentLogo,
    url: "https://www.crescent.com.pk",
  },
  {
    name: "Agha Steel Mills",
    logo: aghaSteelLogo,
    url: "https://www.aghasteel.com",
  },
  {
    name: "Sapphire Textile Mills",
    logo: sapphireLogo,
    url: "https://www.sapphire.com.pk",
  },
  {
    name: "Liberty Mills",
    logo: libertyMillsLogo,
    url: "https://www.libertymills.com.pk",
  },
  { name: "NTDC", logo: ntdcLogo, url: "https://www.ntdc.com.pk" },
  {
    name: "Fast Cables",
    logo: fastCablesLogo,
    url: "https://www.fastcables.com",
  },
  { name: "Archroma", logo: archromaLogo, url: "https://www.archroma.com" },
  {
    name: "national database and registration authority",
    url: "https://www.nadra.gov.pk/",
    logo: nadraLogo,
  },
  {
    name: "Harbin Electric Corporation",
    url: "https://en.harbin-electric.com/",
    logo: harbinLogo,
  },
];

const IndustrialCollaboration = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back button with improved styling */}

        {/* Enhanced Header Section */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/10 rounded-full filter blur-3xl"></div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Industrial Collaboration
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto px-4"
          >
            Bridging academia and industry for innovation and growth
          </motion.p>
        </div>

        {/* Improved Introduction Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative bg-[#0A192F]/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-500/20 p-6 md:p-8 mb-12 md:mb-16 shadow-lg md:shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-blue-500/5 rounded-full filter blur-xl"></div>
          <div className="relative prose prose-invert max-w-none">
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              With fierce competition, products don't stay popular for long, and
              companies need to keep up with new technology. This means they're
              teaming up with universities like ORIC MUET and Mehran University
              of Engineering & Technology.
            </p>
            <p className="text-base leading-relaxed">
              This collaboration helps universities conduct better research
              while helping companies compete worldwide. Companies gain access
              to brilliant researchers, the latest technology, and university
              facilities. Universities obtain valuable data for research,
              funding opportunities, and real-world problem-solving experiences
              for students and faculty.
            </p>
          </div>
        </motion.section>

        {/* Enhanced Partner Companies Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <Building className="mr-2 md:mr-3 text-blue-400" size={24} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Industry Partners
              </span>
            </h2>
            <div className="text-sm text-blue-300">
              {companies.length} Leading Organizations
            </div>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {companies.map((company, index) => (
              <motion.a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group bg-[#0A192F]/50 hover:bg-[#0A192F]/70 border border-blue-500/20 rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col items-center justify-center h-full transition-all hover:shadow-md md:hover:shadow-lg hover:border-blue-400/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-16 md:h-20 w-full flex items-center justify-center mb-2 md:mb-3 relative z-10">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xs sm:text-sm text-center font-medium text-blue-100 group-hover:text-white relative z-10 line-clamp-2">
                  {company.name}
                </h3>
                <ExternalLink className="absolute top-1.5 right-1.5 md:top-2 md:right-2 text-blue-400/50 group-hover:text-blue-300 transition-colors w-3 h-3 md:w-4 md:h-4" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Enhanced ULTT Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative bg-[#0A192F]/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-500/20 p-6 md:p-8 mb-12 md:mb-16 shadow-lg md:shadow-2xl overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/5 rounded-full filter blur-xl"></div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
              <Link2 className="mr-2 md:mr-3 text-blue-400" size={24} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                University Linkages and Technology Transfer (ULTT)
              </span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Promote the development of public-private partnerships in support of university research",
                  "Link the university's research community with the needs and priorities of the corporate sector",
                  "Develop opportunities for applied research",
                  "Explore opportunities for technology transfer and the commercialization of university research",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start text-sm md:text-base"
                  >
                    <span className="inline-block w-1.5 h-1.5 mt-2 mr-2 md:mt-2.5 md:mr-3 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Internship Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative bg-[#0A192F]/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-500/20 p-6 md:p-8 shadow-lg md:shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-blue-500/5 rounded-full filter blur-xl"></div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Companies Addresses for Internship 2024-2025
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <motion.a
                href="/Companies-Addresses-for-Internship-2018-19.pdf"
                download="MUET-Internship-Directory-2024-2025.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all z-10"
              >
                <Download className="mr-2" size={18} />
                Download Internship Directory
              </motion.a>

              <div className="text-xs sm:text-sm text-blue-300 max-w-md">
                Contains complete contact information, HR details, and
                application procedures for all partner companies
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default IndustrialCollaboration;
