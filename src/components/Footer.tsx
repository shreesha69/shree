import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300 mt-10 relative overflow-hidden">
      
      {/* Quote with glow and bounce */}
      <p className="text-lg sm:text-xl font-medium mb-6 italic relative inline-block text-black dark:text-white quote-glow">
        "You are never too old to set another goal or to dream a new dream!!!"
      </p>

      {/* Nav Tabs */}
      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        <a href="#home" className="hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition">Home</a>
        <a href="#skills" className="hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition">Skills</a>
        <a href="#projects" className="hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition">Projects</a>
        <a href="#certificates" className="hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition">Certificates</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition">Contact</a>
      </div>

      {/* Social Icons with floating glow */}
      <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none -z-10">
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-400 opacity-20 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="flex justify-center space-x-6 mb-4 relative z-10">
        {[
          { icon: <Github className="w-6 h-6" />, link: 'https://github.com/shreesha69' },
          { icon: <Linkedin className="w-6 h-6" />, link: 'https://www.linkedin.com/in/mukhashree-s-042aa5257/' },
          { icon: <Mail className="w-6 h-6" />, link: 'mailto:mukhashreemukhashree@gmail.com' },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            target={social.link.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="text-sm sm:text-base relative z-10">© {new Date().getFullYear()} Mukhashree. All rights reserved.</p>

      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px #3b82f6, 0 0 10px #06b6d4; }
            50% { text-shadow: 0 0 10px #8b5cf6, 0 0 20px #3b82f6; }
          }

          .quote-glow {
            animation: bounce-slow 3s ease-in-out infinite, glow 4s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
