import { FaFacebook, FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1024px] mx-auto lg:mt-28 mt-10 py-8 border-t border-[#ABB2BF] text-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-bold text-lg">Robiul Hasan</p>
            <button
              onClick={() => navigator.clipboard.writeText("robiul0278@gmail.com")}
              className="text-sm text-gray-400 hover:text-gray-300 mt-1 transition-all duration-200"
              title="Click to copy email address"
            >
              robiul0278@gmail.com
            </button>
          </div>
          <p className="mt-2 text-sm">Full Stack Developer</p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="font-bold text-lg">Follow Me</p>
          <div className="flex justify-center md:justify-end mt-3 space-x-4 text-gray-400">
            <a
              href="https://github.com/robiul0278"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/robiul-hasan-54ba1824b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-200"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/robiul0278"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-200"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <span>
          <FaRegCopyright className="inline mb-0.5" aria-label="Copyright" />Portfolio 2025. Made with
          <span className="text-[#C778DD] px-1" aria-label="love">❤</span>by Robiul.
        </span>
      </div>

    </footer>
  );
};

export default Footer;
