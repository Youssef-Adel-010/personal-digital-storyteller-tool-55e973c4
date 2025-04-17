
import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clean up any existing particles
    container.innerHTML = '';
    
    // Create particles
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 3px and 6px
      const size = Math.random() * 3 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Random animation delay
      const delay = Math.random() * 10;
      particle.style.animationDelay = `${delay}s`;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;
      particle.style.opacity = opacity.toString();
      
      // Theme-based particle color
      if (theme === 'dark') {
        particle.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'; // Blue for dark mode
      } else {
        particle.style.backgroundColor = 'rgba(37, 99, 235, 0.15)'; // Slightly darker blue for light mode
      }
      
      // Random animation duration
      const duration = Math.random() * 10 + 15;
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
    }
  }, [theme]);
  
  return <div ref={containerRef} className="particles" />;
};

export default ParticlesBackground;
