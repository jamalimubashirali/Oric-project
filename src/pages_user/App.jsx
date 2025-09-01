import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar  from './components/Sidebar.jsx';
import Home from './Home.jsx';
import AdminViewProfile from './AdminViewProfile.jsx';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Sidebar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
             <Home />
            </>
          } />


          {/*  Contact Us */}
          <Route path="/contact" element={<ContactUsPage />} />


          {/*  /news-events */}
          <Route path="/news-events" element={<NewsAndEvents />} />

          {/*  /bic/what-we-do*/}
          <Route path="/bic/what-we-do" element={<WhatWeDo />} />

           {/*  /bic/who-we-are */}
           <Route path="/bic/who-we-are" element={<WhoWeAre />} />

           {/*  Research Journals */}
           <Route path="/research-innovation/research-journals" element={<ResearchJournals />} />

          {/*  FundProjects */}
          <Route path="/research-innovation/funded-projects" element={<FundProjects />} />

          {/*  FundOpportunity */}
          <Route path="/research-innovation/funded-opportunity" element={<FundOpportunity />} />

           {/*  OtherCollaboration */}
           <Route path="/collaboration/other-collaboration" element={<OtherCollaboration />} />

           {/*  insitutional-collobration */}
           <Route path="/collaboration/institutional-collobration" element={<InstitutionalCollaboration />} />

           {/*  industrial-collobration */}
           <Route path="/collaboration/industrial-collobration" element={<IndustrialCollaboration />} />

           {/* IPo Policy  */}
           <Route path="/about/ip-tech-policy" element={<IpTechPolicy />} />

           {/* what-is-ipo  */}
           <Route path="/about/what-is-ipo" element={<WhatIsIpo />} />
          
          {/* OurTeam Page */}
          <Route path="/about/team" element={<OurTeamPage />} />

          {/* AboutUs Page */}
          <Route path="/aboutus" element={<AboutUsPage />} />

          {/* Signup Page */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />} />

          <Route path="/AdminProfile" element={<AdminViewProfile />} />



          {/* {Admin pages } */}

          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Admin-Dash" element={<TeacherDashboard />} />
          <Route path="/All-Users" element={<UserManage />} />
          <Route path="/Student-profile/:studentId" element={<UserManage />} />

          <Route path="/LoginApprove" element={<LoginApprove />} />







        </Routes>
      </div>
    </Router>
  );
}

export default App;
