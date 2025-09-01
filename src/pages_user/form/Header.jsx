import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-primary-800 text-white py-6 shadow-md">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Research Excellence</h1>
          <p className="mt-2 text-primary-100 text-center max-w-2xl">
            Submit your research achievements to showcase academic excellence and innovation
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;