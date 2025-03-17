
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <a 
            href="#hero" 
            className="text-resume-dark font-display text-xl font-medium tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Resume
          </a>
        </div>
        
        <ul className="hidden md:flex items-center gap-8">
          {[
            { name: 'Experience', id: 'experience' },
            { name: 'Education', id: 'education' },
            { name: 'Skills', id: 'skills' },
            { name: 'Awards', id: 'awards' },
          ].map((item, index) => (
            <li 
              key={item.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <button 
                onClick={() => scrollToSection(item.id)}
                className="animated-link text-sm font-medium"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        
        <button 
          className="opacity-0 animate-fade-in md:hidden"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
