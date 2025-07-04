"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";

const outerSkills = [
    { icon: <FaHtml5 className="text-orange-500 w-6 h-6" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-400 w-6 h-6" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400 w-6 h-6" />, name: "TypeScript" },
    { icon: <FaReact className="text-cyan-400 w-6 h-6" />, name: "React" },
    { icon: <SiRedux className="text-orange-500 w-6 h-6" />, name: "Node.js" },
    { icon: <SiExpress className="text-green-600 w-6 h-6" />, name: "MongoDB" },
    { icon: <FaGitAlt className="text-orange-400 w-6 h-6" />, name: "Git" },
];

const innerSkills = [
    { icon: <SiNextdotjs className="text-black-500 w-6 h-6" />, name: "Figma" },
    { icon: <FaJs className="text-orange-400 w-6 h-6" />, name: "Git" },
    { icon: <SiMongodb className="text-green-400 w-6 h-6" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500 w-6 h-6" />, name: "Node" },
];

const Orbit = () =>  {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(outerRef.current, {
                rotate: 360,
                duration: 30,
                ease: "linear",
                repeat: -1,
            });

            gsap.to(innerRef.current, {
                rotate: -360,
                duration: 20,
                ease: "linear",
                repeat: -1,
            });
        });

        return () => ctx.revert();
    }, []);

    const createOrbitIcons = (
        skills: typeof outerSkills,
        radius: number
    ) => {
        return skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
                <div
                    key={skill.name}
                    className="absolute w-12 h-12 rounded-full bg-[#1f1f1f] border border-[#C778DD] flex items-center justify-center text-white shadow-md"
                    style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                    }}
                >
                    {skill.icon}
                </div>
            );
        });
    };

    return (
        <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
            {/* Outer Ring */}
            <div className="relative w-[300px] h-[300px] rounded-full border border-[#C778DD66]">
                <div
                    ref={outerRef}
                    className="absolute inset-0 mx-auto my-auto w-full h-full"
                >
                    {createOrbitIcons(outerSkills, 150)}
                </div>

                {/* Inner Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-[#C778DD44]">
                    <div
                        ref={innerRef}
                        className="absolute inset-0 mx-auto my-auto w-full h-full"
                    >
                        {createOrbitIcons(innerSkills, 75)}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Orbit;