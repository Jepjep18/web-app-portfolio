import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center bg-white dark:bg-gray-100 transition-colors duration-300 overflow-hidden">
            {/* Soft background blob */}
            <div className="absolute top-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" />
            <div className="absolute bottom-[-5rem] right-[-5rem] w-[20rem] h-[20rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse -z-10" />

            {/* Optional tech icons (replace with actual icons or images) */}
            {/* <motion.img src="/icons/node.svg" alt="Node.js" className="absolute top-20 left-20 w-8 opacity-30" /> */}

            <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Hi, I'm Jefferson Arnado
                </motion.h2>

                {/* Divider Line */}
                <div className="w-24 h-1 bg-gray-300 mx-auto mb-6 rounded-full"></div>

                <TypeAnimation
                    sequence={[
                        500,
                        "I'm a Backend Developer.",
                        2000,
                        "I'm an API Specialist.",
                        2000,
                        "I build scalable apps.",
                        2000,
                    ]}
                    wrapper="h3"
                    cursor={true}
                    repeat={Infinity}
                    className="text-xl md:text-2xl text-gray-800 dark:text-gray-700 mb-6 font-medium"
                />

                <motion.p
                    className="text-gray-700 dark:text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    I build <span className="font-semibold text-gray-900 dark:text-gray-800">scalable</span> server-side applications with <span className="font-semibold text-gray-900 dark:text-gray-800">clean</span>, <span className="font-semibold text-gray-900 dark:text-gray-800">efficient code</span> — specializing in Node.js, Express, and database architecture.
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
                        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-md font-medium"
                    >
                        <Download size={18} />
                        Download CV
                    </a>

                    <a
                        href="mailto:you@example.com"
                        className="flex items-center gap-2 text-gray-900 dark:text-gray-800 px-8 py-3 border-2 border-gray-300 hover:border-gray-900 hover:text-black rounded-full transition-all duration-200 hover:scale-105 font-medium"
                    >
                        <Mail size={18} />
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll down indicator */}
            <a href="#about">
                <motion.div
                    className="cursor-pointer absolute bottom-6 left-1/2 transform -translate-x-1/2 text-lg md:text-xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-transparent bg-clip-text hover:scale-110 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    ↓ Scroll Down
                </motion.div>
            </a>

        </section>
    );
};

export default Hero;
