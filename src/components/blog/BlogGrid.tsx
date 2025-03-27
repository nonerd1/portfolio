'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample blog data - in a real app, you might fetch this from a CMS
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Embedded Systems in IoT',
    excerpt: 'Exploring how modern microcontrollers are revolutionizing the Internet of Things landscape.',
    date: 'March 15, 2023',
    category: 'Technology',
    readTime: '5 min read',
    image: '/placeholder-blog.jpg'
  },
  {
    id: 2,
    title: 'Optimizing Power Consumption in Wearable Devices',
    excerpt: 'Best practices for designing energy-efficient circuits for the next generation of wearable technology.',
    date: 'February 28, 2023',
    category: 'Hardware Design',
    readTime: '8 min read',
    image: '/placeholder-blog.jpg'
  },
  {
    id: 3,
    title: 'From Idea to PCB: A Design Journey',
    excerpt: 'A step-by-step walkthrough of my process for turning concept sketches into manufactured circuit boards.',
    date: 'January 10, 2023',
    category: 'PCB Design',
    readTime: '12 min read',
    image: '/placeholder-blog.jpg'
  },
  {
    id: 4,
    title: 'The Role of AI in Modern Engineering',
    excerpt: 'How machine learning algorithms are changing the way we approach hardware and software development.',
    date: 'December 5, 2022',
    category: 'Technology',
    readTime: '6 min read',
    image: '/placeholder-blog.jpg'
  },
  {
    id: 5,
    title: 'Building a Career in Hardware Engineering',
    excerpt: 'Lessons learned and advice for aspiring electrical and computer engineers entering the industry.',
    date: 'November 18, 2022',
    category: 'Career',
    readTime: '7 min read',
    image: '/placeholder-blog.jpg'
  },
  {
    id: 6,
    title: 'The Intersection of Hardware and Software in Modern Products',
    excerpt: 'How the lines between hardware and software development are blurring in today\'s tech landscape.',
    date: 'October 22, 2022',
    category: 'Industry Trends',
    readTime: '9 min read',
    image: '/placeholder-blog.jpg'
  }
];

// Unique categories for the filter
const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <section id="blog" className="py-20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Thoughts</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              {/* Post Image */}
              <div className={`h-48 relative ${
                index % 3 === 0 ? 'bg-gradient-to-r from-primary-400 to-primary-600' :
                index % 3 === 1 ? 'bg-gradient-to-r from-secondary-400 to-secondary-600' :
                'bg-gradient-to-r from-primary-500 to-navy-600'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                  <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                  >
                    Read More
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-4 h-4 ml-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
} 