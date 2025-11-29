import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../images/raneesha.jpg';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in order-2 md:order-1">
            <div className="inline-block">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg tracking-wide">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Raneesha
              <span className="block bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                Savindi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A Web Developer with a curious mind and a love for turning ideas into interactive digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transform"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                View work
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <SocialLink href="https://github.com/RRSavindi" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="https://www.linkedin.com/in/raneesha-savindi-436044338" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="raneeshasavindi53@gmail.com" icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in mt-6 md:mt-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 animate-spin-slow" />
                <img
                  src={profileImg}
                  alt="Raneesha Savindi"
                  className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-xl opacity-50 animate-bounce-slow" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-300 hover:scale-110"
    >
      {icon}
    </a>
  );
}
