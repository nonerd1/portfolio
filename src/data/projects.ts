export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'EEG Smart Earbuds',
    category: 'Hardware',
    description: 'A microcontroller-based EEG earbuds system with brainwave monitoring capabilities and mobile app integration for health insights.',
    image: '/placeholder-project.jpg',
    tags: ['PCB Design', 'Embedded Systems', 'EEG', 'Mobile App', 'IoT'],
    link: '/portfolio/project/1'
  },
  {
    id: 2,
    title: 'Personal Finance Dashboard',
    category: 'Web Development',
    description: 'Interactive web application for tracking personal finances with data visualization.',
    image: '/placeholder-project.jpg',
    tags: ['React', 'Node.js', 'Chart.js', 'Tailwind CSS'],
    link: '/portfolio/project/2'
  },
  {
    id: 3,
    title: 'Extendable Arm Drone',
    category: 'Hardware',
    description: 'Developed a drone with custom-designed extendable/retractable arms. 3D printed specialized components to fit actuators connected to an STM32 microcontroller. Implemented Pixhawk flight controller with PID tuning and designed a power distribution board for optimal component power delivery.',
    image: '/placeholder-project.jpg',
    tags: ['STM32', 'Pixhawk', '3D Printing', 'PID Control', 'PCB Design'],
    link: '/portfolio/project/3'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce platform with secure payment processing and inventory management.',
    image: '/placeholder-project.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    link: '/portfolio/project/4'
  },
  {
    id: 5,
    title: 'Medical Walker',
    category: 'Hardware',
    description: 'Constructed walker to assist individuals who have lost fine motor skills. Equipped with ultrasonic sensors and 3-axis accelerometer. Demonstrated potential applications in fine motor skill improvement.',
    image: '/placeholder-project.jpg',
    tags: ['PCB Design', 'Sensors', 'Embedded Systems', 'Healthcare'],
    link: '/portfolio/project/5'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'Modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    image: '/placeholder-project.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design'],
    link: '/portfolio/project/6'
  }
]; 