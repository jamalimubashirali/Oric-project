import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/white.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const navItems = [
    { 
      name: "About", 
      subItems: ["Overview", "Mission", "History"] 
    },
    { 
      name: "Team", 
      subItems: ["Faculty", "Researchers", "Staff"] 
    },
    { 
      name: "Research & Innovation", 
      subItems: ["Centers", "Projects", "Publications"] 
    },
    { 
      name: "Contact", 
      subItems: ["Directory", "Locations", "Inquiries"] 
    },
    { 
      name: "Collaboration", 
      subItems: ["Industry", "Academic", "Government"] 
    }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-0 bg-[rgba(0,33,71,0.9)] backdrop-blur-lg shadow-lg" : "py-0"
      }`}
    >
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
  <img
    src={logo}
    alt="Muet Logo"
    className="h-20 w-40 object-contain" // Adjusted size and ensured the image scales correctly
  />
  
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-base font-bold bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-blue-500 transition-all duration-300"
                >
                  <span>{item.name}</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-300"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-48 bg-[#0A192F] rounded-lg shadow-xl border border-blue-500/20"
                    >
                      <ul className="py-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={`/${item.name.toLowerCase().replace(/ & /g, "-")}/${subItem.toLowerCase()}`}
                              className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-500/10 hover:text-white"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 33, 71, 0.5)" }}
  whileTap={{ scale: 0.95 }}
  className="relative px-6 py-3 font-semibold text-white text-sm rounded-lg overflow-hidden
             bg-gradient-to-r from-[#002147] to-[#003366] border border-blue-300/30 
             transition-all duration-300 ease-in-out group"
>
  <span className="absolute inset-0 bg-gradient-to-r from-[#004080] to-[#002147] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
  <span className="relative z-10">Portal</span>

  {/* Ripple Effect */}
  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
    <div className="w-20 h-20 bg-blue-400/10 rounded-full animate-ping"></div>
  </span>
</motion.button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed inset-0 w-64 h-screen bg-[#0A192F] shadow-lg md:hidden border-r border-blue-500/20 overflow-hidden"
            >
              <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-blue-500/20">
  

              <div className="flex items-center space-x-2">
  <img
    src={logo}  // Use the imported logo here
    alt="Muet Logo"
    className="h-16 w-auto object-contain"  // Set height and auto width to maintain aspect ratio
  />
 
</div>




  <button
    onClick={() => setIsOpen(false)}
    className="text-blue-300 hover:text-white p-1"
  >
    <X size={20} />
  </button>
</div>

                <div className="flex-1 overflow-y-auto py-2">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-blue-500/10"
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 90 : 0 }}
                          className="text-blue-300"
                        >
                          <ChevronRight size={16} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-blue-900/20"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={`/${item.name.toLowerCase().replace(/ & /g, "-")}/${subItem.toLowerCase()}`}
                                className="block py-2 px-8 text-xs text-gray-300 hover:text-white hover:bg-blue-500/5"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {subItem}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-blue-500/20">
                  <button className="w-full py-2 text-sm bg-[#002147] text-white rounded-md hover:bg-[#003366] transition-colors duration-300">
                    Portal
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;