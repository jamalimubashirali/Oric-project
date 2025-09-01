import { motion } from "framer-motion";
import {
  FaUniversity,
  FaUsers,
  FaBookOpen,
  FaFileAlt,
  FaFlask,
  FaNetworkWired,
  FaMicrophone,
  FaShieldAlt,
} from "react-icons/fa";

import { ExternalLink } from "lucide-react";

// Import local images from assets folder (you should add these)
import petaroLogo from "../assets/institutions/Cadet_College_Petaro.png";
import uthmLogo from "../assets/institutions/UTHM Malasiya.png";
import gikiLogo from "../assets/institutions/GIKI.png";
import lcwuLogo from "../assets/institutions/Lahore College For Women.png";
import ukmLogo from "../assets/institutions/Universiti-Kebangsaan-Malaysia_logo.png";
import hamdardLogo from "../assets/institutions/Hamarad University Karach.jpeg";
import questLogo from "../assets/institutions/QUEST Nawabshah.jpg";
import nedLogo from "../assets/institutions/NED UET Karachi.png";
import gzcccLogo from "../assets/institutions/Guangzhou City Construction College Logo.jpeg";
import ssuetLogo from "../assets/institutions/Sir Syed University Karachi.png";
import dcuLogo from "../assets/institutions/Dublin City University.png";
import tuSofiaLogo from "../assets/institutions/Technical Universtiy de Sofia.png";
import malagaLogo from "../assets/institutions/University of Malaga.png";
import barcelonaLogo from "../assets/institutions/University of Barcelona.webp";
import nottinghamLogo from "../assets/institutions/University of Nottingham.png";
import leedsLogo from "../assets/institutions/University of Leads.png";
import brunelLogo from "../assets/institutions//Brunel_University_Logo.png";
import glasgowLogo from "../assets/institutions/university-of-glasgow-logo.png";
import edinburghLogo from "../assets/institutions/University of Edinbrugh.png";
import trontoMetroLogo from "../assets/institutions/Toronto Metropolitan University.jpeg";
import perugiaLogo from "../assets/institutions/Universita per Stranieri di Perugia.gif";
import huaqiaoLogo from "../assets/institutions/Hauquio University.jpg";
import jinnahLogo from "../assets/institutions/MA Jannah University Karachi Pakistan.jpg";
import noviSadLogo from "../assets/institutions/Universitas Studiorum Neoplantensis.jpg";
import { pre } from "framer-motion/client";
// Institution data
const institutions = [
  {
    name: "University of Edinburgh",
    logo: edinburghLogo,
    country: "UK",
    url: "https://www.ed.ac.uk/",
  },
  {
    name: "University of Glasgow",
    logo: glasgowLogo,
    country: "UK",
    url: "https://www.gla.ac.uk/",
  },
  {
    name: "University of Nottingham",
    logo: nottinghamLogo,
    country: "UK",
    url: "https://www.nottingham.ac.uk/",
  },
  {
    name: "University of Leeds",
    logo: leedsLogo,
    country: "UK",
    url: "https://www.leeds.ac.uk/",
  },
  {
    name: "Brunel University",
    logo: brunelLogo,
    country: "UK",
    url: "https://www.brunel.ac.uk/",
  },
  {
    name: "University of Barcelona",
    logo: barcelonaLogo,
    country: "Spain",
    url: "https://www.ub.edu/",
  },
  {
    name: "University of Malaga",
    logo: malagaLogo,
    country: "Spain",
    url: "https://www.uma.es/",
  },
  {
    name: "Dublin City University",
    logo: dcuLogo,
    country: "Ireland",
    url: "https://www.dcu.ie/",
  },
  {
    name: "Technical University of Sofia",
    logo: tuSofiaLogo,
    country: "Bulgaria",
    url: "https://www.tu-sofia.bg/",
  },
  {
    name: "University of Novi Sad",
    logo: noviSadLogo,
    country: "Serbia",
    url: "https://www.uns.ac.rs/index.php/en/",
  },
  {
    name: "Toronto Metropolitan University",
    logo: trontoMetroLogo,
    country: "Canada",
    url: "https://www.torontomu.ca/",
  },
  {
    name: "University for Foreigners of Perugia",
    logo: perugiaLogo,
    country: "Italy",
    url: "https://www.unistrapg.it/",
  },
  {
    name: "Huaqiao University",
    logo: huaqiaoLogo,
    country: "China",
    url: "https://www.hqu.edu.cn/",
  },
  {
    name: "Guangzhou City Construction College",
    logo: gzcccLogo,
    country: "China",
    url: "https://www.gzccc.edu.cn/",
  },
  {
    name: "Universiti Tun Hussein Onn Malaysia",
    logo: uthmLogo,
    country: "Malaysia",
    url: "https://www.uthm.edu.my/",
  },
  {
    name: "Universiti Kabangsaan Malaysia",
    logo: ukmLogo,
    country: "Malaysia",
    url: "https://www.ukm.my/",
  },
  {
    name: "Ghulam Ishaq Khan Institute",
    logo: gikiLogo,
    country: "Pakistan",
    url: "https://giki.edu.pk/",
  },
  {
    name: "NED University",
    logo: nedLogo,
    country: "Pakistan",
    url: "https://www.neduet.edu.pk/",
  },
  {
    name: "Muhammad Ali Jannah Univeristy Karachi",
    logo: jinnahLogo,
    country: "Pakistan",
    url: "https://jinnah.edu/",
  },
  {
    name: "Lahore College for Women University",
    logo: lcwuLogo,
    country: "Pakistan",
    url: "https://www.lcwu.edu.pk/",
  },
  {
    name: "Hamdard University Karachi",
    logo: hamdardLogo,
    country: "Pakistan",
    url: "https://www.hamdard.edu.pk/",
  },
  {
    name: "Quaid Awan University (QUEST)",
    logo: questLogo,
    country: "Pakistan",
    url: "https://www.quest.edu.pk/",
  },
  {
    name: "Sir Syed University (SSUET)",
    logo: ssuetLogo,
    country: "Pakistan",
    url: "https://www.ssuet.edu.pk/",
  },
  {
    name: "Cadet College Petaro",
    logo: petaroLogo,
    country: "Pakistan",
    url: "https://www.ccpetaro.edu.pk/",
  },
];

const collaborationAreas = [
  { icon: <FaFileAlt size={20} />, text: "Multidisciplinary joint research" },
  {
    icon: <FaBookOpen size={20} />,
    text: "Applying for joint research funding",
  },
  { icon: <FaUsers size={20} />, text: "Co-authoring publications" },
  {
    icon: <FaNetworkWired size={20} />,
    text: "Exchanging academic materials and information",
  },
  {
    icon: <FaShieldAlt size={20} />,
    text: "Co-patenting products from research",
  },
  {
    icon: <FaFlask size={20} />,
    text: "Access to state-of-the-art laboratories",
  },
  {
    icon: <FaMicrophone size={20} />,
    text: "Training exchanges, conferences, and workshops",
  },
];

const InstitutionalCollaboration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-pink-500/10 rounded-full filter blur-3xl"></div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Institutional Collaboration
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto px-4"
          >
            Fostering mutual understanding and scholarly partnerships
          </motion.p>
        </div>

        {/* Introduction Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative bg-[#0A192F]/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/20 p-6 md:p-8 mb-12 md:mb-16 shadow-lg md:shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-purple-500/5 rounded-full filter blur-xl"></div>
          <div className="relative prose prose-invert max-w-none">
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Institutional collaborations aim to foster mutual understanding
              and scholarly partnerships by encouraging academic and research
              activities among faculty and students. Areas of cooperation
              between institutions include multidisciplinary joint research,
              applying for joint research funding, co-authoring publications,
              exchanging academic materials and information, co-patenting
              products arising from collaborative research, leveraging research
              networks and subject matter expertise, providing access to
              state-of-the-art laboratories at both universities for research
              purposes, creating opportunities for training exchanges,
              conferences, workshops, and academic meetings, and supporting the
              commercialization efforts of partner institutions within the scope
              of the collaboration. ORIC MUET has collaborated with the
              following institutions / HEIs.
            </p>
          </div>
        </motion.section>

        {/* Areas of Cooperation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative bg-[#0A192F]/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/20 p-6 md:p-8 mb-12 md:mb-16 shadow-lg md:shadow-2xl overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 w-48 h-48 md:w-64 md:h-64 bg-pink-500/5 rounded-full filter blur-xl"></div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
              <FaUniversity className="mr-2 md:mr-3 text-blue-400" size={24} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Areas of Cooperation
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {collaborationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex items-start p-4 bg-[#112240]/50 rounded-lg border border-purple-500/10 hover:border-purple-400/30 transition-colors"
                >
                  <div className="text-blue-400 mr-3 mt-0.5">{area.icon}</div>
                  <p className="text-sm sm:text-base">{area.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Partner Institutions Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <FaUniversity className="mr-2 md:mr-3 text-blue-400" size={24} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Partner Institutions
              </span>
            </h2>
            <div className="text-sm text-blue-300">
              {institutions.length} Prestigious Institutions Worldwide
            </div>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {institutions.map((institution, index) => (
              <motion.a
                key={index}
                href={institution.url}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group bg-[#0A192F]/50 hover:bg-[#0A192F]/70 border border-purple-500/20 rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col items-center justify-center h-full transition-all hover:shadow-md md:hover:shadow-lg hover:border-purple-400/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-16 md:h-20 w-full flex items-center justify-center mb-2 md:mb-3 relative z-10">
                  <img
                    src={institution.logo}
                    alt={institution.name}
                    className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xs sm:text-sm text-center font-medium text-blue-100 group-hover:text-white relative z-10 line-clamp-2">
                  {institution.name}
                </h3>
                <div className="mt-1 text-[10px] sm:text-xs text-blue-300 relative z-10">
                  {institution.country}
                </div>
                <ExternalLink className="absolute top-1.5 right-1.5 md:top-2 md:right-2 text-blue-400/50 group-hover:text-blue-300 transition-colors w-3 h-3 md:w-4 md:h-4" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Additional Information Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative bg-[#0A192F]/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/20 p-6 md:p-8 shadow-lg md:shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-pink-500/5 rounded-full filter blur-xl"></div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Building Global Academic Networks
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-base leading-relaxed mb-4">
                These collaborations enable faculty and students to engage in
                cutting-edge research, access international facilities, and
                participate in global academic discourse.
              </p>
              <p className="text-base leading-relaxed">
                Through these partnerships, MUET strengthens its position as a
                leading research institution while contributing to the global
                academic community.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default InstitutionalCollaboration;
