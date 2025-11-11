import { Code, Database, Cloud, BarChart, Users } from 'lucide-react';

const technical = [
  { name: 'Java', icon: Code },
  { name: 'MySQL', icon: Database },
  { name: 'HTML / CSS', icon: Code },
  { name: 'AWS', icon: Cloud },
  { name: 'Power BI', icon: BarChart },
  { name: 'JS', icon: Code },
  { name: 'Prompt Engineering', icon: Code },
  { name: 'Git & VS Code', icon: Code },
];

const soft = ['Empathy', 'Active Listening', 'Collaboration', 'Problem Solving'];

const languages = [
  { name: 'Tamizh', level: 'Native' },
  { name: 'English', level: 'Proficient' },
  { name: 'Japanese', level: 'N4 Level' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 scroll-mt-20"
    >
      {/* Background Bubbles */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute w-6 h-6 bg-blue-300 rounded-full opacity-20 animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-gradient mb-12 relative z-10">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" /> Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technical.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  className="flex items-center gap-3 p-4 rounded-xl shadow bg-white dark:bg-gray-700 skill-effect"
                >
                  <div className="p-3 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-lg font-medium">{t.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills & Languages */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" /> Soft Skills & Languages
          </h3>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow flex flex-col gap-6">
            {/* Soft Skills */}
            <div>
              <div className="font-medium mb-2">Soft Skills</div>
              <div className="flex flex-wrap gap-3">
                {soft.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-cyan-300 font-medium text-base skill-effect"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="font-medium mb-2">Languages Known</div>
              <div className="flex flex-wrap gap-3">
                {languages.map((l) => (
                  <span
                    key={l.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-cyan-300 font-medium text-base skill-effect"
                  >
                    {l.name} — {l.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Floating Bubbles */
          @keyframes bubble {
            0% { transform: translateY(100%) scale(0.5); opacity: 0; }
            50% { opacity: 0.2; }
            100% { transform: translateY(-10%) scale(1); opacity: 0; }
          }
          .animate-bubble {
            animation: bubble linear infinite;
          }

          /* Skills idle glow + hover glow + bounce */
          .skill-effect {
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3), 0 0 10px rgba(6, 182, 212, 0.2);
          }
          .skill-effect:hover {
            animation: skill-bounce 1s ease-in-out infinite;
            box-shadow: 0 0 15px #3b82f6, 0 0 25px #06b6d4;
          }
          @keyframes skill-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }

          /* Responsive adjustments */
          @media (max-width: 640px) {
            .skill-effect {
              padding: 3px 8px;
              box-shadow: 0 0 3px rgba(59, 130, 246, 0.2), 0 0 6px rgba(6, 182, 212, 0.15);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
