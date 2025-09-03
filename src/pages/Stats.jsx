import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, FlaskConical, Award, Layers, Star } from 'lucide-react';

const statsData = [
  {
    icon: FlaskConical,
    number: 32,
    label: 'Patents',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Award,
    number: 20,
    label: 'Funded Projects',
    color: 'from-purple-400 to-indigo-400',
  },
  {
    icon: Briefcase,
    number: 21,
    label: 'Industry Collaborators',
    color: 'from-emerald-400 to-teal-400',
  },
  {
    icon: Globe,
    number: 8,
    label: 'International Collaborators',
    color: 'from-amber-400 to-orange-400',
  },
  {
    icon: Star, // New icon for Years of Excellence
    number: 60,
    label: 'Years of Excellence',
    color: 'from-green-400 to-blue-400',
  },
];

const Stats = () => {
  const statsRef = useRef(null);
  const [numbers, setNumbers] = useState(statsData.map(() => 0));

  // Animate numbers on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statsData.forEach((stat, idx) => {
            const targetValue = stat.number;
            let current = 0;
            const steps = 30;
            const increment = Math.ceil(targetValue / steps);
            const interval = setInterval(() => {
              current += increment;
              if (current >= targetValue) {
                current = targetValue;
                clearInterval(interval);
              }
              setNumbers((prev) => {
                const updated = [...prev];
                updated[idx] = current;
                return updated;
              });
            }, 2000 / steps);
          });
        }
      });
    }, { threshold: 0.1 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
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
            Research, innovation, and collaboration driving progress and impact.
          </p>
        </motion.div>
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {statsData.map(({ icon: Icon, number, label, color }, index) => (
            <motion.div
              key={label + index}
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
                {numbers[index]}
                {numbers[index] === statsData[index].number ? '+' : ''}
              </motion.h3>
              <p className="text-lg text-blue-200 text-center">{label}</p>
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
      </div>
    </div>
  );
};

export default Stats;