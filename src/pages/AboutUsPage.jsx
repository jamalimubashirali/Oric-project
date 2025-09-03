import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DirectorImage from "../assets/images/Director_img.jpg";
import ViceChancellerImage from "../assets/images/Vice Chanceller Pic.jpg";
import AboutUsImage from "../assets/images/oric.png";

const AboutUsPage = () => {
  const vcControls = useAnimation();
  const directorControls = useAnimation();
  const aboutControls = useAnimation();
  const partnersControls = useAnimation();
  
  const [vcRef, vcInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [directorRef, directorInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [partnersRef, partnersInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);
  
  useEffect(() => {
    if (vcInView) {
      vcControls.start("visible");
    }
  }, [vcControls, vcInView]);
  
  useEffect(() => {
    if (directorInView) {
      directorControls.start("visible");
    }
  }, [directorControls, directorInView]);

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    }
  }, [aboutControls, aboutInView]);

  useEffect(() => {
    if (partnersInView) {
      partnersControls.start("visible");
    }
  }, [partnersControls, partnersInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };  const data = {
    vcName: "Prof. Dr. Tauha Hussain Ali",
    vcDesignation: "Vice Chancellor, MUET Jamshoro",
    vcMessage: "At Mehran University of Engineering and Technology, we are committed to fostering an environment of academic excellence, research innovation, and technological advancement.\n\nOur Office of Research, Innovation and Commercialization (ORIC) stands as a testament to our dedication to bridging the gap between academia and industry.\n\nThrough ORIC, we aim to cultivate a research culture that not only contributes to the global knowledge base but also addresses the pressing challenges facing our nation.\n\nI encourage all our faculty members, students, and researchers to actively engage with ORIC's initiatives and contribute to making Pakistan a hub of innovation and technological progress.",
    vcAbrivation: 'DT',
    directorName: "Mr. Arif Ali Jalbani",
    designation: "Director, ORIC MUET Jamshoro",
    directorMessage: "Welcome to the Office of Research, Innovation and Commercialization (ORIC) at Mehran University. ORIC serves as a dynamic bridge between academia, industry, and society — fostering a culture of research excellence, innovation, and entrepreneurial mindset.\n\nOur mission is to support and promote impactful research that addresses national challenges, drives economic development, and enhances societal well-being.\n\nWe are committed to empowering faculty, students, and researchers by providing opportunities for collaboration, funding, commercialization, and capacity-building.\n\nTogether, we aim to transform knowledge into innovation and ideas into enterprise. I invite you all to join hands with ORIC in our pursuit of a knowledge-based, progressive Pakistan.",
    directorAbrivation : 'AJ'
  };

  const partners = [
    "National Incubation Center Hyderabad",
    "Pakistan Civil Aviation Authority",
    "Research & Development Foundation",
    "Sindh Economic Zone Management Company",
    "Fast Cables",
    "Universiti Tun Hussein Onn Malaysia",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Abstract Banner with Reduced Height */}
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
              opacity: Math.random() * 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              ORIC
            </span>{" "}
            MUET
          </motion.h1>

          <motion.span className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20">
            ABOUT US
          </motion.span>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering research and innovation for Pakistan's future
          </motion.p>
        </motion.div>      </section>      {/* Vice Chancellor's Message Section */}
      <section ref={vcRef} className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={vcControls}
            variants={containerVariants}
            className="flex flex-col lg:flex-row-reverse gap-12 items-center"
          >
            {/* VC Image with Creative Frame */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 relative group"
            >
              <div className="mx-auto w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl aspect-[4/4] bg-gray-100">
                <img
                  src={ViceChancellerImage}
                  alt="Vice Chancellor MUET"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* <div className="mx-auto max-w-xl mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">{data.vcName}</h3>
                <p className="text-blue-600 font-medium">{data.vcDesignation}</p>
              </div> */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl -z-10"
                animate={{
                  rotate: [0, -8, 8, 0],
                  opacity: [0.8, 1, 0.8, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* VC's Message Content */}
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <motion.span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
                Vice Chancellor's Message
              </motion.span>

              <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Excellence
                </span>{" "}
                in Education
              </motion.h2>              <motion.div className="space-y-4 text-gray-600 mb-8">
                {data.vcMessage.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              <motion.div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {data.vcAbrivation}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {data.vcName}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-medium">
                    {data.vcDesignation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>      
      {/* Director's Message Section */}
      <section ref={directorRef} className="py-20 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={directorControls}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Director Image with Creative Frame */}            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 relative group"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/4] bg-gray-100">
                <img
                  src={DirectorImage}
                  alt="Director ORIC"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -z-10 opacity-20"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Director's Message Content */}
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <motion.span className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20">
                Director's Message
              </motion.span>

              <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Vision
                </span>{" "}
                into Reality
              </motion.h2>

              <motion.div className="space-y-4 text-gray-600 mb-8">
                {data.directorMessage.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              <motion.div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {data.directorAbrivation}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {data.directorName}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-medium">
                    {data.designation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>      {/* About ORIC Section */}
      <section ref={aboutRef} className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={aboutControls}
            variants={containerVariants}
            className="flex flex-col lg:flex-row-reverse gap-12 items-center"
          >
            {/* Team Image */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 relative group"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
                <img
                  src={AboutUsImage}
                  alt="ORIC Team"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl -z-10 opacity-80"
                animate={{
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <motion.span className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20">
                About ORIC
              </motion.span>

              <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Mission
                </span>{" "}
                & Vision
              </motion.h2>

              <motion.div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      1
                    </span>
                    Mission Statement
                  </h3>
                  <p className="text-gray-600">
                    To foster a vibrant research ecosystem that drives
                    innovative solutions to technological challenges, and
                    promoting the commercialization of discoveries, by
                    strengthening partnerships with industry and academia, while
                    contributing to sustainable development.{" "}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      2
                    </span>
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To promote innovation and a vibrant research culture among
                    faculty members and students, fostering a dynamic
                    environment that encourages collaboration, creativity, and
                    cutting-edge advancements in the institution.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>      {/* MOU Partners Section */}
      <section ref={partnersRef} className="py-20 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={partnersControls}
            variants={containerVariants}
            className="text-center mb-16"
          >
            {/* ...existing content... */}
            <motion.span
              variants={itemVariants}
              className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 border border-cyan-500/20"
            >
              OUR MOU PARTNERS
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Strategic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Partnerships
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Collaborating with leading organizations to drive innovation and
              research excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={partnersControls}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 transition-all duration-300 group-hover:bg-blue-500/20">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800">{partner}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
