import { Code, Database, Cloud, BarChart, Users } from 'lucide-react';

const technical = [
  { name: 'Java', icon: Code },
  { name: 'MySQL', icon: Database },
  { name: 'HTML / CSS', icon: Code },
  { name: 'AWS', icon: Cloud },
  { name: 'Power BI', icon: BarChart },
  { name: 'Prompt Engineering', icon: Code },
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
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Soft wave animation */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,_#93c5fd,_transparent_60%)] animate-wave"></div>
      </div>

      {/* Main heading */}
      <h2 className="text-3xl font-bold text-center text-gradient mb-12 relative z-10">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" /> Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {technical.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  className="flex items-center gap-3 bg-white dark:bg-gray-700 p-4 rounded-xl shadow hover:shadow-xl transform transition duration-300 hover:scale-105"
                >
                  <div className="p-3 rounded-md bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 animate-bounce-slow">
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
                    className="px-4 py-2 rounded-full bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-cyan-300 font-medium text-base transform transition hover:scale-105 hover:shadow-md"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-cyan-300 font-medium text-base transform transition hover:scale-105 hover:shadow-md"
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
          @keyframes wave {
            0% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0px); }
          }
          .animate-wave {
            animation: wave 8s ease-in-out infinite;
          }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
