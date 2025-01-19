import Frame from "../assets/Frame.png";
import Rectangle from "../assets/skills/Rectangle.png";
import Cover from "../assets/cover3.json";
import Lottie from "lottie-react";

const FanFacts = () => {
    return (
        <section className="relative">
            <div className="max-w-[1024px] mx-auto mt-16 relative">
                <div className="flex items-center justify-between text-[32px]">
                    {/* Title Section */}
                    <div className="flex items-center w-full">
                        <span className="text-[#C778DD] font-semibold mr-1">#</span>
                        <h2 className="font-bold text-white whitespace-nowrap">my-fan-facts</h2>
                        <hr className="flex-grow ml-3 border-t border-[#C778DD] max-w-[240px]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                    <div className="text-[16px] text-gray flex flex-wrap items-center justify-center  gap-4 p-10">
                        <span className="p-2 border border-gray">
                            I like winter more than summer
                        </span>
                        <span className="p-2 border border-gray">
                            I often bike with my friends
                        </span>
                        <span className="p-2 border border-gray">
                            I like pizza and kacchi
                        </span>
                        <span className="p-2 border border-purple">
                           I like spending time with friends the most
                        </span>
                        <span className="p-2 border border-gray">
                            My favorite movie is ROCKSTAR
                        </span>
                        <span className="p-2 border border-gray">
                        Exploring new places and cultures
                        </span>
                        <span className="p-2 border border-gray">
                            It’s not a bug; it’s a feature!
                        </span>
                    </div>

                    {/* <!-- Image Section --> */}
                    <div className="flex justify-center items-center">
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
            <img src={Rectangle} alt="logo" className="absolute  top-0 left-0 z-50 w-[50px]" />
            <img src={Frame} alt="logo" className="absolute  bottom-0 right-0 z-50" />
        </section>
    )
}

export default FanFacts;