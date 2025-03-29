import Frame from "../assets/Frame.png";
import Rectangle from "../assets/skills/Rectangle.png";
import Lottie from "lottie-react";
import Cover2 from "../assets/cover2.json";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Skills = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <section className="relative">
            <div className="max-w-[1024px] mx-auto lg:mt-16 mt-10 relative p-5 lg:p-0">
                <div className="flex items-center justify-between text-[24px] lg:text-[28px]">
                    {/* Title Section */}
                    <div className="flex items-center">
                        <span className="text-[#C778DD] font-semibold mr-1">#</span>
                        <h2 className="font-bold text-white whitespace-nowrap">skills</h2>
                        <hr className="flex-grow ml-3 border-t border-[#C778DD] w-32 lg:w-[240px]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-5">
                    {/* <!-- Image Section --> */}
                    <div
                        data-aos="fade-right"
                        className="flex justify-center items-center lg:p-5">
                        <Lottie
                            animationData={Cover2}
                            style={{ width: '300px', height: '300px' }}
                            loop={true}
                            autoplay={true}
                            rendererSettings={{
                                preserveAspectRatio: 'xMidYMid slice',
                            }}
                        />
                    </div>

                    <div className="flex flex-wrap gap-6 justify-end">
                        {/* <!-- Languages --> */}
                        <div 
                        data-aos="fade-down"
                         className="flex-2 border-gray">
                            <h2 className="font-bold p-2 border-b border-gray-600">Languages</h2>
                            <p className="text-sm text-gray-400 p-2">JavaScript, TypeScript</p>
                        </div>

                        <div
                             className="flex-2 border border-[#C778DD]">
                            <h2 className="font-bold p-2 border-b text-color border-[#C778DD]">Frontend</h2>
                            <p className="text-sm text-gray-400 p-2">
                                React.js, Redux, Firebase, Tailwind, Bootstrap, HTML, CSS
                            </p>
                        </div>

                        <div data-aos="fade-up" className="flex-1 border-gray">
                            <h2 className="font-bold p-2 border-b border-gray-600">Backend</h2>
                            <p className="text-sm text-gray-400 p-2">Node.js, Express.js Mongoose</p>
                        </div>

                        <div data-aos="fade-up" className="flex-1 border-gray">
                            <h2 className="font-bold p-2 border-b border-gray-600">Databases</h2>
                            <p className="text-sm text-gray-400 p-2">MongoDB</p>
                        </div>

                        {/* <!-- Tools --> */}
                        <div data-aos="fade-up" className="flex-1 border-gray">
                            <h2 className="font-bold p-2 border-b border-gray-600">Tools</h2>
                            <p className="text-sm text-gray-400 p-2">VSCode, Figma, Git</p>
                        </div>
                    </div>
                </div>

            </div>
            <img src={Rectangle} alt="logo" className="absolute  top-0 left-0 z-50 w-[50px] hidden lg:flex" />
            <img src={Rectangle} alt="logo" className="absolute w-10  top-64 left-0 z-50 lg:hidden flex" />
            <img src={Frame} alt="logo" className="absolute  bottom-0 right-0 z-50" />
        </section>
    )
}

export default Skills;