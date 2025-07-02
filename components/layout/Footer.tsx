"use client";

import { Copyright, Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
<footer className="mx-auto py-10 border-t border-gray-300 dark:border-[#ABB2BF] text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-transparent transition-colors duration-500">
  <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-8 lg:p-0 md:flex-row justify-between items-center md:items-start">
    {/* Left Section */}
    <div className="text-center md:text-left mb-6 md:mb-0">
      <div className="flex flex-col items-center md:items-start">
        <p className="font-bold text-lg text-gray-900 dark:text-white">Robiul Hasan</p>
        <button
          onClick={() => navigator.clipboard.writeText("robiul0278@gmail.com")}
          className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-300 mt-1 transition-all duration-200"
          title="Click to copy email address"
        >
          robiul0278@gmail.com
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
    </div>

    {/* Right Section */}
    <div className="text-center md:text-right">
      <p className="font-bold text-lg text-gray-900 dark:text-white">Follow Me</p>
      <div className="flex justify-center md:justify-end mt-3 space-x-4 text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/robiul0278"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition-all duration-200"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/robiul-hasan-54ba1824b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-white transition-all duration-200"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://www.facebook.com/robiul0278"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 dark:hover:text-white transition-all duration-200"
        >
          <Facebook size={20} />
        </a>
      </div>
    </div>
  </div>
  {/* Bottom Section */}
  <div className="pt-5 text-center text-sm text-gray-500 dark:text-gray-400">
<hr className="max-w-7xl mx-auto"/>
    <span className="flex items-center justify-center mt-4">
      <Copyright size={18} className="inline mr-1 " />
      Portfolio 2025. Made with
      <span className="text-pink-600 dark:text-[#be2ae7] px-1">❤</span>
      by Robiul.
    </span>
  </div>
</footer>


  );
};

export default Footer;