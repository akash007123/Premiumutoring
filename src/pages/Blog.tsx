import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Master JavaScript in 30 Days!",
    excerpt: "Learn JavaScript with our structured approach in just 30 days...",
    image: "https://miro.medium.com/v2/resize:fit:919/1*sW_fIK4OGhdxjRTxIWHjXw.png",
    content: "JavaScript is the backbone of modern web development. In this guide, we will cover essential concepts, best practices, and projects to boost your skills."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React Hooks, how they work, and when to use them...",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*-Ijet6kVJqGgul6adezDLQ.png",
    content: "React Hooks allow developers to use state and lifecycle features in functional components. Learn about useState, useEffect, and custom hooks in this detailed tutorial."
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    excerpt: "Start your journey with Node.js and build powerful server-side applications...",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    content: "Node.js is a runtime environment for executing JavaScript outside the browser. Learn how to build scalable backend systems using Express.js and MongoDB."
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox",
    excerpt: "Which one should you use? Understand the key differences and use cases...",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*PLc4FzCuX0rmowC7NeTutA.png",
    content: "CSS Grid and Flexbox are both powerful layout techniques. Discover their differences, best practices, and when to use each for responsive design."
  },
  {
    id: 5,
    title: "Mastering TypeScript",
    excerpt: "Upgrade your JavaScript skills with TypeScript’s powerful features...",
    image: "https://img-c.udemycdn.com/course/750x422/3591648_7284_6.jpg",
    content: "TypeScript brings static typing to JavaScript. Learn about interfaces, generics, and type safety to write more robust code."
  },
  {
    id: 6,
    title: "Introduction to Next.js",
    excerpt: "Build high-performance React applications with Next.js...",
    image: "https://miro.medium.com/v2/resize:fit:1035/1*nNYEBG_ApJgfW00x7sJMqQ.jpeg",
    content: "Next.js offers features like SSR, static site generation, and API routes. Learn how to optimize your React apps for better performance."
  },
  {
    id: 7,
    title: "Building RESTful APIs with Express.js",
    excerpt: "Create and manage APIs efficiently using Express.js...",
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10227551/og_image/optimized/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
    content: "Express.js is a minimal and flexible Node.js framework. Learn how to structure, secure, and optimize APIs for real-world applications."
  },
  {
    id: 8,
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping web development...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHUM8CF8bGY-mlGKsK-csNaVTSLXA4Z5IFw&s",
    content: "From AI-driven design to Web3, discover what the future holds for web development and how you can stay ahead in the industry."
  }
];

export default function Blog() {
  const [search, setSearch] = useState("");

  return (
    <>
        <br /><br /><br />
        <div className="container mx-auto py-12 px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-4xl font-bold text-center mb-8">
        Premium Tutoring Blog
      </motion.h1>
      
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())).map(post => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:from-purple-500 hover:to-blue-500 transition duration-300">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
