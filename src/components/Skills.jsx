import Frame from "../assets/Frame.png";
import Rectangle from "../assets/skills/Rectangle.png";
import Lottie from "lottie-react";
import Cover2 from "../assets/cover2.json";

const Skills = () => {
    return (
        <section className="relative">
            <div className="max-w-[1024px] mx-auto mt-16 relative">
                <div className="flex items-center justify-between text-[32px]">
                    {/* Title Section */}
                    <div className="flex items-center w-full">
                        <span className="text-[#C778DD] font-semibold mr-1">#</span>
                        <h2 className="font-bold text-white whitespace-nowrap">skills</h2>
                        <hr className="flex-grow ml-3 border-t border-[#C778DD] max-w-[240px]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* <!-- Image Section --> */}
                    <div className="flex justify-center items-center p-5">
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
                        <div className="flex-2 border-gray">
                            <h2 className="font-bold p-2 text-lg border-b border-gray-600">Languages</h2>
                            <p className="text-sm text-gray-400 p-2">JavaScript, TypeScript, HTML, CSS</p>
                        </div>

                        <div className="flex-2 border border-[#C778DD]">
                            <h2 className="font-bold p-2 text-lg border-b text-color border-[#C778DD]">Frontend</h2>
                            <p className="text-sm text-gray-400 p-2">
                                React.js, Redux, Firebase, Tailwind, Bootstrap, HTML, CSS
                            </p>
                        </div>

                        <div className="flex-1 border-gray">
                            <h2 className="font-bold p-2 text-lg border-b border-gray-600">Backend</h2>
                            <p className="text-sm text-gray-400 p-2">Node.js, Express.js</p>
                        </div>

                        <div className="flex-1 border-gray">
                            <h2 className="font-bold p-2 text-lg border-b border-gray-600">Databases</h2>
                            <p className="text-sm text-gray-400 p-2">MongoDB</p>
                        </div>

                        {/* <!-- Tools --> */}
                        <div className="flex-1 border-gray">
                            <h2 className="font-bold p-2 text-lg border-b border-gray-600">Tools</h2>
                            <p className="text-sm text-gray-400 p-2">VSCode, Figma, Git</p>
                        </div>
                    </div>
                </div>

            </div>
            <img src={Rectangle} alt="logo" className="absolute  top-0 left-0 z-50 w-[50px]" />
            <img src={Frame} alt="logo" className="absolute  bottom-0 right-0 z-50" />
        </section>
    )
}

export default Skills;