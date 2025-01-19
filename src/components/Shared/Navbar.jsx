import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {

  const handleScrollToContacts = () => {
    const section = document.getElementById("contacts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="py-[30px] relative">
      <div className="flex justify-between items-center max-w-[1024px] mx-auto">
       <Link to="/">
       <div className="flex items-center">
          <img src="/Logo.png" alt="Logo" className="w-[20px] h-[20px]" />
          <p className="text-[20px] font-bold pl-2">Robiul</p>
        </div>
       </Link>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5 text-[16px]">
            <Link to="/">
              <li className="text-[#ABB2BF] hover:text-white"><span className="text-[#C778DD] pr-0.5">#</span>home</li>
            </Link>
            <Link to="/projects">
              <li className="text-[#ABB2BF] hover:text-white"><span className="text-[#C778DD] pr-0.5">#</span>projects</li>
            </Link>
            <Link onClick={handleScrollToContacts}>
              <li className="text-[#ABB2BF] hover:text-white"><span className="text-[#C778DD] pr-0.5">#</span>contacts</li>
            </Link>
          </ul>
          <a
          href="/Resume.pdf" download
            type="submit"
            className="px-6 py-1.5 flex text-[#ABB2BF] hover:text-white items-center justify-center space-x-2 border-purple focus:outline-none hover:border-[#ABB2BF]"
          >
            <span>Resume</span> <BiDownload />
          </a>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;