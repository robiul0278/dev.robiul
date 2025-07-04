"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { TProjectForm } from '@/types/types';
import { useGetAllProjectQuery } from '@/redux/api/api';
import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';
import NoData from '../shared/NoData';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const {data:projects,isLoading,isError,error,refetch}=useGetAllProjectQuery(undefined);

console.log(projects);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Project cards animation
      gsap.fromTo('.project-card',
        {
          opacity: 0,
          y: 60,
          rotateX: 15,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations
      document.querySelectorAll('.project-card').forEach((card) => {
        const image = card.querySelector('.project-image');
        const overlay = card.querySelector('.project-overlay');
        const content = card.querySelector('.project-content');

        card.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 1.1, duration: 0.6, ease: "power2.out" });
          gsap.to(overlay, { opacity: 0.9, duration: 0.3 });
          gsap.to(content, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.6, ease: "power2.out" });
          gsap.to(overlay, { opacity: 0.7, duration: 0.3 });
          gsap.to(content, { y: 20, opacity: 0.8, duration: 0.4, ease: "power2.out" });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);


  if (isLoading) return <Loader />;
 if (isError) return <ErrorMessage error={error} onRetry={() => refetch()} />;
 if (!projects?.data || projects.data.length === 0) {
  return <NoData onRetry={() => refetch()} />;
}



  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-5 md:mb-16 lg:mb-16">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl lg:text-4xl font-bold md:mb-6 lg:mb-6"
          >
            My <span className="text-gray-500 dark:text-gray-400">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto">
            Showcasing my latest projects and details!
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:p-0 lg:p-0"
        >
          {projects?.data.map((project: TProjectForm, index: string) => (
            <Card
              key={index}
              className="project-card group relative overflow-hidden border border-gray-200 dark:border-0 shadow pb-5 pt-0 bg-gray-50 dark:bg-slate-800"
            >
              <div className="relative h-74 rounded-2xl overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-700"
                />

                {/* Overlay */}
                <div
                  className={`project-overlay absolute inset-0 bg-gradient-to-br ${project.color} opacity-70 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="project-content absolute inset-0 p-6 flex flex-col justify-end transform translate-y-5 opacity-90 transition-all duration-400">
                  <h3 className="text-xl font-bold mb-2 text-white dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 text-white/90 dark:text-white/80">
                    {project.subTitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technology.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/20 dark:bg-white/20 rounded-lg text-xs font-medium backdrop-blur-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mb-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/40 bg-white/10 dark:bg-transparent text-white hover:bg-white/20 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/40 bg-white/10 dark:bg-transparent text-white hover:bg-white/20 cursor-pointer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Portfolio;