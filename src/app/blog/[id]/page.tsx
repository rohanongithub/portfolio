'use client';

import { NavbarBlog } from '@/components/NavbarBlog';
import Aurora from '@/components/Aurora';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

const blogContent = {
  'apple-core-architecture': {
    title: "Understanding Apple's Core Architecture",
    date: 'March 8, 2025',
    readTime: '8 min read',
    content: `
      <h2>The Evolution of Apple Silicon</h2>
      <p>Apple's transition to custom silicon marked a revolutionary change in computer architecture. At the heart of this innovation lies a sophisticated approach to core management: the combination of performance and efficiency cores.</p>
      
      <h3>Performance Cores (P-cores)</h3>
      <p>These high-powered cores are designed for intensive tasks, featuring:</p>
      <ul>
        <li>Higher clock speeds for demanding applications</li>
        <li>Advanced branch prediction</li>
        <li>Deeper instruction pipelines</li>
        <li>Larger cache sizes for better performance</li>
      </ul>

      <h3>Efficiency Cores (E-cores)</h3>
      <p>These cores handle background tasks and less demanding processes:</p>
      <ul>
        <li>Lower power consumption</li>
        <li>Optimized for battery life</li>
        <li>Perfect for background processes</li>
        <li>Smaller cache but more energy-efficient</li>
      </ul>

      <h2>Working in Harmony</h2>
      <p>The magic happens in how these cores work together. Apple's hardware and software integration ensures tasks are automatically assigned to the most appropriate cores, maximizing both performance and efficiency.</p>
    `
  },
  'optimizing-web-performance': {
    title: 'Back to Basics: Lightning Fast Websites',
    date: 'March 8, 2025',
    readTime: '6 min read',
    content: `
      <h2>The Cost of Complexity</h2>
      <p>Modern web development often leads us down a path of increasing complexity. While powerful frameworks and libraries offer great features, they come at a cost to performance.</p>

      <h3>The Power of Plain HTML</h3>
      <p>Consider these benefits of minimal HTML:</p>
      <ul>
        <li>Zero JavaScript overhead</li>
        <li>Instant parsing and rendering</li>
        <li>Minimal network payload</li>
        <li>Better browser caching</li>
      </ul>

      <h3>Strategic Component Usage</h3>
      <p>When using components, follow these principles:</p>
      <ul>
        <li>Load components only when necessary</li>
        <li>Implement proper code splitting</li>
        <li>Use static generation where possible</li>
        <li>Minimize client-side JavaScript</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>The proof is in the numbers. Sites built with these principles often achieve sub-second load times and perfect Lighthouse scores, proving that sometimes less really is more.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id as keyof typeof blogContent];

  if (!post) {
    return <div>Post not found</div>;
  }

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
      <main className="relative z-10 pt-32 px-6 max-w-3xl mx-auto pb-20">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          <div 
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-8 rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </main>
    </div>
  );
} 