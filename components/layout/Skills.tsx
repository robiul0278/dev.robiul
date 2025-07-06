"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orbit from "./Orbit";
import { Code, Layout, Server, Database, Settings } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  const skillBlocks = [
    {
      title: "Languages",
      content: "JavaScript, TypeScript",
      icon: <Code className="w-5 h-5 text-purple-500 dark:text-purple-300" />,
    },
    {
      title: "Frontend",
      content: "Nextjs, React.js, Tailwind CSS, Redux, RTK Query, Axios, GSAP, Framer motion, Firebase",
      icon: <Layout className="w-5 h-5 text-blue-500 dark:text-blue-300" />,
    },
    {
      title: "Backend",
      content: "Node.js, Express.js, Mongoose",
      icon: <Server className="w-5 h-5 text-green-500 dark:text-green-300" />,
    },
    {
      title: "Databases",
      content: "MongoDB",
      icon: <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-300" />,
    },
    {
      title: "Tools",
      content: "VSCode, Figma, Git",
      icon: <Settings className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title when it enters viewport
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate each skill block when they enter viewport
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
            delay: 0.1,
            scrollTrigger: {
              trigger: blocksRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-14 bg-white dark:bg-transparent text-gray-900 dark:text-white"
    >

        {/* Background Blobs */}
  <div className="absolute inset-0">
    {/* Dark Mode Blobs */}
    <div className="hidden dark:block">
      {/* <div className="absolute top-16 left-16 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl" /> */}
      {/* <div className="absolute bottom-24 right-24 w-96 h-96 bg-green-700/20 rounded-full blur-3xl" /> */}
      {/* <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-green-700/10 via-cyan-700/10 to-blue-700/10 rounded-full blur-3xl" /> */}
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl" />
    </div>

    {/* Light Mode Blobs */}
    <div className="block dark:hidden">
      {/* <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" /> */}
      {/* <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" /> */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-200/30 via-blue-200/30 to-blue-200/30 rounded-full blur-3xl" />
      {/* <div className="absolute bottom-32 right-1/4 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl" /> */}
    </div>
  </div>
      <div className="max-w-7xl mx-auto relative p-5 lg:p-0">
        {/* Title */}
        <div
          ref={titleRef}
          className="flex items-center justify-between text-[26px] lg:text-[32px]"
        >
          <div className="flex items-center">
            <span className="text-[#C778DD] font-semibold mr-1">#</span>
            <h2 className="font-bold whitespace-nowrap">skills</h2>
            <hr className="flex-grow ml-3 border-t w-32 lg:w-[240px] border-gray-300 dark:border-white/30" />
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
            {skillBlocks.map((block, idx) => (
              <div
                key={idx}
                className="rounded-lg shadow p-4 w-full sm:w-[45%] bg-gray-100 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
              >
                <div className="flex items-center gap-2 mb-2">
                  {block.icon}
                  <h2 className="font-bold border-b border-gray-400 dark:border-gray-600 pb-1">
                    {block.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {block.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
