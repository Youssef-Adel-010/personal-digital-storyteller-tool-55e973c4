
import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clean up any existing particles
    container.innerHTML = '';
    
    // Create particles
    const particleCount = 20;
    
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
      
      container.appendChild(particle);
    }
  }, []);
  
  return <div ref={containerRef} className="particles" />;
};

export default ParticlesBackground;
