const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Hi, I'm Jefferson Arnado
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
          Backend Developer & API Specialist
        </h3>
        <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          I build scalable server-side applications with clean, efficient code — specializing in Node.js, Express, and database architecture.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a href="#" className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-medium">
            Download CV
          </a>
          <a href="mailto:you@example.com" className="text-gray-700 px-8 py-3 border-2 border-gray-300 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-200 hover:scale-105 font-medium">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
