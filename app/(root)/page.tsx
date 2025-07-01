"use client";

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SkillsCarousel from '../components/Skills';


export default function Home() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    const lenis = {
      scroll: (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY;
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
        <SkillsCarousel />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}