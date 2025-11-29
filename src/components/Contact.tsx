import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>
        <div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value={
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=raneeshasavindi53@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="Compose email in Gmail to raneeshasavindi53@gmail.com"
                  >
                    raneeshasavindi53@gmail.com
                  </a>
                }
              />
              <ContactInfo
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="+94 762 867 148"
              />
              <ContactInfo
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
                value={
                  <a
                    href="https://github.com/RRSavindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    RRSavindi
                  </a>
                }
              />
              <ContactInfo
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
                value={
                  <a
                    href="https://www.linkedin.com/in/raneesha-savindi-436044338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Raneesha Savindi
                  </a>
                }
              />
        
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-gray-900 dark:text-white font-medium">{value}</p>
      </div>
    </div>
  );
}
