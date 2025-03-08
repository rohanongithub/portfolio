'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DecryptTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export const DecryptText = ({ text, className = '', delay = 0 }: DecryptTextProps) => {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypting, setIsDecrypting] = useState(false);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const timeout = setTimeout(() => {
      setIsDecrypting(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, mounted]);

  useEffect(() => {
    if (!isDecrypting || !mounted) return;

    let iteration = 0;
    const maxIterations = 10;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration / 3) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations * 3) {
        clearInterval(interval);
        setDisplayText(text);
      }

      iteration += 1;
    }, 30);

    return () => clearInterval(interval);
  }, [text, isDecrypting, mounted]);

  if (!mounted) {
    return <div className={className}>{text}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.div>
  );
}; 