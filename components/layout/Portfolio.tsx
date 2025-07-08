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
  const { data: projects, isLoading, isError, error, refetch } = useGetAllProjectQuery(undefined);

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
      className="py-16 relative bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-5 md:mb-16 lg:mb-10">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl lg:text-4xl font-bold md:mb-2"
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
  className="project-card group relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md dark:bg-slate-900"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Content */}
              <div className="px-5 space-y-2">
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground truncate">
                  {project.title}
                </h3>
                {/* Subtitle */}
                <span className="block text-xs text-primary font-semibold tracking-widest">
                  {project.subTitle}
                </span>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technology.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-md bg-muted text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex items-center px-4 h-9 text-xs">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center px-4 h-9 text-xs">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center px-4 h-9 text-xs">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
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