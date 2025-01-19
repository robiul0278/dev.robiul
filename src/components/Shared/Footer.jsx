import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1024px] mx-auto mt-28 py-4 border-t border-[#ABB2BF]">
      <div className="flex flex-col sm:flex-row justify-between items-center">
      {/* <!-- Left Section --> */}
      <div className="text-center sm:text-left">
        <div className="flex items-center space-x-2">
          <p className="font-semibold">Robiul</p>
          <a href="robiul0278@gmail.com" className="text-gray-400 hover:text-gray-300">robiul0278@gmail.com</a>
        </div>
        <p className="mt-1">Web designer and front-end developer</p>
      </div>

        <div className="mt-4 sm:mt-0 text-center sm:text-right">
          <p>Follow</p>
          <div className="flex justify-center sm:justify-end space-x-4 mt-1 text-gray">
            <a href="https://github.com/robiul0278" target="_blank" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/robiul-hasan-54ba1824b/" target="_blank" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/robiul0278" target="_blank" className="hover:text-white">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-gray">
        <p>© Copyright 2022. Made by Robiul</p>
      </div>
    </footer>
  )
}

export default Footer;