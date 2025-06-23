import { Linkedin, Github, Mail, Facebook, Instagram, Twitter } from "lucide-react";

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
      icon: <Facebook size={20} />, 
      url: "https://www.facebook.com/odanrajefferson",
      label: "Facebook"
    },
    { 
      icon: <Instagram size={20} />, 
      url: "https://instagram.com/jepjepjeperson",
      label: "Instagram"
    },
    
  ];

  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {social.icon}
              </a>
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