import React from 'react';
import { FiMail, FiPhone, FiSmartphone, FiPrinter, FiUser, FiBriefcase, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SirTanveer from '../assets/images/sirtanveer.jpg';
import ArifAli from '../assets/images/arif.jpg';
import SyedShah from '../assets/images/alishah.jpg';
import TariqueAhmed from '../assets/images/tarique.jpg';
import SaeedMemon from '../assets/images/saeedahmed.jpg';
import HarisShaikh from '../assets/images/haris2.jpg';
import GulHassan from '../assets/images/hassan2.jpg';
import { Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurTeam = () => {
  
  const navigate=useNavigate()
  const teamMembers = [
    {
      name: "DR. SYED MUHAMMAD ALI SHAH",
      position: "Manager, University Industry Linkages & Technology Transfer",
      emails: ["smalis@yahoo.com"],
      phone: "+92 22 2030661 Ext. 6509",
      mobile: "+92 300 9234586",
      image: SyedShah
    },
    {
      name: "TARIQUE MASROOR AHMED",
      position: "Manager Intellectual Property / Legal Services",
      emails: ["tarique.masroor@admin.muet.edu.pk", "tarique.masroor@gmail.com"],
      mobile: "+92 300 3310275",
      image: TariqueAhmed
    },
    {
      name: "SAEED AHMED MEMON",
      position: "Accountant / Admin Officer",
      emails: ["saeed.memon@admin.muet.edu.pk"],
      phone: "+92 22 2772280 Ext. 6501",
      mobile: "+92 312 2787968",
      image: SaeedMemon
    },
    {
      name: "MUHAMMAD HARIS SHAIKH",
      position: "I.T Coordinator",
      emails: ["muhammad.haris@admin.muet.edu.pk"],
      phone: "+92 22 2772280 Ext. 6508",
      image: HarisShaikh
    },
    {
      name: "GUL HASSAN MEMON",
      position: "Departmental Coordinator",
      emails: ["gulhassan.memon@admin.muet.edu.pk"],
      phone: "+92 22 2772280 Ext. 6508",
      image: GulHassan
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-abstract-pattern opacity-50"></div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Banner Content */}
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ORIC</span> MUET
          </motion.h1>

          <motion.span 
            className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20"
          >
            OUR TEAM
          </motion.span>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Together for research and innovation
          </motion.p>
        </motion.div>
      </section>

      {/* Director Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ORIC Steering Committee
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leadership guiding our research and innovation ecosystem
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">              <div className="md:w-1/3 relative">
                <img
                  className="h-full w-full object-cover"
                  src={ArifAli}
                  alt="Arif Ali Jalbani"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white">ARIF ALI JALBANI</h3>
                    <p className="text-teal-300 font-medium">DIRECTOR</p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-8 md:p-10">                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">ARIF ALI JALBANI</h2>
                  <p className="text-blue-600 text-xl font-semibold mb-4">DIRECTOR</p>
                  <p className="text-gray-600">
                    Office of Research, Innovation & Commercialization (ORIC)<br />
                    Mehran University of Engineering & Technology, Jamshoro.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FiMail className="text-blue-600 text-xl" />
                    </div>                    <div>
                      <p className="text-sm text-gray-500 font-medium">Official Email</p>
                      <p className="text-gray-800">dir.oric@admin.muet.edu.pk</p>
                      <p className="text-gray-800">arif.ali@admin.muet.edu.pk</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FiPhone className="text-blue-600 text-xl" />
                    </div>                    <div>
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <p className="text-gray-800">+92 21 2772250-73</p>
                    </div>
                  </div>                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FiBriefcase className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Extension</p>
                      <p className="text-gray-800">+92 21 2772250-73 Ext. 6503</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FiSmartphone className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Mobile</p>
                      <p className="text-gray-800">+92 316 8832427</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FiPrinter className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Fax</p>
                      <p className="text-gray-800">+92 22 2772281</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Team
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make our research initiatives possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-400 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-teal-200">{member.position}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <FiMail className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        {member.emails.map((email, i) => (
                          <p key={i} className="text-gray-800">{email}</p>
                        ))}
                      </div>
                    </div>

                    {member.phone && (
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <FiPhone className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Phone</p>
                          <p className="text-gray-800">{member.phone}</p>
                        </div>
                      </div>
                    )}

                    {member.mobile && (
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <FiSmartphone className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Mobile</p>
                          <p className="text-gray-800">{member.mobile}</p>
                        </div>
                      </div>
                    )}

                    {member.fax && (
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <FiPrinter className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Fax</p>
                          <p className="text-gray-800">{member.fax}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Research Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Collaborate with ORIC MUET to drive innovation and make an impact through research
          </p>
         
          <div className="flex flex-col sm:flex-row justify-center gap-4">
       
            <button 
            onClick={()=>{
              navigate('/contact')
            }} className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Contact Our Team
            </button>
      
           
          </div>
        
        </div>
      </section>

    {/* Departmental Coordinators */}
<div className="max-w-7xl mx-auto py-20 px-4">
<div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
  <div className="text-white bg-gradient-to-r from-blue-600 to-cyan-500 py-6 px-6 sm:px-8">
    <h2 className="text-2xl font-bold text-white text-center">DEPARTMENTAL COORDINATORS</h2>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            S.No.
          </th>
          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            Department / Centre
          </th>
          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            Name of Coordinator
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {[
          { id: 1, department: 'Architecture', name: 'Dr. Sabeen Qureshi' },
          { id: 2, department: 'Basic Science & Related Studies', name: 'Dr. Muhammad Mujtaba Shaikh' },
          { id: 3, department: 'Biomedical Engineering', name: 'Dr. Muhammad Aamir Panhwar' },
          { id: 4, department: 'Centre of English Language & Linguistics', name: 'Mr. Fayaz Ali Chandio' },
          { id: 5, department: 'Chemical Engineering', name: 'Dr. Muhammad Shuaib Shaikh' },
          { id: 6, department: 'City & Regional Planning', name: 'Dr. Irfan Ahmed Memon' },
          { id: 7, department: 'Civil Engineering', name: 'Hafiz Usama Imad Uddin' },
          { id: 8, department: 'Computer Systems Engineering', name: 'Dr. Adnan Ashraf' },
          { id: 9, department: 'Electrical Engineering', name: 'Dr. Pervez Hameed Shaikh' },
          { id: 10, department: 'Electronics Engineering', name: 'Dr. Muhammad Zaigham Abbas' },
          { id: 11, department: 'Environmental Engineering', name: 'Mr. Waheed Ali Khokhar' },
          { id: 12, department: 'Industrial Engineering & Management', name: 'Mr. Miskeen Ali' },
          { id: 13, department: 'Mechanical Engineering', name: 'Mr. Muhammad Atif Qaimkhani' },
          { id: 14, department: 'Mechatronics Engineering', name: 'Dr. Saifullah Samo' },
          { id: 15, department: 'Mehran University Institute of Science, Technology & Development', name: 'Dr. Adnan Pitafi' },
          { id: 16, department: 'Metallurgy & Materials Engineering', name: 'Dr. Umair Aftab Pirwani' },
          { id: 17, department: 'Mining Engineering', name: 'Dr. Sultan Ahmed Khoso' },
          { id: 18, department: 'Petroleum & Natural Gas Engineering', name: 'Dr. Ubedullah Ansari' },
          { id: 19, department: 'Software Engineering', name: 'Mr. Suresh Kumar' },
          { id: 20, department: 'Telecommunication Engineering', name: 'Dr. Muhammad Zafi Shehram Shah' },
          { id: 21, department: 'Textile Engineering', name: 'Dr. Samandar Ali Malik' },
          { id: 22, department: 'US-Pakistan Centre for Advanced Studies in Water', name: 'Mr. Rajoo Menghwar' }
        ].map((coordinator) => (
          <tr key={coordinator.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {coordinator.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {coordinator.department}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {coordinator.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>
    

    </div>

    
  );
};

export default OurTeam;