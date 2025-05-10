"use client";

import { NavbarBlog } from "@/components/NavbarBlog";
import Aurora from "@/components/Aurora";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const blogContent = {
  "typography"{
    title: `Importance of Typography`,
    date: "May 10, 2025",
    readTime: "2 min read",
      content: 
  `<img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbmRvd3N8ZW58MHwwfDB8fHww"  
     alt="Apple vs Windows Typography"  
     class="w-full h-82 rounded-xl" />

<h2>Typography: The Silent Communicator</h2>
<p>Typography is more than just selecting fonts; it's about conveying brand identity, enhancing readability, and guiding user interaction. Both Apple and Windows have distinct typographic philosophies that reflect their design ethos.</p>

<h3>Apple's Approach</h3>
<p>Apple's design emphasizes simplicity and elegance. The San Francisco typeface, introduced in 2015, is tailored for clarity and legibility across devices. Its dynamic nature adjusts spacing and weight to optimize readability on various screen sizes, embodying Apple's commitment to user-centric design.</p>

<h3>Windows' Strategy</h3>
<p>Windows prioritizes consistency and functionality. The Segoe UI font family serves as the cornerstone of its Fluent Design System, ensuring uniformity across applications. This approach facilitates a cohesive user experience, especially in enterprise environments where clarity and efficiency are paramount.</p>

<h2>Comparative Insights</h2>
<ul>
  <li><strong>Design Philosophy:</strong> Apple leans towards aesthetic minimalism, while Windows focuses on practical consistency.</li>
  <li><strong>Font Dynamics:</strong> San Francisco offers adaptive features for diverse devices; Segoe UI maintains uniformity across platforms.</li>
  <li><strong>User Experience:</strong> Apple's typography enhances visual appeal; Windows' typography ensures functional clarity.</li>
</ul>

<p>Understanding these typographic principles provides insight into how design choices impact user interaction and brand perception.</p>
  `,
  },
  "apple-design-principles": {
    title: `Apple's Design Principles`,
    date: "March 13, 2025",
    readTime: "3 min read",
    content: `
<img src="https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlfGVufDB8MHwwfHx8MA%3D%3D"  
     alt="Apple Sample Image"  
     class="w-full h-82 rounded-xl" />

      <h2>The Importance of Design Principles</h2>
      <p>Apple's design principles are the foundation of its iconic products and seamless user experiences. These principles guide the company's approach to design, ensuring that each product is intuitive, elegant, and user-friendly.</p>

      <h3>Simplicity</h3>
      <p>Apple's design philosophy emphasizes simplicity. The company believes that less is more, and that complex interfaces can be overwhelming and confusing for users. Apple's designs are designed to be simple and easy to understand, with a focus on functionality and usability.</p>

      <h3>Elegance</h3>
      <p>Apple's designs are known for their elegance and simplicity. The company's designs are designed to be beautiful and functional, with a focus on user experience and usability.</p>

      <h3>User Focus</h3>
      <p>Apple's designs are designed to be user-friendly and intuitive. The company's designs are designed to be easy to use, with a focus on user experience and usability.</p>

      <h2>Design in Action</h2>
      <p>Apple's design principles are evident in all of its products. From the iPhone to the MacBook, Apple's designs are designed to be simple, elegant, and user-friendly.</p>

      <h3>iPhone Design</h3>
<p>The iPhone embodies Apple's design philosophy with its sleek form, intuitive interface, and seamless integration of hardware and software, making everyday tasks effortless.</p>

<h3>MacBook Design</h3>
<p>The MacBook reflects Apple's commitment to minimalism and performance, featuring a unibody aluminum build, a high-resolution display, and a smooth macOS experience.</p>

<h3>iPad Design</h3>
<p>The iPad combines portability and versatility with a responsive touchscreen, powerful multitasking capabilities, and support for accessories like the Apple Pencil and Magic Keyboard.</p>

    `,
  },

  "apple-core-architecture": {
    title: "Understanding Apple's Core Architecture",
    date: "March 8, 2025",
    readTime: "8 min read",
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
    `,
  },
  "optimizing-web-performance": {
    title: "Back to Basics: Lightning Fast Websites",
    date: "March 8, 2025",
    readTime: "6 min read",
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
    `,
  },
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
            "#FF69B4", // pink
            "#FF69B4", // pink
            "#FF69B4", // pink
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
