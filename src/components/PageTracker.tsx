'use client';

import { motion } from 'framer-motion';

interface PageTrackerProps {
  currentPage: 'hero' | 'skills' | 'projects' | 'contact';
  onNavigate: (page: 'hero' | 'skills' | 'projects' | 'contact') => void;
}

export function PageTracker({ currentPage, onNavigate }: PageTrackerProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {/* Background line */}
      <div className="absolute top-0 h-full w-[1px] bg-white/20" />
      
      {/* Active line overlay */}
      <motion.div 
        className="absolute w-[1px] bg-white"
        initial={{ height: '25%', top: '0%' }}
        animate={{ 
          height: '25%',
          top: currentPage === 'hero' 
            ? '0%' 
            : currentPage === 'skills'
            ? '25%'
            : currentPage === 'projects'
            ? '50%'
            : '75%'
        }}
        transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
      />

      <div className="relative flex flex-col gap-4">
        <button
          onClick={() => onNavigate('hero')}
          className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
            currentPage === 'hero' ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label="Navigate to hero section"
        />
        <button
          onClick={() => onNavigate('skills')}
          className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
            currentPage === 'skills' ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label="Navigate to skills section"
        />
        <button
          onClick={() => onNavigate('projects')}
          className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
            currentPage === 'projects' ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label="Navigate to projects section"
        />
        <button
          onClick={() => onNavigate('contact')}
          className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
            currentPage === 'contact' ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label="Navigate to contact section"
        />
      </div>
    </div>
  );
} 