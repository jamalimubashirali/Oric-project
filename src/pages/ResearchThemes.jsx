import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HeartIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  CpuChipIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const ResearchThemes = () => {
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const themes = [
    {
      title: "Societal Benefits",
      icon: HeartIcon,
      description: "Research focused on improving quality of life and addressing social challenges.",
      color: "bg-rose-100 text-rose-600"
    },
    {
      title: "Infrastructure Development",
      icon: BuildingOfficeIcon,
      description: "Innovative solutions for sustainable and resilient urban and rural infrastructure.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Expansion of Endowment Funds",
      icon: CurrencyDollarIcon,
      description: "Financial models and strategies to support long-term research sustainability.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Promoting Creativity And Innovation",
      icon: LightBulbIcon,
      description: "Fostering creative thinking and breakthrough innovations across disciplines.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Implementation of Cutting-Edge Technology",
      icon: CpuChipIcon,
      description: "Development and application of advanced technologies in various sectors.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Patent Developments",
      icon: DocumentTextIcon,
      description: "From ideation to commercialization of patented technologies and processes.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section ref={ref} id="research" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Research Focus Areas
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Key Research Themes</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring innovative solutions across diverse domains to address global challenges and drive meaningful impact.
          </p> */}
        </motion.div>

        {/* Research Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with animated background */}
                  <motion.div
                    className={`w-16 h-16 ${theme.color.replace('text', 'bg')} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <theme.icon className="h-8 w-8" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{theme.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{theme.description}</p>
                  
                  {/* Animated read more link */}
                  {/* <motion.div 
                    className="flex items-center text-blue-600 font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="mr-2">Learn more</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div> */}
                  
                  {/* Subtle decorative element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-full ${theme.color.replace('text', 'bg')} opacity-10 -z-1`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium hover:scale-[1.02]">
            Explore All Research Areas
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ResearchThemes;