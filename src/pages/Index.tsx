
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Projects from '@/components/Projects'; // Commented out as requested
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  // Initialize scroll animations
  useAnimateOnScroll();
  const { theme } = useTheme();
  
  // Set page title
  useEffect(() => {
    document.title = 'Youssef Adel | Backend Developer';
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-blue-gradient' : 'bg-light-gradient'}`}>
      <ParticlesBackground />
      <Navbar />
      <div className="page-transition">
        <Hero />
        <About />
        {/* Projects section commented out as requested */}
        {/* <Projects /> */}
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
