'use client';

import { motion } from 'framer-motion';

export const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 bg-neutral-950 -z-10 overflow-hidden">
      {/* Primary aurora blob */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] rounded-full opacity-50"
        style={{
          background: 'linear-gradient(to right, rgb(13 20 53), rgb(34 45 97))',
          filter: 'blur(7rem)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary aurora blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[80%] h-[80%] rounded-full opacity-30"
        style={{
          background: 'linear-gradient(to right, rgb(79 70 229), rgb(219 39 119))',
          filter: 'blur(7rem)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [-100, 0, -100],
          y: [-50, 0, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Tertiary aurora blob */}
      <motion.div
        className="absolute -bottom-1/2 right-0 w-[70%] h-[70%] rounded-full opacity-40"
        style={{
          background: 'linear-gradient(to right, rgb(219 39 119), rgb(124 58 237))',
          filter: 'blur(7rem)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [50, -50, 50],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'soft-light',
        }}
      />
    </div>
  );
}; 