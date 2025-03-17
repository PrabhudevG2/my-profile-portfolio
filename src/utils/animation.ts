
import { useEffect, useState } from 'react';

export function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return isVisible;
}

export interface RevealProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function useReveal() {
  const [revealed, setRevealed] = useState<string[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setRevealed((prev) => [...prev, entry.target.id]);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    const elements = document.querySelectorAll('[data-reveal="true"]');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return { revealed };
}
