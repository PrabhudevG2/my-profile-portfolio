
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-resume-light">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
