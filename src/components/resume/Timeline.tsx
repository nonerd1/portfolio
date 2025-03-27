'use client';

import { useState } from 'react';

// Sample resume data - in a real app, you might fetch this from a CMS
const resumeData = {
  education: [
    {
      id: 'edu-1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Electrical and Computer Engineering',
      date: '2020 - Present',
      description: 'Senior student specializing in embedded systems and computer architecture. GPA: 3.8/4.0',
      highlights: [
        'Dean\'s List for academic excellence (2020-2023)',
        'Capstone Project: Smart Home Energy Monitoring System',
        'Research Assistant: IoT Security Lab'
      ]
    },
    {
      id: 'edu-2',
      institution: 'Technical Community College',
      degree: 'Associate Degree in Electronics Technology',
      date: '2018 - 2020',
      description: 'Foundations in electronics, circuit analysis, and digital systems. GPA: 3.9/4.0',
      highlights: [
        'Student Representative, Engineering Club',
        'First place, Regional Robotics Competition',
        'Perfect attendance award'
      ]
    }
  ],
  experience: [
    {
      id: 'exp-1',
      company: 'TechSolutions Labs',
      position: 'Product Engineer',
      date: '2022 - Present',
      description: 'Developing microcontroller-based products and designing PCB layouts for commercial IoT devices.',
      highlights: [
        'Led the development of a low-power sensor network for industrial monitoring',
        'Optimized firmware to reduce power consumption by 40%',
        'Designed and implemented PCB layouts for 5 commercial products',
        'Collaborated with software team to create companion mobile applications'
      ]
    },
    {
      id: 'exp-2',
      company: 'TechStartup Inc.',
      position: 'Engineering Intern',
      date: 'Summer 2021',
      description: 'Assisted in developing prototypes for wearable health monitoring devices.',
      highlights: [
        'Implemented data processing algorithms for real-time health metrics',
        'Designed UI for companion mobile application',
        'Conducted user testing and documented feedback',
        'Created technical documentation for hardware interfaces'
      ]
    },
    {
      id: 'exp-3',
      company: 'University Research Lab',
      position: 'Undergraduate Researcher',
      date: '2020 - 2021',
      description: 'Conducted research on energy-efficient computing for IoT devices.',
      highlights: [
        'Developed test framework for evaluating power consumption',
        'Co-authored paper on energy optimization techniques',
        'Created simulation models for various IoT scenarios',
        'Presented findings at undergraduate research symposium'
      ]
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Certified PCB Designer',
      issuer: 'Electronics Design Association',
      date: '2022',
      description: 'Professional certification in PCB design and layout optimization.'
    },
    {
      id: 'cert-2',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2021',
      description: 'Foundational certification in cloud computing concepts and AWS services.'
    },
    {
      id: 'cert-3',
      name: 'Embedded Systems Programming',
      issuer: 'Microchip Technology',
      date: '2020',
      description: 'Specialized training in programming PIC and ARM microcontrollers.'
    }
  ]
};

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('experience');
  
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Resume</h2>
        
        {/* Resume Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md overflow-hidden">
            {['experience', 'education', 'certifications'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm md:text-base font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="flex justify-center mb-10">
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-300 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800/30 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
          </a>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-200 dark:bg-gray-700 transform md:translate-x-[-0.5px]"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {activeTab === 'experience' && resumeData.experience.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform md:translate-x-[-50%] mt-2 md:mt-0"></div>
                
                {/* Date */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} mb-4 md:mb-0 pl-10 md:pl-0`}>
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-300 text-sm rounded-full">
                    {item.date}
                  </span>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-10 md:pl-0`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold">{item.position}</h3>
                    <h4 className="text-primary-500 font-medium mb-2">{item.company}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            
            {activeTab === 'education' && resumeData.education.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform md:translate-x-[-50%] mt-2 md:mt-0"></div>
                
                {/* Date */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} mb-4 md:mb-0 pl-10 md:pl-0`}>
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-300 text-sm rounded-full">
                    {item.date}
                  </span>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-10 md:pl-0`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <h4 className="text-primary-500 font-medium mb-2">{item.institution}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            
            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeData.certifications.map(cert => (
                  <div 
                    key={cert.id}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-primary-500"
                  >
                    <div className="flex items-start mb-4">
                      <div className="mr-4 rounded-full bg-primary-100 dark:bg-primary-900/30 p-3 text-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{cert.name}</h3>
                        <p className="text-primary-500">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">Issued: {cert.date}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 