'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio" className="py-20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 p-1">
            {['All', 'Hardware', 'Web Development'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  filter === category
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full bg-gradient-to-r from-primary-400 to-primary-600">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-300 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description.length > 100 
                    ? `${project.description.substring(0, 100)}...` 
                    : project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View Project Link */}
                <Link 
                  href={project.link} 
                  className="inline-flex items-center font-medium text-primary-500 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200"
                >
                  View Project
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
          ))}
        </div>
      </div>
    </section>
  );
} 