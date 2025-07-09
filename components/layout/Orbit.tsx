"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiAxios,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Center Icon
const centerIcon = <SiJavascript className="text-[#F7DF1E] w-6 h-6 sm:w-8 sm:h-8" />;

// Inner Ring (Backend + Language)
const innerSkills = [
  { icon: <FaNodeJs className="text-[#339933] w-5 h-5" />, name: "NodeJs" },
  { icon: <SiMongodb className="text-[#47A248] w-5 h-5" />, name: "MongoDB" },
  { icon: <SiExpress className="text-[#000000] w-5 h-5" />, name: "Express" },
  { icon: <SiTypescript className="text-[#3178C6] w-5 h-5" />, name: "TypeScript" },
];

// Outer Ring (Frontend + Tools)
const outerSkills = [
  { icon: <FaHtml5 className="text-[#E44D26] w-5 h-5" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-[#1572B6] w-5 h-5" />, name: "CSS3" },
  { icon: <FaReact className="text-[#61DAFB] w-5 h-5" />, name: "React" },
  { icon: <SiRedux className="text-[#764ABC] w-5 h-5" />, name: "Redux" },
  { icon: <SiNextdotjs className="text-[#4a4242] w-5 h-5" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-[#38BDF8] w-5 h-5" />, name: "Tailwind CSS" },
  { icon: <SiAxios className="text-[#5A29E4] w-5 h-5" />, name: "Axios" },
  { icon: <SiFirebase className="text-[#FFCA28] w-5 h-5" />, name: "Firebase" },
];

const Orbit = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const outerTween = useRef<gsap.core.Tween>();
  const innerTween = useRef<gsap.core.Tween>();

  useEffect(() => {
    outerTween.current = gsap.to(outerRef.current, {
      rotate: 360,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });

    innerTween.current = gsap.to(innerRef.current, {
      rotate: -360,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      outerTween.current?.kill();
      innerTween.current?.kill();
    };
  }, []);

  const pauseOrbit = () => {
    outerTween.current?.pause();
    innerTween.current?.pause();
  };

  const resumeOrbit = () => {
    outerTween.current?.resume();
    innerTween.current?.resume();
  };

  const createOrbitIcons = (
    skills: typeof outerSkills,
    radius: number,
    iconSize: number
  ) => {
    return skills.map((skill, index) => {
      const angle = (360 / skills.length) * index;
      const rad = (angle * Math.PI) / 180;
      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);

      return (
        <Tooltip key={skill.name}>
          <TooltipTrigger asChild>
            <div
              onMouseEnter={pauseOrbit}
              onMouseLeave={resumeOrbit}
              className="absolute w-10 h-10 rounded-full bg-[#f2f2f2] border border-[#C778DD] flex items-center justify-center text-white shadow-sm transition hover:shadow-[0_0_10px_rgba(199,120,221,0.8)] cursor-default"
              style={{
                left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
              }}
            >
              {skill.icon}
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            {skill.name}
          </TooltipContent>
        </Tooltip>
      );
    });
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        {/* Outer Ring */}
        <div className="relative w-[280px] h-[280px] rounded-full border border-[#C778DD66]">
          <div ref={outerRef} className="absolute inset-0 w-full h-full">
            {createOrbitIcons(outerSkills, 140, 40)}
          </div>

          {/* Inner Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-[#C778DD44]">
            <div ref={innerRef} className="absolute inset-0 w-full h-full">
              {createOrbitIcons(innerSkills, 75, 40)}
            </div>

            {/* Center Icon */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onMouseEnter={pauseOrbit}
                  onMouseLeave={resumeOrbit}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#1f1f1f] border border-[#C778DD] rounded-full flex items-center justify-center shadow-lg text-white"
                >
                  {centerIcon}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                JavaScript
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Orbit;
