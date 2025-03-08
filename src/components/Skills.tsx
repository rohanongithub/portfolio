'use client';

import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';

const SkillIcon = ({ name, svg }: { name: string; svg: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center p-4 glass-card rounded-xl transition-colors duration-300">
    <div className="w-16 h-16 flex items-center justify-center mb-2">
      {svg}
    </div>
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

export const Skills = () => {
  const skills = [
    {
      name: 'Cursor',
      svg: (
        <img src="/svgs/cursor.svg" alt="Cursor" className="w-12 h-12 opacity-90" />
      )
    },
    {
      name: 'HTML',
      svg: (
        <img src="/svgs/html.svg" alt="HTML" className="w-12 h-12 brightness-0 invert opacity-90" />
      )
    },
    {
      name: 'CSS',
      svg: (
        <img src="/svgs/css3.svg" alt="CSS" className="w-12 h-12 brightness-0 invert opacity-90" />
      )
    },
    {
      name: 'Axios',
      svg: (
        <img src="/svgs/axios.svg" alt="Axios" className="w-12 h-12 brightness-0 invert opacity-90" />
      )
    },
    {
      name: 'Node.js',
      svg: (
        <img src="/svgs/nodejs.svg" alt="Node.js" className="w-12 h-12 brightness-0 invert opacity-90" />
      )
    },
    {
      name: 'Express',
      svg: (
        <img src="/svgs/expressjs.svg" alt="Express" className="w-12 h-12 brightness-0 invert opacity-90" />
      )
    },
    {
      name: 'EJS',
      svg: (
        <img src="/svgs/ejs.svg" alt="EJS" className="w-12 h-12 brightness-0 invert opacity-90" />
      )
    },
    {
      name: 'Git',
      svg: (
        <img src="/svgs/git.svg" alt="Git" className="w-12 h-12 brightness-0 invert opacity-90" />
      )
    }
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20">
      {/* Grid of skill icons */}
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillIcon
              key={skill.name}
              name={skill.name}
              svg={skill.svg}
            />
          ))}
        </div>
      </div>

      {/* Text content */}
      <motion.div 
        className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16 flex flex-col justify-center items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <TextReveal
            text="Tech Stack"
            className="text-5xl md:text-7xl font-semibold text-gradient mb-6 tracking-tight"
            delay={0.2}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <TextReveal
            text="Currently, all I know about"
            className="text-xl md:text-2xl font-light text-gray-400 tracking-wider"
            delay={0.4}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}; 