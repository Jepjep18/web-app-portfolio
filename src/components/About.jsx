import { motion } from "framer-motion";
import {
    MapPin,
    Briefcase,
    Wrench,
    Handshake,
    Coffee,
    Target,
    Leaf,
    ArrowRight,
    Code,
    Database,
    Cpu,
    Globe,
} from "lucide-react";

const highlights = [
    { icon: MapPin, text: "Based in Davao City, Philippines" },
    { icon: Briefcase, text: "1+ years of experience in backend development" },
    {
        icon: Wrench,
        text: "ASP.NET, RESTful APIs, Node.js, PostgreSQL, API Design",
        isRichText: true,
    },
    { icon: Handshake, text: "Contributor to open-source projects" },
    { icon: Database, text: "Database optimization specialist" },
];

const funFacts = [
    { icon: Coffee, text: "Dark roast coffee enthusiast" },
    { icon: Target, text: "Minimalist coder" },
    { icon: Leaf, text: "Lifelong learner" },
    { icon: Globe, text: "Remote work advocate" },
];

const skills = [
    { name: "ASP.NET", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MySql", level: 80 },
    { name: "API Design", level: 88 },
    { name: "System Architecture", level: 75 },
];

const HighlightItem = ({ icon: Icon, text, isRichText }) => (
    <motion.li
        className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
        whileHover={{ x: 5 }}
    >
        <div className="p-2 bg-gray-100 rounded-lg text-gray-800">
            <Icon size={18} />
        </div>
        <div className="flex-1">
            {isRichText ? (
                <p className="text-gray-800">
                    <span className="font-medium">Focus:</span> {text}
                </p>
            ) : (
                <p className="text-gray-800">{text}</p>
            )}
        </div>
    </motion.li>
);

const SkillBar = ({ name, level }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-2">
            <span className="text-gray-800 font-medium">{name}</span>
            <span className="text-gray-500">{level}%</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full bg-gray-800"
            />
        </div>
    </div>
);

const About = () => {
    return (
        <section
            id="about"
            aria-label="About Section"
            className="relative py-20 px-4 bg-white"
        >
            <div className="max-w-6xl mx-auto relative">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl font-bold mb-4 text-gray-900"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Backend developer specializing in scalable systems and clean code
                    </motion.p>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Bio */}
                    <div className="space-y-8">
                        {/* Avatar */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <img
                                    src="/pfp.jpg"
                                    alt="Jefferson Arnado"
                                    className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-sm border border-gray-200">
                                    <Cpu className="text-gray-800" size={20} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio text */}
                        <motion.div
                            className="space-y-6 text-gray-700"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.6 }}
                        >
                            <p className="text-lg leading-relaxed">
                                I'm a backend developer focused on creating <span className="font-medium text-gray-900">scalable, efficient systems</span> that support modern web applications. My passion lies in crafting clean, maintainable code and solving real-world problems through technology.
                            </p>
                            <p className="text-lg leading-relaxed">
                                I specialize in building <span className="font-medium text-gray-900">server-side applications</span> using tools like Node.js, Express, and PostgreSQL. My approach emphasizes simplicity, reliability, and performance.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Outside of coding, I enjoy <span className="font-medium text-gray-900">contributing to open-source</span>, exploring new technologies, and sharing insights with the developer community through writing and mentorship.
                            </p>
                        </motion.div>

                        {/* Fun Facts */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {funFacts.map((fact, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3 hover:shadow-sm transition-all"
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="p-2 bg-gray-100 rounded-lg text-gray-800">
                                        <fact.icon size={16} />
                                    </div>
                                    <span className="text-gray-800">{fact.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="space-y-8">
                        {/* Professional Highlights */}
                        <motion.div
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gray-900 p-4 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-white">Professional Highlights</h3>
                            </div>
                            <ul className="divide-y divide-gray-200">
                                {highlights.map((item, idx) => (
                                    <HighlightItem key={idx} {...item} />
                                ))}
                            </ul>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            className="bg-white rounded-lg border border-gray-200 p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Core Skills</h3>
                            <div className="space-y-6">
                                {skills.map((skill) => (
                                    <SkillBar key={skill.name} {...skill} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-lg text-lg font-medium border border-gray-900 hover:bg-gray-800 transition-all"
                        >
                            Let's Connect
                            <ArrowRight className="ml-2" size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;