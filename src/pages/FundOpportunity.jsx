import { motion } from "framer-motion";
import { FaChevronRight, FaUniversity, FaFlask, FaGlobe, FaBookOpen, FaMoneyBillWave } from "react-icons/fa";
import fundingData from '../data/fundingOpportunities.json';

const FundOpportunity = () => {
  // Icon mapping for dynamic rendering
  const iconMapping = {
    'FaFlask': FaFlask,
    'FaUniversity': FaUniversity,
    'FaGlobe': FaGlobe,
    'FaBookOpen': FaBookOpen,
    'FaMoneyBillWave': FaMoneyBillWave
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            {fundingData.pageTitle}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg text-blue-200"
          >
            {fundingData.pageDescription}
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {fundingData.sections.map((section, sectionIndex) => {
            const IconComponent = iconMapping[section.icon];
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.2 }}
                className="bg-[#0A192F]/70 border border-cyan-500/20 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className={`${section.backgroundColor} p-2 rounded-lg mr-3`}>
                    <IconComponent className={`${section.iconColor} text-xl`} />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                
                {section.categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6 last:mb-0">
                    <div className="flex items-center mb-3 ml-2">
                      <FaChevronRight className="text-cyan-400 mr-2" />
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                    
                    <ul className="space-y-2 pl-12">
                      {category.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: (sectionIndex * 0.2) + (categoryIndex * 0.1) + (itemIndex * 0.03) }}
                          className="flex items-center py-2 border-b border-blue-900/30 last:border-0"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FundOpportunity;