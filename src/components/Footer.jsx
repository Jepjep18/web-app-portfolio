import { Linkedin, Github, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

const Footer = () => {
    const socialLinks = [
        {
            icon: <Linkedin size={20} />,
            url: "https://www.linkedin.com/in/jefferson-arnado-5001b5216/",
            label: "LinkedIn"
        },
        {
            icon: <Github size={20} />,
            url: "https://github.com/Jepjep18",
            label: "GitHub"
        },
        {
            icon: <Mail size={20} />,
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=jeparnado@gmail.com&su=Let's%20Connect&body=Hi%20Jefferson%2C%0A%0AI'd%20love%20to%20connect%20with%20you.",
            label: "Gmail"
        },

        {
            icon: <Facebook size={20} />,
            url: "https://www.facebook.com/odanrajefferson",
            label: "Facebook"
        },
        {
            icon: <Instagram size={20} />,
            url: "https://instagram.com/jepjepjeperson",
            label: "Instagram"
        },
        {
            icon: <Twitter size={20} />,
            url: "https://twitter.com/yourprofile",
            label: "Twitter/X"
        }
    ];

    return (
        <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center gap-6">
                    {/* Social Icons with Tooltips */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                                >
                                    {social.icon}
                                </a>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                                    <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                                        {social.label}
                                        <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-gray-800 dark:border-gray-700 transform -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                        © {currentYear} Jefferson Arnado. All rights reserved.
                    </p>

                    {/* Optional: Back to Top Button */}
                    <a
                        href="#"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;