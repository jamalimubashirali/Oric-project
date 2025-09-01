import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewNavbar from './components/NewNavbar';
import Footer from './components/Footer';
import Features from './pages/Features.jsx';
import Hero from "./pages/Hero.jsx";
import Stats from "./pages/Stats.jsx";
import ResearchThemes from './pages/ResearchThemes.jsx';
import DirectorMsg from './pages/DirectorMsg.jsx';
import AboutUs from './pages/AboutUs.jsx';
import SignUp from "./pages/SignUp.jsx";
import Hero1 from './pages/Hero1.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import OurTeamPage from './pages/OurTeamPage.jsx';
import WhatIsIpo from './pages/WhatIsIpo.jsx';
import IpTechPolicy from './pages/IpTechPolicy.jsx';
import IndustrialCollaboration from './pages/IndustrialCollobration.jsx';
import InstitutionalCollaboration from './pages/InstitutionalCollaboration.jsx';
import OtherCollaboration from './pages/OtherCollobration.jsx';
import Login from './pages/Login.jsx';
import Home from './pages_Admin/Home.jsx';
import TeacherDashboard from './pages_Admin/TeacherDashboard.jsx';
import UserManage from './pages_Admin/UserManage.jsx';
import LoginApprove from './pages_Admin/LoginApprove.jsx';
import FundOpportunity from './pages/FundOpportunity.jsx';
import FundProjects from './pages/FundProjects.jsx';
import ResearchJournals from './pages/ResearchJournals.jsx';
import WhoWeAre from './pages/WhoWeAre.jsx';
import WhatWeDo from './pages/WhatWeDo.jsx';
import NewsAndEvents from './pages/NewsAndEvents.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import Sidebar  from './components/Sidebar.jsx';
import Home1 from './pages_Admin/Home1.jsx';

import { stringify } from 'postcss';
import { useEffect, useState } from 'react';


import AdminViewProfile from './pages_Admin/AdminViewProfile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Unauthorized from './components/Unauthorized.jsx';
import UserHome from './pages_user/UserHome.jsx';
import ResearchExcellenceForm from './pages_user/form/ResearchExcellenceForm.jsx';
import ResearchExcellenceRecords from './pages_user/form/ResearchExcellenceRecords.jsx';
import User_published_papers from './pages_Admin/models/User_published_papers.jsx';
import MyPublish from './pages_user/MyPublish.jsx';



function App() {
  // const [user, setuser] = useState()
  const [user, setUser] = useState(null);

  // On mount, get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  return (
    <Router>
      
      <div className="bg-black">
        {/* {user===null||user===undefined?
        <Navbar />:''} */}

{/* {user && <Navbar />} */}        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
            <NewNavbar >
              {/* <Hero /> */}
              <Hero1/>
              <DirectorMsg />
              <Stats />
              <AboutUs />
              <ResearchThemes />
              {/* <ImageSlider/> */}
              {/* <Features/> */}
              </NewNavbar>
            </>
          } />


          {/*  Contact Us */}
          <Route path="/contact" element={<NewNavbar><ContactUsPage /></NewNavbar>} />


          {/*  /news-events */}
          <Route path="/news-events" element={<NewNavbar>  <NewsAndEvents /></NewNavbar>} />

          {/*  /bic/what-we-do*/}
          <Route path="/bic/what-we-do" element={<NewNavbar><WhatWeDo /></NewNavbar>} />

           {/*  /bic/who-we-are */}
           {/* <Route path="/bic/who-we-are" element={<NewNavbar><WhoWeAre /></NewNavbar>} /> */}

           {/*  Research Journals */}
           <Route path="/research-innovation/research-journals" element={<NewNavbar><ResearchJournals /></NewNavbar>} />

          {/*  FundProjects */}
          <Route path="/research-innovation/funded-projects" element={<NewNavbar><FundProjects /></NewNavbar>} />

          {/*  FundOpportunity */}
          <Route path="/research-innovation/funded-opportunity" element={<NewNavbar><FundOpportunity /></NewNavbar>} />

           {/*  OtherCollaboration */}
           <Route path="/collaboration/other-collaboration" element={<NewNavbar><OtherCollaboration /></NewNavbar>} />

           {/*  insitutional-collobration */}
           <Route path="/collaboration/institutional-collobration" element={<NewNavbar><InstitutionalCollaboration /></NewNavbar>} />

           {/*  industrial-collobration */}
           <Route path="/collaboration/industrial-collobration" element={<NewNavbar><IndustrialCollaboration /></NewNavbar>} />

           {/* IPo Policy  */}
           <Route path="/about/ip-tech-policy" element={<NewNavbar><IpTechPolicy /></NewNavbar>} />

           {/* what-is-ipo  */}
           <Route path="/about/what-is-ipo" element={<NewNavbar><WhatIsIpo /></NewNavbar>} />
          
          {/* OurTeam Page */}
          <Route path="/about/team" element={<NewNavbar><OurTeamPage /></NewNavbar>} />

          {/* AboutUs Page */}
          <Route path="/aboutus" element={<NewNavbar><AboutUsPage /></NewNavbar>} />

          {/* Signup Page */}
          <Route path="/signup" element={<NewNavbar><SignUp /></NewNavbar>} />
          <Route path="/login" element={<NewNavbar><Login /></NewNavbar>} />
          <Route path="/sidebar" element={<Sidebar />} />

        <Route path="/unauthorized" element={<Unauthorized />} />


          
          
          {/* {Admin pages } */}



          {/* Admin Only */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/papers" element={<ResearchExcellenceRecords />} />

          <Route path="/Dashboard" element={<Home1 />} />
          <Route path="/home1" element={<Home />} />
          {/* <Route path="/Dashboard" element={<Home1 />} /> */}
          {/* <Route path="/Admin-Dash" element={<TeacherDashboard />} /> */}
          <Route path="/All-Users" element={<UserManage />} />
          {/* <Route path="/Student-profile/:studentId" element={<UserManage />} /> */}
          <Route path="/LoginApprove" element={<LoginApprove />} />
          <Route path="/AdminProfile" element={<AdminViewProfile />} />
          <Route path="/User_published_papers" element={<User_published_papers />} />

          {/* User_published_papers.jsx */}
        </Route>

  {/* User Only */}
        <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/UserDashboard" element={<UserHome />} />
        <Route path="/request-to-publish" element={<ResearchExcellenceForm />} />

          
          <Route path="/mypublish" element={<MyPublish />} /> 
         
          <Route path="/userProfile" element={<AdminViewProfile />} /> 
        </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
