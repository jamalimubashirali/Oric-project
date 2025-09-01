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
  FaBuilding,
} from "react-icons/fa";
import { ExternalLink } from "lucide-react";

// Replace these with your actual image imports
import tieIslamabad from "../assets/Other Collaborators/Fostering ENTP.png";
import caaLogo from "../assets/Other Collaborators/CCA.png";
import ccpLogo from "../assets/Other Collaborators/CCP.jpg";
import consulateJapan from "../assets/Other Collaborators/Consluate General Japan in Karachi.png";
import idfstLogo from "../assets/Other Collaborators/International Institue of Digital Forensic Science and Technology.jpeg";
import jeejalMaaul from "../assets/Other Collaborators/Jaleel MAAU Hospital.jpeg";
import ncbcLogo from "../assets/Other Collaborators/National Center in Big Data & Cloud Computing NEDUET Karachi.jpg";
import paecLogo from "../assets/Other Collaborators/Pakistan Atomic Energy Commission.jpg";
import techtalksLogo from "../assets/Other Collaborators/TechTalks.pk.png";
import zindigiPrize from "../assets/Other Collaborators/Zindagi Price.png";
import sezmc from "../assets/Other Collaborators/Sindh Economic Zones Management Company.png";
// import nich from '../assets/Other Collaborators';
import cssp from "../assets/Other Collaborators/CSSP.png";
import rdf from "../assets/Other Collaborators/RDF Logo.png";
import timesConsultant from "../assets/Other Collaborators/Times Consultancy.jpg";
import redMarker from "../assets/Other Collaborators/ReadMaker Systems.png";
import samanShifa from "../assets/Other Collaborators/Sman E shifa Foundation.jpg";
import smartMentor from "../assets/Other Collaborators/Smart Mentor.png";
import pjif from "../assets/Other Collaborators/Pakistan Japan Intellect Fourm.jpeg";

const institutions = [
  {
    name: "Pakistan Atomic Energy Commission",
    link: "https://paec.gov.pk/",
    logo: paecLogo,
  },
  {
    name: "Civil Aviation Authority",
    link: "https://pcaa.gov.pk/",
    logo: caaLogo,
  },
  {
    name: "National Center in Big Data and Cloud Computing - NEDUET Karachi",
    link: "https://ncbc.neduet.edu.pk/",
    logo: ncbcLogo,
  },
  {
    name: "Sindh Economic Zones Management Company",
    link: "https://sezmc.gos.pk/",
    logo: sezmc,
  },
  {
    name: "Confucius Classroom Cadet College Petaro",
    link: "https://www.ccpetaro.edu.pk/the-confucius-classroom-summer-camp-of-cadet-college-petaro-concludes-successfully-in-chengdu-china/",
    logo: ccpLogo,
  },
  {
    name: "Consulate General Japan In Pakistan",
    link: "https://www.kr.pk.emb-japan.go.jp/itprtop_en/index.html",
    logo: consulateJapan,
  },
  {
    name: "Pakistan Japan Intellect Forum",
    link: "",
    logo: pjif,
  },
  {
    name: "Civil Society Support Program",
    link: "https://cssp.org.pk/",
    logo: cssp,
  },
  {
    name: "Research and Development Foundation",
    link: "https://rdfoundation.org.pk/",
    logo: rdf,
  },
  {
    name: "Information Institute of Digital Forensic Science and Technology",
    link: "https://idfst.edu.pk/",
    logo: idfstLogo,
  },
  {
    name: "Jaleel MAAU Hospital Hyderabad",
    link: "https://www.facebook.com/jeejalmaauIMHS/",
    logo: jeejalMaaul,
  },
  {
    name: "TIE Fostering Entrepreneurship Islamabad",
    link: "https://tie.org/chapter/tie-islamabad/",
    logo: tieIslamabad,
  },
  {
    name: "Times Consultant",
    link: "https://timesconsultant.com/",
    logo: timesConsultant,
  },
  {
    name: "Saman-e-Shifa Foundation",
    link: "https://www.facebook.com/samaneshifa/",
    logo: samanShifa,
  },
  {
    name: "Zindagi",
    link: "https://zindigi.pk/",
    logo: zindigiPrize,
  },
  {
    name: "Red Maker Systems Private Limited",
    link: "https://redmarker.io/",
    logo: redMarker,
  },
  {
    name: "Smart Mentor FZ-LLC, Dubai, UAE",
    link: "",
    logo: smartMentor,
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

const OtherCollaboration = () => {
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
            Other Collaborations
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto px-4"
          >
            Strategic partnerships beyond academic institutions
          </motion.p>
        </div>

        {/* Partner Institutions Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <FaBuilding className="mr-2 md:mr-3 text-blue-400" size={24} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Partner Organizations
              </span>
            </h2>
            <div className="text-sm text-blue-300">
              {institutions.length} Valuable Partners
            </div>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {institutions.map((institution, index) => (
              <motion.a
                key={index}
                href={institution.link || "#"}
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
      </div>
    </motion.div>
  );
};

export default OtherCollaboration;
