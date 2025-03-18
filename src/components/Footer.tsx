
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-resume-dark text-white relative overflow-hidden">
      {/* Heart-shaped gradient background */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-blue-500 opacity-10 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <h2 className="text-2xl font-display font-semibold mb-4">Get in Touch</h2>
            <p className="text-resume-muted max-w-md">
              Always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="md:col-span-6">
            <div className="flex flex-col md:items-end">
              <div className="space-y-2">
                <p className="text-sm text-resume-muted">Connect with me</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/prabhudev-guntur-65444489/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-resume-muted hover:text-white transition-colors" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/PrabhudevG2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-resume-muted hover:text-white transition-colors" 
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="mailto:gunturpx2020@email.iimcal.ac.in" 
                    className="text-resume-muted hover:text-white transition-colors" 
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-resume-muted/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-resume-muted">© {currentYear} Prabhudev Guntur • All Rights Reserved</p>
          <p className="text-sm text-resume-muted mt-2 md:mt-0">
            Made with love for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
