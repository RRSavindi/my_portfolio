import { ExternalLink, Github } from 'lucide-react';
import calculatorImg from '../images/clculator.jpg';
import shopImg from '../images/plantShop.jpg';
import calVideo from '../videos/cal_video.mp4';
import plantshop from '../videos/my_plantshop.mp4';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
    image: shopImg,
    tags: ['Vite', 'typeScript', 'CSS'],
    github: 'https://github.com/RRSavindi/PlantShop.git',
    demo: plantshop,
  },
  {
    title: 'Smart Calculator Application',
    description: 'A lightweight calculator featuring a two-line display, keyboard support, and a minimalistic UI with dark/light mode.',
    image: calculatorImg,
    tags: ['javascript', 'python', 'CSS'],
    github: 'https://github.com/RRSavindi/Project1_myCalculator.git',
    demo: calVideo,
    
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations and responsive design.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['typeScript', 'Vite', 'CSS'],
    github: 'https://github.com/RRSavindi/my_portfolio.git',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-700">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            aria-label={`View source code for ${title}`}
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
            aria-label={`Open demo for ${title}`}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
