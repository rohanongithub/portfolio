'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
  onNavigate?: (section: 'hero' | 'skills' | 'projects' | 'contact') => void;
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
  const navLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '#', action: () => onNavigate?.('projects') },
    { name: 'Contact', href: '#', action: () => onNavigate?.('contact') },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-white font-semibold text-2xl tracking-widest drop-shadow-sm">
              RP
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.action ? (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-gray-100 hover:text-white text-sm font-medium tracking-wider transition-all duration-300 ease-out drop-shadow-sm hover:drop-shadow-md opacity-90 hover:opacity-100"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-100 hover:text-white text-sm font-medium tracking-wider transition-all duration-300 ease-out drop-shadow-sm hover:drop-shadow-md opacity-90 hover:opacity-100"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}; 