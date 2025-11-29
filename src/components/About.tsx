import { Code2, Palette, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl mb-16">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I'm a passionate developer who loves turning ideas into reality through code.
            With a keen eye for design and a commitment to excellence, I create web applications
            that are not only functional but also delightful to use. I'm always learning and
            exploring new technologies to stay at the forefront of web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Code2 className="w-8 h-8" />}
            title="Clean Code"
            description="Writing maintainable, scalable, and efficient code that stands the test of time."
          />
          <FeatureCard
            icon={<Palette className="w-8 h-8" />}
            title="Design Focus"
            description="Creating beautiful user interfaces with attention to detail and user experience."
          />
          <FeatureCard
            icon={<Rocket className="w-8 h-8" />}
            title="Fast Delivery"
            description="Delivering high-quality projects on time with modern development practices."
          />
        </div>
        
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
