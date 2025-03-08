'use client';

import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';

const ProjectCard = ({ title, description, tech, link, website }: { 
  title: string;
  description: string;
  tech: string[];
  link: string;
  website?: string;
}) => (
  <div className="glass-card p-6 rounded-xl w-full h-full flex flex-col">
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item) => (
        <span
          key={item}
          className="px-2 py-1 bg-[#00D8FF]/10 text-[#00D8FF] rounded-full text-xs"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between mt-auto">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-[#00D8FF] hover:text-[#00D8FF]/80 transition-colors text-sm"
      >
        View Project
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#7CFF67] hover:text-[#7CFF67]/80 transition-colors ml-auto text-sm"
        >
          Visit Site
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  </div>
);

export const Projects = () => {
  const projects = [
    {
      title: "Weather Web App - rohan4casts",
      description: "A responsive weather application that provides real-time weather data using OpenWeatherMap API. Features include current conditions, hourly forecasts, and animated weather icons.",
      tech: ["React", "Axios", "OpenWeather API", "TailwindCSS"],
      link: "https://github.com/rohanongithub/rohan4casts",
      website: "https://rohan4casts.xyz"
    },
    {
      title: "Python Mood Detector",
      description: "An AI-powered application that analyzes facial expressions in real-time to detect emotions using computer vision and deep learning.",
      tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
      link: "https://github.com/rohanongithub/mood-detector"
    },
    {
      title: "Volatile Blog Site - blogstop",
      description: "A minimalist blogging platform that leverages local storage for persistent content management. Features include markdown support, auto-save functionality, and offline-first architecture for seamless writing experience.",
      tech: ["Node.js", "Express", "Axios", "TailwindCSS", "LocalStorage"],
      link: "https://github.com/rohanongithub/blogstop",
      website: "https://blogstop-5ddl.onrender.com/"
      
    },
    {
      title: "Portfolio Website",
      description: "A modern, interactive portfolio built entirely using Cursor AI in under 50 prompts. Features smooth page transitions, WebGL aurora effects, and responsive design. Demonstrates the power of AI-assisted development.",
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "WebGL", "Cursor AI"],
      link: "https://github.com/rohanongithub/Portfolio-ft.cursor",
      website: "https://rohan.vercel.app"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20">
      {/* Project cards */}
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      {/* Text content */}
      <motion.div 
        className="w-full md:w-1/3 mt-12 md:mt-0 md:pl-16 flex flex-col justify-center items-start"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <TextReveal
          text="Projects 🔥"
          className="text-5xl md:text-7xl font-semibold text-gradient mb-6 tracking-tight"
          delay={0.2}
        />
        <TextReveal
          text="Brick by brick..."
          className="text-xl md:text-2xl font-light text-gray-400 tracking-wider"
          delay={0.4}
        />
      </motion.div>
    </section>
  );
}; 