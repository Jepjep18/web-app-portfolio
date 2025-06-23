import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
            <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent animate-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Hi, I'm Jefferson Arnado
                </motion.h2>

                <motion.h3
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Backend Developer & API Specialist
                </motion.h3>

                <motion.p
                    className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    I build scalable server-side applications with clean, efficient code — specializing in Node.js, Express, and database architecture.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <a
                        href="/Jefferson Arnado - Resume.pdf"
                        download
                        className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-white transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                    >
                        Download CV
                    </a>

                    <a
                        href="mailto:you@example.com"
                        className="text-gray-700 dark:text-gray-200 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-105 font-medium"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
