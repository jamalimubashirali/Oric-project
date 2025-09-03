import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  FiUser,
  FiLogOut,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";
import logo from "../assets/logo/logoo.png";
import Footer from "./Footer";

const NewNavbar = ({ children }) => {  
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const profileRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const oricHighlight = {
      color: '#00C6FF',
      display: 'inline',
      background: 'linear-gradient(90deg, #0072FF, #00C6FF)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: 'none',
    }

  // Animated ORIC full name words
  const fullNameWords = [
    "Research",
    "Innovation",
    "Commercialization"
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [animationState, setAnimationState] = useState('entering');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState('exiting');
      
      setTimeout(() => {
        setCurrentWordIdx((prev) => (prev + 1) % fullNameWords.length);
        setAnimationState('entering');
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

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

  // Close menu when route changes
  useEffect(() => {
    setHoveredSection(null);
    setIsMenuVisible(false);
  }, [location.pathname]);

  // Handle menu visibility with delay
  useEffect(() => {
    if (hoveredSection) {
      setIsMenuVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsMenuVisible(false);
      }, 150); // Small delay to prevent flickering
      return () => clearTimeout(timer);
    }
  }, [hoveredSection]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      subItems: [
        { name: "About Us", path: "/aboutus", description: "Learn about our mission and vision" },
        { name: "Team", path: "/about/team", description: "Meet our dedicated team members" },
        { name: "What is IPO/TTO/TISC", path: "/about/what-is-ipo", description: "Understanding our innovation office" },
        { name: "IP & Tech Transfer Policy", path: "/about/ip-tech-policy", description: "Our intellectual property guidelines" },
      ]
    },
    {
      name: "Collaboration",
      subItems: [
        { name: "Industrial Collaboration", path: "/collaboration/industrial-collobration", description: "Partnership opportunities with industry" },
        { name: "Institutional Collaboration", path: "/collaboration/institutional-collobration", description: "Academic partnerships and alliances" },
        { name: "Other Collaborations", path: "/collaboration/other-collaboration", description: "Various partnership opportunities" },
      ]
    },
    {
      name: "Research & Innovation",
      subItems: [
        { name: "Funding Opportunities", path: "/research-innovation/funded-opportunity", description: "Available funding programs and grants" },
        { name: "Funded Projects", path: "/research-innovation/funded-projects", description: "Ongoing and completed research projects" },
        { name: "Research Journals", path: "/research-innovation/research-journals", description: "Published research and publications" },
      ]
    },
    {
      name: "BIC", 
      path: "/bic/what-we-do", 
      description: "Our services and support programs",
    },
    { name: "News & Events", path: "/news-events" },
    { name: "Contact", path: "/contact" },  
  ];
  
  // Check if current path is within a section
  const isPathInSection = (section) => {
    if (!section.subItems) return false;
    return section.subItems.some(item => location.pathname === item.path);
  };

  // Handle navigation item hover
  const handleNavItemEnter = (item) => {
    if (item.subItems) {
      setHoveredSection(item.name);
    }
  };

  const handleNavItemLeave = () => {
    // Small delay to allow moving to submenu
    setTimeout(() => {
      if (!menuRef.current?.matches(':hover')) {
        setHoveredSection(null);
      }
    }, 100);
  };

  const handleMenuEnter = () => {
    // Keep menu open when hovering over it
    if (hoveredSection) {
      setHoveredSection(hoveredSection);
    }
  };

  const handleMenuLeave = () => {
    setHoveredSection(null);
  };

  const handleLinkClick = () => {
    setHoveredSection(null);
    setIsMenuVisible(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="bg-white text-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">            
            {/* Logo - Left aligned */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="h-10 w-10">
                <img
                  src={logo}
                  alt="MUET Logo"
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
              <span className="text-xl font-semibold">ORIC</span>
            </Link>            
            
            {/* Main Navigation Links - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-5">
                {navItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative"
                    onMouseEnter={() => handleNavItemEnter(item)}
                    onMouseLeave={handleNavItemLeave}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        className={`text-sm font-medium transition-colors text-gray-800 hover:text-blue-700 ${location.pathname === item.path ? "text-blue-700 font-bold" : ""}`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span
                        className={`text-sm font-medium transition-colors text-gray-800 hover:text-blue-700 cursor-pointer flex items-center space-x-1 ${isPathInSection(item) || hoveredSection === item.name ? "text-blue-700 font-bold" : ""}`}
                      >
                        <span>{item.name}</span>
                        <FiChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${hoveredSection === item.name ? 'rotate-180' : ''}`}
                        />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Animated ORIC Full Name - Right aligned */}
            <div className="hidden lg:flex items-center justify-end flex-shrink-0">
              <span className="relative block min-w-[170px] h-7 text-right">
                <span
                style={oricHighlight}
                  className={`text-lg font-semibold whitespace-nowrap transition-all duration-500 ${
                    animationState === 'entering' 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {fullNameWords[currentWordIdx]}
                </span>
              </span>
            </div>

            <div className="flex items-center">
              {/* Hamburger menu button for mobile and medium screens */}
              <button
                className="block lg:hidden p-2 text-blue-300 transition-colors focus:outline-none"
                style={{ boxShadow: 'none', background: 'none' }}
                onClick={() => setIsMenuVisible(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* User Portal/Profile */}
              {!user ? (
                <></>
              ) : (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center space-x-2 hover:bg-gray-800 rounded-lg px-3 py-2 transition-colors"
                  >
                    <img
                      src={
                        user?.profilePic ||
                        "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(user.username) +
                          "&background=random"
                      }
                      alt="Profile"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-medium">{user?.username}</p>
                      <p className="text-xs text-gray-400">{user?.role}</p>
                    </div>
                    <FiChevronDown
                      className={`transition-transform ${
                        profileDropdownOpen ? "transform rotate-180" : ""
                      }`}
                      size={14}
                    />
                  </button>                  
                  {/* Profile Dropdown */}
                  {profileDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                      <button
                        onClick={() => {
                          user?.role === "admin"
                            ? navigate("/AdminProfile")
                            : navigate("/UserProfile");
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <FiUser className="mr-3" />
                        View Profile
                      </button>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        onClick={() => {
                          localStorage.clear();
                          navigate("/");
                          window.location.reload();
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <FiLogOut className="mr-3" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>        
        </div>

        {/* Full-width Hover Content Sections */}
        {isMenuVisible && (
          <div
            ref={menuRef}
            className={`absolute top-full left-0 w-full bg-white text-slate-900 shadow-lg border-t border-gray-700 transition-all duration-300 ease-in-out z-40 ${
              hoveredSection 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Main intro section */}
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-light mb-4 leading-tight">
                    {hoveredSection === 'About' && 'Learn about our mission and organization'}
                    {hoveredSection === 'Collaboration' && 'Partnership opportunities and alliances'}
                    {hoveredSection === 'Research & Innovation' && 'Funding, projects, and breakthrough research'}
                    {hoveredSection === 'BIC' && 'Business incubation and startup support'}
                  </h2>
                  <Link
                    to={navItems.find(item => item.name === hoveredSection)?.subItems[0]?.path}
                    onClick={handleLinkClick}
                    className="inline-block border border-gray-400 hover:border-white px-6 py-2 text-sm transition-colors mt-4 rounded hover:bg-gray-800 hover:text-gray-100"
                  >
                    Learn more
                  </Link>
                </div>

                {/* Sub-items as cards */}
                {navItems
                  .find(item => item.name === hoveredSection)
                  ?.subItems?.map((subItem, subIndex) => (
                    <div key={subIndex} className="group/card  p-4 rounded-lg transition-colors duration-200">
                      <h3 className="text-xl font-medium mb-3 text-blue-400 group-hover/card:text-blue-400 transition-colors">
                        {subItem.name}
                      </h3>
                      <p className="text-slate-900 text-sm mb-4 leading-relaxed">
                        {subItem.description}
                      </p>
                      <Link
                        to={subItem.path}
                        onClick={handleLinkClick}
                        className="text-slate-900 hover:text-slate-700 text-sm transition-colors inline-flex items-center"
                      >
                        Learn more
                        <ChevronRight size={14} className="ml-1 group-hover/card:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        {/* Mobile/Tablet Navigation Drawer */}
        {isMenuVisible && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
            <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-xl flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <span className="text-xl font-semibold text-white">Menu</span>
                <button
                  className="text-white p-2"
                  onClick={() => setIsMenuVisible(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-800">
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuVisible(false)}
                        className="block px-6 py-3 text-gray-100 hover:text-blue-400 text-base font-medium hover:bg-gray-800 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div>
                        <span className="block px-6 py-3 text-gray-100 hover:text-blue-400 text-base font-medium">{item.name}</span>
                        {item.subItems && (
                          <div className="pl-4">
                            {item.subItems.map((sub, subIdx) => (
                              <Link
                                key={subIdx}
                                to={sub.path}
                                onClick={() => setIsMenuVisible(false)}
                                className="block px-4 py-2 text-gray-300 hover:text-blue-400 text-sm hover:bg-gray-800 rounded transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default NewNavbar;