'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string | ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'reveal' | 'slide' | 'fade';
}

export const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  duration = 1,
  type = 'reveal',
}: AnimatedTextProps) => {
  const variants = {
    reveal: {
      hidden: { y: '100%' },
      visible: { y: 0 },
    },
    slide: {
      hidden: { x: '-100%' },
      visible: { x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      {text}
    </motion.div>
  );
}; 