"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowRight,
  MapPin,
  Code,
  Zap
} from 'lucide-react'
import Image from 'next/image'
import { FaJs } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const skills = [
    { name: 'React', icon: Code },
    { name: 'TypeScript', icon: Code },
    { name: 'Next.js', icon: Zap },
    { name: 'Node.js', icon: Code },
    { name: 'MongoDB', icon: Code }
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  return (
    <div className="min-h-screen flex items-center justify-cente bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6">
            {/* Left Content */}
            <div className={`lg:space-y-2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Badge variant="secondary" className="text-sm font-medium">
                  Available for work
                </Badge>
              </div>

              {/* Main Heading */}
              <div className="">
                <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent leading-tight uppercase">
                  Robiul Hasan
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-slate-600 dark:text-slate-300">
                  Full-Stack Developer
                </h2>
              </div>

              {/* Description */}
              <p className="lg:text-lg text-sm py-2 text-slate-600 dark:text-slate-400 lg:leading-relaxed max-w-lg">
                I love the world of technology, which inspired me to become a fullstack web developer. I dream of turning my passion into a successful profession.
              </p>

              {/* Location */}
              <div className="flex pb-2 items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Naogaon, Bangladesh</span>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <skill.icon className="w-3 h-3 mr-1" />
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 lg:pt-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => window.open("https://drive.google.com/file/d/1CAFJ2bK8N8ChI_YL44ml4oo506l4ACaM/view?usp=drive_link", "_blank")}
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div
              className={`relative justify-self-end transition-all duration-1000 delay-300 lg:pr-10 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="relative mx-auto w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border-[2px] border-slate-200 dark:border-slate-700 animate-spin-slow opacity-20"></div>
                <div
                  className="absolute inset-[4%] rounded-full border-[2px] border-slate-300 dark:border-slate-600 animate-spin-slow opacity-30"
                  style={{ animationDirection: 'reverse', animationDuration: '20s' }}
                ></div>

                {/* Profile Image Container */}
                <div className="absolute inset-[12%] rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt=""
                      width={300}
                      height={300}
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: '0.5s' }}
                >
                  <FaJs className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute lg:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}