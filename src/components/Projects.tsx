import { FiGithub, FiExternalLink } from 'react-icons/fi';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React, Tailwind CSS, and deployed online.',
    tags: ['React', 'Tailwind', 'Vite'],
    image: '/assets/portfolio.png',
    github: 'https://github.com/private', // placeholder link
    link: 'https://mukhashree-s.vercel.app/', // Live Vercel link
  },
  {
    title: 'Travel Website',
    description: 'A responsive travel booking website built with modern web technologies.',
    tags: ['React', 'CSS', 'API'],
    image: '/assets/travel-site.jpeg',
    github: 'https://github.com/shreesha69/Travel-site',
    link: 'https://nihon-no-ryokou.vercel.app/', // Live Travel site
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-3xl font-bold text-center text-gradient mb-12 tracking-widest">Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Project Image */}
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
              />
            )}

            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-cyan-300 tracking-wide">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-cyan-300 hover:underline"
                    onClick={(e) => {
                      if (p.title === 'Portfolio Website') {
                        e.preventDefault();
                        alert('🔒 This project repository is private.');
                      }
                    }}
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    <FiExternalLink /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
