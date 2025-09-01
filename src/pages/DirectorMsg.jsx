import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SirArif from '../assets/images/Director_img.jpg';
import { Link } from 'react-router-dom';

const DirectorMsg = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const data = {
    directorName : 'Mr. Arif Ali Jalbani',
    designation : 'Director, ORIC MUET Jamshoro',
    message : 'Welcome to the Office of Research, Innovation, and Commercialization at Mehran University. We are committed to fostering an ecosystem where academic research transforms into impactful innovations that drive societal progress and economic growth.'
  }

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Floating micro particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500 rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.05
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Animated heading section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Message from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Director</span>
          </h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Director's profile section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
          {/* Director image with parallax effect */}
          <motion.div
            className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-2xl overflow-hidden shadow-2xl relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={SirArif}
              alt="Director"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-white">
                {data.directorName}
              </h3>
              <p className="text-cyan-200 font-medium">
                {data.designation}
              </p>
            </div>
          </motion.div>

          {/* Message card with elegant design */}
          <motion.div
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl max-w-2xl w-full border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white to-cyan-50 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-white to-cyan-50 rounded-tr-full"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-5 shadow-md"
                  initial={{ rotate: -45 }}
                  animate={inView ? { rotate: 0 } : {}}
                  transition={{ delay: 0.4, type: 'spring' }}
                >
                  <span>AJ</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    {data.directorName}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-medium">
                    {data.designation}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <svg className="absolute -left-8 -top-4 w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <motion.p 
                  className="text-lg leading-relaxed text-gray-600 mb-8 pl-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, staggerChildren: 0.05 }}
                >
                  {data.message}
                </motion.p>
             
                <svg className="absolute -right-4 -bottom-4 w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/aboutus">
  <motion.button
    className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium flex items-center group"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 10 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.6 }}
  >
    Read Full Message
    <svg
      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </motion.button>
</Link>
                {/* <motion.button
                  className="px-8 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium flex items-center group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65 }}
                >
                  View Profile
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.button> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMsg;