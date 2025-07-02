"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features and seamless user experience.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Healthcare Dashboard",
    description: "Comprehensive healthcare management system with real-time analytics.",
    image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Financial App",
    description: "Secure financial management application with advanced reporting features.",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React Native", "Express", "MySQL", "Chart.js"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Social Media Platform",
    description: "Next-generation social networking platform with real-time messaging.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "GraphQL", "Redis", "WebSocket"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Learning Management System",
    description: "Comprehensive LMS with interactive content and progress tracking.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Angular", "Django", "PostgreSQL", "WebRTC"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "IoT Dashboard",
    description: "Real-time IoT device monitoring and control dashboard.",
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "MQTT", "InfluxDB", "Grafana"],
    color: "from-green-500 to-emerald-500"
  }
];

const Portfolio = () => {
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
  }, []);

  return (
<section
  id="projects"
  ref={sectionRef}
  className="relative py-16 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <div className="text-center mb-16">
      <h2
        ref={titleRef}
        className="text-2xl md:text-4xl lg:text-4xl font-bold mb-6"
      >
        My <span className="text-gray-500 dark:text-gray-400">Portfolio</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto">
        Showcasing my latest projects and details!
      </p>
    </div>

    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {projects.map((project, index) => (
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
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
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
                  className="border-white/40 bg-white/10 dark:bg-transparent text-white hover:bg-white/20"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/40 bg-white/10 dark:bg-transparent text-white hover:bg-white/20"
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