import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="flex justify-center relative">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/portfolio/images/photoLinkfufu.png"
                alt="Ishaan Singh"
                width={288}
                height={288}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-xl z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl z-[-1]"></div>
          </div>
          
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-500">Ishaan Singh</h3>
            <h4 className="text-xl mb-6 text-gray-600 dark:text-gray-300">Product Engineer</h4>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a senior studying Electrical and Computer Engineering with a passion for building innovative hardware and software solutions. Currently, I work as a Product Engineer where I develop microcontroller applications and design PCB layouts.
              </p>
              <p>
                My technical expertise includes embedded systems programming, PCB design, and full-stack web development. I'm particularly interested in IoT devices and creating seamless interfaces between hardware and software.
              </p>
              <p>
                When I'm not coding or soldering, you'll find me at the gym, going for runs, or diving into books ranging from sci-fi to business and literature. I'm particularly fascinated by space technologies and exploration, and I love discovering new places.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Technical Skills</h5>
              <div className="flex flex-wrap gap-2">
                {[
                  { skill: 'PCB Design', color: 'primary' },
                  { skill: 'Microcontrollers', color: 'secondary' },
                  { skill: 'C/C++', color: 'navy' },
                  { skill: 'Python', color: 'primary' },
                  { skill: 'React', color: 'secondary' },
                  { skill: 'Node.js', color: 'navy' },
                  { skill: 'Circuit Design', color: 'primary' },
                  { skill: 'IoT', color: 'secondary' }
                ].map(({ skill, color }) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 ${
                      color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' :
                      color === 'secondary' ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300' :
                      'bg-navy-100 dark:bg-navy-900/30 text-navy-700 dark:text-navy-300'
                    } rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 