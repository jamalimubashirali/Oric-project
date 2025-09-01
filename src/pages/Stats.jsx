import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Library, Landmark } from 'lucide-react';

const Stats = () => {
  const statsRef = useRef(null);
  const [numbers, setNumbers] = useState({
    graduates: 0,
    faculty: 0,
    programs: 0,
    centers: 0,
    years: 0,
  });

  const stats = [
    { 
      icon: GraduationCap, 
      number: "25,000+", 
      label: "Graduates", 
      key: "graduates",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      icon: Users, 
      number: "500+", 
      label: "Faculty Members", 
      key: "faculty",
      color: "from-purple-400 to-indigo-400"
    },
    { 
      icon: BookOpen, 
      number: "100+", 
      label: "Programs", 
      key: "programs",
      color: "from-emerald-400 to-teal-400"
    },
    { 
      icon: Library, 
      number: "50+", 
      label: "Research Centers", 
      key: "centers",
      color: "from-amber-400 to-orange-400"
    },
    { 
      icon: Landmark, 
      number: "130+", 
      label: "Years of Excellence", 
      key: "years",
      color: "from-rose-400 to-pink-400"
    },
  ];

  // Function to animate numbers
  const animateNumbers = (key, targetValue) => {
    const duration = 2; // Duration for the animation
    const steps = 30; // Number of steps for the animation
    let current = 0;

    const increment = Math.ceil(targetValue / steps);

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(interval);
      }
      setNumbers((prev) => ({ ...prev, [key]: current }));
    }, duration * 1000 / steps);
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat) => {
              const value = parseInt(stat.number.replace(/[^0-9]/g, ''), 10);
              animateNumbers(stat.key, value);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={statsRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#001a33] to-[#003366]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Achievements</span>
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Decades of excellence in education, research, and innovation that have shaped countless lives and communities.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map(({ icon: Icon, number, label, key, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${color} shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <motion.h3 
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {numbers[key]}
                {number.includes('+') && '+'}
              </motion.h3>
              
              <p className="text-lg text-blue-200 text-center">{label}</p>
              
              {/* Animated underline */}
              <motion.div 
                className="w-16 h-1 mt-4 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] font-medium">
            Discover Our Legacy
          </button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;