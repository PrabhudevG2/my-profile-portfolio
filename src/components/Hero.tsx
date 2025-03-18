
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const moveFactor = 15; // The higher, the more movement
      
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * moveFactor}deg) rotateX(${-y * moveFactor}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      containerRef.current.style.transition = 'all 0.5s ease-out';
    };
    
    const handleMouseEnter = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transition = 'all 0.1s ease-out';
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseenter', handleMouseEnter);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);
  
  const skills = [
    'AI Lead', 'ML Expert', 'Data Scientist', 'Neural Networks', 'Deep Learning'
  ];
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10" style={{ "--section-index": "0" } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h1 className="opacity-0 animate-fade-in text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Prabhudev Guntur
              </h1>
              <h2 className="opacity-0 animate-fade-in text-2xl sm:text-3xl md:text-4xl font-display font-medium tracking-tight text-resume-accent" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Experienced AI Lead & ML Engineer
              </h2>
              <p className="opacity-0 animate-fade-in text-resume-muted md:text-xl max-w-xl mt-4" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Specializing in LLMs, RAG, NLP, Computer Vision, and Deep Learning solutions
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
                    "bg-resume-accent/10 text-resume-accent"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <a 
                href="https://github.com/PrabhudevG2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-full p-2 text-resume-dark hover:text-resume-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/prabhudev-guntur-65444489/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-full p-2 text-resume-dark hover:text-resume-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:gunturpx2020@email.iimcal.ac.in" 
                className="inline-flex items-center justify-center rounded-full p-2 text-resume-dark hover:text-resume-accent transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <div className="pt-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <a 
                href="#experience" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors bg-resume-accent text-white hover:bg-resume-accent/90"
              >
                View Experience
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div 
              ref={containerRef}
              className="relative p-8 rounded-2xl glass card-hover shadow-lg"
              style={{ transformStyle: 'preserve-3d', transition: 'all 0.5s ease-out' }}
            >
              <div className="space-y-6" style={{ transform: 'translateZ(30px)' }}>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Tech Stack</h2>
                  <p className="text-resume-muted text-sm">Languages & Tools</p>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'SQL', 'FastAPI', 'Django'].map((lang, i) => (
                      <span key={i} className="bg-resume-light px-3 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Azure', 'PyTorch', 'TensorFlow', 'Docker', 'Kubernetes'].map((tool, i) => (
                      <span key={i} className="bg-resume-light px-3 py-1 rounded-full text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-resume-muted/20" />
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Current Position</h3>
                  <p className="text-sm">
                    <span className="font-medium">AI Lead</span>
                    <span className="text-resume-muted"> • Centific Global Tech</span>
                  </p>
                  <p className="text-xs text-resume-muted">April 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
