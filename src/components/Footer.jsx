import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/muetlogo.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#001a33] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12  flex items-center justify-center">
                {/* <span className="text-xl font-bold text-white">ORIC</span> */}
                <img
                            src={logo}
                            alt="MUET Logo"
                            className="h-full w-full object-contain transition-transform group-hover:scale-105"
                          />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MUET ORIC
              </h3>
            </div>

             {/* <Link to="/" className="flex items-center space-x-3 group">
                        <motion.div 
                          whileHover={{ rotate: 5 }} 
                          className="h-16 w-16 md:h-20 md:w-20"
                        >
                         
                        </motion.div>
                        <div className="text-[17px] font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
                          <motion.div whileHover={{ x: 2 }}>Mehran University</motion.div>
                          <div className="block text-[10px]">Of Engineering And Technology</div>
                          <div className="block text-[10px]">Jamshoro, Pakistan</div>
                        </div>
                      </Link> */}
            
            <p className="text-gray-300 leading-relaxed">
              Office of Research, Innovation and Commercialization at Mehran University of Engineering and Technology.
            </p>
            <div className="flex space-x-4">
              {/* <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 transition-all"
              >
                <FaFacebook size={18} />
              </motion.a> */}
              <motion.a 
                href="https://www.linkedin.com/company/oricmehranuniversity/"
                target='_blank' 
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 transition-all"
              >
                <FaLinkedin size={18} />
              </motion.a>
              {/* <motion.a 
                
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 transition-all"
              >
                <FaTwitter size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 transition-all"
              >
                <FaYoutube size={18} />
              </motion.a> */}
            </div>
          </motion.div>

          {/* Quick Links */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="space-y-6"
>
  <h4 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">Quick Links</h4>
  <ul className="space-y-3">
    {[
      { name: 'Home', path: '/' },
      { name: 'About', path: '/aboutus' },
      { name: 'Team', path: '/about/team' },
      { name: 'News & Events', path: '/news-events' },
      { name: 'Contact', path: '/contact' }
    ].map((item, index) => (
      <motion.li 
        key={index}
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link 
          to={item.path} 
          className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
        >
          <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
          {item.name}
        </Link>
      </motion.li>
    ))}
  </ul>
</motion.div>

          {/* Contact Info - Expanded to take more space */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-blue-400">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Main Campus Address:</p>
                  <p className="text-gray-300">
                    Mehran University of Engineering & Technology,<br />
                    Jamshoro, Pakistan , Sindh 76062
                  </p>
                
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-blue-400">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email:</p>
                  <a href="mailto:info@muet.edu.pk" className="text-gray-300 hover:text-blue-400 transition-colors">
                  oric@admin.muet.edu.pk
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-blue-400">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Phone:</p>
                  <a href="tel:+92212275201" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (022) 2772280
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-blue-500/30 text-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MUET ORIC. All rights reserved.
            </p>
           
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;