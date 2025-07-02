"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Database,
  Terminal,
} from "lucide-react";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiAxios,
  SiFramer,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGit,
} from "react-icons/si";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

    const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set(".floating-element", {
        opacity: 0,
        scale: 0,
      });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          ".floating-element",
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      gsap.to(".floating-1", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".floating-2", {
        y: -15,
        x: 10,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

      gsap.to(".floating-3", {
        y: -25,
        x: -5,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
<section
  ref={heroRef}
  className={`
    relative min-h-screen flex items-center justify-center overflow-hidden
    bg-white
    dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
    transition-colors duration-500
  `}
>
  {/* Background Blobs */}
  <div className="absolute inset-0">
    {/* Dark Mode Blobs */}
    <div className="hidden dark:block">
      <div className="absolute top-16 left-16 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-24 right-24 w-96 h-96 bg-green-700/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-green-700/10 via-cyan-700/10 to-blue-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl" />
    </div>

    {/* Light Mode Blobs */}
    <div className="block dark:hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-gradient-to-br from-pink-200/30 via-rose-200/30 to-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-1/4 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl" />
    </div>
  </div>

  {/* Floating Tech Icons */}
  <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
    {/* Dark Mode Icons */}
    <div className="hidden dark:flex absolute top-1/4 left-1/4 glass rounded-2xl p-4 text-cyan-400">
      <SiJavascript className="w-8 h-8" />
    </div>
    <div className="hidden dark:flex absolute top-1/3 right-1/4 glass rounded-2xl p-4 text-green-400">
      <SiReact className="w-8 h-8" />
    </div>
    <div className="hidden dark:flex absolute bottom-1/4 left-1/3 glass rounded-2xl p-4 text-blue-400">
      <SiNextdotjs className="w-8 h-8" />
    </div>
    <div className="hidden dark:flex absolute bottom-1/3 right-1/3 glass rounded-2xl p-4 text-purple-400">
      <SiTailwindcss className="w-8 h-8" />
    </div>
    <div className="hidden dark:flex absolute top-1/2 left-1/5 glass rounded-2xl p-4 text-slate-200">
      <SiTypescript className="w-8 h-8" />
    </div>

    {/* Light Mode Icons */}
    <div className="flex dark:hidden absolute top-1/4 left-1/4 glass rounded-2xl p-4 text-pink-500">
      <SiNodedotjs className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute top-1/3 right-1/4 glass rounded-2xl p-4 text-indigo-500">
      <SiExpress className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute bottom-1/4 left-1/3 glass rounded-2xl p-4 text-purple-500">
      <SiMongodb className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute bottom-1/3 right-1/3 glass rounded-2xl p-4 text-sky-400">
      <Terminal className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute top-1/2 left-1/5 glass rounded-2xl p-4 text-yellow-500">
      <SiFigma className="w-8 h-8" />
    </div>
    {/* Extra light mode icons */}
    <div className="flex dark:hidden absolute top-1/6 right-1/6 glass rounded-2xl p-4 text-rose-500">
      <SiGit className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute bottom-1/6 left-1/6 glass rounded-2xl p-4 text-green-500">
      <Database className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute bottom-1/8 right-1/8 glass rounded-2xl p-4 text-pink-600">
      <SiFramer className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute top-1/4 right-1/3 glass rounded-2xl p-4 text-cyan-500">
      <SiAxios className="w-8 h-8" />
    </div>
    <div className="flex dark:hidden absolute top-1/3 left-1/5 glass rounded-2xl p-4 text-yellow-400">
      <SiFirebase className="w-8 h-8" />
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
    <h1
      ref={titleRef}
      className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
    >
      <span className="text-gray-900 dark:text-cyan-400 transition-colors duration-500">MERN</span>
      <br />
      <span className="text-gray-700 dark:text-green-300 transition-colors duration-500">Full Stack Developer</span>
    </h1>

    <p
      ref={subtitleRef}
      className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
    >
      Building modern, scalable web applications with MongoDB, Express, React, and Node.js.
      Clean code. Pixel-perfect UI. Blazing performance.
    </p>

    <div
      ref={buttonsRef}
      className="flex flex-col sm:flex-row gap-6 justify-center items-center"
    >
      <Button
        variant="outline"
        size="lg"
        className="glass border-gray-400 dark:border-cyan-400 text-gray-900 dark:text-cyan-300 px-8 py-4 text-lg font-semibold rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-cyan-600 transition-all duration-300 cursor-pointer"
        onClick={() => handleNavClick('#contact')}
      >
        Hire Me
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-gray-500 dark:border-cyan-400 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-gray-700 dark:bg-cyan-300 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
</section>

  );
}


export default Hero;