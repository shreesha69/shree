const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated soft wave background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#93c5fd,_transparent_60%)] animate-wave"></div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gradient mb-8 relative z-10">
        About Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto relative z-10 text-justify">
        I am a passionate IT professional focused on building useful and reliable software.
        I have a keen interest in the Japanese IT sector and continuously improve my skills in web development,
        cloud services, and automation. During my internship, I enhanced my problem-solving, collaboration,
        and communication skills while working on real-world projects.
        I love learning new technologies and developing projects that create real impact.
      </p>

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
        `}
      </style>
    </section>
  );
};

export default About;
