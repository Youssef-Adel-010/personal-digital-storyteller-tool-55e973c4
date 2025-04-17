
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const Index = () => {
  // Initialize scroll animations
  useAnimateOnScroll();
  
  // Set page title
  useEffect(() => {
    document.title = 'Youssef Adel | Backend Developer';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
