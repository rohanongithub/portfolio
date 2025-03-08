'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const MapEmbed = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[600px] rounded-3xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* Shimmer border effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
          }}
          animate={{
            x: isHovered ? ['100%', '-100%'] : '0%',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Right border */}
        <motion.div
          className="absolute top-0 right-0 bottom-0 w-[2px]"
          style={{
            background: 'linear-gradient(180deg, transparent, #4ECDC4, transparent)',
          }}
          animate={{
            y: isHovered ? ['100%', '-100%'] : '0%',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />

        {/* Bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent, #4ECDC4, transparent)',
          }}
          animate={{
            x: isHovered ? ['-100%', '100%'] : '0%',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />

        {/* Left border */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-[2px]"
          style={{
            background: 'linear-gradient(180deg, transparent, #4ECDC4, transparent)',
          }}
          animate={{
            y: isHovered ? ['-100%', '100%'] : '0%',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
        />
      </motion.div>

      {/* Map iframe */}
      <div className="mapouter h-full">
        <div className="gmap_canvas h-full">
          <iframe
            className="gmap_iframe w-full h-full rounded-3xl"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bengaluru&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-30"
        style={{
          boxShadow: 'inset 0 0 20px rgba(78, 205, 196, 0.1)',
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}; 