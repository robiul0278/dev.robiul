"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Orbit from "./Orbit";

const Skills = () => {
  const titleRef = useRef(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      const children = blocksRef.current?.children;
      if (children) {
        gsap.fromTo(
          Array.from(children),
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
            delay: 0.5,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);


  return (
    <section id="skills" className="relative py-14 px-4">
      <div className="max-w-7xl mx-auto relative p-5 lg:p-0">
        {/* Title */}
        <div
          ref={titleRef}
          className="flex items-center justify-between text-[26px] lg:text-[32px]"
        >
          <div className="flex items-center">
            <span className="text-[#C778DD] font-semibold mr-1">#</span>
            <h2 className="font-bold text-white whitespace-nowrap">skills</h2>
            <hr className="flex-grow ml-3 border-t  w-32 lg:w-[240px]" />
          </div>
        </div>



        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-5">
          {/* Orbit Animation Section */}
          <div className="flex justify-center items-center">
            <Orbit />
          </div>

          {/* Skills Blocks */}
          <div
            ref={blocksRef}
            className="flex flex-wrap gap-4 justify-end mt-6 md:mt-0"
          >
            {/* Languages */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 rounded-lg shadow-md p-2">
              <h2 className="font-bold text-white border-b border-gray-600 mb-1">
                Languages
              </h2>
              <p className="text-sm text-gray-400">JavaScript, TypeScript</p>
            </div>

            {/* Frontend */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 rounded-lg shadow-md p-2">
              <h2 className="font-bold text-white border-b border-[#C778DD] mb-1">
                Frontend
              </h2>
              <p className="text-sm text-gray-400">
                Nextjs, React.js, Redux, RTK Query, Tailwind
                CSS, GSAP, Firebase
              </p>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 rounded-lg shadow-md p-2">
              <h2 className="font-bold text-white border-b border-gray-600 mb-1">
                Backend
              </h2>
              <p className="text-sm text-gray-400">
                Node.js, Express.js, Mongoose
              </p>
            </div>

            {/* Databases */}
            <div className="bg-slate-800 border-0 rounded-lg shadow-md p-2">
              <h2 className="font-bold text-white border-b border-gray-600 mb-1">
                Databases
              </h2>
              <p className="text-sm text-gray-400">MongoDB</p>
            </div>

            {/* Tools */}
            <div className="bg-slate-800 border-0 rounded-lg shadow-md p-2">
              <h2 className="font-bold text-white border-b border-gray-600 mb-1">
                Tools
              </h2>
              <p className="text-sm text-gray-400">VSCode, Figma, Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
