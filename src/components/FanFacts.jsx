import Frame from "../assets/Frame.png";
import Rectangle from "../assets/skills/Rectangle.png";
import Cover from "../assets/cover3.json";
import Lottie from "lottie-react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const FanFacts = () => {
     useEffect(() => {
            AOS.init();
        })
    return (
        <section className="relative">
            <div className="max-w-[1024px] mx-auto lg:mt-16 mt-5 relative p-5 lg:p-0">
                <div className="flex items-center justify-between text-[26px] lg:text-[32px]">
                    {/* Title Section */}
                    <div className="flex items-center">
                        <span className="text-[#C778DD] font-semibold mr-1">#</span>
                        <h2 className="font-bold text-white whitespace-nowrap">my-fan-facts</h2>
                        <hr className="flex-grow ml-3 border-t border-[#C778DD] w-16 lg:w-[240px]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                    <div
                        
                        className="lg:text-[15px] text-[12px] text-gray flex flex-wrap items-center justify-center  gap-4 lg:p-10 mb-5 cursor-default">
                        <span 
                        data-aos="fade-right"
                         className="p-2 border border-gray">
                            I like summer more than winter
                        </span>
                        {/* <span data-aos="fade-left" className="p-2 border border-gray">
                            I often bike with my friends
                        </span> */}
                        <span data-aos="fade-right" className="p-2 border border-gray">
                            I like pizza and kacchi
                        </span>
                        <span data-aos="fade-right" className="p-2 border border-purple">
                            I like spending time with friends the most
                        </span>
                        <span data-aos="fade-right" className="p-2 border border-gray">
                            My favorite movie is ROCKSTAR
                        </span>
                        <span data-aos="fade-right" className="p-2 border border-gray">
                            Exploring new places and cultures
                        </span>
                        <span data-aos="fade-right" className="p-2 border border-gray">
                            It’s not a bug; it’s a feature!
                        </span>
                    </div>

                    {/* <!-- Image Section --> */}
                    <div data-aos="fade-down" className="flex justify-center items-center">
                        <Lottie
                            animationData={Cover}
                            style={{ width: '150px', height: '340px' }}
                            loop={true}
                            autoplay={true}
                            rendererSettings={{
                                preserveAspectRatio: 'xMidYMid slice',
                            }}
                        />
                    </div>
                </div>

            </div>
            <img src={Rectangle} alt="logo" className="absolute  lg:top-0 top-28 left-0 z-50 w-[50px]" />
            <img src={Frame} alt="logo" className="absolute  bottom-0 right-0 z-50" />
        </section>
    )
}

export default FanFacts;