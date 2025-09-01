import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import AboutUss from '../assets/images/ab1.png';

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Abstract floating shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[100px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Floating micro particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full"
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Building the Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Together</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            The Office of Research, Innovation, & Commercialization (ORIC) at Mehran University of Engineering and Technology (MUET), Jamshoro, is dedicated to fostering a culture of innovation, excellence, and strategic growth in research.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with Creative Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-100 shadow-2xl">
              <img
                src={AboutUss}
                alt="Our Team"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative floating elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-2xl border-2 border-cyan-500/20 z-[-1]"
              animate={{
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-500/10 rounded-2xl border-2 border-blue-500/20 z-[-1]"
              animate={{
                rotate: [0, -8, 8, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>

          {/* Content Section with Animated List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">About Us</span>
            </motion.h3>

            <motion.ul 
              className="space-y-6"
              initial="hidden"
              animate={inView ? "visible" : {}}
              variants={containerVariants}
            >
              {[
                "As a central hub for research activities, ORIC plays a pivotal role in transforming ideas into impactful solutions, bridging the gap between academia and industry.",
                "We aim to provide comprehensive support to researchers, enabling them to explore new frontiers of knowledge, protect intellectual property, and translate innovations into marketable products.",
                "We are committed to facilitating collaborations between academia, industry, and government to drive socioeconomic development through cutting-edge research."
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                  transition={{ delay: 0.8 + index * 0.15 }}
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="pt-4"
            >
              <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium group">
                Explore Our Initiatives
                <svg 
                  className="w-5 h-5 ml-3 inline-block group-hover:translate-x-2 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;