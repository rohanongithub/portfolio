'use client';

import { useEffect, useRef, useState } from 'react';
import { TextReveal } from '@/components/TextReveal';
import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { PageTracker } from '@/components/PageTracker';
import Aurora from '@/components/Aurora';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<'hero' | 'skills' | 'projects' | 'contact'>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

  const handleNavigate = (page: 'hero' | 'skills' | 'projects' | 'contact') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSection(page);

    const refs = {
      hero: heroRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef
    };

    refs[page].current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsTransitioning(false), 800);
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime.current < 500 || isTransitioning) return;
      lastScrollTime.current = now;
      
      if (e.deltaY > 0) {
        // Scrolling down
        if (currentSection === 'hero') {
          handleNavigate('skills');
        } else if (currentSection === 'skills') {
          handleNavigate('projects');
        } else if (currentSection === 'projects') {
          handleNavigate('contact');
        }
      } else {
        // Scrolling up
        if (currentSection === 'contact') {
          handleNavigate('projects');
        } else if (currentSection === 'projects') {
          handleNavigate('skills');
        } else if (currentSection === 'skills') {
          handleNavigate('hero');
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection, isTransitioning]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 500) return;
      lastScrollTime.current = now;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentSection === 'hero') {
          handleNavigate('skills');
        } else if (currentSection === 'skills') {
          handleNavigate('projects');
        } else if (currentSection === 'projects') {
          handleNavigate('contact');
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentSection === 'contact') {
          handleNavigate('projects');
        } else if (currentSection === 'projects') {
          handleNavigate('skills');
        } else if (currentSection === 'skills') {
          handleNavigate('hero');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isTransitioning]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <Aurora
        colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
        blend={0.84}
        amplitude={1.2}
        speed={0.2}
      />
      <Navbar onNavigate={handleNavigate} />
      <PageTracker currentPage={currentSection} onNavigate={handleNavigate} />
      
      <motion.main 
        ref={heroRef}
        className="relative min-h-screen"
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: currentSection === 'hero' ? 1 : 0,
          y: currentSection === 'hero' ? 0 : -50
        }}
        transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24">
          <div className="-mt-20 relative z-10 max-w-2xl">
            <TextReveal
              text="Hey there,"
              className="text-4xl md:text-6xl font-light mb-4 text-white tracking-wide"
              delay={0.2}
            />
            <TextReveal
              text="I am Rohan"
              className="text-5xl md:text-7xl font-semibold text-gradient mb-4 tracking-tight"
              delay={0.4}
            />
            <TextReveal
              text="to-be full stack developer"
              className="text-xl md:text-2xl font-light text-gray-400 tracking-wider"
              delay={0.6}
            />
          </div>
          
          <div className="w-full md:w-[60%] mt-12 md:mt-0 flex justify-end items-center pr-4">
            <TextReveal
              delay={0.8}
              className="w-full flex justify-end items-center"
              text={
                <svg
                  viewBox="0 0 400 400"
                  width="500"
                  height="500"
                  className="mr-[-40px] opacity-90"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Terminal Window Background */}
                  <rect
                    x="40"
                    y="40"
                    width="320"
                    height="320"
                    rx="20"
                    fill="#1a1a1a"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  
                  {/* Terminal Header */}
                  <rect
                    x="40"
                    y="40"
                    width="320"
                    height="40"
                    rx="20"
                    fill="#333"
                  />
                  
                  {/* Window Controls */}
                  <circle cx="70" cy="60" r="6" fill="#ff5f56"/>
                  <circle cx="95" cy="60" r="6" fill="#ffbd2e"/>
                  <circle cx="120" cy="60" r="6" fill="#27c93f"/>
                  
                  {/* Terminal Content */}
                  <g fill="#fff" opacity="0.9">
                    {/* Command Prompt */}
                    <text x="60" y="120" fontSize="14" fontFamily="monospace">$</text>
                    <text x="80" y="120" fontSize="14" fontFamily="monospace" fill="#4CAF50">npm</text>
                    <text x="115" y="120" fontSize="14" fontFamily="monospace">run dev</text>
                    
                    {/* Output Lines */}
                    <text x="60" y="150" fontSize="14" fontFamily="monospace" fill="#64B5F6">➜</text>
                    <text x="80" y="150" fontSize="14" fontFamily="monospace">Starting development server...</text>
                    
                    <text x="60" y="180" fontSize="14" fontFamily="monospace" fill="#64B5F6">➜</text>
                    <text x="80" y="180" fontSize="14" fontFamily="monospace">Ready on http://localhost:3000</text>
                    
                    {/* Blinking Cursor */}
                    <rect x="60" y="200" width="8" height="2" fill="#fff">
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                </svg>
              }
            />
          </div>
        </section>
      </motion.main>

      <motion.div
        ref={skillsRef}
        className="relative min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: currentSection === 'skills' ? 1 : 0,
          y: currentSection === 'skills' ? 0 : currentSection === 'hero' ? 50 : -50
        }}
        transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <Skills />
      </motion.div>

      <motion.div
        ref={projectsRef}
        className="relative min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: currentSection === 'projects' ? 1 : 0,
          y: currentSection === 'projects' ? 0 : currentSection === 'skills' ? 50 : -50
        }}
        transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <Projects />
      </motion.div>

      <motion.div
        ref={contactRef}
        className="relative min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: currentSection === 'contact' ? 1 : 0,
          y: currentSection === 'contact' ? 0 : 50
        }}
        transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
