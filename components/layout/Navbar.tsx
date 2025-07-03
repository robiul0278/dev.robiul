"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Menu, X, Code } from 'lucide-react';
import { ModeToggle } from '../themes/ModeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([logoRef.current, '.nav-item', '.nav-button'], { opacity: 0, y: -20 });

      const tl = gsap.timeline({ delay: 0.5 });
      tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to('.nav-item', { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power3.out" }, "-=0.3")
        .to('.nav-button', { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, "-=0.2");
    }, navRef);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo('.mobile-nav-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, delay: 0.1, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md shadow-lg bg-white/70 dark:bg-black/70'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-black dark:bg-white">
              <Code className="w-6 h-6 text-white dark:text-black" />
            </div>
            <span className="text-2xl font-bold text-black dark:text-white">dev.robiul</span>
          </div>

          {/* Desktop Navigation */}
          <div ref={menuRef} className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="nav-item font-medium cursor-pointer transition-colors duration-300 text-black hover:text-gray-700 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <ModeToggle />

            {/* CTA Button */}
            <Button
              className="nav-button hidden md:block bg-black text-white dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-500 dark:text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
               onClick={() => window.open("https://drive.google.com/file/d/1CAFJ2bK8N8ChI_YL44ml4oo506l4ACaM/view?usp=drive_link", "_blank")}
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden mt-4 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="mobile-nav-item font-medium text-left py-2 cursor-pointer text-black hover:text-gray-700 dark:text-slate-300 dark:hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-black text-white py-3 rounded-full hover:scale-105 transition-all duration-300 mt-4 cursor-pointer dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-500 dark:text-white"
                 onClick={() => window.open("https://drive.google.com/file/d/1CAFJ2bK8N8ChI_YL44ml4oo506l4ACaM/view?usp=drive_link", "_blank")}
              >
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
