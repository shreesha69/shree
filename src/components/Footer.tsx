import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300 mt-10">
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-cyan-400"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-cyan-400"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:shree@example.com"
          className="hover:text-blue-600 dark:hover:text-cyan-400"
        >
          <Mail />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Shree. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
