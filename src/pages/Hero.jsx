import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import Typewriter from "typewriter-effect";

const Hero = () => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const contentRef = useRef(null);

  const sliderImages = [
    'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  ];

  // Initialize GSAP animations
  useGSAP(() => {
    // Initial fade in
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Continuous floating animation for content
    gsap.to(contentRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: heroRef });

  // Slide transition effect
  const nextSlide = () => {
    gsap.to(sliderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        gsap.fromTo(sliderRef.current, 
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out" }
        );
      }
    });
  };

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background slider - REMOVED fixed positioning */}
      <div ref={sliderRef} className="absolute inset-0 w-full h-full transition-opacity duration-1000">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Campus ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ filter: 'brightness(0.5) contrast(1.1)' }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90" />

      {/* Content */}
      <section className="relative h-full w-full flex items-center justify-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            ref={contentRef}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-8 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <span className="text-blue-300 font-medium text-sm md:text-base tracking-wider">
                ESTABLISHED 1890
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                <Typewriter
                  options={{
                    strings: ["MUET ORIC"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl text-white font-medium mt-4">
                <Typewriter
                  options={{
                    strings: ["Office of Research, Innovation and Commercialization"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
            </motion.h1>

          
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-blue-300 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
            >
              <motion.span
                animate={{ y: [0, 5, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-blue-400 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;