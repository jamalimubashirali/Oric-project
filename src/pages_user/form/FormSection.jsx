import React from 'react';
import { motion } from 'framer-motion';

const FormSection = ({ title, children }) => {
  return (
    <motion.div 
      className="form-section"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-primary-800 mb-4 pb-2 border-b border-neutral-200">
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
};

export default FormSection;