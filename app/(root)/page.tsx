"use client";

import Contact from '@/components/layout/Contact';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/layout/Hero';
import Navbar from '@/components/layout/Navbar';
import Portfolio from '@/components/layout/Portfolio';
import Skills from '@/components/layout/Skills';
import { useEffect } from 'react';



export default function Home() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    const lenis = {
      scroll: (e: WheelEvent) => {
        e.preventDefault();
         const speedMultiplier = 2.5;
        const delta = e.deltaY * speedMultiplier;
        window.scrollBy({
          top: delta,
          behavior: 'smooth'
        });
      }
    };

    // Add smooth scrolling behavior
    document.addEventListener('wheel', lenis.scroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', lenis.scroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}