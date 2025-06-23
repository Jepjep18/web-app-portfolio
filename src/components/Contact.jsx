const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations.
          Let's discuss how we can bring your project to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:you@example.com" className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg font-medium">
            Get In Touch
          </a>
          <a href="#" className="text-gray-700 px-8 py-3 border-2 border-gray-300 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-200 hover:scale-105 font-medium">
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
