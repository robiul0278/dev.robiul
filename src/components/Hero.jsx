import image1 from "../assets/hero/hero1.png";
import image3 from "../assets/hero/Dots.png";
import image4 from "../assets/hero/border.png";
import image5 from "../assets/hero/Rectangle.png";
import Frame from "../assets/Frame.png";
import Cover from "../assets/cover1.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"


const Hero = () => {
    
  const handleScrollToContacts = () => {
    const section = document.getElementById("contacts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
    return (
        <section className="relative">
            <div className="font-[sans-serif] max-w-[1024px] mx-auto  rounded overflow-hidden mt-4">
                <div className="flex justify-between max-sm:gap-10 py-10">
                    <div className="text-start flex flex-col gap-5 pt-16">
                        <motion.h3  className="font-semibold text-[32px] text-[#C778DD] leading-tight"><span className="text-white">Robiul is a</span> web designer <span className="text-white">and</span> <br /> front-end developer</motion.h3>

                        <p className="text-[#ABB2BF] text-[16px]">He crafts responsive websites where technologies <br /> meet creativity</p>

                     <Link onClick={handleScrollToContacts}>
                     <a className="border-[#C778DD] border to-o-600 hover:border-[#ffffff] text-white tracking-wide p-[7px] text-center text-[16px] w-[148px] h-[37px]">
                            Contact me!
                        </a>
                     </Link>
                    </div>

                    <div className="">
                        <div className="relative flex items-center justify-center ">
                            <img src={image1} alt="logo" className="absolute top-20  left-[67px] transform -translate-x-1/2 w-[155px] h-[155px]" />

                          
                            <Lottie
                                animationData={Cover}
                                style={{ width: '457px', height: '300px' }}
                                loop={true}
                                autoplay={true}
                                rendererSettings={{
                                    preserveAspectRatio: 'xMidYMid slice',
                                }}
                            />

                            <img src={image3} alt="logo" className="absolute bottom-12 right-5 w-[84px] h-[84px]" />
                        </div>
                        <div className="flex items-center ml-5 space-x-2 px-4 py-2 text-white border border-[#ABB2BF] text-[16px] max-w-[402px]">
                            <div className="w-3 h-3 bg-[#C778DD] doted-full"></div>

                            {/* Typing Effect Text  */}
                            <span className="text-gray-300 whitespace-nowrap overflow-hidden border-r-2 border-[#ABB2BF] animate-typing">
                                Currently working on
                                <span className="font-bold text-purple pr-1"> Portfolio Projects</span>
                            </span>
                        </div>

                    </div>

                </div>
                <div className="max-w-[650px] mx-auto mt-10">
                    <div className="relative p-2 text-gray-100 text-[24px]  border border-[#ABB2BF]">
                        <div className="absolute -top-5 left-6">
                            <img src={image4} alt="Quotation" className="w-10 h-9  bg-[#282C33] p-3" />
                        </div>
                        <p className="text-center tracking-widest">
                        With great power comes great responsibility
                        </p>
                        <div className="absolute -bottom-5 right-6">
                            <img src={image4} alt="Quotation" className="w-10 h-9  bg-[#282C33] p-3" />
                        </div>

                    </div>
                    <div className="border border-[#ABB2BF] border-t-0 w-40 pt-4 pb-2 ml-auto">
                        <p className="text-center text-[16px] font-light">- Uncle Ben</p>
                    </div>

                </div>

            </div>
            <img src={Frame} alt="logo" className="absolute  top-10 right-0 z-50 " />
            <img src={image5} alt="logo" className="absolute  bottom-10 right-0 z-50 " />
            <img src={Frame} alt="logo" className="absolute bottom-32 left-0 z-50 " />
        </section>
    )
}

export default Hero;