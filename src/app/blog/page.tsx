'use client';

import Aurora from '@/components/Aurora';
import { NavbarBlog } from '@/components/NavbarBlog';
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'apple-design-principles',
    title: `Apple's Design Principles`,
    description: `Exploring Apple's design principles—simplicity, elegance, and user focus—that shape its iconic products and seamless user experiences.`,
    date: 'March 13, 2025',
    readTime: '5 min read'
  },
  {
    id: 'optimizing-web-performance',
    title: 'Back to Basics: Lightning Fast Websites',
    description: 'Why less is more: Achieving blazing fast load times with minimal components and plain HTML.',
    date: 'March 8, 2025',
    readTime: '3 min read'
  },
  {
    id: 'apple-core-architecture',
    title: "Understanding Apple's Core Architecture",
    description: 'Deep dive into performance cores and efficiency cores in Apple Silicon - how they work together to deliver power and efficiency.',
    date: 'March 8, 2025',
    readTime: '5 min read'
  }
  
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <NavbarBlog />
      <div className="aurora-container">
        <Aurora 
          speed={0.3} 
          blend={0.83}
          colorStops={[
            '#FF69B4',  // pink
            '#FF69B4',  // pink
            '#FF69B4'   // pink
          ]}
        />
      </div>
      <main className="relative z-10 pt-32 px-6 max-w-4xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white tracking-tight">
            Thoughts & Musings
          </h1>
          <p className="text-lg text-gray-200 italic tracking-wide">
            Where code meets creativity, and ideas take flight
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8"
        >
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <motion.article 
                className="glass-card p-8 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {post.description}
                </p>
              </motion.article>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-24 h-[1px] bg-pink-300/40" />
        </motion.div>
      </main>
    </div>
  );
} 