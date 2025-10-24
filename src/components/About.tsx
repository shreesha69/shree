const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 via-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 scroll-mt-20"
    >
      {/* Animated soft wave background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#93c5fd,_transparent_60%)] animate-wave"></div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gradient mb-8 relative z-10">
        About Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto relative z-10 text-justify">
        I am a passionate IT professional with expertise in Java, MySQL, and Web Development, always eager to learn and explore new technologies like AWS and Power BI. I thrive in collaborative environments, bringing empathy, active listening, and effective communication to every project. Beyond coding, I enjoy creative pursuits such as sketching, which fuel my imagination and attention to detail. I am committed to building reliable, impactful software solutions that make a difference and continuously enhancing my skills to contribute meaningfully to any team or project.
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
