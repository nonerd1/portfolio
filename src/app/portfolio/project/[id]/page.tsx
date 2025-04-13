import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Import the projects data
import { projects, Project } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id));
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container-custom">
          <div className="mb-6">
            <Link href="/portfolio" className="text-blue-500 hover:text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Project Hero Section */}
            <div className="relative h-64 md:h-96 w-full bg-gradient-to-r from-blue-400 to-purple-500">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm rounded-full">
                  {project.category}
                </span>
              </div>
              
              {/* Project Description */}
              <div className="prose dark:prose-invert max-w-none mb-8">
                <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {project.description}
                </p>
                
                {/* Extended description - customized based on project ID */}
                {project.id === 1 ? (
                  <>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      This project involved designing wearable EEG earbuds that can monitor brainwave activity and transmit the data wirelessly to a smartphone application. The earbuds utilize dry electrodes for comfort and ease of use, making them practical for everyday wear.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      The system is built around a low-power microcontroller that processes raw EEG signals and performs initial filtering. The processed data is then transmitted using Bluetooth Low Energy to maintain battery efficiency, allowing for all-day use without recharging.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      The companion mobile application provides real-time visualization of brainwave patterns and offers insights into focus levels, relaxation states, and sleep quality. Machine learning algorithms analyze the data to provide personalized recommendations for improving cognitive performance and mental well-being.
                    </p>
                  </>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    This is a detailed overview of the project. In a real implementation, you would expand on the project details,
                    challenges faced, solutions implemented, and outcomes achieved. You can add multiple paragraphs and sections
                    to fully describe the project.
                  </p>
                )}
                
                {/* Technical Details Section - customized based on project ID */}
                <h2 className="text-xl font-semibold mt-8 mb-4">Technical Details</h2>
                {project.id === 1 ? (
                  <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      The EEG earbuds hardware includes:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                      <li>Custom-designed PCB with ultra-small form factor</li>
                      <li>Low-power ARM Cortex-M4F microcontroller for signal processing</li>
                      <li>Bluetooth 5.2 module for wireless connectivity</li>
                      <li>ADS1299 analog front-end for high-precision EEG acquisition</li>
                      <li>Rechargeable LiPo battery with wireless charging capability</li>
                      <li>Gold-plated dry electrodes for reliable skin contact</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Software architecture:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                      <li>Real-time DSP algorithms for noise filtering and artifact removal</li>
                      <li>Firmware written in C/C++ with FreeRTOS for task scheduling</li>
                      <li>React Native mobile application for cross-platform compatibility</li>
                      <li>Cloud-based data analytics using TensorFlow for pattern recognition</li>
                      <li>End-to-end encryption for data privacy and security</li>
                    </ul>
                  </>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    This section would contain technical specifications, architecture details, and implementation notes.
                    You can describe the technologies used in depth and explain why certain technical decisions were made.
                  </p>
                )}
                
                {/* Screenshots Section - Placeholder */}
                <h2 className="text-xl font-semibold mt-8 mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Screenshot 1</p>
                  </div>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Screenshot 2</p>
                  </div>
                </div>
              </div>
              
              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="border-t dark:border-gray-700 pt-8 mt-8">
                <Link 
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  View Live Demo
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-4 h-4 ml-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 