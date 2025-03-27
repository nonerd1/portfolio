'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animate on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-primary-500">Ishaan Singh</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Electrical & Computer Engineer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Product Engineer specializing in microcontroller development, PCB design, and building modern web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/portfolio" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                View My Work
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-700/20 rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          {/* Hero Image/Animation */}
          <div className={`relative h-[500px] md:h-[600px] transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="relative w-full h-full max-w-[500px] max-h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/photoLinkfufu.png"
                  alt="Ishaan Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Tech icons floating around */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 animate-float-delay-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-primary-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 animate-float-delay-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-primary-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 animate-float-delay-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-primary-400 dark:text-primary-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 