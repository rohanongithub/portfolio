'use client';

import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';
import { Map } from './Map';

const SocialLink = ({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
  >
    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:text-[#00D8FF] transition-colors">
      {icon}
    </div>
    <span className="text-lg">{label}</span>
  </a>
);

export const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20">
      {/* Contact content */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <TextReveal
          text="Let's Connect!"
          className="text-5xl md:text-7xl font-semibold text-gradient mb-6 tracking-tight"
          delay={0.2}
        />
        <TextReveal
          text="Feel free to reach out for collaborations or just a friendly hello 👋"
          className="text-xl md:text-2xl font-light text-gray-400 tracking-wider mb-12"
          delay={0.4}
        />
        
        <div className="space-y-8">
          <SocialLink
            href="https://github.com/rohanongithub"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            }
            label="GitHub"
          />
          <SocialLink
            href="mailto:rohanunidays@gmail.com"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            label="Email"
          />
        </div>
      </motion.div>

      {/* Illustration or decorative element */}
      <motion.div 
        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <div className="glass-card p-8 rounded-xl max-w-md w-full">
          <h3 className="text-2xl font-semibold text-white mb-4">Quick Note</h3>
          <p className="text-gray-400 mb-4">
            Open for internships and collaborations.<br/>
            Undergrad at JSSATEB.
          </p>
          <p className="text-gray-400 mb-4">
            📍Bengaluru, India 
          </p>
          <Map />
        </div>
      </motion.div>
    </section>
  );
}; 