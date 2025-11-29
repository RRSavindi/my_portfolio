const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Visual Studio', 'Figma', 'Canva' ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:-translate-y-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group/item flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 dark:hover:from-blue-900/30 dark:hover:to-blue-900/20 transition-all duration-300 hover:pl-5 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 rounded-full group-hover/item:scale-125 transition-transform shadow-lg shadow-blue-500/50" />
            <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 transition-colors">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
