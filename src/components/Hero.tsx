import { useEffect, useState } from 'react';

const roles = ['Web Developer', 'Technical Support Engineer', 'Cloud Enthusiast', 'Japanese Learner'];

const Typing = ({ texts = roles, speed = 120, pause = 1500 }: { texts?: string[]; speed?: number; pause?: number }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const text = texts[index % texts.length];
    let i = display.length;
    let timer: ReturnType<typeof setTimeout>;

    if (forward && i < text.length) {
      timer = setTimeout(() => setDisplay(text.slice(0, i + 1)), speed);
    } else if (forward && i === text.length) {
      timer = setTimeout(() => setForward(false), pause);
    } else if (!forward && i > 0) {
      timer = setTimeout(() => setDisplay(text.slice(0, i - 1)), speed / 2);
    } else {
      timer = setTimeout(() => {
        setForward(true);
        setIndex((prev) => prev + 1);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [display, forward, index, pause, speed, texts]);

  return <span className="text-gradient font-semibold">{display}<span className="animate-pulse">|</span></span>;
};

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="order-2 md:order-1 flex-1 text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl italic font-semibold text-gradient mb-6 quote-hover">
            “Step into my world of code and creativity.”
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500">Mukhashree</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Focused on delivering high-quality web solutions, automating workflows, and designing seamless user experiences, while pursuing my interest in the Japanese language and culture.
          </p>

          <div className="mb-6 text-xl">
            <Typing />
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors">View Projects</a>
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition">Download Resume</a>
          </div>
        </div>

        {/* Right Hexagon Photo */}
        <div className="order-1 md:order-2 flex-shrink-0 relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto group">

            {/* Hexagon Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-xl opacity-60 animate-pulse-slow pointer-events-none"
              style={{
                clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
              }}
            />

            {/* Gradient Hexagon Border */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
                padding: '4px',
              }}
            />

            {/* Hexagon Photo */}
            <div
              className="absolute inset-0 overflow-hidden rounded-3xl transform transition duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:rotate-1"
              style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
            >
              <img
                src="/assets/profile.jpg"
                alt="Mukhashree"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .quote-hover {
            display: inline-block;
            transition: transform 0.3s;
          }
          .quote-hover:hover {
            animation: bounce 0.6s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
