import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiPieChart,
  FiUsers,
  FiSettings,
  FiMail,
  FiCalendar,
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
  FiUser,
  FiLogOut,
  FiSearch,
} from "react-icons/fi";

import logo from "../assets/logo/logoo.png";
import Footer from "./Footer";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all dropdowns when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (item) => {
    setActiveSubDropdown(activeSubDropdown === item ? null : item);
  };
  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // Helper function to check if a dropdown item should be considered active
  const isDropdownActive = (item) => {
    if (!item.subItems) return false;
    
    // Check if current path matches any sub-item
    return item.subItems.some(subItem => {
      if (subItem.path && location.pathname === subItem.path) return true;
      if (subItem.subItems) {
        return subItem.subItems.some(nestedItem => location.pathname === nestedItem.path);
      }
      return false;
    });
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      subItems: [
        { name: "About Us", path: "/aboutus" },
        { name: "Team", path: "/about/team" },
        {
          name: "IPO/TTO/TISC",
          subItems: [
            { name: "What is IPO/TTO/TISC", path: "/about/what-is-ipo" },
            {
              name: "IP & Tech Transfer Policy",
              path: "/about/ip-tech-policy",
            },
          ],
        },
        // { name: "Constituents & Centers", path: "/about/constituents" }
      ],
    },
    {
      name: "Collaboration",
      subItems: [
        {
          name: "Industrial Collaboration",
          path: "/collaboration/industrial-collobration",
        },
        {
          name: "Institutional Collaboration",
          path: "/collaboration/institutional-collobration",
        },
        {
          name: "Others Collaboration",
          path: "/collaboration/other-collaboration",
        },
      ],
    },
    {
      name: "Research & Innovations",
      subItems: [
        {
          name: "Funding Opportunity",
          path: "/research-innovation/funded-opportunity",
        },
        {
          name: "Funded Projects",
          path: "/research-innovation/funded-projects",
        },
        {
          name: "Research Journals",
          path: "/research-innovation/research-journals",
        },
      ],
    },

    {
      name: "BIC",
      subItems: [
        { name: "Who we are", path: "/bic/who-we-are" },
        { name: "What we do", path: "/bic/what-we-do" },
        { name: "BIC Incubation Process", path: "/bic/process" },
      ],
    },
    { name: "News & Events", path: "/news-events" },
    { name: "Contact", path: "/contact" },
  ];

  const adminnavItems = [];
  const InfiniteRotatingLogo = ({ logo }) => {
    return (
      <motion.div
        className="h-16 w-16 md:h-20 md:w-20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        <img
          InfiniteRotatingLogo
          src={logo}
          alt="MUET Logo"
          className="h-full w-full object-contain rounded-full"
        />
      </motion.div>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 bg-white shadow-md" : "py-3 bg-white"
        }`}
      >
        <div className="w-full px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* Logo */}            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="h-16 w-16 md:h-20 md:w-20"
                whileHover={{ rotate: 360, transition: { duration: 1 } }}
              >
                <img
                  src={logo}
                  alt="MUET Logo"
                  className="h-full w-full object-contain rounded-full"
                />
              </motion.div>
            </Link>            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-1 flex-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center text-gray-700`}
                      style={
                        location.pathname === item.path
                          ? { background: "rgba(37,99,235,0.15)", borderRadius: "9999px" }
                          : {}
                      }
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg flex items-center space-x-1 transition-colors text-gray-700`}
                        style={
                          isDropdownActive(item)
                            ? { background: "rgba(37,99,235,0.15)", borderRadius: "9999px" }
                            : {}
                        }
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{
                            rotate: activeDropdown === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>                      <AnimatePresence>
                        {activeDropdown === item.name && item.subItems && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className={`absolute left-0 mt-1 w-56 rounded-lg ${
                              location.pathname === '/' 
                                ? "bg-white shadow-sm" 
                                : "bg-white shadow-lg"
                            }`}
                          >
                            <ul className="py-1">
                              {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  {subItem.path ? (
                                    <Link
                                      to={subItem.path}
                                      onClick={closeAll}                                      className={`block px-4 py-2 text-sm ${
                                        location.pathname === subItem.path
                                          ? "text-blue-800 bg-blue-100"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ) : (
                                    <div className="relative">
                                      <button
                                        onClick={() =>
                                          toggleSubDropdown(subItem.name)
                                        }                                        className={`flex justify-between items-center w-full px-4 py-2 text-sm ${
                                          activeSubDropdown === subItem.name
                                            ? "text-blue-800 bg-blue-100"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        <span>{subItem.name}</span>
                                        <ChevronRight size={16} />
                                      </button>

                                      <AnimatePresence>                                        {activeSubDropdown === subItem.name && (
                                          <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className={`absolute left-full top-0 ml-1 w-56 rounded-lg ${
                                              location.pathname === '/' 
                                                ? "bg-white shadow-sm" 
                                                : "bg-white shadow-lg"
                                            }`}
                                          >
                                            <ul>
                                              {subItem.subItems.map(
                                                (nestedItem, nestedIndex) => (
                                                  <li key={nestedIndex}>
                                                    <Link
                                                      to={nestedItem.path}
                                                      onClick={closeAll}                                                      className={`block px-4 py-2 text-sm ${
                                                        location.pathname ===
                                                        nestedItem.path
                                                          ? "text-blue-800 bg-blue-100"
                                                          : "text-gray-700"
                                                      }`}
                                                    >
                                                      {nestedItem.name}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              <motion.div
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                {/* {user portel show condition } */}
                {!user ? (
                  <Link
                    to="/signup" // This should match the defined route
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md hover:shadow-lg transition-all "
                  >
                    <span>Portal</span>
                    <motion.span
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-1"
                    >
                      <ChevronRight size={16} />
                    </motion.span>
                  </Link>
                ) : (
                  <div className="ml-auto  flex items-center" ref={profileRef}>
                    <button
                      onClick={() =>
                        setProfileDropdownOpen(!profileDropdownOpen)
                      }
                      className="flex items-center space-x-2 "
                    >
                      <div className="relative">
                        {/* <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                            <span className="font-medium text-white">SD</span>
                          </div> */}
                        <img
                          src={
                            user?.profilePic ||
                            "https://ui-avatars.com/api/?name=" +
                              encodeURIComponent(user.username) +
                              "&background=random"
                          }
                          alt="Profile"
                          className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-[#0A192F]"></div>
                      </div>
                      <div className="hidden lg:block text-left">
                        <p className="text-md text-white font-medium">
                          {user?.username}
                        </p>
                        <p className="text-xs text-blue-300">{user?.role}</p>
                      </div>
                      <FiChevronDown
                        className={`hidden text-gray-300 lg:block transition-transform ${
                          profileDropdownOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Profile Dropdown Menu */}
                    <AnimatePresence>
                      {profileDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-4 top-20 mt-2 w-56 origin-top-right bg-[#0A192F] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        >
                          <div className="py-1">
                            <a
                              onClick={() => {
                                {
                                  user?.role === "admin"
                                    ? navigate("/AdminProfile")
                                    : navigate("/UserProfile");
                                }
                              }}
                              className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#112240]"
                            >
                              <FiUser className="mr-3" />
                              View Profile
                            </a>
                            <a
                              onClick={() => {
                                {
                                  user?.role === "admin"
                                    ? navigate("/Dashboard")
                                    : navigate("/UserDashboard");
                                }
                              }}
                              className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#112240]"
                            >
                              <FiSettings className="mr-3" />
                              Portal
                            </a>
                            <div className="border-t border-[#112240]"></div>
                            <a
                              onClick={() => {
                                localStorage.clear();
                                navigate("/");
                                window.location.reload();
                              }}
                              className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-[#112240]"
                            >
                              <FiLogOut className="mr-3" />
                              Logout
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-blue-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 touch-none"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 w-80 max-w-full bg-[#0A192F] shadow-xl z-50 border-r border-blue-500/20 flex flex-col h-screen"
              >
                <div className="flex items-center justify-between p-4 border-b border-blue-500/20">
                  <Link
                    to="/"
                    className="flex items-center space-x-3"
                    onClick={closeAll}
                  >
                    <img src={logo} alt="MUET Logo" className="h-12 w-12" />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-blue-300 hover:text-white rounded-full "
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4 ">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-blue-900/30 last:border-0"
                    >
                      {item.path ? (
                        <Link
                          to={item.path}
                          onClick={closeAll}
                          className={`block px-6 py-3 text-sm ${
                            location.pathname === item.path
                              ? "text-black bg-blue-600/20"
                              : "text-blue-100 hover:text-black hover:bg-blue-500/10"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`flex justify-between items-center w-full px-6 py-3 text-sm ${
                              activeDropdown === item.name
                                ? "text-black bg-blue-600/20"
                                : "text-blue-100 hover:text-white hover:bg-blue-500/10"
                            }`}
                          >
                            <span>{item.name}</span>
                            <motion.div
                              animate={{
                                rotate: activeDropdown === item.name ? 90 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight size={16} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.name && item.subItems && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden bg-blue-900/10"
                              >
                                {item.subItems.map((subItem, subIndex) => (
                                  <div
                                    key={subIndex}
                                    className="border-t border-blue-900/20"
                                  >
                                    {subItem.path ? (
                                      <Link
                                        to={subItem.path}
                                        onClick={closeAll}
                                        className={`block px-10 py-2 text-xs ${
                                          location.pathname === subItem.path
                                            ? "text-white bg-blue-600/20"
                                            : "text-blue-100 hover:text-white hover:bg-blue-500/10"
                                        }`}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ) : (
                                      <>
                                        <button
                                          onClick={() =>
                                            toggleSubDropdown(subItem.name)
                                          }
                                          className={`flex justify-between items-center w-full px-10 py-2 text-xs ${
                                            activeSubDropdown === subItem.name
                                              ? "text-white bg-blue-600/20"
                                              : "text-blue-100 hover:text-white hover:bg-blue-500/10"
                                          }`}
                                        >
                                          <span>{subItem.name}</span>
                                          <ChevronRight size={14} />
                                        </button>

                                        <AnimatePresence>
                                          {activeSubDropdown ===
                                            subItem.name && (
                                            <motion.div
                                              initial={{ height: 0 }}
                                              animate={{ height: "auto" }}
                                              exit={{ height: 0 }}
                                              className="overflow-hidden bg-blue-900/20"
                                            >
                                              {subItem.subItems.map(
                                                (nestedItem, nestedIndex) => (
                                                  <Link
                                                    key={nestedIndex}
                                                    to={nestedItem.path}
                                                    onClick={closeAll}
                                                    className={`block px-14 py-2 text-xs ${
                                                      location.pathname ===
                                                      nestedItem.path
                                                        ? "text-white bg-blue-600/20"
                                                        : "text-blue-100 hover:text-white hover:bg-blue-500/10"
                                                    }`}
                                                  >
                                                    {nestedItem.name}
                                                  </Link>
                                                )
                                              )}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    )}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-blue-500/20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {!user ? (
                      <Link
                        to="/signup"
                        onClick={closeAll}
                        className="block w-full px-4 py-3 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow"
                      >
                        Portal Login
                      </Link>
                    ) : (
                      <div
                        className="ml-auto  flex items-center"
                        ref={profileRef}
                      >
                        <button
                          onClick={() =>
                            setProfileDropdownOpen(!profileDropdownOpen)
                          }
                          className="flex items-center space-x-2 "
                        >
                          <div className="relative">
                            {/* <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                            <span className="font-medium text-white">SD</span>
                          </div> */}
                            <img
                              src={
                                user?.profilePic ||
                                "https://ui-avatars.com/api/?name=" +
                                  encodeURIComponent(user.username) +
                                  "&background=random"
                              }
                              alt="Profile"
                              className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                            />
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-[#0A192F]"></div>
                          </div>
                          <div className="hidden lg:block text-left">
                            <p className="text-md text-white font-medium">
                              {user?.username}
                            </p>
                            <p className="text-xs text-blue-300">
                              {user?.role}
                            </p>
                          </div>
                          <FiChevronDown
                            className={`hidden text-gray-300 lg:block transition-transform ${
                              profileDropdownOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Profile Dropdown Menu */}
                        <AnimatePresence>
                          {!profileDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute right-4 bottom-0 mt-2 w-56 origin-top-right bg-[#0A192F] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                            >
                              <div className="py-1">
                                <a
                                  onClick={() => {
                                    {
                                      user?.role === "admin"
                                        ? navigate("/AdminProfile")
                                        : navigate("/UserProfile");
                                    }
                                  }}
                                  className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#112240]"
                                >
                                  <FiUser className="mr-3" />
                                  View Profile
                                </a>
                                <a
                                  onClick={() => {
                                    {
                                      user?.role === "admin"
                                        ? navigate("/Dashboard")
                                        : navigate("/UserDashboard");
                                    }
                                  }}
                                  className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#112240]"
                                >
                                  <FiSettings className="mr-3" />
                                  Portal
                                </a>
                                <div className="border-t border-[#112240]"></div>
                                <a
                                  onClick={() => {
                                    localStorage.clear();
                                    navigate("/");
                                    // window.location.reload()
                                  }}
                                  className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-[#112240]"
                                >
                                  <FiLogOut className="mr-3" />
                                  Logout
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      {children}
      <Footer />
    </>
  );
};

export default Navbar;
