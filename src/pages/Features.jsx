import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Offering cutting-edge programs and research opportunities"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry leaders and renowned researchers"
    },
    {
      icon: GraduationCap,
      title: "Career Success",
      description: "High graduate employment rate and industry connections"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "International partnerships and exchange programs"
    }
  ];

  return (
    <section className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose MUET ORIC
          </h2>
          <p className="text-blue-300 max-w-2xl mx-auto">
            Experience excellence in education, research, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;