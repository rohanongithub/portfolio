'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  text: string | ReactNode;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className = '', delay = 0 }: TextRevealProps) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}; 