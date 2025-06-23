const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a passionate backend developer with expertise in building robust, scalable applications.
              My focus is on creating efficient server-side solutions that power modern web applications.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-green-500 rounded-full" /><span className="text-gray-700">Node.js</span></div>
              <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-blue-500 rounded-full" /><span className="text-gray-700">Express.js</span></div>
              <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-orange-500 rounded-full" /><span className="text-gray-700">MongoDB</span></div>
              <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-purple-500 rounded-full" /><span className="text-gray-700">PostgreSQL</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
