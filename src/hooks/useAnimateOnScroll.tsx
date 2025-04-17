
import { useEffect } from 'react';

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
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
    
    return () => {
      window.removeEventListener('load', animateElements);
    };
  }, []);
};

export default useAnimateOnScroll;
