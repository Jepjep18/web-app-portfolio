const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-600 mb-4">
                  Description of the project and the technologies used to build it.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Express</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
