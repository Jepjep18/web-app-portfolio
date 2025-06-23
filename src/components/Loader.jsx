const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-700">
      <div className="flex flex-col items-center">
        <img
          src="/snail-loader.gif"
          alt="Loading..."
          className="w-48 h-48 mb-4"
        />
      </div>
    </div>
  );
};

export default Loader;
