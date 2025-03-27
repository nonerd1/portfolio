'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll event to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl">
          Ishaan Singh
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            key="/"
            href="/"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              pathname === "/"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Home
          </Link>
          <Link
            key="/about"
            href="/about"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              pathname === "/about"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            About
          </Link>
          <Link
            key="/portfolio"
            href="/portfolio"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              pathname === "/portfolio"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Portfolio
          </Link>
          <Link
            key="/resume"
            href="/resume"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              pathname === "/resume"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Resume
          </Link>
          <Link
            key="/blog"
            href="/blog"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              pathname === "/blog"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Thoughts
          </Link>
          <Link
            key="/contact"
            href="/contact"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              pathname === "/contact"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              pathname === "/"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              pathname === "/about"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              pathname === "/portfolio"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/resume"
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              pathname === "/resume"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            href="/blog"
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              pathname === "/blog"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Thoughts
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              pathname === "/contact"
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
} 