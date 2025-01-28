import image1 from "../assets/hero/hero1.png";
import image3 from "../assets/hero/Dots.png";
import image4 from "../assets/hero/border.png";
import image5 from "../assets/hero/Rectangle.png";
import Frame from "../assets/Frame.png";
import Cover from "../assets/cover1.json";
import Lottie from "lottie-react";
import { motion } from "motion/react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const rotate = {
    initial: {rotate: 0},
    animate: {rotate: 360},
}


const Hero = () => {

    const handleScrollToContacts = () => {
        const section = document.getElementById("contacts");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        AOS.init();
    });

    return (
        <section className="relative">
            <div className="font-[sans-serif] max-w-[1024px] mx-auto  rounded overflow-hidden lg:mt-4">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between max-sm:gap-10 lg:py-10 lg:p-0">
                    <div className="text-start flex flex-col gap-3 px-5 lg:px-0 lg:gap-5 md:pt-16 order-2 md:order-1 lg:order-1">
                        <h3 data-aos="fade-right" className="font-bold text-[20px] md:text-[32px] text-[#C778DD] leading-tight tracking-tight lg:tracking-normal"><span className="text-white">Robiul is a </span>MERN stack developer,<span className="text-white"> and creating dynamic</span> web apps.</h3>

                        <p data-aos="fade-left" className="text-[#ABB2BF] text-[12px] lg:text-[16px]">He crafts responsive websites where technologies <br className="hidden lg:flex" /> meet creativity</p>

                            <button data-aos="fade-right" onClick={handleScrollToContacts} className="border-[#C778DD] border to-o-600 hover:border-[#ffffff] text-white p-[7px] text-center lg:text-[16px] text-[12px] w-[148px] h-[37px]">
                                Contact me!
                            </button>
                    </div>

                    <div data-aos="fade-up" className="order-1 lg:order-2">
                        <div  className="relative md:flex items-center justify-center ">
                            <img src={image1} alt="logo" className="absolute top-20  left-[67px] transform -translate-x-1/2 w-[100px] md:-w-[155px] md:-h-[155px]" />


                            <Lottie
                                className="lg:w-[457px] lg:h-[300px] w-full md:h-[360px] h-[180px]"
                                animationData={Cover}
                                loop={true}
                                autoplay={true}
                                rendererSettings={{
                                    preserveAspectRatio: 'xMidYMid slice',
                                }}
                            />

                            <img src={image3} alt="logo" className="absolute bottom-12 right-5 w-[64px] lg:w-[84px] h-[84px]" />
                        </div>
                        <div  className="mx-5 lg:px-0">
                            <div  className="flex items-center lg:ml-5 space-x-1 p-2 text-white border border-[#ABB2BF] text-[11px] lg:text-[15px] lg:w-[404px] w-full">
                                <motion.div
                                variants={rotate}
                                initial="initial"
                                animate="animate"
                                transition={{duration: 5}}
                                className="w-3 h-3 bg-[#C778DD] doted-full"></motion.div>

                                {/* Typing Effect Text  */}
                                <h2 data-aos="zoom-out-left" className="text-gray-300 whitespace-nowrap overflow-hidden border-r-2 border-[#ABB2BF] animate-typing ">
                                    Currently working on
                                    <span className="font-bold text-purple pr-1"> Portfolio Projects</span>
                                </h2>
                            </div>
                        </div>

                    </div>

                </div>
                <div data-aos="zoom-in"  className="max-w-[600px] mx-auto p-5 lg:mt-5 lg:p-0 ">
                    <div className="relative p-2 text-gray-100  border border-[#ABB2BF]">
                        <div className="absolute -top-2 lg:-top-5 left-6">
                            <img src={image4} alt="Quotation" className="w-5 h-4 lg:w-10 lg:h-9  bg-[#282C33] lg:p-3 p-1" />
                        </div>
                        <p className="text-center text-[12px] lg:text-[20px]">
                            With great power comes great responsibility
                        </p>
                        <div className="absolute -bottom-2 lg:-bottom-5 right-6">
                            <img src={image4} alt="Quotation" className="w-5 h-4 lg:w-10 lg:h-9  bg-[#282C33] lg:p-3 p-1" />
                        </div>

                    </div>
                    <div className="border text-[10px] lg:text-[16px] border-[#ABB2BF] border-t-0 w-40 lg:pt-4 pt-3 pb-2 ml-auto">
                        <p className="text-center font-light">- Uncle Ben</p>
                    </div>

                </div>

            </div>
            <img src={Frame} alt="logo" className="absolute hidden md:flex  top-10 right-0 z-50 " />
            <img src={image5} alt="logo" className="absolute w-8 h-20 bottom-40 lg:bottom-10 right-0 z-40 flex lg:hidden" />
            <img src={image5} alt="logo" className="absolute bottom-10 right-0 z-50 hidden lg:flex" />
            <img src={Frame} alt="logo" className="absolute lg:bottom-32 bottom-3 left-0 z-50 " />
        </section>
    )
}

export default Hero;