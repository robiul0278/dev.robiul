import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToContacts = () => {
    const section = document.getElementById("contacts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 relative">
      <div className="flex justify-between items-center max-w-[1024px] mx-auto px-4">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Logo" className="w-[20px] h-[20px]" />
            <p className="text-[20px] font-bold pl-2 text-white">Robiul</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between gap-5">
          <ul className="flex items-center gap-5 text-[16px]">
            <Link to="/">
              <li className="text-[#ABB2BF] hover:text-white">
                <span className="text-[#C778DD] pr-0.5">#</span>home
              </li>
            </Link>
            <Link to="/projects">
              <li className="text-[#ABB2BF] hover:text-white">
                <span className="text-[#C778DD] pr-0.5">#</span>projects
              </li>
            </Link>
            <Link onClick={handleScrollToContacts}>
              <li className="text-[#ABB2BF] hover:text-white">
                <span className="text-[#C778DD] pr-0.5">#</span>contacts
              </li>
            </Link>
          </ul>
          <a
            href="/Robiul Hasan CV.pdf"
            download
            type="submit"
            className="px-6 py-1.5 flex text-[#ABB2BF] hover:text-white items-center justify-center space-x-2 border-purple focus:outline-none hover:border-[#ABB2BF]"
          >
            <span>Download CV</span> <BiDownload />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <a
            href="/Robiul Hasan CV.pdf"
            download
            type="submit"
            className="md:hidden ml-6 px-4 py-1.5 flex text-[#ABB2BF] hover:text-white items-center justify-center space-x-2 border border-purple focus:outline-none hover:border-white"
          >
            <span>Download CV</span> <BiDownload />
          </a>
          <button
            className="md:hidden text-white text-2xl focus:outline-none ml-4"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Overlay and Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#282C34] z-50 transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <IoClose />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col items-start mt-4 ml-6 space-y-4 text-[16px] z-50">
        <Link to="/">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Logo" className="w-[16px] h-[16px]" />
            <p className="text-[16px] font-bold pl-2 text-white">Robiul</p>
          </div>
        </Link>
          <Link to="/" onClick={toggleMenu}>
            <li className="text-[#ABB2BF] hover:text-white">
              <span className="text-[#C778DD] pr-0.5">#</span>home
            </li>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <li className="text-[#ABB2BF] hover:text-white">
              <span className="text-[#C778DD] pr-0.5">#</span>projects
            </li>
          </Link>
          <Link
            onClick={() => {
              toggleMenu();
              handleScrollToContacts();
            }}
          >
            <li className="text-[#ABB2BF] hover:text-white">
              <span className="text-[#C778DD] pr-0.5">#</span>contacts
            </li>
          </Link>
        </ul>

        {/* Social Button Button */}
         <div className="flex justify- md:justify-end mt-4 ml-6 space-x-4 text-gray-400">
               <a
                 href="https://github.com/robiul0278"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-white transition-all duration-200"
               >
                 <FaGithub size={16} />
               </a>
               <a
                 href="https://www.linkedin.com/in/robiul-hasan-54ba1824b/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-white transition-all duration-200"
               >
                 <FaLinkedin size={16} />
               </a>
               <a
                 href="https://www.facebook.com/robiul0278"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-white transition-all duration-200"
               >
                 <FaFacebook size={16} />
               </a>
             </div>
      </div>
    </nav>
  );
};

export default Navbar;
