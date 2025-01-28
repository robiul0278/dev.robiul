import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="md:flex absolute hidden ">
  {/* Vertical Navbar */}
  <div className="flex flex-col items-center justify-between px-4 text-gray-400 h-[305px]">
    {/* Top Vertical Line */}
    <div className="w-[2px] h-[195px] bg-gray-400 hover:text-white"></div> 

    {/* Bottom Icons */}
    <div className="flex flex-col items-center text-[32px]">
      <a href="https://github.com/robiul0278" target="_blank" className="hover:text-white">
        <FaGithub className="p-1.5"/>
      </a>
      <a href="https://www.linkedin.com/in/robiul-hasan-54ba1824b/" target="_blank" className="hover:text-white">
        <FaLinkedin className="p-1.5"/>
      </a>
      <a href="https://www.facebook.com/robiul0278" target="_blank" className="hover:text-white">
        <FaFacebook className="p-1.5"/>
      </a>
    </div>
  </div>
</div>
  )
}

export default Social;