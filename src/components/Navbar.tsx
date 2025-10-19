import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.clientHeight;
          if (scrollPos >= top && scrollPos < bottom) setActive(link.name);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with gradient animation */}
          <a
            href="#home"
            className="text-3xl font-bold tracking-widest transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:300%_300%]"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}
          >
            S H R E E
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-cyan-300`}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-300 ${
                    active === link.name ? 'w-full' : 'group-hover:w-full'
                  }`}
                />
              </a>
            ))}

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradientShift 5s ease infinite;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
