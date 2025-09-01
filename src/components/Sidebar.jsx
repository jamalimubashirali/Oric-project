import { useState, useRef, useEffect } from 'react';
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
  FiSearch
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SidebarWithNavbar = () => {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user'));
   // converts JSON string to object
 


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <FiHome className="text-lg" />,
      link: 'Dashboard'
    },
    {
      name: 'All Papers',
      icon: <FiHome className="text-lg" />,
      link: 'papers'
    },
   
    {
      name: 'Users',
      icon: <FiUsers className="text-lg" />,
      // link: '#',
      submenu: [
        { name: 'All Users', link: 'All-Users' },
        { name: 'Pending Users', link: 'LoginApprove' }
      ]
    },
    {
      name: 'Messages',
      icon: <FiMail className="text-lg" />,
      link: 'feedback'
    },
   
    {
      name: 'Settings',
      icon: <FiSettings className="text-lg" />,
      link: '#',
      submenu: [
        { name: 'Profile', link: 'AdminProfile' },
       
      
      ]
    }
  ];

  const usermenuItems = [
    {
      name: 'Dashboard',
      icon: <FiHome className="text-lg" />,
      link: 'UserDashboard'
    },
    {
      name: 'User',
      icon: <FiPieChart className="text-lg" />,
      link: '#',
      submenu: [
        { name: 'Reports', link: '#' },
        { name: 'Statistics', link: '#' }
      ]
    },
    {
      name: 'Publish Paper',
      icon: <FiUsers className="text-lg" />,
      // link: '#',
      submenu: [
        { name: 'Request To Publish', link: 'request-to-publish' },
        { name: 'My Publish', link: 'mypublish' }
      ]
    },
    
   
   
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0A192F] to-[#112240] text-white shadow-lg h-16 flex items-center px-4">
        {/* Mobile menu button */}
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md text-white lg:hidden mr-2"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo/Brand */}
        <div className="flex items-center"
        onClick={()=>{
          navigate('/')
        }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            MUET ORIC
          </motion.div>
        </div>

        {/* Search Bar - Desktop */}
        {/* <div className="hidden lg:flex mx-4 flex-1 max-w-md">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#112240] border border-[#233554] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div> */}

        {/* Profile Dropdown */}
        <div className="ml-auto  flex items-center" ref={profileRef}>
          <button 
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="relative">
            <img
                      src={user?.profilePic || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.username) + "&background=random"}
                      alt="Profile"
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                    />
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-[#0A192F]"></div>
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-sm font-medium">{user?.username}</p>
              <p className="text-xs text-blue-300">{user?.role}</p>
            </div>
            <FiChevronDown className={`hidden lg:block transition-transform ${profileDropdownOpen ? 'transform rotate-180' : ''}`} />
          </button>

          {/* Profile Dropdown Menu */}
          <AnimatePresence>
            {profileDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-4 top-16 mt-2 w-56 origin-top-right bg-[#0A192F] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              >
                <div className="py-1">
                  <a
                     onClick={()=>{
                      {user?.role==='admin'?navigate('/AdminProfile'):navigate('/UserProfile')}
                    }}
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#112240] "
                  >
                    <FiUser className="mr-3" />
                    View Profile
                  </a>
                  {/* <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#112240]"
                  >
                    <FiSettings className="mr-3" />
                    Settings
                  </a> */}
                  <div className="border-t border-[#112240]"></div>
                  <a
                    onClick={()=>{
                      localStorage.clear()
                      navigate('/')
                      // window.location.reload()
                    }}
                    className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-[#112240]"
                  >
                    <FiLogOut className="mr-3" />
                    
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Search - appears below navbar when needed */}
      {/* <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-[#0A192F] px-4 py-2 shadow-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#112240] border border-[#233554] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div> */}

      {/* Desktop Sidebar - starts below navbar */}
      <motion.div
        initial={{ width: "16rem" }}
        animate={{ width: isOpen ? "16rem" : "5rem" }}
        className="hidden lg:block fixed top-16 left-0 bottom-0 z-40 bg-gradient-to-b from-[#0A192F] to-[#112240] text-white shadow-xl"
      >
        <div className="flex flex-col h-full w-full">
          {/* Collapse button */}
          <div className="flex justify-end p-3">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-full bg-[#112240] hover:bg-[#0a1a36] transition-colors"
            >
              {isOpen ? (
                <FiChevronDown className="text-white transform rotate-90" />
              ) : (
                <FiChevronRight className="text-white transform rotate-90" />
              )}
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1  overflow-y-auto">
            {user?.role==='admin'&&
            <ul className="space-y-1 px-3 py-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div className="relative">
                    <a
                      // onClick={()=>}
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault();
                          toggleDropdown(index);
                        }else{
                        navigate(`/${item.link}`)}
                      }}
                      className={`flex items-center justify-between p-3 rounded-lg hover:bg-[#112240] transition-colors ${activeDropdown === index ? 'bg-[#112240]' : ''}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{item.icon}</span>
                        {isOpen && <span className="font-medium">{item.name}</span>}
                      </div>
                      {item.submenu && isOpen && (
                        <span>
                          {activeDropdown === index ? (
                            <FiChevronDown className="text-sm" />
                          ) : (
                            <FiChevronRight className="text-sm" />
                          )}
                        </span>
                      )}
                    </a>

                    {item.submenu && activeDropdown === index && isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 overflow-hidden"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              // href={subItem.link}
                              className="block p-2 rounded-lg hover:bg-[#0a1a36] transition-colors text-sm"
                              onClick={()=>{
                                
                                navigate(`/${subItem.link}`)}
                            }
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>}
            {user?.role==='user'&&
            <ul className="space-y-1 px-3 py-2">
              {usermenuItems.map((item, index) => (
                <li key={index}>
                  <div className="relative">
                    <a
                      // href={item.link}
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault();
                          toggleDropdown(index);
                        }
                        else{
                        navigate(`/${item.link}`)}
                      }}
                      className={`flex items-center justify-between p-3 rounded-lg hover:bg-[#112240] transition-colors ${activeDropdown === index ? 'bg-[#112240]' : ''}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{item.icon}</span>
                        {isOpen && <span className="font-medium">{item.name}</span>}
                      </div>
                      {item.submenu && isOpen && (
                        <span>
                          {activeDropdown === index ? (
                            <FiChevronDown className="text-sm" />
                          ) : (
                            <FiChevronRight className="text-sm" />
                          )}
                        </span>
                      )}
                    </a>

                    {item.submenu && activeDropdown === index && isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 overflow-hidden"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              // href={subItem.link}
                              onClick={()=>{
                                
                                  navigate(`/${subItem.link}`)}
                              }
                              className="block p-2 rounded-lg hover:bg-[#0a1a36] transition-colors text-sm"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>}
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-[#112240]">
            {isOpen ? (
              <div className="flex items-center space-x-3">
                  <img
                      src={user?.profilePic || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.username) + "&background=random"}
                      alt="Profile"
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                    />
                <div>
                  <p className="font-medium">{user?.username}</p>
                  <p className="text-xs text-[#64FFDA]">{user?.role}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                 <img
                      src={user?.profilePic || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.username) + "&background=random"}
                      alt="Profile"
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                    />
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              style={{ top: '4rem' }}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 left-0 bottom-0 w-64 z-40 bg-gradient-to-b from-[#0A192F] to-[#112240] text-white shadow-xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                  {user?.role==='admin'&&
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <div className="relative">
                          <a
                            // href={item.link}
                            onClick={(e) => {
                              if (item.submenu) {
                                e.preventDefault();
                                toggleDropdown(index);
                              }
                              else{
                                
                                
                                  navigate(`/${item.link}`)
                             
                              }
                            }}
                            className={`flex items-center justify-between p-3 rounded-lg hover:bg-[#112240] transition-colors ${activeDropdown === index ? 'bg-[#112240]' : ''}`}
                          >
                            <div className="flex items-center space-x-3">
                              <span>{item.icon}</span>
                              <span className="font-medium">{item.name}</span>
                            </div>
                            {item.submenu && (
                              <span>
                                {activeDropdown === index ? (
                                  <FiChevronDown className="text-sm" />
                                ) : (
                                  <FiChevronRight className="text-sm" />
                                )}
                              </span>
                            )}
                          </a>

                          {item.submenu && activeDropdown === index && (
                            <ul className="ml-8 mt-1 space-y-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={subItem.link}
                                    className="block p-2 rounded-lg hover:bg-[#0a1a36] transition-colors text-sm"
                                  >
                                    {subItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>}

                  {user?.role==='user'&&
                  <ul className="space-y-2">
                    {usermenuItems.map((item, index) => (
                      <li key={index}>
                        <div className="relative">
                          <a
                            // href={item.link}d
                            onClick={(e) => {
                              if (item.submenu) {
                                e.preventDefault();
                                toggleDropdown(index);
                              }
                              else{
                                
                                
                                navigate(`/${item.link}`)
                           
                            }
                            }}
                            className={`flex items-center justify-between p-3 rounded-lg hover:bg-[#112240] transition-colors ${activeDropdown === index ? 'bg-[#112240]' : ''}`}
                          >
                            <div className="flex items-center space-x-3">
                              <span>{item.icon}</span>
                              <span className="font-medium">{item.name}</span>
                            </div>
                            {item.submenu && (
                              <span>
                                {activeDropdown === index ? (
                                  <FiChevronDown className="text-sm" />
                                ) : (
                                  <FiChevronRight className="text-sm" />
                                )}
                              </span>
                            )}
                          </a>

                          {item.submenu && activeDropdown === index && (
                            <ul className="ml-8 mt-1 space-y-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    // href={subItem.link}
                                    className="block p-2 rounded-lg hover:bg-[#0a1a36] transition-colors text-sm"
                                   onclick={()=>{
                                    navigate(`/${subItem.link}`)

                                   }}
                                
                                
                                     
                                 
                                  
                                  >
                                    {subItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>}
                </nav>

                <div className="p-4 border-t border-[#112240]">
                  <div className="flex items-center space-x-3">
                  <img
                      src={user?.profilePic || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.username) + "&background=random"}
                      alt="Profile"
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                    />
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-[#64FFDA]">Admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content area */}
      <div 
        className={`transition-all duration-300 min-h-screen ${isOpen ? 'lg:pl-64' : 'lg:pl-20'}`}
        style={{ paddingTop: '6rem' }} /* Compensate for navbar + mobile search height */
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default SidebarWithNavbar;