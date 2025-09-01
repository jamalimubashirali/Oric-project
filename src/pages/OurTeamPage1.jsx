import React from 'react';
import { FiMail, FiPhone, FiSmartphone, FiPrinter, FiUser, FiBriefcase } from 'react-icons/fi';

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
          <span className="block">ORIC STEERING COMMITTEE</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      {/* Director Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <img 
                className="h-full w-full object-cover"
                src="/assets/images/sirtanveer.jpg" 
                alt="Prof. Dr. Tanweer Hussain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">PROF. DR. TANWEER HUSSAIN</h3>
                  <p className="text-teal-300 font-medium">DIRECTOR</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900">PROF. DR. TANWEER HUSSAIN</h2>
                <p className="text-blue-600 text-xl font-semibold">DIRECTOR</p>
                <p className="text-gray-600 mt-2">
                  Office of Research, Innovation & Commercialization (ORIC)<br />
                  Mehran University of Engineering & Technology, Jamshoro.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Official Email:</p>
                    <p className="text-gray-800">dir.oric@admin.muet.edu.pk</p>
                    <p className="text-gray-800">tanweer.hussain@faculty.muet.edu.pk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 2772250-73</p>
                </div>
                
                <div className="flex items-start">
                  <FiBriefcase className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 22 2772280 Ext. 6500</p>
                </div>
                
                <div className="flex items-start">
                  <FiPrinter className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 22 2772281</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">ORIC TEAM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Manager 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
              <FiUser className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">ARIF ALI JALBANI</h3>
              <p className="text-blue-600 mb-4">Manager Research Operations & Development</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiMail className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Official Email:</p>
                    <p className="text-gray-800">arif.ali@admin.muet.edu.pk</p>
                    <p className="text-gray-800">arifalieiu@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 21 2772250-73 Ext. 6503</p>
                </div>
                
                <div className="flex items-start">
                  <FiSmartphone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 316 8832427</p>
                </div>
                
                <div className="flex items-start">
                  <FiPrinter className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 22 2772281</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Manager 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center">
              <FiUser className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">DR. SYED MUHAMMAD ALI SHAH</h3>
              <p className="text-blue-600 mb-4">Manager, University Industry Linkages & Technology Transfer</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiMail className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">smalis@yahoo.com</p>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 22 2030661 Ext. 6509</p>
                </div>
                
                <div className="flex items-start">
                  <FiSmartphone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 300 9234586</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Manager 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center">
              <FiUser className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">TARIQUE MASROOR AHMED</h3>
              <p className="text-blue-600 mb-4">Manager Intellectual Property / Legal Services</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiMail className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">tarique.masroor@admin.muet.edu.pk</p>
                    <p className="text-gray-800">tarique.masroor@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiSmartphone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 300 3310275</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Manager 4 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-emerald-500 to-cyan-400 flex items-center justify-center">
              <FiUser className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">SAEED AHMED MEMON</h3>
              <p className="text-blue-600 mb-4">Accountant / Admin Officer</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiMail className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">saeed.memon@admin.muet.edu.pk</p>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 22 2772280 Ext. 6501</p>
                </div>
                
                <div className="flex items-start">
                  <FiSmartphone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 312 2787968</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* IT Coordinator */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-r from-violet-500 to-fuchsia-400 flex items-center justify-center">
              <FiUser className="text-white text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">MUHAMMAD HARIS SHAIKH</h3>
              <p className="text-blue-600 mb-4">I.T Coordinator</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiMail className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">muhammad.haris@admin.muet.edu.pk</p>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-800">+92 22 2772280 Ext. 6508</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departmental Coordinators */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-6 px-6 sm:px-8">
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


{/* Departmental Coordinators */}
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
  <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-6 px-6 sm:px-8">
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

