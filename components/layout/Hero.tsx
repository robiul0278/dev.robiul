"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Database,
  Server,
  Code2,
  Terminal,
} from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
        bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Dark mode blobs */}
        <div className="hidden dark:block">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-full blur-3xl" />
        </div>

        {/* Light mode blobs */}
        <div className="block dark:hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-pink-100/20 to-indigo-100/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-element floating-1 absolute top-1/4 left-1/4 glass rounded-2xl p-4">
          <Code2 className="w-8 h-8 text-yellow-400 dark:text-yellow-300" />
        </div>
        <div className="floating-element floating-2 absolute top-1/3 right-1/4 glass rounded-2xl p-4">
          <Server className="w-8 h-8 text-green-500 dark:text-green-400" />
        </div>
        <div className="floating-element floating-3 absolute bottom-1/4 left-1/3 glass rounded-2xl p-4">
          <Database className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
        </div>
        <div className="floating-element floating-2 absolute bottom-1/3 right-1/3 glass rounded-2xl p-4">
          <Globe className="w-8 h-8 text-sky-500 dark:text-sky-400" />
        </div>
        <div className="floating-element floating-1 absolute top-1/2 left-1/5 glass rounded-2xl p-4">
          <Terminal className="w-8 h-8 text-slate-700 dark:text-white/80" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-gray-800 dark:text-slate-300">MERN</span>
          <br />
          <span className="text-gray-600 dark:text-slate-400">Full Stack Developer</span>
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
            className="glass border-gray-300 dark:border-white/20 text-gray-800 dark:text-white px-8 py-4 text-lg font-semibold rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-white/60 transition-all duration-300 cursor-pointer"
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}


export default Hero;