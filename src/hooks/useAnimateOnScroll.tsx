
import { useEffect } from 'react';

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Add staggered animation delay based on index
          if (entry.isIntersecting) {
            const index = Array.from(elements).indexOf(entry.target);
            const delay = Math.min(index * 0.1, 0.5); // Cap delay at 0.5s
            
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add('is-visible');
            
            // Remove the delay after animation completes to prevent issues with subsequent animations
            setTimeout(() => {
              entry.target.style.transitionDelay = '0s';
            }, 1000 + delay * 1000);
            
            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });
      
      elements.forEach(element => {
        observer.observe(element);
      });
      
      return () => {
        elements.forEach(element => {
          observer.unobserve(element);
        });
      };
    };
    
    // Call once on mount
    animateElements();
    
    // Rerun when new elements might be added to the DOM
    window.addEventListener('load', animateElements);
    
    // Also run on page resize events
    window.addEventListener('resize', animateElements);
    
    return () => {
      window.removeEventListener('load', animateElements);
      window.removeEventListener('resize', animateElements);
    };
  }, []);
};

export default useAnimateOnScroll;
